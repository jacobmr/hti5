# HHS-ONC-2025-0005-0184 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0184/attachment_1.pdf

---

February 27, 2026

Assistant Secretary for Technology Policy/Office of the National Coordinator for Health
Information Technology
Department of Health and Human Services
330 C Street SW
Washington, DC 20201

Regarding Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory
Actions to Unleash Prosperity (HTI-5 Draft Rule)

To the Assistant Secretary for Technology Policy:

The Joint Public Health Informatics Taskforce (JPHIT) appreciates the opportunity to
comment on the HTI-5 Draft Rule released by the Assistant Secretary for Technology Policy
(ASTP) in late December 2025. JPHIT represents a coalition of public health associations
committed to advancing health information technology to support public health
infrastructure and surveillance capabilities.

This response outlines our position on key aspects of the proposed rule and offers
recommendations to ensure continued progress in public health interoperability while
maintaining the efficiencies and cost-savings that standards-based approaches provide.
While we appreciate ASTP’s efforts to reduce regulatory burden, preserving the use of
clearly deﬁned standards to ensure interoperability between health care and public health
systems is essential to safeguarding data integrity, consistency, and quality. Public health
and the healthcare industry have made substantial investments in the current
infrastructure, and being required to retool systems to accommodate less standardized
data would impose signiﬁcant new resource demands. Data discrepancies would also
necessitate additional manual follow-up, increasing both the ﬁnancial and administrative
burden on providers and data recipients.

The Community Needs Time and Investment to Prepare
for FHIR
JPHIT supports ASTP's vision of moving toward Fast Healthcare Interoperability Resources
(FHIR) as a modern standard for health information exchange. However, we emphasize that
State, Tribal, local, and territorial (STLT) public health authorities (PHAs) and developers
require adequate time and sustained investment to successfully transition to FHIR-based

                                                                                           1

systems and it is premature to remove Clinical Document Architecture (CDA) and HL7 v2
as the referenced standards for data exchange.

Many Implementation Guides Are Still in Development
The FHIR community is still developing guides for public health reporting through initiatives
such as the Helios project. In many cases, FHIR standards are not fully vetted and tested
and cannot be implemented by the public or private sector. For example, the Cancer FHIR
Implementation Guide (IG) is still early in development and will not be ready for HL7
balloting for some time. Therefore, it is premature to remove the CDA standard for cancer
reporting because there is not a FHIR IG to replace it. ASTP should carefully assess the
maturity of FHIR standards when considering these changes and work with PHAs in
advancing FHIR so we can evolve from legacy reporting methods and transition without
disrupting existing data ﬂows that are critical to public health reporting.

Retain Legacy Standards During Transition
STLT PHAs need time and sufficient resources to transition to FHIR. During this period, it is
critical to retain CDA and HL7 v2.5.1 standards. These legacy standards are well-
established, widely implemented, and continue to serve public health surveillance needs
effectively. Removing these standards prematurely would disrupt existing data ﬂows and
create gaps in public health reporting capabilities.

Investment Is Essential for FHIR Adoption
The emphasis on FHIR, at this time, is aspirational and represents an important step
forward. However, to realize this vision, we need new, sustained investment in public
health infrastructure. Many PHAs still lack the capability to implement FHIR-based
systems and will not achieve this capability without dedicated resources. Investment in
public health modernization is essential to support the development of FHIR servers,
establish FHIR capabilities, and train staff in new technologies.

With few exceptions, PHAs cannot currently receive FHIR-based data exchanges and
reporting facilities are not ready to make the transition for public health reporting. As one
PHA testiﬁed: “Our information exchange is not supporting FHIR, and it has not expressed
any readiness. I don't have a single one of my reporting facilities in the state… who's
expressed any willingness or desire to do anything with FHIR. I don't have any funding to
support FHIR within our jurisdiction. And I don't have any manpower with any expertise to
support FHIR.” Another added: “We and our reporting partners are not ready to transition
from CDA to FHIR. We know how the data could ﬂow in our system but still need extensive
funding and development before being able to receive and process our ﬁrst FHIR message.

                                                                                                2

PHA capability is unlikely to change in the next several years. Critical pandemic era funding
was used to initiate the closing of longstanding gaps due to decades of underfunding;
however, gaps still remain and pandemic era data modernization funding is expiring,
leaving large unmet needs to bring PHAs to current. Introducing new data collection and
workﬂows on top of reductions in budget and workforce will further exacerbate
longstanding challenges without off-setting beneﬁts. Additionally, existing federal funding
mechanisms for public health surveillance have not prioritized FHIR capabilities, limiting
PHAs’ ability to invest in new infrastructure, like FHIR servers. CDC and ASTP must
coordinate with PHAs to plan, fund, and implement FHIR-capable infrastructure before
deregulating existing standards, like CDA.

FHIR Is Not a Universal Solution
FHIR is neither a panacea for all health information exchange challenges, nor necessary to
support all existing data ﬂows. If certain data exchange protocols are working effectively,
they should not be forcefully replaced simply because newer technologies are available.
For example, For example, two thirds of state PHAs receive 90% or more of their laboratory
results via ELR electronic laboratory reporting (ELR), mostly using HL7 v2.5.1; this standard
is largely meeting public health data needs (Pew Charitable Trusts, 2024). At this level of
adoption, transitioning to another process would itself become a burden and should not be
prioritized over addressing systems that genuinely need improvement.

JPHIT also recommends ASTP hold listening sessions with public health to identify
potential FHIR pilots. A careful piloting program would enable the industry to test the use of
FHIR, or the feasibility of FHIR, for speciﬁc public health use cases to assess their beneﬁts
over existing CDA or v2.5.1 standards. For example, JPHIT sees potential for FHIR to
augment existing reporting pathways in the immunization space through the use of
decision support and query and response.

JPHIT Supports the Retention of Standards-Based
Requirements
JPHIT advises that ASTP retain standards-based public health reporting criteria for health IT
certiﬁcation rather than transitioning to functional requirements.

Moving from standards-based to functional requirements creates variability and adds
burden for both PHAs and the private sector. The beneﬁts of standards signiﬁcantly
outweigh any burden on health IT developers and result in greater efficiencies, improved
data quality, and cost-savings overall.

                                                                                            3

For Health IT Developers: For many years, HIT developers have been building standard
implementation guides (IGs), which detail the context, vocabularies, and constraints on
reported data. These IGs limit the need to independently interpret STLT reporting
speciﬁcations and develop reporting functionality that satisﬁes each jurisdiction's
requirements. Many of these standards are well-established with most Certiﬁed Electronic
Health Record Technology (CEHRT) vendors today, so there is minimal burden in retaining
them. Removing these standards would reverse years of progress and squander the
substantial investments healthcare organizations (HCOs), health IT developers, and PHAs
have made to build functional, interoperable systems. A shift to functional-only
requirements would create fragmentation across the health IT ecosystem and compromise
data quality, with each vendor implementing different data formats and structures,
ultimately placing an untenable burden on and expense for PHAs to support this variability
and limiting their ability to effectively respond to threats.

Further, existing data quality validation tools are based on messages received in a standard
format using published IGs. If public health is not able to use these tools during
onboarding, they will have limited resources to evaluate data quality, which will result in
onboarding delays and ultimately, have a negative impact on our ability to respond to
public health threats.

JPHIT welcomes the opportunity to provide speciﬁc examples of how standards support
data quality and also how maintaining a variety of reporting mechanisms can compromise
it.

For Providers and Healthcare Organizations: With increased variability, providers and
HCOs may struggle to evaluate and select an HIT solution that meets public health
reporting criteria. If their chosen system cannot natively meet the jurisdiction’s
requirements, each HCO will still need to conﬁgure the system for the jurisdiction's
requirements, plus conduct additional testing and evaluation by PHAs of each data feed.
This fragmentation undermines the efficiencies gained through standardization and merely
shifts the burden from the health IT developer to the HCO. If PHAs receive incomplete, non-
standardized, or difficult to interpret reports from health care, they will need to manually
follow up with providers to obtain missing information or to clarify unclear information,
slowing public health action and increasing the reporting burden and manual steps for the
HCO.

For Public Health Agencies: PHAs can develop and maintain systems to ingest
standardized, predictable data, increasing certiﬁed HIT portability across STLT
jurisdictional boundaries. ASTP certiﬁcation criteria serve as a critical reference point that
allows for consensus-based IGs that STLTs use to align requirements. These criteria reduce

                                                                                             4

the need for resource-intensive technical speciﬁcations and prevent a return to
fragmented, jurisdiction-speciﬁc reporting rules that public health and health IT have been
working for years to harmonize. Standard IGs improve data quality so that public health can
spend less time correcting data inconsistencies and can make decisions regarding
community health based on better data.

Recommended Standards Retention
JPHIT recommends retaining the standards as proposed in the original HTI-2 Draft Rule
since these standards reﬂect the reality of how these data are currently shared with public
health. In the case of electronic case reporting (eCR), newer standards than those
referenced in the HTI-2 proposed rule now exist; JPHIT recommends ASTP adopt those
newer standards in updated certiﬁcation criteria as described in the table below.

Criteria Recommended Standard

§ 170.315(f)(1) HL7 v2.5.1 Implementation Guide for Immunization
Immunization Messaging, Release 1.5 2018
registries—Bi-
Update vocabulary standards (CVX and NDC)
directional exchange

§ 170.315(f)(2) Update to 2019 version of HL7 v2.5.1 Implementation Guide:
Syndromic Syndromic Surveillance, Release 1
surveillance—
Transmission to public
health agencies

§ 170.315(f)(3) Update to these ELR standards: HL7 Version 2.5.1
Reportable Laboratory Implementation Guide: Laboratory Orders from EHR (LOI)
Results and Laboratory Edition 5 - US Realm; HL7 Version 2.5.1 Implementation
Orders Guide: Laboratory Results Interface (LRI), Edition 5 - US
Realm, speciﬁcally the Public Health Proﬁle within the IG

§ 170.315(f)(5) Update to these eCR standards: eICR R3.1.1 (HL7 CDA® R2
Electronic case Implementation Guide: Public Health Case Report - the
reporting Electronic Initial Case Report (eICR) Release 2, STU Release
3.1.1 - US Realm); and FHIR eCR R2.1.2 (HL7 FHIR®

                                                                                           5

Implementation Guide: Electronic Case Reporting (eCR),
Release 2.1.2 - US Realm)

§ 170.315(f)(6) Update from 2013 IG to 2020 IG (includes AUR, ARO, and
Antimicrobial use and AUP)
resistance reporting

§ 170.315(f)(7) Health Update HL7 CDA R2 Implementation Guide: National Health
care surveys Care Surveys (NHCS), R1 STU Release 3.1

§ 170.315(f)(8) Birth Transmission according to the Birth and Fetal Death
reporting Reporting IG

USCDI V6 and Public Health Data Elements
The United States Core Data for Interoperability (USCDI) Version 6 includes numerous data
elements not available in previous versions that support public health functions. These
elements reﬂect the maturation of standards to better serve public health needs and
include:

• Social determinants of health (SDOH) data elements including housing stability,
food insecurity, transportation access, and social connection (note that in the draft
Version 7 of USCDI that ASTP recently released, the SDOH data elements would be
incorporated into broader data elements, such as Patient Goal, Problem, and
Procedure).
• Expanded immunization data including vaccine lot numbers and administration
details
• Laboratory observation data supporting syndromic surveillance
• Additional lab data elements related to specimen (Specimen Condition
Acceptability, Specimen Identiﬁer, Specimen Source Site) and related to results
(Result Units of Measure, Result Reference Range and Result Interpretation)
• Vital signs and clinical observations relevant to chronic disease monitoring
• Encounter and diagnosis information critical for case reporting
• Medication administration data supporting antimicrobial stewardship

These USCDI V6 data elements demonstrate the alignment between clinical data exchange
standards and public health surveillance needs. As FHIR implementation advances, these
standardized data elements will facilitate more comprehensive and timely public health

                                                                                               6

reporting. However, their successful implementation depends on maintaining certiﬁcation
requirements that incentivize adoption of these standards.

JPHIT therefore encourages ASTP to adopt USCDI V6 rather than retaining USCDI V3, or a
new V3.1.

JPHIT Supports the Retention of Standards-Based
Requirements for Cancer Registry Reporting, eCR,
Antimicrobial Use and Resistance Reporting, and
Healthcare Surveys
JPHIT urges ASTP to retain standards-based certiﬁcation requirements for cancer registry
reporting, eCR, antimicrobial use and resistance reporting, and healthcare surveys. These
specialized reporting areas have made signiﬁcant progress through standardization, and
removing certiﬁcation requirements would jeopardize this progress.

The Cost of Manual Reporting
Removing certiﬁcation requirements for these reporting areas could force a return to
manual reporting methods, creating substantial unfunded costs for both healthcare
providers and PHAs. Consider this illustrative example: if a healthcare system reporting
approximately 100,000 cancer event records electronically were forced to return to fax-
based reporting, the costs would be signiﬁcant.

At an estimated cost of $2.50 per fax, faxing these records would cost approximately
$250,000. Manual data entry, estimated at $3.75 per form (15 minutes per form at
$15/hour), would cost approximately $375,000. Assuming a conservative 2% error rate with
correction costs of $50 per error, error correction would add approximately $100,000. This
example illustrates a total cost exceeding $700,000 to have providers fax records and PHAs
manually enter and correct errors—approximately $7.25 per health record. 1

When extrapolated across all providers and extended to state, local, tribal, and territorial
health departments, the costs accumulate rapidly. This example represents only one data
source among many impacted by the proposed rule. Many jurisdictions collect hundreds of
millions of records electronically using standards-based exchange. We ask ASTP to
carefully consider these potential costs and their impact on the healthcare system and

1
This example is based on estimates provided by the Washington State Department of Health in 2026.

                                                                                                        7

public health infrastructure. Any cost-savings for health IT developers with deregulation are
offset by these downstream impacts.

JPHIT Supports the Retention of Artiﬁcial Intelligence (AI)
Guidelines
JPHIT urges ASTP to retain AI guidelines in health IT certiﬁcation and not remove the AI
transparency rules ﬁnalized as part of HTI-1. As AI technologies continue to evolve and are
increasingly integrated into clinical workﬂows and health information systems, it is
essential to maintain appropriate oversight and transparency requirements. These
guidelines help ensure that AI-enabled health IT products meet safety and effectiveness
standards while providing clinicians and patients with necessary information about how AI
is being used in their care.

As AI technologies are quickly evolving, understanding when and how AI can access public
health data is an area that JPHIT believes would beneﬁt from guidance on the national
level. Currently, there are many open questions. For example, given information blocking
rules, would immunization information systems (IIS) be expected to scale limitlessly to
respond to queries, even from autonomous AI requests? We encourage ASTP to continue
developing transparent guidelines and expectations as this industry sector matures.

JPHIT Supports Real-World Testing
JPHIT strongly supports the continuation of real-world testing requirements for CEHRT
vendors. Real-world testing is important and saves time for all parties involved in health
information exchange. There are fewer problems that need to be addressed during provider
onboarding when vendors have conducted thorough real-world testing, and less time and
resources are needed for validation. In-house testing alone does not solve real-world
problems, and it is difficult to assess what products can actually accomplish based solely
on vendor attestations.

PHAs and their partners beneﬁt signiﬁcantly from knowing what is happening in real-world
implementations. PHAs often discover data structure and data quality issues during the
onboarding of providers using CEHRT. These issues frequently occur because a CEHRT
vendor has attested to meeting criteria for public health exchange but has not conducted
real-world testing to ensure it works properly in practice. These issues lead to delays in
onboarding that could be avoided through adequate real-world testing.

                                                                                             8

What is more, JPHIT supports the expanded use of real-world testing data. We encourage
ASTP to maintain the Insight reporting program, which aligns with recommendations
previously recommended by the HTI-2 Proposed Rule Taskforce 2024. This real-world
testing program promises the ability to provide transparency regarding real-world data from
EHR products, demonstrating how much information they successfully share with IIS at the
product level and offering valuable insights into what is actually happening in operational
environments. The Insight model of transparency could be extended to other public health
systems to improve overall data quality and system performance. JPHIT recommends that
ASTP certify use and implementation in real world environments with thresholds for
completeness and data quality.

JPHIT Supports Maintaining Current Language for
Contracting with Government Entities
ASTP proposes to revise § 171.301(a) to add explicit contractual limitations requiring that
any agreement governing access, exchange, or use of electronic health information must
be at "market rate," must not be a "contract of adhesion," and must not contain
"unconscionable terms." JPHIT is concerned that this language may be interpreted as
banning standardized contract language and require all contracts between data exchange
partners to be individually negotiated. This approach creates unnecessary administrative
burden and disadvantages non-proﬁt entities, smaller HCOs, and PHAs.

Public health reporting fundamentally differs from commercial healthcare markets. Health
information exchanges (HIEs) and the AIMS Platform provide consistent, equitable services
to all data exchange partners at standard rates. This arrangement is key to the success of
AIMS as a public health intermediary. Additionally, we see TEFCA as an important
foundation for achieving national interoperability, and the contractual limitations may
disincentivize or at least confuse participation in the network.

Applying market-based contracting principles to public health reporting risks increasing
costs to taxpayers and misunderstands its nature and purpose, which is to safeguard the
health of the American public, not to turn a proﬁt. Vendor contracts with government
entities typically follow state procurement policies, and vendors are provided with the
standard contract language they must agree to prior to submitting a bid. JPHIT
recommends that the rule should explicitly allow for this arrangement.

More speciﬁcally, JPHIT recommends that agreements supporting public health reporting
be exempt from these contractual limitations when their terms are developed or approved
through a governance process that provides meaningful input from participants. Such

                                                                                              9

structured governance represents collective bargaining that protects all parties' interests.
Therefore, data use agreements signed with PHAs, HIEs, or the AIMS Platform should be
permitted under the Manner Exception.

We note that Qualiﬁed Health Information Networks (QHINs), HIEs, and other entities have
raised similar concerns in their comments and encourage ASTP to review these
submissions for additional perspective.

Conclusion
JPHIT strongly supports continued certiﬁcation requirements for public health reporting.
Standards-based certiﬁcation requirements have driven signiﬁcant progress in public
health informatics, and this progress must be preserved and expanded with increasing
needs for interoperability thereby reducing burden on health care systems. Timely,
accurate, and complete reporting of public health data ensures that all jurisdictions can
protect their community’s health both on a routine basis and during emergencies and
disasters.

Federal support for jurisdictional public health reporting must remain strong, including the
provision of sustained investment to ensure public health systems can become and remain
interoperable. As we move toward FHIR-based systems, it is essential to maintain current
standards during the transition period so as to not disrupt existing data ﬂows, and to
provide adequate resources for PHAs to modernize their infrastructure. Public health must
remain poised for emergency response throughout this transition. FHIR standards should
be leveraged when and where it will have the most return on investment and improve data
quality. JPHIT invites ASTP to hold listening sessions with public health to identify speciﬁc
use cases that might beneﬁt from FHIR pilots.

The proposed shift from standards-based to functional requirements risks creating
fragmentation in health information exchange, increasing costs for all stakeholders, and
reversing years of progress toward harmonized, interoperable systems. We urge ASTP to
retain standards-based certiﬁcation requirements and to work collaboratively with public
health to ensure that regulatory changes support rather than undermine public health
infrastructure.

We note that the Unfunded Mandates Reform Act of 1995 requires federal agencies to
assess the impacts of regulations on state, local, and tribal governments. ASTP should
consider that the potential variability in data formats under HTI-5 may impose signiﬁcant
unfunded mandates for both the public and private sectors that conﬂict with this Act, as
detailed throughout this response.

                                                                                            10

JPHIT looks forward to partnering with ASTP and the other agencies within HHS to further
the important work of improving the nation’s health IT ecosystem. JPHIT intends to engage
with ASTP in the months ahead to cogently articulate the policy and rules that will continue
to modernize the public health system, with beneﬁts to local, state, and federal public
health organizations, healthcare providers, health IT, and the nation’s health. Thank you for
the opportunity to provide comments on the HTI-5 Draft Rule. Should you have any
questions about JPHIT's feedback, please do not hesitate to contact us; inquiries can be
directed to jphit@astho.org.

JPHIT Members include:

American Immunization Registry Association (AIRA)

American Medical Informatics Association (AMIA)

Association of Public Health Laboratories (APHL)

Association of State & Territorial Health Officials (ASTHO)

Big Cities Health Coalition (BCHC)

Council of State and Territorial Epidemiologists (CSTE)

Healthcare Informatics and Management Systems Society (HIMSS)

National Association of County and City Health Officials (NACCHO)

Network for Public Health Law (NPHL)

Public Health Informatics Institute (PHII)

                                                                                           11
