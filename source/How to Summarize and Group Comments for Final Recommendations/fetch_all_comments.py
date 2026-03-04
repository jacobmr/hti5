"""
Fetch all 305 comments for HHS-ONC-2025-0005 from regulations.gov API.
Uses DEMO_KEY with rate limit handling (10 req/hour = 1 req/6 min).
Saves each comment individually so we can resume if interrupted.
"""

import requests
import json
import time
import os
import re
from datetime import datetime

API_KEY = "DEMO_KEY"
BASE_URL = "https://api.regulations.gov/v4"
OUTPUT_DIR = "/home/ubuntu/onc_comments/raw_json/comments"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def clean_html(text):
    """Remove HTML tags from comment text."""
    if not text:
        return ""
    # Replace <br/> with newlines
    text = re.sub(r'<br\s*/?>', '\n', text, flags=re.IGNORECASE)
    # Remove remaining HTML tags
    text = re.sub(r'<[^>]+>', '', text)
    # Decode HTML entities
    text = text.replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>').replace('&quot;', '"').replace('&#39;', "'")
    return text.strip()

def fetch_comment_detail(comment_id, session):
    """Fetch detailed info for a single comment including attachments."""
    url = f"{BASE_URL}/comments/{comment_id}"
    params = {
        "include": "attachments",
        "api_key": API_KEY
    }
    
    while True:
        resp = session.get(url, params=params, timeout=30)
        remaining = int(resp.headers.get('X-Ratelimit-Remaining', 10))
        
        if resp.status_code == 429:
            print(f"  Rate limited! Waiting 70 seconds...")
            time.sleep(70)
            continue
        elif resp.status_code == 200:
            # Check if we're running low on rate limit
            if remaining <= 1:
                print(f"  Rate limit nearly exhausted ({remaining} remaining). Waiting 65 seconds...")
                time.sleep(65)
            return resp.json(), remaining
        else:
            print(f"  Error {resp.status_code} for {comment_id}: {resp.text[:200]}")
            return None, remaining

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
            for fmt in file_formats:
                attachments.append({
                    "filename": fmt.get("filename", ""),
                    "url": fmt.get("fileUrl", ""),
                    "format": fmt.get("format", "")
                })
    
    # Clean comment text
    raw_comment = attrs.get("comment", "") or ""
    clean_comment = clean_html(raw_comment)
    
    return {
        "id": data.get("id", ""),
        "title": attrs.get("title", ""),
        "commenter_first": attrs.get("firstName", ""),
        "commenter_last": attrs.get("lastName", ""),
        "organization": attrs.get("organization", ""),
        "gov_agency": attrs.get("govAgency", ""),
        "gov_agency_type": attrs.get("govAgencyType", ""),
        "city": attrs.get("city", ""),
        "state": attrs.get("stateProvinceRegion", ""),
        "country": attrs.get("country", ""),
        "posted_date": attrs.get("postedDate", ""),
        "received_date": attrs.get("receiveDate", ""),
        "page_count": attrs.get("pageCount", 0),
        "comment_text": clean_comment,
        "has_attachments": len(attachments) > 0,
        "attachments": attachments,
        "doc_abstract": attrs.get("docAbstract", "") or ""
    }

def main():
    # Load all comment IDs
    with open("/home/ubuntu/onc_comments/raw_json/all_comment_ids.json") as f:
        all_ids = json.load(f)
    
    print(f"Total comments to fetch: {len(all_ids)}")
    print(f"Already fetched: {len(os.listdir(OUTPUT_DIR))}")
    
    session = requests.Session()
    session.headers.update({
        "User-Agent": "Mozilla/5.0 Research Tool",
        "Accept": "application/vnd.api+json"
    })
    
    processed = []
    errors = []
    
    for i, comment_id in enumerate(all_ids):
        output_file = f"{OUTPUT_DIR}/{comment_id}.json"
        
        if os.path.exists(output_file):
            # Load cached version
            with open(output_file) as f:
                comment = json.load(f)
            processed.append(comment)
            print(f"[{i+1}/{len(all_ids)}] {comment_id} - CACHED")
            continue
        
        print(f"[{i+1}/{len(all_ids)}] Fetching {comment_id}...")
        
        raw_data, remaining = fetch_comment_detail(comment_id, session)
        
        if raw_data:
            comment = process_comment(raw_data)
            if comment:
                with open(output_file, "w") as f:
                    json.dump(comment, f, indent=2)
                processed.append(comment)
                
                has_att = "📎" if comment["has_attachments"] else "  "
                org = comment["organization"] or f"{comment['commenter_first']} {comment['commenter_last']}"
                print(f"  {has_att} {org[:50]} | {len(comment['comment_text'])} chars | Rate limit: {remaining}")
        else:
            errors.append(comment_id)
            print(f"  ERROR: Could not fetch {comment_id}")
        
        # Rate limit: DEMO_KEY allows 10/hour. Sleep between requests.
        # After each successful fetch, wait to avoid hitting limit
        time.sleep(6.5)  # ~9 requests per minute = safe margin
    
    # Save consolidated output
    output_path = "/home/ubuntu/onc_comments/raw_json/all_comments_processed.json"
    with open(output_path, "w") as f:
        json.dump(processed, f, indent=2)
    
    print(f"\n=== DONE ===")
    print(f"Processed: {len(processed)}")
    print(f"Errors: {len(errors)}")
    if errors:
        print(f"Error IDs: {errors}")
    print(f"Saved to: {output_path}")

if __name__ == "__main__":
    main()
