# HHS-ONC-2025-0005-0252 - attachment text

TENNESSEE DEPARTMENT OF HEALTH (TDH) 
Office of Informatics and Analytics (OIA) 
 
February 27, 2026 
 
Assistant Secretary for Technology Policy (ASTP)/Office of the National Coordinator for Health 
Information Technology IT (ONC) 
Department of Health and Human Services  
330 C Street SW  
Washington, DC 20201 
 
RE: Health Data, Technology and Interoperability: ASTP/ONC Deregulatory Actions to 
Unleash Prosperity (HTI-5 Proposed Rule) 
 
To ASTP: 
The Tennessee Department of Health – Office of Informatics and Analytics (TDH-OIA) is 
appreciative of the opportunity to provide comments on the HTI-5 draft rule released by the Assistant 
Secretary for Technology Policy (ASTP) in December of 2025. The Tennessee Department of Health is 
the state public health agency responsible for public health in Tennessee. The mission of TDH is to 
protect, promote and improve the health and well-being of all people in Tennessee. The department 
oversees eighty-nine rural county health departments and works closely with six metropolitan health 
departments under local governance to carry out the delivery of public health services and public health 
programs to people in Tennessee. Each county in Tennessee is served by a county health department 
providing direct and indirect services to Tennessee residents and visitors. TDH also operates 56 primary 
care clinics across the state including 16 Federally Qualified Health Clinics (FQHCs). TDH-OIA staff 
actively engage in a wide range of healthcare and health IT organizations, associations, workgroups, and 
task forces to ensure that the priorities of public health programs in Tennessee are represented. These 
programs include, but are not limited to, surveillance, outbreak investigation and response, laboratory 
testing, and the prevention of both communicable and non-communicable diseases and conditions. 
 
TDH-OIA acknowledges and supports the strategic direction toward FHIR-based interoperability; 
however, widespread adoption has not yet been achieved across public health and healthcare systems. It is 
essential to establish mechanisms that facilitate adoption without compromising existing modalities and 
to provide a structured transitional pathway that minimizes disruption to current operations while 
promoting FHIR implementation. We concur with the Council for State and Territorial Epidemiologists 
(CSTE) that jurisdictional public health has made considerable efforts to reconcile variability in exchange 
and reporting requirements and advance standardization in areas such as electronic case reporting (eCR), 
immunization data exchange, and electronic laboratory reporting (eLR). Additionally, we support AIRA’s 
stance on maintaining existing messaging standards and infrastructure while advancing toward FHIR-
based interoperability, given current adoption challenges. Having been able to leverage EHR certification 
requirements to guide standardization of public health data exchange and reporting requirements, we are 
concerned that removal of those certification requirements may initiate a regression from the progress 
made and demonstrated. It could be perceived that there is less incentive within jurisdictional public 
health to maintain standardized data exchange and reporting requirements if the quality of the reporting 
suffers or becomes highly variable. While public-private partnerships are critical to success, the 
proliferation of proprietary requirements introduces confusion among stakeholders.  
 
Additionally, TDH-OIA would like to offer these responses for your consideration: 
 
 

Proposal:  
“We propose to remove the “transmission to cancer registries” certification criterion in 
§ 170.315(f)(4) with an effective date of January 1, 2027, and reserve that section. This criterion 
assesses whether a Health IT Module can properly create and format cancer case information for 
electronic transmission according to a CDA-based implementation specification for reporting to public 
health agencies... 
We believe that removing the certification criterion in § 170.315(f)(4) would reduce burden and 
encourage the ongoing evolution in cancer registry reporting by offering health IT developers space to 
move toward FHIR standards and modern reporting solutions, further encouraging innovation. We 
propose a January 1, 2027, effective date for the removal of the transmission to cancer registries 
certification criterion in § 170.315(f)(4).” 
TDH-OIA Response:  
TDH-OIA acknowledges the publication and ongoing updates of numerous implementation guides 
(IGs); however, widespread adoption remains limited. A consistent theme across stakeholders is the 
need to maintain standards historically included in certification requirements until a suitable, tested, 
and broadly adopted replacement is available—such a replacement does not currently exist. While 
standards are in place, adoption is insufficient to justify removing existing criteria. Additionally, cancer 
case reporting should be distinguished from cancer laboratory or pathology reporting, as these 
processes utilize different standards: case reporting currently relies on CDA, whereas pathology 
reporting currently uses NAACCR v2 and aims to adopt the HL7 Laboratory Results Interface 
implementation guide.  There is uncertainty regarding whether CDA case reporting standards will 
continue to be supported while corresponding FHIR implementation begins; clear federal guidance and 
support for this transition is essential to avoid disruption and ensure continuity of existing provider 
reporting. Removing existing requirements prematurely would risk disrupting established workflows 
and further fragmenting interoperability efforts. We strongly recommend that current certification 
criteria remain in place until adoption thresholds for new standards have been determined and met and 
ASTP in partnership with the CDC provides clear guidance to harmonize cancer reporting standards 
across modalities. 
 
We strongly support NAACCR’s recommendation to retain certification criteria requiring use of the 
Certification Companion Guide v1.4, “Transmission to Cancer Registries,” until new Implementation 
Guides have been thoroughly tested and widely implemented. A substantial number of state central 
cancer registries currently rely on this established reporting mechanism to ensure timely and complete 
data submission. Eliminating this requirement prematurely would remove the incentive for continued 
use, resulting in significant operational burdens for physicians’ offices and registries, including 
increased manual data entry. Such disruption could negatively impact the completeness and quality of 
cancer reporting, undermining public health surveillance and research efforts. We urge ASTP to 
maintain existing certification criteria until adoption thresholds for new standards are met and to 
provide clear guidance and resources to support a phased, orderly transition. 
 
Proposal:  
“We propose to revise the “transmission to public health agencies—electronic case reporting ” (eCR) 
certification criterion in § 170.315(f)(5). This criterion enables a user to create case reports that can 
be transmitted electronically to public health agencies…  
We propose to revise the eCR certification criterion to be a functional requirement in order to reduce 
burden and allow for industry innovation. In particular, we propose to rescind the expiration date for 
the functional requirements defined in § 170.315(f)(5) as of the effective date of a subsequent final rule. 
We propose to revise the introductory text of the criterion to enable a user to create a case report for 
electronic transmission meeting the functional requirements described in paragraph (f)(5)(i) of this 
section. Additionally, we propose to remove the standards-based requirements defined in 
§ 170.315(f)(5)(ii) as of the effective date of a subsequent final rule and reserve that section.” 

TDH-OIA Response:  
While significant progress has been made in recent years in the adoption of electronic case reporting, 
much of that adoption and corresponding infrastructure has leveraged the CDA - based implementation 
guides for both electronic initial case reporting and the corresponding reportability responses. Broad 
adoption of the corresponding FHIR based electronic case reporting standard remains limited. To 
promote adoption of a FHIR forward policy while minimizing disruption to critical existing public 
health reporting, surveillance, and investigation activities, we offer the following justification for the 
retention of the standards-based certification including the related CDA based standards: 
 
Certification Leverage Should Not Be Weakened Mid-Maturation 
• Electronic case reporting remains a developing national infrastructure. While adoption has 
expanded, implementation maturity varies significantly across vendors and jurisdictions.  
• Certification requirements provide the primary federal mechanism to ensure consistent vendor 
development and nationwide interoperability. Once standards-based criteria are removed from 
certification, restoring enforceable interoperability through later rulemaking becomes 
significantly more complex.  
• Given the continued evolution of eCR, including alignment with HL7 CDA eICR Release 3.1.1 
and planned migration toward HL7 FHIR-based eCR, weakening certification leverage at this 
stage risks slowing national progress and increasing variability across implementations. 
• We recommend retaining standards-based criteria within §170.315(f)(5) during this maturation 
phase to preserve national consistency and vendor accountability. 
 
Preservation of National eCR Standards and Phased Transition to FHIR 
• We have significant concerns regarding the proposed removal of standards-based criteria 
within §170.315(f)(5) related to electronic case reporting (eCR). 
• The existing standards-based requirements ensure that certified health IT supports nationally 
recognized eCR specifications, including HL7 CDA eICR Release 3.1.1. These standards 
provide consistent structure, vocabulary binding, trigger integration (including RCTC), and 
transmission expectations that enable scalable reporting across jurisdictions. 
• Electronic case reporting functions at national scale because vendors build to a shared 
specification. Removing explicit standards-based requirements risks fragmentation and reduces 
enforceable interoperability. 
• We recognize the importance of modernization and the movement toward HL7 FHIR-based 
eCR workflows. However, many public health surveillance systems, intermediaries, and 
vendors are not yet fully positioned for a FHIR-only environment. 
• Removing CDA-based standards before FHIR-based workflows are operational nationwide 
risks destabilizing existing eCR infrastructure. ASTP should ensure that any transition 
preserves continuity of reporting and does not create a gap period where enforceable standards 
are weakened before replacement standards are operational at scale. 
 
Governance of Standardized Trigger(s) Must Be Explicit 
• The proposed revision would allow §170.315(f)(5) to be satisfied solely through functional 
requirements, including maintenance of a “table of trigger codes.” However, it does not specify 
use of RCTC or any equivalent nationally governed trigger framework. 
• Trigger standardization is foundational to eCR. Without an explicit, versioned, and publicly 
governed trigger specification, implementations may vary widely, resulting in under-triggering 
and continued reliance on manual reporting to meet state reporting laws. 
• At minimum, ASTP should require support for RCTC or an explicitly defined, maintained 
equivalent trigger specification. 
 

Timeliness and Reliability Require Enforceable Guardrails 
• The revised functional criteria require electronic transmission but do not establish expectations 
for timeliness, acknowledgment, retries, or failure handling. 
• Timeliness is central to eCR’s public health value. Delayed or unreliable transmission 
undermines outbreak response and real-time surveillance. 
• If standards-based requirements are removed, ASTP should include minimum functional 
guardrails for: 
• Defined transmission timeframes following trigger detection 
• Receipt acknowledgment 
• Retry and error-handling expectations 
• These baseline protections are necessary to prevent certified eCR from devolving into delayed 
or non-actionable reporting. 
 
Bidirectional Workflow Should Be Preserved 
• The current standards-based criterion includes the ability to receive and process a case report 
response (e.g., reportability response), supporting workflow closure, deduplication, and 
delivery of public health guidance to clinicians. 
• Removing §170.315(f)(5)(ii) appears to eliminate this requirement. 
• ASTP should clarify whether bidirectional response handling remains expected. If not, ASTP 
should consider retaining a minimal response-handling requirement or offering an optional 
advanced certification pathway to preserve bidirectional functionality. 
 
Provider Burden Reduction Must Be Protected 
• eCR was designed to reduce provider burden by automating the detection and routing of 
reportable conditions. 
• If trigger standardization and structured workflows are weakened, providers may still need to 
manually report conditions that do not trigger electronically, particularly given state statutory 
reporting requirements. 
• ASTP should ensure that the final rule does not unintentionally increase manual reporting 
burden due to incomplete or inconsistent triggering under certification. 
 
Certification Alignment and Vendor Incentives 
• Certification requirements play a central role in shaping vendor development priorities. For 
many health IT developers, certification alignment is a primary driver of resource allocation 
and product roadmap decisions. 
• If standards-based eCR criteria are removed from certification without clear alignment to CMS 
Promoting Interoperability objectives or other federal incentive programs, there is a substantial 
risk that eCR development and maintenance will be deprioritized relative to other certified 
capabilities. 
• Over time, this could result in: 
• Reduced vendor investment in maintaining up-to-date trigger logic 
• Delays in adopting updated implementation guides 
• Increased variability across implementations 
• Greater reliance on manual reporting to satisfy state statutory requirements 
• Certification alignment provides national leverage to ensure sustained interoperability. 
Removing that leverage during an ongoing transition from CDA-based eCR (HL7 eICR 
Release 3.1.1) to FHIR-based eCR introduces long-term stability risks. 
• ASTP should explicitly consider how changes to §170.315(f)(5) may affect vendor incentive 
structures and ensure that eCR remains a supported and prioritized certified capability. 
 

Real World Testing and Surveillance Integrity 
• Electronic case reporting supports federal public health objectives related to disease 
surveillance, outbreak response, and compliance with state reporting laws. 
• If standards-based criteria are removed without enforceable functional guardrails, Real-World 
Testing (RWT) may lack objective benchmarks for evaluating: 
• Trigger completeness 
• V ocabulary conformance 
• Timeliness of transmission 
• Reliability of acknowledgment and retries 
• Certification without measurable interoperability standards risks shifting oversight from 
objective conformance testing to subjective vendor attestation. 
• Additionally, removal of structured standards may weaken vocabulary consistency and data 
completeness across implementations, directly affecting public health analytics and cross-
jurisdictional comparability.  
• ASTP should clarify how Real-World Testing will meaningfully assess completeness, 
timeliness, and reliability under the revised functional-only framework. 
 
Proposal:  
“We propose to revise the “transmission to public health agencies—antimicrobial use and resistance 
reporting” certification criterion in § 170.315(f)(6). This criterion assesses whether Health IT Modules 
can create and properly format an antimicrobial use and resistance report for electronic transmission, 
following specified sections of a CDA-based implementation guide…  
We propose to revise the criterion requirements to be functional only and remove the reference to the 
standard in § 170.205(r)(1) as of the effective date of a subsequent final rule.” 
TDH-OIA Response:  
TDH-OIA strongly supports the HL7 Public Health Work Group’s position underscoring that AUR 
reporting is essential for effective antimicrobial stewardship and resistance monitoring. Standardized 
electronic AUR data submission is foundational for robust statewide and national surveillance and 
enables more precise, targeted intervention strategies. Given that CDA-based reporting standards are 
currently implemented in multiple environments, including NHSN’s recommended approaches 
(https://www.cdc.gov/nhsn/cdaportal/toolkits/guidetocdaversions.html), we encourage ASTP to help 
establish a more defined and coordinated pathway for transitioning toward FHIR-based reporting of 
antimicrobial use and resistance to NHSN. 
 
Proposal:  
“We propose to remove the “transmission to public health agencies—health care surveys” 
certification criterion in § 170.315(f)(7) with an effective date of January 1, 2027. This criterion 
supports the transmission of health care surveys directly to the CDC. 
We have reviewed and evaluated the transmission to public health agencies— health care surveys 
certification criterion in § 170.315(f)(7) with a goal of reducing burden while still supporting our 
policy priorities. We are also seeking to align with CDC priorities around data modernization and 
encouraging the use of FHIR-based approaches. The removal of this criterion would encourage 
industry to modernize and scale their reporting approach alongside CDC's efforts.” 
TDH-OIA Response:  
TDH-OIA supports CSTE’s recommendation to retain certification criteria for healthcare survey 
submissions as these data are vital for public health planning, monitoring disparities, and meeting 
federal requirements. Removing this criterion could disrupt an established data pipeline and weaken 
participation by healthcare organizations, creating gaps in essential information. We urge ASTP to 
preserve HL7 CDA for surveys while introducing FHIR as an optional pathway to maintain continuity 
and encourage modernization. 

Proposal:  
“In June 2025, we published the USCDI v3.1,[59] which removes or updates from USCDI v3 the data 
elements for Sex, Sexual Orientation, and Gender Identity in the Patient Demographics/Information 
Data Class. We propose to adopt USCDI v3.1 in § 170.213(a) and incorporate it by reference in 
§ 170.299. The removal of data elements from USCDI v3 reflected in USCDI v3.1 aligns with our other 
proposals related to § 170.315(a)(5) (see section III.A.1.a), resulting in burden reduction for health IT 
developers and cost savings associated with the enforcement discretion and ongoing maintenance 
requirements over time… 
Therefore, we propose to remove USCDI v3 in § 170.213(b) and USCDI v1 in § 170.213(a) which 
expires on January 1, 2026. The effect of these proposals, if finalized in a subsequent final rule, would 
be that USCDI v3.1 would be the only version of USCDI in § 170.213. In other words, all Health IT 
Modules that cross-reference § 170.213 would need to conform to USCDI v3.1 as of the effective date 
of a subsequent final rule. Given that USCDI v3.1 is a reduction, rather than expansion, of required 
support for data elements, we do not anticipate that Health IT Modules that cross-reference § 170.213 
would require further development to conform to USCDI v3.1.” 
TDH-OIA Response:  
TDH-OIA supports CSTE’s recommendation to adopt USCDI v6 rather than USCDI v3.1, as newer 
versions include critical data elements for public health including but not limited to facility address, 
immunization lot numbers, and care plans. Adopting v3.1 would roll back support for key demographic 
and clinical data, creating inconsistencies in reporting and limiting the ability to monitor disparities and 
assess outcomes. Major EHR vendors already support data elements beyond minimum requirements in 
accordance with standards already adopted, so adopting USCDI v6 would better align certification with 
real-world capabilities without imposing undue burden and further promote adoption of a FHIR 
forward policy due to inclusion of additional data elements. We urge ASTP to adopt USCDI v6 to 
ensure certification reflects current standards and meets essential public health needs. 
 
Proposal:  
Proposal to remove transparency and risk management requirements established in the HTI–1 Final 
Rule 
TDH-OIA Response:  
TDH-OIA supports CSTE’s comments and suggests maintaining AI transparency requirements 
established under HTI-1 because clear documentation of model provenance, training data, and 
performance limitations are fundamental to safe and equitable AI use in healthcare. Eliminating these 
requirements without a replacement framework would create a critical oversight gap as AI tools 
increasingly influence clinical and public health decisions. Transparency fosters trust and helps 
mitigate risks such as bias and unintended harm, which cannot be addressed if decision-making 
processes are not clear. We recommend preserving or streamlining model card requirements and, at 
minimum, issuing voluntary guidance to ensure accountability during rapid AI adoption. 
 
Proposal:  
Proposal to remove the requirement to submit real-world testing plans for all real-world testing 
certification criteria; proposal to revise the real-world testing results reporting requirement 
TDH-OIA Response:  
TDH-OIA supports CSTE’s recommendation to retain the requirement for health IT developers to 
submit real-world testing plans for all certification criteria. Testing under real-world conditions is 
essential to confirm that certified products function as intended in practical scenarios, such as reporting 
to public health systems. Without these requirements, issues like poor data quality and reliability may 
go undetected until provider onboarding and data exchange are delayed or impeded, or clinical 
workflow or patient safety are negatively impacted, even when vendors have attested to successful 
interoperability. These situations could result in continuation of burdensome manual processes in 

parallel to interoperability-based solutions. Continued enforcement of real-world testing plans supports 
accountability, validates functionality, data quality, and reliability beyond theoretical compliance, and 
helps identify and resolve problems early, ultimately strengthening public health data exchange and 
provider workflows.  
 
Proposal:  
Information Blocking: Artificial Intelligence Access and Use Definitions and Information Blocking 
(Pages 60970-60980) 
TDH-OIA Response: 
Additional HHS guidance informed by jurisdictional public health needs specific to public health use 
cases such as surveillance case reporting and analytics would help ensure that the expanded definitions 
support responsible innovation while maintaining legal compliance, transparency and public trust. We 
recommend consideration be given to working with the Association of State and Territorial Health 
Officials, National Association of County and City Health Officials, and/or the Council for State and 
Territorial Epidemiologists to assure alignment between HHS guidance for specific public health use 
cases and jurisdictional need.  
 
Proposal:  
Clinical Certification Criteria: Family Health History (Page 60982) 
TDH-OIA Response:  
TDH-OIA recommends retaining the certification criterion for family health history because this 
information is essential for both clinical care and public health. Family health history provides critical 
context for understanding disease patterns, assessing risk, and informing prevention strategies for 
infectious and chronic conditions. Relying on voluntary compliance introduces uncertainty, particularly 
for new EHR vendors seeking certification, and could lead to inconsistent data capture. Maintaining the 
requirement to use standardized coding, such as SNOMED CT® U.S. Edition, ensures data is 
structured and interoperable, reducing processing burden and supporting accurate, actionable insights 
for public health programs. 
 
Proposal:  
Care Coordination Certification Criteria: Decision Support Interventions (Page 60986) 
TDH-OIA Response:  
TDH-OIA recognizes the potential of AI to enhance clinical and public health decision-making, but its 
use must be accompanied by safeguards to prevent unintended harm from bias or flawed design. 
Transparency and risk management requirements are essential to ensure accountability and maintain 
trust in AI-enabled tools, particularly for organizational leaders responsible for patient safety and 
compliance. Removing these criteria could create unnecessary risk at a time when AI adoption is 
accelerating, as providers and health systems need clear insight into how these technologies operate. 
We urge the ASTP to retain or refine these requirements to strike an appropriate balance between 
innovation and patient protection 
 
Proposal:  
Privacy and Security Certification Criteria (Page 60988) 
TDH-OIA Response:  
Privacy and security are absolutely paramount within the healthcare and public health domains and 
therefore, TDH-OIA-OIA strongly encourages ASTP to develop a replacement framework to ensure 
security and privacy prior to removal of existing privacy and security criteria from this rule.  
 
  

Proposal:  
Conditions and Maintenance of Certification Requirements for Health IT Developers: Real World 
Testing (Page 61002) 
TDH-OIA Response:  
TDH-OIA supports CSTE’s recommendation to retain the requirement for health IT developers to 
submit real-world testing plans for all certification criteria. Testing under real-world conditions is 
essential to confirm that certified products function as intended in practical scenarios, such as reporting 
to public health systems. Without these requirements, issues like poor data quality and reliability may 
go undetected until provider onboarding and data exchange are delayed or impeded, or clinical 
workflow or patient safety are negatively impacted, even when vendors have attested to successful 
interoperability. These situations could result in continuation of burdensome manual processes in 
parallel to interoperability-based solutions. Continued enforcement of real-world testing plans supports 
accountability, validates functionality, data quality, and reliability beyond theoretical compliance, and 
helps identify and resolve problems early, ultimately strengthening public health data exchange and 
provider workflows.  We encourage ASTP to keep the real-world testing requirements for these 
reasons. 
 
Proposal:  
Conditions and Maintenance of Certification Requirements for Health IT Developers: Insights (Page 
61003) 
 
Proposal to remove the following measures in § 170.407(a)(3) § 170.407(a)(3)(vi), 315 Immunization 
administrations electronically submitted to immunization information systems 316 through certified 
health IT; and § 170.407(a)(3)(vii), Immunization history and forecasts through 317 certified health IT. 
TDH-OIA Response:  
TDH-OIA supports the 2022 Public Health Data Systems Task Force’s Recommendations 15 and 16 
and urges ASTP to strengthen certification and testing processes to better reflect real-world public 
health data needs. Certification should incorporate public-health-defined use cases, require meaningful 
conformance even for currently “optional” fields essential to public health missions, and include testing 
scenarios that address missing data, non-compliant value sets, and semantic variation. We further 
support establishing ongoing, real-world post-implementation testing to identify gaps between certified 
and implemented systems, including issues stemming from local code mappings, and to ensure that 
interoperability and data quality reliably support public health surveillance and response. To address 
concerns related to burden, we also recommend collaborating with Health IT partners to assess the 
actual level of burden to then inform the proposition of less burdensome conditions and maintenance of 
certification requirements in response to those findings. 
 
Furthermore, TDH-OIA supports CSTE’s and AIRA’s comments on this topic and strongly 
recommends retaining the Insights Conditions related to interoperability between Immunization 
Information Systems (IIS) and EHR partners. These measures provide critical visibility into how much 
immunization data certified health IT products are exchanging with IIS and identify products that do 
not meet interoperability expectations, enabling targeted improvements. Eliminating these conditions 
would reduce transparency and hinder efforts to improve data exchange, ultimately limiting providers’ 
access to consolidated immunization records at the point of care. While we recognize the intent to 
transition toward FHIR-based measures, there is currently no FHIR implementation guides supporting 
immunization exchange, making performance metrics even more valuable during this period of 
transition. Maintaining these conditions will ensure accountability, support public health objectives, 
and provide essential data for evaluating the success of interoperability initiatives. We also recommend 
ASTP further define how functionality will be verified. 
 

Proposal:  
Model Card Transparency Requirement Removal (Page 60973) 
TDH-OIA-OIA Response:  
Removing transparency requirements before alternative oversight mechanisms are established would 
create a gap in accountability precisely as AI adoption accelerates across the health system. This could 
result in a lack of trust and impact adoption of AI enabled interoperability solutions, thus working 
against this administrations goals. We recommend that ASTP retain the model card requirements or, at 
minimum, develop voluntary guidance frameworks for AI transparency that health IT developers and 
healthcare organizations can reference. 
 
Looking ahead to HTI-6, TDH-OIA would like to recommend that ASTP take the following into 
consideration:  
• Recommendations (Public Health Data Systems Task Force 2022 Recommendations Report 
Transmittal Letter) from the HITAC prepared by the Public Health Data Systems Task Force 2022 
attempted to address not only the need for assessing and promoting data quality in 
implementation and certification, but also addressed specific standards for the relevant public 
health criteria including a FHIR-forward trajectory that the collective community felt was 
practical and achievable. As you look ahead for HTI-6 and taking into consideration the recission 
of HTI- 2, TDH-OIA recommends revisiting those requirements to ensure future policy meets the 
collective intention to support quality interoperability implementation with a guide ramp for 
FHIR adoption.  
• For HTI-5 and beyond, TDH-OIA recommends that the rule explicitly define and operationalize 
the term “functional requirement” (FR) in the context of certified health IT and public health 
exchange. Specifically, the rule should (1) provide a precise definition of an FR, (2) establish a 
verification methodology— including test artifacts, acceptance criteria, and thresholds—that 
determines whether an FR is met, (3) identify who is responsible for evaluation (e.g., developers, 
accredited testing labs, or designated public health entities) and at what stage of certification or 
implementation, and (4) describe what verification looks like in practice (test cases, conformance 
checks, audit trails, and performance measures). In addition, the rule should explicitly connect 
each FR to measurable outcomes—data timeliness, completeness, fidelity/accuracy, and 
usability—by specifying performance metrics, reporting intervals, and evidence requirements that 
demonstrate real-world effectiveness. Without a clear FR framework, stakeholders lack the 
transparency and accountability needed to ensure certified functionality delivers the intended 
public health value; therefore, this should include a detailed FR approach that covers definitions, 
roles, verification procedures, and outcome-based metrics. 
• CPOE 
o TDH‑OIA respectfully disagrees with the withdrawal of the Computerized Provider 
Order Entry— Laboratory Criterion from HTI- 2. TDH-OIA recommends including the 
criterion for Health IT Modules to enable a user to create and transmit laboratory orders 
electronically according to the standard proposed in § 170.205(g)(2) (HL7® Laboratory 
Order Interface (LOI) Implementation Guide (IG)); and require technology to receive and 
validate laboratory results according to the standard proposed in § 170.205(g)(3) (HL7® 
Laboratory Results Interface (LRI) IG) in HTI‑6. Ensuring that ordering systems can 
reliably send Laboratory Orders Interface (LOI) messages and receive Laboratory Results 
Interface (LRI) messages— and that laboratories can correspondingly receive LOI and 
send LRI—is essential for supporting effective and interoperable laboratory data 
exchange. Retaining this criterion is critical to supporting accurate, timely, and 
standardized laboratory communication across healthcare and public health settings, and 
to ensure that related workflows are less burdensome to providers and information 
presented is reliable. 

• Public Health Data Exchange 
o TDH‑OIA respectfully disagrees with the withdrawal of the Public Health Data Exchange 
Certification Criterion from HTI‑2 and recommends its inclusion in HTI‑6. In addition, 
we recommend incorporating updated standards versions that align with each reporting 
criterion, along with clearly defined pathways to support future FHIR adoption. These 
steps are essential to ensuring consistent, interoperable, and forward‑looking public 
health data exchange capabilities. Specifically, we recommend that ASTP include in 
subsequent rules the following:  
 
F criteria As Proposed in HTI-2 NPRM 
§ 170.315(f)(1) Immunization registries—
Bi-directional exchange 
• HL7 v2.5.1 Implementation Guide (IG) for 
Immunization Messaging, Release 1.5 2018 
• Update vocabulary standards (CVX 
[CodeSystem Vaccine Administered Code 
Sets] and NDC [National Drug Code]) 
§ 170.315(f)(2) Syndromic surveillance—
Transmission to public health agencies 
• Update to 2019 version of HL7 v2.5.1 
Implementation Guide: Syndromic 
Surveillance, Release 1 – US Realm 
Standard for Trial Use, July 2019 
§ 170.315(f)(6) Antimicrobial use and 
resistance reporting— Transmission to 
public health agencies 
• Update from 2013 IG to 2020 IG (Includes 
antimicrobial use and resistance (AUR), 
antimicrobial resistance option (ARO), and 
antimicrobial use (AUP)) 
§ 170.315(f)(7) Health care surveys—
Transmission to public health agencies 
• Update HL7 CDA® R2 Implementation 
Guide: National Health Care Surveys 
(NHCS), R1 STU Release 3.1 – US Realm* 
§ 170.315(f)(8) Birth reporting—
Transmission to public health agencies 
• Transmission of a birth report according to 
the Birth and Fetal Death Reporting FHIR 
IG: Vital Records Birth and Fetal Death 
Reporting–1.1.0 - STU 1.1 (incorporated by 
reference in § 170.299). Vital Records Birth 
and Fetal Death Reporting–1.1.0 - STU 1.1 
 
• Minimum Standards Code Sets 
o TDH‑OIA supports HITACH’s recommendation that ASTP require certified technologies 
to demonstrate the ability to incorporate and routinely update standardized value sets 
without additional effort. Consistent use of standardized vocabularies such as LOINC and 
SNOMED‑CT is essential for producing high‑quality, semantically interoperable data and 
for maintaining the fidelity of the information being conveyed. Embedding this capability 
within certification will enhance data consistency and strengthen use and reporting across 
the health ecosystem. We further recommend that HTI‑6 explicitly include the previously 
proposed standardized value sets—particularly those supporting Problems, Laboratory 
Tests, and Immunizations.  
 
TDH-OIA appreciates the opportunity to provide feedback on this proposed rule. We support the strategic 
transition toward FHIR-based interoperability, while recognizing that adoption remains uneven across 
public health and healthcare systems. To ensure success, it is important to establish a structured, 
minimally disruptive transition and promote alignment of standards across jurisdictions and the HIT 
ecosystem at large to reduce ambiguity, fragmentation, and complexity. Continued collaboration among 

public and private stakeholders will be critical to achieving true interoperability without introducing 
conflicting requirements. 
 
 
Sincerely, 
 
 
 
Erin Holt Coyne, MPH 
TDH, Office of Informatics and Analytics 
Chief Public Health Informatics Officer 
Stephen Espy 
TDH, Office of Informatics and Analytics 
Chief Data Officer

---


