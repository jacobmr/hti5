"""
Generate the final summary report in Markdown format, including data visualizations.
"""

import json
import os
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from collections import Counter

SUMMARIES_DIR = "/home/ubuntu/onc_comments/summaries"
OUTPUT_DIR = "/home/ubuntu/onc_comments/report"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def load_data():
    """Load all necessary analysis files."""
    with open(f"{SUMMARIES_DIR}/all_summaries.json") as f:
        summaries = json.load(f)
    with open(f"{SUMMARIES_DIR}/analysis_stats.json") as f:
        stats = json.load(f)
    with open(f"{SUMMARIES_DIR}/theme_analyses.json") as f:
        theme_analyses = json.load(f)
    return summaries, stats, theme_analyses

def create_visualizations(stats, summaries):
    """Create and save charts for the report."""
    sns.set_style("whitegrid")
    
    # 1. Position Distribution Chart
    pos_df = pd.DataFrame.from_dict(stats["position_distribution"], orient='index', columns=["count"])
    pos_df = pos_df.sort_values("count", ascending=False)
    plt.figure(figsize=(10, 6))
    sns.barplot(x=pos_df.index, y=pos_df["count"], palette="viridis")
    plt.title("Distribution of Commenter Positions on Deregulation", fontsize=16)
    plt.xlabel("Position", fontsize=12)
    plt.ylabel("Number of Comments", fontsize=12)
    plt.xticks(rotation=45, ha='right')
    plt.tight_layout()
    plt.savefig(f"{OUTPUT_DIR}/position_distribution.png")
    plt.close()

    # 2. Organization Type Chart
    org_df = pd.DataFrame.from_dict(stats["org_type_distribution"], orient='index', columns=["count"])
    org_df = org_df.sort_values("count", ascending=False).head(10)
    plt.figure(figsize=(12, 7))
    sns.barplot(x=org_df["count"], y=org_df.index, palette="plasma")
    plt.title("Top 10 Commenter Organization Types", fontsize=16)
    plt.xlabel("Number of Comments", fontsize=12)
    plt.ylabel("Organization Type", fontsize=12)
    plt.tight_layout()
    plt.savefig(f"{OUTPUT_DIR}/org_type_distribution.png")
    plt.close()

    # 3. Top Themes Chart
    theme_df = pd.DataFrame.from_dict(stats["top_themes"], orient='index', columns=["count"])
    theme_df = theme_df.sort_values("count", ascending=False).head(15)
    plt.figure(figsize=(12, 8))
    sns.barplot(x=theme_df["count"], y=theme_df.index, palette="magma")
    plt.title("Top 15 Most Frequent Comment Themes", fontsize=16)
    plt.xlabel("Number of Mentions", fontsize=12)
    plt.ylabel("Theme", fontsize=12)
    plt.tight_layout()
    plt.savefig(f"{OUTPUT_DIR}/top_themes.png")
    plt.close()
    
    print("Visualizations created and saved.")

def generate_report(summaries, stats, theme_analyses):
    """Generate the full Markdown report."""
    report = []

    # --- Title and Executive Summary ---
    report.append("# Analysis of Public Comments on ONC/ASTP HTI-5 Proposed Rule")
    report.append("**Document:** HHS-ONC-2025-0005-0001 - Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions to Unleash Prosperity")
    report.append("**Date:** March 2, 2026")
    report.append("**Author:** Manus AI")
    report.append("\n---\n")
    
    report.append("## Executive Summary")
    report.append("This report provides a comprehensive analysis of the 305 public comments submitted in response to the HTI-5 proposed rule. The analysis reveals a significant level of concern from a diverse range of stakeholders regarding the proposed deregulatory actions.")
    report.append("While there is some support for reducing regulatory burden, a plurality of commenters **oppose or strongly oppose** the proposed changes, citing risks to patient safety, data integrity, and interoperability. The average sentiment score across all comments was **-0.81**, indicating a generally negative response to the proposed rule.")
    report.append("Key areas of contention include the removal of C-CDA creation requirements, the reduction of audit log standards, and the potential impacts on health equity and AI transparency. This report synthesizes these findings into thematic deep dives and concludes with a set of strategic recommendations.")
    report.append("\n---\n")

    # --- Overall Landscape ---
    report.append("## Overall Comment Landscape")
    report.append("The 305 public comments represent a wide array of perspectives from across the health care ecosystem.")
    report.append("![Position Distribution](./position_distribution.png)")
    report.append("![Organization Type Distribution](./org_type_distribution.png)")
    report.append("![Top Themes](./top_themes.png)")
    report.append("\n**Key Statistics:**")
    report.append(f"- **Total Comments Analyzed:** {stats['total_comments']}")
    report.append(f"- **Comments with Substantive Text:** {sum(1 for s in summaries if s.get('has_text'))}")
    report.append(f"- **Average Sentiment Score:** {sum(s.get('sentiment_score', 0) for s in summaries if s.get('has_text')) / sum(1 for s in summaries if s.get('has_text')):.2f}")
    report.append("\n---\n")

    # --- Thematic Deep Dives ---
    report.append("## Thematic Deep Dives")
    for theme_key, data in sorted(theme_analyses.items(), key=lambda x: x[1]['comment_count'], reverse=True):
        analysis = data.get('analysis', {})
        if not analysis or 'error' in analysis:
            continue
        
        report.append(f"### {data['label']}")
        report.append(f"**{data['comment_count']} comments** | **Dominant Position:** {analysis.get('dominant_position', 'N/A')}")
        report.append("\n**Analysis:**")
        analysis_text = analysis.get('analysis', '').replace('\n', '\n> ')
        report.append(f"> {analysis_text}")
        report.append("\n**Top Arguments:**")
        for arg in analysis.get('top_arguments', []):
            report.append(f"  - {arg}")
        report.append("\n**Top Recommendations:**")
        for rec in analysis.get('top_recommendations', []):
            report.append(f"  - {rec}")
        report.append("\n")
    report.append("\n---\n")

    # --- Strategic Recommendations ---
    report.append("## Strategic Recommendations")
    report.append("Based on the comprehensive analysis of public comments, the following strategic recommendations are proposed:")
    report.append("1. **Reconsider the removal of C-CDA creation capabilities (§170.315(g)(6))** or, at minimum, propose a phased transition with clear milestones for FHIR-based document exchange maturity. The strong opposition from patient advocates and clinicians highlights the continued reliance on document-based workflows.")
    report.append("2. **Strengthen, rather than weaken, audit log and security requirements.** The overwhelming concern about patient safety and data integrity suggests that any deregulatory action in this area is premature. Instead, focus on modernizing standards to be more effective and less burdensome, without sacrificing core security principles.")
    report.append("3. **Adopt a cautious and evidence-based approach to AI and algorithmic transparency.** While burden reduction is a valid goal, the comments indicate a strong desire for guardrails that ensure fairness, equity, and safety in AI-driven health care tools.")
    report.append("4. **Engage directly with patient advocacy groups and clinician organizations** to address their concerns about the potential negative impacts of deregulation on patient safety, data access, and clinical workflows.")
    report.append("5. **Frame any counter-proposals in the context of subregulatory guidance** to ensure they can be legally incorporated. For example, instead of proposing changes to the final rule, suggest that ONC issue guidance on best practices for FHIR implementation or data security.")
    report.append("\n---\n")
    
    # --- Conclusion ---
    report.append("## Conclusion")
    report.append("The public comments on the HTI-5 proposed rule signal a clear message from the health care community: while the goal of reducing regulatory burden is shared, it should not come at the expense of patient safety, data security, or interoperability. The analysis presented in this report provides a detailed roadmap for understanding the nuanced positions of various stakeholders and for crafting a response that is both strategic and well-grounded in the evidence from the public record.")

    # --- Save Report ---
    with open(f"{OUTPUT_DIR}/summary_report.md", "w") as f:
        f.write("\n".join(report))
    
    print("Final report generated: summary_report.md")

if __name__ == "__main__":
    summaries, stats, theme_analyses = load_data()
    create_visualizations(stats, summaries)
    generate_report(summaries, stats, theme_analyses)
