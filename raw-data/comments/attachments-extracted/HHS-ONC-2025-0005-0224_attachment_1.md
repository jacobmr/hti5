# HHS-ONC-2025-0005-0224 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0224/attachment_1.pdf

---

HTI-5: A Patient Safety Analysis
Comments and Recommendations on the Health Data, Technology, and
Interoperability: ASTP/ONC Deregulatory Actions to Unleash Prosperity
Proposed Rule​

Authors
Jacob Reider, MD
Rollin (Terry) Fairbanks, MD
Raj Ratwani, PhD
Matthew B. Weinger, MD, MS
Jack Neil, MD​
Julian M. Goldman, MD​
Ramya Mehta, DNP, RN, CPHQ, NEA-BC, LSSBB​
Ivana Lichtscheidl

February 2026

Executive Summary
The HTI-5 proposed rule represents the most significant restructuring of the ONC Health IT Certification
Program since its inception. The rule proposes to remove 34 of 60 certification criteria and revise 7 others,
fundamentally shifting the program's focus from product certification to interoperability validation. This
analysis supports some elements of HTI-5 while raising serious concerns due to the proposed removal of the
patient safety requirements. The proposed rule's core rationale, that capabilities are "widespread" and
therefore no longer need certification, represents a logical fallacy that no other federal safety agency has
ever endorsed. We do not remove seatbelt requirements because cars have seatbelts. We do not eliminate
pharmaceutical manufacturing standards because drugs are safe. The requirement is what made them so.
We respectfully urge ONC to retain certification criteria that address patient safety, particularly those
responsive to the Institute of Medicine's 2011 findings on health IT-related patient harm, those that preserve
enforcement mechanisms proven effective in cases like eClinicalWorks and Practice Fusion, and those that
ensure security controls necessary to prevent wrong-patient errors.

Eight Specific Recommendations

1. Retain Safety-Enhanced Design Requirements (Criterion 170.315(g)(3) Safety-Enhanced Design)
   Poorly designed EHRs continue to harm patients.This criterion was ONC's direct response to the IOM's finding
   that "poor usability is one of the single greatest threats to patient safety." It requires formal user-centered
   design processes and usability testing for safety-critical functions. Recommendation: Retain the
   Safety-Enhanced Design criterion in full. The IOM's findings have not been superseded. In fact, these findings
   are of greater importance since the 21st Century Cures Act subsequently carved EHRs out of the definition
   of “medical device”1 thereby removing safety oversight for EHRs.
2. Retain Quality Management System Requirements (Criterion 170.315(g)(4) Quality Management System)
   Systematic quality and risk management processes are foundational to safe health IT development. The IOM
   specifically recommended these processes. Since health IT systems do not fall under FDA regulatory purview,
   elimination of existing QMS requirements can be expected to lead to erosion of safe health IT systems as
   they are updated to meet evolving technology requirements and user needs. Recommendation: Retain the
   QMS requirement to ensure vendors maintain systematic approaches to product safety.

1
21st Century Cures Act, Section 3060(a), Pub. L. 114–255, December 13, 2016.
HTI-5 Recommendations​

3. Retain Audit Log and Tamper-Resistance Requirements (Criteria 170.315(d)(2),(d)(3),(d)(10))
   Audit trails serve multiple safety functions: investigating errors, detecting fraud, supporting quality
   improvement, and enabling enforcement. The eClinicalWorks case was prosecuted in part because of audit
   log failures. Removing these requirements eliminates a proven enforcement mechanism. Recommendation:
   Retain audit log requirements. If consolidation is desired, consolidate into a single comprehensive audit
   criterion rather than eliminating the function entirely.
4. Retain Authentication and Access Control Requirements (Criteria 170.315(d)(1), (d)(13))
   Wrong-patient errors often cause serious patient harm. Authentication and access controls are the first line
   of defense. While HIPAA requires security measures, certification provides verification that they are
   implemented. Recommendation: Retain authentication requirements, including multi-factor authentication,
   to prevent wrong-patient errors.
5. Retain Clinical Decision Support Source Attribute Requirements (Criteria: 170.315(b)(11))
   The source attribute requirements, particularly funding source disclosure, are essential to enable continuous
   quality improvement by updating the evidence basis for clinical decision support, and to improve
   transparency of potential pharmaceutical industry bias of clinical decision support. The Practice Fusion case
   demonstrated the real-world harm that could occur when CDS funding is not transparent. Recommendation:
   Retain all source attribute requirements, especially those requiring disclosure of who developed the
   intervention, who funded it, and the bibliographic basis for clinical recommendations.
6. Reject the "Widespread Adoption" Rationale
   The argument that capabilities are widespread and therefore no longer need certification inverts cause and
   effect. No other federal safety agency has made this argument. ONC should not be the first.
   Recommendation: Explicitly reject and remove any reference to the "widespread adoption" rationale for
   removing safety requirements. Acknowledge that widespread adoption is the result of certification, not a
   reason to eliminate it.
7. Distinguish System/Tool Interoperability from Intrinsic Safety
   PIQI and similar frameworks can validate data quality at exchange. They cannot validate internal product
   safety. Both matter. They are complementary, not substitutes. Recommendation: Maintain certification
   criteria that address internal product safety (usability, CDS integrity, audit logging) even as the program
   shifts focus towards interoperability standards.
8. Preserve Enforcement Mechanisms
   The False Claims Act theory used in eClinicalWorks depends on certification requirements existing. Removing
   requirements eliminates this enforcement tool. Recommendation: Before removing any certification
   criterion, explicitly analyze whether removal eliminates enforcement mechanisms that have proven
   effective.

Rationale

We offer these comments not as a critic of ONC, but as those who understand why these regulations exist.
They were not written to burden vendors but to promote adoption by assisting them in ensuring that their
products are safe and effective. ONC wrote these because patients were being harmed; There had been no
regulatory oversight of health IT before ONC's certification program, a shortcoming of federal infrastructure
recognized by Congress in its statutory creation of ONC through the HITECH Act of 2009 (P.L. 111-5, Title
XIII) and the requirement that certification standards be established and enforced.2 ONC was formed based

2
​ Health Information Technology for Economic and Clinical Health Act (HITECH Act), P.L. 111-5, Title XIII, enacted February 17, 2009.
The HITECH Act legislatively mandated the Office of the National Coordinator for Health Information Technology to promote the
2
HTI-5 Recommendations​

on an Executive Order during a Republican administration, and for most of its existence, ONC has worked on
matters that enjoyed bipartisan support. This analysis attempts to honor both realities while advocating for
the preservation of essential safety protections.

What HTI-5 gets right …
Before addressing our concerns, it is important to acknowledge what HTI-5 does well. The rule reflects
thoughtful analysis in several areas:

1.  Focus on Interoperability Standards
    HTI-5's emphasis on FHIR-based APIs as the foundation for health information exchange is sound policy. The
    shift from prescriptive feature requirements to standards-based data exchange reflects the maturation of
    the health IT market and aligns with how modern software systems are built.
2.  Streamlining Redundant Requirements
    Some certification criteria have become redundant. Where requirements duplicate HIPAA obligations or
    other federal mandates, consolidation makes sense. Reducing duplicative compliance burdens without
    diminishing protections is a legitimate policy goal.
3.  Information Blocking Enforcement
    HTI-5's strengthening of information blocking enforcement is welcome. Closing loopholes that vendors have
    exploited to restrict data access serves patients & families and promotes competition. The focus on
    preventing anticompetitive behavior through technical design choices is appropriate.
    We have firsthand experience with the value of these provisions. We have used existing Cures Act
    information blocking rules to gain FHIR access to a hospital network that was blocking retrieval of encounter
    documentation needed for billing automation. That access saves time, reduces costs, and improves
    accuracy. Information blocking happens at both the vendor level and the facility level, and both need to be
    held accountable. HTI-5 goes further in the right direction: it explicitly includes “agentic AI” and “RPA” in
    the information blocking definitions and tightens the Manner Exception so developers and facilities can no
    longer hide behind adhesion contracts or unconscionable terms.
4.  AI and Emerging Technology Framework
    The rule's recognition of AI-enabled systems as participants in health data ecosystems is forward-looking.
    Establishing frameworks now, before the technology outpaces regulation, demonstrates prudent planning.
5.  SVAP and Voluntary Standards Advancement
    The Standards Version Advancement Process provides flexibility for developers to adopt newer standards
    without waiting for formal rulemaking. This approach balances regulatory stability with technological
    progress.
6.  Burden Reduction for Developers
    We endorse regulatory revisions that reduce unnecessary administrative burden. But we question the
    estimated savings of HTI-5 of 1.4 million hours in the first year and $1.53 billion over time. Elements that
    are already in place will not require re-development, re-testing, or re-certification. A claim of such
    magnitude is not supported by any evidence presented in the proposed rule.
    ​
    ​
    However … ​

        creation of a national health information technology infrastructure. See: Congress.gov, "HITECH Act Overview,"
        https://www.congress.gov/crs_external_products/IF/HTML/IF12352.web.html
                                                                        3

    HTI-5 Recommendations​

​
Stakeholders have pointed to Executive Order 14192 (Jan 31, 2025) — the Administration’s “10-for-1”
deregulation initiative — as a motivator for HTI-5’s deregulatory posture. If that is influencing policy choices
here, it should be addressed directly: EO 14192 is a regulatory budgeting construct, not an evidence-based
framework for deciding which health IT safety requirements should be retained or removed.
Importantly, OMB’s implementing guidance treats qualifying deregulatory actions as those that repeal or
revise existing requirements; it does not require elimination of an entire regulatory program to “count.”
But that distinction is precisely the problem in the context of patient safety: the accounting mechanism can
incentivize selective trimming of “countable” requirements even when the removed items are safety-critical
and the retained shell of the rule remains intact.
Even more directly, OMB’s guidance emphasizes that offsetting costs to comply with EO 14192 should not
serve as the basis or rationale for issuing a deregulatory action. HTI-5’s changes should therefore stand (or
fall) on their own merits: Demonstrated evidence that removing specific certification criteria does not
degrade safety, quality, security, or accountability.

The fallacy of the “widespread adoption” rationale
Despite these positive elements, HTI-5's central rationale is fundamentally flawed. The current rule
repeatedly justifies removing certification criteria because capabilities are "now widespread in certified
health IT." This argument inverts cause and effect. These capabilities are widespread because ONC required
them. Removing the requirement does not preserve the outcome. Instead, it opens the door to future
products and upgrades to existing products without these protections. In fact, no other federal agency
makes this argument … Every car has still headlights … and seatbelts (Table 1). Every pharmaceutical
manufacturer follows Good Manufacturing Practices (GMP). No federal agency has ever argued that
widespread compliance justifies eliminating an effective safety related requirement.
Table 1. Examples of Federal Safety Regulations in Other Industries/Contexts
Regulatory Target Responsible Federal Citation Adopted Years in Effect 100% Proposed
Agency Compliance Removal?

Vehicle headlights NHTSA 49 CFR 571.108 1968 57 Yes Never

Seatbelts NHTSA 49 CFR 571.208 1968 57 Yes Never

Safe drinking water US EPA 40 CFR Part 141 1974 51 Yes Never

Pharmaceutical GMP FDA 21 CFR Part 211 1978 47 Yes Never

Milk pasteurization FDA 21 CFR 1240.61 1987 38 Yes Never

Meat HACCP FDA 9 CFR Part 417 1996 29 Yes Never

Allergen labeling FDA 21 U.S.C. 343(w) 2004 21 Yes Never

Medical device safety FDA 21 CFR 820.30 1996 39 Yes Never
(Design Controls)

The health IT industry should not be the testing ground for the theory that widespread adoption means we
can or should eliminate regulations that protect millions of people from harm. Moreover, ONC has not
provided data demonstrating that these capabilities are uniformly implemented across all practice sizes,
specialties, and health care settings. "Widespread" among large health systems with sophisticated IT
4
HTI-5 Recommendations​

departments is not the same as "widespread" among small practices, rural clinics, behavioral health
providers, or the next generation of AI-powered health applications. We respectfully ask: Where is the
evidence that supports this claim? And even if it was true today, what mechanism ensures it will remain true
tomorrow if the requirements are removed?

The "floor not ceiling" principle
The 2012 Edition Final Rule established that certification provides "a floor not a ceiling" – i.e., minimum
requirements that all products must meet, while encouraging innovation above that baseline:
"Certification provides assurance that health IT has the capabilities needed to support
providers... a floor not a ceiling." (77 FR 54167, 2012 Edition Final Rule)
HTI-5 proposes to remove this essential safety floor. Without minimum requirements, there is no baseline
and no assurance of safety or auditability. New entrants can skip safety investments that established vendors
made.

Why these certification criteria were created
The certification criteria proposed for removal were not arbitrary bureaucratic requirements. Many were
direct responses to documented patient harm. In the wake of extensive case reports and studies, and
appreciable concern from multiple stakeholders, in 2011, the Institute of Medicine released "Health IT and
Patient Safety: Building Safer Systems for Better Care."3 The report found that "Poor usability is one of the
single greatest threats to patient safety." The IOM report documented that poorly designed EHRs harm
patients through many pathways including:​

    ●​   Medication errors from confusing interfaces
    ●​   Wrong-patient errors when authentication and selection fail
    ●​   Cognitive overload from poor information design
    ●​   Missed alerts due to alert fatigue from poorly calibrated systems
    ●​   Inability to investigate errors when audit trails are inadequate

The IOM report’s Recommendation 6 was explicit: "The Secretary of HHS should specify the quality and risk
management process requirements that health IT vendors must adopt, with a particular focus on human
factors, safety culture, and usability." ONC did exactly this (see Appendix A) … And now HTI-5 proposes to
undo it. ONC created certification criteria in direct response to specific IOM recommendations (Table 2).
Table 2. How the 2011 IOM report’s recommendations of directly led to the ONC safety criteria
IOM Recommendation… ONC Thus Created… Yet, HTI-5 Proposes

    Require usability testing with human               170.315(g)(3) Safety-Enhanced Design                          REMOVAL
    factors focus

    Quality and risk management processes              170.315(g)(4) Quality Management System                       REMOVAL
    (including use-related risk analysis)

    Mechanism to report health IT-related              170.315(d)(2) Auditable Events and                            REMOVAL
    deaths/injuries                                    Tamper-Resistance

    Enable investigation of patient safety             170.315(d)(3) Audit Report(s)                                 REMOVAL
    events                                                                                                           REMOVAL

3
​ Institute of Medicine. Health IT and Patient Safety: Building Safer Systems for Better Care. Washington, DC: The National Academies
Press, 2011. https://doi.org/10.17226/13269
5
HTI-5 Recommendations​

    IOM Recommendation…                          ONC Thus Created…                                Yet, HTI-5 Proposes

                                                 170.315(d)(10) Auditing Actions on Health
                                                 Information

What Safety-Enhanced Design actually requires
The 170.315(g)(3) criterion requires:
1.​ Formal User-Centered Design (UCD) process documented and following established national
(AAMI/ANSI HE74) and international (e.g., IEC 62366) standards
2.​ Summative usability testing with commercial ready software under realistic simulated use conditions
with a reasonable sample of representative users.
3.​ Testing of high risk (safety-critical) functions including:
●​ Computerized provider order entry (CPOE) for medications, labs, and imaging
●​ Drug-drug and drug-allergy interaction checks
●​ Clinical decision support
●​ Clinical information reconciliation
●​ Electronic prescribing
4.​ Public reporting of usability test results

The Safety Enhanced Design certification requirement is straightforward: It requires developers to
objectively test their systems’ safety relevant features, to report users’ ability to perform the necessary
tasks, and the frequency of use errors with potential safety implications (see Appendix B for access to an
example test report). ​

This criterion exists because poor usability kills patients. HTI-5 proposes to remove these guardrails entirely.
In fact, this type of use-related validation testing is standard practice for all FDA regulated devices.
Similarly, the European Union's Medical Device Regulation (EU MDR 2017/745) similarly requires usability
engineering (also relying on IEC 62366, an internationally accepted standard which specifies processes for
analyzing, developing, and evaluating the usability of medical devices as it relates to safety).4 Health
software sold in the EU must demonstrate compliance with these human factors requirements. The same is
true in other major markets including Canada, Japan, and Australia. Most mature EHR companies already do
some version of this testing. Removing this criterion will allow all new entrants and new products to skip
these essential steps. In light of this, the need for clear usability testing is enhanced in 2026, not
diminished!

Security = Safety
HTI-5 proposes to remove all 14 privacy and security certification criteria under 170.315(d). The rationale is
that HIPAA independently requires these protections. This rationale misunderstands the relationship
between security and safety in health IT. Security failures don't just compromise privacy but can also cause
patient harm as shown in Table 3.
Table 3. Security failures can readily cause patient harm
Statistic Source

    50 per 100,000 electronic notes are entered in the wrong patient record                          Published studies

4
​IEC 62366-1:2015 specifies a process for manufacturers to analyze, specify, develop and evaluate the usability of a
medical device as it relates to safety. The European Union Medical Device Regulation (EU MDR 2017/745) requires
compliance with human factors and usability engineering standards. See: https://www.iso.org/standard/63179.html and
https://makrocare.com/blog/differences-between-us-fda-and-eu-mdr-usability-studies-requirements/
6
HTI-5 Recommendations​

    Statistic                                                                                         Source

    24.4% of patient identification errors reach the patient (wrong medication, wrong test,           ASHRM analysis
    wrong procedure)

    50% patient matching accuracy between organizations sharing health information                    Industry research

    10% average duplicate record rate in hospital systems                                             AHIMA

For one specific example, a case described by Dr. Jason Adelman, an elderly woman admitted with an
irregular heartbeat and bronchitis was accidentally given a dose of methadone intended for a 35-year-old
male patient. A resident physician inadvertently clicked on the wrong patient in the electronic health record
(EHR), a pharmacist signed off on the order, and a nurse-in-training administered the medication. The
patient was found unresponsive several hours later, intubated, and transferred to the intensive care unit
(ICU).5 This is not a privacy breach. This is a patient safety event caused by inadequate authentication and
access controls.

HIPAA does not address most safety issues (see Appendix C)
ONC argues that HIPAA independently requires these protections. But HIPAA fails to provide:
1.​ Certification verification that security controls are actually implemented
2.​ False Claims Act enforcement when they are not
3.​ Usability requirements that prevent errors from happening in the first place
4.​ Public transparency about product capabilities

HIPAA sets a legal obligation. Certification verifies compliance. Removing certification removes the
verification mechanism. Furthermore, health care organizations selecting EHR products rely on certification
as evidence that security controls are in place. Without certification, how does a small practice, a rural
hospital, or a community health center verify that their EHR vendor has implemented adequate security?
They lack the technical expertise to conduct their own security audits. Certification provided that
assurance. Removing it shifts the burden of verification to organizations least equipped to perform it, while
simultaneously making HIPAA compliance harder to demonstrate.
Some have argued that the privacy and security certification criteria are redundant with HIPAA and that
certification may even have created a false sense of HIPAA compliance. We disagree. Certification gives the
buyer objective, independent assurance that the product they are purchasing will support their HIPAA
compliance obligations without requiring them to do extensive additional verification. Absent this
certification requirement, organizations have no standardized way to evaluate whether a vendor’s product
actually implements the required security controls. The practical alternative is a return to the era of vendor
security questionnaires—spreadsheets with dozens of tabs that sophisticated organizations laboriously review
and that unsophisticated organizations skip entirely, potentially risking non-compliance with HIPAA because
they assumed something about their product that was simply not valid. Certification eliminated this
inefficiency. Removing it brings it back.
If there is concern that there is not sufficient alignment with the HIPAA Security standards, we would
encourage ASTP/ONC to improve the criteria and make them more aligned, not to remove them. HHS is
responsible for the HIPAA Rules and the Certification Rules making alignment a matter of agency policy and

5
​The Joint Commission. "One Catastrophic Error Led to a Career Preventing Wrong Patient Ordering Errors and
Improving Health IT Safety." Dateline TJC Blog, February 2023. Available at:
https://www.jointcommission.org/resources/news-and-multimedia/blogs/dateline-tjc/2023/02/one-catastrophic-error-led-t
o-a-career/. See also: Adelman JS, et al. "Understanding and Preventing Wrong-Patient Electronic Orders: A
Randomized Controlled Trial." Journal of the American Medical Informatics Association, 2013;20(2):305-10.
7
HTI-5 Recommendations​

not a complex process. We note that we understand ASTP/ONC is considering modifying the certification
rule again in a proposed HTI-6 to include specific security requirements for specific modules, i.e., “fit for
purpose” and “use case specific.” This does not address our concerns for two reasons. First, HTI-5
requirements would remove criteria immediately, but HTI-6 requirements would not be proposed, finalized,
and implemented before 2029, at the earliest, leaving a 2-year gap in protections. Second, the need for
security features, such as authentication and audit, are not sufficiently addressed in particular
functionalities. For example, audit requirements should be required for all EHR functionality, not just for
patient portals.

ONC’s certification requirements have been essential to punishing bad actors
Certification requirements create an enforcement mechanism that has proven effective. Removing
certification criteria eliminates this mechanism. Appendix D offers two case studies in which successful
enforcement against vendors who tried to circumvent ONC’s safety certification criteria. The first case,
(eClinicalworks, 2017) demonstrates how, if HTI-5 removes the certification requirements, there would be
nothing to falsely certify, and thus an inability to use the False Claims Act to punish bad actors. The second
case (Practice Fusion, 2020), shows the importance of full disclosure of conflicts of interest in the
presentation of clinical advice by vendor’s decision support systems. In the Practice Fusion case, the vendor
accepted pharmaceutical funding to push specific drugs through CDS alerts without any disclosure of this
obvious conflict of interest.

PIQI is not a replacement for the certification requirements
Some have suggested that the PIQI (Patient Information Quality Improvement) framework can replace
certification's quality assurance function. This argument reflects a fundamental misunderstanding of what
PIQI does and does not test. PIQI is an open framework developed by Clinical Architecture and Leavitt
Partners, currently advancing through HL7 balloting.6 It measures data quality at the point of exchange
across four dimensions: 1) Availability (Is the data there? Are required fields populated?); 2) Accuracy​ (Is the
data valid?); 3) Conformity (Is the data in a correct standard format); and 4) Plausibility (Does the data
make sense?). PIQI generates a scorecard for data leaving one system before it might be consumed by
another. While this is indeed important, PIQI does not evaluate any of the other attributes we have been
discussing. PIQI is valuable for what it does, ensuring that exchanged data is usable. But it cannot replace
certification's role in ensuring that the product itself is safe to use (see Appendix E). Moreover, PIQI could
not have been used to catch the malfeasance of either an eClinicalworks or a Practice Fusion. In summary,
the ONC Certification Requirements and PIQI are complementary. The argument that PIQI replaces
certification is like arguing that emissions testing replaces brake inspections. Both matter. They test
different things.

New entrants to the market would have a competitive advantage … and safety will be at risk
Certification does not just govern today's products; It governs all of tomorrow's products. Without
certification requirements, new market entrants will be able to:​

    -​ Skip safety investments that established vendors have already made
    -​ Undercut established vendors on price
    -​ Harm patients without the rigor of testing and only learn patient safety through trial and error
    -​ Enter the market without demonstrating minimum safety capabilities

Existing HIT vendors have invested significant resources to meet certification requirements. They built and
have enculturated within their organizations: User-centered design processes; Quality management systems;
Usability testing programs; Audit logging infrastructure; and Clinical decision support with proper source

6
​Clinical Architecture and Leavitt Partners. "PIQI Framework - Evaluate and Elevate Patient Data." 2024-2025. Available
at: https://piqiframework.org/
8
HTI-5 Recommendations​

attribution. The certification program embeds 30 years of accumulated knowledge about what makes health
IT safe within the tools and processes that vendors use every day.
This is not an argument for protecting incumbents. It is an argument for a fair playing field. We observe that
certification requirements actually help new entrants: they provide an objective, independent way to prove
that a startup’s product meets the bar. Without certification, purchasing decisions default to track record
and brand, which advantages large, established vendors and disadvantages the very startups and innovators
that a deregulatory agenda should seek to empower. For Safety-Enhanced Design and QMS in particular,
there is no HIPAA equivalent. “The market will handle it” is a bet, not a guarantee—and if that bet is wrong,
there is no fallback. Any company can claim they do usability testing and quality management. Certification
was the only way to verify it independently.
We also note that certification requirements should scale by the risk profile of the product, not the size of
the company building it. A drug dispensing system needs a higher bar than backend billing automation. But
there is a floor everybody should meet. If requirements are tiered by company size instead, larger players
will simply spin off subsidiaries to build under the lower bar. The history of health IT regulation offers ample
evidence of such gaming.
If HTI-5 removes these requirements, competitors who haven't made these investments will be able to enter
the market at lower cost; The vendors who did the right thing are penalized. This is not a theoretical
concern but a market reality – Appendix F provides one case study of a vendor who entered the market
after ONC removed the SNOMED CT compliance requirement for use to create Problem Lists. The vendor
chose the path of least resistance by using ICD-10, and not SNOMED CT, to capture and maintain its internal
Problem List. When it came time to export patient records, the less granular ICD-10 coding could not be
mapped reliably to the more granular SNOMED CT codings attached to patients' problems leading to
diagnoses that were often wrong. Removing certification criteria doesn't eliminate the accumulated safety
and usability knowledge, but it does eliminate the requirement that new entrants learn from it.

Conclusions
HTI-5 represents a thoughtful attempt to modernize the ONC Health IT Certification Program. Its focus on
interoperability standards, burden reduction, and emerging technology frameworks reflects legitimate
policy goals. However, the rule's proposal to remove patient safety requirements based on "widespread
adoption" reflects a logical error that no other federal safety agency has ever endorsed. The requirements
are why capabilities are widespread. Removing them does not preserve the outcome. It opens the door to
future products without these protections.
The certification criteria proposed for removal were not arbitrary. They were responses to documented
patient harm, including the IOM's findings on EHR-related deaths and injuries. They represent 30 years of
accumulated knowledge about what makes health IT safe.
Regulatory decisions affecting certified health IT safety criteria should rise or fall on demonstrable patient
safety evidence, not on regulatory accounting targets, deregulatory ratios, or generalized claims of market
maturity. If a criterion was originally adopted to mitigate a documented safety or security risk, its removal
should require comparable evidence that the risk has been meaningfully reduced or otherwise mitigated
through a superior mechanism. Absent such evidence, removal substitutes policy optics for safety judgment.
We strongly urge ONC to retain the criteria that address patient safety, preserve enforcement mechanisms
that have proven effective, and recognize the potential harm of undisclosed conflicts of interest. The health
IT industry has made remarkable progress. Certification requirements were part of that progress, not
obstacles to it. We should celebrate what worked, not dismantle it.

                                                       9

HTI-5 Recommendations​

About the Authors​

Jacob Reider, has spent 30 years in health information technology, first as a developer building EHR systems,
then as Deputy National Coordinator for Health IT at HHS, where he helped write many of the certification
criteria now proposed for elimination, and today as an investor, adviser and overall supporter of
organizations focused on maximizing health through the use of technology. His perspective is shaped by
direct experience on both sides: He knows the compliance burden these requirements impose on developers,
having worked as one and currently as an advisor to several, and from his leadership role at ONC, he knows
the patient safety rationale that justified that burden.​

Matthew B. Weinger, MD, MS, FAAAS is an internationally recognized physician and human factors engineer
who has been involved in national and international standards work supporting the safety and usability of
medical technology for more than 30 years. He was instrumental in guiding the FDA and the medical device
industry in establishing safety enhanced design processes that now protect millions of patients from use
related harm from medical technology. He currently conducts research and consults on the development of
user interfaces for HIT products and services.

​
Rollin (Terry) Fairbanks, MD, MS is an emergency physician and nationally recognized leader in patient safety
and clinical informatics. He is President and CEO of the MedStar Health National Center for Human Factors
in Healthcare and a Professor of Emergency Medicine at Georgetown University School of Medicine. Dr.
Fairbanks is known for applying human factors engineering principles from high-reliability industries (such as
aviation and nuclear power) to improve safety in health care systems. He has led federally funded research
focused on reducing medical error, improving clinical decision support, and designing safer care processes
across both hospital and prehospital settings.​

Raj M. Ratwani, PhD is a human factors scientist and nationally recognized expert in health information
technology safety and usability. He serves as Director of the MedStar Health National Center for Human
Factors in Healthcare and is a Professor of Emergency Medicine at Georgetown University School of
Medicine.

Dr. Ratwani’s work focuses on reducing technology-related risk in health care by studying how clinicians
interact with electronic health records and other digital tools. His research has informed federal policy and
national safety initiatives aimed at improving the design, implementation, and oversight of health IT
systems.​

Jack Neil, MD is a pediatric anesthesiologist at the Medical University of South Carolina and CEO of HANK.ai,
a health care technology company specializing in revenue cycle automation. He holds a B.S. in Computer
Information Systems and an M.D. from the University of South Carolina. Dr. Neil serves on the APSF
Committee on Technology, the ASA Committee on Electronic Media and Information Technology (where he
founded the AI Working Group), and is a lifetime member of the Society for Technology in Anesthesia.​
​
Julian Goldman, MD is an anesthesiologist and internationally recognized leader in biomedical informatics,
medical device interoperability, and patient safety. He is a Professor of Anaesthesia at Harvard Medical
School and has held leadership roles focused on advancing open standards for medical device data
integration.

                                                      10

HTI-5 Recommendations​

Dr. Goldman has been a driving force behind national and international efforts to improve real-time device
connectivity in clinical environments, helping bridge engineering, informatics, and frontline care to make
complex health care systems safer and more reliable.​
​
​
Ramya Mehta, DNP, RN, CPHQ, NEA-BC, LSSBB is a health care quality and nursing leadership executive with
expertise in performance improvement, patient safety, and operational excellence. She is board certified in
advanced nursing executive practice and health care quality, and is a Lean Six Sigma Black Belt.

Dr. Mehta focuses on building high-reliability systems of care, leading multidisciplinary teams to improve
outcomes, strengthen compliance, and embed continuous improvement into organizational culture.

​
Ivana Lichtscheidl serves as Vice President of Quality Improvement and Risk Management (QIRM) and Privacy
Officer at Evergreen Treatment Services. She oversees enterprise quality strategy, risk management,
regulatory compliance, and privacy programs across the organization.

Her work centers on advancing patient safety, strengthening clinical governance, and ensuring responsible
stewardship of protected health information while supporting access to evidence-based substance use
treatment services.

                                                      11

HTI-5 Recommendations​

APPENDICES

Appendix A: IOM Recommendations, ONC’s Response, and HTI-5 Proposed Action
IOM Recommendation (2011) ONC Certification Response HTI-5 Proposal

Specify quality and risk management 170.315(g)(3) Safety-Enhanced Design; Remove both
requirements with focus on human factors, 170.315(g)(4) Quality Management
safety culture, and usability System

Establish mechanism for reporting health 170.315(d)(2) Auditable Events; Remove both
IT-related deaths, serious injuries, or 170.315(d)(3) Audit Reports
unsafe conditions

Recommend Congress establish Audit trails enable investigation Remove audit
independent entity for investigating requirements
patient safety deaths associated with
health IT

Research should inform design, focusing on 170.315(g)(3) requires UCD process and Remove
user-centered design and human factors usability testing

Appendix B: Example of a vendor work product in full compliance with current
Safety Enhanced Design requirements

The Safety Enhanced Design certification requirement is straightforward: It requires developers to
objectively test their systems’ safety relevant features, to report users’ ability to perform the
necessary tasks, and their frequency of errors. There is no threshold for how easy or difficult the
systems are. Here (https://bit.ly/4ceZCJH) is an example of the work product of one company’s
ONC-compliant testing. One can see that this is a serious, thorough review of how and where users
make errors, and how/where the company then commits to making user interface improvements to
enhance patient safety.

Appendix C: Relationship of Security to Safety

Security Criteria and Their Safety Functions
Criterion What It Does Safety Function HTI-5

(d)(1) Authentication, Access Control Verifies user identity Ensures right user accesses REMOVAL
right patient

(d)(2) Auditable Events, Tamper-resistance Records user actions Enables investigation of REMOVAL
errors

                                                      12

HTI-5 Recommendations​

    Criterion                                    What It Does              Safety Function                      HTI-5

    (d)(3) Audit Report(s)                       Generates audit           Supports root cause analysis      REMOVAL
                                                 reports

    (d)(5) Automatic Access Time-out             Logs out inactive         Prevents unauthorized access      REMOVAL
                                                 sessions                  to open records

    (d)(8) Integrity                             Ensures data not          Detects unauthorized              REMOVAL
                                                 altered                   modifications

    (d)(10) Auditing Actions on Health           Tracks data               Creates accountability trail      REMOVAL
    Information                                  access/changes

    (d)(13) Multi-factor Authentication          Requires multiple         Prevents credential-based         REMOVAL
                                                 credentials               errors

Appendix D. Two Case Studies of Enforcement Actions Against Vendors who
attempted to Circumvent ONC Safety Certification Requirements

Case 1: eClinicalWorks ($155 Million Settlement, 2017)
eClinicalWorks was the first EHR vendor held accountable for certification failures. This case proved that
certification enforcement works. The threat of False Claims Act liability creates powerful compliance
incentives. HTI-5 proposes to dismantle this proven mechanism.

The Department of Justice alleged that eClinicalWorks falsely certified that its software met ONC
certification requirements.7 Specific allegations included:
-​ Hard-coded drug codes: Rather than programming capability to retrieve any drug code from the
RxNorm database, eCW typed only the 16 codes needed for certification testing directly into its
software
-​ Audit log failures: The software did not accurately record user actions
-​ Drug interaction check failures: The system did not reliably perform drug-drug interaction checks
-​ Data portability failures: The software could not properly transfer patient data to other vendors'
systems

The case was prosecuted under the False Claims Act because: 1) Certification requirements existed; 2)
eClinicalWorks claimed to meet them; 3) The claims were false; 3) The government paid incentive payments
based on those claims. The result was a $155 million settlement, the largest False Claims Act recovery in
Vermont history and the first holding an EHR vendor accountable for certification failures.

Case 2: Practice Fusion ($145 Million Settlement, 2020)
Practice Fusion accepted approximately $1 million from a major opioid manufacturer to implement clinical
decision support alerts that encouraged physicians to prescribe extended-release opioids. The company did
not disclose the funding source to users.8 This unethical action not only harmed patients but contributed to

7
​ U.S. Department of Justice. "Electronic Health Records Vendor to Pay $155 Million to Settle False Claims Act
Allegations." Press Release, May 31, 2017.
8
​ U.S. Department of Justice. "Electronic Health Records Vendor to Pay $145 Million to Resolve Criminal and Civil
Investigations." Press Release, January 27, 2020.
13
HTI-5 Recommendations​

the nation’s opioid crisis. Existing certification criterion (170.315(b)(11)) requires disclosure of the source of
clinical decision support interventions, including funding sources and was the basis for successful criminal
action against the vendor. This "source attribute" requirement exists precisely to prevent this kind of corrupt
influence on clinical decisions. By implementing this requirement, ONC gave every physician the opportunity
to understand if the advice that their EHR was giving them was based on the best evidence or based on a
financial incentive offered to the EHR developer, or both.

One reason that this certification criterion was added is that this sort of relationship was unfortunately
rather common before this transparency was required. Pharmaceutical companies routinely approached EHR
developers with such proposals. While ONC didn't have, nor does it have today, regulatory authority to
prohibit these conflictual relationships, ONC did have authority, and would continue to have authority, to
require that decision support recommendations, if financially supported by third parties, a clear conflict of
interest, be disclosed. We are very concerned that these financially lucrative activities will become rampant
once again, putting patients in harm's way. Physicians will unknowingly be accepting advice from third
parties whose financial goals may conflict with the health goals of the patients they serve.

If these requirements are removed, vendors could accept pharmaceutical funding to push specific drugs
through CDS alerts without any disclosure obligation. This is not aligned with the guiding principles of ethical
clinical or business practice or of the MAHA movement.

What HTI-5 Removes:
eClinicalWorks Violation Related Certification Criterion HTI-5 Action

Audit log failures 170.315(d)(2) Auditable Events REMOVAL

                               170.315(d)(3) Audit Report(s)                                        REMOVAL

                               170.315(d)(10) Auditing Actions                                      REMOVAL

Drug interaction failures 170.315(g)(3) Safety-Enhanced Design (required for testing) REMOVAL

                               170.315(g)(4) Quality Management System                              REMOVAL

Data portability failures 170.315(g)(7) Application Access - Patient Selection REMOVAL

                               170.315(g)(9) Application Access - All Data Request                  REMOVAL

Practice Fusion Violation

Source attribution 170.315(b)(11) Decision Support Interventions REMOVAL

Appendix E: The PIQI Framework Does Not Address the Issues Discussed
PIQI does not test any of the certification requirements discussed in this document. In fact, PIQI
and Certification are complementary…
What You Need PIQI Provides Certification Provides

Safe user interface design ❌ ✅ (g)(3)
14
HTI-5 Recommendations​

What You Need PIQI Provides Certification Provides

Transparent CDS funding ❌ ✅ (b)(11)
Working drug interaction checks ❌ ✅ (a)(4)
Functional audit logs ❌ ✅ (d)(2), (d)(3), (d)(10)
Proper authentication ❌ ✅ (d)(1), (d)(13)
Quality management processes ❌ ✅ (g)(4)
Data quality at exchange ✅ ❌ (not its focus)

Appendix F. Case study demonstrating new vendor behavior when regulatory
requirements are loosened.
About three years ago, a new EHR company entered the market shortly after ONC declared success in
removing the SNOMED CT requirement from the problem list. SNOMED CT is a highly granular clinical
vocabulary It distinguishes, for example, between "type 2 diabetes mellitus with diabetic chronic kidney
disease" and "type 2 diabetes mellitus with diabetic nephropathy, stage 3" as separate, specific concepts.
ICD-10, by contrast, is a billing classification system that groups many distinct clinical conditions under a
single code. ONC's rationale for removing the requirement was that SNOMED CT was still required at the
edges in consolidated CDA exports and FHIR resources and that internal adoption was already widespread, so
mandating it for the problem list was no longer necessary. Predictably, this company (and perhaps others)
took the path of least resistance and chose ICD-10 to capture and maintain the problem list internally. When
it came time to export patient records, they attempted to map their ICD-10 codes to SNOMED CT. This is
where the granularity problem becomes a patient safety problem. ​
​
You can map from SNOMED CT to ICD-10 going from specific to general is straightforward, like saying a
golden retriever is a dog. But going the other way from ICD-10 to SNOMED CT is like being told "dog" and
having to guess the breed. A single ICD-10 code might correspond to dozens or even hundreds of distinct
SNOMED CT concepts, and there is no way to know which one the clinician intended. The attempt failed
horribly. Patient records were exported in real clinical settings with completely incorrect SNOMED CT codes
attached to patients' problems meaning the next clinician or health system receiving that record could see
a diagnosis that was simply wrong. This is not a thought experiment. We saw it happen. When we informed
ONC, the response was effectively a shrug. This is exactly what happens when you remove a requirement
because adoption is "widespread"; You open the door for new entrants to make design decisions that likely
compromise patient safety, and when they do, there is no regulatory mechanism to prevent or correct the
harm.

                                                     15
