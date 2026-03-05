# Assessment Prompt — HTI-5 Comment Quality Analysis

## Origin

This prompt was provided by the user on March 5, 2026, based on a suggestion from Claude
for adding analytical depth to the HTI-5 comment analysis. The concern expressed was that
the existing analysis was missing critique/analytic insight regarding:

a) Whether commenters actually understand the proposal or the original rule (some likely do not)
b) Whether the "ask" respects logical outgrowth and should therefore be considered — since
that respect is required by law

## Prompt (as provided)

### Role

You are assisting with structured analysis of public comments on the HTI-5 NPRM.
The goal is to evaluate whether comments demonstrate an accurate understanding of the
proposal and whether their requested changes are relevant and legally feasible within
the logical outgrowth doctrine.

### Tasks

For each comment:

#### 1. Understand the comment

Summarize:

- What provision of the NPRM the commenter is addressing
- What change they are requesting
- The rationale they provide

#### 2. Assess understanding

Score 0–5 and explain briefly:

- Understanding of the existing regulatory framework
- Understanding of the NPRM proposal
- Relevance of the comment to the rulemaking
- Practical usefulness for the agency

Call out misinterpretations or incorrect assumptions.

#### 3. Logical outgrowth analysis

Determine whether the requested change is:

- Clearly within scope of the NPRM
- Likely within scope
- Borderline
- Outside logical outgrowth

Briefly explain why, referencing the NPRM text if possible.

#### 4. Agency posture

Recommend one:

- Accept
- Accept with modification
- Partially accept
- Reject

Provide a short draft response paragraph suitable for the preamble.

#### 5. If recommending a change

Only propose regulatory changes if they:

- Are clearly supported by comments
- Are within logical outgrowth
- Do not introduce new regulatory concepts absent from the NPRM

Provide:

- Suggested regulatory text change (if applicable)
- Short justification.

### Output format

Use the following sections:

```
Comment Summary
Understanding Assessment
Logical Outgrowth Analysis
Recommended Agency Response
Possible Rule Text Change (if any)
```

Be concise and analytical.

## Implementation Notes

The prompt was adapted into a structured JSON schema for systematic application across
all 298 comments. See `source/assessment-methodology.md` for the full scoring rubric
and `data/comment_assessments.json` for results.

Key adaptations:

- Understanding score formalized as 0-5 scale with defined criteria
- Logical outgrowth classification expanded to 5 categories
- Provision addressed mapped to specific NPRM sections
- Agency posture options standardized
- All fields stored as structured data for aggregation and UI display
