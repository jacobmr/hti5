# HHS-ONC-2025-0005-0092 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0092/attachment_1.pdf

---

February 25, 2026

Department of Health and Human Services
Assistant Secretary for Technology Policy/Office of the National Coordinator
for Health Information Technology
Attention: HTI-5 Proposed Rule (RIN 0955-AA09)
Mary E. Switzer Building, Mail Stop: 7033A
330 C Street SW, Washington, DC 20201

Re: Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions to
Unleash Prosperity (HTI-5) Proposed Rule, 90 FR 60973 (December 29, 2025)

Submitted electronically via regulations.gov

Dear Assistant Secretary Keane and ASTP/ONC Staff:
Mosaic Life Tech is a healthcare AI governance advisory firm. Our principals have over 50 years
of combined experience in health information technology, including leadership roles in federal
health IT programs (ASTP/ONC, CDC), health information exchange operations serving over
four million patients, and clinical informatics. We advise healthcare executives on establishing
governance structures for AI-influenced clinical decisions. We do not sell AI tools,
implementation services, or legal counsel.
We appreciate the opportunity to submit comments on HTI-5. We support ASTP/ONC's stated
objectives of reducing regulatory burden, advancing FHIR-based interoperability, and fostering
AI-enabled innovation. Our comments focus specifically on the AI governance implications of
the proposed changes and offer constructive recommendations to strengthen the rule's alignment
with patient safety and organizational accountability.
We note that we have also submitted a response to the concurrent HHS RFI on Accelerating the
Adoption and Use of Artificial Intelligence as Part of Clinical Care (Docket: HHS Health Sector
AI RFI, February 20, 2026). Our comments here are consistent with and build upon the
governance analysis provided in that response.

I. Removal of AI Model Card Requirements (Decision Support Interventions)
We acknowledge ASTP/ONC's assessment that it has found "no publicly available evidence" that
the HTI-1 transparency requirements for predictive decision support interventions resulted in
positive impacts on patient care. We also recognize the legitimate burden-reduction rationale
underlying the proposal.
However, we respectfully note that the absence of evidence of impact is not evidence of absence
of need. The HTI-1 model card requirements were finalized in January 2024 and have been
subject to enforcement discretion for much of their existence. The implementation window has
been insufficient to generate the evidence base ASTP/ONC is citing as justification for removal.
More importantly, the model card requirements represented the only federal mechanism
requiring AI tool developers in certified health IT to disclose basic information about their
predictive models: intended use, training data characteristics, known limitations, and risk
management practices. Removing these requirements without a replacement mechanism creates
a transparency gap that shifts the entire burden of AI tool evaluation to individual health systems
and their procurement teams.
The evidence suggests most health systems are not prepared for this shift. The CHIME/Censinet
AI Adoption Survey (December 2025) found that only 59% of healthcare organizations require
formal approval before AI implementation, meaning over 40% lack even a basic pre-
implementation gate. Just 10% use automated monitoring to detect AI capabilities within their
existing software. ECRI has ranked insufficient governance of AI in healthcare as the number
one health technology hazard for 2025. A 2025 BMC Health Services Research study of AI
implementation experts identified a "responsibility vacuum" where organizational structures
leave unclear who has accountability for AI monitoring. Only 22% of hospital leaders report
high confidence they could produce a complete AI audit trail within 30 days if requested by a
regulator.
This capacity gap is not evenly distributed. ASTP/ONC and AHA report that 86% of system-
affiliated hospitals use predictive AI versus just 37% of independent facilities. HFMA survey
data shows that among the 18% of health systems with mature AI governance, three-quarters
have over $1 billion in net patient revenue. Academic medical centers with dedicated informatics
teams may be able to negotiate and enforce vendor transparency independently. Community
hospitals, critical access facilities, and safety-net providers often lack the technical expertise,
contractual leverage, and staff bandwidth to replicate what federal certification previously
required.
Testimony from ASTP/ONC's own Rural Health TEFCA Data Exchange Panel (February 2026)
underscores this disparity. Frontline providers at critical access hospitals described a single staff
member managing all health information exchange functions, rural health clinics lacking
broadband sufficient to download patient records, and hospital administrators unable to dedicate
time to health IT due to competing operational survival decisions. ASTP's data analysis
confirmed that among the approximately 20% of hospitals nationally with no plans or no
awareness of TEFCA participation, 62% are rural hospitals and over half are critical access
hospitals. If these organizations cannot sustain basic interoperability participation, they will not
be able to independently evaluate AI tool transparency, negotiate vendor disclosure
requirements, or build the governance infrastructure that model card removal presumes they
have. Removing federal transparency requirements without addressing this capacity gap will
widen the existing AI governance divide between well-resourced and under-resourced providers.
Recommendation: If ASTP/ONC proceeds with removing model card certification requirements,
we recommend the agency: (a) publish non-binding guidance describing what organizational AI
transparency practices it considers reasonable, drawing on the framework established in HTI-1;
(b) coordinate with The Joint Commission, which released guidance on responsible use of AI in
healthcare in September 2025, to ensure that accreditation expectations and federal policy do not
create conflicting signals for health systems; (c) consider establishing a voluntary disclosure
framework that would allow developers who choose to maintain model card-equivalent
documentation to be recognized for doing so, preserving market incentives for transparency

                                                                                         Page 2 of 7

without mandating it; and (d) consider technical assistance models, analogous to the Regional
Extension Center program, to help under-resourced organizations build AI governance capacity.
The REC program assisted approximately 134,000 primary care providers and demonstrated
measurable results; a similar model for AI governance could address the capacity gap created by
this transition.

II. Safety-Enhanced Design and AI-Enabled Health IT
We recognize that the Safety-Enhanced Design criterion (§ 170.315(g)(3)) imposes significant
documentation and testing burden on health IT developers. The current requirement involves
detailed user-centered design testing with specific clinical participant cohorts, and the resulting
attestation artifacts are extensive. We understand the rationale for removing this criterion as part
of HTI-5's burden reduction objectives.
However, the underlying principle that Safety-Enhanced Design addresses, ensuring that health
IT products are tested for safe use in clinical workflows, becomes more important as AI-enabled
features are embedded in clinical decision-making. The VA Office of Inspector General's
January 2026 report found that VHA deployed generative AI tools without coordination with the
National Center for Patient Safety, despite existing directives requiring such coordination. This
finding illustrates that even well-resourced organizations can deploy AI without adequate safety
validation. When AI-generated recommendations influence medication management, diagnosis
support, or care transitions, the interaction between human judgment and algorithmic output is a
patient safety concern that warrants some form of design verification.
We do not recommend retaining the current Safety-Enhanced Design criterion in its existing
form. Its burden is well-documented and its visibility to health systems and clinicians has been
limited. Rather, we recommend that ASTP/ONC refer the question of safety validation for AI-
enabled certified health IT to the Health Information Technology Advisory Committee (HITAC)
for focused review. HITAC is well-positioned to convene developers, clinicians, patient safety
experts, and health system leaders to develop a modernized approach that preserves the safety
intent of user-centered design validation while substantially reducing the documentation and
testing burden of the current criterion. This approach would allow ASTP/ONC to proceed with
the broader removal of Safety-Enhanced Design requirements while signaling that safety
validation for AI-enabled features remains a priority for future rulemaking.

III. Expansion of "Access" and "Use" Definitions to Include Autonomous AI
Systems
We support the proposed expansion of "access" and "use" definitions to explicitly include
automated means, "including, without limitation, autonomous AI systems." This clarification
addresses a growing gap in the information blocking framework and appropriately recognizes
that patients and their authorized representatives increasingly use AI-enabled tools to interact
with their health information.
We observe, however, that this expansion creates new governance obligations that many health
systems have not yet anticipated. When the definition of "access" encompasses autonomous AI
agents acting on behalf of patients, health systems must develop policies and technical
capabilities to authenticate, authorize, and monitor these interactions. This is materially different

                                                                                          Page 3 of 7

from managing human user access and requires governance frameworks that most organizations
have not yet built.
Additionally, the narrowing of information blocking exceptions (particularly the Infeasibility
Exception and the removal of the modification use condition) means that health systems have
fewer legal defenses available when AI-mediated access requests create operational or safety
concerns. The combination of broader access rights and narrower exceptions is appropriate in
principle, but the practical implementation will require guidance that helps organizations
distinguish between legitimate governance controls and impermissible information blocking.
The Manner Exception warrants particular attention in the context of AI-mediated access. We are
aware of instances within the past year in which patients have requested access to their health
information through standard FHIR-based APIs available in certified health IT, and have instead
been directed to third-party release-of-information vendors whose portals require manual
navigation, proprietary credentials, and human-mediated workflows. These alternative pathways
may satisfy the current Manner Exception, but they would be inaccessible to the autonomous AI
agents that HTI-5 proposes to recognize under the expanded definitions of access and use. As
ASTP/ONC tightens the Manner Exception and validates automated access, we recommend the
agency clarify that routing patients or their authorized agents away from certified API
capabilities and toward proprietary, non-automatable portals does not constitute a reasonable
alternative manner when standard API-based access is technically available.
We also note a tension between the expanded scope of automated access and the concurrent
proposal to reduce the Insights Condition of Certification to a single metric (use of FHIR in
apps). Governing AI-mediated access requires observability. Health systems need to understand
how their APIs are being accessed, by whom, and at what volume to distinguish routine patient-
authorized queries from patterns that warrant governance attention. Reducing API usage
reporting while broadening the definition of access limits the ability of both ASTP/ONC and
deploying organizations to monitor whether the expanded access framework is functioning as
intended.
Recommendation: We recommend ASTP/ONC publish implementation guidance specifically
addressing AI-mediated access to EHI, including: (a) how health systems should authenticate
and authorize autonomous AI agents acting on behalf of patients; (b) what constitutes reasonable
security and governance controls for automated access that would not be considered information
blocking; (c) how the Manner Exception applies when a health system can fulfill an automated
request through a certified API but the requesting agent is using a different technical approach;
and (d) whether the Insights Condition reporting requirements should be expanded rather than
reduced to capture AI-mediated access patterns, given the expanded definitions of access and use
proposed in this rule.

IV. Privacy and Security Certification Criteria Removal
The proposal to remove all 14 privacy and security certification criteria relies on the premise that
HIPAA adequately covers these capabilities. While HIPAA does establish privacy and security
requirements, we note that HIPAA's risk-based framework allows for significant variation in
implementation. The certification program served as a verification layer that ensured certified

                                                                                        Page 4 of 7

health IT products met specific technical security capabilities, not merely that the deploying
organization had a security risk assessment on file.
As AI-enabled tools increasingly process, generate, and transmit protected health information
through automated pipelines, the technical security capabilities of the underlying health IT
platform become more, not less, important. Removing certification verification of these
capabilities while simultaneously expanding automated access to EHI creates a gap that HIPAA's
organizational-level requirements may not fully address at the product level.
Recommendation: We recommend ASTP/ONC retain a minimum set of security certification
criteria specifically relevant to API-based and automated data exchange, consistent with the
FHIR-forward direction of the rule. At minimum, authentication and audit logging capabilities
for API interactions should remain verifiable through the certification program, given their direct
relevance to the expanded information blocking framework.

V. Broader AI Governance Implications
HTI-5, taken as a whole, represents a deliberate and significant shift of AI governance
responsibility from federal certification to individual healthcare organizations. We understand
and respect the policy rationale for this approach. Certification programs are blunt instruments
for governing rapidly evolving AI capabilities, and a lighter federal footprint may indeed foster
more innovation than the prescriptive approach introduced in HTI-1.
However, we urge ASTP/ONC to acknowledge explicitly in the final rule preamble that reducing
federal certification requirements does not reduce organizational accountability for AI-
influenced decisions. This is particularly important because some health system leaders may
interpret deregulation as a signal that AI governance is less urgent or that the federal government
has determined current AI tools are safe enough to require less oversight.
The evidence does not support that interpretation. When the federal certification floor is lowered,
the governance burden that was previously distributed across the certification program
concentrates at the organizational level. Health systems must build or strengthen their own
capabilities for AI tool evaluation, monitoring, and oversight. Boards must develop visibility into
how AI influences clinical and operational decisions. Vendor contracts must include provisions
that were previously handled through certification requirements.
Importantly, organizational governance is not a barrier to AI adoption. It is an enabler. Black
Book Research found that health systems with AI governance councils are twice as likely to
achieve ROI within 12 months, and programs with dashboards and clear ownership reach early
ROI in 7.5 months versus 13.5 months without them. KLAS Research has observed that when
governance provides a structured way to vet and integrate AI, adoption is more scalable and
sustainable. These findings indicate that the deregulatory approach in HTI-5 will produce better
outcomes if accompanied by support for organizational governance capacity.
The Joint Commission's guidance on responsible use of AI in healthcare, published in September
2025 in collaboration with the Coalition for Health AI, provides a framework that health systems
can use to meet these governance expectations. We recommend ASTP/ONC reference this

                                                                                        Page 5 of 7

guidance in the final rule preamble as one example of the organizational governance resources
available to health systems navigating this transition.
Recommendation: We recommend ASTP/ONC: (a) include clear language in the final rule
preamble stating that the reduction of federal certification requirements is intended to reduce
duplicative burden, not to reduce the standard of care expected for AI governance in healthcare
delivery; (b) coordinate with CMS to ensure that Promoting Interoperability program
requirements are updated to reflect the reduced certification footprint, preventing a disconnect
between what ONC certifies and what CMS requires; and (c) publicly recognize voluntary
governance frameworks as representing reasonable practice, consistent with the recommendation
we provided in our response to the concurrent HHS RFI on AI in clinical care.

VI. Conclusion
We appreciate ASTP/ONC's commitment to reducing regulatory burden and fostering
innovation. We support the FHIR-forward direction of HTI-5 and the clarification of information
blocking rules for AI-enabled access. Our recommendations are offered in the spirit of
strengthening the rule's alignment with patient safety and organizational governance, consistent
with the agency's stated objectives.
Across both this comment and our concurrent RFI response, we observe a consistent finding:
governance is not a barrier to AI adoption but an enabler of it. Organizations with clear AI
governance ownership achieve ROI faster and scale more effectively than those without. The
most effective path forward supports organizational governance capacity alongside the
deregulatory relief HTI-5 provides.
We welcome the opportunity to provide additional detail on any of these recommendations and
are available to participate in any stakeholder engagement activities related to the final rule.

Respectfully submitted,

Teresa Younkin, MSHI Jim Younkin, MBA
Chief Executive Officer & Founder Chief Technology Officer & Principal Consultant

                                    Mosaic Life Tech, LLC
                              AI Strategy & Governance Advisory
                                       mosaiclifetech.com




                                                                                      Page 6 of 7

References

1.  CHIME/Censinet. AI Adoption Survey Reveals Healthcare's Governance Gap and Drive Toward Agentic
    Usage. December 2025. https://censinet.com/blog/ai-adoption-survey-reveals-healthcares-governance-gap-and-
    drive-toward-agentic-usage
2.  ECRI. Top 10 Health Technology Hazards for 2025. ECRI Institute. November 2024.
3.  Owens K, Griffen Z, Damaraju L. Responsibility Vacuum in AI Implementation. BMC Health Serv Res.
    2025;25:1217. https://link.springer.com/article/10.1186/s12913-025-13388-z
4.  Office of the National Coordinator for Health Information Technology. Hospital Trends in the Use, Evaluation,
    and Governance of Predictive AI, 2023-2024. ASTP/ONC Data Brief. https://healthit.gov/data/data-
    briefs/hospital-trends-use-evaluation-and-governance-predictive-ai-2023-2024/
5.  HFMA. AI Use Common Among Health Systems; Fleshed-Out Governance Not. Fierce Healthcare. 2025.
    https://www.fiercehealthcare.com/ai-and-machine-learning/ai-use-common-among-health-systems-fleshed-out-
    governance-not
6.  VA Office of Inspector General. Review of VHA's Use of Generative Artificial Intelligence. Preliminary Result
    Advisory Memorandum. January 2026. https://www.vaoig.gov/reports/preliminary-result-advisory-
    memorandum/review-vhas-use-generative-artificial-intelligence
7.  The Joint Commission and the Coalition for Health AI. Guidance on the Responsible Use of AI in Healthcare.
    September 17, 2025. https://www.jointcommission.org
8.  Office of the National Coordinator for Health Information Technology. Evaluation of the Regional Extension
    Center Program: Final Report. 2016. https://healthit.gov/wp-
    content/uploads/2021/06/Evaluation_of_the_Regional_Extension_Center_Program_Final_Report_4_4_16.pdf
9.  Black Book Research. 2026 Health System & Hospital AI Governance Resource Guide. November 2025.
    https://blackbookmarketresearch.com/governing-hospitals-ai-2026-board-to-bedside-accountability-guide
10. KLAS Research. Healthcare AI Update 2025: What Use Cases Are Adopted the Most? Report #3912. 2025.
    https://klasresearch.com/report/healthcare-ai-update-2025-what-use-cases-are-adopted-the-most/3912
11. Anderson B. Quoted in: Healthcare AI Divide Threatens to Leave Safety-Net Providers Behind. Healthcare
    Dive. 2025.
12. Assistant Secretary for Technology Policy / Office of the National Coordinator for Health Information
    Technology. Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions To Unleash
    Prosperity (HTI-5) Proposed Rule. 90 FR (Dec. 29, 2025). RIN 0955-AA09.
    https://www.federalregister.gov/documents/2025/12/29/2025-23896/health-data-technology-and-
    interoperability-astponc-deregulatory-actions-to-unleash-prosperity
13. ASTP/ONC. Rural Health TEFCA Data Exchange Panel. February 2026.

                                                                                                     Page 7 of 7
