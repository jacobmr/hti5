# HHS-ONC-2025-0005-0133 - attachment 1

**Source:** HHS-ONC-2025-0005-0133_attachment_1.pdf (scanned image, OCR via vision)

---

Crystal S. Denlinger, MD, FACP
Chief Executive Officer
National Comprehensive Cancer Network
denlinger@nccn.org
3025 Chemical Road, Suite 100
Plymouth Meeting, PA 19462
215.690.0300

February 27, 2026

Thomas Keane
Assistant Secretary for Technology Policy
U.S. Department of Health and Human Services
330 C St SW
Floor 7
Washington, DC 20201

RE: Health Data, Technology, and Interoperability: Office of the Deputy Secretary and Assistant Secretary for Technology Policy (ASTP) and Office of the National Coordinator for Health Information Technology (ONC) Deregulatory Actions To Unleash Prosperity (RIN 0955-AA09)

Dear Dr. Keane:

The National Comprehensive Cancer Network (NCCN) is pleased to comment on the Health Data, Technology, and Interoperability: Office of the Deputy Secretary and Assistant Secretary for Technology Policy (ASTP) and Office of the National Coordinator for Health Information Technology (ONC) Deregulatory Actions To Unleash Prosperity Proposed Rule as it relates to NCCN's mission of defining and advancing quality, effective, equitable, and accessible cancer care and prevention so all people can live better lives. NCCN will focus our comments on revisions to certification criteria and information blocking exemptions.

## NCCN Background

As an alliance of 33 leading academic cancer centers in the United States (US) that treat hundreds of thousands of patients with cancer annually, NCCN is a developer of authoritative information regarding cancer prevention, screening, diagnosis, treatment, survivorship care, palliative care, and supportive care that is widely used by clinical professionals and payers alike. The NCCN Clinical Practice Guidelines in Oncology (NCCN Guidelines) are a comprehensive set of guidelines detailing the sequential management decisions and interventions that currently apply to 97 percent of cancers affecting patients in the US. NCCN Guidelines and Library of Compendia products help ensure access to appropriate care, clinical decision-making, and assessment of quality improvement initiatives.

NCCN imposes strict policies to shield the guidelines development processes from external influences. The "firewall" surrounding the NCCN Guidelines processes includes financial support policies; panel participation and communication policies; guidelines disclosure policies; and policies regarding relationships to NCCN's other business development activities. The guidelines development is supported exclusively by the Member Institutions' dues and does not accept any form of industry or other external financial support for the guidelines development program. The NCCN Guidelines are updated at least annually in an evidence-based process integrated with the expert judgment of multidisciplinary panels of expert physicians from NCCN Member Institutions. The NCCN Guidelines are transparent, continuously updated, available free of charge online for non-commercial use and are available through a multitude of health information technology (HIT) vendors.

The NCCN Guidelines Navigator, presenting the NCCN's Clinical Practice Guidelines in Oncology in structured data format, serves as a vital tool for healthcare providers, enabling them to quickly find and understand the best available evidence-based treatment options for patients. The platform's intuitive design facilitates easier treatment decision-making by organizing information more linearly. The system maintains a strong commitment to security, data privacy, transparency and accuracy by ensuring that all generated text references the approved NCCN Guidelines, enabling users to review source documents for validation and access additional background information within the NCCN Guidelines.

Recognizing the importance of interoperability and standardization for the future, NCCN is prioritizing standardized terminology and consistency across our clinical content including the NCCN Guidelines, NCCN Guidelines Navigator, Library of Compendia, and Chemotherapy Order Templates. As part of this effort, we have established standardized naming methods for systemic therapy regimens and biomarker testing and are continuing to expand those efforts across our content. Additionally, the Chemotherapy Order Templates and the NCCN Guidelines Navigator are available via a FHIR-based API, supporting workflows with HIT vendors for product development and updates. These efforts improve safety, enhance interoperability, and streamline development and documentation across care settings.

## Revisions to Certification Criteria

ASTP/ONC proposes to remove 34 and revise seven of the 60 certification criteria in the ONC Health IT Certification Program (Certification Program) to reduce burden and costs for health IT developers and providers while supporting innovation.

### Transmission to Cancer Registries

Among the criteria proposed for removal, effective January 1, 2027, is the transmission to cancer registries criterion. This criterion assesses whether a Health IT developer can properly create and format case information for electronic transmission in accordance with CDA-based implementation specifications for reporting to public health agencies. ASTP/ONC indicates that removing the certification requirement would reduce burden and encourage the ongoing evolution in cancer registry reporting by offering health IT developers space to move toward FHIR-based standards and modern reporting solutions. While NCCN appreciates efforts to reduce burden and support innovation, it is important that these measures do not negatively impact cancer care and research.

Cancer registry data plays a critical role across the cancer care continuum. Cancer registry data allows providers and public health agencies to monitor cancer trends over time, advance research, identify high-risk populations, and steer public health resource allocation, ultimately improving cancer care and survival rates. Timely reporting is essential for cancer surveillance, care delivery, and research. Delays in reporting make monitoring the trends of cancer cases more difficult and limit access to timely data for research.

Until FHIR-based workflows are consistently implemented among health systems and registries, the current criterion serves as a safeguard for case reporting. Modernization efforts must maintain continuity of data collection during transitions to new data exchange standards and should avoid introducing delays or lapses in reporting. While NCCN supports measures to reduce administrative burden and modern health information exchange, we urge ASTP/ONC to retain this criterion in place at this time and establish a phased transition plan that preserves data quality and reporting continuity while allowing time for any necessary transition to FHIR-based reporting. Such an approach would support the continued development and implementation of innovative infrastructure like FHIR-based solutions and accelerator initiatives, while minimizing gaps in reporting that could negatively impact the data underwriting current understanding of current cancer trends and public health needs.

### Family Health History

ASTP/ONC is also proposing to remove the family health history certificate criterion because the functionality is embedded in certified health IT and has been widely adopted by hospitals and physicians. In addition, USCDI v6 includes a new Family Health History data element. While NCCN understands the rationale for removing a requirement that has been broadly implemented, it is essential that eliminating the certification criterion does not inadvertently create gaps in documentation of family health data.

Family Health History plays a critical role in cancer care as it helps identify people who may be at risk for a genetic syndrome or be a potential carrier of a genetically linked cancer. Comprehensive and accurate family history collection allows for appropriate referrals for genetic counseling, risk-reducing interventions, and tailoring screening recommendations. NCCN maintains two Genetic/Familial High-Risk Assessment clinical guidelines to support this work: one addressing colorectal, endometrial, and gastric cancers and another focused on breast, ovarian, pancreatic, and prostate cancers. Both guidelines recommend the collection of a comprehensive family history as a core component of proper genetic counseling. As ASTP/ONC continues to refine the Certification Program, NCCN urges the agency to ensure that collection of family health history remains as a standard of care as it is essential to improving patient outcomes.

### Decision Support Interventions

Additionally, ASTP/ONC is proposing to revise the decision support interventions (DSI) certification criterion regarding source attribute support. This criterion is intended to ensure that users can leverage health IT for clinical decision-making by supporting their selection of both evidence-based and predictive DSI and by providing access to transparent information about DSI performance and quality. The proposed revision would remove the artificial intelligence (AI) "model cards" requirement and other associated transparency measures.

While NCCN appreciates ASTP/ONC's continued commitment to reducing burden, eliminating transparency and risk management measures could have unintended consequences and may hinder adoption among providers, particularly in the context of AI. Transparency is a key factor in establishing trust in AI-driven tools. In the proposal, ASTP/ONC claims there is insufficient evidence to support providers are accessing source attribute information. However, a 2024 Wolters Kluwer Health survey of 100 U.S. physicians revealed that 91% of respondents indicated they need to know that generative AI materials were created by doctors and medical experts before using them in clinical decisions. Similarly, 89% reported that they would be more likely to use generative AI in clinical decision making if a vendor was transparent about where information came from, who created it, and how it was sourced. Without standardized documentation like model cards, it is harder to evaluate safety and effectiveness of AI-driven decision support tools. Given this documented interest among providers, NCCN believes further evaluation and understanding of the impact of including this information in DSI tools may be warranted before making the removing the criterion.

Transparency measures are also particularly significant given that many AI systems function as "black box" models, meaning they produce outputs without clearly explaining how or why a decision or recommendation is generated. This poses significant trust issues for both patient and providers. This lack of transparency can undermine trust among patients and providers, complicate clinical decision making, and limit meaningful informed consent if patients and providers cannot understand the basis of AI-generated recommendations. The lack of transparency makes accountability difficult. Additional concerns about trust are exacerbated by the risks of AI "hallucinations." AI hallucinations occur when AI-driven tools perceive patterns or objects that are nonexistent or undetectable to human observers, creating outputs that are nonsensical or altogether inaccurate. In healthcare, such errors are particularly concerning, as they may introduce misinformation into workflows and potentially contribute to inappropriate decision making that may negatively impact patients. Without oversight and standards for explainability, the use of AI in cancer care may challenge existing privacy protection frameworks, patient autonomy, evidence-based decision-making, and ethical use of data.

Several nationally recognized health organizations, such as the Coalition for Health AI and the National Academy of Medicine, have established guiding principles and standards to promote the responsible development and use of AI in healthcare. Similarly, within the oncology community, ASCO has developed guiding principles for AI in oncology. Across these frameworks, transparency is consistently identified as a core principle for AI development and implementation. This broad consensus underscores the importance of transparency in fostering trust and the safe integration of AI in healthcare. While Health IT developers may view certain transparency and risk management requirements as burdensome, efforts to reduce regulatory requirements should not come at the expense of patient health or safety nor health care provider trust. For these reasons, NCCN recommends ASTP/ONC maintain the existing transparency requirements within the DSI certification criterion. Doing so would support responsible AI adoption and help promote trust among providers and patients which is crucial in cancer care.

## Information Blocking

ASTP/ONC is proposing revisions to information blocking regulations. Specifically, the proposal would (1) revise the definitions of "access" and "use" to emphasize that the definitions include automated means of access, exchange, or use of electronic health information (EHI), including autonomous AI systems, and (2) remove the "third party seeking modification use" condition from the Infeasibility Exception. Although NCCN recognizes the importance of enabling appropriate use of EHI, expanding third party use of AI-driven tools raises important safety and privacy concerns.

AI tools rely heavily on large volumes of sensitive health data, making privacy and data protection a major concern. While HIPAA establishes safeguards for patient information, uncertainty remains around how data is collected, stored and shared, especially when the data may be accessed by third-party vendors. Major privacy concerns include unauthorized access to patient data through breaches or cyberattacks, as well as the potential misuse of data without adequate transparency or oversight.

Recent events underscore these concerns. On January 13, 2026, Epic filed a lawsuit in the U.S. District Court of the Central District of California alleging Health Gorilla, a national interoperability platform that provides real-time access to structured AI-ready health data, and associated companies fraudulently accessed and monetized sensitive patient medical records through national health information exchange frameworks. According to Epic, certain entities misrepresented themselves as medical providers to gain access to records and then used the data for non-treatment purposes without patient consent or authorization. While these allegations must still undergo legal review, the case highlights the potential risks associated with the lack of appropriate guardrails regulating third-party access of EHI. Strong, yet appropriate information blocking guardrails and regulations are essential to protecting patient privacy and ensuring that expanded data access does not result in unintended harm. NCCN is concerned that the proposed revisions will further weaken existing protections and increase the risk of inappropriate data access and use. As such, NCCN respectfully requests that ASTP/ONC reconsider the proposed revisions and maintain appropriate guardrails, so cancer care is not negatively impacted.

NCCN appreciates the opportunity to comment on Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions To Unleash Prosperity. NCCN is happy to serve as a resource and looks forward to working together to advance access to equitable, high-quality cancer care.

Sincerely,

Crystal S. Denlinger, MD, FACP
Chief Executive Officer
National Comprehensive Cancer Network
denlinger@nccn.org
215.690.0300
