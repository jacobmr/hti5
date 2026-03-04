"""
Cluster and analyze all 305 comment summaries by theme.
Produces structured data for the final synthesis document.
"""

import json
import os
from collections import defaultdict, Counter
from openai import OpenAI

client = OpenAI()

def load_summaries():
    """Load all comment summaries."""
    summaries_dir = "/home/ubuntu/onc_comments/summaries"
    summaries = []
    
    for fname in sorted(os.listdir(summaries_dir)):
        if fname.endswith('.json') and fname != 'all_summaries.json':
            with open(f"{summaries_dir}/{fname}") as f:
                summaries.append(json.load(f))
    
    return summaries

def analyze_themes(summaries):
    """Analyze theme distribution across all comments."""
    theme_counts = Counter()
    theme_positions = defaultdict(list)
    theme_orgs = defaultdict(list)
    
    for s in summaries:
        themes = s.get('key_themes', [])
        position = s.get('position', 'unclear')
        org_type = s.get('org_type', 'unknown')
        
        for theme in themes:
            # Normalize theme names
            theme_lower = theme.lower().replace(' ', '_').replace('-', '_')
            theme_counts[theme_lower] += 1
            theme_positions[theme_lower].append(position)
            theme_orgs[theme_lower].append(org_type)
    
    return theme_counts, theme_positions, theme_orgs

def analyze_org_types(summaries):
    """Analyze distribution by organization type."""
    org_type_counts = Counter()
    org_type_positions = defaultdict(list)
    
    for s in summaries:
        org_type = s.get('org_type', 'unknown')
        position = s.get('position', 'unclear')
        org_type_counts[org_type] += 1
        org_type_positions[org_type].append(position)
    
    return org_type_counts, org_type_positions

def analyze_provisions(summaries):
    """Analyze which specific provisions are mentioned most."""
    provision_counts = Counter()
    provision_positions = defaultdict(list)
    
    for s in summaries:
        provisions = s.get('specific_provisions', [])
        position = s.get('position', 'unclear')
        
        for prov in provisions:
            provision_counts[prov] += 1
            provision_positions[prov].append(position)
    
    return provision_counts, provision_positions

def group_comments_by_theme(summaries):
    """Group comments into major thematic clusters."""
    
    # Define major theme clusters
    theme_clusters = {
        "audit_log_standards": {
            "label": "Audit Log Standards & Security",
            "keywords": ["audit_log", "audit log", "security", "cybersecurity", "authentication", "access_control"],
            "comments": []
        },
        "ccda_cda_removal": {
            "label": "C-CDA / Consolidated CDA Removal",
            "keywords": ["ccda", "c-cda", "cda", "consolidated cda", "170.315(g)(6)", "document creation"],
            "comments": []
        },
        "uscdi_data_standards": {
            "label": "USCDI Data Standards & Classes",
            "keywords": ["uscdi", "data class", "data element", "sdoh", "social determinants", "health equity"],
            "comments": []
        },
        "fhir_interoperability": {
            "label": "FHIR & Interoperability Standards",
            "keywords": ["fhir", "api", "interoperability", "standardized_api", "hl7", "smart"],
            "comments": []
        },
        "ehi_export": {
            "label": "Electronic Health Information (EHI) Export",
            "keywords": ["ehi", "ehi_export", "export", "data_portability", "patient_access"],
            "comments": []
        },
        "burden_reduction": {
            "label": "Regulatory Burden Reduction",
            "keywords": ["burden_reduction", "burden", "compliance", "cost", "small_practice", "vendor_burden"],
            "comments": []
        },
        "patient_safety_quality": {
            "label": "Patient Safety & Care Quality",
            "keywords": ["patient_safety", "clinical_workflow", "care_quality", "clinical_decision", "safety"],
            "comments": []
        },
        "ai_regulation": {
            "label": "AI & Algorithmic Transparency",
            "keywords": ["ai_regulation", "ai", "algorithm", "machine_learning", "transparency", "predictive"],
            "comments": []
        },
        "public_health_reporting": {
            "label": "Public Health & Reporting",
            "keywords": ["public_health", "reporting", "surveillance", "immunization", "syndromic"],
            "comments": []
        },
        "health_equity_access": {
            "label": "Health Equity & Access",
            "keywords": ["health_equity", "equity", "underserved", "rural", "disparities", "access"],
            "comments": []
        },
        "general_support": {
            "label": "General Support for Deregulation",
            "keywords": ["support_deregulation", "strongly_support"],
            "comments": []
        },
        "general_opposition": {
            "label": "General Opposition to Deregulation",
            "keywords": ["oppose_deregulation", "strongly_oppose"],
            "comments": []
        }
    }
    
    # Assign comments to clusters
    for s in summaries:
        themes = [t.lower().replace(' ', '_') for t in s.get('key_themes', [])]
        provisions = [p.lower() for p in s.get('specific_provisions', [])]
        position = s.get('position', 'unclear')
        all_text = ' '.join(themes + provisions + [position])
        
        assigned = False
        for cluster_key, cluster in theme_clusters.items():
            for keyword in cluster['keywords']:
                if keyword.lower() in all_text:
                    cluster['comments'].append(s)
                    assigned = True
                    break
            if assigned:
                break
        
        # If not assigned to any specific cluster, put in general based on position
        if not assigned:
            if 'support' in position:
                theme_clusters['general_support']['comments'].append(s)
            elif 'oppose' in position:
                theme_clusters['general_opposition']['comments'].append(s)
    
    return theme_clusters

def generate_theme_deep_dive(theme_label, comments, all_summaries):
    """Use LLM to generate a deep analysis of a specific theme."""
    
    # Prepare comment data for this theme
    comment_data = []
    for c in comments[:30]:  # Limit to 30 most relevant
        comment_data.append({
            "id": c['id'],
            "commenter": c.get('commenter_name', ''),
            "org_type": c.get('org_type', ''),
            "position": c.get('position', ''),
            "summary": c.get('summary', ''),
            "key_arguments": c.get('key_arguments', []),
            "recommendations": c.get('recommendations', []),
            "notable_quote": c.get('notable_quote', '')
        })
    
    prompt = f"""You are analyzing public comments on the ONC HTI-5 proposed rule (deregulatory actions for health IT).

Theme: {theme_label}
Number of comments in this theme: {len(comments)}

Here are the comment summaries for this theme:
{json.dumps(comment_data, indent=2)[:6000]}

Please provide:
1. A comprehensive analysis of this theme (3-4 paragraphs)
2. The dominant position/sentiment among commenters on this theme
3. The 3-5 strongest arguments made (both for and against)
4. The most common specific recommendations from commenters
5. Notable organizations or voices on this theme
6. Key tensions or disagreements within this theme

Format as JSON with keys: analysis, dominant_position, top_arguments, top_recommendations, notable_voices, key_tensions"""

    try:
        response = client.chat.completions.create(
            model="gpt-4.1-mini",
            messages=[
                {"role": "system", "content": "You are an expert health IT policy analyst. Return JSON only."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.2,
            max_tokens=1500,
            response_format={"type": "json_object"}
        )
        return json.loads(response.choices[0].message.content)
    except Exception as e:
        return {"error": str(e), "analysis": f"Analysis failed: {e}"}

def main():
    print("Loading summaries...")
    summaries = load_summaries()
    print(f"Loaded {len(summaries)} summaries")
    
    # Basic statistics
    print("\n=== POSITION DISTRIBUTION ===")
    position_counts = Counter(s.get('position', 'unclear') for s in summaries)
    for pos, count in sorted(position_counts.items(), key=lambda x: -x[1]):
        pct = count / len(summaries) * 100
        print(f"  {pos}: {count} ({pct:.1f}%)")
    
    print("\n=== TOP THEMES ===")
    theme_counts, theme_positions, theme_orgs = analyze_themes(summaries)
    for theme, count in theme_counts.most_common(20):
        print(f"  {theme}: {count}")
    
    print("\n=== ORG TYPES ===")
    org_counts, org_positions = analyze_org_types(summaries)
    for org, count in sorted(org_counts.items(), key=lambda x: -x[1]):
        print(f"  {org}: {count}")
    
    print("\n=== TOP PROVISIONS MENTIONED ===")
    prov_counts, prov_positions = analyze_provisions(summaries)
    for prov, count in prov_counts.most_common(15):
        print(f"  {prov}: {count}")
    
    # Group by theme
    print("\n=== GROUPING BY THEME ===")
    theme_clusters = group_comments_by_theme(summaries)
    for cluster_key, cluster in theme_clusters.items():
        print(f"  {cluster['label']}: {len(cluster['comments'])} comments")
    
    # Save the clustering data
    cluster_data = {}
    for key, cluster in theme_clusters.items():
        cluster_data[key] = {
            "label": cluster['label'],
            "count": len(cluster['comments']),
            "comment_ids": [c['id'] for c in cluster['comments']],
            "position_breakdown": dict(Counter(c.get('position', 'unclear') for c in cluster['comments']))
        }
    
    with open("/home/ubuntu/onc_comments/summaries/theme_clusters.json", 'w') as f:
        json.dump(cluster_data, f, indent=2)
    
    # Generate deep dives for major themes
    print("\n=== GENERATING THEME DEEP DIVES ===")
    theme_analyses = {}
    
    major_themes = [
        ("audit_log_standards", "Audit Log Standards & Security"),
        ("ccda_cda_removal", "C-CDA / Consolidated CDA Removal"),
        ("uscdi_data_standards", "USCDI Data Standards & Classes"),
        ("fhir_interoperability", "FHIR & Interoperability Standards"),
        ("ehi_export", "EHI Export Requirements"),
        ("burden_reduction", "Regulatory Burden Reduction"),
        ("patient_safety_quality", "Patient Safety & Care Quality"),
        ("ai_regulation", "AI & Algorithmic Transparency"),
        ("health_equity_access", "Health Equity & Access"),
    ]
    
    for theme_key, theme_label in major_themes:
        cluster = theme_clusters.get(theme_key, {})
        comments = cluster.get('comments', [])
        
        if len(comments) < 2:
            print(f"  Skipping {theme_label} (only {len(comments)} comments)")
            continue
        
        print(f"  Analyzing {theme_label} ({len(comments)} comments)...")
        analysis = generate_theme_deep_dive(theme_label, comments, summaries)
        theme_analyses[theme_key] = {
            "label": theme_label,
            "comment_count": len(comments),
            "position_breakdown": dict(Counter(c.get('position', 'unclear') for c in comments)),
            "analysis": analysis
        }
    
    with open("/home/ubuntu/onc_comments/summaries/theme_analyses.json", 'w') as f:
        json.dump(theme_analyses, f, indent=2)
    
    print("\nDone! Saved theme_clusters.json and theme_analyses.json")
    
    # Save comprehensive stats
    stats = {
        "total_comments": len(summaries),
        "position_distribution": dict(position_counts),
        "top_themes": dict(theme_counts.most_common(25)),
        "org_type_distribution": dict(org_counts),
        "top_provisions": dict(prov_counts.most_common(20)),
        "theme_cluster_sizes": {k: len(v['comments']) for k, v in theme_clusters.items()}
    }
    
    with open("/home/ubuntu/onc_comments/summaries/analysis_stats.json", 'w') as f:
        json.dump(stats, f, indent=2)
    
    print("Saved analysis_stats.json")

if __name__ == "__main__":
    main()
