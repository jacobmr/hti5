"""
Fetch all 305 comments for HHS-ONC-2025-0005 from regulations.gov API.
Uses registered API key with 1000 req/hour limit.
"""

import requests
import json
import time
import os
import re
from datetime import datetime

API_KEY = "gZaufIlWPwUdAtPJcrpGuONABe6RXUxNRxXgB6Gt"
BASE_URL = "https://api.regulations.gov/v4"
OUTPUT_DIR = "/home/ubuntu/onc_comments/raw_json/comments"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def clean_html(text):
    """Remove HTML tags from comment text."""
    if not text:
        return ""
    text = re.sub(r'<br\s*/?>', '\n', text, flags=re.IGNORECASE)
    text = re.sub(r'<[^>]+>', '', text)
    text = text.replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>').replace('&quot;', '"').replace('&#39;', "'")
    return text.strip()

def fetch_comment_detail(comment_id, session):
    """Fetch detailed info for a single comment including attachments."""
    url = f"{BASE_URL}/comments/{comment_id}"
    params = {
        "include": "attachments",
        "api_key": API_KEY
    }
    
    retries = 0
    while retries < 3:
        try:
            resp = session.get(url, params=params, timeout=30)
            remaining = int(resp.headers.get('X-Ratelimit-Remaining', 1000))
            
            if resp.status_code == 429:
                print(f"  Rate limited! Waiting 70 seconds...")
                time.sleep(70)
                retries += 1
                continue
            elif resp.status_code == 200:
                if remaining <= 10:
                    print(f"  Rate limit low ({remaining} remaining). Waiting 5 seconds...")
                    time.sleep(5)
                return resp.json(), remaining
            else:
                print(f"  Error {resp.status_code} for {comment_id}: {resp.text[:200]}")
                return None, remaining
        except Exception as e:
            print(f"  Exception for {comment_id}: {e}")
            retries += 1
            time.sleep(2)
    
    return None, 0

def process_comment(comment_data):
    """Extract relevant fields from comment API response."""
    if not comment_data:
        return None
    
    data = comment_data.get("data", {})
    attrs = data.get("attributes", {})
    included = comment_data.get("included", [])
    
    # Extract attachment info
    attachments = []
    for item in included:
        if item.get("type") == "attachments":
            att_attrs = item.get("attributes", {})
            file_formats = att_attrs.get("fileFormats", [])
            att_title = att_attrs.get("title", "")
            for fmt in file_formats:
                attachments.append({
                    "title": att_title,
                    "filename": fmt.get("filename", ""),
                    "url": fmt.get("fileUrl", ""),
                    "format": fmt.get("format", "")
                })
    
    # Clean comment text
    raw_comment = attrs.get("comment", "") or ""
    clean_comment = clean_html(raw_comment)
    
    # Determine commenter name
    first = attrs.get("firstName", "") or ""
    last = attrs.get("lastName", "") or ""
    org = attrs.get("organization", "") or ""
    gov_agency = attrs.get("govAgency", "") or ""
    
    if org:
        commenter_name = org
    elif gov_agency:
        commenter_name = gov_agency
    elif first or last:
        commenter_name = f"{first} {last}".strip()
    else:
        commenter_name = "Anonymous"
    
    return {
        "id": data.get("id", ""),
        "title": attrs.get("title", ""),
        "commenter_name": commenter_name,
        "commenter_first": first,
        "commenter_last": last,
        "organization": org,
        "gov_agency": gov_agency,
        "gov_agency_type": attrs.get("govAgencyType", "") or "",
        "city": attrs.get("city", "") or "",
        "state": attrs.get("stateProvinceRegion", "") or "",
        "country": attrs.get("country", "") or "",
        "posted_date": attrs.get("postedDate", ""),
        "received_date": attrs.get("receiveDate", ""),
        "page_count": attrs.get("pageCount", 0) or 0,
        "comment_text": clean_comment,
        "has_attachments": len(attachments) > 0,
        "attachments": attachments,
        "doc_abstract": clean_html(attrs.get("docAbstract", "") or "")
    }

def main():
    # Load all comment IDs
    with open("/home/ubuntu/onc_comments/raw_json/all_comment_ids.json") as f:
        all_ids = json.load(f)
    
    print(f"Total comments to fetch: {len(all_ids)}")
    
    # Check which ones are already done
    done = set()
    for fname in os.listdir(OUTPUT_DIR):
        if fname.endswith('.json'):
            done.add(fname.replace('.json', ''))
    
    remaining_ids = [cid for cid in all_ids if cid not in done]
    print(f"Already fetched: {len(done)}, Remaining: {len(remaining_ids)}")
    
    session = requests.Session()
    session.headers.update({
        "User-Agent": "Research Tool / Public Comment Analysis",
        "Accept": "application/vnd.api+json"
    })
    
    processed = []
    errors = []
    start_time = time.time()
    
    for i, comment_id in enumerate(remaining_ids):
        output_file = f"{OUTPUT_DIR}/{comment_id}.json"
        
        print(f"[{i+1}/{len(remaining_ids)}] Fetching {comment_id}...", end=" ")
        
        raw_data, remaining = fetch_comment_detail(comment_id, session)
        
        if raw_data:
            comment = process_comment(raw_data)
            if comment:
                with open(output_file, "w") as f:
                    json.dump(comment, f, indent=2)
                processed.append(comment)
                
                has_att = "📎" if comment["has_attachments"] else "  "
                name = comment["commenter_name"][:40]
                text_len = len(comment["comment_text"])
                elapsed = time.time() - start_time
                rate = (i + 1) / elapsed * 60 if elapsed > 0 else 0
                eta = (len(remaining_ids) - i - 1) / (rate / 60) / 60 if rate > 0 else 0
                print(f"{has_att} {name} | {text_len}c | RL:{remaining} | {rate:.0f}/min | ETA:{eta:.1f}h")
        else:
            errors.append(comment_id)
            print(f"ERROR")
        
        # Rate limit: 1000/hour = ~16.7/min. Sleep 0.1s between requests for safety.
        time.sleep(0.15)
    
    # Load all cached results too
    all_results = []
    for comment_id in all_ids:
        fname = f"{OUTPUT_DIR}/{comment_id}.json"
        if os.path.exists(fname):
            with open(fname) as f:
                all_results.append(json.load(f))
    
    # Save consolidated output
    output_path = "/home/ubuntu/onc_comments/raw_json/all_comments_processed.json"
    with open(output_path, "w") as f:
        json.dump(all_results, f, indent=2)
    
    elapsed_total = time.time() - start_time
    print(f"\n=== DONE ===")
    print(f"Total processed: {len(all_results)}")
    print(f"New in this run: {len(processed)}")
    print(f"Errors: {len(errors)}")
    print(f"Total time: {elapsed_total/60:.1f} minutes")
    if errors:
        print(f"Error IDs: {errors}")
    print(f"Saved to: {output_path}")
    
    # Print stats
    with_text = sum(1 for c in all_results if len(c.get("comment_text", "")) > 50)
    with_att = sum(1 for c in all_results if c.get("has_attachments"))
    print(f"\nStats:")
    print(f"  Comments with text: {with_text}")
    print(f"  Comments with attachments: {with_att}")
    print(f"  Comments with both: {sum(1 for c in all_results if len(c.get('comment_text','')) > 50 and c.get('has_attachments'))}")

if __name__ == "__main__":
    main()
