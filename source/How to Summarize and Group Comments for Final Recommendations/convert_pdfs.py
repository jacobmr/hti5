"""
Convert all PDF attachments to Markdown text for processing.
Uses pdfminer/pdfplumber for text extraction.
"""

import os
import json
import subprocess
from pathlib import Path

ATTACHMENTS_DIR = "/home/ubuntu/onc_comments/attachments"
MARKDOWN_DIR = "/home/ubuntu/onc_comments/markdown"
os.makedirs(MARKDOWN_DIR, exist_ok=True)

def extract_text_from_pdf(pdf_path):
    """Extract text from PDF using pdftotext (poppler-utils)."""
    try:
        result = subprocess.run(
            ['pdftotext', '-layout', str(pdf_path), '-'],
            capture_output=True, text=True, timeout=60
        )
        if result.returncode == 0 and result.stdout.strip():
            return result.stdout.strip()
        
        # Try without layout flag
        result2 = subprocess.run(
            ['pdftotext', str(pdf_path), '-'],
            capture_output=True, text=True, timeout=60
        )
        if result2.returncode == 0:
            return result2.stdout.strip()
        
        return f"[PDF extraction failed: {result.stderr[:200]}]"
    except subprocess.TimeoutExpired:
        return "[PDF extraction timed out]"
    except Exception as e:
        return f"[PDF extraction error: {e}]"

def main():
    converted = 0
    errors = 0
    skipped = 0
    
    # Find all PDF files
    pdf_files = list(Path(ATTACHMENTS_DIR).rglob("*.pdf"))
    print(f"Found {len(pdf_files)} PDF files to convert")
    
    for pdf_path in sorted(pdf_files):
        # Get comment ID from path
        comment_id = pdf_path.parent.name
        filename = pdf_path.stem
        
        # Output markdown file
        md_path = Path(MARKDOWN_DIR) / f"{comment_id}_{filename}.md"
        
        if md_path.exists():
            skipped += 1
            continue
        
        print(f"Converting {comment_id}/{pdf_path.name}...", end=" ")
        
        text = extract_text_from_pdf(pdf_path)
        
        if text and not text.startswith("[PDF extraction"):
            # Write as markdown
            with open(md_path, "w", encoding="utf-8") as f:
                f.write(f"# {comment_id} - {filename}\n\n")
                f.write(f"**Source:** {pdf_path}\n\n")
                f.write("---\n\n")
                f.write(text)
            
            converted += 1
            print(f"✓ {len(text)} chars")
        else:
            # Write error file
            with open(md_path, "w", encoding="utf-8") as f:
                f.write(f"# {comment_id} - {filename}\n\n")
                f.write(f"**Error:** {text}\n")
            errors += 1
            print(f"✗ {text[:80]}")
    
    print(f"\n=== Conversion Summary ===")
    print(f"Converted: {converted}")
    print(f"Skipped (cached): {skipped}")
    print(f"Errors: {errors}")
    
    # List converted files
    md_files = list(Path(MARKDOWN_DIR).glob("*.md"))
    print(f"Total markdown files: {len(md_files)}")
    
    # Calculate total text size
    total_chars = 0
    for md_file in md_files:
        total_chars += md_file.stat().st_size
    print(f"Total text size: {total_chars / 1024:.0f} KB")

if __name__ == "__main__":
    main()
