# HTI-5 Comment Quality & Relevance Assessment

## Methodology

### Purpose
Evaluate whether public comments on the HTI-5 NPRM (FR Doc 2025-23896) demonstrate
accurate understanding of the proposal and whether requested changes fall within the
logical outgrowth doctrine of the Administrative Procedure Act.

### Reference Document
- **NPRM**: "Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions
  To Unleash Prosperity" (90 FR 60970-61034, December 29, 2025)
- **Docket**: HHS-ONC-2025-0005
- **RIN**: 0955-AA09
- **Comment deadline**: February 27, 2026
- **Full text**: `raw-data/hti5-nprm-clean.txt`

### NPRM Scope Summary
The HTI-5 NPRM proposes to:
1. **Remove 34 of 60 certification criteria** and revise 7 (retain 19 unchanged)
2. **Remove all privacy/security certification criteria** (d)(1) through (d)(13) —
   authentication, audit logs, encryption, access control, integrity, etc.
3. **Remove clinical decision support criterion** §170.315(a)(9)
4. **Revise decision support interventions** §170.315(b)(11) to remove AI "model card" requirements
5. **Remove C-CDA-related criteria** and transition toward FHIR-only
6. **Revise information blocking definitions** to cover AI systems
7. **Remove TEFCA Manner Exception** from Part 171
8. **Adopt USCDI v3.1** (with some data element removals from v3)
9. **Descope Real World Testing** and Insights reporting requirements

Estimated savings: $1.53 billion in present value for health IT developers.

### Assessment Dimensions

#### 1. Understanding Score (0-5)
How well does the commenter understand:
- The **existing** regulatory framework (45 CFR Parts 170-171)
- What the NPRM **actually proposes** (vs what they think it proposes)
- The **rationale** ONC provides for its proposals
- The **distinction** between certification requirements and underlying law (e.g., HIPAA)

| Score | Label | Description |
|-------|-------|-------------|
| 5 | Expert | Demonstrates deep knowledge of regulatory framework, cites specific CFR sections, understands nuances between certification and underlying law |
| 4 | Strong | Clearly understands the proposal, addresses specific provisions accurately, may have minor gaps |
| 3 | Adequate | Generally understands what's proposed, addresses relevant issues, but may conflate some concepts |
| 2 | Partial | Shows some awareness of the proposal but has significant misunderstandings or addresses tangential issues |
| 1 | Weak | Fundamental misunderstanding of what's proposed or how the regulatory framework works |
| 0 | Off-topic | Comment is not relevant to the NPRM or demonstrates no understanding |

#### 2. Logical Outgrowth Classification
Whether the commenter's requested change could be adopted in a final rule under the
APA's logical outgrowth doctrine.

| Classification | Description |
|----------------|-------------|
| `within_scope` | Change directly responds to what was proposed; agency could adopt without re-proposing |
| `likely_within` | Change is closely related to proposal; reasonable person would have anticipated this as possible outcome |
| `borderline` | Arguable whether this is a logical outgrowth; may require additional analysis |
| `outside_scope` | Change introduces new regulatory concepts not in NPRM; would require separate rulemaking |
| `not_applicable` | Comment provides general feedback without requesting specific regulatory change |

Key principle: A final rule is a logical outgrowth of a proposed rule if interested
parties should have anticipated that the change was possible, and thus reasonably should
have filed their comments on the subject during the notice-and-comment period.

#### 3. Provision Addressed
Which NPRM provision(s) the comment primarily addresses:
- `certification_removal_general` — General opposition/support for removing criteria
- `privacy_security_criteria` — §170.315(d)(1)-(d)(13) removal
- `audit_log_criteria` — §170.315(d)(2), (d)(3), (d)(10) specifically
- `cds_removal` — §170.315(a)(9) CDS removal
- `dsi_ai_model_card` — §170.315(b)(11) AI model card removal
- `ccda_transition` — C-CDA to FHIR transition
- `uscdi_data_elements` — USCDI v3.1 data element changes
- `information_blocking` — Part 171 revisions
- `tefca_removal` — TEFCA Manner Exception removal
- `real_world_testing` — RWT/SVAP descoping
- `patient_demographics` — §170.315(a)(5) revision
- `public_health_reporting` — §170.315(f) criteria changes
- `burden_reduction_general` — General burden reduction support
- `multiple_provisions` — Comment addresses several specific provisions
- `general_comment` — General comment not tied to specific provision

#### 4. Agency Posture Recommendation
- `accept` — Adopt commenter's recommendation as stated
- `accept_with_modification` — Adopt with changes
- `partially_accept` — Accept some elements, reject others
- `acknowledge` — Note the comment but no change needed
- `reject` — Decline the recommendation with explanation

### Analysis Process
1. Read each comment's full_text and summary from comments.json
2. Compare against NPRM text to assess understanding accuracy
3. Classify the requested change under logical outgrowth
4. Score understanding on 0-5 scale with brief rationale
5. Recommend agency posture

### Prompt Used
See `source/assessment-prompt.md` for the exact prompt template used for analysis.

### Transparency
- All prompts, methodology, and assessment criteria are version-controlled in this repository
- Individual comment assessments are stored in `data/comment_assessments.json`
- Assessment was performed by Claude (Anthropic) with human review
- The NPRM full text was used as the reference document for all scoring

### Limitations
- Assessment reflects AI interpretation of regulatory text and comment content
- Logical outgrowth analysis is inherently subjective and depends on case law interpretation
- Understanding scores weight technical accuracy over policy merit
- Comments with attachments may have analysis that doesn't fully capture attachment content
