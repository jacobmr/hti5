# HHS-ONC-2025-0005-0207 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0207/attachment_1.pdf

---

February 27, 2026

Via Federal eRulemaking Portal

To: Assistant Secretary for Technology Policy (ASTP)/Office of the National Coordinator for
Health Information Technology (ONC) (collectively, ASTP/ONC), Department of Health and
Human Services (HHS)

RE: California Department of Public Health Response to Federal Register 2025-23896 (90
FR 60970) Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions
To Unleash Prosperity

Dear Thomas Keane, MD, MBA and Robert F. Kennedy, Jr.

CDPH appreciates the opportunity to comment on the HTI-5 proposed rule. CDPH
supports efforts to advance interoperability and reduce unnecessary regulatory burden;
however, any deregulatory action must preserve and enhance the capability of public
health agencies to receive timely, complete, and standardized data for surveillance,
reporting, and response. We note several proposals that move certification away from
standards-based interoperability in favor of functional requirements. These moves are
likely to impose a burden on both public health and the private sector as HTI implementers
will be left without clear direction on the realization of data interoperability. History has
shown that when HTI developers lack common standards to guide the interoperability
product development, variable solutions result which must be accommodated during
implementation of data exchange. We have concerns that the proliferation of variant
solutions may impose unfunded mandates on State, local, and Tribal governments, or the
private sector. We strongly recommend that Certification Criteria retain requirements that
certified HTI adhere to HL7 interoperability standards.

CDPH does not support the HTI-5 proposed rule as written. Specifically, CDPH focuses
comments on:

• Transmission to cancer registries

                    California Department of Public Health
           MS 8600  P.O. Box 997375  Sacramento, CA 95899-7375
                        916) 928-8500  CDPH.ca.gov

Thomas Keane, MD, MBA and Robert F. Kennedy, Jr.
Page 2
February 27, 2026

         •   Electronic Case Reporting (ECR)

         •   Antimicrobial Use and Resistance Reporting

         •   Health care survey reporting

         •   AI transparency

         •   United States Core Data for Interoperability (USCDI)

         •   All data request API

         •   Immunization Insight Conditions



     These elements directly affect CDPH statutory responsibilities and data ecosystem
     operations.

     Questions 1–4. Transmission to Cancer Registries

     CDPH and the state central California Cancer Registry (CCR) supports goals of HTI-5 to
     reduce burden on IT developers, promote information blocking regulations, and encourage
     modernizing standards and certification criteria for cancer registry reporting. However, the
     cancer registry has concerns about the proposed HTI-5 rule that removes “transmission to
     cancer registries.” These include the following:

         •   The modernized resources listed in the rule, Helios FHIR Accelerator and Central
             Cancer Registry Reporting FHIR Implementation Guide, are under active
             development, but have not yet been tested, adopted, or implemented by the central
             cancer registry community. They are not available for current reporting needs.

                o Helios FHIR Accelerator listed here is an incorrect resource for cancer
                  reporting. The Helios Query and Response tool could be used as a tool by
                  cancer registries to search for follow up information but will not be used as a
                  means of transmission of data.

         •   Until the Implementation Guides have been tested and implemented in a
             widespread fashion, it is premature to remove certification criteria requiring use of
             the Certification Companion Guide v1.4 ‘Transmission to Cancer Registries’. A large
             number of registries, inclusive of the California Cancer Registry, currently rely
             heavily on this reporting mechanism, and without it, there is no incentive for it to
             continue. This would result in intensive manual effort on the part of physicians’

                                                                      Privileged and Confidential

Thomas Keane, MD, MBA and Robert F. Kennedy, Jr.
Page 3
February 27, 2026

             offices and state central cancer registries and could impact completeness of
             reporting.

         •   Removal of public health reporting, including reporting to central cancer registries,
             from EHR certification criteria, eliminates any incentive for EHRs to support
             interoperability, an important effort in advancing the timeliness and efficiency of
             cancer surveillance in this country.



     Recommended revision: Continue to require certification criteria for CDA transmission to
     cancer registries until the CCRR FHIR IG is ready for implementation.



     Questions 5–7. Transmission to Public Health via ECR

     The draft rule proposes to revise the “transmission to public health agencies—electronic
     case reporting” (eCR) certification criterion in § 170.315(f)(5). CDPH does not agree with
     the proposals in § 170.315(f)(5). Electronic case reporting (eCR) automates required
     disease reporting for healthcare providers, including emerging pathogen reporting.
     Reversing previous certification criteria to functional and/or base EHR standards will cause
     increased variability in eCR and FHIR implementations, inconsistent USCDI data
     availability, and fragmented eCR workflows across EHR vendors. This will significantly
     increase technical and operational burden on public health agencies while degrading data
     quality, timeliness, and completeness for healthcare submitters. Without consistent,
     standardized data in the electronic initial case report messages, healthcare providers will
     not be approved to stop manual reporting processes.

     Having eCR criteria as part of CEHRT has been vital to advancing eCR. eCR provides
     immense opportunity to improve efficiency and reduce administrative burden not only for
     healthcare providers reporting to public health but also for public health manually entering
     data from emails, phone calls, and faxes. CDPH is very concerned with the proposal to
     remove the standards-based requirements for eCR and reduce it to a functional
     requirement. Immense progress has been made by CDC in having many CEHRT products
     move to production for eCR using the standards currently listed in the regulation. Rolling
     back these standards-based requirements risks degrading the efficiency gains already
     achieved, introducing variability in implementations, and undermining the automation that
     eCR was designed to enable. While many public health agencies (PHA) may not yet be able
     to currently receive FHIR, functionality at APHL allows CEHRT to send either CDA or FHIR

                                                                       Privileged and Confidential

Thomas Keane, MD, MBA and Robert F. Kennedy, Jr.
Page 4
February 27, 2026

     and convert it to CDA if needed for the PHA. We do not agree that there is an undue or large
     burden on CEHRT for eCR implementation given this capability and the wide adoption to
     date. If eCR is moved to a functional requirement only, we see undue burden being put on
     PHAs as we would have to be able to accept, validate, and process multiple non-
     standardized formats. This would reduce operational efficiency, increase manual review
     and reconciliation, and divert limited public health resources away from surveillance and
     response activities. The loss of clear standards will result in more providers reverting to or
     continuing to use fax-based reporting, further eroding efficiency and reversing progress
     toward timely, automated public health reporting. We encourage ASTP to include the CDA
     and FHIR standards to provide options for CEHRT during the transition to FHIR as proposed
     in HTI-2. This approach lowers burden while still ensuring interoperability.



     Recommendations for § 170.315(f)(5):

         1. We disagree with revising eCR criterion to functional requirement only. The
            language currently written in the HTI-5 does not require EHRs to use FHIR but rather
            transitions them towards a functional requirement versus pointing to a specific
            standard. We recommend preserving HTI-1 standards-based requirements as
            defined in § 170.315(f)(5)(ii) and encourage ASTP to include the CDA and FHIR
            standards to provide options for CEHRT during the transition to FHIR as proposed in
            HTI-2.

         2. We disagree with the implementation timeframe - this is not feasible. This proposal
            assumes that FHIR is imminent and widespread, which is not accurate in
            California. This proposal assumes EHRs would grant access to public health
            agencies through FHIR-based APIs which are not currently established. Moving to
            FHIR for eCR is a significant lift for EHR vendors and public health agencies,
            especially within a one-year timeline. As of January 2026, zero EHR vendors have
            sent FHIR eICR messages in California. Funding for public health agencies will be
            required to build capacity for FHIR based queries. While we support the move to
            FHIR, the final rule must provide funding and adequate time for full FHIR
            implementation and should persist the choice of HL7 FHIR eCR IG or HL7 CDA eCR
            IG by EHR vendors until 2029.

         3. We disagree with the proposal to remove health IT certification requirements. CDPH
            supports HL7 interoperability standards (e.g., HL7 CDA, FHIR) and expresses


                                                                       Privileged and Confidential

Thomas Keane, MD, MBA and Robert F. Kennedy, Jr.
Page 5
February 27, 2026

            concern that removing EHR certification requirements will jeopardize consistent
            ECR implementation across EHRs.

         4. We note that the exchange of CDA-based documents is a significant contributor to
            both patient care and public health reporting today. Where CDA-based standards
            are widely implemented, as they are for transitions of care and electronic case
            reporting, we recommend retention of these requirements within HIT certification
            criteria. We strongly support the application of FHIR-based standards for
            functionality such as case reporting, however we note that a significant investment
            of resources within public health agencies will be required to both develop FHIR-
            based case reporting capabilities as well as the transition from the large number of
            existing CDA-based case reporting integrations in place today. We would support
            the addition of an expiration date for CDA-based exchanges as part of the transition
            to FHIR-based exchange provided that such a transition is based on a realistic
            timeframe and is accompanied by the necessary resources for public health to
            develop and implement their FHIR-based capabilities.

         5. Electronic case reporting has proven to be critical to the detection of and effective
            response to communicable diseases impacting the population. While the CDA-
            based case reporting standard has been widely adopted and implemented, the
            utilization of FHIR-based standards for both initial reporting as well as improved
            access to additional case-related data is of significant interest to the public health
            community. We strongly support the retention of standards-based criteria for case
            reporting. Furthermore, as noted above, past experience has demonstrated that the
            lack of clear, standards-based expectations breeds a large number of variant
            approaches which become a burden on HIT vendors serving both public health and
            healthcare providers. The use of standards-based solutions provides both sides of
            the exchange with a common goal, simplifying the long-term implementation and
            maintenance of electronic integrations with the long-term resource savings
            outweighing the initial investment in supporting interoperability standards.




     Questions 8–10. Transmission to Public Health – Antimicrobial Use and Resistance
     Reporting (AUR)




                                                                      Privileged and Confidential

Thomas Keane, MD, MBA and Robert F. Kennedy, Jr.
Page 6
February 27, 2026

     The draft rule proposes to revise the AUR criterion requirements to be functional only and
     remove the reference to the standard in § 170.205(r)(1) as of the effective date of a
     subsequent final rule. AUR reporting is critical to antimicrobial stewardship and resistance
     monitoring. Standardized electronic AUR data submission enables effective statewide and
     national surveillance and supports targeted intervention strategies.

     Recommendations for § 170.315(f)(6):

         2. Retain or clarify certification criteria that require support for electronic AUR
            reporting (e.g., through standardized FHIR profiles).

         3. Ensure that deregulatory revisions do not inadvertently remove essential data
            elements required for antimicrobial use/resistance surveillance.

         4. Encourage coordination with CDC’s AUR module and state registry requirements.




     Questions 11–12. Transmission to Public Health – Health Survey Reporting

     The draft rule proposes to remove the “transmission to public health agencies—health
     care surveys” certification criterion in § 170.315(f)(7) with an effective date of January 1,
     2027. Electronic reporting for health care surveys (e.g., facility questionnaires and
     standardized public health surveys) contributes to public health situational awareness and
     planning. CDPH urges that any changes preserve the ability to capture, transmit, and
     receive standardized survey data with minimal burden on reporters while maximizing
     usability for public health analytics.

     CDPH uses the data in health care surveys for public health planning, evaluating care
     disparities, tracking trends, and meeting federal quality reporting requirements (like
     Promoting Interoperability), to understand their unique health system, identify regional
     issues, and improve care quality and access for California residents. Given the value we
     see from these surveys, we have concerns about the proposal to remove them from the
     rule. We see in your comments that the rationale is based on reducing burden,
     encouraging use of FHIR, and that these requirements have been met for a long time.
     Given the value of this data, we propose a better solution is to add a FHIR standard in
     addition to the current CDA available. We often must support a current and a replacement
     standard simultaneously to help raise all boats. In addition, we have concerns that if this
     criterion is removed, that new CEHRT will not have to be able to submit this important

                                                                        Privileged and Confidential

Thomas Keane, MD, MBA and Robert F. Kennedy, Jr.
Page 7
February 27, 2026

     data. If this capability is already in place and well established with most CEHRT vendors
     today then we do not see much burden in keeping it.

     Recommendations for § 170.315(f)(7):

         •   Maintain certification to support survey reporting use cases relevant to public
             health surveillance.
         •   Ensure interoperability criteria facilitate structured data collection and reduce
             reliance on manual processes.



     Question 13. AI Transparency and Access

     The draft rule proposes to “revise the § 171.102 “access” and “use” definitions to
     emphasize that the definitions include automated means of access, exchange, or use of
     EHI—including, without limitation, autonomous AI systems” to promote the goals of
     Executive Order 14110 to ““safe, secure, and trustworthy development and use of artificial
     intelligence.” Specifically, the draft rule proposes “propose to remove all requirements
     related to source attributes in § 170.315(b)(11)(iv), their access in § 170.315(b)(11)(v)(A),
     and their modification in § 170.315(b)(11)(v)(B), as well as requirements to manage risks
     related to the development and deployment of predictive DSIs supplied by health IT
     developers as part of their product in § 170.315(b)(11)(vi).” CDPH acknowledges the
     proposed emphasis on fostering innovation through AI integration and FHIR-forward APIs.
     However, transparency around AI algorithm behavior and decision logic (e.g., model cards
     and performance metrics) remains essential to establishing and maintaining public trust
     when AI influences clinical decisions or public health outcomes. Investment in AI
     transparency enables validation, mitigates bias, and supports public health trust.



     Model Card Transparency Requirement Removal (Page 60973).

     CDPH is concerned about the proposed removal of AI "model card" transparency
     requirements from the Decision Support Interventions certification criterion (§
     170.315(b)(11)). While ASTP states there is no publicly available evidence that these
     transparency requirements have led to positive impacts on patient care, the requirements
     have only been in effect since January 2025, insufficient time to evaluate their impact.
     State and local public health agencies increasingly rely on predictive algorithms and AI-
     enabled tools for disease surveillance, outbreak detection, resource allocation, and


                                                                        Privileged and Confidential

Thomas Keane, MD, MBA and Robert F. Kennedy, Jr.
Page 8
February 27, 2026

     population health management. Removing transparency requirements before alternative
     oversight mechanisms are established creates a gap in accountability precisely as AI
     adoption accelerates across the health system. We recommend that ASTP retain the
     model card requirements. Additionally, we are struggling to understand how the removal of
     these requirements aligns with the administration's stated goal of advancing "AI-enabled
     interoperability solutions," given that responsible AI deployment typically depends on
     understanding model provenance, training data characteristics, and performance
     limitations—which is the information contained in the current model card format.



     Recommendations:

         •   Require transparent metadata for AI components used for data exchange,
             interpretation, and public health reporting.
         •   Include documentation obligations for algorithm behavior relevant to regulated
             public health use cases.
         •   Ensure that deregulation does not eliminate meaningful oversight of AI tools that
             generate or facilitate public health information.



     To ensure responsible and informed adoption of AI-enabled systems and processes,
     CDPH recommends all solutions under consideration must include comprehensive
     documentation that enables evaluators to understand the system’s design, functionality,
     and limitations. This documentation shall:

         •   Describe Purpose and Intended Use
             Clearly articulate the system’s objectives, expected applications, and any known
             constraints or prohibited uses.

         •   Provide Development and Data Context
             Include information on the data sources, preparation methods, and key
             assumptions that influenced system development, as well as any relevant training
             or tuning processes.

         •   Detail Performance and Limitations
             Present measurable performance indicators across relevant scenarios, including
             accuracy, reliability, and known failure modes, along with any conditions under



                                                                      Privileged and Confidential

Thomas Keane, MD, MBA and Robert F. Kennedy, Jr.
Page 9
February 27, 2026

             which performance may degrade. Ideally include performance in third party
             evaluations.

         •   Address Risk and Impact Considerations
             Identify potential risks related to fairness, bias, security, and misuse, and outline
             mitigation strategies implemented to reduce these risks to ensure all patients
             receive the best possible care.

         •   Enable Accountability and Ongoing Oversight
             Include versioning, update history, and points of contact for inquiries or issue
             reporting, ensuring transparency throughout the system’s lifecycle.

     This documentation or analysis must be provided in a structured, accessible format that
     supports technical review, compliance assessment, and informed decision-making.
     Solutions lacking sufficient transparency will not be considered for procurement or
     deployment.




     Question 14. USCDI Considerations

     In June 2025, ONC published the USCDI v3.1, which removes or updates from USCDI v3
     the data elements for Sex, Sexual Orientation, and Gender Identity in the Patient
     Demographics/Information Data Class. The draft rule proposes to “adopt USCDI v3.1 in
     § 170.213(a) and incorporate it by reference in § 170.299.” CDPH disagrees with adopting
     USCDI v3.1 and recommends that ASTP/ONC adopt the most recent published version of
     USCDI, USCDI v6.



     Successive USCDI versions have added data elements of significant value to public
     health, many of which are included in USCDI v6 and not in USCDI v3.1. These data
     elements include: facility address, unique device identifiers, portable medical orders,
     family health history, care plans, date of onset, expanded orders data classes, emergency
     department and operative notes, immunization lot numbers, medication route of
     administration, interpreter need, and provenance. CDPH contends that adopting USCDI
     v3.1 would roll back support for key patient demographic data which are essential for
     monitoring disparities and supporting patient-centered care. Removing these data


                                                                         Privileged and Confidential

Thomas Keane, MD, MBA and Robert F. Kennedy, Jr.
Page 10
February 27, 2026

     elements risks inconsistencies in reporting and an inability to properly assess public
     health risk and outcomes.

     Given that major EHR vendors often support data elements beyond the minimum required
     by regulation, CDPH believes that adoption of a more current USCDI version would not
     necessarily impose undue burden and would better align certification with real-world
     capabilities. Therefore, CDPH encourages ASTP to adopt USCDI v6 to ensure certification
     keeps pace with current standards development and public health need accompanied by a
     clear remediation pathway to restore structured Sexual Orientation Gender Identity (SOGI)
     data elements within the national interoperability framework.



     Question 15. All Data Request API

     The “All Data Request” (ADR) API is foundational to comprehensive data access for
     authorized use cases. CDPH supports deregulatory initiatives that streamline API access
     while ensuring privacy, security, and public health utility.

     Recommendations:

         •   Retain requirements for ADR APIs that support standardized retrieval of clinical
             information necessary for public health reporting and analysis.

         •   Clarify policies that balance deregulatory objectives with necessary protections for
             sensitive data when accessed via ADR.



     Question 16. Immunization Insight Conditions

     The draft rule proposes to remove immunization measures from the reporting
     requirements for health IT developers under § 170.407(a)(3). Immunization Insight
     Conditions (IIC) reporting is essential for vaccine uptake monitoring and outbreak
     response. CDPH supports interoperable reporting of immunization data and associated
     insights to public health systems. Removing criteria for electronic immunization reporting
     could lead to vendors and providers adopting multiple, inconsistent standards. This will
     negatively impact immunization information systems by reducing interoperability and
     increasing costs associated with supporting multiple standards. Lack of standards will
     also make it more challenging to aggregate and analyze data across health systems,
     undermining public health surveillance and vaccine program effectiveness.


                                                                      Privileged and Confidential

Thomas Keane, MD, MBA and Robert F. Kennedy, Jr.
Page 11
February 27, 2026

     Recommendations:

         •   Preserve certification criteria that enable structured immunization reporting
             consistent with state and federal requirements (e.g., IIS interfaces).

         •   Ensure deregulatory changes do not diminish data quality, timeliness, or
             standardized reporting for immunizations and associated insights.




     Unfunded Mandates Reform Act of 1995

     While we appreciate efforts to reduce burden and applaud ASTP for looking to find ways to
     do so, we are concerned that this proposed rule does impose unfunded mandates on
     state, territorial, local and tribal governments and the private sector. When standards are
     no longer required in the rule it can result in CEHRT vendors using any number of standards
     (from SDOs or propriety) that result in public health authorities having to support them all.
     This does create a cost burden in terms of potential new development and in operational
     costs for supporting multiple standards. At most, we feel no more than two standards
     should be supported simultaneously (the current most adopted standard and the one seen
     as its successor). We also stress again that if new CEHRT is created and standards are not
     in place in the rule, then those vendors of new CEHRT could do any number of things to
     meet a functional requirement. We also have concerns about the unfunded costs of
     removing criteria like the cancer registry reporting. If CEHRT vendors and providers are not
     incentivized or required to report by federal rules, and a state still has a general reporting
     requirement (not electronic reporting), this potentially pushes a provider back to paper and
     faxing. If a CEHRT doesn’t have to support something like cancer reporting, they likely will
     not or charge providers additional money to have that capability.

     Conclusion

     CDPH supports the overarching goals of reducing unnecessary burden and advancing
     interoperability through the promotion of utilizing data exchange standards and Health IT
     certification measures to maintain trust in the quality of data exchanged. The ability to
     transmit high-quality, standardized data for cancer registries, ECR, AUR, health surveys,
     immunization insights, and other public health reporting must be maintained or enhanced.
     We recommend that any modification to certification criteria or information-blocking



                                                                       Privileged and Confidential

Thomas Keane, MD, MBA and Robert F. Kennedy, Jr.
Page 12
February 27, 2026

     provisions be accompanied by clear measures demonstrating that public health data
     exchange requirements will remain robust, interoperable, and fit for real-world use.




     Sincerely,




     Erica Pan, MD, MPH, FIDSA, FAAP
     California State Public Health Officer
     Director, Public Health




                                                                    Privileged and Confidential
