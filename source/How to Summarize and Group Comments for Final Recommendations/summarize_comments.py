"""
Use OpenAI API to summarize and extract key concepts from all 305 comments.
Processes comments in parallel using threading.
"""

import json
import os
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from openai import OpenAI

client = OpenAI()  # Uses OPENAI_API_KEY env var

SUMMARIES_DIR = "/home/ubuntu/onc_comments/summaries"
os.makedirs(SUMMARIES_DIR, exist_ok=True)

SYSTEM_PROMPT = """You are an expert policy analyst reviewing public comments on a federal rulemaking. 
The rulemaking is: "Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions to Unleash Prosperity" (HTI-5).

This proposed rule from ONC/ASTP proposes to REMOVE or REDUCE several health IT certification requirements, including:
- Removing the Consolidated CDA (C-CDA) creation certification criterion
- Removing or reducing audit log requirements
- Removing or reducing electronic health information (EHI) export requirements
- Reducing USCDI (United States Core Data for Interoperability) data class requirements
- Removing certain standardized API requirements
- Other deregulatory actions aimed at reducing burden on health IT developers

Your task: Analyze the provided public comment and extract structured information."""

def summarize_comment(comment):
    """Summarize a single comment using OpenAI."""
    cid = comment['id']
    output_file = f"{SUMMARIES_DIR}/{cid}.json"
    
    if os.path.exists(output_file):
        with open(output_file) as f:
            return json.load(f)
    
    # Prepare the text - truncate if too long (max ~8000 chars for context)
    full_text = comment.get('full_text', '').strip()
    if not full_text or len(full_text) < 50:
        # No substantive text
        result = {
            "id": cid,
            "commenter_name": comment.get('commenter_name', ''),
            "organization": comment.get('organization', ''),
            "org_type": "unknown",
            "posted_date": comment.get('posted_date', ''),
            "has_text": False,
            "summary": "No substantive comment text available (attachment only or blank).",
            "position": "unclear",
            "key_themes": [],
            "specific_provisions": [],
            "key_arguments": [],
            "recommendations": [],
            "sentiment_score": 0,
            "comment_length": 0
        }
        with open(output_file, 'w') as f:
            json.dump(result, f, indent=2)
        return result
    
    # Truncate very long comments
    text_to_analyze = full_text[:12000] if len(full_text) > 12000 else full_text
    if len(full_text) > 12000:
        text_to_analyze += f"\n\n[Note: Comment truncated from {len(full_text)} chars for analysis]"
    
    user_prompt = f"""Please analyze this public comment on the HTI-5 proposed rule:

**Commenter:** {comment.get('commenter_name', 'Unknown')}
**Organization:** {comment.get('organization', 'N/A')}
**Posted:** {comment.get('posted_date', 'Unknown')}

**Comment Text:**
{text_to_analyze}

Please provide a structured analysis in the following JSON format:
{{
  "org_type": "one of: individual_clinician, patient_advocate, health_system, ehr_vendor, health_it_company, professional_association, government_agency, academic_research, advocacy_group, payer, pharmacy, lab, other",
  "summary": "2-3 sentence summary of the comment's main points",
  "position": "one of: strongly_support_deregulation, support_deregulation, neutral_mixed, oppose_deregulation, strongly_oppose_deregulation",
  "key_themes": ["list of 2-5 key themes, e.g.: 'audit_log_standards', 'ccda_removal', 'uscdi_data_classes', 'interoperability', 'patient_safety', 'burden_reduction', 'data_privacy', 'ai_regulation', 'fhir_standards', 'ehi_export', 'health_equity', 'vendor_burden', 'clinical_workflow'"],
  "specific_provisions": ["list of specific rule provisions mentioned, e.g.: '170.315(g)(6) C-CDA', '170.315(d)(2) audit logs', 'USCDI v3', 'EHI export'"],
  "key_arguments": ["list of 2-4 main arguments made"],
  "recommendations": ["list of specific recommendations or asks from ONC"],
  "sentiment_score": integer from -3 (strongly oppose) to +3 (strongly support deregulation),
  "notable_quote": "one particularly impactful or representative quote from the comment (max 150 chars)"
}}

Return ONLY valid JSON, no other text."""

    try:
        response = client.chat.completions.create(
            model="gpt-4.1-mini",
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_prompt}
            ],
            temperature=0.1,
            max_tokens=800,
            response_format={"type": "json_object"}
        )
        
        analysis = json.loads(response.choices[0].message.content)
        
        result = {
            "id": cid,
            "commenter_name": comment.get('commenter_name', ''),
            "organization": comment.get('organization', ''),
            "posted_date": comment.get('posted_date', ''),
            "has_text": True,
            "comment_length": len(full_text),
            **analysis
        }
        
        with open(output_file, 'w') as f:
            json.dump(result, f, indent=2)
        
        return result
        
    except Exception as e:
        print(f"  ERROR summarizing {cid}: {e}")
        result = {
            "id": cid,
            "commenter_name": comment.get('commenter_name', ''),
            "organization": comment.get('organization', ''),
            "posted_date": comment.get('posted_date', ''),
            "has_text": True,
            "comment_length": len(full_text),
            "summary": f"Error during analysis: {e}",
            "position": "unclear",
            "key_themes": [],
            "specific_provisions": [],
            "key_arguments": [],
            "recommendations": [],
            "sentiment_score": 0,
            "org_type": "unknown",
            "error": str(e)
        }
        with open(output_file, 'w') as f:
            json.dump(result, f, indent=2)
        return result

def main():
    # Load consolidated comments
    with open("/home/ubuntu/onc_comments/raw_json/comments_consolidated.json") as f:
        comments = json.load(f)
    
    print(f"Total comments to summarize: {len(comments)}")
    
    # Check which are already done
    done = set()
    for fname in os.listdir(SUMMARIES_DIR):
        if fname.endswith('.json'):
            done.add(fname.replace('.json', ''))
    
    remaining = [c for c in comments if c['id'] not in done]
    print(f"Already summarized: {len(done)}, Remaining: {len(remaining)}")
    
    if not remaining:
        print("All done!")
        return
    
    # Process in parallel with ThreadPoolExecutor
    results = []
    errors = 0
    start_time = time.time()
    
    with ThreadPoolExecutor(max_workers=10) as executor:
        futures = {executor.submit(summarize_comment, c): c for c in remaining}
        
        for i, future in enumerate(as_completed(futures)):
            comment = futures[future]
            try:
                result = future.result()
                results.append(result)
                
                elapsed = time.time() - start_time
                rate = (i + 1) / elapsed * 60 if elapsed > 0 else 0
                eta = (len(remaining) - i - 1) / (rate / 60) if rate > 0 else 0
                
                pos = result.get('position', 'unclear')[:15]
                themes = ', '.join(result.get('key_themes', [])[:3])
                print(f"[{i+1}/{len(remaining)}] {comment['id']} | {pos} | {themes[:50]} | {rate:.0f}/min ETA:{eta:.1f}m")
                
            except Exception as e:
                errors += 1
                print(f"[{i+1}/{len(remaining)}] ERROR: {comment['id']}: {e}")
    
    # Load all summaries
    all_summaries = []
    for comment in comments:
        fname = f"{SUMMARIES_DIR}/{comment['id']}.json"
        if os.path.exists(fname):
            with open(fname) as f:
                all_summaries.append(json.load(f))
    
    # Save consolidated summaries
    output_path = "/home/ubuntu/onc_comments/summaries/all_summaries.json"
    with open(output_path, 'w') as f:
        json.dump(all_summaries, f, indent=2)
    
    elapsed_total = time.time() - start_time
    print(f"\n=== DONE ===")
    print(f"Summarized: {len(all_summaries)}")
    print(f"Errors: {errors}")
    print(f"Time: {elapsed_total/60:.1f} minutes")
    
    # Quick stats
    positions = {}
    for s in all_summaries:
        pos = s.get('position', 'unclear')
        positions[pos] = positions.get(pos, 0) + 1
    
    print("\nPosition distribution:")
    for pos, count in sorted(positions.items(), key=lambda x: -x[1]):
        print(f"  {pos}: {count}")

if __name__ == "__main__":
    main()
