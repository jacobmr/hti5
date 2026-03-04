# HHS-ONC-2025-0005-0216 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0216/attachment_1.pdf

---

February 27, 2026

Department of Health and Human Services
Assistant Secretary for Technology Policy/Office of the National Coordinator for Health
Information Technology
Attention: Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory
Actions to Unleash Prosperity Proposed Rule
Mary E. Switzer Building, Mail Stop: 7033A
330 C Street, S.W.
Washington, DC 20201

Re: RIN 0955-AA09 — HTI-5 Proposed Rule: Comment on the Proposed Removal
of Decision Support Intervention Source Attributes, Intervention Risk
Management, and Privacy/Security Certification Criteria

Dear Assistant Secretary Lipinski and ASTP/ONC Staff,

I am submitting this comment as an independent healthcare technology consultant with
professional experience in quality improvement, healthcare operations, and clinical
technology implementation. I also serve on the American Physical Therapy Association
(APTA) Artificial Intelligence Taskforce. These comments are my own and do not
represent the official position of APTA, though I am sharing this letter with the taskforce
for their consideration.

I write to respectfully oppose the proposed removal of the Decision Support Intervention
(DSI) source attribute requirements at §170.315(b)(11)(iv) and (v), the Intervention Risk
Management (IRM) requirements at §170.315(b)(11)(vi), and the privacy and security
certification criteria at §170.315(d)(2), (d)(3), and (d)(10). I share ASTP/ONC’s
commitment to reducing unnecessary regulatory burden and accelerating responsible AI
innovation in healthcare. However, I believe the proposed removal of all transparency
and risk management requirements—rather than a targeted revision of those
requirements—would create a governance vacuum that ultimately slows adoption,
increases institutional risk, and undermines patient safety.

My core argument is this: the model card is not a bureaucratic artifact. It is the
implementation infrastructure that enables health systems to deploy AI responsibly,
iterate on it safely, and maintain the trust necessary for durable, broad-based adoption.
Removing it does not unleash innovation: it removes the guardrails that make
innovation sustainable.

I. The Model Card Enables Implementation, Not Bureaucracy
ASTP/ONC states that “we have no publicly available evidence indicating that a single
doctor, nurse, or administrator has accessed, recorded, or modified a single source
attribute” since HTI-1’s DSI requirements took effect on January 1, 2025. This
observation, while notable, does not support the conclusion that transparency
requirements lack value. The requirements had been live for less than twelve months
when HTI-5 was drafted. Organizations were still in the process of operationalizing
compliance. The Coalition for Health AI (CHAI), a consortium of approximately 3,000
organizations including Providence, Cleveland Clinic, and Kaiser Permanente, launched
its Applied Model Card framework and public registry in February 2025 specifically to
help organizations implement HTI-1’s source attribute requirements. Concluding that a
policy has failed before the ecosystem has fully adopted it is premature.

More fundamentally, the value of the model card is not measured by how many
individual clinicians access source attributes during a patient encounter. That was never
the primary use case. The value lies in what happens before the model reaches the
clinician: the institutional evaluation, validation, and governance processes that
determine whether a predictive DSI should be deployed at all, and under what
conditions. Quality teams, clinical informatics departments, compliance officers, and AI
governance committees use model card information to make procurement and
deployment decisions. To use an analogy: the fact that a surgeon does not personally
review the FDA 510(k) clearance documentation for a surgical instrument before each
procedure does not mean that regulatory review of medical devices is unnecessary. The
value of the documentation is realized upstream, in the evaluation and selection
process.

I would offer a practical framing. A model card functions like a job description and
curriculum vitae for a predictive algorithm. It tells the deploying organization where the
model has been (training data and development), what experience it brings (validation
and performance), and what it is qualified to do within the role it has been hired for
(intended use, intended population, cautioned out-of-scope uses). No responsible
organization hires an employee without reviewing their qualifications, and no
responsible health system should deploy a clinical AI tool without equivalent
documentation. HTI-1’s 31 source attributes provided a structured, standardized format
for this documentation. Without that regulatory floor, health systems are left to negotiate
transparency on a vendor-by-vendor basis, with predictable asymmetries in bargaining
power.

Critically, the model card also supports safe iteration. When a health system updates,
fine-tunes, or replaces a predictive model, the documented baseline, including
performance metrics, intended use, training data characteristics, and known limitations,
provides the reference point against which the new version is evaluated. Without that
baseline documentation, organizations lose the ability to conduct meaningful before-
and-after comparisons when iterating on deployed models. This is not a theoretical
concern; it is a practical requirement for responsible version management of clinical AI.

II. Fairness Documentation Is a Patient Safety Imperative
A January 2025 study published in Health Affairs found that while 65% of American
hospitals now use AI-powered predictive models, only 44% examine those models for
bias. This is precisely the gap that the source attribute requirements in categories 5 and
7, fairness processes, internal fairness measures, and external fairness measures, were
designed to address.

The United States healthcare data ecosystem does not yet produce data that is truly
representative of the national population. Training datasets are disproportionately
sourced from large academic medical centers, which serve patient populations that
differ systematically from those seen in community hospitals, rural critical access
facilities, federally qualified health centers, and safety-net providers. These differences
are not limited to race and ethnicity, though those disparities are well-documented, but
extend to geographic context (suburban, urban, rural), socioeconomic status, insurance
coverage patterns, language, and the social determinants of health that shape disease
presentation and healthcare utilization.

When a predictive model trained predominantly on data from urban academic medical
centers is deployed in a rural critical access hospital, there is a meaningful statistical
risk that its performance characteristics, sensitivity, specificity, positive predictive value,
area under the receiver operating characteristic curve (AUROC), and the threshold
selected to balance false positive and false negative rates, will differ from what was
observed during development. This is not speculation; it is a known property of
supervised machine learning models operating on out-of-distribution data.

The HTI-1 source attributes requiring disclosure of demographic representativeness of
training data, approaches to ensure output fairness, and approaches to manage or
reduce bias gave health systems the minimum information necessary to evaluate
whether a model was appropriate for their specific patient population. Without these
disclosures, a community health center serving a predominantly Spanish-speaking
population has no standardized mechanism to determine whether the sepsis prediction
model embedded in their EHR was trained on data that included meaningful
representation of that population.

I would also note that the threshold selection rationale, the decision about where to set
the cutoff between a positive and negative prediction, is a value judgment with direct
clinical consequences. A sepsis model calibrated for high sensitivity will generate more
false positives (unnecessary workups) but fewer missed cases. A model calibrated for
high specificity will miss more true cases but generate fewer false alarms. The
appropriate threshold depends on the clinical context, the patient population, and the
risk tolerance of the deploying organization. Without documentation of how and why
a particular threshold was selected, health systems cannot make informed
decisions about whether that threshold is appropriate for their setting. This is
fundamental to clinical governance of AI.

Until healthcare data can be truly representational of the U.S. population, the ability to
measure, document, and disclose how model outputs may differ across populations is
not a regulatory burden: it is a patient safety necessity. Removing fairness
documentation requirements does not make bias disappear; it makes bias invisible.

III. Ongoing Maintenance Documentation Is the Foundation for
Systems-Level Quality Management
HTI-1’s source attribute categories 8 and 9, covering validity monitoring process and
frequency, fairness monitoring process and frequency, update process and frequency,
and performance correction process and frequency, established the certification-level
expectation that predictive DSIs would be subject to ongoing surveillance, not just point-
in-time validation. This is not an abstract regulatory requirement. It is the documentation
infrastructure required for root cause analysis when a deployed AI system’s
performance degrades.

Model drift or the gradual degradation of a predictive model’s performance as the
underlying data distribution shifts over time, is a well-characterized phenomenon in
machine learning. Clinical data distributions change due to shifts in patient
demographics, coding practice updates (e.g., ICD-10-CM annual revisions), changes in
treatment protocols, seasonal variation in disease prevalence, and even EHR workflow
modifications that alter how structured data is captured. A model that performs well at
deployment can silently degrade over months or years without any external
indication that its outputs are becoming less reliable.

From a quality improvement and systems engineering perspective, detecting and
responding to model drift requires two things:

1.  A documented performance baseline, and

2.  A defined monitoring process.

The HTI-1 source attributes provided both. The quantitative performance measures
(category 7) established the baseline. The ongoing maintenance attributes (categories
8–9) documented the process and cadence for monitoring against that baseline.
Together, they created the minimum documentation necessary for a Plan-Do-Study-Act
(PDSA) cycle applied to clinical AI, the same continuous improvement methodology that
underpins every other aspect of healthcare quality management.

Without baseline performance documentation, a health system that detects a
change in clinical outcomes potentially attributable to a predictive model has no
reference point from which to conduct root cause analysis. Was the model always
performing at this level? Has there been degradation? Was the model appropriate for
this population from the outset? These are the fundamental questions that quality
teams, patient safety officers, and risk managers need to answer, and they cannot
answer them without the documentation that HTI-1 required.

This concern is compounded by the growing practice of health systems fine-tuning or
further training predictive models to meet the specific needs of their patient population.
HTI-1’s “supplied by” framework created a workable, if imperfect, accountability
structure: developers documented their base model, and the certified Health IT Module
provided the technical infrastructure for health systems to document their local
modifications. HTI-5 eliminates both the developer’s documentation obligation and the
infrastructure requirement. The result is that a locally fine-tuned model, which may have
been validated against data that differs substantially from the original training set, would
have no standardized documentation, no baseline for comparison, and no certification-
level expectation for ongoing monitoring.

IV. The Simultaneous Removal of Audit Trail Certification Criteria
Compounds the Risk
The proposed removal of the privacy and security certification criteria at §170.315(d)(2)
(auditable events and tamper-resistance), §170.315(d)(3) (audit reports), and
§170.315(d)(10) (auditing actions on health information) warrants separate concern.
ASTP/ONC’s rationale, that these capabilities are “widely adopted” and independently
required under HIPAA, may be accurate for general EHR audit logging. However, in the
context of AI-driven decision support, the removal of audit trail requirements creates a
specific and concerning gap: the loss of the certification-level expectation for decision-
level logging of AI recommendations and clinician responses.

HTI-1’s feedback loop requirement at §170.315(b)(11)(ii)(C) created a structured
mechanism for tracking when an AI-generated recommendation was presented, what
action the clinician took (followed, modified, or rejected the recommendation), and
associated contextual data. This override log is not merely a compliance artifact, it is
essential data for evaluating real-world model performance, identifying patterns of
clinician disagreement that may signal model problems, and supporting both internal
quality review and external litigation defense.
Health systems operating under Business Associate Agreements (BAAs) with
technology vendors already face significant information asymmetry regarding the AI
tools embedded in their certified health IT. Many BAAs, negotiated from a position of
unequal bargaining power, limit the covered entity’s ability to audit, inspect, or
independently validate the vendor’s algorithmic tools. The HTI-1 transparency
requirements provided a regulatory floor that partially offset this asymmetry. Removing
both the transparency documentation and the audit trail requirements simultaneously
leaves covered entities with neither the information to evaluate AI tools nor the
infrastructure to monitor their real-world performance: a concerning position from both a
compliance and a litigation preparedness standpoint.

V. A Compromise Proposal: Retain a Minimum Viable Transparency
Framework
I recognize that the full 31-attribute source attribute framework may impose costs that,
in some cases, exceed the benefits for specific types of DSIs. I do not argue that the
HTI-1 framework was perfect or that it should remain unchanged indefinitely. However,
the appropriate response to an imperfect framework is revision, not elimination.

I respectfully recommend that ASTP/ONC retain a streamlined subset of the source
attribute requirements focused on the attributes most critical for institutional
governance, fairness evaluation, and ongoing quality management. Specifically, I
recommend retaining:

• Core identity and purpose attributes (categories 1–3): Developer identification,
output description, intended use, intended population, intended decision-making
role (informs, augments, or replaces clinical judgment), and cautioned out-of-
scope uses. These are the minimum information a deploying organization needs
to evaluate fit-for-purpose.

• Training data representativeness and fairness process attributes
(categories 4–5): Demographic representativeness of training data, use of
demographic or SDOH variables as input features, approach to ensure output
fairness, and approaches to manage or reduce bias. Until healthcare data
achieves equitable representation, these disclosures are essential for population-
appropriate deployment decisions.

• Quantitative performance measures (category 7): Internal validity and internal
fairness measures, with external validity and fairness where available. These
establish the documented baseline necessary for ongoing monitoring, drift
detection, and root cause analysis. I would additionally recommend that
ASTP/ONC work with CHAI, AMIA, and other stakeholders to develop guidance
 on minimum performance reporting standards, including AUROC, sensitivity,
specificity, and false positive/negative rates with threshold selection rationale,
that would make this category more actionable than HTI-1’s current open-ended
“quantitative measures of validity” framing.

• Ongoing maintenance attributes (categories 8–9): Validity and fairness
monitoring process and frequency, and update/correction process and frequency.
These are the foundation for continuous quality improvement applied to clinical
AI.

• The IRM requirement at §170.315(b)(11)(vi), with the flexibility for developers to
use NIST AI RMF or equivalent frameworks. Risk management is not optional for
clinical technology; it is the standard of care.

• A local adaptation addendum requirement: When a health system takes a
certified model and fine-tunes or further trains it for a specific population or use
case, the system should be required to document the modifications, the data
used for fine-tuning, the performance of the modified model against the base
model’s documented baseline, and any changes to the intended use or
population. This addendum would function as a supplement to the developer’s
original model card, tracking the model’s evolving “work history” through its
deployment lifecycle.

This streamlined framework would preserve the core transparency infrastructure while
meaningfully reducing the documentation burden that developers have identified as
problematic. It would align with the CHAI Applied Model Card framework that nearly
3,000 healthcare organizations have already begun operationalizing. And it would
maintain the regulatory floor necessary to prevent a race-to-the-bottom dynamic in
which vendors who invest in transparency bear costs that competitors who don’t, can
avoid.

VI. Conclusion
I share ASTP/ONC’s goal of fostering an AI-enabled future in healthcare. I believe that
future is best achieved through thoughtful consideration of the transparency parameters
necessary prior to implementing AI in high-stakes, high-risk clinical environments, not
by removing those parameters after they have barely taken effect. The model card does
not slow innovation; it provides the documentation infrastructure that makes innovation
sustainable, auditable, and trustworthy.

Data quality enables accuracy. Accuracy enables trust. Trust enables adoption. This
chain cannot be sustained without the transparency documentation that lets health
systems verify accuracy, evaluate fairness, monitor for drift, and conduct root cause
analysis when outcomes diverge from expectations. Removing the model card
requirement does not eliminate the need for this information, it merely makes obtaining
it optional, precisely when the pace of AI deployment in healthcare demands that it be
standard.

I respectfully urge ASTP/ONC to revise rather than eliminate the DSI transparency and
risk management requirements, retaining the minimum viable framework described
above. I further urge the retention of audit trail certification criteria at §170.315(d)(2),
(d)(3), and (d)(10) as they apply to AI-driven decision support, given the unique
governance challenges that predictive and generative AI tools present in clinical
workflows.

Thank you for the opportunity to comment on this important proposed rule. I welcome
any follow-up questions.

Respectfully submitted,

Caroline J. Morrow, PT DPT CPHQ
A Board-Certified Specialist in Orthopedics and Board-Certified Healthcare Executive
with AI in Healthcare Certifications from both MIT and Stanford
Managing Director
CJM Strategic Consulting, LLC
