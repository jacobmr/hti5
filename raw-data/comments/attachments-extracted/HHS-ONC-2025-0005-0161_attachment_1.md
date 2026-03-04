# HHS-ONC-2025-0005-0161 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0161/attachment_1.pdf

---

February 27, 2026

Thomas Keane, MD, MBA
Assistant Secretary for Technology Policy
National Coordinator for Health Information Technology
U.S. Department of Health and Human Services

RE: Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions to
Unleash Prosperity [RIN 0955–AA09]

Submitted via www.regulations.gov

Dear Assistant Secretary Keane:

AHIP is the national association that represents health insurance plans that provide coverage,
services, and solutions for over 205 million Americans through Medicare and Medicaid,
employer-sponsored insurance, and the individual insurance market. AHIP appreciates the
opportunity to provide comments on the Assistant Secretary for Technology Policy/Office of the
National Coordinator for Health Information Technology (ASTP/ONC) proposed rule titled,
“Health Data, Technology, and Interoperability: Deregulatory Action to Unleash Prosperity
(HTI-5).”

AHIP appreciates that ASTP/ONC seeks to align HTI-5 and related proposals with the White
House’s goals outlined in Executive Order (EO) 141921, “Unleashing Prosperity through
Deregulation.” In particular, AHIP strongly supports ASTP/ONC’s withdrawal of the HTI-2
proposal to create voluntary certification criteria aligned with the Centers for Medicare &
Medicaid Services (CMS)-established API requirements for health plans. As stated in our HTI-
2 public comments, we do not support adding testing to the existing ONC Health IT
Certification Program, to which health plans are not subject.

We agree that there are important opportunities to streamline and reduce administrative burdens
related to the Health IT Certification Program, update Information Blocking regulations, and
advance the transition to bidirectional Fast Healthcare Interoperability Resources (FHIR®)-based
APIs - a goal AHIP fully supports. Any final deregulatory action should, however, not impose
new risks to the broader health care system such as degraded health sector cybersecurity and/or
weakened national health information exchange infrastructure.

While our detailed comments are attached, our high-level recommendations include:

      •    Retain key interoperability criteria. To prevent negative impacts for interoperable
           exchange across the health care system, ASTP/ONC should not remove certification

1
https://www.federalregister.gov/documents/2025/02/06/2025-02345/unleashing-prosperity-through-deregulation
Page 2

         criteria that address C-CDA and Direct secure messaging at this time. These core national
         exchange mechanisms remain critical as health care providers, through their electronic
         health record (EHR) developers, and as health plans build and deploy FHIR®-based
         exchange capabilities.

• Maintain privacy and security controls in EHRs. Given the growing volume and
sophistication of cyberattacks against health care organizations, ASTP/ONC should not
remove privacy and security criteria from the Health IT Certification Program. Doing so
would inappropriately shift the burden to incorporate these critical measures to providers,
creating variability and increasing costs.
• Advance digital quality measurement. AHIP supports using the Health IT Certification
Program to address challenges to digital quality measurement including a lack of access
to Clinical Quality Language (CQL) engines in the EHR, an inability to use bulk FHIR®
to exchange data, and difficulties capturing patient-reported information. ASTP/ONC
should also consider adding data elements from the United States Core Data for
Interoperability (USCDI)+ Quality to future core versions of USCDI.
• Prevent information blocking in the Trusted Exchange Framework and Common
Agreement (TEFCA). In addition to removal of the TEFCA Manner Exception,
ASTP/ONC also should prevent information blocking within the framework by
prohibiting providers and their vendors from charging health plans fees to obtain clinical
and quality data.

Conclusion
Thank you for the opportunity to provide feedback. We look forward to continuing to work
with ASTP/ONC to ensure policies achieve our shared goals of reducing administrative burden
and promoting secure, interoperable exchange across the health care system. If you have
questions, please contact me at dlloyd@ahip.org or 202-778-3246.

Sincerely,

Danielle A. Lloyd
Senior Vice President, Private Market Innovations & Quality Initiatives
AHIP Attachment
Page 1 of 8

                                        AHIP Detailed Comments

III. Health Information Technology Standards, Implementation Specifications, and
Certification Criteria and Certification Programs for Health Information Technology (Part 170)

The Assistant Secretary for Technology Policy/Office of the National Coordinator for Health
Information Technology (ASTP/ONC) proposes to remove 34 and revise 7 out of 60 criteria
within the Health IT Certification Program.

Deregulatory Approach

HTI-2 Withdrawal
AHIP applauds ASTP/ONC for issuing the December 2025 “Health Data, Technology, and
Interoperability: Patient Engagement, Information Sharing, and Public Health
Interoperability; Withdrawal1” notice which withdrew, among other unfinalized HTI-2
proposals, the proposal to create voluntary certification criteria aligned with the Centers
for Medicare and Medicaid Services (CMS)-established API requirements for health plans.
As stated in our HTI-2 public comments, we do not support adding testing to the existing ONC
Health IT Certification Program, to which health plans are not subject.

If finalized, this approach would have had the unintended and counterproductive effect of
creating confusion about whether such voluntary certification would lead ASTP/ONC to deem
health plans as subject to information blocking policies. This deeming would go beyond
AST/ONC’s stautory authority, inappropriately creating a new regulatory framework and
compliance schema and causing confusion and additional burden that could hamper the desired
policy goal of testing CMS-required APIs.

HTI-5 Certification Proposals
AHIP supports ASTP/ONC’s efforts to look for opportunities to streamline and reduce
administrative burdens on health care providers and the health IT community overall. While we
understand that ASTP/ONC considered various principles for determining which
certification criteria to remove or revise, we are concerned that removal of certain criteria
may unintentionally result in negative impacts for secure, interoperable exchange across
the health care system. In particular, we do not support removal of certification criteria or
requirements that address privacy and security, C-CDA, and Direct. While we understand
ASTP/ONC’s rationale that established electronic health record (EHR) developers are likely to
continue to support these capabilities, new entrants to the market may not, and lack of future
testing could result in degraded functionality for providers and their data exchange partners.
Additionally, we are concerned that ASTP/ONC proposes to remove these requirements either
on the effective date of the final rule or on January 1, 2027, which would not provide for an
adequate transition period to assess and fill any resulting gaps.

1
https://www.govinfo.gov/content/pkg/FR-2025-12-29/pdf/2025-23890.pdf
AHIP Attachment
Page 2 of 8

Shifting Focus to FHIR®

In addition to burden reduction, ASTP/ONC has stated that the restructuring of the Health IT
Certification Program is intended to support a new framework for certification of Fast Healthcare
Interoperability Resources (FHIR®)-based APIs that will support AI-enabled solutions. The new
framework would prioritize FHIR®-based APIs “that enhance automation and
performance, move beyond read-only interactions, and expand the scope of available data (e.g.,
clinical efficiency, patient-centered care).” AHIP strongly supports movement toward
bidirectional APIs that support health plan access to clinical data. Such access will reduce
provider burden, speed care, and permit plans to share actionable information with
providers in return. AHIP also directionally supports ASTP/ONC’s “focus on FHIR®” as
we believe FHIR® APIs will best support real-time exchange, promoting interactivity in
place of today’s retrospective data-sharing. However, FHIR® capability does not mean
FHIR® usability, as there is a critical need for real world experience with working FHIR®
implementations. We support FHIR®-based interoperability where it allows scalable, reliable
access to the data that is needed for care management, operations, and other use cases while
cautioning against any approaches that default health plans back into document-based
workflows.

2. Care Coordination Certification Criteria

2.a. Transitions of Care
ASTP/ONC proposes to revise the “Transitions of Care” criterion, including removing the ability
to create and send a compliant Consolidated Clinical Document Architecture (C-CDA), as well
as receive a C-CDA. AHIP has concerns with this proposal due to potential downstream impacts.
It is unclear whether EHR developers can simply choose to stop supporting C-CDA and still
obtain certification once this rule is applicable. AHIP agrees strongly that the health care system
should be moving toward FHIR®, but the system may not be ready for a full transition all at
once.

Document-based exchange remains widely utilized today, where C-CDA documents are
frequently the payload returned in query-based exchange. Federal agencies continue to rely on
secure, standards-based document exchange to support transitions of care and coordinated
treatment, including statutory directives under the Elizabeth Dole Veterans Benefits Act and
CMS models such as the ACCESS Model. Maintaining certified document generation and secure
exchange capabilities therefore supports alignment between the Certification Program and these
federal statutory and programmatic expectations related to secure transitions of care, reinforcing
consistency across federal interoperability policy during this period of transition to FHIR®.
Given these considerations, AHIP recommends not removing key requirements related to
C-CDA at this time. Instead, we propose revising this criterion to require certified health
IT to (1) demonstrate the capability to generate a standards-conformant summary
document (e.g., C-CDA) and (2) send and receive such documents via at least one
nationally recognized secure edge protocol.
AHIP Attachment
Page 3 of 8

2.e. Decision Support Interventions
AHIP supports removal of the HTI-1 DSI Criteria Artificial Intelligence (AI) “Model
Card” Transparency Requirements. While AHIP supports the FAVES (fair, appropriate,
valid, effective, safe) principles, the DSI transparency requirements are not based on consensus
standards or leverage a risk-based approach. Additionally, the health care AI landscape has
continued to evolve rapidly since the final rule was issued in 2024. Stakeholders, including
AHIP, have worked collaboratively with standards development organizations (e.g., the
Consumer Technology Association2) to develop industry-wide standards for multiple dimensions
of AI. Having one transparency approach solely for AI supplied by EHRs creates variability
across health care and could undermine advances in AI standards adoption. Moreover, with the
lack of a broader policy framework, the Model Card could be perceived as shifting liability to the
users who may not fully understand the information on the card or realize that key information is
missing from the Model Card. We encourage ASTP/ONC, and HHS more broadly, to consider
opportunities to work with appropriate entities, such as clinician and hospital associations, to
update provider training regarding the use of Al and utilizing transparency reports.

3. Clinical Quality Measures Certification Criteria

4. b. Clinical Quality Measures—Filter
   ASTP/ONC proposes to remove the “clinical quality measures—filter” certification criterion.
   This certification criterion assesses whether a Health IT Module can filter quality data based on a
   set of standardized data elements for electronic clinical quality measures (eCQM) calculated
   using certified health IT.

Digital quality measures (dQMs) have the potential to reduce measurement burden and allow the
assessment of aspects of care that cannot currently be measured. However, for dQMs to achieve
their potential to reduce burden, the process to extract the necessary data and calculate quality
measures must be a seamless part of a provider’s workflow. Certified electronic health records
must be able to easily capture clinical data, locate the necessary data to calculate a measure,
produce measure results, and allow providers to submit quality information to public and private
payers. We are concerned that EHRs currently do not fully support these functions and
without the ability to do these things as part the workflow, dQMs are increasing burden on
both providers and health plans.

Advance Access to CQL Engines

ASTP/ONC should revise the Clinical Quality Measures Certification Criteria to ensure
EHRs are able to support a feasible transition for dQMs. ASTP/ONC should ensure that
EHRs include access to Clinical Quality Language (CQL) engines that transform human-
readable, standardized healthcare rules into executable, machine-readable instructions.
Connecting the EHR directly to a CQL engine will allow data to be more easily processed and
reporting to be automated.

2
https://www.cta.tech/
AHIP Attachment
Page 4 of 8

Enable Bulk Extraction of Clinical Quality Data

The Core Quality Measures Collaborative (CQMC) is a public–private partnership convened by
AHIP and the Centers for Medicare & Medicaid Services (CMS). CQMC has noted that FHIR®
data standards will play a key role in advancing interoperable data for measurement, given the
ONC interoperability requirements and CMS’ Digital Quality Measurement Strategic Roadmap.3
The Workgroup recommended measure-driven prioritization of data elements as a high value,
high-priority activity.

Ideally, the EHR will contain all the necessary data elements in standardized fields specified
in FHIR®, which would all be contained in the USCDI. This reduces the effort needed to collect
quality data while allowing closer to real-time measurement to support quality improvement
work. This could allow payers to share analytics and performance more frequently and
effectively to provide better quality signals to providers. However, this vision will require a
robust technological infrastructure, including the necessary data elements readily available in the
EHR without extra fees, a national network to support data exchange, and a directory of digital
endpoints. We appreciate the steps ASTP/ONC and CMS have taken to implement this vision
and look forward to working with the agency to continue to advance digital quality
measurement.

Adopting bulk FHIR® exchanges will require building trust between payers and providers and
will need to meet a payers’ operational needs. If implemented properly, bulk FHIR® has the
potential to facilitate the exchange of clinical quality data. As outlined below, bulk FHIR®
should be implemented alongside efforts to increase payers’ access to EHR data such as
including new requirements in the HIT Certification Program to facilitate quality measurement,
standardizing necessary data elements and adding them to USCDI, and increasing access through
TEFCA or bidirectional APIs. Increased access to clinical data in the EHR would allow payers
to assist in care coordination in a timelier manner and reduce the burden of important patient
safety activities such as prior authorization and quality measurement.

ASTP/ONC could play an important role in facilitating the adoption of bulk FHIR®
through the Health IT Certification by creating standards-based libraries of clinical
concepts, that everyone can access without having to pay exorbitant licensing fees. This
collaboration should also include CMS to promote standardization with Medicare fee for service
to ensure all payers are aligning with updated clinical standards. The current lack of
standardization causes fragmentation between providers and payers. By codifying clinical
concepts and making them interoperable, CMS and ASTP/ONC could create a standardized
library for payers and providers. For example, ASTP/ONC could work with stakeholders to
ensure that USCDI contains the necessary data elements to calculate quality measures across
both public and private payers, allowing it to serve as a library for measure developers when
creating dQMs.

3
https://ecqi.healthit.gov/sites/default/files/CMSdQMStrategicRoadmap_032822.pdf
AHIP Attachment
Page 5 of 8

3. b. Patient Health Information Capture
   ASTP/ONC proposes to remove the “patient health information capture” certification criterion.
   The patient health information capture certification criterion allows health care providers to
   incorporate unstructured patient generated health data or data from a non-clinical setting into a
   patient record. The criterion is not currently included in the Base EHR definition; however, the
   criterion is included in CEHRT definitions established by CMS for the Medicare Promoting
   Interoperability Program and the MIPS Promoting Interoperability performance category.

We are concerned that it is premature to remove this criterion. Organizations like CMS and
NCQA continue to adopt additional quality measures based on patient reported data from survey
tools. However, these data cannot easily be captured in current structured fields in electronic
health records or can only be captured through add-on modules. ASTP/ONC should not remove
this criterion and should consider moving it into the Base EHR definition in future rulemaking.

4. Privacy and Security Certification Criteria

The proposed rule would remove 13 privacy and security criteria from the Health IT
Certification Program, including multi-factor authentication, end-user device encryption,
integrity, and trusted connection, among others. ASTP/ONC states that removing these criteria
will allow for EHR developer innovation, spur competition, and give providers the opportunity
to select the privacy and security technologies that best fit their needs.

AHIP believes this rationale is misguided. Given the continued growth in cyberattacks,
including ransomware attacks, against the health care sector, and resulting data breaches,
we do not believe reducing privacy and security controls in EHRs is appropriate at this
time. As we have seen from recent high-profile cyberattacks, the health care system is highly
interconnected and requires strong controls across all parts of the sector to build resilience. The
removal of these criteria may inappropriately weaken security as the burden to incorporate these
measures is shifted from EHR developers to providers, along with the added financial burden as
these capabilities are not readily available outside of the applications that are supposed to
incorporate them. Given the volume and sophistication of cyberattacks against health care
organizations are likely to increase, AHIP urges ASTP/ONC not to remove privacy and
security criteria from the Health IT Certification Program.

8. Transport Methods and Other Protocols Certification Criteria

8.a. Direct Project
AHIP is concerned that the proposed rule could unintentionally weaken direct messaging, a core
national exchange mechanism. Elimination of certification criteria tied to the Direct
Project and Direct Standard could substantially reduce certification requirements supporting
Direct. Without certification criteria, EHR developers may treat Direct as optional. Direct is an
ongoing operational necessity. As with other criteria proposed for removal, the assumption is
that this functionality is ubiquitous and will not be removed from existing products. It is only
ubiquitous because Meaningful Use stage 2 certification requirements mandated the requirement
for certified EHRs to be able send and receive direct messages. Removing certification
AHIP Attachment
Page 6 of 8

requirements for Direct risks losing one of the most interoperable electronic communication
channels available to clinicians and payers.

Additionally, current certification ensures Direct messages include send/receive delivery
notifications. Removing these requirements risks degrading delivery assurance for clinicians,
payers, and HISPs. Reliable message confirmation is foundational for care transitions and
administrative coordination.

Given these considerations, we urge ASTP/ONC to preserve at least a baseline Direct
messaging certification requirement, including delivery notification capabilities, to avoid
regression in national interoperability during the transition to FHIR®‑based APIs. AHIP
supports modernization but believes Direct remains a critical, widely adopted exchange channel
that should not be deprioritized as part of deregulation.

IV. Information Blocking (Part 171)

D. Removal of Subpart D Exception and Other Provisions Specific to TEFCA
AHIP supports ASTP/ONC proposal to remove the Trusted Exchange Framework and
Common Agreement (TEFCA) manner exception. We agree that this exception can serve to
disincentivize participation in TEFCA, including by potentially limiting exchange options. More
broadly, AHIP continues to urge ASTP/ONC to address factors that have the effect of limiting
health plan participation in TEFCA, including limited use cases, cumbersome policies, the need
for clarifications and interpretations on alignment and application of existing privacy and
security rules, and outdated technical standards.

Remove Extraneous Fees for Data Exchange

We appreciate the efforts of ASTP/ONC and the Sequoia Project to make TEFCA more useful to
payers. In particular, we appreciate the final SOP XP Implementation: Health Care Operations
including the HCO HEDIS Reporting (HCO-HED) and HCO Quality Measure Reporting (HCO-
QM) exchange purposes. Allowing health plans and health care providers to use TEFCA to
support performance measurement will improve health care quality and safety for patients. This
will also increase the value of participation in TEFCA for health plans and reduce burden on
health care providers.

We are very concerned the SOP: XPs Version 3.0 allows health care providers
(as responding nodes) to charge health plans for the data necessary to support these
essential functions. Quality measurement is critical to ensuring patients receive safe, timely, and
effective care, allowing health plans to best serve their members, and promoting performance
improvement among providers. TEFCA has great potential to reduce the burden on both plans
and providers to locate and exchange the data necessary to support measurement. However,
allowing providers to charge fees for this data will be a significant impediment for plans
to the use of the HCO-HED and HCO-QM exchange purposes. Currently, plans work with
providers in their contracting processes to outline the provider’s responsibilities to share data
with the plan to support HEDIS reporting as well as quality measurement more broadly. As
AHIP Attachment
Page 7 of 8

written, the SOP will require plans to separately negotiate fees with all providers
from whom they may need data in order to exchange data through TEFCA. This would require
significant rework and would substantially increase the plan’s costs, potentially reducing
the value to the plan of TEFCA.

The Health Insurance Portability and Accountability Act of 1996 (HIPAA) Privacy Rule
recognizes that Health Care Operations are necessary to support treatment. While the Privacy
Rule allows for reasonable, cost-based fees, this model is outdated under a TEFCA exchange
supported by FHIR® APIs. Data exchange via API will not require the manual labor that was
previously necessary to find charts and make photocopies or send secure files. If TEFCA works
as envisioned, it should not require any extra effort from a healthcare provider to respond to a
plan’s request for data under the HCO-HED or HCO-QM uses cases and thus will not necessitate
payment to compensate a provider or associated employee for the time and materials required to
respond to a request.

Charging fees when extra work is not required is also against the spirit of information
sharing. The 21st Cures Act defines information blocking as, “a practice that interferes with,
prevents, or materially discourages access, exchange, or use of electronic health
information.” While the Cures Act Final Rule does create an exception that allows for the
charging of fees, the rule also notes fees must be reasonably related to costs and specifically
excludes fees to perform an export of electronic health information via the certified
HIT. Sending data for quality measurement and HEDIS via TEFCA will be analogous to an
export of electronic health information (EHI) and not related to the development of technologies
and provision of services that enhance interoperability.

We also note that the SOP XP Version 3.0 was not put out for public comment. Public comment
is critical to ensure all stakeholders have the opportunity to express their concerns on draft
policies. Public comment is even more important when all stakeholders are not represented in
closed meetings. As stated in our January 19th letter, AHIP urges RCE to bring health plans
more actively into the process as central stakeholders in the development and use of
TEFCA. Additional health plan representatives should be included in TEFCA
advisory groups and plan representatives should be considered for chair roles. Moreover, these
representatives should come directly from health insurance companies or their trade associations
rather than vendors who cannot accurately speak to the needs of health plans.

Information should be freely available to support the provision of high-quality health
care. Quality measurement is an essential health plan function to ensure members
receive timely and effective care. Plans should not be required to pay more to be able to perform
these crucial safety checks, especially as healthcare quality shortcomings in the United States are
well-documented and have continued to grow worse. Plans play a critical role in helping
providers identify and address quality gaps and should be able to easily access the data they need
to do so, without undue burden. Quality measurement is a key function of health plans in
administering value-based payment arrangements, including providing clinical decision support
and performance dashboards to providers to assist in their quality improvement activities.
AHIP Attachment
Page 8 of 8

We urge ASTP/ONC and the Sequoia Project to revise the TEFCA SOPS to not allow
responding nodes to charge fees for the Health Care Operations exchange purposes. These
fees undercut the purpose and usefulness of TEFCA and diminish the potential benefits to health
plans and their members.
