#!/usr/bin/env python3
"""
Download and extract text from attachment-only comments.
These are comments where the submitter put their entire response
in a PDF attachment with no text in the comment body.
"""

import json
import os
import sys
import urllib.request
import io

try:
    import PyPDF2
except ImportError:
    print("PyPDF2 not available, trying pypdf...")
    import pypdf as PyPDF2

FULL_TEXT_DIR = "raw-data/comments/full-text"
PDF_DIR = "raw-data/comments/attachment-pdfs"
OUTPUT_DIR = "raw-data/comments/attachments-extracted"
COMMENTS_FILE = "data/comments.json"

os.makedirs(PDF_DIR, exist_ok=True)
os.makedirs(OUTPUT_DIR, exist_ok=True)


def get_attachment_only_comments():
    """Find comments with 'no substantive' summary that have attachment PDFs."""
    with open(COMMENTS_FILE) as f:
        comments = json.load(f)

    results = []
    for c in comments:
        if "no substantive" not in (c.get("summary") or "").lower():
            continue

        ft_path = os.path.join(FULL_TEXT_DIR, f"{c['id']}.json")
        if not os.path.exists(ft_path):
            continue

        with open(ft_path) as f:
            raw = json.load(f)

        attachments = raw.get("attachments", [])
        if not attachments:
            continue

        results.append({
            "id": c["id"],
            "organization": raw.get("organization", ""),
            "firstName": raw.get("firstName", ""),
            "lastName": raw.get("lastName", ""),
            "attachments": attachments,
        })

    return results


def download_pdf(url, dest_path):
    """Download a PDF from regulations.gov."""
    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 100:
        return True

    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
        with open(dest_path, "wb") as f:
            f.write(data)
        return True
    except Exception as e:
        print(f"  ERROR downloading {url}: {e}")
        return False


def extract_text_from_pdf(pdf_path):
    """Extract text from a PDF file."""
    try:
        with open(pdf_path, "rb") as f:
            reader = PyPDF2.PdfReader(f)
            pages = []
            for i, page in enumerate(reader.pages):
                text = page.extract_text()
                if text:
                    pages.append(text)
            return "\n\n".join(pages)
    except Exception as e:
        print(f"  ERROR extracting {pdf_path}: {e}")
        return ""


def main():
    comments = get_attachment_only_comments()
    print(f"Found {len(comments)} attachment-only comments\n")

    results = {}

    for c in comments:
        cid = c["id"]
        org = c["organization"] or f"{c['firstName']} {c['lastName']}".strip() or "Unknown"
        print(f"{cid} ({org})")

        all_text = []

        for i, att in enumerate(c["attachments"]):
            url = att.get("url", "")
            title = att.get("title", f"attachment_{i+1}")
            fmt = att.get("format", "pdf")

            if not url:
                print(f"  Attachment {i+1}: no URL, skipping")
                continue

            if fmt != "pdf":
                print(f"  Attachment {i+1}: format={fmt}, skipping (not PDF)")
                continue

            pdf_path = os.path.join(PDF_DIR, f"{cid}_attachment_{i+1}.pdf")
            print(f"  Downloading attachment {i+1}: {title}...")

            if not download_pdf(url, pdf_path):
                continue

            size_kb = os.path.getsize(pdf_path) / 1024
            print(f"  Downloaded: {size_kb:.0f}KB")

            text = extract_text_from_pdf(pdf_path)
            if text:
                char_count = len(text)
                print(f"  Extracted: {char_count} chars")
                all_text.append(text)
            else:
                print(f"  WARNING: No text extracted (may be scanned image)")

        if all_text:
            combined = "\n\n---\n\n".join(all_text)
            md_path = os.path.join(OUTPUT_DIR, f"{cid}_attachment_1.md")
            with open(md_path, "w") as f:
                f.write(f"# {cid} - attachment text\n\n{combined}\n")
            results[cid] = combined
            print(f"  => Saved {len(combined)} chars to {md_path}")
        else:
            print(f"  => NO TEXT EXTRACTED")

        print()

    print(f"\n{'='*60}")
    print(f"Successfully extracted text from {len(results)}/{len(comments)} comments")

    # Save a summary JSON for downstream processing
    summary_path = os.path.join(PDF_DIR, "_extraction_summary.json")
    summary = {
        cid: {
            "chars": len(text),
            "preview": text[:200]
        }
        for cid, text in results.items()
    }
    with open(summary_path, "w") as f:
        json.dump(summary, f, indent=2)
    print(f"Summary saved to {summary_path}")


if __name__ == "__main__":
    main()
