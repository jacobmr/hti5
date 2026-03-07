# HHS-ONC-2025-0005-0285 - attachment 1

**Source:** HHS-ONC-2025-0005-0285_attachment_1.pdf

---

 
 Washington, D.C.     
 
February 25, 2026 
  
Dr. Thomas Keane, MD, MBA  
Assistant Secretary for Technology Policy and National Coordinator for Health Information Technology  
Office of the Assistant Secretary for Technology Policy and National Coordinator for Health Information 
Technology  
U.S. Department of Health and Human Services  
200 Independence Avenue, S.W.  
Washington, D.C. 20201  
 
RE: The Health Data, Technology and Interoperability Deregulatory Actions to Unleash Prosperity Proposed 
Rule (HTI-5) 
 
Dear Dr. Keane: 
 
The Oral Health Interoperability Alliance (OHIA) appreciates the opportunity to comment on the Health Data, 
Technology, and Interoperability: ASTP/ONC Deregulatory Actions to Unleash Prosperity (HTI-5) Proposed 
Rule. OHIA is a multi-stakeholder coalition committed to making oral health data first class data in the national 
interoperability ecosystem. Our participants span the full oral health value chain: practice management and 
EHR vendors; dental imaging and AI developers; clearinghouses and switch vendor s; health information 
exchanges; commercial and public payers; public health agencies; and clinical, standards, and patient advocacy 
organizations. Together, they share a common goal: to ensure that oral health information moves with the same 
reliability, transparency, and “without special effort” expectations that federal policy now applies to the rest of 
electronic health information. 
OHIA operates as a neutral convening forum focused on implementation ready solutions rather than abstract 
principles. Our work is grounded in open, consensus -based standards and in practical alignment with federal 
policy levers—particularly the Health IT Certification Program, information blocking regulations, and CMS 
payment and reporting programs.  
We strongly support HTI 5’s effort to sharpen the Certification Program’s focus on standardized HL7
® FHIR® 
APIs and to reduce functionality-based requirements that have become burdensome and difficult to maintain. 
Oral health should not be an exception to this “FHIR-forward” strategy. Instead, HTI-5 is the right vehicle to 
close long standing gaps that have left dental data, imaging, and care transitions largely outside the federal 
interoperability framework—even as dental care is increasingly recognized as integral to whole person health, 
chronic disease management, and health equity. 
Our comments therefore do not ask ASTP/ONC to create an entirely new dental specific certification track. 
Rather, they propose targeted, low burden adjustments to existing criteria and implementation specifications 
so that oral health is explicitly include d wherever the program already governs analogous medical data and 
workflows. Our detailed recommendations follow.  
 
Respectfully submitted, 
Oral Health Interoperability Alliance 
  

 
 
 
 
    
 
 
Leavitt Partners, an HMA Company  Oral Health Interoperability Alliance 2 
 
Recommendations: 
Recommendation: Confirm that Oral Health Status Observations are Accessible 
Through §170.315(g)(10)—Standardized API for Patient and Population Services  
 
We applaud ASTP/ONC for identifying §170.315(g)(10) as the primary vehicle through which clinical data 
will flow in a FHIR ®-enabled certification environment. As the agency removes functionality- based criteria 
and narrows the certified Health IT Module footprint, APIs  based on open standards carry increasing weight 
as the mechanism ensuring that structured data documented in certified systems remains accessible. This is 
precisely why the oral health data coverage question must be addressed now. 
The absence of oral health data classes in the current USCDI has enabled vendors to treat dental records as 
outside the defined data set and therefore outside the EHI access and API exposure framework. HTI -5, by 
making USCDI v3.1 the reference data model a nd (g)(10) the primary access vehicle, risks hardening that 
exclusion. 
We encourage ASTP/ONC to address this by taking two actions in the HTI -5 final rule. First, we ask 
ASTP/ONC to confirm through preamble language that oral health status observations, when recorded in a 
Health IT Module certified to §170.315(a)(5), are within scope of the API access obligation under 
§170.315(g)(10). The legal basis for this is straightforward: the information blocking regulations define EHI 
to encompass all electronic protected health information in a designated record set, and the API Condition of 
Certification requires that structured data accessible through a certified system be accessible through the 
standardized FHIR API. Oral health data recorded by a certified module satisfies both conditions. The preamble 
should say so explicitly. 
Second, we encourage ASTP/ONC to reference the Advancing Oral Health Interoperability  initiative in the 
preamble and to signal intent to incorporate the Oral Health Data Exchange Implementation Guide (OHDE) 
into a future USCDI update or certification criterion once the IG is published. This costs nothing in terms of 
deregulatory burden and creates the policy signal that would allow the standards development community and 
vendors to align development efforts accordingly. We are not recommending a new functional recording 
mandate in the (a) -series, which would be inconsistent with ASTP/ONC's direction to reduce functionality -
based certification requirements. We are asking ASTP/ONC to confirm that the API exposure obligation 
already attaching to structured data extends to oral health data, and to signal a path for more formal recognition. 
 
 
Recommendation: Signal Intent for Future Rulemaking on  §170.315(a)(3) — 
Computerized Provider Order Entry— Diagnostic Imaging to Require API-Based Image 
Transmission, Domain-Differentiated Certification, and Provenance Metadata 
We address §170.315(a)(3) in two tiers, distinguishing between what ASTP/ONC can and should act on in this 
rulemaking and what we recommend for the next certification update cycle. 
 
Current-Cycle Ask: Preamble Confirmation of Existing Obligations 
We ask ASTP/ONC to confirm in the HTI-5 final rule preamble that dental image files generated or stored by 

 
 
 
 
    
 
 
Leavitt Partners, an HMA Company  Oral Health Interoperability Alliance 3 
 
a Health IT Module certified to §170.315(a)(3) constitute EHI under the information blocking regulations and 
are therefore subject to both the EHI export requirement under §170.315(b)(10) and the API access obligation 
under §170.315(g)(10). No change to the text of §170.315(a)(3) is required for this clarification; it follows 
existing regulatory definitions and the API Condition of Certification. We also ask ASTP/ONC to confirm that 
the (g)(10) API access obligation, which the agency is rightly positioning as the foundational access vehicle 
for a FHIR-Forward certification environment, extends to imaging data as it does to every other category of 
structured clinical data. 
We further ask ASTP/ONC to signal in the HTI- 5 preamble that it recognizes dental imaging as a domain 
requiring distinct conformance consideration in the next certification update cycle, and that the agency intends 
to evaluate the feasibility of domain-differentiated certification pathways for medical and dental imaging. This 
prospective signal requires no regulatory action in HTI -5 but would meaningfully orient the standards 
development community, conformance testing bodies, and health IT developers toward the work that will be 
necessary. 
 
Prospective Input for Future Rulemaking 
For the benefit of ASTP/ONC's future rulemaking planning, we offer the following observations about what 
effective dental imaging certification will need to address. We understand these recommendations are out of 
scope for HTI-5 as a deregulatory action and submit them as input to the next rulemaking cycle rather than as 
current-cycle requirements. 
The current (a)(3) criterion governs only order management, leaving the diagnostic image itself entirely outside 
the certification framework. This is directly inconsistent with the principle that health information must be 
“accessible and exchangeable without special effort. ”  Diagnostic images flow through diagnosis, treatment 
planning, clinical documentation, prior authorization, claims submission, post-payment audit, and AI-assisted 
analysis. Every one of those uses depends on structured, API-based image transmission, not local storage and 
manual export. Extending the API access obligation ASTP/ONC has already established for every other 
category of clinical data to imaging is not a new burden—it is the application of an existing principle to a data 
type that has been structurally excluded from it. 
In addition, based on its nature, dental imaging requires its own certification pathway because the clinical 
dependency on imaging in dentistry has no parallel in general medicine. In a single dental visit, providers 
routinely acquire images across multiple simultaneous modalitie s including periapical, bitewing, panoramic, 
cephalometric, CBCT, and photographi c. These are used concurrently and immediately for diagnosis, 
treatment planning, documentation, and insurance justification. In dentistry, imaging is the primary diagnostic 
tool for the majority of clinical and coverage decisions in the specialty; the image is frequently the sole 
evidence basis for prior authorization approval, claims payment, and post -payment audit. This means that 
image transmissibility and metadata integrity c arry both clinical and legal significance that exceeds typical 
medical imaging contexts. A certification pathway built on hospital radiology assumptions will fail to validate 
meaningful capability in the dental domain. 
The administrative cost of this gap is substantial. Dental prior authorization and claims review almost 
universally depend on manual image uploads through payer -specific portals. Prior authorization research 
consistently documents administrative burdens exceeding $11 per transaction for provider -initiated requests, 
and dental specialty practices initiate prior authorization at rates that rival or exceed those of medical 
specialties. The infrastructure to address this already exists within the Certification Program. The CARIN Blue 
Button Oral Health Profile provides the patient access and payer data exchange framework under §170.215(k), 

 
 
 
 
    
 
 
Leavitt Partners, an HMA Company  Oral Health Interoperability Alliance 4 
 
and the Da Vinci prior authorization suite under §170.215(j) supports PA and claims workflows. Connecting 
dental imaging to that infrastructure is not a new burden —it is closing an exclusion that has no policy 
justification and carries a quantifiable administrative cost. 
Finally, future certification must treat imaging provenance and AI processing metadata as patient safety 
requirements. Dental images routinely pass through multiple AI enhancement, analysis, and annotation 
systems before reaching a clinical reviewer or pay er. If the recipient cannot determine what processing an 
image has undergone, clinical judgment made against it —by a human or a downstream AI —may rest on a 
false evidentiary foundation. Structured transmission of image provenance  is critical as well as processing 
history, and versioning of derived images using ANSI -accredited imaging standards. Two dental -specific 
elements are non -negotiable: layout and template positions, which define the spatial organization of a full -
mouth series and without which no downstream system can correctly identify which tooth each image 
represents; and tooth identification labeling as structured metadata rather than visual annotation, which is lost 
or misread in transmission. An imaging API that transmits files without processing history does not enable safe 
AI-assisted analysis introduces lack of transparency into a clinical data stream where this lack of transparency 
causes diagnostic errors. 
ASTP/ONC has stated that its FHIR
®-Forward reset is designed to enable more creative AI -enabled 
interoperability solutions. That goal cannot be safely achieved for imaging data without the provenance 
framework described here We urge the agency to treat the next certification update cycle as the appropriate 
vehicle to establish that expectation for both medical and dental imaging. 
 
 
 
Recommendation: Revise §170.315(b)(1) — Transitions of Care to Recognize FHIR-
Based Dental Summary Exchange Through API 
We support ASTP/ONC's proposal to narrow §170.315(b)(1) toward a receive -only posture as a meaningful 
step toward FHIR ®-based exchange. We recommend in future rulema king that revised criterion explicitly 
recognizes receipt of structured oral health summary FHIR ® Bundles conformant with the Oral Health Data 
Exchange Implementation Guide as a supported transition format. 
For dental care transition, no C-CDA template for dental summary exchange has ever existed. Conseque ntly, 
FHIR® is not a future alternative for dental transitions of care—it is the only  viable path. Recognizing the Oral 
Health FHIR IG here costs nothing in terms of the burden reduction ASTP/ONC is pursuing, and it closes a 
gap that would otherwise leave dental care transitions entirely outside the transitions-of-care framework as the 
criterion narrows. 
The TEFCA network and its QHIN infrastructure offer a near- term pathway for distributing oral health 
summary FHIR Bundles across care settings at scale. Dental providers increasingly participate in health 
information exchange, and the Da Vinci prior authorization suite already defines FHIR
®-based workflows for 
dental coverage decisions. Recognizing the Oral Health FHIR IG in the transitions -of-care criterion would 
align the certification framework with the exchange infrastructure ASTP/ONC and its partners have already 
built and would allow dental care coordination to benefit from the FHIR investments the Certification Program 
has made. 
We note that this recommendation also advances the Administration's interoperability goals with respect to 
specialty care integration. Dental disease is a leading contributor to emergency department utilization, chronic 

 
 
 
 
    
 
 
Leavitt Partners, an HMA Company  Oral Health Interoperability Alliance 5 
 
disease comorbidity, and Medicaid spending. Enabling structured dental summary exchange through the 
transitions-of-care criterion is a low-cost, high-impact step toward addressing that cost burden. 
Recommendation: Clarify that §170.315(b)(10) —  Electronic Health Information 
Export Encompasses Dental Records  
We urge ASTP/ONC to confirm through preamble language that dental and oral health data maintained within 
a certified Health IT Module is within scope of the EHI export requirement under §170.315(b)(10), and that 
such data must be exportable. We are not recommending a new functional export capability. We are 
recommending that ASTP/ONC remove the ambiguity created by the absence of oral health data classes in 
USCDI, which vendors have used in practice to exclude dental records from EHI export as outside the defined 
data set. The information blocking regulations define EHI broadly to encompass all electronic protected health 
information in a designated record set. The API-forward certification framework requires that structured data 
accessible through the system be accessible through the API. Both principles compel the conclusion that dental 
records are subject to EHI export requirements, and ASTP/ONC should say so explicitly. 
 
 
Conclusion 
These recommendations are calibrated to ASTP/ONC's deregulatory mission. Three of our recommendations 
require only preamble clarifications that confirm existing obligations extend to dental data—clarifications that 
reduce compliance ambiguity without imposing new functional requirements. The fourth asks for a preamble 
signal and future rulemaking input consistent with the agency's own acknowledgment that new regulatory 
actions are deferred to subsequent rulemaking cycles. Together, they ensure that the FHIR -Forward 
infrastructure HTI-5 is building does not inadvertently construct a floor with a hole where dental data falls 
through. 
We welcome the opportunity to discuss any of these recommendations with ASTP/ONC staff and would be 
pleased to provide technical assistance on dental interoperability standards, the OHDE implementation guide 
development, or conformance testing considerations for dental imaging. We respectfully request that 
ASTP/ONC respond to each of the four recommendations listed above in the preamble of the final rule. 
 
Respectfully submitted, 
 
 
Oral Health Interoperability Alliance 
 
