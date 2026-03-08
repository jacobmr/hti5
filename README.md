# Analysis of 298 Public Comments on Federal Health IT Deregulation

**Proposed Rule:** HHS-ONC-2025-0005 — _Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions to Unleash Prosperity_
**Comment Period:** January 28 – February 27, 2026 | **Live analysis:** [hti5.org](https://hti5.org)

---

## Key Findings

The public response to proposed health IT deregulation was **decisively negative**.

- **139 of 298 commenters (47%) opposed** the proposed deregulation; 86 (29%) supported it
- Average sentiment: **−0.70** on a −3 to +3 scale
- **90% of clinicians** opposed removing certification requirements
- **Patient safety** was the dominant concern — commenters warned that removing audit log and data integrity standards would create direct clinical risks
- **FHIR standards** (264 mentions) and **burden reduction** (240 mentions) were the most-discussed themes
- Multiple **organized advocacy campaigns** were identified, including coordinated attorney networks and form letter campaigns

---

## Data

This repository contains the complete dataset and analysis. All data is public record from [regulations.gov](https://www.regulations.gov/document/HHS-ONC-2025-0005-0001/comment).

### [`data/`](data/) — Structured Analysis Datasets

Machine-readable JSON files produced by the analysis. See [`data/README.md`](data/README.md) for schema documentation.

| File                                                        | Description                                                         |
| ----------------------------------------------------------- | ------------------------------------------------------------------- |
| [`comments.json`](data/comments.json)                       | 298 comments with position, themes, sentiment, organization type    |
| [`themes.json`](data/themes.json)                           | 11 policy themes with analysis, examples, and position breakdowns   |
| [`stats.json`](data/stats.json)                             | Aggregate statistics (position distribution, stakeholder breakdown) |
| [`coordination_groups.json`](data/coordination_groups.json) | Organized advocacy campaigns detected via pattern analysis          |
| [`duplicates.json`](data/duplicates.json)                   | 7 duplicate submissions removed from analysis                       |
| [`nprm_provisions.json`](data/nprm_provisions.json)         | 298 comments mapped to 16 NPRM provision groups with stance         |

### [`raw-data/`](raw-data/) — Original Comment Text

1,095 files from regulations.gov: full text, metadata, and extracted attachments for all 298 unique comments.

### [`source/`](source/) — Analysis Scripts & Report

- [`final_report.md`](source/final_report.md) — Complete analysis report
- [`analyze_coordination.py`](source/analyze_coordination.py) — Script for detecting organized comment campaigns

---

## Methodology

Comments were analyzed using five approaches:

1. **Position classification** — Each comment categorized on a 5-point scale from _strongly oppose deregulation_ to _strongly support deregulation_
2. **Thematic analysis** — 11 major policy themes identified and tagged across all comments
3. **Stakeholder segmentation** — Commenters grouped by organization type (clinician, health IT company, professional association, etc.)
4. **Coordination detection** — Pattern matching to identify form letters, shared language, and coordinated advocacy campaigns
5. **Sentiment scoring** — Numerical sentiment on a −3 to +3 scale

### Limitations

- Theme detection may miss novel arguments not matching the 11 identified themes
- Organization type classification relies on self-reported information
- Coordination detection uses heuristic pattern matching
- 7 duplicate submissions were identified and removed ([details](https://hti5.org/duplicates))

---

## Website

The analysis is presented as an interactive website at **[hti5.org](https://hti5.org)** with:

- Searchable comments database with filtering by position, theme, and organization type
- Position distribution charts and stakeholder breakdown
- Deep-dive analysis for each of the 11 policy themes
- Coordination campaign visualization
- Evidence-based policy recommendations

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup and technical details.

---

## Analysis Updates

This analysis has evolved as the dataset and methodology improved:

**v1.5** — _NPRM Provisions Analysis_ (March 8, 2026)

- New Provisions page organizing all 298 comments by the 16 NPRM provision groups they address (derived from Table 1 of the proposed rule).
- Each provision shows support/oppose/mixed breakdown with expandable comment lists.
- Beyond-scope detection identifies comments raising topics outside the rule's logical outgrowth (Medicare reimbursement, state regulations, etc.).
- Privacy & Security was the most-discussed provision (134 comments, 65% opposing).

**v1.4** — _Attachment Text Extraction_ (March 7, 2026)

- Fixed 31 comments that contained substantive text only in PDF/DOCX attachments, not inline. These had been classified as "unclear" with no themes. After extracting attachment text and re-analyzing, all 298 comments now have proper position classifications and theme tags.
- Impact: oppose count rose from 127 to 139; support from 70 to 86; "unclear" positions eliminated entirely. Average sentiment shifted from −0.73 to −0.70.
- Thanks to [David Rocha](https://github.com/jacobmr/hti5/issues/2) for reporting the gap.

**v1.3** — _Assessment Accuracy_ (March 6, 2026)

- Replaced keyword-based heuristics for `agency_posture` and `provision_addressed` fields with weighted pattern matching, improving accuracy of comment quality assessments.

**v1.2** — _Comment Quality Assessment_ (March 5, 2026)

- Added understanding scores (0–5) and logical outgrowth analysis for all 298 comments, stored in `comment_assessments.json`.

**v1.1** — _Coordination Deep Dive_ (March 5, 2026)

- Identified 5 organized advocacy campaigns covering 68 unique commenters (22.8% of submissions).

**v1.0** — _Initial Analysis_ (March 2, 2026)

- First release with position classification, thematic analysis, stakeholder segmentation, and sentiment scoring for 298 comments.

---

## Related Resources

- [Federal Register Notice (HHS-ONC-2025-0005)](https://www.regulations.gov/document/HHS-ONC-2025-0005-0001)
- [Public Comments on regulations.gov](https://www.regulations.gov/document/HHS-ONC-2025-0005-0001/comment)
- [ONC Health IT Certification Program](https://www.healthit.gov/certification)

---

## License

MIT — See [LICENSE](LICENSE) for details.
