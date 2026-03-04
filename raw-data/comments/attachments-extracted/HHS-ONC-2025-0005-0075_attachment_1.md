# HHS-ONC-2025-0005-0075 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0075/attachment_1.pdf

---

Dr. Thomas Keane, MD, MBA
Assistant Secretary for Technology Policy
Office of the National Coordinator for Health Information Technology
Department of Health and Human Services
7033A, 330 C Street, SW
Washington, DC 20201

Re: RIN 0955-AA09 (Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory
Actions To Unleash Prosperity)

Dear Dr. Keane:

The Shift Collaborative thanks the Assistant Secretary for Technology Policy (ASTP)/Office of
the National Coordinator for Health Information Technology (ONC) for the opportunity to
provide comments on the Health Data, Technology, and Interoperability: ASTP/ONC
Deregulatory Actions To Unleash Prosperity Proposed Rule. Shift appreciates the ASTP’s goal
of reducing the burden on the health care ecosystem and fostering innovation through
interoperability. Shift’s comments are informed by extensive conversations with key health care
stakeholders and subject matter experts representing a variety of domains. Shift’s comments are
focused on responding to the proposed removal of the Data Segmentation for Privacy (DS4P)
criteria, the removal of the Privacy and Security criteria, and the proposed revision to the
Decision Support Interventions criterion. Foundational to these comments is Shift’s
recognition that the ONC Health IT Certification Program is crucial to public trust, especially as
the interoperable ecosystem scales with new Fast Healthcare Interoperability Resources
(FHIR®)-first entrants such as Individual Access Service (IAS) applications through the Trusted
Exchange Framework and Common Agreement (TEFCA). Shift firmly believes that privacy and
security capabilities are not ancillary features of data exchange; they are foundational
infrastructure that determines whether interoperability can be trusted, safely adopted, and
successfully realized at scale.

About Shift
The Shift Collaborative1 is a nonpartisan, independent, volunteer collaborative of interested
parties, established in 2020, that has convened to address technical barriers and implementation
challenges to giving patients control over the sharing of their sensitive data. Shift accomplishes
this by advancing granular segmentation and computable consent standards and providing
practical, real-world guidance. These efforts are designed to promote interoperability and the
sharing of patient information. Shift’s diverse expert stakeholders include approximately 300
representatives of health care organizations, professional societies, standards development
organizations, health IT vendors, health information exchanges (HIEs), and other interoperability
1
Shift Website. https://www.shiftinterop.org/about-shift

​ ​ ​ ​ ​ ​ Page 1
​ ​ ​ ​ ​ www.shiftinterop.org
frameworks, payers, government and non-government contractors, patient and caregiver
advocates, and experts in privacy, law, and ethics, among others.

When patients engage with today’s health technology, they frequently must choose to share their
data in an all-or-none manner; in some instances, this decision is made algorithmically by
organizations or vendors seeking to comply with federal or state law. More data may be withheld
than necessary due to a lack of practical technology solutions to segment and tag data for
transmission while respecting patient privacy and complying with applicable statutes. Patients
who have no personal health information deemed sensitive – whether by state law, social stigma,
or personal circumstance – can share their data without concern. Alternatively, patients who do
have sensitive personal health information fear that sharing certain information may increase
stigma and the likelihood of bias within the patient-provider relationship, or be used against them
if accessed outside of the clinical environment. This all-or-none sharing limitation on our current
technology means that only some patients realize the full benefits of interoperability.

Shift seeks to advance a health care ecosystem in which all Americans have the opportunity to
benefit from health information sharing. Recognizing both the power and potential risks of
sharing personal health information, Shift’s goal is to advance granular data segmentation
standards, nationally-available terminology value sets, and implementation guidance across the
health data ecosystem to foster an environment that better supports innovation and the generation
of patient-empowered health information sharing. Shift’s long-term vision is that such a future
state would increase trust between patients, providers, and caregivers, and in doing so, improve
the quality of care, increase access and patient engagement, and decrease the cost of care.

The Shift Governing Board currently includes the following organizations: the American
Medical Association, the American Academy of Pediatrics, the Health Information Management
Systems Society Electronic Health Records Association, Integrating the Healthcare Enterprise
USA (IHE), and Drummond. Shift further partners with other organizations in this space like the
Sequoia Project, the Gravity Project, HL7, Civitas Networks for Health, Futures without
Violence, OpenNotes, the Healthcare Trust Institute, and Connecting for Better Health. Shift’s
work is further governed by input from four expert advisory groups:
1.​ Clinical Expertise. This Advisory Group is composed of practicing physicians and other
licensed health care professionals who provide valuable insights on day to day workflows
within their practices.
2.​ Legal & Policy. Participants have working expertise in the areas of privacy and/or health
care law and policy who provide support by offering analysis of legal and policy issues
that pertain to Shift's work.
3.​ Ethics & Equity. These experts focus on guiding our work within frameworks of
medical ethics and broad applicability of our work for all Americans.

​ ​ ​ ​ ​ ​ Page 2
​ ​ ​ ​ ​ www.shiftinterop.org
 4.​ Patient Perspectives. In partnership with OpenNotes our volunteers continually focus
our work to be patient focused and include patient and caregiver voices in all aspects of
our work.

Shift’s work is organized into three, interdependent workstreams:2
●​ A Terminology Workstream, which is working in collaboration with HL73 to build out
national sensitive data value sets, aligned with Shift’s use cases.4 These value sets are
adopted and updated, in part, from SAMHSA’s C2S VSAC value sets, which have not
been maintained since 2016. Shift plans to release updated sensitive data value sets by the
end of 2026.
●​ A Technical Workstream, which also works in lockstep with HL7 to mature DS4P
FHIR and the Privacy Consent on FHIR (PCF) IHE profile5 in accordance with Shift’s
use cases. Our technical workstream has completed several reference implementations
demonstrating how security label service (SLS) tagging of FHIR data can be
interoperably shared between multiple EHRs and recently unveiled our open-source Shift
FHIR-sustainable sandbox publicly. The sandbox includes a redacted record viewer
simulating what a patient record with redacted information may look like based on
dynamic patient consent preferences. It also supports workflow demonstrations using
synthetic data in a mock EHR environment and will soon allow vendors to connect their
products via API in order to test and validate these workflows within their systems using
Shift’s synthetic data, use cases, and implementation guidance. To this end, Shift is
drafting an implementation guide (IG) to assist technology partners with implementation.
Shift has supported DS4P maturation since 2018 and stands ready to assist ASTP with
alternative validation methods using our open sandbox. Our sandbox can be accessed
here.6
●​ An Implementation Workstream, which has convened multidisciplinary experts from
across the health care ecosystem to complete four modified Delphi processes that dove
deeply into the topics that have previously been flagged as roadblocks for developing
granular segmentation technology. Specifically, our topics discussed informed consent;
safety and ethics of health data redaction; notification to the intended recipient regarding
redacted data; and how redacted data should be used by decision support intervention
algorithms as well as incorporated in AI training models. Shift is in the process of

2
Galvin HK, Coughlin J, Sharko M, Grando MA, Jafari M, Mack S, English A, Petersen C. Patient-Driven Sharing
of Health Information: A National Effort to Advance Equitable Interoperability. Appl Clin Inform. 2025
Aug;16(4):951-960.
3
HL7 Cross-Paradigm Sensitive Data and Sensitivity Flags Library and Guidance Workgroup.
https://confluence.hl7.org/spaces/CGP/pages/321160258/Cross-Paradigm+Sensitive+Data+and+Sensitivity+Flags+
Library+and+Guidance
4
Shift’s Use Cases. https://www.shiftinterop.org/our-work/use-cases
5
IHE Privacy Consent on FHIR (PCF) Profile. https://profiles.ihe.net/ITI/PCF/index.html
6
Shift’s Public Sandbox. https://shift-sandbox.technicise.eu/auth/

​ ​ ​ ​ ​ ​ Page 3
​ ​ ​ ​ ​ www.shiftinterop.org
 submitting our manuscripts to peer-reviewed journals, and would be glad to share high
level results with ASTP in the interim.

Shift’s myriad deliverables have thus far been executed by an almost-entirely volunteer cadre of
hundreds of stakeholder experts. This level of sweat equity in and of itself emphasizes shared
urgency and momentum to achieve an interoperable landscape that can safely and consistently
protect the private information of patients. Simultaneously, the rapidly diversifying landscape of
state laws designed to protect highly sensitive data7 further poses challenges for CEHRT
vendors, who incur additional costs when trying to build functionality to meet compliance
requirements to 50 state regulations instead of a single national standard. For these reasons, Shift
would strongly advocate that the time to advance granular segmentation and computable consent
standards is now.

Data Segmentation for Privacy
Shift's work focuses on DS4P FHIR and FHIR-based computable consent workflows,
specifically using the Privacy Consent on FHIR (PCF) IHE Profile. Shift recognizes that FHIR is
not the only data transmission standard and, in fact, that much of the data transmission between
entities uses CDA. For this reason, Shift strongly supports ASTP keeping DS4P CDA, R1 as an
ASTP/ONC-adopted standard at 45 CFR 170.205(o) and further strongly advocates that
wherever that standard is utilized, it be implemented to allow tagging at the CDA document,
section, and entry level. While Shift notes that a considerable percentage of data exchange still
occurs using CDA and that there remains a significant utility and value for the DS4P CDA
standard, the Collaborative believes the future of data segmentation and computable consent is in
FHIR. For this reason, Shift does not object to the removal of voluntary CDA criteria provided
they are replaced by a glide path to future validation of DS4P FHIR and the PCF IHE profile,
which have been modeled to Shift’s nationally-applicable use cases.

Overwhelmingly, Shift has received feedback that patients want and providers need more mature
segmentation and consent features. In the absence of reliable, standards-based segmentation
capabilities, providers may over-share to avoid information blocking liability, under-share to
mitigate privacy risk, or under document information in the patient’s chart, thus making a chart
less reliable. In the absence of clear, standards-based approaches, vendors may also develop
proprietary segmentation and consent solutions that function within individual products but do
not support consistent interpretation or handling of protected data across systems, further
fragmenting interoperability. All of these outcomes undermine the intent of federal
interoperability policy. Furthermore, the technology supporting the Patient Requested Redaction

7
E.g., 2023 Cal AB 352, 2023 Cal Stats. ch. 255; 2023 Md. Laws 248, 2023 Md. Chap. 248, 2023 Md. SB 786,
2023 Md. Laws 249, 2023 Md. Chap. 249, 2023 Md. HB 812.

​ ​ ​ ​ ​ ​ Page 4
​ ​ ​ ​ ​ www.shiftinterop.org
provision under the Health Insurance Portability and Accountability Act of 1996 (HIPAA)
Privacy Rule is currently rudimentary and often requires manual redaction by the provider,
which adds administrative burden. Shift understands that data segmentation and computable
consent can only be achieved at scale through FHIR, which is why we are concentrating our
efforts on updating FHIR standards and collaborating with key partners like HL7 and Sequoia.

DS4P was appropriately introduced into the ONC Health IT Certification Program as an optional
certification criterion. Optional criteria have traditionally served two critical functions within the
Certification Program: signaling the direction of future policy expectations and enabling
policymakers to assess technical feasibility and market readiness without imposing undue
burden. In this context, DS4P represents a measured and appropriate policy mechanism for
advancing privacy-preserving interoperability.

In recognition of the need for granular segmentation, Shift has developed a standards-based
sandbox, through which we stand ready to support updates to the DS4P FHIR IG by contributing
practical implementation insights, alternative testing approaches, and open source tools. As such,
Shift’s work to mature DS4P FHIR can assist ASTP in using future certification pathways
effectively to scale interoperability. Continued recognition of DS4P provides essential alignment
between federal policy, standards maturation, and real-world implementation efforts.

Shift shares ASTP’s goal of achieving FHIR adoption at scale, and notes that FHIR scales
organically when it enables new markets. Data segmentation provides a FHIR use case that
facilitates the use of such tools as AI-enabled behavioral health (BH)/substance use disorder
(SUD) screeners, and genetic testing, among others. By funding reference implementations and
mandating not only API availability but production transaction volumes, tying reimbursement or
contracting to measurable FHIR exchange, and requiring vendors and payers to consume
FHIR-based segmented data using computable consent, ASTP can actively stimulate adoption of
data segmentation as a key FHIR use case at scale. Data segmentation and consent additionally
enable trust, which further promotes interoperability with a wider ecosystem at scale. It also
creates a legal substrate for patient-permissioned economies, which enable consumer health app
marketplaces, consent brokers, data fiduciaries, and privacy-preserving analytics vendors at
scale. Additionally, segmentation and consent allows better training of AI models including
broader population sampling but excluding protected categories, facilitating model inference
with purpose-bound tokens, and enabling audit trails proving non-use of sensitive elements. This
allows AI model training to better scale to areas like behavioral health, SUD relapse, and
adolescent risk prediction. Finally, as we work toward administrative simplification and
removing barriers to access, DS4P FHIR and FHIR-based consent management allows for more
streamlined payer-provider data exchange to facilitate care management data, risk adjustment
details, quality measures, and prior authorization automation without concern that sensitive,
often stigmatized data would be used for underwriting or denial.

​ ​ ​ ​ ​ ​ Page 5
​ ​ ​ ​ ​ www.shiftinterop.org
In short, Shift holds that data liquidity and privacy assurance will result in increased health
technology market size and opportunities. FHIR increases liquidity, and DS4P increases that
assurance. DS4P also creates new markets for FHIR, where previously stakeholders may have
hesitated to share data at all. This is why promoting DS4P and PCF are critical to achieving
FHIR at scale.

Privacy & Security
ASTP’s justification for removing all the privacy and security certification criteria in
§ 170.315(d) and the associated Privacy and Security Certification Framework under
§ 170.550(h), is that certification is no longer the primary driver of security (rather, market forces
are), and that removing these requirements reduces burden and regulatory overload. Shift’s
primary interest in this matter falls within our vision to “further a health care ecosystem in which
better technology for clinical data sharing increases trust between patients, providers, and
caregivers to improve health quality and outcomes.” Security capability conformance clearly
supports and encourages the public trust, particularly in this era of increased cybersecurity
threats.

Shift firmly believes that market forces are not enough to ensure sufficient privacy and security
technical capabilities as a floor for those health technologies previously certified. For example,
as a state health agency, the Utah Department of Health and Human Services (DHHS) is not
required to meet ASTP conformance standards for certified electronic health technology. Yet
there were no market or other regulatory forces that compelled this government organization to
implement the minimum security requirements to adequately protect its patient records; a state
auditor recently found the records of 2 million people (including psychiatric treatment records)
are accessible to any DHHS without appropriate safeguards.8 Another example is Enzo
Biotechnology company, which was not using certified health technology, and compromised the
data of 2.4 million patients through poor data security practices.9 One might argue that
previously certified health technology is less likely to drift to a lower security bar, and this may
be largely true for well-established, larger vendors who have well-established customer
contracts, BA obligations, cyber insurance, and enterprise security program requirements.

However, it is Shift’s understanding that ASTP is specifically proposing to remove these
requirements in order to lower the barrier of entry and burden for smaller vendors, new market
entrants, and bolt-on modules. In such cases, the minimum bar for such startup EHRs, integration
platforms, patient engagement tools, niche modules, and others would be lowered. While this
may increase competitive entry, it also increases the chance that some products may compete by
8
The Salt Lake Tribune. https://www.sltrib.com/news/politics/2026/02/11/millions-records-about-utah/
9
New York State Attorney General.
https://ag.ny.gov/press-release/2024/attorney-general-james-secures-45-million-biotech-company-failing-protect-ne
w
​ ​ ​ ​ ​ ​ Page 6
​ ​ ​ ​ ​ www.shiftinterop.org
underinvesting in security. While the HIPAA Security Rule duties do still apply, these do not
serve as an adequate backstop because enforcement is not a tight, universal feedback loop, and
often hits after patient health data cannot be clawed back, and after harm has already been done.

As we foster innovation through AI, the market for these new entrants is exploding, and as we
expand TEFCA, as well as advance other point-to-point connections through the Centers for
Medicare & Medicaid Services (CMS) Interoperability Framework, these actors are not only
housing their own customers’ data, but exchanging that data across the ecosystem. While
certification is indeed not a requirement for data exchange, lowering the privacy/security floor at
any point in the system weakens the entire network.​
​
As for ASTP’s proposal to move to modular certification, Shift would assert that such modular
embedding creates uneven protection across use cases, as a module that does not certify against a
particular API criterion may have no embedded security requirements, so security becomes
dependent on the specific criteria selected. In a FHIR-forward ecosystem, where APIs increase
exposure surface, Shift would assert that weakening the horizontal security floor is especially
concerning.

Furthermore, Shift would suggest that certification burden could actually be reduced without
eliminating this floor. A slimmed-down core of privacy and security core certification standards
could be retained. ASTP requests comments on an alternative of retaining only audit-focused
criteria (§170.315(d)(2), (3), and (10)). Shift would advise that this proposed alternative is not
enough of a baseline security floor. A more reasonable alternative would need to include
additional specifications, such as those for authentication/access controls, encryption-related
criteria, integrity protections, automatic timeout, multifactor authentication, and emergency
access. ASTP could also reduce burden by reducing the frequency of retesting and/or permitting
reliance on recognized frameworks in lieu of full retesting.
​
Shift specifically emphasized the detrimental impacts of removing these criteria on the public
trust in our health technology systems. Shift stakeholders describe with increasing frequency
their experience with both patient and clinician mistrust in electronic health technology. As we
scale innovation and interoperability, our goal should be to do everything possible to secure the
public’s trust. ASTP’s proposal to remove these privacy and security certification criteria instead
services to weaken the public trust, which in turn could increase hesitancy to share data, adopt
interoperable tools, or fully participate in interoperability frameworks.

Decision Support Interventions
As part of Shift’s implementation work, we have gathered multidisciplinary experts across the
country to opine on a variety of complex, nuanced issues related to patient-driven sharing of
information, segmentation, and consent management. From September 2025 to January 2026, we

​ ​ ​ ​ ​ ​ Page 7
​ ​ ​ ​ ​ www.shiftinterop.org
conducted our final modified Delphi process focused on workflows related to decision support
interventions (DSI) and the training of AI models. While the group had diverse opinions related
to a number of areas, one point of near-unanimous consensus was that, regardless of the training
data available to a model, vendors should be required to publish information about potential bias
in that model. Our experts - which include the very clinicians and administrators mentioned by
ASTP - believed that this information is or would be essential to their use of AI DSI tools and
cited as examples how they used such data from model cards or similarly-provided information
from vendors in their current practice and organizational responsibilities.

Conclusion
We applaud the long and difficult work that the ASTP has undertaken with CMS to support
interoperability and a patient’s right for transparent access to their personal health information.
The landscape of interoperability has improved drastically over the past decade, benefiting many
patients and their families while reducing manual and duplicative work for providers and payers.
We also commend ASTP’s diligence in undertaking an assessment of past regulations to ensure
their continued usefulness and relevance. In that context, Shift emphasizes the ecosystem’s
critical need for standards-based data segmentation and computable consent capabilities in order
to enable safe, trusted health information sharing for all Americans. While exchange today
remains largely CDA-based, a deliberate glide path toward FHIR-based approaches such as
DS4P FHIR and PCF is needed to support scalable interoperability.

Shift’s work is designed to help support that transition by aligning policy, standards
development, and real-world implementation. Shift further holds that the fundamentals of
interoperability are built on privacy and security, and that removing these certification
requirements may have significant downstream impacts. Importantly, reducing burden and
costs need not require eliminating baseline protections; alternative approaches exist that could
streamline implementation while preserving a consistent security floor. As health data
increasingly supports advanced analytics, decision support interventions, and AI-enabled tools,
the absence of consistent, certified privacy and security controls risks degrading data quality,
eroding public trust, and introducing conflicting implementation requirements. Shift stands
ready to support ASTP with practical implementation guidance, alternative testing approaches,
and open, standards-based tools to help modernize certification while minimizing burden on
vendors or providers.

Sincerely,

Hannah K. Galvin, MD, FAAP, FAMIA, CHCIO, CDH-E​
Shift Co-Founder and Board Chair
On behalf of the Shift Collaborative Board of Directors

​ ​ ​ ​ ​ ​ Page 8
​ ​ ​ ​ ​ www.shiftinterop.org
