# HHS-ONC-2025-0005-0143 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0143/attachment_1.pdf

---

February 27, 2026

Thomas Keane, MD, MBA
Assistant Secretary for Technology Policy (ASTP)
U.S. Department of Health and Human Services
330 C St SW, Floor 7
Washington, DC 20201

Re: Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions To Unleash
Prosperity PUBLIC COMMENT
REGULATION IDENTIFIER NUMBER (RIN) 0955-AA09

Dear Assistant Secretary:
Innovation drives modernization and efficiency gains across healthcare and public health, improving
healthcare services, public health interventions, policy decisions, and overall health of the American
public. Altarum recognizes that innovation is driven by organizations of all sizes and that existing
standards may, in some cases, present barriers to entry, limiting the industry’s ability to advance
healthcare and public health.
At the same time, standardization advances collaboration, communication, and reliability. From
standardized parts on an assembly line to IEEE standards for communication, standardization of physical
or software systems allows developers or their competitors to swap parts and solutions. These advances
demonstrate that although standardization may require extra effort, it enables both competition and
collaboration facilitating large-scale solutions and interoperability.
Stepping back from established healthcare interoperability standards risks degrading the communication
networks that support healthcare and public health both domestically and globally, potentially introducing
risks to care coordination and public health responsiveness. Replacing distinct specifications with
functional requirements would increase downstream data processing burdens, potentially causing delayed
findings, misinterpretations, and miscommunications that negatively impact both individual care and
national policy.
Shifting to functional requirements could force downstream systems—including state, tribal, local, and
territorial agencies and the CDC—to support a much wider variety of submission methods. This variety
would significantly increase integration complexity for already resource-constrained organizations. In
addition, because functional requirements may not encourage the same level of data standardization, this
shift could further increase downstream processing burden. The result may be reduced data quality,
decreased timeliness, and diminished effectiveness of care delivery and policy decision-making.

NOVI, MICHIGAN ARLINGTON, VIRGINIA SILVER SPRING, MARYLAND
26200 Town Center Drive 2500 Wilson Boulevard One Inventa Place
Suite 350 Suite 400 West Tower, Suite 800
Novi, MI 48375 Arlington, VA 22201 Silver Spring, MD 20910
734.302.4600 202.828.5100 301.650.8660
Overall Recommendations:
 Where ASTP seeks to encourage FHIR adoption, Altarum recommends retaining existing
certification criteria while adding FHIR standards as an optional pathway, mirroring
approaches used in previous HTI rulemaking. This gives organizations the choice to meet
established standards or advance toward FHIR, with anticipatory language available where FHIR
standards are not yet fully established.
 Altarum recommends avoiding functional requirements, which can be loosely interpreted and
increase complexity in downstream systems, including public health agencies. Functionally
generating an eCR or cancer report via a CDA®, FHIR®, PDF, or CSV may satisfy a technology
requirement, but it forces downstream receivers to support multiple standards in parallel,
significantly increasing integration effort. Further, existing standards typically include the field-
level data expectations such as LOINC, SNOMED, and other standardized code sets that functional
requirements may not. For these reasons, Altarum is concerned that functional requirements risk
degrading incoming data quality, delaying public health response and undermining effective local
and national decision-making.

III. Health Information Technology Standards, Implementation
Specifications, and Certification Criteria and Certification Programs for
Health Information Technology (Part 170)
III.A.4 Privacy and Security Certification Criteria
HTI-5 proposes removal of certain privacy and security-focused certification criteria. As automated and
API-based data exchange expands, public health agencies depend on strong baseline safeguards to ensure
data integrity, traceability, and secure transmission. Altarum encourages ASTP/ONC to clearly articulate
how core security expectations will be maintained through alternative mechanisms as certification
requirements are streamlined.

III.A.6.a. Transmission to Cancer Registries
Timely, standardized reporting of cancer cases to public health agencies is essential to effective
surveillance and long-term population health in the United States. Altarum supports the move to an
FHIR-based reporting standard, such as the Central Cancer Reporting FHIR Implementation Guide (IG);
however, this standard is still under active development and has not yet been tested, adopted, or widely
implemented by the cancer registry community or health IT developers.
Many cancer registries rely heavily on cancer case reporting utilizing the Health Level 7 (HL7®) IG for
CDA Release 2. We are concerned that removing the § 170.315(f)(4) Transmission to cancer registries
criterion without setting expectations and providing support for the adoption of a FHIR implementation
guide may not drive the adoption of FHIR-based reporting in this space as expected. We encourage ASTP
to retain the § 170.315(f)(4) Transmission to cancer registries health IT certification criterion and its
reference to the CDA Implementation Guide until FHIR-based cancer case reporting has matured further.
Clarification regarding the Helios FHIR Accelerator: A primary use case being explored for the
Public Health Query & Response priority area is the retrieval of supplemental clinical information about
cancer cases from a health IT module’s FHIR server by public health agencies. Helios is otherwise not
directly involved in the effort to move the initial reporting of cancer cases via a FHIR-based approach.

altarum.org | linkedin.com/company/altarum 2
Altarum supports the continued inclusion of cancer registry reporting capabilities in certification criteria
to ensure accurate, standardized electronic submission of reportable cancer data. Robust electronic
reporting to cancer registries is fundamental to public health surveillance and state cancer control
planning. Any proposed removal or weakening of certification criteria for cancer registry transmission
should be justified by evidence demonstrating that alternative mechanisms ensure equivalent data quality
and completeness. Altarum also encourages alignment with existing state registry requirements and
NAACCR standards to prevent variability that could hinder registry completeness.
Recommendations:
 Retain certification criteria for electronic transmission to cancer registries.
 Explicitly reference alignment with NAACCR and SEER reporting standards.
Ensure performance metrics for timeliness and completeness are maintained or improved relative to
current requirements.

III.A.6.b. Electronic Case Reporting
In recent years, health IT developers, health care organizations, and public health agencies have made
significant progress adopting the HL7 CDA R2 Implementation Guide: Public Health Case Reporting,
including the Electronic Initial Case Report (eICR) Release 2, STU Release 3.1.1 – US Realm standard,
supported by tools such as the eCR Now FHIR app. This version of the standard provides many important
improvements to better support public health case tracking needs.
Despite significant efforts to develop an FHIR-based electronic case reporting (eCR) implementation
guide, it has yet to be widely adopted among public health agencies. Altarum welcomes ASTP’s
commitment to FHIR-based electronic initial case reporting as well as investigative follow-up. However,
as adoption of FHIR standards for eCR continues to mature, Altarum encourages ASTP to retain
references to both the CDA and FHIR implementation guides. This approach provides a baseline for
currently supported standards as well as a path forward for FHIR-based implementations.
Altarum aligns with public health agencies who are concerned about the proposed changes in §
170.315(f)(5). Electronic case reporting automates required disease reporting for healthcare providers,
including emerging pathogen reporting. Updating previous certification criteria to functional and/or base
EHR standards would introduce increased variability in eCR and FHIR implementations, inconsistent
USCDI data availability, and fragmented eCR workflows across EHR vendors. These issues will
significantly increase technical and operational burden on public health agencies while degrading data
quality, timeliness, and completeness for healthcare submitters. Without consistent, standardized data in
the electronic initial case report messages, healthcare providers will not be approved to stop manual
reporting processes.

Recommendations:
 We recommend preserving HTI-1 standards-based requirements as defined in §
170.315(f)(5)(ii) and emphasizing FHIR standards as the only required standard by 2029. The
language currently written in the HTI-5 does not require EHRs to use FHIR but rather transitions
them towards a functional requirement versus pointing to a specific standard. We are concerned
that these functional requirements could result in increased integration burdens on downstream
systems such as public health agencies.

altarum.org | linkedin.com/company/altarum 3
  Reconsider the proposed 2027 implementation timeframe. It is not feasible for many
organizations, especially those with funding or staffing challenges. This proposal assumes FHIR-
based exchange is imminent and widespread and that EHRs are prepared to grant access through
established FHIR APIs, which is not yet the case in many jurisdictions. Transitioning to FHIR for
eCR would be a significant lift for EHR vendors and public health agencies, many of whom already
struggle with IT funding, staffing, and training. A one-year timeline for an unfamiliar technology is
especially challenging in this environment, and risks organizations shifting to focus away from
eCRs to other technical challenges. We support the move to FHIR, but organizations need adequate
time for full FHIR implementation. Continued support for either HL7 FHIR eCR IG or HL7 CDA
eCR IG should remain through 2029.
 Retain health IT certification requirements for eCR. Altarum and many of its public health
partners support existing HL7 interoperability standards (e.g., HL7 CDA, FHIR) and are concerned
that removing EHR certification requirements will jeopardize consistent ECR implementation
across EHRs.

III.A.6.c. Antimicrobial Use and Resistance Reporting
AUR reporting is critical to antimicrobial stewardship and resistance monitoring. Standardized electronic
AUR data submission enables effective statewide and national surveillance and supports targeted
intervention strategies. We note that CDA-based reporting standards have been adopted in a number of
settings (e.g., NHSN's recommendations at www.cdc.gov/nhsn/cdaportal/toolkits/guidetocdaversions.html)
and encourage ASTP to help define a clearer path toward FHIR-based reporting of antimicrobial use and
resistance to NHSN.
Recommendations:
 Retain or clarify certification criteria that require support for electronic AUR reporting (e.g.,
through standardized FHIR profiles).
 Ensure that deregulatory revisions do not inadvertently remove essential data elements
required for antimicrobial use/resistance surveillance.
 Encourage coordination with CDC’s AUR module and state registry requirements.

III.A.6.d. Health Care Surveys
Electronic reporting for health care surveys contributes to public health situational awareness and
planning. We note that CDA-based reporting standards have been adopted in a number of settings (e.g.,
via the HL7 CDA R2 Implementation Guide: National Health Care Surveys (NHCS), Release 1, DSTU
Release 1.2 – US Realm and HL7 CDA R2 Implementation Guide: National Health Care Surveys
(NHCS), R1 STU Release 3.1 – US Realm), and we encourage ASTP to help define a clearer path toward
FHIR-based submissions of Health Care Surveys to CDC (e.g., via the HL7 FHIR Implementation Guide:
Health Care Surveys Content – US Realm).
Recommendations:
 Maintain certification to support survey reporting use cases relevant to public health
surveillance.
 Ensure interoperability criteria facilitate structured data collection and reduce reliance on
manual processes.

altarum.org | linkedin.com/company/altarum 4
III.A.2.e. Decision Support Interventions (AI Transparency)
Altarum welcomes the proposed emphasis on fostering innovation through AI integration and FHIR-
forward APIs. However, transparency around AI algorithm behavior and decision logic (e.g., model cards
and performance metrics) remains essential when AI influences clinical decisions or public health
outcomes. Investment in AI transparency enables validation, mitigates bias, and supports public health
trust.
Recommendations:
 Require transparent metadata for AI components used for data exchange, interpretation, and
public health reporting.
 Include documentation obligations for algorithm behavior relevant to regulated public health
use cases.
 Ensure that deregulation does not eliminate meaningful oversight of AI tools that generate or
facilitate public health information.

III.A.7.h. Application Access – All Data Request
Altarum supports robust core data standardization and encourages stability by utilizing the newest, vetted,
and published USCDI standard to ensure consistent data exchange. Deregulatory actions should not
remove forward progress on already vetted and published standards necessary for public health reporting
and analysis.
Recommendations:
 We recommend the continued requirement of the Application Access – All Data Request
certification criteria and update the certification criteria to USCDI v5. While we agree with
ASTP’s assessment that existing software vendors are unlikely to move away from USCDI
adoption and compliance. We are concerned that removal of the Application Access – All Data
Request will potentially degrade interoperability as new innovators and competitors enter the
market and are no longer expected to maintain USCDI conformance for software certification.

IV. Information Blocking
Altarum supports ASTP/ONC’s efforts to clarify and refine the Information Blocking regulations to
reduce inappropriate reliance on exceptions and to strengthen automated, API-based access to health
information.
As automated and AI-enabled access becomes more common, public health surveillance systems
increasingly depend on predictable, standards-based data retrieval from certified health IT. We
encourage ASTP/ONC to ensure that refinements to the Infeasibility and Manner Exceptions preserve
clear, consistent expectations for public health authorities regarding technical conformance, reasonable
cost structures, and transition timelines during the ongoing shift from document-based to API-based
exchange.

altarum.org | linkedin.com/company/altarum 5
Conclusion
Altarum supports efforts to increase adoption of interoperable methods for exchanging healthcare and
public health data. However, these efforts should not increase cost or complexity for downstream systems
through the relaxation of existing standards. Rather, Altarum recommends augmenting existing HTI rules
with language that would support meeting either current standards or future FHIR-based standards.
This approach will lower barriers to entry for new participants while allowing organizations to adopt
FHIR at an appropriate pace. In contrast, removing or weakening standards-based requirements would
increase the cost, time, and effort required for downstream systems such as public health agencies to
process incoming data, undermining efficiency gains and public health outcomes.

Sincerely,

Jonas Shoor
Vice President, Public Health Technology
Altarum Institute

altarum.org | linkedin.com/company/altarum 6
