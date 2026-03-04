"""
Download all PDF attachments from the fetched comments.
Runs concurrently with the comment fetcher.
"""

import json
import os
import requests
import time
from pathlib import Path

COMMENTS_DIR = "/home/ubuntu/onc_comments/raw_json/comments"
ATTACHMENTS_DIR = "/home/ubuntu/onc_comments/attachments"
os.makedirs(ATTACHMENTS_DIR, exist_ok=True)

def download_attachment(url, output_path, session):
    """Download a single attachment file."""
    if os.path.exists(output_path):
        return True, "cached"
    
    try:
        resp = session.get(url, timeout=60, stream=True)
        if resp.status_code == 200:
            with open(output_path, 'wb') as f:
                for chunk in resp.iter_content(chunk_size=8192):
                    f.write(chunk)
            return True, f"{os.path.getsize(output_path)} bytes"
        else:
            return False, f"HTTP {resp.status_code}"
    except Exception as e:
        return False, str(e)

def main():
    session = requests.Session()
    session.headers.update({
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"
    })
    
    downloaded = 0
    errors = 0
    skipped = 0
    
    # Process all available comment files
    comment_files = sorted([f for f in os.listdir(COMMENTS_DIR) if f.endswith('.json')])
    print(f"Processing {len(comment_files)} comment files for attachments...")
    
    for fname in comment_files:
        with open(f"{COMMENTS_DIR}/{fname}") as f:
            comment = json.load(f)
        
        if not comment.get('has_attachments') or not comment.get('attachments'):
            continue
        
        comment_id = comment['id']
        att_dir = f"{ATTACHMENTS_DIR}/{comment_id}"
        os.makedirs(att_dir, exist_ok=True)
        
        for i, att in enumerate(comment['attachments']):
            url = att.get('url', '')
            if not url:
                continue
            
            # Determine filename
            filename = att.get('filename', '') or f"attachment_{i+1}.{att.get('format', 'pdf')}"
            if not filename.endswith(('.pdf', '.docx', '.doc', '.xlsx', '.txt')):
                ext = att.get('format', 'pdf')
                filename = f"attachment_{i+1}.{ext}"
            
            output_path = f"{att_dir}/{filename}"
            
            success, msg = download_attachment(url, output_path, session)
            
            if msg == "cached":
                skipped += 1
            elif success:
                downloaded += 1
                name = comment['commenter_name'][:35]
                print(f"  ✓ {comment_id} [{name}] - {filename} ({msg})")
            else:
                errors += 1
                print(f"  ✗ {comment_id} - {filename}: {msg}")
            
            time.sleep(0.1)  # Small delay
    
    print(f"\n=== Download Summary ===")
    print(f"Downloaded: {downloaded}")
    print(f"Cached (already existed): {skipped}")
    print(f"Errors: {errors}")
    
    # List what we have
    total_files = 0
    total_size = 0
    for root, dirs, files in os.walk(ATTACHMENTS_DIR):
        for f in files:
            fpath = os.path.join(root, f)
            total_files += 1
            total_size += os.path.getsize(fpath)
    
    print(f"Total attachment files: {total_files}")
    print(f"Total size: {total_size / 1024 / 1024:.1f} MB")

if __name__ == "__main__":
    main()
