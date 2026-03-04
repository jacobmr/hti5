# HHS-ONC-2025-0005-0158 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0158/attachment_1.pdf

---

February 27, 2026

Assistant Secretary for Technology Policy/Office of the National Coordinator for Health
Information Technology
Department of Health and Human Services
330 C Street SW
Washington, DC 20201
RE: Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions To
Unleash Prosperity

To the Assistant Secretary for Technology Policy:
On behalf of the American Immunization Registry Association (AIRA), we are pleased to
submit comments on the draft rule for Health Data, Technology, and Interoperability:
ASTP/ONC Deregulatory Actions To Unleash Prosperity (HTI-5). Additionally, we would
like to provide brief unsolicited comments on Health Data, Technology, and
Interoperability: Patient Engagement, Information Sharing, and Public Health
Interoperability; Withdrawal, despite the fact that this notice lacks a formal comment
period.
These comments are a compilation of the input of our members which include over 100
organizations representing Public Health Immunization Information Systems (IIS), IIS
implementers and vendors, non-profit organizations and partners. IIS interface with a
broad range of stakeholders, including providers, pharmacists, schools, child care facilities,
health plans and payers, among others. IIS and our partners are invested in promoting
smooth interoperability to ensure broad data use. At the point of clinical care, an IIS
provides consolidated immunization records and forecasts to support clinical decisions. At
the population level, an IIS provides aggregate data and information on vaccinations for
surveillance, program operations and public health action.
We appreciate the care and thought that went into the creation of both of these
documents, and we are grateful that ASTP has provided an opportunity for comment.
However, we believe it is important to view these changes in the context of the current
environment. For example, FHIR is definitely a priority for supporting standards-based
interoperability in the future, but implementation and adoption remain low, so it is critical
to maintain existing messaging standards (HL7 V2, CDA) in the short term as we move
toward FHIR in the long term. Funding challenges in both private and public health
environments may make rapid adjustments to changing rules and regulations challenging.
Similarly, additional environmental threats such as the anticipated reorganization of the
National Institute of Standards and Technology (NIST) presents risks that need to be
considered when shifting standards and regulation. In the same vein, the decision to retire
CDC’s Vocabulary Access and Distribution System PHIN/VADS when there is no clear
replacement is also a risk and a concern as health IT tries to maintain existing
infrastructure and current high volume data exchange.
AIRA provides suggestions on HTI-5, as well as on the withdrawal of other components of
HTI-2, on the following pages, organized by section. At the end of the letter, we’ve added
some high-level suggestions for future rules such as HTI-6. Please feel free to contact me
with any questions about this content: mbkurilo@immregistries.org.
AIRA and the IIS community appreciate the opportunity to comment on this draft rule, and
we look forward to continuing to collaborate to ensure high-value health IT interoperability
with our many partners across the public and private sector.

Sincerely,

Mary Beth Kurilo, MPH, MSW
Senior Director of Health Informatics
American Immunization Registry Association (AIRA)
Comments by Section, Prioritized by Relevance to the IIS Community

Section Draft Rule Text or AIRA Comments
Context 5. Insights Withdrawal of We have significant concerns about the removal
“Immunization of the Insights Conditions related to
Administrations interoperability between IIS and EHR partners. In
Electronically our original HTI-2 comments (submitted
Submitted to IIS 10/4/2024), we voiced our strong support for
through Certified real world reporting of aggregate data to
Health IT” and provide visibility into exactly how much
“Immunization history immunization data EHR vendor products are
and forecasts through providing to IIS. This reporting would also
certified health IT”. provide transparency around which certified
products were NOT exchanging data with IIS,
allowing for targeted outreach and improved
interoperability. Most importantly, over and
above the insights these measures would bring
to health IT systems, providers would benefit
substantially through improved interoperability
and increased access to consolidated
immunization data at the point of care. We
recommend the retention and enforcement of
the existing Insights Conditions related to public
health interoperability so that data will be
available for future assessment of the success of
certified HIT reporting functionality.
A. Certification Remove We would like to emphasize that the protection
Criteria for Authentication, Access and security of patient info is paramount. The
Health Control, authorization economic value of this information entices bad
Information actors to acquire such information through
Technology inappropriate and often illegal means. We
encourage the retention of existing security
requirements as part of certification until such
time as more consistent and fit for purpose
privacy and security requirements can be
incorporated into future versions of the HIT
Section Draft Rule Text or AIRA Comments
Context
certification criteria. If providers and individuals
are to remain committed to data
interoperability, then they must be certain that
their critical information is securely protected
from bad actors.
Part 171 Information Blocking: The intent and scope of this proposal is unclear.
We propose to revise Does “including without limitation, autonomous
the § 171.102 ‘‘access’’ AI systems” refer to the potential volume of data
and ‘‘use’’ definitions requests from an autonomous AI system or is it
to emphasize that the intended to indicate that all types of
definitions include autonomous AI systems are valid actors who
automated means of may place requests for data. Both
access, exchange, or interpretations are potentially troubling for
use of EHI—including, public health programs using systems with
without limitation, limited technological bandwidth for responding
autonomous AI to requests for data (and may be overwhelmed
systems. by large volumes of requests) and for programs
with clear jurisdictional mandates to protect
sensitive information and share data with only
authorized users of the data. We recommend
clarifying the proposal to state that a wide
variety of autonomous AI systems may be
considered as potentially authorized users and
requesters of data upon verification of their
authority to access data.
A. Certification Decision to remove Although it does not affect immunizations
Criteria for reporting to Cancer specifically, we do have concerns from a broader
Health Registries and other public health perspective about the decision to
Information key areas of public move away from the current format of cancer
Technology health reporting and other key areas of public health, in
favor of FHIR. We recognize that there is a new
FHIR Implementation Guide (IG) for Cancer
Reporting (CCR), but to our knowledge, it has not
yet been implemented in a real-world
environment. In addition, even if it were
Section Draft Rule Text or AIRA Comments
Context
implemented, it is difficult to know if it would be
implemented in a standardized way across sites,
and if public health would be prepared to
receive data coming through this new
messaging standard. This would be particularly
challenging in the absence of regulation and/or
incentives.

                                   As one of the leading causes of death within the
                                   United States, cancer reporting to public health
                                   is a critical factor in maintaining the long-term
                                   health of citizens. We agree that the
                                   implementation of a FHIR-based standard, such
                                   as the existing central cancer reporting FHIR
                                   Implementation Guide, is critical to the long-
                                   term goal of a healthy America. However, the
                                   removal of the existing CDA-based requirement
                                   without setting expectations and support for the
                                   implementation of FHIR-based reporting is
                                   unlikely to be an effective approach for
                                   promoting the adoption of FHIR-based
                                   reporting. We support the retention of the
                                   Transmission to Cancer Registries certification
                                   requirement until such time as a future rule
                                   introduces certification criteria for standardized
                                   FHIR-based cancer reporting.

Standards § 170.315(f)(1) We encourage the reference and use of the HL7
Immunization v2.5.1 Implementation Guide for Immunization
registries—Bi- Messaging, Release 1.5 2018, as well as the
directional exchange updated vocabulary standards (CVX and NDC) as
the recommended standard for immunization
(12) HL7 2.5.1 interoperability. Additionally, consider updating
Implementation the referenced standard when the updated
Guide for Immunization Messaging Implementation Guide
Immunization (HL7 2.5.1 V2) is released in late 2026/early 2027.
Section Draft Rule Text or AIRA Comments
Context
Messaging, Release
1.5, October 1, 2014,
IBR approved for
§ 170.205(e).

          (13) HL7 Version 2.5.1
          Implementation
          Guide for
          Immunization
          Messaging (Release
          1.5)—Addendum, July
          2015, IBR approved
          for § 170.205(e).

General Emphasis on FHIR We strongly support the focus on a FHIR-
enabled future for healthcare data
interoperability. We see FHIR as a key
technology for enhancing clinical efficiency,
patient empowerment, and timely Public Health
reporting and follow up. We encourage
ASTP/ONC to signal support for standards-based
FHIR-enabled systems and governance to
support a broad range of health care and public
health data use cases. We also recognize,
however, that the broader public health
community would need sustained funding to
transition from legacy messaging formats to
FHIR messaging.
General Deregulation of Given the tremendous potential of a FHIR-
systems forward future, we note several proposals that
move certification away from standards-based
interoperability in favor of functional
requirements. These moves are likely to impose
a burden on both public health and the private
sector as HIT implementers will be left without
Section Draft Rule Text or AIRA Comments
Context
clear direction on the realization of data
interoperability. History has shown that when
HIT developers lack common standards to guide
the interoperability product development,
variable solutions result which must be
accommodated during implementation of data
exchange. We have concerns that the
proliferation of variant solutions may impose
unfunded mandates on State, local, and Tribal
governments, or the private sector. We strongly
recommend that Certification Criteria retain
requirements that certified HIT adhere to HL7
interoperability standards.
General Withdrawal of Public As strong proponents of standards and
Comment RE: Health Systems interoperability across public health, we had
HTI-2 Certification supported ASTP/ONC’s efforts to create a
Withdrawal
certification program for public health products,
Notice
with the assumption that public health would
have been closely involved in developing
measures and processes and funded to engage
in testing and subsequent improvement. The IIS
community has seen remarkable gains with our
own Measurement and Improvement Initiative,
a collaboration with CDC that tests both
implemented IIS products and vendor base
products against IIS Standards. AIRA and our
broader IIS community remain interested in
engaging with ASTP/ONC to collectively improve
interoperability across the public and private
sectors.
Finally, we’d also like to provide some forward-looking suggestions for HTI-6 inclusion that
ASTP may want to consider.
As part of a FHIR-forward future, the healthcare environment and health IT ecosystem
must fully embrace the new interoperability paradigms offered by the FHIR standard. Key
among the new FHIR offerings is FHIR-based subscription functionality. The ability for data
consumers to subscribe to subscription topics which are clearly defined, granular and
common across all data providers will enable consumers to access appropriate data in an
efficient and effective manner. The Patient Data Feed defined in the latest US Core FHIR
Implementation Guide represents an excellent starting point for core interoperability
expectations. The ability to subscribe additional key data classes including Condition,
Immunization and ServiceRequest will be critical to robust data sharing with authorized
trading partners in the real-world. This move toward FHIR could accelerate development
and data exchange significantly, but like all other areas of the health IT ecosystem, public
health must be adequately funded to develop and prioritize FHIR capacity.
Another powerful FHIR paradigm is that of Bulk Data Access. We support future
requirements to promote the adoption of Bulk Data Access as a means to share data on
populations of individuals with authorized data consumers. While the existing Bulk Data
Access FHIR Implementation Guide provides a solid technical basis for bulk data exchange,
it presupposes the existence of a group of individuals of interest (or at least a shared
understanding of the identities of the individuals of interest). Exploratory work performed
by the Helios FHIR Accelerator has documented aspects of the complexity of patient
identification and cohort creation which may inhibit the adoption of this standard. The real-
world implementation of Bulk Data Access would be greatly accelerated by functionality in
certified HIT to create cohorts of individuals with shared characteristics and exposing those
cohorts as FHIR Group resources. We suggest requirements in certified HIT for a robust
rules-based engine capable of creating cohorts on key patient attributes, including
demographics (e.g., age, location of residence), clinical data (e.g., confirmed diagnoses,
specific laboratory test outcomes) and administrative data (e.g., care relationship with a
particular provider or payer) as an implementation driver for Bulk Data Access.
We support efforts to move forward with FHIR but recognize that, at this time, fully
transitioning to FHIR messaging is aspirational. To realize this vision, we need new,
sustained investment in public health infrastructure. Many PHAs still lack the capability to
implement FHIR-based systems and will not achieve this capability without dedicated
resources. Investment in public health modernization is essential to support the
development of FHIR servers, establish FHIR capabilities, and train staff in new
technologies.
