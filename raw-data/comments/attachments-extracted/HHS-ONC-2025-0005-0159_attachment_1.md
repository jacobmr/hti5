# HHS-ONC-2025-0005-0159 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0159/attachment_1.pdf

---

26 February 2026

Michael Lipinski
Office of Policy Assistant Secretary for Technology Policy/
Office of the National Coordinator for Health Information Technology
Department of Health and Human Services
Mary E. Switzer Building, Mail Stop: 7033A
330 C Street, S.W. Washington, DC 20201

Submitted electronically via regulations.gov

Re: Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions to
Unleash Prosperity; Proposed Rule (RIN 0955-AA09)

Dear Mr. Lipinski:

Health Universe appreciates the opportunity to submit comments in response to the proposed
rule "Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions to
Unleash Prosperity," published in the Federal Register on December 29, 2025.

About Health Universe
Health Universe is a certified health IT developer that provides a platform enabling the
deployment, management, and integration of artificial intelligence and machine learning models
in clinical settings. Our platform serves three primary constituencies:

• Health systems and hospitals that license Health Universe to deploy and manage AI-
driven clinical decision support tools within their care environments
• Innovators and technology companies that use Health Universe as a platform to
connect their AI applications to electronic health record systems through standardized
interfaces including FHIR APIs and USCDI-compliant data exchange
• Life sciences organizations that leverage Health Universe for real-world data access to
support research and evidence generation

Health Universe is certified to the Decision Support Interventions criterion at §170.315(b)(11),
and our platform facilitates connections to certified EHR technology through FHIR APIs, custom
integrations, and participation in the Trusted Exchange Framework and Common Agreement
(TEFCA) through qualified intermediaries. Our primary clinical focus is oncology, where timely
access to comprehensive patient data and the ability to integrate AI-generated insights into
clinical workflows are essential to improving patient outcomes.
Summary of Comments
Health Universe commends ASTP/ONC for this proposed rule, which reflects a thoughtful
approach to reducing regulatory burden while advancing interoperability and supporting
innovation in health IT. We are particularly supportive of the proposals that explicitly recognize
the role of artificial intelligence and automated systems in accessing, exchanging, and using
electronic health information, as well as the proposals that address barriers to third-party
integration with certified health IT.

Our comments are organized into three sections:

Section I: Provisions Health Universe Supports

We strongly support several provisions in this proposed rule, including:

• The explicit inclusion of automation technologies, including robotic process automation
and autonomous artificial intelligence systems, in the definitions of "access," "use," and
"exchange" at §171.102
• The removal of the third party seeking modification use condition at §171.204(a)(3),
which has been used to deny third-party applications the ability to write data back to
EHR systems
• The revisions to the manner exception exhausted condition at §171.204(a)(4) that close
loopholes used to deny access to third parties
• The new contract fairness provisions at §171.301(a)(2)(iii) that prohibit contracts of
adhesion and unconscionable terms
• The reduction in certification burden through revisions to the Decision Support
Interventions criterion, Real World Testing requirements, and the Assurances Condition
of Certification

Section II: Provisions Health Universe Supports with Requested Modifications

We support the intent of several provisions but request modifications to ensure they achieve their
objectives without unintended consequences:

• The removal of source attribute and risk management requirements from §170.315(b)(11)
should be accompanied by a voluntary pathway for developers who wish to demonstrate
AI transparency and governance practices
• The narrowing of data scope for predictive DSIs should clarify that the specified data
types are a minimum requirement, not a ceiling, particularly for specialty AI applications
in oncology
• The removal of the cancer registry transmission criterion at §170.315(f)(4) should retain
C-CDA as an available option until FHIR-based alternatives are adopted, to avoid
creating a gap in cancer registry reporting support
 • References to emerging AI interoperability standards should be expanded beyond Model
Context Protocol (MCP) to maintain technology neutrality and accommodate rapidly
emerging protocols such as Agent-to-Agent (A2A), which did not exist when this
proposed rule was being developed
• The removal of C-CDA standards should be coordinated with TEFCA's transition to
FHIR-based exchange to avoid disrupting current exchange capabilities

Section III: Issues Not Addressed by the Proposed Rule

We respectfully request that ASTP/ONC address several issues that create significant barriers to
AI innovation in healthcare but are not addressed in this proposed rule:

• The lack of standardized write-back implementations across certified EHR systems
• Discriminatory API rate limiting and throttling practices that disproportionately affect AI
applications
• Excessive contracting timelines that effectively deny access to electronic health
information
• The need for clarity regarding enforcement mechanisms for information blocking
violations

We appreciate ASTP/ONC's continued engagement with the health IT community and its
commitment to advancing interoperability while reducing unnecessary regulatory burden. The
proposals in this rule represent meaningful progress toward an ecosystem where AI-enabled
clinical decision support can improve patient care, and we look forward to their finalization.

The detailed comments that follow elaborate on each of these points with specific
recommendations and, where applicable, suggested regulatory text.

I. Provisions Health Universe Supports
Health Universe strongly supports several provisions in this proposed rule that will advance
interoperability, reduce barriers to innovation, and clarify the regulatory framework for AI-
enabled health IT. We address each of these provisions below and urge ASTP/ONC to finalize
them as proposed.

A. Inclusion of Artificial Intelligence and Automation Technologies in
Information Blocking Definitions (§171.102)
Health Universe strongly supports the proposed revisions to the definitions of "access" and "use"
at §171.102 to explicitly include automation technologies, including robotic process automation
and autonomous artificial intelligence systems.

The proposed revision to the "access" definition—adding "including, without limitation, by
automation technologies (e.g., robotic process automation, agentic artificial intelligence)"—
appropriately reflects the current technological landscape in which AI systems routinely access
electronic health information on behalf of healthcare providers and patients. Similarly, the
proposed revision to the "use" definition—adding "including, without limitation, by automation
technologies (e.g., robotic process automation, autonomous artificial intelligence systems)"—
ensures that AI-driven analysis and processing of EHI receives the same legal protections as
human-directed use.

These revisions provide critical clarity for AI developers and deployers. Without explicit
inclusion of automated and AI-mediated access in the regulatory text, actors holding EHI could
argue that information blocking provisions do not apply when they deny access to AI systems
while permitting access to human users performing the same functions. The proposed language
forecloses this interpretation and establishes that the manner of access—whether by human or
machine—does not affect the applicability of information blocking provisions.

Health Universe also strongly supports the alternative proposal to similarly revise the "exchange"
definition to include automation technologies. We urge ASTP/ONC to adopt this alternative and
revise all three definitions consistently. AI-enabled health IT platforms routinely facilitate the
exchange of EHI between systems, and leaving the "exchange" definition without parallel
language addressing automation could create ambiguity or an unintended gap in coverage.
Consistency across all three definitions will provide the clearest regulatory framework for the
health IT ecosystem.

We respectfully request that ASTP/ONC consider adding language in the preamble to the final
rule clarifying that technical measures specifically designed to prevent or impede automated
access—such as CAPTCHA systems, bot detection mechanisms, or discriminatory
authentication requirements—may constitute information blocking when they have the effect of
denying AI systems access that would otherwise be available to human users.

B. Removal of the Third Party Seeking Modification Use Condition
(§171.204(a)(3))

Health Universe strongly supports the proposed removal of the third party seeking modification
use condition at §171.204(a)(3) from the Infeasibility Exception.

This provision is of critical importance to Health Universe and to the broader ecosystem of AI-
enabled clinical decision support. The ability to write data back to EHR systems is essential for
AI applications to deliver value in clinical workflows. AI-generated recommendations, risk
scores, care suggestions, and clinical documentation must flow back into the systems where
clinicians work to be actionable. Read-only access to EHI, while valuable, is insufficient to
support the integration of AI into care delivery.

As ASTP/ONC correctly observes in the preamble, there has been substantial growth in technical
approaches that enable efficient and appropriately secure modification of EHI by third-party
applications. Modern API architectures, including FHIR-based write operations, provide well-
established mechanisms for third parties to contribute data to EHR systems with appropriate
authentication, authorization, and audit controls. The technical barriers that may have justified
caution when the Cures Act Final Rule was promulgated have largely been addressed through
industry maturation and standards development.

We share ASTP/ONC's concern that the current condition has been misused by actors holding
EHI to deny write-back capabilities to third-party applications that healthcare providers wish to
use. Health Universe has directly experienced this barrier: EHR vendors have cited
§171.204(a)(3) to decline integration requests that would enable our platform to return AI-
generated insights to the clinical record. This practice undermines the ability of healthcare
providers to select and deploy the AI tools that best meet their clinical needs and impedes
innovation in clinical decision support.

We agree with ASTP/ONC that the Security Exception at §171.203 and the Preventing Harm
Exception at §171.201 provide adequate protection for actors with legitimate concerns about
third-party write access. An actor that has identified specific threats to the confidentiality,
integrity, or availability of EHI can address those concerns through the Security Exception. An
actor with knowledge that data proposed for writing is corrupt, misidentified, or erroneous can
address those concerns through the Preventing Harm Exception. The third party seeking
modification use condition is not necessary to address these legitimate scenarios and serves
primarily to enable blanket denials of write-back access.

We urge ASTP/ONC to finalize the removal of §171.204(a)(3) as proposed. We further request
that ASTP/ONC provide guidance in the preamble to the final rule clarifying that actors with
specific, documented security or data integrity concerns should address those concerns through
the applicable exceptions rather than through categorical denial of third-party write access.

C. Revisions to the Manner Exception Exhausted Condition (§171.204(a)(4))

Health Universe supports the proposed revisions to the manner exception exhausted condition at
§171.204(a)(4), which strengthen protections against misuse of this provision to deny access to
EHI.

The proposed changes address specific loopholes that have been exploited to deny access to third
parties:

Requiring "all" alternative manners rather than "two." The current requirement that an
actor offer only two alternative manners before claiming infeasibility creates an obvious gap: an
actor can select the two least desirable alternatives, have them rejected, and then claim the
Manner Exception has been exhausted. Requiring that actors offer all alternative manners
specified in §171.301(b)(1)—including technology certified to standards adopted in Part 170,
published content and transport standards, and machine-readable formats—ensures that actors
have genuinely attempted to fulfill requests before claiming infeasibility.

Changing "same" to "analogous" access. The current language has been interpreted by some
actors to permit denial of access by claiming that a requested manner is not identical to what is
provided to others. For example, an actor might provide API access with certain features to some
parties and deny access to others by claiming their request for slightly different features is not the
"same." The proposed use of "analogous" appropriately focuses on functional equivalence rather
than technical identity and prevents hair-splitting distinctions designed to justify denials.

Changing "substantial number" to "any" other individual or entity. The current standard
permits actors to deny access by arguing that only a small number of others receive similar
access, or that the requestor's situation is unique. The proposed change establishes a clear rule: if
an actor provides analogous access to any other party, the actor cannot claim it is infeasible to
provide that access to a new requestor. This eliminates subjective judgments about what
constitutes a "substantial number" and prevents discrimination against smaller or newer market
entrants.

Removing the "similarly situated" criterion. The current requirement to consider whether
other recipients are "similarly situated" to the requestor has been used to justify differential
treatment based on factors such as company size, market position, or competitive relationship
with the actor. The proposed removal of this criterion, along with the associated anti-
discrimination provisions in §171.204(a)(4)(iv), simplifies the analysis and reduces opportunities
for pretextual denials.

Health Universe also supports the alternative proposal to remove §171.204(a)(4) entirely if
comments indicate that the proposed revisions would be insufficient to prevent misuse. Complete
removal would provide the clearest rule and eliminate all loopholes. We believe either
approach—the proposed revisions or complete removal—would represent a significant
improvement over the current regulatory text, and we defer to ASTP/ONC's judgment regarding
which approach best serves the goals of the information blocking provisions.

We note that the proposed revisions include important language clarifying that the manner
exception exhausted condition does not require that the requestor identify or agree to the
alternative manner—a requirement for satisfying the Manner Exception itself under
§171.301(b)(1)(i) and (ii). This clarification appropriately distinguishes between the Manner
Exception (which requires requestor agreement) and the Infeasibility Exception (which applies
when agreement cannot be reached despite good-faith efforts). We support inclusion of this
clarification in the final rule.
D. Contract Fairness Requirements for the Manner Exception
(§171.301(a)(2)(iii))

Health Universe strongly supports the proposed addition of §171.301(a)(2)(iii), which would
require that contracts for access, exchange, or use of EHI be at market rate, not be contracts of
adhesion, and not contain unconscionable terms.

This provision addresses a significant barrier to third-party access to EHI that is not adequately
addressed by the existing regulatory framework. While the Manner Exception permits actors to
reach market-negotiated terms for EHI access, it has not prevented actors from presenting third
parties with take-it-or-leave-it contracts containing terms that no party would accept through
arm's-length negotiation.

Health Universe has directly experienced the practices this provision is designed to address.
Contracts presented by EHR vendors for API access have included:

• Broad indemnification provisions requiring Health Universe to hold the vendor harmless
for the vendor's own acts or omissions
• Intellectual property provisions that would require assignment or licensing of Health
Universe's proprietary technology
• Revenue-sharing requirements exceeding fair market value for the services provided
• Limitation of liability provisions that are entirely one-sided
• Non-disparagement and confidentiality provisions that would prevent Health Universe
from discussing contract terms with regulators or in public comments such as these

These terms are not the product of negotiation between parties of equal bargaining power. They
are imposed by dominant market actors on parties who have no realistic alternative if they wish
to access EHI maintained in those actors' systems. The proposed definitions of "market rate,"
"contract of adhesion," and "unconscionable terms" at §171.102 appropriately capture these
problematic practices.

We support the proposed definitions as workable standards that provide adequate guidance to
actors while preserving flexibility for legitimate business arrangements. In particular:

• The definition of "market rate" as "the value in an arm's-length transaction, consistent
with the general market value of the subject transaction" appropriately incorporates the
established fair market value standard from other healthcare regulatory contexts.
• The definition of "contract of adhesion" as "a contract provided on a standardized form,
or on a 'take it or leave it' basis without a realistic opportunity to bargain where the
desired product, services, access, use, or exchange cannot be provided except by
acquiescing to the form contract" accurately describes the contracting dynamic that third
parties face with dominant EHR vendors.
• The definition of "unconscionable terms" as "contractual terms that are excessive,
unreasonable, or shockingly unfair or unjust" provides an appropriate standard that
captures the most problematic contract provisions without prohibiting legitimate terms
that parties might reasonably negotiate.
We request that ASTP/ONC include in the preamble to the final rule additional examples of
contract terms that would be considered unconscionable, building on the examples provided in
the proposed rule preamble and the Cures Act Final Rule. Specific examples would provide
guidance to actors drafting agreements and to third parties evaluating whether proposed terms
are consistent with the regulation.

Health Universe also supports the alternative proposal to remove §171.301(a)(2) entirely, which
would apply the Fees Exception at §171.302 and the Licensing Exception at §171.303 to all
agreements for EHI access, including those where the actor fulfills the request in the manner
requested. This alternative would provide stronger and more specific protections than the
primary proposal by incorporating the detailed requirements of those exceptions. We believe
either approach would represent a meaningful improvement, and we support ASTP/ONC's
judgment regarding which approach best balances regulatory clarity with flexibility for
legitimate business arrangements.

E. Reduction in Decision Support Interventions Certification Burden
(§170.315(b)(11))

Health Universe supports the proposed revisions to the Decision Support Interventions
certification criterion at §170.315(b)(11) that reduce certification burden while preserving the
core functionality requirements for clinical decision support.

As a developer certified to §170.315(b)(11), Health Universe has direct experience with the
requirements being revised. We support the following changes:

Removal of the reference to §170.315(b)(2) in §170.315(b)(11)(ii)(B). This is an appropriate
conforming change given the proposed removal of the Clinical Information Reconciliation and
Incorporation criterion. We note that the removal of this cross-reference does not prevent
developers from enabling DSIs when care transition data is incorporated; it simply removes a
certification testing requirement tied to a criterion that would no longer exist.

Removal of the parenthetical reference to drug-drug and drug-allergy contraindication
checking in §170.315(b)(11)(iii). This change supports the modular architecture that
ASTP/ONC has pursued throughout the Certification Program's evolution. The separate criterion
at §170.315(a)(4) addresses drug interaction checking, and removing the cross-reference in the
DSI criterion reduces redundancy without affecting the availability of this functionality.

We offer comments on the source attribute, risk management, and data scope provisions in
Section II of this letter, where we support the proposals with requested modifications.

F. Removal of the Assurances Condition Maintenance Requirement
(§170.402(b)(4))
Health Universe supports the proposed removal of §170.402(b)(4), which currently requires
health IT developers to review and update source attribute information and intervention risk
management practices for the Decision Support Interventions criterion.

This is an appropriate conforming change to the proposed removal of the underlying
requirements in §170.315(b)(11)(iv), (v), and (vi). Retaining a maintenance requirement for
provisions that no longer exist in the certification criterion would create confusion and serve no
regulatory purpose.

We note that Health Universe intends to continue maintaining and updating information about
our AI models and our risk management practices as part of our quality management processes
and our commitments to customers, regardless of whether these activities are required for
certification. The removal of the regulatory requirement does not diminish our commitment to
responsible AI development and deployment.

G. Reduction in Real World Testing Requirements (§170.405)

Health Universe supports the proposed revisions to the Real World Testing Condition and
Maintenance of Certification requirements at §170.405, including the removal of the requirement
to submit annual testing plans and the limitation of results reporting to API-focused certification
criteria.

The proposal to focus real world testing on the API criteria at §170.315(g)(10), (g)(31), (g)(32),
and (g)(33) appropriately aligns testing requirements with ASTP/ONC's FHIR-forward strategy.
These criteria represent the primary mechanisms through which interoperability is achieved in
the modern health IT ecosystem, and focusing testing resources on these criteria will generate the
most valuable information about real-world interoperability performance.

The removal of the requirement to submit annual testing plans reduces administrative burden
without sacrificing accountability. The results reporting requirement ensures that developers
continue to conduct meaningful real world testing and that information about testing outcomes
remains publicly available.

We request that ASTP/ONC ensure that the retained testing requirements continue to provide
visibility into API performance and reliability. Health Universe, as a platform that connects to
EHR systems through certified APIs, relies on consistent API availability and performance. Real
world testing results that document API reliability, response times, and error rates provide
valuable information that informs our integration planning and helps health systems evaluate
certified products.

H. Alternative Proposals
Throughout this section, we have noted our support for several alternative proposals presented by
ASTP/ONC:

• Alternative proposal to revise the "exchange" definition (§171.102): We urge
ASTP/ONC to adopt this alternative and revise all three definitions (access, use,
exchange) consistently to include automation technologies.
• Alternative proposal to remove §171.204(a)(4) entirely: We support this alternative if
ASTP/ONC determines that the proposed revisions to the manner exception exhausted
condition would be insufficient to prevent misuse.
• Alternative proposal to remove §171.301(a)(2) and apply Fees and Licensing
Exceptions: We support this alternative as providing potentially stronger protections than
the primary proposal's contract fairness requirements.

In each case, we believe ASTP/ONC has appropriately identified the relevant considerations and
presented reasonable alternatives. We support ASTP/ONC's exercise of judgment in selecting the
approach that best serves the statutory goals of preventing information blocking while permitting
reasonable and necessary activities.

II. Provisions Health Universe Supports with Requested
Modifications
Health Universe supports the intent of several provisions in this proposed rule but respectfully
requests modifications to ensure they achieve their objectives without unintended consequences.
We address each of these provisions below with specific recommendations.

A. Removal of Source Attribute Requirements (§170.315(b)(11)(iv) and (v))

Health Universe supports the proposed removal of the mandatory source attribute
requirements—commonly referred to as "model card" requirements—from the Decision Support
Interventions certification criterion, but we request that ASTP/ONC establish a voluntary
pathway for developers who wish to demonstrate AI transparency practices.

Support for Removal of Mandatory Requirements

We agree with ASTP/ONC's assessment that the mandatory source attribute requirements have
not achieved their intended purpose. The preamble correctly observes that there is no publicly
available evidence that clinicians or health care delivery organizations have accessed, recorded,
or modified source attribute information since these requirements took effect. The underlying
assumption that source attribute transparency would be valuable to clinical end users in selecting
or configuring decision support interventions has not been validated in practice.
We also agree that the current regulatory framework creates an uneven playing field. Certified
health IT developers face rigorous transparency requirements while other technology companies
deploying AI in healthcare settings face no comparable obligations. This disparity disadvantages
certified developers without providing meaningful benefits to patients or providers.

The removal of mandatory requirements will reduce compliance burden and development costs,
potentially lowering barriers to entry for new participants in the Certification Program and
enabling certified developers to redirect resources toward innovation and customer needs.

Request for Voluntary Transparency Pathway

However, we are concerned that complete removal of transparency provisions, without any
alternative mechanism, may have unintended consequences for the health IT ecosystem.

Health Universe has invested significantly in AI governance practices, including documentation
of model development, training data, intended use, performance characteristics, and limitations.
These practices reflect our commitment to responsible AI development and serve as a
competitive differentiator when engaging with sophisticated health systems that prioritize AI
safety and accountability. Complete removal of transparency requirements from the Certification
Program may diminish the market value of these investments and reduce incentives for
responsible AI governance across the industry.

Additionally, the removal of transparency requirements may create a "race to the bottom"
dynamic in which developers compete on cost by eliminating AI governance activities that are
no longer required for certification. While ASTP/ONC correctly notes that the mandatory
requirements were burdensome, the activities underlying those requirements—documenting
model characteristics, evaluating performance, identifying limitations—remain important for
patient safety and for enabling informed decision-making by health systems deploying AI tools.

We respectfully request that ASTP/ONC consider one or more of the following modifications:

1.  Voluntary certification pathway. Establish an optional certification criterion or
    certification designation for developers who choose to document and disclose source
    attribute information. This would allow developers who have invested in AI governance
    to demonstrate that investment through certification while not burdening developers who
    prefer not to participate.
2.  Transparency attestation. Create an optional attestation mechanism through which
    developers can attest that they maintain and make available source attribute information,
    without requiring the detailed certification testing that the current mandatory
    requirements entail. This attestation could be reflected on the Certified Health IT Product
    List (CHPL) to inform health system purchasing decisions.
3.  Best practice guidance. Include in the preamble to the final rule a statement that
    ASTP/ONC continues to view source attribute transparency as a best practice for AI-
    enabled decision support, even though it is no longer a certification requirement. This
    would signal to the market that transparency remains valued without imposing mandatory
    obligations.
     4. Coordination with other agencies. Engage with the Food and Drug Administration, the
    Office for Civil Rights, and other relevant agencies to ensure that the removal of
    transparency requirements from the Certification Program does not create gaps in
    oversight of AI in healthcare. A coordinated federal approach to AI transparency would
    be preferable to fragmented requirements across multiple regulatory frameworks.

We emphasize that we support the removal of mandatory certification requirements as proposed.
Our request is for supplementary mechanisms that would preserve market incentives for
responsible AI governance without reimposing the compliance burdens that ASTP/ONC has
appropriately identified as disproportionate to their benefits.

B. Removal of Risk Management Requirements (§170.315(b)(11)(vi))

Health Universe supports the proposed removal of the mandatory intervention risk management
requirements from the Decision Support Interventions certification criterion, but we request that
ASTP/ONC address potential patient safety implications and preserve mechanisms for
developers to demonstrate responsible AI practices.

Support for Removal of Mandatory Requirements

We agree with ASTP/ONC's reasoning regarding the removal of risk management requirements.
The current regulatory framework imposes detailed risk management obligations on certified
health IT developers while non-certified AI vendors deploying similar technologies face no
comparable requirements. This disparity creates competitive disadvantages for certified
developers without necessarily improving patient safety, as patients and providers may be
exposed to AI tools that have undergone no systematic risk evaluation.

We also acknowledge the relevance of Executive Order 14179, "Removing Barriers to American
Leadership in Artificial Intelligence," which directs agencies to review regulations that may
hinder AI innovation. The risk management requirements, while well-intentioned, may have
impeded the development and deployment of beneficial AI applications in healthcare.

Concerns Regarding Patient Safety

However, we respectfully observe that risk management is fundamental to the safe deployment
of AI in clinical settings. Predictive decision support interventions can influence clinical
decisions affecting patient health and safety. AI models may exhibit unexpected behaviors,
degrade in performance over time, or produce biased outputs affecting particular patient
populations. Systematic risk identification, mitigation, and monitoring practices help ensure that
AI tools deliver benefits while minimizing potential harms.

Complete removal of risk management requirements, without any alternative accountability
mechanism, may enable the deployment of AI tools that have not undergone adequate safety
evaluation. While market forces and professional standards provide some discipline, we are
concerned that competitive pressure to reduce costs and accelerate time-to-market may lead
some developers to minimize risk management activities.

We are also concerned about potential regulatory gaps. If ASTP/ONC removes risk management
requirements and other agencies (FDA, OCR) do not establish comparable requirements for the
same AI tools, there may be no federal oversight of AI safety practices for a significant segment
of the health AI market.

Requested Modifications

We respectfully request that ASTP/ONC consider the following modifications:

1.  Disclosure requirement. Rather than requiring specific risk management practices,
    require developers of predictive DSIs to disclose whether they follow recognized risk
    management frameworks (such as ISO 14971, the NIST AI Risk Management
    Framework, or similar standards). This would inform health systems and providers
    without mandating particular practices.
2.  Voluntary enhanced certification. Establish an optional "enhanced certification"
    designation for developers who demonstrate compliance with specified risk management
    practices. This would allow developers committed to rigorous AI safety to differentiate
    themselves in the market.
3.  Best practice guidance. Include in the preamble to the final rule a clear statement that
    ASTP/ONC expects developers of predictive DSIs to implement risk management
    practices appropriate to the clinical context and potential patient impact of their tools,
    even though specific practices are no longer required for certification.
4.  Interagency coordination. Coordinate with FDA on the oversight of AI/ML-enabled
    medical devices and clinical decision support tools to ensure that the removal of risk
    management requirements from the Certification Program does not create gaps in federal
    oversight. Clarify the respective roles of ONC certification and FDA oversight for
    different categories of clinical AI tools.

As with our comments on source attribute requirements, we support the removal of mandatory
certification requirements as proposed. Our request is for supplementary mechanisms that
preserve accountability for AI safety without reimposing disproportionate compliance burdens
on certified developers.

C. Narrowing of Data Scope for Predictive Decision Support Interventions
(§170.315(b)(11)(iii)(B))

Health Universe supports the proposed narrowing of the data scope for predictive DSIs but
requests clarification that the specified data types represent a minimum requirement rather than a
ceiling on permitted functionality.

Support for Narrowing
We agree with ASTP/ONC's assessment that the current requirement to support predictive DSIs
using any data element in the USCDI standard is overbroad. As the preamble correctly observes,
some USCDI data elements—such as phone number and phone number type—are unlikely to be
used as inputs to clinical prediction algorithms. Requiring developers to demonstrate support for
all USCDI data elements as potential DSI inputs imposes certification burden without
corresponding benefit.

The proposed limitation to evidence-based DSI data types (problems, medications, allergies and
intolerances, demographics, laboratory tests and values, and vital signs) plus Clinical Notes and
Assessment and Plan of Treatment data classes captures the data most commonly used in
predictive models while substantially reducing certification scope.

Concerns Regarding Specialty AI Applications

However, we are concerned that the proposed narrowing may inadvertently limit innovation in
specialty AI applications, particularly in oncology—Health Universe's primary clinical focus.

Oncology AI models frequently require data beyond the specified categories:

• Procedures. Surgical history is critical for cancer staging, treatment planning, and
prognosis. A predictive model assessing recurrence risk or treatment response may
require information about prior surgeries, biopsies, and other procedures.
• Immunizations. Vaccination history is increasingly relevant for oncology, particularly
for immunotherapy eligibility and for patients who may be immunocompromised due to
treatment.
• Social Determinants of Health. SDOH data elements affect cancer screening, diagnosis
timing, treatment access, and outcomes. AI models addressing health equity in oncology
require access to this information.
• Goals. Patient-reported goals regarding treatment intensity, quality of life priorities, and
end-of-life preferences are essential inputs for AI tools supporting shared decision-
making in oncology.
• Care Team Members. Information about the patient's care team supports coordination-
focused AI applications and may be relevant for models predicting care fragmentation or
communication gaps.

If the proposed data scope is interpreted as a ceiling—meaning that predictive DSIs may only
use the specified data types—developers of specialty AI applications would face a choice
between limiting their models' capabilities or foregoing certification. Neither outcome serves
patients or the goals of the Certification Program.

Requested Clarification

We respectfully request that ASTP/ONC clarify in the final rule that the specified data types
represent the minimum that certified health IT must support for predictive DSI functionality, not
the maximum that predictive DSIs may use. Developers should be permitted—and encouraged—
to support additional USCDI data elements as inputs to predictive models without penalty or
additional certification burden.

Alternatively, we request that ASTP/ONC expand the specified data types to include additional
data classes that are commonly used in clinical prediction, including:

• Procedures
• Social Determinants of Health
• Goals
• Care Team Members

This expansion would ensure that the certification criterion accommodates the data requirements
of specialty AI applications while still substantially reducing scope compared to the current
requirement to support all USCDI data elements.

D. Adoption of USCDI Version 3.1 (§170.213)

Health Universe supports the proposed adoption of USCDI v3.1 but requests clarification
regarding the continued availability of data elements removed from the standard.

Support for Adoption

We understand the rationale for adopting USCDI v3.1, which removes several data elements
from USCDI v3: Sexual Orientation, Gender Identity, Sex Parameter for Clinical Use, Name to
Use, and Pronouns. The removal aligns with the enforcement discretion ASTP/ONC has
exercised regarding these data elements and reduces compliance burden for developers.

Request for Clarification

We request that ASTP/ONC clarify in the preamble to the final rule that the removal of these
data elements from USCDI does not prohibit or discourage the exchange of this information
when it is available and clinically relevant.

Some of the removed data elements may be relevant for certain AI applications. For example,
biological sex and sex-linked genetic factors can affect cancer risk, treatment metabolism, and
disease presentation. AI models in oncology may appropriately use sex-related data elements as
inputs when clinically indicated.

We request confirmation that:

1.  Developers and providers may continue to collect, store, and exchange these data
    elements voluntarily, even though they are not required by USCDI v3.1.
2.  The removal of these elements from USCDI does not constitute ASTP/ONC guidance
    that these data elements should not be used in clinical AI applications.
     3. Future versions of USCDI may reintroduce these or similar data elements if clinical
    needs and stakeholder input support their inclusion.

E. Removal of Privacy and Security Certification Criteria (§170.315(d))

Health Universe supports the alternative proposal to retain audit-related certification criteria
while removing the remaining privacy and security criteria.

Support for Reducing Privacy and Security Certification Burden

We agree with ASTP/ONC's assessment that the privacy and security certification criteria have
created burden disproportionate to their benefits. As the preamble correctly observes,
certification to these criteria does not guarantee HIPAA compliance, does not serve as an
affirmative defense in enforcement actions, and does not exempt covered entities from their
independent obligations under the HIPAA Security Rule.

We also agree that the current framework has created confusion regarding the relationship
between certification and compliance. Some stakeholders have incorrectly assumed that certified
health IT provides comprehensive security capabilities, when in fact the certification criteria
address only baseline technical functions that must be implemented within a broader
organizational security program.

Support for Retaining Audit Criteria

However, we support the alternative proposal to retain the audit-related criteria:

• §170.315(d)(2) Auditable events and tamper-resistance
• §170.315(d)(3) Audit report(s)
• §170.315(d)(10) Auditing actions on health information

Audit capabilities serve important functions beyond HIPAA compliance. They support:

• Fraud detection and investigation. Audit logs enable identification of inappropriate
access to patient records, which may indicate fraud, identity theft, or other misconduct.
• AI accountability. For AI-enabled health IT, audit capabilities document what data was
accessed, what recommendations were generated, and what actions were taken. This
information is essential for investigating adverse events, validating AI performance, and
maintaining accountability for AI-influenced decisions.
• Regulatory compliance. Multiple regulatory frameworks beyond HIPAA—including
state privacy laws, research regulations, and payer program integrity requirements—
depend on audit capabilities.
Retaining these criteria ensures that certified health IT continues to support accountability
functions while eliminating the criteria that most directly duplicate HIPAA Security Rule
requirements.

F. Removal of Cancer Registry Transmission Criterion (§170.315(f)(4))

Health Universe supports the proposed transition away from CDA-based cancer registry
reporting but requests that ASTP/ONC retain C-CDA as an available certification option until
FHIR-based alternatives are adopted, to avoid creating a gap in cancer registry reporting support.

Support for Transition to FHIR-Based Reporting

We agree that the current criterion, which requires conformance to a CDA-based implementation
guide for cancer registry reporting, reflects technology that is being superseded by FHIR-based
standards. The health IT industry is transitioning to FHIR, and ASTP/ONC's FHIR-forward
strategy appropriately anticipates this transition.

We also recognize and support the ongoing work to develop FHIR-based cancer reporting
standards, including the Helios FHIR Accelerator and the Central Cancer Registry Reporting
Implementation Guide. These efforts represent the future of cancer data exchange and deserve
encouragement and support.

Concerns Regarding Gap in Cancer Registry Support

Oncology is Health Universe's primary clinical focus, and cancer registry reporting is an
important use case for our platform and our health system customers. We are concerned that
removing the C-CDA-based criterion without retaining it as an available option—and before
FHIR-based alternatives are adopted—will create a gap during which there is no certification
pathway for cancer registry reporting.

Cancer registries currently rely on C-CDA-formatted data submissions. Until these registries
have transitioned to accepting FHIR-based submissions, and until FHIR-based cancer reporting
implementation guides have matured sufficiently for certification, C-CDA remains the
operational standard for cancer registry reporting in practice.

If the C-CDA-based criterion is removed entirely as of January 1, 2027, developers and health
systems will face a period during which:

• Cancer registries continue to require C-CDA-formatted submissions
• No certification criterion exists to validate C-CDA cancer reporting capabilities
• FHIR-based alternatives are not yet ready for certification or widespread registry
adoption
This gap could create uncertainty for developers investing in cancer registry capabilities and for
health systems that depend on certified health IT for cancer reporting.

Requested Modification

We respectfully request that ASTP/ONC modify its approach to the cancer registry transmission
criterion as follows:

1.  Retain C-CDA as an available option until FHIR-based certification criteria are
    adopted. Rather than removing §170.315(f)(4) entirely, retain it as an optional
    certification criterion that developers may choose to certify against. This approach—
    similar to how ASTP/ONC has handled other transitioning standards—would allow
    developers who need to support C-CDA-based cancer registry reporting to continue
    certifying to that capability while the industry transitions to FHIR.
2.  State an explicit commitment in the preamble to the final rule to adopt FHIR-based
    cancer registry reporting standards in future rulemaking once those standards have
    sufficiently matured.
3.  Reference the ongoing standards development work, including the Helios FHIR
    Accelerator and the HL7 FHIR Central Cancer Registry Reporting Implementation
    Guide, as the anticipated basis for future certification criteria.
4.  Provide an estimated timeline for consideration of FHIR-based cancer reporting
    criteria, recognizing that the timeline will depend on standards maturation and industry
    readiness.
5.  Sunset the C-CDA option once FHIR-based criteria are adopted and cancer registries
    have transitioned to accepting FHIR-formatted submissions.

This approach mirrors the transition strategy we recommend for C-CDA standards used in
TEFCA (discussed below) and would ensure continuity of cancer registry reporting support
throughout the transition from C-CDA to FHIR.

G. Removal of TEFCA Manner Exception (§171.403 and Subpart D)

Health Universe supports the proposed removal of the TEFCA Manner Exception but requests
clarification regarding the continued protection of TEFCA-based exchange under the standard
information blocking exceptions.

Support for Removal

We agree with ASTP/ONC's assessment that the TEFCA Manner Exception is no longer
necessary to incentivize TEFCA participation. Private sector investment in TEFCA has been
substantial, and the network continues to grow without the additional regulatory incentive this
exception was intended to provide.
We also agree that the exception may have created confusion regarding its scope and application,
including misunderstandings about whether it affects individual access rights.

Request for Clarification

Health Universe participates in TEFCA through qualified intermediaries, including Kno2, and
our customers rely on TEFCA-based exchange for access to patient information across
participating networks. We request that ASTP/ONC clarify in the preamble to the final rule that:

1.  TEFCA-based exchange remains fully protected under the standard Manner Exception
    at §171.301. Actors who fulfill requests for EHI access through TEFCA are engaging in a
    manner of exchange that satisfies the Manner Exception, and this remains true regardless
    of whether a TEFCA-specific exception exists.
2.  TEFCA participants' obligations are unchanged. The removal of the TEFCA Manner
    Exception does not affect any obligations that actors have as QHINs, Participants, or
    Sub-participants under the Common Agreement. TEFCA requirements continue to apply
    independently of the information blocking regulations.
3.  No negative inference should be drawn from the removal of the exception. The
    removal reflects ASTP/ONC's assessment that a TEFCA-specific exception is
    unnecessary, not any concern about the value or legitimacy of TEFCA-based exchange.

This clarification would ensure that TEFCA participants and those who rely on TEFCA-based
exchange have confidence that the removal of Subpart D does not affect their rights or
obligations.

H. API Condition of Certification Updates (§170.404)

Health Universe supports the proposed conforming edits to the API Condition of Certification
but requests confirmation that key API transparency and availability requirements are retained.

Support for Conforming Edits

The proposed revisions to §170.404 appropriately update the regulation to reflect the removal of
certification criteria at §170.315(g)(7) through (g)(9) and focus the API Condition on the FHIR-
based criterion at §170.315(g)(10) and the new criteria at §170.315(g)(31) through (g)(33).

Request for Confirmation

Health Universe relies on the API transparency and availability requirements in §170.404 to
discover and connect to certified health IT systems. In particular:

• Service base URL publication requirements at §170.404(b)(2) enable us to identify
API endpoints for health systems using certified technology.
 • API documentation requirements provide the technical information necessary to
develop integrations.
• Prohibitions on practices that inhibit API access protect third-party developers from
arbitrary restrictions on API use.

We request that ASTP/ONC confirm in the preamble to the final rule that these requirements
remain in full effect and that the conforming edits do not reduce the obligations of Certified API
Developers to publish service base URLs, maintain documentation, or refrain from practices that
inhibit API access.

I. Removal of C-CDA Standards

Health Universe conditionally supports the proposed removal of C-CDA companion guides and
related standards from certification requirements but requests that ASTP/ONC coordinate the
timing of C-CDA deprecation with TEFCA's transition to FHIR-based exchange.

Conditional Support

We agree that C-CDA represents legacy technology and that the Certification Program should
focus on FHIR-based standards. The proposed removals are consistent with ASTP/ONC's FHIR-
forward strategy and will reduce the burden on developers who currently must support both C-
CDA and FHIR capabilities.

Concerns Regarding TEFCA Transition

However, TEFCA currently relies on C-CDA for document-based exchange. While TEFCA is
developing FHIR-based exchange capabilities, the transition is not complete. Health Universe's
TEFCA connections, facilitated through Kno2 and other intermediaries, currently use C-CDA for
certain exchange transactions.

Removing C-CDA standards from certification requirements before TEFCA has fully
transitioned to FHIR alternatives could create a gap in which:

• Certified health IT is no longer required to support C-CDA capabilities
• TEFCA participants still need C-CDA capabilities for network exchange
• Developers face uncertainty regarding continued C-CDA support

Requested Modifications

We respectfully request that ASTP/ONC:

1.  Coordinate with the TEFCA Recognized Coordinating Entity (RCE) to align the
    timing of C-CDA deprecation in the Certification Program with TEFCA's FHIR adoption
    roadmap.
     2. Ensure that C-CDA standards remain available for voluntary use and certification,
    even if they are no longer required, during the transition period.
2.  Provide transition guidance for TEFCA participants and developers regarding the
    expected timeline for moving from C-CDA to FHIR-based exchange.
3.  Confirm that removal of C-CDA requirements does not prohibit continued C-CDA
    support by certified health IT. Developers who wish to maintain C-CDA capabilities for
    TEFCA or other purposes should be able to do so.

J. References to Emerging AI Interoperability Standards

Health Universe supports ASTP/ONC's recognition of emerging AI interoperability standards in
the preamble but requests that references be expanded to maintain technology neutrality and
accommodate the rapidly evolving landscape of AI agent protocols.

Support for Recognition of AI Interoperability Needs

We commend ASTP/ONC for recognizing in the preamble that emerging standards may support
"AI-enabled interoperability solutions that combine FHIR with newer standards." The reference
to Model Context Protocol (MCP), which "standardizes how applications provide context to
Large Language Models (LLMs)," demonstrates ASTP/ONC's awareness of the evolving
technical landscape for AI in healthcare.

Request for Technology Neutrality and Expanded References

We respectfully observe that the AI agent interoperability landscape has evolved significantly
since this proposed rule was being developed. Model Context Protocol (MCP), while important,
is one of several protocols now addressing how AI agents interact with external systems, data
sources, and each other.

Most notably, the Agent-to-Agent (A2A) Protocol, developed by Google and released in April
2025, has emerged as a significant standard for AI agent communication and coordination. A2A
addresses how AI agents discover each other's capabilities, negotiate interaction protocols, and
coordinate complex multi-step tasks—capabilities that are essential for sophisticated AI
applications in healthcare settings. Since its release, A2A has seen rapid adoption: within weeks
of its announcement, major technology companies including Salesforce, SAP, ServiceNow,
MongoDB, Intuit, Workday, Deloitte, and over 50 other organizations announced support for the
protocol. This rapid industry uptake demonstrates both the need for standardized AI agent
communication and the momentum behind protocols that emerged after the MCP reference in
this proposed rule was drafted.

Health Universe uses A2A as part of our agent architecture, and we are aware of additional
protocols under active development that may achieve comparable or greater adoption in
healthcare settings. ASTP/ONC's reference to MCP by name, while well-intentioned, risks
signaling a preference for one approach over others and could disadvantage developers who have
invested in alternative protocols that serve equivalent functions.

Requested Modifications

We respectfully request that ASTP/ONC make one or more of the following modifications:

1.  Expand preamble references to include A2A alongside MCP. Acknowledging both
    protocols as examples of emerging AI agent interoperability standards would provide a
    more complete and accurate picture of the current landscape without endorsing any single
    approach.
2.  Adopt technology-neutral language. Rather than referencing named protocols that may
    become outdated or may not reflect the full range of relevant standards, ASTP/ONC
    could use technology-neutral language such as "protocols that standardize how AI agents
    discover, interact with, and exchange information with health IT systems and each other."
    This framing would accommodate current and future standards without requiring
    regulatory amendments as the landscape evolves.
3.  Commit to ongoing monitoring of AI agent interoperability standards. Include in the
    preamble a statement that ASTP/ONC will monitor the development of AI agent
    interoperability standards through engagement with HL7, the FHIR community, and
    other standards bodies, and will consider the adoption of specific standards in future
    rulemaking as they mature.
4.  Consider future rulemaking on AI agent standards. AI agents accessing and
    exchanging EHI on behalf of patients and providers will become an increasingly
    significant part of the health IT landscape. ASTP/ONC should consider whether future
    rulemaking is needed to ensure that certified health IT supports standardized AI agent
    interactions—including discovery, authentication, authorization, and data exchange—in
    the same way it currently supports standardized API access.
5.  Engage with standards bodies. ASTP/ONC should actively engage with HL7, the FHIR
    community, and other standards development organizations on the development of
    healthcare-specific profiles and implementation guides for AI agent interoperability
    standards. Early engagement will help ensure that emerging standards are designed to
    meet healthcare-specific requirements for privacy, security, and clinical data integrity.

Health Universe looks forward to continued engagement with ASTP/ONC on AI agent
interoperability as this area continues to evolve rapidly. We would welcome the opportunity to
contribute to future rulemaking or standards development efforts in this space.

III. Issues Not Addressed by the Proposed Rule

In addition to our comments on specific provisions in the proposed rule, Health Universe
respectfully requests that ASTP/ONC address several issues that create significant barriers to AI
innovation in healthcare but are not addressed in the current proposal. We recognize that some of
these issues may require additional rulemaking or guidance rather than modification of the
current proposed rule, and we raise them here to ensure they are part of the record for future
regulatory action.

A. Lack of Standardized Write-Back Implementations (§170.315(g)(10) and Related
Provisions)

Health Universe appreciates the proposed removal of the third party seeking modification use
condition at §171.204(a)(3), which eliminates a significant legal barrier to write-back access.
However, we respectfully urge ASTP/ONC to recognize that removing the legal barrier is a
necessary but not sufficient condition for enabling third-party write-back in practice. The more
significant obstacle Health Universe and similarly situated developers face is the absence of
standardized technical implementations for write-back operations across certified EHR systems.

Current Technical Landscape

Each certified EHR system implements FHIR write operations—such as FHIR Create, Update,
and Patch—in ways that vary substantially across vendors and, in some cases, across versions
and instances of the same vendor's product. The absence of standardization manifests in several
ways that directly impede AI integration:

• Divergent validation rules. Each EHR applies its own data validation requirements to
incoming write requests, including requirements that go beyond what is specified in
FHIR base resources or US Core profiles. These requirements are frequently
undocumented, discovered only through trial and error, and subject to change without
notice.
• Inconsistent error handling. When write operations fail, the error responses returned by
certified EHR systems vary significantly in format, specificity, and usefulness. FHIR's
OperationOutcome resource provides a standard mechanism for communicating errors,
but its implementation is inconsistent, making it difficult for third-party applications to
programmatically diagnose and respond to write failures.
• Proprietary data model requirements. Some EHR systems require data submitted
through FHIR write operations to conform to proprietary extensions, code systems, or
data structures that are not reflected in published implementation guides or FHIR
profiles. Meeting these requirements demands extensive reverse engineering and creates
integration technical debt that must be maintained as EHR systems evolve.
• Absent or incomplete implementation guides. Unlike FHIR read operations—where
US Core and related implementation guides provide detailed specifications that certified
developers must conform to—there are no comparable implementation guides specifying
how certified EHR systems must implement FHIR write operations. This gap means that
even developers who successfully navigate legal barriers may face months of custom
integration work for each EHR system they wish to write back to.

Impact on AI Applications

Write-back standardization is particularly critical for AI-enabled clinical decision support. The
value proposition of AI in clinical settings depends substantially on the ability to return AI-
generated outputs—risk scores, recommendations, documentation drafts, workflow actions—to
the systems where clinicians work. An AI application that can read patient data but cannot write
its outputs back to the EHR is limited in the clinical value it can deliver. For Health Universe,
write-back is central to our platform's ability to integrate AI-generated oncology insights into
clinical workflows in a manner that is actionable and sustainable.

Requested Action

We respectfully request that ASTP/ONC:

1.  Acknowledge write-back standardization as a priority in the preamble to the final
    rule, recognizing that removing legal barriers to write-back must be accompanied by
    efforts to address technical barriers if the policy goal of enabling third-party write access
    is to be realized in practice.
2.  Commit to future rulemaking on FHIR write operation standards, including
    consideration of certification criteria that would require certified EHR systems to support
    standardized FHIR write operations in accordance with published implementation guides
    for common write-back use cases such as writing CDS Hooks responses, creating FHIR
    Observations, and updating care plan resources.
3.  Encourage adoption of emerging write-back implementation guides by referencing
    ongoing standards development work in the preamble and signaling ASTP/ONC's intent
    to consider these guides as the basis for future certification requirements.
4.  Engage with HL7 and the FHIR community to accelerate development of
    implementation guides that address write-back standardization for AI applications,
    including guides that specify how AI-generated resources should be identified, attributed,
    and managed within certified EHR systems.

We emphasize that this issue does not require modification of the current proposed rule and can
be addressed through separate rulemaking or guidance. We raise it here because the proposed
rule's removal of legal barriers to write-back creates an expectation—among health systems, AI
developers, and the clinicians they serve—that write-back will become more readily available.
That expectation will not be met if technical barriers remain unaddressed.

B. Discriminatory API Rate Limiting and Throttling Practices

Health Universe respectfully requests that ASTP/ONC address discriminatory API rate limiting
and throttling practices that disproportionately affect AI applications and may constitute
information blocking under the revised definitions proposed in this rule.

Nature of the Problem

The proposed revision to the definition of "access" in §171.102 to explicitly include "automation
technologies (e.g., robotic process automation, agentic artificial intelligence)" is an important
step toward recognizing AI-mediated access as legally equivalent to human-mediated access.
However, this definitional change does not, on its own, address a practice that effectively
impedes AI access without technically prohibiting it: the imposition of API rate limits and
throttling policies that are calibrated for human-scale access patterns and that render automated
AI access impractical or unusable.

AI applications, by their nature, make substantially more API calls than individual human users.
An AI platform that aggregates patient data for a population health application, ingests clinical
records for a cohort of oncology patients, or monitors real-time clinical data to generate time-
sensitive alerts necessarily generates API traffic at volumes and patterns that differ from a
clinician browsing a patient portal. Rate limits and throttling policies designed around human
access patterns may be entirely reasonable for their intended purpose while being effectively
prohibitive for AI applications.

Health Universe has directly experienced this barrier. We have encountered rate limits imposed
by certified EHR systems that:

• Restrict API calls to volumes appropriate for individual user sessions, making
population-scale data access infeasible for timely AI analysis
• Apply burst limits that prevent the parallel processing required for efficient AI data
ingestion
• Throttle bulk data access endpoints—which are specifically designed for automated
use—to speeds that make population-level queries impractical
• Apply differential rate limits to third-party developers compared to the EHR vendor's
own applications, despite those applications performing equivalent functions
• Provide no published documentation of rate limit policies, making it impossible to design
AI applications that reliably comply with undisclosed limits

Relationship to Information Blocking

We believe that API rate limits specifically designed to impede automated access, or applied in a
discriminatory manner to third-party AI applications compared to EHR vendors' own products,
may constitute information blocking under the revised definitions in this proposed rule. An actor
that imposes rate limits calibrated to prevent AI-mediated access—rather than to manage
legitimate infrastructure concerns—is engaging in a practice that has the effect of interfering
with the access of automation technologies in a manner that the revised definitions are intended
to prevent.

We recognize that not all rate limiting constitutes information blocking. Reasonable rate limits
applied to protect system performance and security, applied consistently across all API
consumers, and documented transparently serve legitimate purposes and should not be
characterized as information blocking. The problem is the absence of any clear standard
distinguishing permissible rate limiting from discriminatory impediment to AI access.

Requested Action

We respectfully request that ASTP/ONC:
 1. Clarify in the preamble to the final rule that rate limiting policies specifically designed
to impede automated or AI-mediated access, or applied in a discriminatory manner to
third-party AI applications compared to the EHR vendor's own applications, may
constitute information blocking under the revised definitions in §171.102. 2. Distinguish permissible from impermissible rate limiting, providing guidance that a
rate limit is permissible if it: (a) is applied consistently to all API consumers performing
similar functions; (b) is documented transparently in published API documentation; (c) is
calibrated to address legitimate infrastructure or security concerns rather than to impede
specific classes of users; and (d) provides a process by which API consumers with
legitimate high-volume use cases can request appropriate rate limit adjustments. 3. Require transparency in rate limit policies as a condition of the API Condition of
Certification at §170.404. Certified API Developers should be required to publish their
rate limit policies, including any differential limits applicable to different classes of API
consumers, as part of their required API documentation. 4. Consider requiring rate limit parity between the EHR developer's own applications
and third-party applications performing equivalent functions, as part of the prohibition on
practices that interfere with third-party API access in §170.404. 5. Address this issue in future guidance on information blocking enforcement, providing
additional examples of technical practices—including rate limiting, throttling, and access
impediments—that may constitute information blocking.

C. Excessive Contracting Timelines

Health Universe respectfully requests that ASTP/ONC address contracting timeline delays as a
form of access impediment that effectively denies access to electronic health information,
notwithstanding the proposed provisions addressing contract terms.

Nature of the Problem

The proposed addition of contract fairness requirements at §171.301(a)(2)(iii)—prohibiting
contracts of adhesion, unconscionable terms, and above-market rates—addresses the terms of
agreements governing access to EHI. We strongly support these provisions, as described in
Section I.D of this letter. However, the fairness of contract terms is distinct from, and does not
address, the problem of contracting timeline delays that Health Universe and similarly situated
developers routinely experience when seeking API access to certified EHR systems.

In Health Universe's experience, executing the agreements necessary to access patient data
through certified EHR APIs requires, on average, nine months or more from initial request to
executed agreement. We have experienced individual contracting processes lasting eighteen
months or longer. During this period, health systems that have contracted with Health Universe
for AI-enabled clinical decision support cannot deploy our platform for their patients, and
patients who might benefit from AI-assisted oncology care are denied that benefit.

The mechanisms through which contracting delays operate as access impediments include:
 • Repeated requests for documentation that have no clear connection to the EHR
vendor's legitimate interests in the proposed access arrangement, which restart review
processes and extend timelines indefinitely
• Legal review cycles involving multiple rounds of redline comments on provisions that
are ultimately accepted with minimal modification, a pattern inconsistent with good-faith
negotiation
• Internal approval workflows that are presented as standard processes but appear
designed to slow rather than facilitate agreement execution
• Escalating requirements that emerge only after earlier conditions have been satisfied,
such that the completion of one requirement reveals previously undisclosed additional
requirements
• No accountability for timeline, as EHR vendors face no obligation to respond to
requests, complete reviews, or execute agreements within any defined period

Relationship to Information Blocking

Contracting delays that exceed any reasonable business process timeline, and that are imposed in
a manner that appears designed to defer rather than facilitate access, may constitute information
blocking under the Infeasibility Exception and Manner Exception provisions even as those
provisions are currently written. An actor that nominally agrees to provide access but engages in
a contracting process designed to delay that access indefinitely is not engaging in the good-faith
conduct contemplated by the exceptions.

The proposed revisions to the Manner Exception exhausted condition at §171.204(a)(4)—
specifically, the provisions addressing anti-discrimination and the requirement to offer all
available alternative manners—are important steps. But they do not address a scenario in which
an actor is nominally willing to reach agreement but takes no meaningful steps to do so. Without
timeline accountability, the information blocking framework can be circumvented through delay
as readily as through refusal.

Requested Action

We respectfully request that ASTP/ONC:

1.  Acknowledge contracting delays as a potential form of information blocking in the
    preamble to the final rule, recognizing that the purpose of the information blocking
    provisions is to ensure that EHI is made available in a timely manner and that delays can
    be as harmful as denials.
2.  Consider establishing reasonable timeline requirements for the contracting process,
    such as a requirement that actors respond to requests for EHI access within a defined
    period (for example, thirty days) with either an executed agreement, a counter-proposal,
    or a written explanation of the basis for any requested modifications.
3.  Require good-faith engagement throughout the contracting process. The preamble
    should clarify that an actor who nominally agrees to provide access but takes no
    meaningful steps to complete the contracting process within a reasonable timeframe may
    be engaging in information blocking.
     4. Consider requiring published standard agreements for common EHI access use cases.
    Standardized, pre-negotiated agreement templates for common scenarios—such as FHIR
    API access for third-party clinical decision support applications—would substantially
    reduce contracting timelines while ensuring that both parties' legitimate interests are
    addressed.
4.  Address contracting timelines in future guidance on information blocking
    enforcement, including clear examples of behaviors that would constitute information
    blocking through delay rather than refusal.

We recognize that establishing specific timeline requirements may require additional rulemaking
and that the current proposed rule may not be the appropriate vehicle for such requirements. We
raise this issue here because it represents one of the most significant practical barriers to AI
innovation in healthcare and because the record of this rulemaking provides an opportunity to
document its impact and lay the groundwork for future action.

D. Enforcement Mechanisms for Information Blocking

Health Universe respectfully requests that ASTP/ONC provide additional clarity regarding the
enforcement mechanisms applicable to information blocking violations and the priorities that
will guide enforcement activity as the regulatory framework is revised by this proposed rule.

Context

The proposed rule makes significant changes to the information blocking regulatory
framework—removing conditions from the Infeasibility Exception, adding contract fairness
requirements to the Manner Exception, and clarifying the definitions of "access," "use," and
"exchange" to include AI and automation technologies. These changes will be meaningful only
to the extent that they are accompanied by credible enforcement. Without a reasonable
expectation of enforcement, actors who benefit from withholding EHI access have limited
incentive to change their practices.

Health Universe is aware that civil monetary penalties for information blocking have been
available since June 2023 for health IT developers, exchanges, and networks. We commend
ONC and the HHS Office of Inspector General for establishing this enforcement framework.
However, enforcement actions have been rare, the complaint review process is opaque to
complainants, and there is limited public information regarding how complaints are evaluated,
prioritized, and resolved. This opacity creates uncertainty that discourages actors who have
experienced information blocking from filing complaints and limits the deterrent effect of the
enforcement framework.

We are also aware that Health Universe, as a third-party developer seeking access to EHI held by
other actors, is not itself a party with a private right of action for information blocking violations.
The absence of a private right of action means that our remedies are limited to filing complaints
with ONC, which then exercises discretion regarding whether and how to pursue enforcement.
This structure creates a practical barrier to accountability, particularly for developers who are
concerned about the reputational and business relationship consequences of filing complaints
against EHR vendors with whom they must maintain ongoing commercial relationships.

Requested Action

We respectfully request that ASTP/ONC:

1.  Clarify enforcement priorities for information blocking in the preamble to the final
    rule, identifying the categories of conduct that will receive priority attention from
    enforcement agencies and signaling to the market that the revised framework will be
    actively enforced.
2.  Provide transparency into the complaint review process, including the factors that
    ONC considers when evaluating complaints, the typical timeline for complaint review
    and resolution, and the range of outcomes that complainants can expect. This
    transparency would encourage actors who have experienced information blocking to use
    the complaint process and would improve accountability for actors engaging in blocking
    conduct.
3.  Publish enforcement statistics and outcomes on a regular basis, including the number
    of complaints received, the categories of conduct alleged, the disposition of reviewed
    complaints, and any enforcement actions taken. This information would inform the health
    IT community about the types of conduct that have been found to constitute information
    blocking and would contribute to a clearer understanding of the boundaries of permissible
    conduct.
4.  Consider expedited review procedures for complaints alleging egregious or ongoing
    information blocking, particularly where the blocking is causing immediate harm to
    patients or providers. A complaint process that takes years to resolve does not provide
    timely relief for developers who are being denied access or for the health systems and
    patients who depend on that access.
5.  Clarify the coordination between ONC and OIG on information blocking
    enforcement, including the criteria for referral of complaints from ONC to OIG and the
    process by which enforcement actions are pursued. This clarity would reduce uncertainty
    among both complainants and actors regarding the potential consequences of information
    blocking conduct.
6.  Consider the impact of this proposed rule's deregulatory provisions on enforcement
    balance. This rule substantially reduces certification requirements and removes
    conditions from information blocking exceptions. These changes are appropriate where
    the removed requirements created burden without corresponding benefit. However,
    ASTP/ONC should affirmatively state in the preamble that reducing certification burden
    does not signal reduced commitment to enforcing the information blocking provisions
    that remain. The deregulatory thrust of this rule should not be read as a relaxation of
    enforcement priorities for conduct that remains prohibited.

We recognize that enforcement policy involves the exercise of discretion by multiple agencies
and that some of the changes we request may not be achievable through this rulemaking. We
raise these issues here because the credibility of the information blocking framework is essential
to the practical impact of the provisions we support in this letter. Provisions that are not enforced
do not change behavior.

Conclusion

Health Universe appreciates the opportunity to submit these comments and commends
ASTP/ONC for this proposed rule's thoughtful approach to reducing regulatory burden while
advancing interoperability. The provisions we support—particularly the explicit inclusion of AI
and automation in information blocking definitions, the removal of write-back barriers, the
strengthening of contract fairness protections, and the reduction of certification burden—
represent meaningful progress toward a health IT ecosystem where AI-enabled clinical decision
support can be developed, deployed, and integrated into care delivery with greater ease and less
unnecessary friction.

We also recognize the challenges inherent in deregulatory action: removing requirements that
have not achieved their intended purposes while preserving protections that serve genuine
regulatory interests. Our comments on voluntary transparency pathways, data scope clarification,
and C-CDA transition timing reflect our view that the proposed rule can achieve its deregulatory
objectives while preserving important market incentives for responsible AI development.

The issues we have raised in Section III—write-back standardization, rate limiting, contracting
timelines, and enforcement transparency—are not obstacles to finalization of this rule. They are
the next frontier for regulatory attention once this rule's provisions take effect. We look forward
to engaging with ASTP/ONC on each of these issues through future rulemaking, guidance, and
stakeholder engagement processes.

Health Universe is committed to advancing a health IT ecosystem in which AI can improve
patient outcomes, and we appreciate ASTP/ONC's continued engagement with the health IT
community. We welcome the opportunity to discuss any of our comments in greater detail.

Respectfully submitted,

Dan Caron
Chief Executive Officer, Health Universe

Douglas B Fridsma, MD PhD
Chief Science Officer, Health Universe
