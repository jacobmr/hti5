#!/usr/bin/env python3
"""
Download and extract text from ALL comment attachments.
Covers PDFs, DOCX, and skips image-only formats (PNG).
Saves PDFs/DOCX to raw-data/comments/attachment-pdfs/
Saves extracted text to raw-data/comments/attachments-extracted/
"""

import json
import os
import subprocess
import sys
import time

try:
    import pypdf
except ImportError:
    sys.exit("pypdf not installed: pip install pypdf")

try:
    from docx import Document as DocxDocument
except ImportError:
    DocxDocument = None
    print("WARNING: python-docx not installed, DOCX files will be skipped")

REPO_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FULLTEXT_DIR = os.path.join(REPO_DIR, "raw-data", "comments", "full-text")
PDF_DIR = os.path.join(REPO_DIR, "raw-data", "comments", "attachment-pdfs")
EXTRACTED_DIR = os.path.join(REPO_DIR, "raw-data", "comments", "attachments-extracted")
COMMENTS_FILE = os.path.join(REPO_DIR, "data", "comments.json")

os.makedirs(PDF_DIR, exist_ok=True)
os.makedirs(EXTRACTED_DIR, exist_ok=True)


def download_file(url, dest_path):
    """Download a file using curl (handles regulations.gov auth better than urllib)."""
    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 100:
        return True
    try:
        result = subprocess.run(
            [
                "curl", "-sS",
                "-H", "User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36",
                "-H", "Accept: */*",
                "-H", "Referer: https://www.regulations.gov/",
                "-o", dest_path,
                url,
            ],
            capture_output=True,
            text=True,
            timeout=60,
        )
        return os.path.exists(dest_path) and os.path.getsize(dest_path) > 100
    except Exception as e:
        print(f"  ERROR downloading: {e}")
        return False


def extract_pdf(path):
    """Extract text from a PDF file."""
    try:
        reader = pypdf.PdfReader(path)
        pages = []
        for page in reader.pages:
            text = page.extract_text()
            if text:
                pages.append(text)
        return "\n\n".join(pages)
    except Exception as e:
        print(f"  ERROR extracting PDF: {e}")
        return ""


def extract_docx(path):
    """Extract text from a DOCX file."""
    if DocxDocument is None:
        return ""
    try:
        doc = DocxDocument(path)
        paragraphs = [p.text for p in doc.paragraphs if p.text.strip()]
        return "\n".join(paragraphs)
    except Exception as e:
        print(f"  ERROR extracting DOCX: {e}")
        return ""


def main():
    with open(COMMENTS_FILE) as f:
        comments = json.load(f)

    total_downloaded = 0
    total_extracted = 0
    total_skipped = 0
    total_failed = 0
    newly_extracted = []

    for c in comments:
        cid = c["id"]
        ft_path = os.path.join(FULLTEXT_DIR, f"{cid}.json")
        if not os.path.exists(ft_path):
            continue

        with open(ft_path) as f:
            raw = json.load(f)

        attachments = raw.get("attachments", [])
        if not attachments:
            continue

        for i, att in enumerate(attachments):
            att_num = i + 1
            url = att.get("url", "")
            fmt = att.get("format", "").lower()
            title = att.get("title", f"attachment_{att_num}")

            if not url:
                continue

            # Check if already extracted
            md_path = os.path.join(EXTRACTED_DIR, f"{cid}_attachment_{att_num}.md")
            if os.path.exists(md_path) and os.path.getsize(md_path) > 100:
                total_skipped += 1
                continue

            # Skip images
            if fmt in ("png", "jpg", "jpeg", "gif", "bmp", "tiff"):
                print(f"  {cid} att#{att_num}: image ({fmt}), skipping")
                total_skipped += 1
                continue

            # Determine file extension
            if fmt == "docx":
                ext = "docx"
            elif fmt == "pdf":
                ext = "pdf"
            else:
                ext = fmt or "pdf"

            dest_path = os.path.join(PDF_DIR, f"{cid}_attachment_{att_num}.{ext}")

            # Download
            print(f"  {cid} att#{att_num} ({fmt}): downloading...")
            if not download_file(url, dest_path):
                print(f"    FAILED to download")
                total_failed += 1
                continue

            size_kb = os.path.getsize(dest_path) / 1024
            print(f"    Downloaded: {size_kb:.0f}KB")
            total_downloaded += 1

            # Extract text
            if ext == "pdf":
                text = extract_pdf(dest_path)
            elif ext == "docx":
                text = extract_docx(dest_path)
            else:
                print(f"    Unknown format: {ext}, skipping extraction")
                continue

            if text and len(text) > 10:
                with open(md_path, "w") as f:
                    f.write(f"# {cid} - attachment {att_num}\n\n")
                    f.write(f"**Source:** {os.path.basename(dest_path)}\n\n---\n\n")
                    f.write(text + "\n")
                print(f"    Extracted: {len(text)} chars -> {os.path.basename(md_path)}")
                total_extracted += 1
                newly_extracted.append((cid, att_num, len(text)))
            else:
                print(f"    WARNING: No text extracted (scanned image or empty)")
                # Write error marker
                with open(md_path, "w") as f:
                    f.write(f"# {cid} - attachment {att_num}\n\n**Error:** No extractable text (scanned image)\n")
                total_failed += 1

            time.sleep(0.3)  # Rate limit

    print(f"\n{'='*60}")
    print(f"Downloaded: {total_downloaded}")
    print(f"Extracted:  {total_extracted}")
    print(f"Skipped:    {total_skipped} (already done or image)")
    print(f"Failed:     {total_failed}")
    print(f"\nNewly extracted:")
    for cid, att_num, chars in newly_extracted:
        print(f"  {cid} att#{att_num}: {chars} chars")


if __name__ == "__main__":
    main()
