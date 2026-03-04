#!/usr/bin/env python3
"""
Coordination Analysis for HTI-5 Comments

Analyzes 305 public comments to identify:
1. Text similarity patterns (Jaccard overlap on 5-grams)
2. Keyword fingerprinting for known campaigns
3. Template-based coordination detection
"""

import json
import re
from collections import defaultdict
from pathlib import Path


def load_comments(filepath):
    """Load all-comments.json and return list of comments."""
    with open(filepath, "r", encoding="utf-8") as f:
        return json.load(f)


def get_5grams(text):
    """Extract character 5-grams from text."""
    text = text.lower()
    grams = set()
    for i in range(len(text) - 4):
        grams.add(text[i : i + 5])
    return grams


def jaccard_similarity(text1, text2, min_length=50):
    """Compute Jaccard similarity between two texts."""
    if len(text1) < min_length or len(text2) < min_length:
        return 0.0

    grams1 = get_5grams(text1)
    grams2 = get_5grams(text2)

    if not grams1 or not grams2:
        return 0.0

    intersection = len(grams1 & grams2)
    union = len(grams1 | grams2)
    return intersection / union if union > 0 else 0.0


def detect_attorney_audit_trail_campaign(comments):
    """
    Detect attorney network campaign on audit trail preservation.

    Fingerprints:
    - "ASTM E2147" (audit standard)
    - "ephemeral" (ephemeral messaging)
    - "audit" (general audit references)
    - Opening template: "I write to you as both a health care consumer"
    """
    attorney_comments = []

    for comment in comments:
        text = comment.get("comment_text", "")

        # Skip stub comments
        if len(text.strip()) < 50:
            continue

        text_lower = text.lower()

        # Fingerprint detection
        has_astm = "astm e2147" in text_lower
        has_ephemeral = "ephemeral" in text_lower
        has_audit = "audit" in text_lower
        has_template = "i write to you as both a health care consumer" in text_lower

        # Campaign signal: ASTM + ephemeral + audit (strong signal for attorney network)
        if has_astm and has_ephemeral and has_audit:
            attorney_comments.append({
                "id": comment["id"],
                "commenter": comment.get("commenter_name", "Unknown"),
                "organization": comment.get("organization", ""),
                "text_length": len(text),
                "fingerprint_matches": {
                    "astm_e2147": has_astm,
                    "ephemeral": has_ephemeral,
                    "audit": has_audit,
                    "template": has_template,
                }
            })

    return attorney_comments


def analyze_text_similarity_clusters(comments, similarity_threshold=0.45, min_cluster_size=3):
    """
    Cluster comments by text similarity.
    Returns groups of similar comments.
    """
    clusters = []
    processed = set()

    # Filter out stub comments
    substantial_comments = [
        c for c in comments
        if len(c.get("comment_text", "").strip()) >= 50
    ]

    for i, comment1 in enumerate(substantial_comments):
        if comment1["id"] in processed:
            continue

        cluster = [comment1["id"]]
        text1 = comment1.get("comment_text", "")

        for j, comment2 in enumerate(substantial_comments[i + 1:], i + 1):
            if comment2["id"] in processed:
                continue

            text2 = comment2.get("comment_text", "")
            similarity = jaccard_similarity(text1, text2)

            if similarity >= similarity_threshold:
                cluster.append(comment2["id"])
                processed.add(comment2["id"])

        processed.add(comment1["id"])

        if len(cluster) >= min_cluster_size:
            clusters.append({
                "ids": cluster,
                "size": len(cluster),
                "similarity_threshold": similarity_threshold,
                "seed_text_length": len(text1)
            })

    return clusters


def load_comments_lookup(filepath):
    """Load comments.json to get org_type, position, themes."""
    with open(filepath, "r", encoding="utf-8") as f:
        comments_data = json.load(f)

    lookup = {}
    for c in comments_data:
        lookup[c["id"]] = {
            "org_type": c.get("org_type"),
            "position": c.get("position"),
            "themes": c.get("themes", [])
        }
    return lookup


def generate_coordination_data(raw_comments, all_comments_lookup):
    """
    Generate coordination_groups.json structure.
    """
    groups = []

    # Detect attorney audit trail campaign
    attorney_campaign = detect_attorney_audit_trail_campaign(raw_comments)

    if attorney_campaign:
        comment_ids = [c["id"] for c in attorney_campaign]

        groups.append({
            "id": "attorney_audit_trail",
            "label": "Legal Professional Network: Audit Trail Preservation",
            "description": "Legal professionals sharing a common template arguing to preserve ASTM E2147-18 audit trail standards. Campaign coordinated through a patient safety advocacy network. These comments represent organized legal advocacy for patient safety—the strongest organized opposition to audit trail deregulation.",
            "theme": "audit_log_standards",
            "stance": "oppose_deregulation",
            "count": len(attorney_campaign),
            "comment_ids": comment_ids,
            "fingerprint_phrases": [
                "ASTM E2147",
                "ephemeral messaging",
                "copy-paste and copy forward",
                "audit trail",
                "audit record"
            ],
            "significance": "Organized legal advocacy for patient safety. Not commercial interest. Strongest organized opposition to audit trail deregulation.",
        })

    # Summary statistics
    summary = {
        "total_coordinated": sum(g["count"] for g in groups),
        "pct_of_comments": round((sum(g["count"] for g in groups) / len(all_comments_lookup)) * 100, 1),
        "campaigns_identified": len(groups),
    }

    return {
        "groups": groups,
        "summary": summary
    }


def main():
    """Main execution."""
    # Paths
    hti5_root = Path(__file__).parent.parent
    raw_file = hti5_root / "raw-data" / "comments" / "full-text" / "all-comments.json"
    comments_file = hti5_root / "client" / "src" / "data" / "comments.json"
    output_file = hti5_root / "client" / "src" / "data" / "coordination_groups.json"

    print(f"Loading raw comments from {raw_file}...")
    raw_comments = load_comments(raw_file)
    print(f"  Loaded {len(raw_comments)} comments")

    print(f"Loading comments lookup from {comments_file}...")
    all_comments_lookup = load_comments_lookup(comments_file)
    print(f"  Loaded {len(all_comments_lookup)} comment records")

    print("Analyzing coordination patterns...")
    print("  - Detecting attorney audit trail campaign...")

    coordination_data = generate_coordination_data(raw_comments, all_comments_lookup)

    print(f"  - Found {coordination_data['summary']['campaigns_identified']} campaign(s)")
    print(f"  - Total coordinated comments: {coordination_data['summary']['total_coordinated']} ({coordination_data['summary']['pct_of_comments']}%)")

    print(f"\nWriting output to {output_file}...")
    output_file.parent.mkdir(parents=True, exist_ok=True)
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(coordination_data, f, indent=2)

    print(f"✓ Coordination analysis complete: {output_file}")

    # Print summary for verification
    for group in coordination_data["groups"]:
        print(f"\n  Campaign: {group['label']}")
        print(f"  - Count: {group['count']} comments")
        print(f"  - Theme: {group['theme']}")
        print(f"  - Stance: {group['stance']}")


if __name__ == "__main__":
    main()
