# HHS-ONC-2025-0005-0195 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0195/attachment_1.pdf

---

Melissa Myers, JD, MPA
Vice President, Government Relations

February 27, 2026

The Honorable Thomas Keane, MD, MBA
Assistant Secretary for Technology Policy
Office of the National Coordinator for Health Information Technology
Department of Health and Human Services
Mary E. Switzer Building, Mail Stop 7033A
330 C Street SW
Washington, DC 20201

RE: Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions to
Unleash Prosperity (RIN: 0955-AA09)

Submitted electronically via: Regulations.gov

Dear Assistant Secretary Keane:

Cleveland Clinic is a not-for-profit, integrated healthcare system dedicated to patient-centered care,
teaching, and research. With a footprint in Northeast Ohio, Florida, and Nevada, Cleveland Clinic
Health System operates 23 hospitals, including a main campus near downtown Cleveland, with more
than 6,700 beds and 280 outpatient locations. Cleveland Clinic employs over 5,700 physicians and
researchers, and 16,800 nurses. Last year, our system had 15.7 million patient encounters, including
14.1 million outpatient visits and 333,000 hospital admissions and observations.

Cleveland Clinic appreciates the opportunity to provide feedback to the Assistant Secretary for
Technology Policy and Office of the National Coordinator for Health Information Technology
(ASTP/ONC) regarding this proposed rule. We welcome the objectives in this proposed rule to
simplify administrative requirements and modernize information-blocking policies. However,
regulatory burden reduction should not mean diminishing important protective measures that ensure
the privacy and security of health information. We encourage reforms that streamline outdated or
duplicative rules but urge the maintenance of a security-by-design and privacy-by-design stance
through guidance and alternative mechanisms.

Certification Criteria for Health Information Technology

Proposal
ASTP/ONC is undertaking deregulatory actions to reduce burden on health IT developers by
proposing to reduce or remove certification criteria in the Health IT Certification Program at §
170.315. Of the program’s 60 certification criteria, ASTP/ONC proposes to remove 34 and revise
seven criteria. Among these, all privacy and security certification criteria in § 170.315(d) are proposed
for removal. Security tags criteria in § 170.315(b)(7)-(8), originally adopted as data segmentation for
privacy (DS4P) certification criteria, which support security labels for document-based exchange,
would also be removed. Additionally, the agency proposes to reduce the scope of the decision support
interventions (DSI) certification criterion in § 170.315(b)(11) to fully remove the artificial

                                                                                                Page 1 of 7

intelligence (AI) “model card” requirements and remove transparency and risk management
requirements established in the HTI-1 final rule to promote AI innovation in healthcare.

Cleveland Clinic Response
Cleveland Clinic supports ASTP/ONC’s efforts to retire outdated standards in the Health IT
Certification Program. However, the elimination of all privacy and security certification criteria
(§170.315(d)) creates operational risk for hospital systems that rely on certified capabilities as a
foundational expectation in vendor procurement. Removing these criteria must not remove the
obligation of developers to comply with HIPAA, and it is essential that security requirements be
embedded into other certification criteria the agency is retaining. To mitigate baseline drift,
particularly among smaller or emerging technology vendors, we recommend ASTP/ONC retain or
embed a minimum set of requirements related to audit logging, event integrity, and support for
enterprise-level monitoring. These functions are critical for incident response, investigations, and
HIPAA Security Rule compliance.

We are also concerned that removing DS4P may further erode privacy protection and accountability.
Our system routinely treats patients with conditions protected under 42 CFR Part 2 and state-specific
privacy laws. The complete removal of DS4P “send/receive” criteria, without an interim mechanism,
increases the likelihood of inadvertent redisclosure of sensitive information during transitions of care,
health information exchange (HIE) participation, and third-party API connections. We recommend
that ONC maintain at least a partial DS4P capability or offer a defined transition roadmap until a
mature, scalable FHIR-based security labeling solution is widely available.

While recognizing the agency’s intention to reduce burden through the removal of AI transparency
and risk-management elements from the DSI criterion, hospital systems increasingly rely on
embedded predictive models that influence diagnosis, risk stratification, and care pathways.
Eliminating all model-level transparency expectations, just as adoption accelerates, reduces our
ability to evaluate bias, clinical appropriateness, and patient safety. The agency should consider
establishing a voluntary “Advanced Transparency” designation for predictive AI, allowing
responsible developers to demonstrate good-faith governance without compelling universal
compliance. Additionally, if AI transparency requirements are to be removed, ASTP/ONC should
coordinate with the U.S. Food and Drug Administration (FDA) and Office of Civil Rights (OCR) to
promote AI governance via other channels so that algorithmic decisions remain safe and bias
mitigated.

United States Core Data for Interoperability Version 3.1 Update (USCDI v3.1)

Proposal
ASTP/ONC proposes adopting USCDI v3.1 as the sole USCDI standard at § 170.213. USCDI v3.1
removes sensitive patient demographic elements, namely sexual orientation and gender identity
(SOGI), from required data exchange. The agency also proposes to remove USCDI v3 and allow
USCDI v1 to expire as scheduled on January 1, 2026.

Cleveland Clinic Response
We support the proposal to adopt USCDI v3.1. Overall, adopting v3.1 is a positive approach to
protecting privacy consistent with “minimum necessary” principles. USCDI v3.1’s data minimization
for sensitive data reduces the risk of exposing highly personal information by default.

                                                                                               Page 2 of 7

However, excluding SOGI information from the USCDI standard should not prohibit capturing it
when necessary. Current data in electronic health records (EHRs) are often incomplete, inaccurate,
or inconsistent, creating a significant barrier to understanding and addressing the specific healthcare
needs of vulnerable populations. Developers and providers should still be able to collect and protect
SOGI as long as consent and appropriate standards are applied when doing so.

Standards and Implementation Specifications

Proposal
Where certification criteria are proposed for removal or revision, ASTP/ONC also generally proposes
to remove the associated standard from the Code of Federal Regulations (CFR) either upon the
effective date of the final rule, or when the transition period applies on January 1, 2027. Numerous
transport, functional, content exchange, vocabulary, API, security, and outdated or expired standards
would no longer be referenced in certification requirements. A limited set of standards would be
reserved for purposes of continued interoperability alignment, including proposals to retain the
standard for data segmentation for privacy (DS4P) in § 170.205(o) and the Direct Project transport
standard in § 170.202(a)(2). The agency requests comments on whether to retain other standards or
implementation specifications proposed for removal.

Cleveland Clinic Response
We agree with removing obsolete standards to simplify compliance. We particularly support retaining
the DS4P and Direct Project transport standards to ensure capabilities for tagging sensitive data and
secure email exchange remain available.

We urge ASTP/ONC to remind developers that even if certain security standards, such as encryption
specs, are removed from the CFR, they are expected to follow industry best practices (e.g., NIST
guidelines) under HIPAA. The agency should encourage the use of the standards version
advancement process (SVAP) to adopt newer, more secure standards over time. These proposed
changes will streamline administrative requirements while maintaining necessary tools for privacy
protection.

Terms and Definitions

Proposal
ASTP/ONC proposes conforming revisions to certain definitions in § 170.102 to reflect the removal
of certification criteria. The definition of Base EHR would be revised to remove references to
certification criteria proposed for elimination, realigning the definition with the statutory “Qualified
EHR” framework and simplifying its structure by relocating and reserving certain subsections whose
transition periods have expired. The agency also proposes to remove the obsolete or unused
definitions of Common Clinical Data Set (CCDS), Global Unique Device Identification Database
(GUDID), and Production Identifier.

Cleveland Clinic Response
We generally agree with the proposed revisions to the definitions as the changes would streamline
the terminology. Removing CCDS, GUDID, and Product Identifier eliminates confusion. Although
we support revising the definition of Base HER, we urge ASTP/ONC to ensure that stakeholders are
aware that security and privacy protections are expected despite no longer being enumerated in the
definition.
Page 3 of 7
Conditions and Maintenance of Certification Requirements for Health IT Developers

Proposal
ASTP/ONC proposes conforming edits for the “Assurances” (§ 170.402), “Application Programming
Interfaces” (§ 170.404), and “Attestations” (§ 170.406) Conditions and Maintenance of Certification
requirements.

Additionally, the agency proposes significant deregulatory changes to the Real World Testing
Condition and Maintenance of Certification (§ 170.405) by removing the requirement for developers
to submit real world testing plans and streamlining full reporting requirements to only Health IT
Modules that are certified to certain API certification criteria, and permitting

The agency proposes 1) removing the requirement to submit real-world testing plans for all real-world
testing certification criteria; 2) limiting full real-world testing results reporting to only Health IT
Modules that are certified to certain API certification criteria; and 3) permitting the use of the
Specialty Validated Assessment Program for the remaining non-API real-world testing certification
criteria with minimal reporting requirements.

Finally, the Insights Condition and Maintenance of Certification in § 170.407 would be substantially
narrowed with the removal of most existing reporting measures while retaining the “use of FHIR in
apps through certified health IT” measure. Insights Condition and Maintenance of Certification would
be renamed as “Insights.”

Cleveland Clinic Response
We support ASTP/ONC’s efforts to reduce unnecessary burden and align standards while keeping
core conditions intact. Developers must still attest to not blocking information and to maintain open
APIs for all EHR data; those fundamental requirements should remain strongly enforced. We agree
with focusing Real World Testing on critical interoperability features such as FHIR APIs – rather
than every criterion – to target issues that matter most. However, HHS should monitor interoperability
in other areas via feedback loops since formal testing would be reduced.

While we agree with narrowing Insights to the “use of FHIR in apps through certified health IT”
metric, we recommend ASTP/ONC find alternative ways to gather industry-wide data on
interoperability outcomes (e.g., patient access rates) to ensure policy goals are met.

ONC Health IT Certification Program Administrative Requirements

Proposal
ASTP/ONC proposes various revisions to the administrative requirements for the ONC Health IT
Certification Program to conform with the proposals to remove or revise certification criteria,
including revisions to the principles of proper conduct for ONC-Authorized Certification Bodies
(ONC-ACBs). In § 170.523(f), ONC-ACBs must provide ASTP/ONC with a current list of Health IT
Modules that have been certified. The agency proposes at § 170.523(f)(1)(viii) to remove a
requirement that ONC-ACBs provide test data versions used and whether any test data was altered
for the certification criterion or criteria to which the Health IT Module has been certified. ASTP/ONC
would still require the test procedure and test tool version used.

                                                                                             Page 4 of 7

Cleveland Clinic Response
We support the proposed administrative updates to remove references to retired criteria in ONC-ACB
duties and certification rules and agree with the removal of the requirement to provide test data
versions on the certified health IT product list (CHPL). The proposed revisions will not diminish
patient protections or product capabilities but simply streamline the management of certification
information. We recommend ONC and ONC-ACBs clearly communicate that the absence of certain
information such as the privacy criteria on the CHPL does not imply those aspects are unimportant
but instead reflects program changes.

Information Blocking: “Access” and “Use” Definitions

Proposal
To provide more clarity around automated means of exchanging electronic health information (EHI),
ASTP/ONC proposes to add language to the definitions of “access” and “use” at § 171.102 that would
include automation technologies such as autonomous artificial intelligence systems and robotic
process automation. ASTP/ONC also seeks comment on an alternative proposal to revise the
“exchange” definition to include similar language describing automation technologies.

Cleveland Clinic Response
We support including automated and AI-driven access in the definitions of “access” and “use.” This
update modernizes the information blocking rules to cover new technologies in that an EHR must
treat a properly authorized API call or AI agent similarly to a human request. It prevents loopholes
where actors might stipulate only the manual access or use of EHI and prohibit access or use by
automated means. We recommend finalizing this proposal, but ASTP/ONC must provide examples
for clarity. For example, a patient’s health app using AI to retrieve that patient’s data would be valid
access that must not be impeded absent Privacy and Security Exceptions. It must be emphasized that
all existing protections must still apply. If an AI-based request violates HIPAA and other privacy
laws, an actor can invoke the Privacy Exception to information blocking. Overall, this change will
promote innovation and data portability while maintaining that the same privacy rules apply
regardless of whether access is by a person or an algorithm. Revising the definitions of “access” and
“use” to support machine-to-machine data flows is a critical step forward, but it must be paired with
governance expectations that ensure such accesses and uses are classifiable, auditable, and
enforceable across the data lifecycle.

Information Blocking: Infeasibility Exception Revisions

Proposal
ASTP/ONC proposes two revisions to the Infeasibility Exception. First, the agency proposes to
remove the “third party seeking modification use” condition in § 171.204(a)(3) due to concerns that
actors such as EHR developers are abusing this condition to inhibit access, exchange, and use of EHI
by their competitors or other third parties that patients and health providers want. The agency also
believes the condition is unnecessary because of other information blocking exceptions that address
concerns about confidentiality, safety, or integrity.

Next, ASTP/ONC proposes to revise the “manner exception exhausted” condition for similar reasons.
The condition applies when an actor is unable to fulfill a request for access, exchange, or use of EHI
despite having exhausted three Manner Exception criteria in § 171.204(a)(4). ASTP/ONC believes

                                                                                              Page 5 of 7

this condition as currently codified is susceptible to misuse. The agency is alternatively considering
removing the “manner exception exhausted” condition altogether.

Cleveland Clinic Response
Generally, we approve of the proposed revisions to the Infeasibility Exception to close loopholes that
otherwise allow actors to easily claim their actions fall under the Infeasibility Exception. We agree
with ASTP/ONC that the conditions are prone to misuse. Legitimate technical or security concerns
can be addressed by applying the Security or Privacy Exceptions instead. Actors must attempt some
reasonable alternate manner of fulfilling requests rather than outrightly declaring an inability to do
so. The proposed changes will push actors to find solutions, such as providing data in a different
format, instead of defaulting to infeasibility. The proposals uphold patients’ and providers’ access
rights and align with the expectation under HIPAA to provide records even if they are not readily
producible in the exact form requested. We recommend ONC finalize these proposals to clearly signal
that infeasibility is not an acceptable excuse unless truly no lawful way exists to share the information.

Information Blocking: Manner Exception

Proposal
To address concerns that some actors may be abusing the Manner Exception, ASTP/ONC proposes
to revise the “manner requested” condition at §171.301(a), which applies when an actor fulfills a
request for EHI in any manner requested that the actor is technically able to fulfill and for which the
actor can reach agreeable terms with the requestor. Specific concerns revolve around some actors
incorrectly citing the “manner requested” condition to persuade requestors that the Manner Exception
applies to agreements and terms to which it has never applied.

To explicate the applicability of the Manner Exception when the actor reaches an agreement with the
requester, ASTP/ONC offers two alternative proposals. The first would revise § 171.301(a)(2) to add
a new subparagraph (iii) to explicitly state that any contract or agreement related to the access,
exchange, or use of EHI: (1) must be at market rate; (2) must not be a contract of adhesion; and (3)
must not contain unconscionable terms.

The alternative proposal would remove paragraph (a)(2) from the “manner requested” condition and
explicitly apply the conditions of the Fees Exception (§ 171.302) and Licensing Exception (§
171.303) to any agreement related to fulfilling the request for access, exchange, or use of EHI in any
manner requested.

Cleveland Clinic Response
We support prohibitions on unreasonable or anti-competitive contract terms for data access. Actors
should not impose exorbitant fees or one-sided agreements as a condition of exchanging EHI in an
alternate manner. For example, an API offered only if the requester signs a contract giving away their
data rights or paying excessive costs would not meet the exception. This change promotes equity and
competition, ensuring smaller providers and patient-approved apps can obtain data without undue
burden. It aligns with the Fees Exception and upholds the spirit of the information blocking rules;
information exchange should be enabled, not thwarted by fine print.

We recommend that ASTP/ONC finalize the proposed revision to the “manner requested” condition
since it clarifies that contracts must be at market rates and fair terms. We encourage the agency to

                                                                                                Page 6 of 7

provide guidance on what “unconscionable” and “adhesion” mean in practice to aid compliance.
Overall, this will foster more transparent and reasonable data exchange practices.

Information Blocking: Removal of Subpart D Exception and Other Provisions Specific to
TEFCA

Proposal
ASTP/ONC proposes to remove the exceptions that involve practices related to actors’ participation
in the Trusted Exchange Framework and Common Agreement (TEFCA) in their entirety at subpart
D from 45 CFR part 171. The agency believes the exception is now unnecessary to incentivize
participation in TEFCA, based on significant investments in the health information ecosystem and
TEFCA’s continued implementation and maturation.

Cleveland Clinic Response
We agree with removing the TEFCA Manner Exception. Now that TEFCA is an operational, a carve-
out is not needed and could inadvertently encourage siloing. All actors – whether in TEFCA or not –
should adhere to the same unified set of exceptions. This ensures a TEFCA participant cannot decline
a lawful data request solely because the requester is not on the network. Removing 45 CFR part 171
subpart D will simplify compliance and promote broader exchange. TEFCA’s internal rules still
protect privacy and security, and TEFCA participants remain subject to general Privacy and Security
Exceptions like anyone else. We believe this fosters a consistent, nationwide interoperability policy.
Participation in a trusted network is encouraged but not a loophole to avoid other exchanges. We
support this change as it maximizes data availability to patients and providers across networks.

Thank you for conducting a thoughtful process that allows us to provide input on such important
issues and for your consideration of this feedback. Should you need any further information, please
contact me at myersm21@ccf.org.

Sincerely,

Melissa Myers, JD, MPA
Vice President, Government Relations

                                                                                            Page 7 of 7
