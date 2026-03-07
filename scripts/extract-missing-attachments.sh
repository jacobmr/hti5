#!/usr/bin/env bash
# Download and extract text from the 31 attachment-only comments
# that were never processed in the original data collection run.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_DIR="$(dirname "$SCRIPT_DIR")"
PDF_DIR="$REPO_DIR/raw-data/comments/attachment-pdfs"
EXTRACTED_DIR="$REPO_DIR/raw-data/comments/attachments-extracted"
FULLTEXT_DIR="$REPO_DIR/raw-data/comments/full-text"

mkdir -p "$PDF_DIR" "$EXTRACTED_DIR"

# Get attachment-only comment IDs from comments.json
COMMENT_IDS=$(python3 -c "
import json, os
with open('$REPO_DIR/data/comments.json') as f:
    comments = json.load(f)
for c in comments:
    if 'no substantive' in (c.get('summary') or '').lower():
        print(c['id'])
")

SUCCESS=0
FAIL=0
TOTAL=0

for CID in $COMMENT_IDS; do
    TOTAL=$((TOTAL + 1))

    # Check if already extracted successfully
    EXISTING="$EXTRACTED_DIR/${CID}_attachment_1.md"
    if [ -f "$EXISTING" ] && [ "$(wc -c < "$EXISTING")" -gt 100 ]; then
        echo "SKIP $CID (already extracted)"
        SUCCESS=$((SUCCESS + 1))
        continue
    fi

    # Get attachment URLs from full-text JSON
    ATTACHMENTS=$(python3 -c "
import json, os
ft_path = '$FULLTEXT_DIR/${CID}.json'
if not os.path.exists(ft_path):
    print('NO_FULLTEXT')
else:
    with open(ft_path) as f:
        raw = json.load(f)
    atts = raw.get('attachments', [])
    for i, a in enumerate(atts):
        url = a.get('url', '')
        fmt = a.get('format', 'pdf')
        print(f'{i}|{fmt}|{url}')
")

    if [ "$ATTACHMENTS" = "NO_FULLTEXT" ]; then
        echo "SKIP $CID (no full-text file)"
        FAIL=$((FAIL + 1))
        continue
    fi

    echo "--- $CID ---"
    ALL_TEXT=""

    while IFS= read -r line; do
        IDX=$(echo "$line" | cut -d'|' -f1)
        FMT=$(echo "$line" | cut -d'|' -f2)
        URL=$(echo "$line" | cut -d'|' -f3-)
        ATT_NUM=$((IDX + 1))

        if [ -z "$URL" ]; then
            echo "  Attachment $ATT_NUM: no URL, skipping"
            continue
        fi

        PDF_FILE="$PDF_DIR/${CID}_attachment_${ATT_NUM}.pdf"

        if [ "$FMT" != "pdf" ]; then
            # For docx, try downloading and converting
            echo "  Attachment $ATT_NUM: format=$FMT (non-PDF)"
            DOCX_FILE="$PDF_DIR/${CID}_attachment_${ATT_NUM}.docx"
            if [ ! -f "$DOCX_FILE" ] || [ "$(wc -c < "$DOCX_FILE")" -lt 100 ]; then
                curl -sS \
                    -H "User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36" \
                    -H "Accept: */*" \
                    -H "Referer: https://www.regulations.gov/" \
                    -o "$DOCX_FILE" \
                    "$URL" 2>/dev/null || true
            fi
            if [ -f "$DOCX_FILE" ] && [ "$(wc -c < "$DOCX_FILE")" -gt 100 ]; then
                echo "  Downloaded docx: $(du -h "$DOCX_FILE" | cut -f1)"
                # Try python-docx extraction
                DOCX_TEXT=$(python3 -c "
try:
    from docx import Document
    doc = Document('$DOCX_FILE')
    text = '\n'.join(p.text for p in doc.paragraphs if p.text.strip())
    print(text)
except Exception as e:
    print(f'ERROR: {e}')
" 2>/dev/null || echo "")
                if [ -n "$DOCX_TEXT" ] && [[ "$DOCX_TEXT" != ERROR:* ]]; then
                    echo "  Extracted docx: ${#DOCX_TEXT} chars"
                    ALL_TEXT="${ALL_TEXT}${DOCX_TEXT}\n\n"
                else
                    echo "  WARNING: Could not extract docx text"
                fi
            fi
            continue
        fi

        # Download PDF
        if [ ! -f "$PDF_FILE" ] || [ "$(wc -c < "$PDF_FILE")" -lt 100 ]; then
            echo "  Downloading attachment $ATT_NUM..."
            curl -sS \
                -H "User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36" \
                -H "Accept: application/pdf,*/*" \
                -H "Referer: https://www.regulations.gov/" \
                -o "$PDF_FILE" \
                "$URL" 2>/dev/null || true
        fi

        if [ ! -f "$PDF_FILE" ] || [ "$(wc -c < "$PDF_FILE")" -lt 100 ]; then
            echo "  FAILED to download attachment $ATT_NUM"
            continue
        fi

        SIZE=$(du -h "$PDF_FILE" | cut -f1)
        echo "  Downloaded: $SIZE"

        # Extract text
        TEXT=$(python3 -c "
import pypdf
try:
    reader = pypdf.PdfReader('$PDF_FILE')
    text = ''
    for page in reader.pages:
        t = page.extract_text()
        if t:
            text += t + '\n\n'
    print(text.strip())
except Exception as e:
    print(f'ERROR: {e}')
" 2>/dev/null || echo "")

        if [ -n "$TEXT" ] && [[ "$TEXT" != ERROR:* ]]; then
            CHARS=${#TEXT}
            echo "  Extracted: $CHARS chars"
            ALL_TEXT="${ALL_TEXT}${TEXT}\n\n---\n\n"
        else
            echo "  WARNING: No text extracted (may be scanned image)"
        fi

        # Rate limit: small delay between downloads
        sleep 0.5

    done <<< "$ATTACHMENTS"

    # Save extracted text
    if [ -n "$ALL_TEXT" ]; then
        MD_FILE="$EXTRACTED_DIR/${CID}_attachment_1.md"
        echo -e "# $CID - attachment text\n\n$ALL_TEXT" > "$MD_FILE"
        FINAL_SIZE=$(wc -c < "$MD_FILE")
        echo "  => Saved $FINAL_SIZE bytes to $MD_FILE"
        SUCCESS=$((SUCCESS + 1))
    else
        echo "  => NO TEXT EXTRACTED"
        FAIL=$((FAIL + 1))
    fi

    echo ""
done

echo "============================================"
echo "Results: $SUCCESS/$TOTAL extracted, $FAIL failed"
