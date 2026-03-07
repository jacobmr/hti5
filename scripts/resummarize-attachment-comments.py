#!/usr/bin/env python3
"""
Re-summarize the 31 attachment-only comments using their newly extracted text.
Updates data/comments.json with proper summary, position, themes, etc.

This script reads each comment's extracted attachment text, analyzes it for:
- Position on deregulation (strongly_oppose through strongly_support)
- Relevant themes (from the 12 defined theme categories)
- Summary (1-2 sentence description)
- Notable quote
- Recommendations
- Organization type
- Sentiment score (-3 to +3)
- Comment length

The analysis is deterministic and based on keyword/pattern matching against
the HTI-5 NPRM's specific provisions and the comment text.
"""

import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
COMMENTS_FILE = os.path.join(ROOT, "data", "comments.json")
EXTRACTED_DIR = os.path.join(ROOT, "raw-data", "comments", "attachments-extracted")

# Theme detection patterns - each theme maps to keywords/phrases that indicate it
THEME_PATTERNS = {
    "fhir_standards": [
        r"\bFHIR\b", r"\bHL7\b", r"FHIR-based", r"FHIR-forward",
        r"FHIR R4", r"SMART on FHIR", r"FHIR API",
        r"Fast Healthcare Interoperability",
    ],
    "ccda_removal": [
        r"\bC-CDA\b", r"\bCDA\b", r"Consolidated CDA",
        r"transitions of care", r"clinical document",
        r"document-based exchange", r"§\s*170\.315\(b\)\(1\)",
    ],
    "uscdi_data_classes": [
        r"\bUSCDI\b", r"United States Core Data",
        r"data class", r"data element",
        r"USCDI v\d", r"USCDI\+",
    ],
    "patient_safety": [
        r"patient safety", r"patient harm", r"clinical safety",
        r"safety concern", r"safety risk", r"patient protection",
        r"harm to patient", r"unintended harm", r"adverse",
        r"risk to patient", r"patient welfare",
    ],
    "audit_log_standards": [
        r"audit log", r"audit trail", r"auditing",
        r"§\s*170\.315\(d\)\(2\)", r"record integrity",
        r"audit requirement",
    ],
    "information_blocking": [
        r"information blocking", r"info\s*blocking",
        r"Infeasibility Exception", r"information-blocking",
        r"§\s*171", r"blocking exception", r"blocking regulation",
    ],
    "burden_reduction": [
        r"burden reduction", r"reduce burden", r"regulatory burden",
        r"administrative burden", r"compliance burden", r"cost reduction",
        r"reduce cost", r"streamlin", r"simplif",
    ],
    "ai_regulation": [
        r"\bAI\b", r"artificial intelligence", r"machine learning",
        r"algorithm", r"decision support", r"\bDSI\b",
        r"predictive", r"model card", r"AI transparency",
        r"AI-driven", r"AI-enabled",
    ],
    "data_privacy": [
        r"data privacy", r"privacy", r"\bHIPAA\b",
        r"patient consent", r"data protection", r"data security",
        r"cybersecurity", r"breach", r"unauthorized access",
    ],
    "clinical_workflow": [
        r"clinical workflow", r"clinician workflow",
        r"provider workflow", r"EHR workflow",
        r"clinical practice", r"care delivery",
        r"point of care", r"care coordination",
    ],
    "health_equity": [
        r"health equity", r"health disparit", r"underserved",
        r"rural", r"safety.net", r"vulnerable population",
        r"access to care", r"equity",
    ],
    "long_term_care": [
        r"long.term care", r"\bLTCH\b", r"\bSNF\b",
        r"post.acute", r"nursing facilit", r"behavioral health",
        r"home health", r"long.term.post.acute",
    ],
}

# Position detection - look for overall stance on deregulation
OPPOSE_STRONG = [
    r"strongly oppose", r"strongly urge.*not", r"strongly recommend against",
    r"serious concern", r"grave concern", r"deeply concerned",
    r"strongly disagree", r"vehemently oppose", r"firmly oppose",
    r"must not.*remov", r"should not.*remov", r"dangerous",
    r"urge.*reject", r"urge.*withdraw",
]
OPPOSE = [
    r"oppose", r"concern", r"urge.*retain", r"urge.*reconsider",
    r"recommend.*retain", r"should not.*eliminat", r"premature",
    r"not support.*remov", r"caution against", r"advise against",
    r"recommend against", r"should.*maintain", r"retain.*criterion",
]
SUPPORT_STRONG = [
    r"strongly support", r"enthusiastically support",
    r"applaud.*deregulat", r"commend.*deregulat",
    r"wholeheartedly support", r"fully support.*remov",
]
SUPPORT = [
    r"support.*deregulat", r"support.*remov", r"welcome.*deregulat",
    r"agree.*remov", r"support.*propos", r"endorse",
    r"appreciate.*deregulat", r"support.*streamlin",
    r"reduce.*unnecessary", r"support.*eliminat",
]
NEUTRAL_MIXED = [
    r"mixed", r"some.*support.*some.*concern",
    r"support.*but.*concern", r"generally support.*however",
    r"appreciate.*but", r"while.*support.*urge",
]

# Org type detection
ORG_TYPE_PATTERNS = {
    "ehr_vendor": [r"\bEHR\b.*vendor", r"certified health IT developer", r"health IT company",
                   r"electronic health record.*develop"],
    "health_it_company": [r"health IT", r"health information technology", r"interoperability platform",
                          r"software company", r"technology company", r"health tech"],
    "health_system": [r"health system", r"hospital", r"medical center", r"healthcare system",
                      r"health network", r"health care system", r"integrated delivery"],
    "professional_association": [r"association", r"society", r"alliance", r"coalition", r"council",
                                 r"college of", r"academy of", r"institute of"],
    "government_agency": [r"department of health", r"state of", r"office of", r"public health agency",
                          r"state health", r"government"],
    "individual_clinician": [r"physician", r"nurse", r"clinician", r"doctor", r"MD\b", r"practitioner",
                             r"medical professional"],
    "patient_advocate": [r"patient advocate", r"patient organization", r"patient rights",
                         r"rare disease", r"patient community"],
    "advocacy_group": [r"advocacy", r"nonprofit", r"non-profit", r"consumer", r"public interest",
                       r"digital rights", r"civil liberties"],
    "patient_safety_experts": [r"patient safety", r"safety authority", r"safety organization"],
    "academic_research": [r"universit", r"academic", r"research", r"medical school"],
    "payer": [r"payer", r"health plan", r"insurer", r"insurance"],
    "pharmacy": [r"pharmac", r"rx"],
    "lab": [r"laborator", r"pathology", r"diagnostic"],
}


def load_attachment_text(comment_id):
    """Load all extracted attachment text for a comment."""
    texts = []
    for fname in sorted(os.listdir(EXTRACTED_DIR)):
        if fname.startswith(comment_id) and fname.endswith(".md"):
            path = os.path.join(EXTRACTED_DIR, fname)
            with open(path) as f:
                content = f.read()
            # Strip markdown header
            lines = content.split("\n")
            body_lines = []
            for line in lines:
                if line.startswith("#") or line.startswith("**Source") or line.strip() == "---":
                    continue
                body_lines.append(line)
            texts.append("\n".join(body_lines).strip())
    return "\n\n".join(texts)


def detect_themes(text):
    """Detect which themes are present in the text."""
    themes = []
    text_lower = text.lower()
    for theme, patterns in THEME_PATTERNS.items():
        score = 0
        for pattern in patterns:
            matches = re.findall(pattern, text, re.IGNORECASE)
            score += len(matches)
        # Require at least 2 mentions to count a theme
        if score >= 2:
            themes.append((theme, score))
    # Sort by relevance and return theme names
    themes.sort(key=lambda x: -x[1])
    return [t[0] for t in themes]


def detect_position(text):
    """Detect the commenter's position on deregulation."""
    text_lower = text.lower()

    strong_oppose_score = sum(
        len(re.findall(p, text_lower)) for p in OPPOSE_STRONG
    )
    oppose_score = sum(len(re.findall(p, text_lower)) for p in OPPOSE)
    strong_support_score = sum(
        len(re.findall(p, text_lower)) for p in SUPPORT_STRONG
    )
    support_score = sum(len(re.findall(p, text_lower)) for p in SUPPORT)
    mixed_score = sum(len(re.findall(p, text_lower)) for p in NEUTRAL_MIXED)

    total_oppose = strong_oppose_score * 3 + oppose_score
    total_support = strong_support_score * 3 + support_score

    if mixed_score >= 3 and abs(total_oppose - total_support) < 5:
        return "neutral_mixed", "Mixed/Neutral"
    elif total_oppose > total_support:
        if strong_oppose_score >= 2 or total_oppose >= 10:
            return "strongly_oppose_deregulation", "Strongly Oppose"
        else:
            return "oppose_deregulation", "Oppose"
    elif total_support > total_oppose:
        if strong_support_score >= 2 or total_support >= 10:
            return "strongly_support_deregulation", "Strongly Support"
        else:
            return "support_deregulation", "Support"
    else:
        return "neutral_mixed", "Mixed/Neutral"


def detect_org_type(text, current_org_type):
    """Detect organization type from text."""
    if current_org_type and current_org_type != "unknown":
        return current_org_type

    text_lower = text[:3000].lower()  # Check header area
    for org_type, patterns in ORG_TYPE_PATTERNS.items():
        for pattern in patterns:
            if re.search(pattern, text_lower, re.IGNORECASE):
                return org_type
    return "other"


def generate_sentiment(position):
    """Generate sentiment score from position."""
    mapping = {
        "strongly_oppose_deregulation": -2.5,
        "oppose_deregulation": -1.5,
        "neutral_mixed": 0,
        "support_deregulation": 1.5,
        "strongly_support_deregulation": 2.5,
        "unclear": 0,
    }
    return mapping.get(position, 0)


def extract_notable_quote(text):
    """Find a notable/quotable sentence from the text."""
    sentences = re.split(r'(?<=[.!?])\s+', text)
    # Filter for good quote candidates
    candidates = []
    for s in sentences:
        s = s.strip()
        if len(s) < 40 or len(s) > 300:
            continue
        # Prefer sentences with strong language
        score = 0
        for word in ["urge", "critical", "essential", "must", "important",
                     "strongly", "significant", "concerned", "recommend",
                     "oppose", "support", "patient", "safety", "risk"]:
            if word in s.lower():
                score += 1
        if score >= 2:
            candidates.append((score, s))

    if candidates:
        candidates.sort(key=lambda x: -x[0])
        return candidates[0][1]
    # Fallback: return a mid-document sentence
    if len(sentences) > 3:
        mid = len(sentences) // 3
        for s in sentences[mid:mid+5]:
            s = s.strip()
            if 60 < len(s) < 250:
                return s
    return ""


def extract_recommendations(text):
    """Extract explicit recommendations from the text."""
    recs = []
    sentences = re.split(r'(?<=[.!?])\s+', text)
    for s in sentences:
        s = s.strip()
        if len(s) < 30 or len(s) > 400:
            continue
        lower = s.lower()
        if any(phrase in lower for phrase in [
            "recommend", "urge", "request that", "should",
            "we ask", "we encourage", "we suggest",
        ]):
            # Clean up the recommendation
            rec = s.strip()
            if rec and rec not in recs:
                recs.append(rec)
    # Return top 3-5 most relevant
    return recs[:5]


def generate_summary(text, themes, position_label, org_name):
    """Generate a 1-2 sentence summary of the comment."""
    # Get the first substantive paragraph (skip headers/addresses)
    paragraphs = [p.strip() for p in text.split("\n\n") if len(p.strip()) > 100]

    # Try to find the core argument
    core_sentences = []
    for p in paragraphs:
        sentences = re.split(r'(?<=[.!?])\s+', p)
        for s in sentences:
            s = s.strip()
            if len(s) < 40:
                continue
            lower = s.lower()
            # Look for position statements
            if any(w in lower for w in ["support", "oppose", "concern", "recommend",
                                        "urge", "comment", "respond", "submit"]):
                core_sentences.append(s)

    # Build summary from key info
    who = org_name if org_name else "The commenter"
    theme_names = {
        "fhir_standards": "FHIR standards",
        "ccda_removal": "C-CDA removal",
        "uscdi_data_classes": "USCDI data classes",
        "patient_safety": "patient safety",
        "audit_log_standards": "audit log standards",
        "information_blocking": "information blocking",
        "burden_reduction": "burden reduction",
        "ai_regulation": "AI regulation",
        "data_privacy": "data privacy",
        "clinical_workflow": "clinical workflows",
        "health_equity": "health equity",
        "long_term_care": "long-term/post-acute care",
    }
    theme_strs = [theme_names.get(t, t) for t in themes[:3]]

    if core_sentences:
        # Use the best core sentence as basis
        best = core_sentences[0]
        if len(best) > 200:
            best = best[:197] + "..."
        return best
    elif theme_strs:
        theme_list = ", ".join(theme_strs)
        return f"{who} comments on {theme_list} provisions in the HTI-5 proposed rule."
    else:
        return f"{who} provides comments on the HTI-5 proposed rule."


def main():
    with open(COMMENTS_FILE) as f:
        comments = json.load(f)

    # Index by ID
    by_id = {c["id"]: c for c in comments}

    att_only = [c for c in comments if "no substantive" in (c.get("summary") or "").lower()]
    print(f"Processing {len(att_only)} attachment-only comments...\n")

    updated = 0
    for c in att_only:
        cid = c["id"]
        text = load_attachment_text(cid)
        if not text or len(text) < 50:
            print(f"  SKIP {cid}: no/short extracted text ({len(text)} chars)")
            continue

        org = c.get("organization", "") or c.get("commenter", "")

        # Analyze
        themes = detect_themes(text)
        position, position_label = detect_position(text)
        org_type = detect_org_type(text, c.get("org_type", "unknown"))
        sentiment = generate_sentiment(position)
        quote = extract_notable_quote(text)
        recs = extract_recommendations(text)
        summary = generate_summary(text, themes, position_label, org)

        # Update comment
        c["position"] = position
        c["position_label"] = position_label
        c["sentiment_score"] = sentiment
        c["themes"] = themes
        c["summary"] = summary
        c["notable_quote"] = quote
        c["recommendations"] = recs
        c["comment_length"] = len(text)

        if org_type != "unknown":
            c["org_type"] = org_type

        print(f"  {cid}: pos={position_label}, themes={themes[:4]}, {len(text)} chars")
        updated += 1

    # Save
    with open(COMMENTS_FILE, "w") as f:
        json.dump(comments, f, indent=2, ensure_ascii=False)

    print(f"\nUpdated {updated}/{len(att_only)} comments in {COMMENTS_FILE}")


if __name__ == "__main__":
    main()
