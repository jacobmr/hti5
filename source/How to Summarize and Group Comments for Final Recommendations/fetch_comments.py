"""
Fetch all comments for HHS-ONC-2025-0005-0001 from regulations.gov API
and save them locally for processing.
"""

import requests
import json
import time
import os

API_KEY = "DEMO_KEY"
BASE_URL = "https://api.regulations.gov/v4"
DOCUMENT_ID = "HHS-ONC-2025-0005-0001"
OUTPUT_DIR = "/home/ubuntu/onc_comments/raw_json"

def fetch_comments_page(page_num, page_size=25):
    """Fetch a page of comments for the document."""
    url = f"{BASE_URL}/comments"
    params = {
        "filter[commentOnId]": DOCUMENT_ID,
        "page[number]": page_num,
        "page[size]": page_size,
        "sort": "postedDate",
        "api_key": API_KEY
    }
    resp = requests.get(url, params=params, timeout=30)
    if resp.status_code == 429:
        print(f"  Rate limited on page {page_num}, waiting 60s...")
        time.sleep(60)
        resp = requests.get(url, params=params, timeout=30)
    resp.raise_for_status()
    return resp.json()

def fetch_comment_detail(comment_id):
    """Fetch detailed info for a single comment including attachments."""
    url = f"{BASE_URL}/comments/{comment_id}"
    params = {
        "include": "attachments",
        "api_key": API_KEY
    }
    resp = requests.get(url, params=params, timeout=30)
    if resp.status_code == 429:
        print(f"  Rate limited on comment {comment_id}, waiting 60s...")
        time.sleep(60)
        resp = requests.get(url, params=params, timeout=30)
    if resp.status_code != 200:
        print(f"  Warning: got {resp.status_code} for {comment_id}")
        return None
    return resp.json()

def main():
    all_comments = []
    page = 1
    total_pages = None

    print("=== Fetching comment list ===")
    while True:
        print(f"Fetching page {page}...")
        data = fetch_comments_page(page)
        
        comments = data.get("data", [])
        all_comments.extend(comments)
        
        meta = data.get("meta", {})
        total_elements = meta.get("totalElements", 0)
        if total_pages is None:
            total_pages = (total_elements + 24) // 25
            print(f"Total comments: {total_elements}, Total pages: {total_pages}")
        
        if len(comments) < 25 or page >= total_pages:
            break
        
        page += 1
        time.sleep(1)  # Be polite to the API

    print(f"\nFetched {len(all_comments)} comment stubs total.")
    
    # Save the list
    with open(f"{OUTPUT_DIR}/comment_list.json", "w") as f:
        json.dump(all_comments, f, indent=2)
    
    # Now fetch details for each comment
    print("\n=== Fetching comment details ===")
    detailed_comments = []
    
    for i, comment in enumerate(all_comments):
        comment_id = comment["id"]
        print(f"[{i+1}/{len(all_comments)}] Fetching detail for {comment_id}...")
        
        detail_file = f"{OUTPUT_DIR}/comment_{comment_id}.json"
        if os.path.exists(detail_file):
            print(f"  Already cached, skipping.")
            with open(detail_file) as f:
                detail = json.load(f)
        else:
            detail = fetch_comment_detail(comment_id)
            if detail:
                with open(detail_file, "w") as f:
                    json.dump(detail, f, indent=2)
            time.sleep(0.5)  # Rate limit: ~2 req/sec with DEMO_KEY
        
        if detail:
            detailed_comments.append(detail)
    
    print(f"\nDone. Fetched {len(detailed_comments)} detailed comments.")
    
    # Save consolidated file
    with open(f"{OUTPUT_DIR}/all_comments_detailed.json", "w") as f:
        json.dump(detailed_comments, f, indent=2)
    
    print("Saved to all_comments_detailed.json")

if __name__ == "__main__":
    main()
