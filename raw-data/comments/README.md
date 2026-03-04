# HTI-5 Public Comments - Raw Data

Complete dataset of all 305 public comments submitted on HHS-ONC-2025-0005 (HTI-5 Proposed Rule).

## Directory Structure

### `/full-text/`

**Full comment text with complete metadata** — Use this for analysis.

- `all-comments.json` — All 305 comments in a single JSON array
- `HHS-ONC-2025-0005-XXXX.json` — Individual comment files (one per comment)

Each comment includes:

- `id` — Comment ID (unique identifier)
- `comment_text` — Full comment text (not summarized)
- `commenter_name`, `organization` — Author information
- `posted_date`, `received_date` — Timeline
- `has_attachments`, `attachments` — Attachment metadata
- `doc_abstract` — LLM-generated abstract

### `/summaries/`

**Pre-generated JSON summaries** for quick reference.

- One JSON file per comment
- Contains thematic analysis and key points
- Useful for browsing without full text

### `/markdown/`

**Markdown versions of inline comments** for readability.

- `HHS-ONC-2025-0005-XXXX.md` — One markdown file per comment
- Better for reading in text editors

### `/attachments-extracted/`

**PDF attachments extracted to markdown** (167 files).

- Comments with attachments (e.g., letters, briefs)
- Extracted to markdown for text analysis

## Analysis Use Cases

### Detect Copy-Paste & Coordinated Comments

Use `/full-text/all-comments.json` to identify:

- Exact duplicates (law firms, coordinated campaigns)
- Similar language patterns (templates, form letters)
- Threshold analysis (e.g., >80% text similarity)

### Investigate Stakeholder Coordination

Key files for analysis:

- Filter by `organization` to identify law firms, Epic customers, etc.
- Cross-reference `comment_text` for duplicates
- Correlate similar language with organizational type

### Temporal Analysis

- `posted_date` — When comments were submitted
- Look for clustering (coordinated submission timing)

## Format Notes

- **JSON** — Machine-readable, preserves structure, best for analysis
- **Markdown** — Human-readable, good for reviewing comments
- **Individual files** — Easy to track individual comments via git
- **Single file** (`all-comments.json`) — Convenient for bulk loading

## Data Quality

- All 305 comments represented
- Full raw text preserved (not summarized)
- Metadata includes commenter org type (inferred where possible)
- Attachments metadata included; full attachment text in `/attachments-extracted/`

## License & Attribution

Public comments submitted to a federal docket (regulations.gov).
All content is public record.

For analysis details, see `/data/themes.json` and `/data/stats.json` in the main repository.
