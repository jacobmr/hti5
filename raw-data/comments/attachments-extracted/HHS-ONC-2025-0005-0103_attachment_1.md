# HHS-ONC-2025-0005-0103 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0103/attachment_1.pdf

---

February 26, 2026
To: Thomas Keane, MD, MBA Assistant Secretary for Technology Policy /Office of the National
Coordinator for Health Information Technology (ASTP/ONC), Department of Health and Human
Services (HHS).
Submitted electronically at: https://www.federalregister.gov/documents/2025/12/29/2025-
23896/health-data-technology-and-interoperability-astponc-deregulatory-actions-to-unleash-
prosperity#open-comment
Re: Minnesota e-Health Initiative Comments on Health Data, Technology, and Interoperability:
ASTP/ONC Deregulatory Actions to Unleash Prosperity (HTI-5) Proposed Rule
Dear Dr. Keane,
Thank you for the opportunity to provide comments on the Health Data, Technology, and
Interoperability: ASTP/ONC Deregulatory Actions to Unleash Prosperity (HTI-5) Proposed Rule.
The Minnesota e-Health Initiative (Initiative) is pleased to submit comments as a public-private
collaborative focused on advancing the adoption and use of electronic health records and other
health information technology, including health information exchange. A legislatively
authorized 26-member advisory committee guides the Initiative. Review Appendix A for a list of
advisory committee members. The Minnesota Department of Health, Center for Health
Information Policy and Transformation, coordinates activities of the Initiative.
We applaud ASTP/ONC’s efforts to continue to improve interoperability and support the
wellbeing of patients by reducing administrative burdens for health IT developers, updating
information blocking regulations, and creating a foundation for FHIR-based and AI-enabled
interoperability solutions.
While we strongly support interoperability that improves patient care and patient health
outcomes, we are concerned that HTI-5’s proposed deregulatory changes could put patient
privacy at risk and create a landscape where there is no, or little, accountability when harm
occurs. The removal of transparency, privacy, and security guardrails risks shifting responsibility
from health IT developers to providers who often lack the technical capacity, time, and
resources to evaluate AI-enabled health IT or interoperability functionality. This potential
burden shift would not translate into improved care delivery. To ensure progress does not
widen disparities, federal policy changes must be paired with adequate funding and
implementation support, particularly for under-resourced care settings and public health
partners.
Reviewing the HTI-5 Proposed Rule, we’ve identified considerations and challenges related to
the
▪ Removal of AI transparency and risk management guardrails
▪ Removal of privacy, security, and audit-related certification criteria
▪ Proposed adoption of USCDI v3.1 and removal of key demographic data elements

1
▪ Revisions to information blocking definitions and exceptions
▪ Removal of public health-related certification criteria such as transmission to cancer
registries
▪ Removal of C-CDA, Direct, and related certification criteria without widespread FHIR
readiness
▪ Opportunity to align progress toward FHIR-based APIs with TEFCA/QHINs
We have also included comments related to the withdrawal of HTI-2 proposals that were not
finalized.
Please consider the following comments related to the HTI-5 Proposed Rule developed with
input from partners across Minnesota’s health care continuum, and from ongoing and previous
work of the Initiative. Contact Bilqis Amatus-Salaam, e-Health Program Lead, Center for Health
Information Policy and Transformation, Minnesota Department of Health at
bilqis.amatussalaam@state.mn.us with any questions.
Sincerely,
The Minnesota e-Health Advisory Committee Co-Chairs

Bryan Jarabek, MD, PhD Lindsey Sand, LHSE, NHA
Chief Medical Informatics Officer, M Health Fairview Representing Health Care Administrators
Representing Large Hospitals lindseys6517@gmail.com
bryan.jarabek@fairview.org

2
Methods
The following response is based on a coordinated effort to seek feedback from Minnesota e-
Health Advisory Committee members and our broader network of partners engaged in the
Initiative which includes experts in health IT, providers, a variety of care settings, and public
health. The response reflects the Initiative’s experience supporting health information
exchange/interoperability, and more recent, artificial intelligence work groups. The response
was also informed by the Minnesota Department of Health’s participation in activities related
to FHIR, HL7, TEFCA, USCDI, and prior HTI rulemaking efforts.

Responses
We recognize that ASTP/ONC seeks to drive progress towards greater adoption and use of FHIR
and AI as both hold much promise throughout the health care ecosystem, but we identified
several considerations and challenges. We have categorized these as:
▪ Artificial Intelligence and Transparency
▪ Privacy and Security
▪ Patient Demographics
▪ Information Blocking and Data Integrity
▪ Public Health
▪ FHIR Transition and Readiness
▪ FHIR Transition Relative to TEFCA/QHIN Framework
Additionally, we have included comments on the withdrawal of HTI-2 proposals that were not
finalized.

Artificial Intelligence and Transparency
We acknowledge ASTP/ONC's goal to reduce burden on health IT developers and to promote
innovation in the development and use of AI—indeed, patients and caregivers want AI to make
care safer, faster, and better coordinated especially during handoffs and transitions. However,
though Executive Orders 14091 and 14110 were revoked, there are still concerns related to AI
transparency, bias, and appropriateness for patient populations. There remains a need for
assurance that AI-enabled tools are evidence-based, safe and trustworthy, especially when
incorporated into clinical decision-making and care planning.
In particular, we are concerned about the proposed revision of the decision support
intervention criteria to remove the AI “model card” requirements and the removal of
transparency and risk management requirements that were established in the HTI-1 Final Rule.
The model card criterion that would be removed serve as a transparency mechanism, or a
“nutrition label” that helps providers better understand and vet AI-enabled health IT products.
Without access to information such as training data demographics or other source attributes,
providers may lack the ability to meaningfully evaluate an AI model’s efficacy, safety, and
potential bias in their local context. This information is especially important for assessing
whether tools perform equitably across diverse populations and care settings. While developers
may experience HTI-1's transparency and risk management requirements as burdensome,
3
providers and patients continue to view transparency and risk management assurances as
important and expect such safeguards to be reflected in the AI-enabled health IT products they
adopt.
Related to the decision support intervention criteria is the clinical decision support criteria that
ASTP/ONC also proposed removing. While we recognize that the CDS certification criteria had
an expiration date of January 1, 2025, partners expressed concern for its removal. If
transparency measures are removed, clinicians might unknowingly rely on tools with biased or
less validated logic, worsening disparities in treatment. Clinics serving underserved
communities may have less access to alternative decision support tools outside certified
systems, making them more reliant on default or less capable systems. Without mandated CDS
standards, variability in care guidance may grow, disproportionately affecting providers with
limited resources to build or buy robust decision tools. Regulatory guardrails should clearly
distinguish assistive AI tools from autonomous clinical decision making and ensure that
clinicians remain in the loop for decisions that affect diagnosis, treatment, or care planning.
Similarly, there are concerns about the proposed revisions to the Real World Testing
Maintenance of Certification requirements. Before deployment, AI tools should be tested on
populations that reflect real patients, not just ideal datasets. This includes understanding how
performance varies by factors such as race, geography, health literacy, language, disability, or
care setting. There is also a risk that the AI models and interoperability tools developed under
the deregulatory environment put forth by the ASTP/ONC will be trained mostly on data from
better-resourced, urban systems. We strongly urge the ASTP/ONC to maintain transparency
guardrails that have been previously established and caution against prioritizing innovation
over maintaining criteria that help users better understand if the health IT they adopt in their
respective settings are accurate and safe for the patients they serve. Our partners are also
concerned that high risk longitudinal data like family history, problem lists, and social data not
having appropriate standards for dates and clinical context may cause inaccurate AI
interpretations and clinical errors due to poor quality data and potential issues with patient
care.
Overall, the proposed deregulatory changes risk shifting responsibility for AI safety, clinical
decision support reliability, cybersecurity, and legal accountability from regulated health IT
developers to provider organizations that lack the resources and influence to require EHR
vendor changes to effectively mitigate these risks.
Additionally, ASTP/ONC’s conclusion that transparency and risk management requirements
have demonstrated low value and that cost benefits have not been realized is based on a
relatively short time period. HTI-1 was finalized in January 2024. Not enough time may have
passed to observe whether providers are using transparency features or if there have been cost
savings. Rather than indicating a lack of value, lack of use of these transparency features may
suggest an opportunity for additional education and guidance to support providers in
understanding how to evaluate AI-enabled health IT products.

Privacy and Security
We urge ASTP/ONC to maintain the privacy and security certification criteria and the associated
Privacy and Security Certification Framework as they provide an important baseline for privacy
and security capabilities. While we recognize that certified health IT alone cannot ensure full
4
compliance with the HIPAA Privacy and Security Rules, these certification requirements provide
assurance to providers and patients that basic privacy and security functionality has been
incorporated. The absence of a baseline can lead to variability in how patient data protections
are implemented and could widen digital trust gaps, particularly for communities that may
already be wary of data use. Given ongoing cybersecurity threats and recent attacks targeting
the health care sector, maintaining these criteria is still very much needed. Furthermore,
providers rely on vendors to ensure privacy and security capabilities in their products.
Removing privacy and security requirements may shift the burden of ensuring privacy and
security mechanisms onto providers and these capabilities are not readily available to
consumers outside of the health IT product.
If ASTP/ONC determines that removal of some criteria is necessary, we support the alternative
proposal to retain certification requirements related to “auditable events and tamper
resistance," “audit reports," and “auditing actions on health information." Removal of audit-
related criteria all together raises concerns that certified health IT could be marketed without
the technical capability to generate and maintain audit logs, potentially leaving providers legally
responsible for HIPAA audit requirements without the necessary functionality from their health
IT vendor. Although HIPAA requires providers to maintain audit logs, it does not require
vendors to include audit logging capabilities in their products. Retaining these criteria helps
ensure providers have access to critical functionality necessary to support compliance,
investigate inappropriate access, and detect potential fraud and abuse.
We also would like to acknowledge ASTP/ONC’s observation that the privacy and security
criteria may be misunderstood as evaluating health IT security capabilities more
comprehensively than intended. This gap highlights an opportunity to provide additional
guidance and education to both developers and purchasers/users of health IT tools regarding
privacy and security expectations and implementation responsibilities. If one of the goals of
HTI-5 is to support developers in meeting provider needs, clearer guidance on demonstrating
meaningful privacy and security safeguards beyond minimum certification requirements would
help address this mismatch in expectations.
Lastly, certification must continue to require encryption of authentication credentials, multi
factor authentication, and auditable access events, as weakening these controls introduces
unacceptable risk to patient safety, data integrity, and health system operations. We also
support strengthening requirements for encrypting authentication credentials and multi-factor
authentication, as they currently only rely on attestation.

Patient Demographics
We do not support the proposed adoption of USCDI v3.1 and we do not support the removal of
data elements related to name to use, pronouns, sex parameters for clinical use, sexual
orientation, and gender identity. We request that ASTP/ONC retain these data elements.
Removing these data elements is harmful to the people we serve and does not align with
developing health IT that supports clinical decision-making, care coordination, and improved
health outcomes. EHRs capturing this information, and other social determinants of health and
patient demographic information allows providers, patients, and public health to better
understand factors affecting health, provide better person-centered care, and implement
evidence-based health policy and interventions. This removal will limit everyone’s response to

5
current and emerging health concerns, thus making people less healthy and care more
expensive.
The removal of these important data elements also invalidates the development and
implementation work done across the country. In Minnesota, the Minnesota e-Health
Standards and Interoperability Workgroup met in November of 2014 to assess e-health and
social determinants of health that are captured in EHRs. This was at the request of the
Minnesota Commissioner of Health to fulfill part of a legislative study. This work has continued
as providers, the community, and other partners recognize and benefit from the collection, use,
and sharing of these data elements; they meet information and care needs.

Information Blocking and Data Integrity
The updated definitions help clarify expectations for automated access and use of health
information. We are concerned that ASTP/ONC’s proposal to revise the definitions of “access”
and “use,” and potentially “exchange,” to explicitly include automated means such as
autonomous AI may have unintended consequences. While we recognize that AI-enabled
technologies require access to EHI to support innovation, care coordination, and clinical
decision support, we encourage ASTP/ONC to consider providing additional clarity regarding
guardrails and accountability mechanisms to ensure that once access is granted, EHI is used
only for appropriate and authorized purposes. Stakeholders continue to raise questions
regarding data stewardship, secondary use of data, privacy protections, and responsibility if
automated access results in errors, data integrity issues, or privacy breaches. Additional
guidance on these topics would help support safe and trustworthy implementation of AI-
enabled tools. Our partners also expressed that changes to “access” and “use” could lead to
different interpretations by vendors and create limitations for patients. ASTP/ONC may
consider providing plain language examples of how the new definitions should work in practice
and communicate that patient access should remain simple and consistent across systems.
We also have concerns regarding the proposed removal of the “third party seeking modification
use” condition from the Infeasibility Exception. ASTP/ONC notes that actors may continue to
rely on the “infeasible under the circumstances” condition, but stakeholders may require
additional education and practical implementation guidance to understand how and when to
use this condition. Without clear guidance, providers may interpret the revised requirements as
them needing to allow any and all requests for access, use, and exchange, even when there are
legitimate concerns.
Information blocking requirements remain complex and can be challenging for stakeholders to
interpret and operationalize. If these revisions as proposed are finalized, we encourage
ASTP/ONC to prioritize development of educational resources and implementation guidance
that clearly outline appropriate use of exceptions, responsibilities related to automated data
access, and when it is appropriate to limit third-party or AI-enabled access, use, and exchange
of EHI.

Public Health
We support and applaud the focus on FHIR-based interoperability. However, for functional
areas where a FHIR standard is not fully mature or widely adopted yet (e.g., Transmission to
Cancer Registries), we feel that continuing to reference existing non-FHIR standards in
6
certification criteria provides an important baseline signal to health IT developers and public
health agencies alike. Revising criteria to remove mention of any standards or removing criteria
altogether due to a lack of mature FHIR standards, has the potential to destabilize current
public health integration programs. We suggest that ASTP/ONC retain some certification
criteria and return references to non-FHIR standards while work continues to advance FHIR
maturity and adoption for those functional areas. Specifically, we recommend retaining each of
the “transmission to public health agencies” criterion and “transmission to cancer registries.”
Reporting cancer to public health agencies is a critical part of public health surveillance and
public health’s ability to address one of the leading causes of death in the U.S. The Central
Cancer Registry Reporting FHIR Implementation Guide is still being developed and is not yet
ready for widespread implementation by the cancer registry community. The HL7 CDA-based
implementation guide for ambulatory provider reporting is used for current reporting
workflows. We agree with concerns raised by the North American Association of Central Cancer
Registries and others that it will be important not to transition too quickly to a FHIR-based
approach. Doing so risks disruption to data completeness, disincentivizing developers to
maintain public health reporting interoperability, increasing manual reporting burden on
providers and registries, and decreasing the timeliness and reliability of cancer surveillance
activities.
Alternatively, ASTP/ONC could leverage other avenues (e.g., ISA) for formally naming standards
for functional areas if not in health IT certification criteria. We also encourage ASTP to help
define and enable a path forward (including reasonable time frames considering budgetary and
other constraints) toward advancing FHIR standards and adoption for those areas.

FHIR Transition and Readiness
We acknowledge the potential for FHIR to improve interoperability and welcome progress
toward greater adoption of FHIR-based APIs. We agree with ASTP/ONC’s assessment that many
of the certification criteria proposed for removal have been widely adopted and implemented
across portions of the health care system; however, adoption and implementation are not
uniform across all care settings. In Minnesota, while large health systems may be positioned to
transition toward FHIR-based solutions, other critical sectors (including long-term care, post-
acute care, behavioral health, and small, rural, and safety net providers) continue to rely on
existing standards and workflows. These sectors often face resource and vendor limitations that
affect readiness to fully transition to FHIR. Removing certification criteria that support currently
used exchange standards without sufficient transition time risks increasing interoperability gaps
across the care continuum. The proposed scale of changes could reduce transparency into
whether certified health IT tools perform reliably for all settings. The patient impact is
potentially worsening disparities in care coordination and in patient health outcomes.
Given these considerations, we encourage ASTP/ONC to retain all of the C-CDA-based
certification criteria and the “transport methods and other protocols—Direct Project, Edge
Protocol, and XDR/XDM” certification criterion proposed for removal or revision, or,
alternatively extend the proposed implementation timelines. C-CDA documents remain widely
used and continue to serve as a reliable and familiar method for exchanging and reviewing
patient summary information across care settings. Similarly, Direct Project and Edge Protocol
functionality provide foundational support for many use cases, including admission, discharge,

7
and transfer (ADT) notifications, secure clinical messaging, and public health data exchange.
Maintaining support for these capabilities during a transition period would help preserve
continuity of care and much needed data exchange.
The proposed removal of Direct-related certification criteria risks introducing significant
ambiguity into the national interoperability landscape. Direct remains one of the few transport
standards with widespread, real-world adoption across EHR vendors, health systems, payers,
and public health agencies. Eliminating certification requirements while retaining the
underlying standard creates a regulatory gray zone in which implementers no longer share a
uniform expectation for transport behavior, security controls, or identity validation. This shift
would predictably erode compliance over time, as vendors deprioritize maintenance of Direct
capabilities and HCOs/payers face inconsistent support for sending and receiving clinical
information. The result is a measurable increase in friction for transitions of care, care
coordination, and payer provider data exchange—precisely the domains where Direct currently
provides reliable, low burden interoperability.
Maintaining privacy, security, and identity management requirements associated with Direct is
essential to preserving a safe and trustworthy exchange ecosystem. Direct uniquely embeds
certificate-based identity validation, mutual trust anchors, and end-to-end encryption both in
transit and at rest, providing a hardened security posture for PHI that many alternative
transport mechanisms do not replicate. Removing these requirements without establishing an
equivalent or stronger baseline risks weakening identity assurance, increasing susceptibility to
misrouting or spoofing, and reducing the overall security of PHI exchange. Retaining Direct’s
associated privacy, security, and identity management provisions within certification ensures
continuity of protections that stakeholders rely on today and prevents a regression in national
interoperability performance during the transition to newer API based exchange methods.
While we appreciate ASTP/ONC’s intent to collaborate with industry and federal partners to
advance FHIR, we encourage development of a migration and readiness timeline for FHIR.
Providing stakeholders with a clear timeline, implementation guidance (especially equity-
focused implementation support for under-resourced providers), and readiness expectations
would help ensure a smoother transition across the care continuum. A phased approach would
help maintain current interoperability capabilities while supporting the broader goal of FHIR
becoming the new, widely used and widely implemented standard.

FHIR Transition Relative to TEFCA/QHIN Framework
We acknowledge ASTP/ONC’s focus on reducing administrative burden, strengthening
interoperability, and modernizing the regulatory foundation to support FHIR-based APIs and AI-
enabled data exchange. Improving coordination across HIEs and QHIN ecosystems to achieve
better treatment-oriented data transfer between health systems will improve the burden on
providers and patients. We request that ASTP/ONC designate resources to help organizations
become part of a QHIN, provide appropriate QHIN oversite, require QHIN’s to share data
effectively in a standardized way, and require EHR vendors to take that data and show it to
physicians and care givers in a way that is consistent with their workflow. This will greatly
enhance the ability for patients to navigate health systems to get optimal care with efficiency
for providers. ASTP/ONC should also structure the TEFCA network in a way that QHIN’s can help
with federal and state public reporting for regulatory purposes and share standardized quality

8
data as the next goals for interoperability through TEFCA. Aligning FHIR certification
requirements with TEFCA and QHIN goals of improving patient care through data exchange will
help.
We request ASTP/ONC to develop a clear, staged roadmap with consistent versioning and
migration timelines, and clear testing windows for providers and vendors allowing coordination
that would ensure national interoperability frameworks reinforce one another rather than
create duplicative or conflicting obligations. We request that they incentivize better structured
data for common workflows like nursing documentation, lab results with reference ranges, and
quality metrics that would allow better FHIR-based API’s and interoperability to promote safe
AI-ready data exchange that allows better summarization of all health data and a more
complete patient focused healthcare story. ASTP/ONC should also be planning for how to
update FHIR requirements to have QHIN's prepare to share standardized quality/reporting data
to national and state organizations in a way to offload that burden from individual health
systems and standardize the public health and reporting areas.

Conclusion
We support ASTP/ONC's efforts to continue to push health care towards greater
interoperability and embracing innovation, though it is clear from our partners that this forward
momentum must be balanced with recognizing the variability in FHIR readiness across the
health care continuum. Certain provider types and care settings (including public health) still
rely on existing functionality supported by certification criteria that could be removed. If these
capabilities are no longer supported and a provider or organization lack the resources or
technical capacity to transition to FHIR-based approaches, there is risk that critical data
exchange activities may be reduced or discontinued. Market-driven strategies are unlikely to
resolve a potential widening of the interoperability gap; therefore, under-resourced settings
will need additional support.
We encourage ASTP/ONC to consider the broader collection of policies, rules, education and
implementation guidance necessary to fully support the transition to a FHIR-enabled ecosystem
and AI-enabled health IT. This includes continued federal investment in TEFCA and QHINs, as
strengthening nationwide interoperability infrastructure will help accelerate the progress
ASTP/ONC seeks, improve data exchange across all sectors within health care, reduce
administrative burden, and support emerging technologies such as AI. A crosswalk document
that illustrates how these criteria will be reestablished through updated standards may also be
helpful. Any crosswalk or mapping of removed certification criteria should explicitly identify
which prior requirements supported patient safety, clinical quality, auditability, provenance,
and liability protections, and how those safeguards will be preserved under revised standards.
We also encourage ASTP/ONC to develop strategies to anticipate and mitigate unintended
consequences associated with these proposed changes. Indeed, there is danger that
implementation, oversight, and compliance burdens would shift from health IT developers to
providers who have limited technical and financial resources to bear it.
Lastly, we would also urge ASTP/ONC to be mindful of the desire from providers and patients
alike for a baseline for privacy and security in health IT, and for increased adoption of AI in
health care to be accompanied by strong transparency, accountability, and governance
frameworks.

9
Withdrawal of Unfinalized HTI-2 Proposals and Public Health
Considerations
Despite the removal of the public health certification, PHAs still do not have sufficient,
sustainable funding for public health interoperability. Public health funding is often periodic,
program-specific, and/or siloed grants – almost all is from the federal government. Significant
funding is needed to purchase and maintain public health IT systems, update policies and
processes, and train public health professionals while maintaining normal day-to-day
operations. To do this work in a coordinated approach, agencywide funds are needed as well as
program-specific resources. The Data Modernization Initiative (DMI) funds need to continue.
The funding needs for local public health (LPH) differ from the state public health needs to
achieve interoperability, send and receive FHIR and implement AI. The same expertise and staff
are needed by state programs, and therefore, funds are needed for local, regional (state staff
who support LPH within a region), and state staffing.
As laid out by HIMSS 1, state, territorial, local, and tribal public health “require significant
investment to maintain the software, hardware, workforce, licensing sustainability, and
technical support to transmit vital public health data.” We agree with the report’s findings that
a significant investment is needed and if there are certification criteria in the final rule, the
dollar amounts should be adjusted to include the costs related to certification and other
components of the rule.
Minnesota is working to better leverage syndromic surveillance reporting. Some PHAs need
new and ongoing funding to operationalize syndromic surveillance, incorporating the lessons
learned from COVID. We support any effort to advance hospital and CAH participation in CDC’s
NSSP. We recognize that there is not a one size fits all approach to achieve all hospitals
participating and without all hospitals participating the benefit of certified public health IT
systems will be limited. Therefore, we encourage a three-prong approach for participation that
includes:
▪ require participation of all hospitals – including specialty hospitals such as behavioral health
and children’s - and CAHs in CDC’s NSSP using CMS policy and funding levers;
▪ coordinate with federal partners to assure that all federal hospitals (e.g., VA and IHS) are
participating in the CDC’s NSSP; and
▪ build relationships with tribal hospitals and identify strategies to encourage participation.
Public health remains a critical component in achieving improved interoperability and must not
be inadvertently deprioritized. To improve health outcomes nationwide, we ask that ASTP/ONC
ensures that public health agencies remain engaged and fully integrated into ongoing
interoperability and innovation efforts. Meaningful progress can be made with support from
our federal partners.

1
HIMSS. Public Health Information and Technology Infrastructure Modernization Funding Reporting: Core
Investment Strategies to Modernize and Interoperate Federal, State, Local, Tribal Public Health Systems. 2002.
https://www.himss.org/sites/hde/files/media/file/2022/04/29/pubpolicydatamodernization_final.pdf
10
Appendix A
2025-2026 Minnesota e-Health Advisory Committee Member List
Co-Chairs
Bryan Jarabek, MD, PhD, Chief Medical Informatics Officer, M Health Fairview
Representing: Large Hospitals, Co-chair
Lindsey Sand, LHSE, NHA
Representing: Health Care Administrators, Co-chair
Members
Najma Abdullahi, Executive Board of Directors-Member, UMN Community-University Health
Care Center
Representing: Consumer Members
Stacie Christensen, Deputy Commissioner and General Counsel
Representing: Department of Administration
Brittney Dahlin, MS, RHIA, CPHQ, Chief Operating Officer, Director of Quality Improvement,
Minnesota Association of Community Health Centers
Representing: Community Clinics/Fed Qual. Health Centers
Kim Heckmann, MSN, FNP-C, SCRN, PHN, Primary Care NP Residency Program Director and
APRN Educator, VA Medical Center
Representing: Nurses
Matt Hoenck, Director of IT & Analytics, South Country Health Alliance
Representing: Health Plans
Steve Johnson, PhD, Associate Director, CTSI Health Informatics Program, University of
Minnesota
Representing: HIT Training and Education
George Klauser, Executive Director – Community Services-ACO/Healthcare Consultant,
Lutheran Social Services of Minnesota
Representing: Social Services
Lisa Klotzbach, MA, BA, PHN, Public Health Supervisor – Informatics, Dakota County Public
Health
Representing: Local Public Health
Sarah Manney, DO, FAAP, Chief Medical Information Officer, Essentia Health
Representing: Physicians
Genevieve Melton-Meaux, MD, PhD, Senior Associate Dean, Health Informatics and Data
Science, University of Minnesota
Representing: Academics and Clinical Research
Lisa Moon, PhD, RN, LHIT, LNC, CEO, Principal Consultant, Advocate Consulting, LLC
Representing: Experts in Health IT

11
Nathan Moracco, Technology Director
Representing: Direct Care and Treatment
Jane Pederson, MD, MS, Chief Medical Quality Officer, Stratis Health
Representing: Experts in Quality Improvement
Charles Peterson, Chief Executive Officer, The Koble Group
Representing: Health IT Vendors
Peter Schuna, Chief Executive Officer, Pathway Health Services
Representing: Long Term and Post-Acute Care
Ashley Setala, Director of Regulation & Policy Strategy
Representing: Department of Commerce
Mathew Spaan, Manager, Care Delivery and Payment Reform
Representing: Department of Human Services
Tarek Tomes, Commissioner
Representing: MNIT
Laura Topor, President, Granada Health
Representing: Pharmacy
Laura Unverzagt, MBA, Vice Chair-Information Technology, Mayo Clinic
Representing: Health System CIOs
Mary Winter, Senior EDI Analyst, PrimeWest Health
Representing: Health Care Purchasers and Employers
Designated Alternates
Alexandra De Kesel Lofthus, Associate Director, State Strategy, Unite Us
Representing: Consumer Members
Alicia Jackson, MS, CPPM, Healthcare Analyst Principal, Blue Cross Blue Shield of Minnesota
Representing: Health Plans
Kari Majors, Vice President and Executive Director, CyncHealth
Representing: Health IT Vendors
Emilie Maxie, DNP, CCRN, ICU Enterprise Staffing Pool RN, Mayo Clinic
Representing: Nurses
Roxanee Pierre, MD, MHA, Medical Director/ Administrator, Eden Pathways Homecare Agency
Representing: Physicians
Adam Stone, Practice Leader, Zaviant
Representing: Experts in Health IT
Tamara Winden, PhD, MBA, FHIMSS, FAMIA, Founder Principal Consultant, Winden Consulting,
LLC
Representing: Academics and Clinical Research

12
