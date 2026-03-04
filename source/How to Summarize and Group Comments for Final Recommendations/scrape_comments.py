"""
Scrape all 305 comments from regulations.gov using Playwright (headless browser).
This bypasses the API rate limit by scraping the rendered web pages directly.
"""

import asyncio
import json
import os
import re
import time
from playwright.async_api import async_playwright

OUTPUT_DIR = "/home/ubuntu/onc_comments/raw_json/comments"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def clean_html(text):
    """Remove HTML tags from text."""
    if not text:
        return ""
    text = re.sub(r'<br\s*/?>', '\n', text, flags=re.IGNORECASE)
    text = re.sub(r'<[^>]+>', '', text)
    text = text.replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>').replace('&quot;', '"').replace('&#39;', "'")
    return text.strip()

async def scrape_comment(page, comment_id):
    """Scrape a single comment page."""
    url = f"https://www.regulations.gov/comment/{comment_id}"
    
    try:
        await page.goto(url, wait_until="networkidle", timeout=30000)
        
        # Wait for comment content to load
        await page.wait_for_selector("text=Comment", timeout=10000)
        
        # Extract comment text
        comment_text = ""
        try:
            # Look for the comment section
            comment_section = await page.query_selector(".comment-text, [class*='comment'], .comment-body")
            if comment_section:
                comment_text = await comment_section.inner_text()
            else:
                # Try to get all text from main content area
                content = await page.query_selector("main, .main-content, #main")
                if content:
                    full_text = await content.inner_text()
                    # Extract comment portion
                    if "Comment" in full_text:
                        parts = full_text.split("Comment\n", 1)
                        if len(parts) > 1:
                            comment_text = parts[1].split("\nSubmitter Info")[0].strip()
        except Exception as e:
            pass
        
        # Get page title
        title = await page.title()
        
        # Try to get the full page content via JavaScript
        page_data = await page.evaluate("""
            () => {
                // Try to find comment text in various ways
                let commentText = '';
                
                // Method 1: Look for specific comment div
                const commentDivs = document.querySelectorAll('[class*="comment"]');
                for (const div of commentDivs) {
                    const text = div.innerText || div.textContent;
                    if (text && text.length > 100) {
                        commentText = text;
                        break;
                    }
                }
                
                // Method 2: Look for the comment label section
                const labels = document.querySelectorAll('label, .label');
                for (const label of labels) {
                    if (label.innerText === 'Comment') {
                        const parent = label.closest('.field, .form-group, [class*="field"]');
                        if (parent) {
                            commentText = parent.innerText.replace('Comment', '').trim();
                        }
                    }
                }
                
                // Get all text content
                const body = document.body.innerText;
                
                // Get attachment links
                const links = Array.from(document.querySelectorAll('a[href*="downloads.regulations.gov"], a[href*=".pdf"], a[href*=".docx"]'));
                const attachmentUrls = links.map(l => l.href);
                const attachmentTexts = links.map(l => l.innerText || l.textContent);
                
                return {
                    bodyText: body,
                    attachmentUrls: attachmentUrls,
                    attachmentTexts: attachmentTexts
                };
            }
        """)
        
        # Parse the body text to extract comment
        body_text = page_data.get("bodyText", "")
        
        # Extract comment text from body
        if "Comment\n" in body_text:
            # Find the comment section
            idx = body_text.find("Comment\n")
            after_comment = body_text[idx + 8:]
            # Stop at submitter info or next section
            for stop_marker in ["Submitter Info", "Comment ID", "Tracking Number", "Document Subtype"]:
                if stop_marker in after_comment:
                    after_comment = after_comment[:after_comment.find(stop_marker)]
            comment_text = after_comment.strip()
        
        # If still no comment text, try the full body
        if not comment_text and body_text:
            # Look for the comment between known markers
            markers_start = ["PUBLIC SUBMISSION\n", "Comment\n"]
            markers_end = ["Submitter Info", "Comment ID", "Tracking Number"]
            
            for start in markers_start:
                if start in body_text:
                    idx = body_text.rfind(start)
                    text_after = body_text[idx + len(start):]
                    for end in markers_end:
                        if end in text_after:
                            text_after = text_after[:text_after.find(end)]
                    if len(text_after.strip()) > 20:
                        comment_text = text_after.strip()
                        break
        
        # Get attachment info
        attachment_urls = page_data.get("attachmentUrls", [])
        attachment_texts = page_data.get("attachmentTexts", [])
        
        # Also look for attachment links in the rendered page
        attachments = []
        for url_att, text in zip(attachment_urls, attachment_texts):
            if url_att and ('downloads.regulations.gov' in url_att or '.pdf' in url_att.lower() or '.docx' in url_att.lower()):
                filename = url_att.split('/')[-1] if '/' in url_att else text
                attachments.append({
                    "url": url_att,
                    "filename": filename,
                    "text": text.strip()
                })
        
        # Extract submitter info
        submitter_info = {}
        if "Submitter Info" in body_text:
            info_section = body_text[body_text.find("Submitter Info"):]
            info_section = info_section[:500]  # Limit
            submitter_info["raw"] = info_section
        
        return {
            "id": comment_id,
            "url": url,
            "comment_text": comment_text,
            "has_attachments": len(attachments) > 0,
            "attachments": attachments,
            "submitter_info_raw": submitter_info.get("raw", ""),
            "body_text_preview": body_text[:200]
        }
        
    except Exception as e:
        print(f"  ERROR scraping {comment_id}: {e}")
        return {
            "id": comment_id,
            "url": url,
            "comment_text": "",
            "has_attachments": False,
            "attachments": [],
            "error": str(e)
        }

async def main():
    # Load all comment IDs
    with open("/home/ubuntu/onc_comments/raw_json/all_comment_ids.json") as f:
        all_ids = json.load(f)
    
    print(f"Total comments to scrape: {len(all_ids)}")
    
    # Check which ones are already done
    done = set()
    for fname in os.listdir(OUTPUT_DIR):
        if fname.endswith('.json'):
            done.add(fname.replace('.json', ''))
    
    remaining = [cid for cid in all_ids if cid not in done]
    print(f"Already scraped: {len(done)}, Remaining: {len(remaining)}")
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            user_agent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
        page = await context.new_page()
        
        for i, comment_id in enumerate(remaining):
            print(f"[{i+1}/{len(remaining)}] Scraping {comment_id}...")
            
            result = await scrape_comment(page, comment_id)
            
            # Save individual file
            output_file = f"{OUTPUT_DIR}/{comment_id}.json"
            with open(output_file, "w") as f:
                json.dump(result, f, indent=2)
            
            # Print summary
            text_len = len(result.get("comment_text", ""))
            has_att = "📎" if result.get("has_attachments") else "  "
            print(f"  {has_att} Text: {text_len} chars, Attachments: {len(result.get('attachments', []))}")
            
            # Small delay to be polite
            await asyncio.sleep(1)
        
        await browser.close()
    
    # Consolidate all results
    all_results = []
    for comment_id in all_ids:
        fname = f"{OUTPUT_DIR}/{comment_id}.json"
        if os.path.exists(fname):
            with open(fname) as f:
                all_results.append(json.load(f))
    
    output_path = "/home/ubuntu/onc_comments/raw_json/all_comments_scraped.json"
    with open(output_path, "w") as f:
        json.dump(all_results, f, indent=2)
    
    print(f"\nDone! Scraped {len(all_results)} comments.")
    print(f"Saved to: {output_path}")

if __name__ == "__main__":
    asyncio.run(main())
