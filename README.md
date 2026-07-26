# Analysis of 298 Public Comments on Federal Health IT Deregulation

**Proposed Rule:** HHS-ONC-2025-0005 — _Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions to Unleash Prosperity_
**Comment Period:** January 28 – February 27, 2026 | **Live analysis:** [hti5.org](https://hti5.org)

---

## Key Findings

The public response to proposed health IT deregulation was **decisively negative**.

- **151 of 298 commenters (51%) opposed** the proposed deregulation; 91 (31%) supported it
- Average sentiment: **−0.77** on a −3 to +3 scale
- **90% of clinicians** opposed removing certification requirements
- **Patient safety** was the dominant concern — commenters warned that removing audit log and data integrity standards would create direct clinical risks
- **FHIR standards** (269 mentions) and **burden reduction** (248 mentions) were the most-discussed themes
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

Analysis is based on the **full text** of each comment, including PDF and DOCX attachments. Of the 298 comments, 211 included attachments — these were downloaded, extracted to text, and used as the primary source for analysis. Subsequent versions (v1.4–v1.6) caught progressively smaller sets of edge cases where attachment text had not been properly integrated.

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

## OIRA Review Alerts

Visitors can subscribe to be emailed when the HTI-5 rule moves through OIRA review — the
last checkpoint before Federal Register publication.

A scheduled job polls OIRA's public
[rules-under-review feed](https://www.reginfo.gov/public/do/XMLViewFileAction?f=EO_RULES_UNDER_REVIEW.xml)
every six hours, matching on **RIN 0955-AA09**, and sends at most two emails over the
rule's lifetime:

| Event         | Meaning                                                                                               |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| **ARRIVED**   | The RIN appeared in the feed. OIRA review has begun.                                                  |
| **CONCLUDED** | The RIN left the feed. Review is finished and publication usually follows within days to a few weeks. |

Departure is the more actionable signal, and there is no separate "completed reviews"
feed, so it is inferred by diffing against stored state.

### How it works

| Piece                                    | Location                                                                    |
| ---------------------------------------- | --------------------------------------------------------------------------- |
| Feed fetch + RIN matching                | `api/lib/oira.js`                                                           |
| Alert decision logic (pure, unit-tested) | `api/lib/watcher.js`                                                        |
| Durable state (Redis)                    | `api/lib/state.js`                                                          |
| Double opt-in tokens                     | `api/lib/tokens.js`                                                         |
| Resend contact + broadcast calls         | `api/lib/notify.js`                                                         |
| Endpoints                                | `api/index.js`                                                              |
| Signup form / confirmation page          | `client/src/components/AlertMeForm.tsx`, `client/src/pages/ConfirmPage.tsx` |

Subscribers are stored as Resend contacts in a dedicated segment — **not** as GitHub
issues like the comment form, since this repository is public and that would expose
subscriber addresses.

Signup is double opt-in. The confirmation link carries an HMAC-signed token containing
the address and a 48-hour expiry, so nothing is persisted until the address is proven and
there is no pending-subscription store to maintain.

### Configuration

See [`.env.example`](.env.example). Two things commonly go wrong:

- `RESEND_API_KEY` must be a **full-access** key. A sending-only key returns
  `401 restricted_api_key` on the contacts and broadcasts endpoints.
- `ALERT_FROM` must be on a Resend-verified domain, and its domain must match exactly.
- `REDIS_URL` points at an instance shared with other projects, so the state key is
  namespaced (`hti5:oira_watch_state`).

### Duplicate protection

Subscribers should receive each alert exactly once, so there are two independent guards:

1. `alertsSent` in the watcher state records which events have fired.
2. Before sending, Resend is checked for an existing broadcast of the same name.

The second exists because the first lives in shared Redis. If that state were ever
flushed or rotated away, guard 1 would silently vanish and the next poll would re-blast
subscribers; guard 2 doesn't depend on our storage at all. It fails closed — if Resend
can't be queried, nothing is sent.

### Testing

```bash
pnpm test          # includes the feed parser and alert state machine
```

The parser tests run against a committed snapshot of the real feed
(`api/lib/__tests__/fixtures/`), so they need no network access. To exercise detection
without waiting for the real rule to move, set `WATCH_RIN` to a RIN currently in the feed.

Two upstream behaviours the watcher defends against, both covered by tests:

- RegInfo answers **HTTP 200 with an HTML page** for unknown feed names, so a successful
  status code proves nothing — the payload must parse as OIRA XML.
- A truncated feed must never be read as "the rule disappeared", so responses with
  implausibly few records are rejected rather than triggering a CONCLUDED alert.

---

## Analysis Updates

This analysis has evolved as the dataset and methodology improved:

**v1.6** — _Cover-Note Attachment Integration_ (March 9, 2026)

- Fixed 10 comments from major organizations (ACP, Oracle, Wolters Kluwer, ADVION, AllianceChicago, Michigan Primary Care Assoc., etc.) where the commenter submitted a brief cover note like "see attached" but the real substantive content was in the PDF attachment. These had been analyzed using only the cover note text, producing hallucinated/guessed summaries. Now properly analyzed using the full extracted attachment text.
- Impact: strongly oppose rose from 99→105; oppose 45→46; support 78→76; neutral 61→56. Average sentiment shifted from −0.69 to −0.77. Several large organizations (ACP, Oracle, PFPS US, AllianceChicago, ADVION) turned out to strongly oppose deregulation once their full attachment text was analyzed.
- Thanks again to [David Rocha](https://github.com/jacobmr/hti5/issues/2) for the continued review.

**v1.5** — _NPRM Provisions Analysis + Attachment Fix Round 2_ (March 8, 2026)

- New Provisions page organizing all 298 comments by the 16 NPRM provision groups they address (derived from Table 1 of the proposed rule).
- Each provision shows support/oppose/mixed breakdown with expandable comment lists.
- Beyond-scope detection identifies comments raising topics outside the rule's logical outgrowth (Medicare reimbursement, state regulations, etc.).
- Privacy & Security was the most-discussed provision (134 comments, 65% opposing).
- Fixed 12 additional attachment-only comments missed in v1.4 (including OCHIN, HIMSS, Intermountain Health, NCQA). Oppose count rose from 139→144; support from 86→93; neutral dropped from 73→61. Average sentiment shifted from −0.70 to −0.69.

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
