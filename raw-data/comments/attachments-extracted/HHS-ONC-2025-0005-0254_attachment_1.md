# HHS-ONC-2025-0005-0254 - attachment 1

**Source:** HHS-ONC-2025-0005-0254_attachment_1.pdf

---

 
 
February 27, 2026 
 
Office of the National Coordinator for Health Information Technology 
U.S. Department of Health and Human Services 
330 C Street SW 
Washington, DC 20201 
Re: RIN 0955-AA09, Comments on the HTI-5 Proposed Rule 
Dear ONC Leadership and Rulemaking Team, 
On behalf of Veradigm we thank the Office of the National Coordinator for the opportunity to provide 
comments on the Health Data, Technology, and Interoperability: Certification Program Updates, Algorithm 
Transparency, and Information Sharing (HTI-5) proposed rule. We appreciate ONC’s continued commitment 
to advancing interoperability, reducing unnecessary regulatory burden, and modernizing the nation’s health 
information infrastructure. 
We welcome the direction outlined in HTI-5, particularly ONC’s efforts to streamline certification, promote 
clarity in the information blocking regulations, and prepare the ecosystem for a more API-centered 
interoperability framework. At the same time, we believe several aspects of the proposed rule warrant further 
consideration to ensure operational stability, alignment with CMS program requirements, and continued 
trust and usability for providers, patients, and public health agencies. 
To help frame the detailed comments that follow, we have summarized below the overarching themes 
reflected across our feedback, with detailed comments in Attachment 1 hereto: 
Key Themes of Our Comments 
1. Support for Modernization with Structured, Predictable Transitions 
We support ONC’s direction toward FHIR-based interoperability but recommend careful, phased 
timelines—particularly where removal of C-CDA, Direct, or standards-based reporting could create 
gaps before replacement frameworks are fully implemented and adopted. 
2. Avoiding Unintended Burden Through Premature Deregulation 
While we appreciate ONC’s deregulatory intent, in several areas (e.g., transitions of care, 
reconciliation, real-world testing changes, automated numerator recording), removing requirements 
without fully operational alternatives may inadvertently increase burden, complexity, or financial risk 
for developers and providers. 

2 
 
2 
3. Need for Alignment with CMS Programs and Industry Dependencies 
Many certification criteria remain tightly coupled to CMS Promoting Interoperability measures and 
real-world clinical workflows. We encourage ONC to synchronize effective dates, retirement 
timelines, and expectations across programs to avoid misalignment, conflicting requirements, or 
operational disruption. 
4. Preserving Transparency, Safety, and Trust—Especially for AI-Enabled Tools 
We support simplification of the Decision Support Intervention (DSI) criterion but highlight the 
importance of maintaining transparency expectations—particularly around provenance, 
accountability, and clinician oversight—given increasing reliance on predictive and automated 
technologies. 
5. Recognition That Some Proposed Removals Do Not Reduce Practical Burden 
In areas such as accessibility, demographics, device information, and security controls, the removal of 
certification criteria does not eliminate underlying legal or operational obligations. Our comments 
suggest clarity to avoid creating the appearance of burden reduction where real-world 
responsibilities remain unchanged. 
6. Support for Removing Low-Value or Obsolete Criteria 
We agree with ONC’s efforts to streamline the program by removing outdated, low-utilization, or 
duplicative certification criteria, including SED, certain security requirements, unused public health 
survey criteria, and fully deprecated definitions. 
7. Recommendations for Thoughtful Modernization of “Access, Exchange, and Use” Definitions 
We support inclusion of automated technologies within these definitions, while recommending that 
ONC ensure consistency across access, use, and exchange and reinforce safeguards for patient 
matching, routing, and human-in-the-loop review where clinically appropriate. 
We appreciate ONC’s efforts to reduce unnecessary regulatory burden while continuing to advance 
interoperability. However, we urge ONC to ensure that HTI-5 does not prematurely dismantle existing 
interoperability scaffolding before replacement pathways are operational, enforceable, and aligned with CMS 
requirements. 
 
We appreciate the opportunity to provide input and look forward to continued collaboration as future HTI 
rulemaking advances. We encourage ONC to: (1) appoint a ONC-CMS workgroup to align certification 
removal and transition timelines with program requirements; (2) commit to readdress data segmentation, 
consent and care planning in the upcoming FHIR-based framework; and (3) provide at least 18 months of 
notice before any removal of widely relied upon criteria goes into effect. 
Respectfully, 
   
Tina Joros, JD  
Vice President – Policy & Innovation 
Veradigm LLC 
 


3 
 
3 
Attachment 1 
 
These comments reflect consolidated stakeholder feedback from Veradigm for the HTI-5 Proposed Rule.  
The feedback below is intended to support ONC’s deregulatory goals while identifying areas where 
premature removal or misaligned timing may inadvertently increase burden, fragment interoperability, or 
create downstream programmatic impacts. 
 
We acknowledge ONC’s stated goals in HTI-5 to: 
 
• Reduce burden on health IT developers by streamlining certification requirements. 
• Update information blocking regulations to improve access, exchange, and use of EHI. 
• Clear regulatory space to support a forthcoming FHIR- and API-centered interoperability framework. 
We agree that modernization toward API-based exchange is necessary. However, we caution that removing 
existing, widely relied-upon standards before clear, enforceable replacements are operational, could risk 
destabilizing current interoperability workflows. 
 
Revisions to Transitions of Care - 170.315(b)(1) 
Support for Modernization — With Timing and Scope Concerns 
ONC proposes revising 170.315(b)(1) to focus solely on receipt of C-CDA documents and removing 
certification requirements related to creation and structured transmission. While we understand ONC’s intent 
to pivot toward FHIR-based exchange, we have concerns with this approach as proposed. 
Key concerns include: 
• Premature removal: C-CDA creation remains foundational for multiple CMS Promoting 
Interoperability (PI) measures and is still required at hospital discharge and care transitions. 
• No defined replacement: Removing creation requirements without a universally adopted, 
enforceable FHIR alternative creates implementation gaps. 
• New entrant imbalance: Newly certified EHRs may not support C-CDA creation at all, undermining 
data exchange with incumbent systems that still rely on it. 
Recommendation: 
• Retain C-CDA creation requirements until a FHIR-based transition-of-care standard is finalized, 
certified, and broadly adopted. 
• Align effective dates with CMS measure updates and allow sufficient transition time (18–24 months 
minimum). 
  

4 
 
4 
Removal of Transport Standards – Direct Messaging 170.315(h)(1) and (h)(2) 
ONC proposes removing certification requirements for secure transport via Direct messaging, citing 
widespread adoption and minimal risk of functional regression. 
We caution against this assumption: 
• Certification removal may lead to reduced vendor investment in maintaining Direct functionality, 
particularly for new entrants. 
• Direct remains tightly coupled with C-CDA workflows and CMS PI measures. 
• Removing standards without synchronized replacement risks non-standard “innovation” that reduces 
interoperability rather than advancing it. 
Recommendation: 
• Coordinate removal of Direct requirements with clearly defined standards-based alternatives. 
• Avoid assumptions that market forces alone will preserve interoperable behavior. 
 
Clinical Information Reconciliation and Incorporation 170.315(b)(2) 
ONC proposes removing reconciliation and incorporation certification, citing widespread adoption and 
anticipated innovation. 
We are skeptical that removal alone will spur meaningful innovation: 
• Providers already struggle with reconciliation due to data quality, workflow burden, and clinical 
uncertainty. 
• Removing certification does not create incentives for improvement; rather, it risks stagnation. 
• Existing implementations are unlikely to be enhanced absent regulatory or market drivers. 
We further caution that: 
• Automated or AI-driven reconciliation—implied elsewhere in the rule—raises patient safety concerns 
when not provider-reviewed. 
• Removing certification without clarifying expectations for automation, auditability, and clinician 
oversight creates risk. 
Recommendation: 
• If reconciliation requirements are removed, ONC should clarify expectations around safe automation, 
human review, and accountability. 
• ONC should also set forth what affirmative obligations apply to reconciliation workflows going 
forward, particularly for AI-assisted approaches, to help prevent disadvantages to providers and 
patients. 
 
  

5 
 
5 
Optional / Independent Certification Criteria (Security Tags, Care Plans, Consent-Based Exchange) 
We support ONC’s proposal to remove optional, low-adoption certification criteria where: 
• Uptake has been minimal. 
• Dependent systems and partners do not consistently support reciprocal functionality. 
• Standards are evolving rapidly toward API-based approaches. 
However, we caution that: 
• Investment in these areas is likely to re-emerge in future API-focused rulemaking. 
• Removal should not be interpreted as devaluing data segmentation, consent, or care planning. 
Recommendation: 
• Clearly signal intent to re-address these concepts in a future, unified API-based framework. 
 
Decision Support Intervention - 170.315(b)(11) 
We generally support ONC’s proposal to streamline the Decision Support Intervention (DSI) certification 
criteria, including: 
• Removal of redundant requirements already addressed by other certification criteria (e.g., drug–drug 
and drug–allergy contraindication checking). 
• Alignment of predictive DSI trigger requirements with those required for evidence-based DSI, rather 
than the full USCDI data set. 
These changes appropriately reduce unnecessary certification complexity and better reflect real-world 
implementation patterns. 
 
Source Attribute Requirements 
We acknowledge ONC’s rationale for proposing removal of source attribute requirements for both evidence-
based and predictive DSI, particularly given the lack of demonstrated utilization to date and the 
administrative burden associated with maintaining these attributes.  However, we urge ONC to carefully 
consider the broader clinical, legal, and trust implications of fully eliminating transparency expectations: 
• Clinical confidence and adoption: Providers continue to express hesitancy in adopting AI-enabled 
tools due to uncertainty around provenance, limitations, and liability. Access to source-level 
information, particularly for evidence-based interventions, supports informed clinical judgment. 
• Liability and accountability: Transparency regarding development, validation, and intended use 
helps clarify shared responsibility between vendors and providers when adverse outcomes occur. 
• Market realities: Even if removed from certification, many customers and contracting entities will 
continue to expect access to this information. As a result, the proposed changes may shift, rather 
than eliminate burden, requiring vendors to create alternative disclosure mechanisms outside the 
certification framework. 

6 
 
6 
Recommendation: If ONC proceeds with removing prescriptive source attribute requirements, we encourage 
ONC to: 
• Acknowledge the ongoing importance of transparency as a best practice. 
• Encourage flexibility in how transparency is delivered (e.g., product documentation, training 
materials, or contextual help), rather than eliminating the expectation entirely. 
Contractual Considerations 
We also note that many health IT developers entered into customer contracts in good faith based on prior 
regulatory requirements. The removal of these requirements may create tension with existing contractual 
commitments. 
Recommendation: ONC should consider acknowledging this downstream contractual impact in the final rule 
or preamble. 
 
Removal of Legacy Clinical Decision Support Criterion 170.315(a)(9) 
We support ONC’s proposal to formally remove 170.315(a)(9), which has already been deprecated and is no 
longer available for certification. This change appropriately cleans up the regulatory framework without 
impacting current certification pathways. 
 
View, Download, and Transmit (VDT) – Accessibility and Time Standards 170.315(e)(1) 
 
Accessibility (WCAG) 
ONC proposes removing the explicit requirement to conform to WCAG standards within the VDT 
certification criterion, while noting that developers remain subject to accessibility obligations under other 
federal laws (e.g., Section 504 of the Rehabilitation Act). 
We agree that accessibility obligations continue to apply regardless of certification language. However, 
removing the WCAG reference from certification does not meaningfully reduce burden, as developers must 
still comply with accessibility requirements to support their customers’ legal obligations. 
Recommendation: ONC should clarify that this change is intended to provide design flexibility, not 
regulatory relief, and should avoid framing this proposal as burden reduction. 
 
Network Time Protocol (NTP) 
We support removal of the explicit NTP reference, as synchronized system time is already a foundational 
operational requirement across health IT systems.  This change appropriately reflects industry norms without 
introducing risk or competitive imbalance. 
 
  

7 
 
7 
Electronic Case Reporting - 170.315(f)(5) 
We have significant concerns with ONC’s proposal to revert electronic case reporting to a non-standards-
based, functional-only requirement. 
While we recognize the implementation challenges experienced to date, particularly related to CDC and 
AIMS readiness, eliminating named standards: 
• Increases variability and uncertainty for developers. 
• Shifts burden rather than reducing it. 
• Undermines interoperability goals. 
Recommendation: 
• Retain a standards-based approach. 
• Continue to support HL7-based standards (FHIR preferred). 
• If CDA-based approaches are maintained temporarily, establish a clear sunset date and coordinated 
transition plan. 
We further recommend: 
• CDA support expiration no later than December 31, 2028. 
• Full FHIR-based implementation operational by January 1, 2029. 
This approach balances burden reduction with predictability and aligns with broader federal interoperability 
strategy. 
 
Cancer Registry Reporting - 170.315(f) 
We understand ONC’s rationale for proposing removal of the cancer registry reporting certification criterion, 
particularly given the industry transition toward FHIR-based approaches (e.g., USCDI+ Cancer, Helios FHIR 
Accelerator). 
However, we emphasize the need for cross-agency coordination, particularly with CMS: 
• Cancer registry reporting remains tied to CMS Promoting Interoperability requirements. 
• Providers continue to rely on this functionality for quality and public health participation. 
Recommendations: 
• Coordinate removal timelines with CMS rulemaking to avoid misalignment. 
• Consider retaining the criterion with updated, forward-looking standards rather than full removal. 
• Recognize that market demand and public health value will continue to drive support for this 
functionality, regardless of certification status. 
 
 

8 
 
8 
Public Health Surveys and Other Low-Utilization Reporting Requirements 
We support ONC’s proposal to remove certification requirements for public health surveys where: 
• No clear, consistent submission pathway exists. 
• Providers are rarely, if ever, asked to submit data. 
• Significant development investment has yielded minimal public health benefit. 
We recommend that future certification requirements be limited to scenarios where there is a demonstrable 
likelihood of sustained, meaningful use. 
 
Clinical Quality Measures - 170.315(c)(3) and (c)(4) 
 
CQM Reporting (c)(3) 
We support removal of obsolete references to expired standards.  
 
CQM Filtering (c)(4) 
We support removal of the CQM filtering certification criterion. 
 
USCDI Version Alignment and Patient Demographics 170.213, 170.315(a)(5) 
We support ONC’s proposal to update references in 170.213 to reflect USCDI v3.1 as the current version and 
to remove references to expired USCDI versions. Aligning certification requirements with the most current, 
finalized USCDI version helps reduce confusion and improves regulatory clarity. 
 
With respect to revisions to 170.315(a)(5) Patient Demographics, we recognize that the proposed changes 
reflect recent executive direction and finalized USCDI updates, including: 
• Limiting sex values to male and female using SNOMED codes. 
• Removing observation elements not included in USCDI (e.g., sexual orientation, gender identity, 
pronouns, preferred name for clinical use). 
 
While we understand the intent to align certification criteria more closely with USCDI, we note: 
• Many practices and specialty clinics continue to rely on these removed demographic and observation 
elements to provide patient-centered, appropriate care. 
• Although ONC has clarified that developers may continue to support these data elements, their 
removal from certification may reduce the likelihood that such data are consistently maintained and 
exchanged between providers. 
 

9 
 
9 
We further observe that these changes do not meaningfully reduce implementation burden, as developers 
that already support these data elements are expected to continue doing so to meet market and clinical 
needs. 
 
Family Health History - 170.315(a)(23) 
Family health history remains a critical component of clinical care, particularly for oncology, genetics, and 
chronic disease management. We acknowledge ONC’s proposal to remove this certification criterion, with a 
delayed effective date of January 1, 2027, and ONC’s position that the functionality is widely adopted and 
expected to remain. 
 
We note several considerations: 
• Family health history remains referenced in CMS certification definitions, requiring close coordination 
between ONC and CMS to avoid conflicting requirements. 
• The functionality is not expected to go away but will reappear in updated form through USCDI v6, 
which has already finalized a more expansive family health history data element. 
• The proposal therefore represents a temporary removal rather than a true retirement, and developers 
are likely to encounter additional development work once USCDI v6 is named in future rulemaking. 
 
As proposed, this change is unlikely to result in burden reduction, given anticipated near-term reintroduction 
through USCDI updates and the need for continued support to meet clinical and regulatory expectations. 
  
Implantable Device List - 170.315(a)(13) 
We understand ONC’s rationale for removing the implantable device list certification criterion based on its 
widespread adoption and inclusion in USCDI. 
 
We note: 
• The underlying functionality is already required through USCDI v3 and will be further expanded 
under USCDI v6 to include non-implantable medical devices. 
• Developers will continue to be required to capture and maintain device information regardless of the 
standalone certification criterion. 
 
As such, removing this certification criterion does not materially reduce burden, as ongoing development 
and maintenance will still be required to comply with USCDI obligations. 
 
Patient Health Information Capture - 170.315(b)(3) 
We support removal of the Patient Health Information Capture certification criterion, provided it is carefully 
coordinated with CMS. 

10 
 
10 
 
Historically, this criterion created significant ambiguity and implementation challenges due to: 
• Extremely broad and undefined scope expectations. 
• Privacy, security, and patient safety concerns related to linking externally hosted patient data. 
 
Given its limited practical value and poor adoption, removal is reasonable. However, any removal should be 
aligned with CMS requirements to avoid conflicting expectations for certified technology. 
 
Automated Numerator Recording and Measure Calculation 170.315(g)(1) and (g)(2) 
We have concerns with ONC’s proposal to remove the automated numerator recording and automated 
measure calculation certification criteria, effective January 1, 2027. 
 
These criteria play a critical role in ensuring consistency, accuracy, and fairness in CMS Promoting 
Interoperability (PI) measure reporting: 
• The certification testing tools provide a standardized mechanism to validate complex 
numerator/denominator logic. 
• PI scores directly impact provider reimbursement; variability in calculation methodologies creates 
material financial risk. 
• Removing certification shifts validation responsibility entirely to developers without providing an 
equivalent standardized testing framework. 
 
Rather than reducing burden, removal of these criteria is likely to: 
• Increase implementation and validation burden for existing vendors. 
• Create uncertainty and competitive imbalance for new market entrants. 
• Reduce transparency and comparability across PI measure calculations. 
 
We strongly recommend that ONC retain these certification criteria or, at minimum, establish an alternative 
standardized testing and validation mechanism before removal, e.g., a CMS designated calculation reference 
tool, updated QRDA validator or a ONC/CMS testing resource. Without an effective alternative, we are 
concerned that removal of the criteria will not reduce burden, instead it will transfer accountability and risk 
to individual develops and their customers. 
 
Auditability and Accountability – Support for Retaining  
We strongly support retaining the following audit‑related certification criteria: 
• 170.315(d)(2) Auditable Events and Tamper Resistance 
• 170.315(d)(3) Audit Report(s) 
• 170.315(d)(10) Auditing Actions on Health Information 

11 
 
11 
  
These criteria serve functions that extend beyond certification formality: 
• They provide consistent, standardized expectations for what audit events must be captured and how 
they are protected from alteration. 
• They are relied upon during internal investigations, fraud and abuse inquiries, HIPAA investigations, 
and civil or criminal legal proceedings. 
• They support healthcare organizations’ ability to respond efficiently and accurately to subpoenas, 
audits, and regulatory requests. 
Removal of these audit‑focused criteria would not reduce burden in practice. Instead, it would shift 
responsibility to individual developers and organizations to independently define audit standards, increasing 
variability, risk, and downstream effort. Retaining these criteria preserves a common baseline while still 
allowing flexibility for organizations to deploy broader, enterprise‑wide security tooling. 
 
Authentication, Authorization, and Access Controls 170.315(d)(1) 
We are comfortable with removal of the authentication, access control, and authorization certification 
criterion.  
  
Amendments, Automatic Access Time-Out, and Emergency Access 
We do not object to removal of the following certification criteria: 
• 170.315(d)(4) Amendments 
• 170.315(d)(5) Automatic Access Time‑Out 
• 170.315(d)(6) Emergency Access  
In practice, these capabilities are already widely implemented and are unlikely to be removed even if 
certification requirements are eliminated. Their ongoing use is driven by patient safety, operational 
workflows, and organizational policy rather than certification enforcement. 
 
End‑User Device Encryption, Integrity, and Trusted Connections 
We are supportive of removing certification criteria related to: 
• 170.315(d)(7) End‑User Device Encryption 
• 170.315(d)(8) Integrity  
• 170.315(d)(9) Trusted Connections 
These requirements are either: 
• Already inherent in modern system architectures, or 
• Addressed through broader security frameworks and enterprise‑level controls outside the 
certification program. 
 

12 
 
12 
Accounting of Disclosures 170.315(d)(11) 
We support removal of the Accounting of Disclosures certification criterion.  
  
Encrypt Authentication Credentials and Multi‑Factor Authentication 
 
We are comfortable with removal of certification criteria related to: 
• 170.315(d)(12) Encrypt Authentication Credentials 
• 170.315(d)(13) Multi‑Factor Authentication (MFA) 
We agree with ONC’s approach to address security controls such as MFA selectively and contextually within 
future certification criteria where specific use cases warrant them (e.g., API‑based access). 
 
Safety-Enhanced Design 170.315(g)(3) 
We support ONC’s proposal to remove the Safety-Enhanced Design (SED) certification criterion. This 
requirement has consistently imposed high administrative burden, provided limited practical value, and 
created scheduling and resourcing challenges for developers without yielding meaningful improvements in 
user-centered design. 
  
Key observations: 
• Conducting UCD testing after development is complete limits the ability to incorporate findings 
without jeopardizing certification timelines. 
• Recruiting the required number of participants is difficult and often delays certification. 
• Clients rarely access or use the published detailed reports, indicating minimal real-world benefit. 
• Removing this criterion will meaningfully reduce burden and free resources for innovation. 
We view SED removal as a high-value deregulation proposal, and one that should yield meaningful resource 
savings for developers. 
 
Quality Management System 170.315(g)(4) 
We are neutral on the proposal to remove the Quality Management System (QMS) certification criterion, but 
note the following considerations: 
• Most mature development organizations already maintain QMS processes aligned to industry 
standards (e.g., ISO 9001), regardless of ONC requirements. 
• Removal may not reduce burden for established vendors, as QMS practices are embedded in internal 
development lifecycles. 
• A potential consideration is the effect on new market entrants, who may not implement robust QMS 
processes without certification pressure. 
  

13 
 
13 
We recommend ensuring that safety, quality, and reliability expectations continue to be reinforced via other 
regulatory or programmatic mechanisms, especially as more AI-driven functionality emerges. 
 
Accessibility-Centered Design 170.315(g)(5) 
Although we do not object to removal of this criterion, we emphasize the following: 
• Eliminating the certification criterion does not reduce burden, as developers remain obligated under 
Section 504 of the Rehabilitation Act, ADA, and Section 1557 of the ACA. 
• These laws require meaningful accessibility practices regardless of certification. 
• For many products, certification was not a recurring burden, since once met, no re-testing was 
needed. 
We recommend ONC clarify in the final rule that removal of this criterion does not diminish accessibility 
expectations for developers or healthcare organizations. 
 
C-CDA Creation Performance 170.315(g)(6) 
We do not oppose removal of 170.315(g)(6), provided that C-CDA creation requirements remain in 
170.315(b)(1) and 170.315(e)(1), which currently ensure consistent, standards-based C-CDA generation. 
  
Key considerations: 
• 170.315(g)(6) is largely duplicative of testing already required in 170.315(b)(1) (Transitions of Care) 
and 170.315(e)(1) (View/Download/Transmit). 
• However, continued reliance on C-CDA for CMS PI measures creates dependencies that must be 
maintained until CMS transitions measures to FHIR-based alternatives. 
• Removal must be timed carefully so as not to create misalignment with CMS program requirements. 
We recommend ONC coordinate closely with CMS to ensure seamless measure continuity. 
 
Application Access – Patient Selection 170.315(g)(7) 
We do not object to removal of 170.315(g)(7), with the following caveats: 
• The functionality is already covered in 170.315(g)(10) (Standardized API for Patient and Population 
Services) through SMART Launch requirements. 
• Removal alone will not reduce meaningful burden, as patient-matching responsibilities persist. 
• This criterion is still tied to CMS PI measure reporting, and removal may create confusion unless CMS 
updates its rules in parallel. 
We recommend ONC ensure that timing aligns with any CMS updates to prevent programmatic gaps. 
 
  

14 
 
14 
Application Access – All Data Request 170.315(g)(9) 
We support removal of 170.315(g)(9) with the same considerations previously expressed regarding C-CDA 
continuity. 
  
Additional points: 
• While burdensome—particularly in real-world testing—170.315(g)(9) is redundant with other criteria. 
• A transition timeline is necessary to ensure CMS PI measure reporting remains functional. 
• New entrants without C-CDA capability may gain a competitive advantage or disadvantage 
depending on how CMS updates its rules. 
Consistency with comments submitted for 170.315(b)(1), 170.315(g)(6), and 170.315(e)(1) will be important. 
 
Updates to Base EHR Definition 
We acknowledge and support ONC’s updates to the Base EHR definition to align with: 
• Removal of 170.315(h)(1)/170.315(h)(2) Direct, 170.315(g)(7), 170.315(g)(9) 
• Addition of 170.315(b)(11) and future 170.315(b)(4) 
These adjustments are consistent with ONC’s broader deregulatory efforts and the transition toward FHIR 
API–centered interoperability. 
 
Removal of Outdated Definitions 
We agree with ONC’s proposals to remove: 
  
• The Common Clinical Data Set (CCDS) definition (expired in 2022) 
• The Global Unique Device Identifier definition (now superseded by USCDI requirements) 
These updates provide regulatory clarity and eliminate references to obsolete constructs. 
 
Assurances (170.401) 
We support ONC’s proposed updates to the assurances condition of certification, which primarily 
consolidate and reorganize existing obligations. Updating the regulatory text to move the EHI Export 
requirement from the “assurances” section into the general “maintenance of certification” requirements is a 
logical cleanup and more accurately reflects that EHI Export is now a baseline, widely‑implemented 
capability.  
We also support ONC’s clarification that health IT developers must retain documentation for 10 years, and 
for only 3 years where a certification criterion has been fully removed. This may allow developers to reduce 
retained archives associated solely with retired criteria. 
 

15 
 
15 
API Conditions of Certification (170.404) 
We do not object to the proposed edits to the API condition of certification. 
 
Real‑World Testing (170.405) 
We understand ONC’s intent to streamline administrative overhead by removing the requirement to submit 
real‑world testing plans. However: 
• Eliminating plan submission does not reduce real‑world testing burden for developers. 
• Developers must still fully conduct all required real‑world testing activities. 
• ONC ACBs will no longer verify compliance, meaning developers must expend the same effort with 
less oversight which raises the question of value.  
 
Recommendation: 
ONC should either (a) meaningfully reduce real‑world testing execution requirements or (b) retain plan 
submission to ensure testing effort maintains purpose and accountability. 
ONC further proposes that developers must include all functionality certified to any G‑criterion as of January 
1 of the testing year; replacing the longstanding August 31 cutoff.  
This presents major practical challenges: 
• Developers commonly deliver new certification-required functionality in December (to meet ONC 
ACB deadlines). 
• Customers typically do not upgrade for 4–6 months, sometimes longer. 
• Real‑world testing requires live-use data from customer environments. 
• Under ONC’s proposal, developers would be forced to test features that no customers have 
deployed yet. 
 
This change will result in: 
• Compressed timelines for both vendors and customers, 
• Reduced customer participation, especially given year‑end reporting workloads, 
• Less meaningful real‑world data, undermining the program’s intent. 
 
Developers and customers both raised reasonable concerns: 
• Customers frequently plan upgrades only during specific windows (e.g., twice a year). 
• December releases often do not reach general availability until mid‑year. 
• Performing real‑world testing during go‑lives is operationally disruptive. 
 
Recommendation: 
 Maintain a cutoff similar to the August 31 threshold, or adopt an alternative such as: 
• Use the date of widespread customer availability, or 

16 
 
16 
• Allow a “phase‑in year” before new criteria must be tested. 
 
Lastly, we acknowledge the continued inclusion of 170.315(g)(31), (g)(32), (g)(33), (j)(20 and (j)(21). These 
were already finalized under HTI‑1 and must be incorporated into real‑world testing going forward. We 
agree with this integration and have no objections.  
 
Attestations 
We do not object to ONC’s proposed edits to clean up attestations. This is a positive, low‑impact 
clarification, and we support it. 
 
Insights Condition of Certification (170.406) 
We support ONC’s proposed changes and acknowledge this is a true burden reduction for vendors. 
 
ONC‑ACB Related Updates 
No concerns regarding ONC’s proposed updates to ONC‑ACB responsibilities. 
 
Definitions of Access, Exchange, and Use 
We acknowledge ONC’s intent to modernize the definitions of access, use, and potentially exchange to 
explicitly include automated technologies such as artificial intelligence (AI), autonomous agents, and robotic 
process automation.  
 
General Support With Important Clarifications 
We support ONC’s goal of clarifying that access and use are not limited to manual workflows. However, we 
recommend ONC explicitly incorporate similar automation language into the exchange definition. Without 
parallel language in “exchange,” automated systems could be permitted to access and use data but 
prohibited from transmitting it—an inconsistency that undermines the intent of modernization.  
 
Comment: Safety, Patient-Matching, and Human-in-the-Loop Controls 
We note significant patient safety risks when automated processes act without proper oversight.  
We respectfully request ONC clarify: 
• Whether automated exchange is expected to occur with or without human-in-the-loop review. 
• Whether EHI may populate clinical systems automatically or must be held for clinician validation. 
• That automation must incorporate patient-matching safeguards, source verification, and risk‑based 
triggers for human review. 

17 
 
17 
We recommend ONC finalize expanded definitions of access, use, and exchange that: 
1. Explicitly include automation technologies; 
2. Preserve clinician oversight requirements in high‑risk situations; and 
3. Require appropriate validation, safety, and routing controls for automated actions. 
 
Manner Exception – Proposals to Address Market Abuse 
We recommend ONC adopt Proposal #1 and retain flexibility around arm’s‑length negotiation. The fees and 
licensing exceptions should not automatically apply within the manner requested condition, as this 
unnecessarily constrains legitimate negotiation and reduces flexibility for actors acting in good faith. 
 
Infeasibility Exception – Removal of the Third‑Party Modification Use Condition 
We support ONC’s proposal to remove the third‑party modification use condition. Given ONC’s broader 
changes to the definitions of access and exchange, removing this condition is appropriate and maintains 
clearer regulatory pathways.  
 
Infeasibility Exception – Manner Exception Exhausted Condition 
Given the clarified manner exception and existing availability of infeasibility pathways, this condition is no 
longer necessary. 
We recommend ONC remove the manner exception exhausted condition, consistent with ONC’s alternative 
proposal in the rule. 
 
Removal of the TEFCA Manner Exception 
We support ONC’s proposal to remove the TEFCA manner exception entirely. 
 
 
