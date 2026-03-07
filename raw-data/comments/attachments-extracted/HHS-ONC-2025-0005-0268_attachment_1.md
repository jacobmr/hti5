# HHS-ONC-2025-0005-0268 - attachment text

February 26, 2026
Thomas Keane, MD, MBA
Assistant Secretary for Technology Policy, National Coordinator for Health Information Technology 
Department of Health & Human Services
200 Independence Ave, SW
Washington, DC 20201 
RE: RIN 0955–AA09
Dear Dr. Keane:
The Consumer Technology Association (CTA®) appreciates the opportunity to provide input on the 
proposed rule from the Assistant Secretary for Technology Policy (ASTP)/Office of the National Coordinator 
for Health Information Technology (ONC) (collectively, ASTP/ONC) focused on technology standards, 
implementation specifications, and certification criteria and certification programs for health information 
technology, and information blocking. 
As North America’s largest technology trade association, CTA is the tech sector. CTA is the trade 
association representing more than 1200 companies in the U.S. technology industry. Eighty percent of CTA 
companies are small businesses and startups; others are among the world’s best-known brands. CTA’s 
Health Division advances consumer-based, technology-enabled health solutions to improve health 
outcomes and reduce overall health care costs. Our members use technology to improve nutrition, fitness, 
mental health, lifestyle management, care access, care coordination, and more – and they are poised to 
lead the next wave of American innovation with cutting-edge health technology.
CTA commends the Department of Health and Human Services (HHS) on their leadership in advancing the 
use of technology focused on promoting innovation, reducing unnecessary regulatory barriers and improving 
efficiency. 
General Comments
CTA appreciates ASTP/ONC’s continued leadership in advancing interoperability and enabling responsible 
adoption of AI in clinical care through the HTI 5 proposed rule. We strongly support the rule’s objectives to 
reduce unnecessary certification burdens, promote FHIR-based APIs, and clarify that automated and AI-
enabled access, exchange, and use of electronic health information (EHI) are in scope of federal information 
blocking protections.
Incorporating USCDI
CTA supports most of the proposed removals and revisions to the certification criteria for the same reasons 
discussed by ASTP/ONC, namely, to eliminate duplicative and unnecessary requirements that are already 

2
widely adopted, reduce regulatory burden, and reset the Certification Program to focus on a FHIR-based 
API foundation and other automated technologies that better support innovation and competition.
 
The changes also create the opportunity for ASTP/ONC to advance meaningfully the infrastructure and 
interoperability of certified health IT by updating the certification regulations to automatically incorporate by 
reference the most current versions of USCDI as well as the FHIR standards and implementation guides.
 
Fees
ASTP/ONC should prohibit charging fees to anyone (e.g., vendor, partner, or customer) for certified API use 
for decision support inventions (DSI). Additionally, to the extent fees are charged for the use of APIs 
(certified or proprietary) those fees should be publicly published and available for transparency purposes. 
Such prohibition and transparency requirements are necessary because DSIs are safety-critical tools that 
directly impact clinical decision-making and patient outcomes. Current regulations allow certified developers 
to charge backend fees to providers for API usage that enables third-party DSIs, creating opaque financial 
barriers that prevent innovative decision support tools from reaching clinicians even when the developer 
may make the API “free” to the DSI developer. 
Additionally, the Information Blocking Rule’s Fees Exception should be similarly updated to require such 
public posting and, in 45 CFR §171.302(b), to provide that the Fees Exception does not apply to: “(5) A fee 
for the use of any Predictive Decision Support Intervention as defined in §170.102 of this subchapter.”
Use of Secure Automated Technology
ASTP/ONC should look beyond its FHIR APIs to supporting the fast-emerging use of secure automated 
technologies and technical protocols, from robotic process automation (RPAs) and AI agents to Model 
Context Protocols (MCPs) and their functional equivalents. These measures are critical to advancing health 
IT interoperability to the level of functionality, fluidity, and reliability already standard across the modern 
technology landscape. FHIR APIs are passive data retrieval mechanisms that return structured data when 
queried but require external applications to interpret context and orchestrate multi-step workflows. 
RPAs, AI agents, and MCPs are active, autonomous systems that can understand clinical context through 
natural language, reason across structured and unstructured data, navigate complex EHR interfaces when 
APIs are insufficient, and autonomously execute multi-step clinical workflows (such as, detecting a critical 
lab value, reviewing medications, generating orders, pre-populating prior authorization forms, and routing 
alerts). While FHIR APIs excel at standardized data exchange, AI agents with MCP or their functional 
equivalent are essential for reducing clinician burden through intelligent workflow automation and breaking 
down care coordination silos across fragmented systems.
Removal of Functional Requirements
CTA supports the revisions to the DSI criterion in 45 CFR §170.315(b)(11) to remove the functional 
requirements (e.g., source attribute support, intervention risk management, etc.), as those requirements are 
overly burdensome, add limited value to clinical decision-making, impose significant administrative costs on 
developers without meaningful improvements to patient care, and impede innovation by creating barriers to 
entry. 
However, we request that ASTP/ONC reconsider the proposal to limit the data elements to just the data 
expressed in §170.315(b)(11)(iii)(A) – e.g., Problems, Medications, Allergies and Intolerances, at least one 
Demographic, Laboratory, Vital Signs, Unique Device Identifiers for Patient Implantable Devices, and 
Procedures—as well as Clinical Notes and the Assessment and Plan of Treatment data classes. This 

3
proposal would effectively exclude data elements that are critical to the use and development of DSI to 
improve patient care and reduce clinician burden, such as Diagnostic Imaging, Health Status/Assessments, 
Clinical Tests, Goals, Care Team Members, Encounter Information, the full range of Patient Demographics, 
and more.
Real World Testing
While CTA defers to ASTP/ONC on the utility of Insight reporting criteria and the value of real-world testing 
requirements with respect to many of the criteria, we urge the agency to maintain both: (1) the Insights 
reporting criteria for FHIR Bulk Access; and (2) the real-world testing requirements for EHI Export.
Reporting on FHIR Bulk Access remains important because it provides insight into, and aligns with, other 
retained Insights measures designed to hold developers accountable for making EHI available for provider 
and patient use at scale. The FHIR Bulk Access Insights reporting criteria are lightweight and shed light on 
what has been an inconsistent rollout of bulk access capabilities. This reporting measure is directly 
complementary to the other Insights measures that ASTP is retaining at the single-patient API level, and 
only requires tracking minimal data; that is: (1) the number of bulk data access requests completed (across 
clients) to export all data requested for patients within a specified group; and (2) the number of distinct 
certified health IT deployments (across clients) that completed at least one bulk data access request.
With respect to the EHI Export, this is often the only guaranteed way to access EHR content in full fidelity, 
and if there is no obligation for vendors to test and report on how well these APIs are functioning, then 
problems arise late in the process when it is harder to fix them.
Allow Segmentation and Presentation Controls to Avoid Clinical Confusion
We recommend that HTI-5 clarify that health IT developers and providers may implement reasonable 
presentation and segmentation controls, consistent with information-blocking rules, to protect patient safety 
and clinical usability. For example, EHRs should be able to:
•Display data from FDA-regulated, clinically validated devices in the primary clinical results and 
flowsheets, while routing unregulated or wellness-grade data to clearly labeled “patient-generated” or 
“consumer” views. 
•Use provenance metadata and “clinical-grade” flags to filter or tier how different data sources appear 
in various workflows (e.g., clinician review screens vs. patient portals), so long as patients retain 
access to their data and reasonable, non-discriminatory policies are applied.
These types of configuration capabilities are not “information blocking” and are necessary safety and 
usability features in an environment where many different devices and AI tools may legitimately send data to 
the same record. Clarifying this in the final rule will encourage innovation from both consumer and 
clinical-grade technologies while helping providers manage signal-to-noise and avoid unintended clinical 
reliance on non-validated outputs.
Align AI Interoperability with Quality and Safety Expectations
HTI-5’s clarification that automated and AI-enabled access, exchange, and use of EHI are within the scope 
of information-blocking protections is a critical step toward unlocking AI’s benefits in health care. To fully 
realize this potential:

4
•ONC should encourage the use of provenance and metadata fields that allow health systems to 
understand when AI was used, at what level (e.g., triage, summarization, clinical decision support), 
and under what regulatory status. 
•ONC should consider, in collaboration with FDA and other HHS agencies, future guidance on how 
certified health IT can transparently present AI-generated outputs to clinicians in ways that support 
appropriate human oversight.
This approach will help ensure that AI interoperability advances not just access to data, but also 
appropriate, safe use of data and AI outputs in clinical decision-making.
Enforcement
CTA welcomes the Administration’s enforcement efforts to ensure that its rules are followed. We encourage 
ASTP/ONC to consider how actors may be artificially limiting the use of their “interoperability elements” to 
block access to the business data that is often necessary for understanding and using the electronic health 
information. For example, some EHR vendors routinely block third-party applications from having access to 
the workflow documents used to document care and the telemetry that shows how the end user uses those 
documents and the system on the ground that this organizational and usage data does constitute electronic 
health information and is the vendor’s proprietary business data. However, the definition of “interoperability 
element” speaks to privileges, rights, intellectual property, or services that are necessary for the access, 
exchange or use of EHI, and this business data is absolutely critical to the exchange and use of EHI in 
connection with those workflows. We respectfully request that ASTP/ONC consider this in its efforts to break 
down these pervasive information blocking barriers.
Conclusion
CTA appreciates the opportunity to respond to the proposed rule. We look forward to continuing to work with 
you to advance the adoption of AI in healthcare to increase efficiency, lower costs and improve patient 
outcomes
Sincerely,
Michael Petricone
Senior Vice President, Government Affairs
Consumer Technology Association
René Quashie
Vice President, Digital Health
Consumer Technology Association
Catherine Pugh
Director, Digital Health
Consumer Technology Association

---


