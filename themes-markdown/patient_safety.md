# Patient Safety

**Key:** `patient_safety`
**Comments:** 245

## Position Breakdown

- strongly oppose deregulation: 54
- oppose deregulation: 20
- neutral mixed: 29
- support deregulation: 30
- strongly support deregulation: 1

## Analysis

Patient safety represents the overarching concern across the ONC HTI-5 proposed rule. The 245 comments on this theme reflect a fundamental disagreement about whether removing health IT certification criteria—particularly those governing safety-enhanced design, usability, audit trails, authentication, and clinical decision support—will protect or endanger patient care. Patient safety organizations and clinicians strongly oppose broad deregulation, while vendors and some integrators argue for flexibility to innovate.

The dominant position among patient safety experts stems from the Institute of Medicine's 2011 report, "Health IT and Patient Safety: Building Safer Systems for Better Care," which documented how health IT systems can contribute to patient harm when poorly designed or inadequately audited. Organizations such as the Anesthesia Patient Safety Foundation, ECRI, Jacob Reider MD and colleagues, the American Medical Association, and Patients For Patient Safety US argue that many criteria proposed for removal were established in direct response to documented patient harm and remain essential—particularly in high-risk clinical environments.

Safety concerns manifest across multiple dimensions. First, Safety-Enhanced Design (170.315(g)(3)) and usability certification ensure that EHR interfaces are designed to minimize medication errors, missed diagnoses, and clinician workarounds that bypass safety features. Clinicians and health system administrators opposing deregulation cite documented cases where poor EHR design contributed to serious patient harm, noting that removing usability testing and workflow certification criteria could accelerate clinician burnout and increase error rates. Second, audit log and tamper-resistance requirements (170.315(d)(2), (d)(3), (d)(10)) are safety-critical because they enable investigation of incidents, detection of unauthorized access or alterations, and accountability mechanisms. Clinical and legal experts note that even small relaxations in audit trail requirements erode accountability mechanisms that have taken decades to establish. Third, Clinical Decision Support Source Attributes (170.315(b)(11)) provide transparency into the basis of AI-driven recommendations; removing this requirement creates "black box" decision support systems where clinicians cannot assess the reliability or identify systematic errors. Fourth, requirements around complex results release (pathology, laboratory findings) with clinician context prevent patient misinterpretation and unnecessary healthcare visits.

The counterargument—that widespread adoption of health IT and market competition create sufficient incentives for safety without regulatory mandate—is directly challenged by experts like Jacob Reider et al., who characterize it as a "logical fallacy." They argue that widespread adoption does not equate to inherent safety; rather, the ubiquity of health IT makes robust safety standards _more_ critical, since errors propagate at scale. Furthermore, past settlements with eClinicalWorks and Practice Fusion under the False Claims Act demonstrate the real-world consequences of health IT vendors failing to meet certification requirements.

The dominant message across patient safety commenters is nuanced: There is broad support for modernizing and streamlining standards, and for FHIR-based interoperability efforts. But modernization must not come at the expense of safety. Commenters advocate for a tiered approach where high-risk functionalities (especially AI-driven clinical decision support) maintain full transparency and auditability requirements, while lower-risk systems operate under lighter oversight. The consistent argument is that deregulation without clear, equivalent, and enforceable safety mechanisms poses unacceptable risk to patient care and trust in health IT.

## Top Arguments

### for maintaining standards

- Safety-related standards were established in response to documented patient harm; widespread adoption does not negate the need for oversight.
- EHR usability directly impacts patient safety; removing usability and workflow certification would accelerate clinician burnout and error rates.
- Audit trail integrity is essential for patient safety, regulatory compliance, and accountability; it cannot be deregulated.
- Clinical Decision Support transparency and source attribution are safety-critical for high-risk AI applications.
- Complex results (pathology, labs) require clinician context before patient release to prevent misinterpretation and harm.
- Health IT ubiquity makes robust safety standards _more_ critical, not less; errors propagate at scale.

### for deregulation or streamlining

- Reducing unnecessary regulatory burden fosters innovation and accelerates vendor iteration on safety improvements.
- Market pressures and vendor competitiveness create sufficient incentives for usability and safety without regulatory mandate.
- Prescriptive criteria often do not reflect real-world clinical workflows; deregulation enables vendor responsiveness to user feedback.
- Widespread health IT adoption and significant improvement in EHR usability since certification began suggests the requirement has achieved its goal.

## Top Recommendations

1. Retain Safety-Enhanced Design requirement (170.315(g)(3)) for all certified systems.
2. Retain Quality Management System requirement (170.315(g)(4)) to ensure structured approach to product safety.
3. Retain audit log and tamper-resistance requirements (170.315(d)(2), (d)(3), (d)(10)) as non-negotiable safety safeguards.
4. Maintain or strengthen transparency requirements for AI/ML decision support tools, including disclosure of algorithm basis and change control.
5. Retain Clinical Decision Support Source Attributes requirement (170.315(b)(11)) to preserve transparency into algorithmic recommendations.
6. Implement risk-stratified safety governance: full requirements for high-risk decision support; lighter requirements for administrative or workflow-optimization tools.
7. Maintain clinician review or summary context requirements before patient release of complex results (pathology, lab findings).
8. Establish baseline usability standards reflecting real-world clinical workflows rather than prescriptive criteria.
9. Conduct impact assessments on clinician burnout and medication error rates before finalizing any workflow-related deregulation.
10. Preserve change management and version control requirements to ensure audit trail completeness and accountability.

## Notable Voices

- **Jacob Reider, MD et al.** (Reider, Fairbanks, Ratwani, Weinger, Neil, Goldman, Mehta, Lichtscheidl) - [0224](https://www.regulations.gov/comment/HHS-ONC-2025-0005-0224)
  > "We do not remove seatbelt requirements because cars have seatbelts. The requirement is what made them so."
- **ECRI** (ECRI (Marcus Schabacker, MD, PhD, CEO)) - [0191](https://www.regulations.gov/comment/HHS-ONC-2025-0005-0191)
  > "These changes eliminate long-standing expectations around usability, safety engineering, system integrity, auditability, and secure access that have historically functioned as a minimum safety floor."
- **Anesthesia Patient Safety Foundation** (Anesthesia Patient Safety Foundation) - [0154](https://www.regulations.gov/comment/HHS-ONC-2025-0005-0154)
  > "The safety-related standards were established in response to real patient harm and remain essential."
- **American Medical Association** (American Medical Association) - [0081](https://www.regulations.gov/comment/HHS-ONC-2025-0005-0081)
  > "ONC should adopt a risk-based, tiered approach to AI transparency to ensure patient safety while reducing unnecessary burden."
- **Patients For Patient Safety US** (Patients For Patient Safety US) - [0280](https://www.regulations.gov/comment/HHS-ONC-2025-0005-0280)
  > "Removing these requirements creates variability that is invisible to patients, caregivers, and clinicians."
- **College of American Pathologists** - Emphasizing clinician context in pathology result release

## Key Tensions

- Balancing vendor burden reduction and innovation with maintaining essential patient safety guardrails.
- The desire for immediate clinician and patient access to information versus the need for context to prevent harm or misunderstanding.
- Market-based safety versus regulatory certification to ensure accountability.
- Audit trail completeness and integrity versus vendor efficiency in data management.
- Vendor flexibility for rapid iteration versus the need for structured safety validation.

## Dominant Position

Overwhelming opposition to broad deregulation of safety-critical criteria. Patient safety organizations, clinicians, and health system administrators strongly oppose removal of standards governing Safety-Enhanced Design, Quality Management Systems, audit trails, authentication, and Clinical Decision Support transparency. The dominant position prioritizes patient safety and clinician workflow integrity over vendor burden reduction, with conditional support for selective modernization and risk-stratified approaches that maintain safeguards for high-risk functionalities.
