# HHS-ONC-2025-0005-0066 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0066/attachment_1.pdf

---

MLCommons Medical AI Working Group
Response to HHS Request for Information and Proposed Rule

Advancing the Quintuple Aim Through AI-Enabled Healthcare

Response to:

1.  Request for Information: Accelerating the Adoption and Use of Artificial Intelligence as Part
    of Clinical Care (Document No. 2025-23641, RIN 0955-AA13)

2.  Proposed Rule: Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory
    Actions To Unleash Prosperity (Document No. 2025-23896, RIN 0955-AA09)

Submitting Organization
MLCommons’ Medical AI Working Group

Contact: medical-chairs@mlcommons.org

Submission Date: 2026-02-22
Table of Contents

About MLCommons and the Medical AI Working Group............................................................3
Executive Summary................................................................................................................... 5
Part I: Response to RFI on Accelerating AI Adoption in Clinical Care....................................... 7
Framing: AI as an Enabler of the Quintuple Aim.................................................................. 7
Regulation............................................................................................................................ 7
Reimbursement.................................................................................................................... 8
Research & Development.................................................................................................... 9
Responses to Specific Questions.......................................................................................11
Part II: Response to Proposed Rule on Health Data, Technology, and Interoperability........... 21
Support for FHIR-Based Approach.................................................................................... 21
Comments on Specific Provisions......................................................................................21
Considerations for AI-Enabled Health IT............................................................................24
Alignment Between Initiatives: A Unified Vision for the Quintuple Aim.................................... 25
Conclusion............................................................................................................................... 26
Acknowledgments.................................................................................................................... 26
Appendix: Mapping MLCommons Infrastructure to HHS Initiatives......................................... 27
About MLCommons and the Medical AI Working Group
MLCommons is a non-profit consortium that aims to accelerate the benefits of machine learning
and artificial intelligence. Our members and partners include over 125 organizations from
around the world, many of which are leading technology companies, startups, academics, and
nonprofits that are actively researching, developing, and deploying artificial intelligence products
for customers. Critically, our founding membership includes academic researchers at the
forefront of machine learning research, and the research community continues to be core to our
membership helping to lead many of our working groups. MLCommons acts as a neutral nexus
for commercial and non-commercial actors to collaborate on tools that advance the field.

We create, operate and maintain community assets, especially benchmarks and datasets, that
facilitate developing and evaluating artificial intelligence (AI) systems in pursuit of our mission to
“make artificial intelligence better for everyone.”[1] The original project that brought
MLCommons into being is a benchmarking suite called MLPerf, which provides objective
evaluations of training and inference speed for AI hardware and software.[2] These
measurements enable a fair comparison of competing systems, accelerate ML progress through
fair and useful measurement, enforce reproducibility to ensure reliable results, and do so in an
open and collaborative way to keep benchmarking affordable for all participants.

The MLCommons Medical AI Working Group develops benchmarks and best practices that help
accelerate AI development in healthcare through an open, neutral, and scientific approach. Our
efforts are geared towards creating the fabric necessary for proper benchmarking of medical AI
through:

(1) developing the federated MedPerf platform[3] and GaNDLF framework[4],

(2) establishing shared standards for benchmarking medical AI,

(3) incorporating and disseminating best practices, and

(4) creating a robust medical AI ecosystem by partnering with key global stakeholders across
sectors.

Our Platform & Tools:

Tool Purpose Relevance to HHS Initiatives
MedPerf Federated benchmarking platform Enables AI evaluation across varied
for evaluating AI on real-world populations while preserving privacy;
medical data without data leaving supports post-market monitoring
provider premises

GaNDLF Zero/low-code framework for Accelerates AI development with
developing ML workflows in standardized, reproducible pipelines
healthcare
 Croissant Metadata format for ML-ready Addresses data interoperability and
datasets[5] reproducibility challenges
AILuminate Benchmark suite for evaluating AI Supports safety evaluation for clinical
risk and reliability[6] AI systems

MedPerf is currently being utilized in the largest federated AI research study for
postoperative glioblastoma patients (FeTS 2.0), demonstrating that federated evaluation can
operate at scale across 53 institutions globally.[7] This study analyzed 10,208 follow-up
timepoints from postoperative glioblastoma patients, achieving record performance that
exceeded centralized approaches while ensuring patient imaging data never left institutional
premises.

Our working group has included participation from patient groups, academic medical centers
(e.g., Harvard Medical School, Indiana University, Stanford University School of Medicine,
University of Pennsylvania, Weill Cornell Medicine, Dana-Farber Cancer Institute, among
others), commercial companies (e.g., Google, NVIDIA, IBM Research, Intel, Hugging Face,
Microsoft, John Snow Labs, etc.), healthcare institutions (e.g., Brigham and Women’s Hospital,
Dana-Farber Cancer Institute, etc.), and non-profit organizations spanning multiple countries.

For more information, visit mlcommons.org/medical or contact medical-chairs@mlcommons.org
Executive Summary
This response addresses two interconnected HHS initiatives: the Request for Information on
Accelerating AI Adoption in Clinical Care (RIN 0955-AA13) and the proposed deregulatory rule
on Health Data, Technology, and Interoperability (RIN 0955-AA09). We support both initiatives
and believe they represent a historic opportunity to advance the Quintuple Aim through
responsible AI deployment:

Quintuple Aim How AI Can Advance It How These HHS Initiatives
Dimension Enable It
Improving Population AI-enabled screening, early FHIR APIs enable
Health detection, risk stratification population-level analytics;
across populations reduced information blocking
enables public health AI

Enhancing Patient Reduced wait times, better Interoperability enables AI to
Experience care coordination, synthesize information across
personalized treatment providers

Reducing Per Capita Automation of administrative Deregulation reduces
Cost tasks, reduced unnecessary compliance burden; federated
testing, optimized resource evaluation reduces duplicate
allocation validation costs; transparency
reduces friction

Improving Provider Clinical documentation Streamlined AI integration
Work Life assistance, decision support, through standardized APIs;
reduced alert fatigue reduced administrative
overhead

Healthcare Delivery Performance monitoring Federated evaluation across
Optimization across demographics, geographically varied sites;
identification of performance standardized data enables
variations, expanded access performance optimization

Our recommendations are drawn from our collective expertise and experiences as a technical
collaborative community of ML researchers and engineers in industry and academia. We have
previously provided detailed technical recommendations to the FDA regarding real-world
evaluation of AI-enabled medical devices (Docket No. FDA-2025-N-4203), and this response
builds upon that foundation while addressing the broader policy questions raised by HHS.
AI is poised to transform healthcare delivery, but adoption can be slow unless standardized
evaluation of available AI tools matures to the point of establishing trust and credibility amongst
adopters and patients alike. MLCommons is the leading AI evaluation organization in the world,
and its Medical working group is an open collaborative community working to bring
multidisciplinary expertise in AI evaluation to the problems of healthcare delivery specifically
through a federated evaluation approach that respects data and model ownerships.

Key Themes of Our Response:

1.​ Interoperability is foundational for AI and the Quintuple Aim: The proposed
FHIR-forward approach directly enables AI evaluation, benchmarking, and deployment
at scale. Standardized data access through FHIR APIs creates the technical
infrastructure necessary for AI systems to integrate into clinical workflows and deliver on
all five aims. AI governance described through technical policies can bring transparency
and integrity of sensitive workloads.
2.​ Federated evaluation addresses critical barriers while optimizing delivery: Many
barriers to AI adoption stem from data access challenges and evaluation difficulties. Our
MedPerf platform demonstrates that federated approaches can enable robust AI
evaluation while preserving data privacy, security, and enabling performance
assessment across varied populations.
3.​ Open, neutral benchmarking accelerates trust and reduces costs: Industry-driven,
transparent evaluation methods provide the foundation for clinician and patient trust in AI
systems while reducing duplicative validation efforts. HHS can support these efforts
through cooperative agreements and recognition of community-developed standards.
4.​ Deregulation should preserve AI safety guardrails: While we support reducing
unnecessary certification burden, we encourage HHS to ensure that mechanisms for
evaluating AI safety and effectiveness remain robust, particularly for high-risk clinical
applications. Technical policies can help facilitate such requirements.
5.​ American leadership requires coordinated action: The United States can cement its
position as the global leader in clinical AI through the coordinated approach represented
by these initiatives. Open standards and federated infrastructure developed here can
become the global model.

Part I: Response to RFI on Accelerating AI Adoption in
Clinical Care
Framing: AI as an Enabler of the Quintuple Aim
Before addressing specific questions, we emphasize that AI adoption should be evaluated
through the lens of the Quintuple Aim. AI tools that improve one dimension while degrading
another (e.g., improving efficiency while creating performance gaps across populations) should
be considered unfit for adoption in clinical workflow. The evaluation and monitoring frameworks
we propose below are designed to assess AI impact across all five dimensions.

Regulation
HHS seeks feedback on how current regulations impact AI adoption. We offer the following
observations:

Alignment Across Agencies is Critical

The healthcare AI ecosystem involves multiple regulatory touchpoints: FDA for medical devices,
CMS for reimbursement, and ONC for health IT certification. We commend HHS for taking a
coordinated approach through this RFI. However, we note that AI systems often span multiple
regulatory categories. For example, an AI system that assists with clinical decision-making may:

       Require FDA clearance as a medical device
       Need to integrate with certified EHR systems under ONC rules
       Affect billing and documentation practices under CMS programs

We recommend that HHS establish clear guidance on regulatory pathways that accounts for
these overlapping jurisdictions. A unified framework would reduce uncertainty for developers,
accelerate time-to-deployment for beneficial AI tools, and ultimately advance the Quintuple Aim
by removing barriers to innovation.

Support for Non-Device AI Evaluation

For AI tools that fall outside FDA medical device jurisdiction, there is currently limited guidance
on appropriate evaluation methods. Our working group has developed extensive experience in
AI evaluation frameworks that could inform voluntary guidance for non-device clinical AI.

We propose the following evaluation framework aligned with the Quintuple Aim:

Evaluation Domain Key Metrics Quintuple Aim Alignment
Clinical Safety False negative rates, adverse Population Health, Patient
events, time-to-intervention delays Experience
Effectiveness Sensitivity/specificity, diagnostic Population Health
concordance, outcome prediction
accuracy
Reliability System uptime, prediction Patient Experience,
confidence, error rates by scenario Provider Work Life
 Performance Performance stratified by Healthcare Delivery
Consistency demographics, geographic access, Optimization
language support
Efficiency Time savings, cost reduction, Per Capita Cost, Provider
workflow integration Work Life
Provider Impact Override rates, alert fatigue Provider Work Life
indicators, documentation burden

Reimbursement
Payment policy significantly influences AI adoption and directly affects whether AI advances or
undermines the Quintuple Aim.

Evidence Generation Support

Many promising AI tools lack the real-world evidence necessary to support coverage decisions.
HHS could accelerate evidence generation by:

1.​ Supporting federated evaluation networks that enable AI assessment across varied
clinical sites without requiring data centralization
2.​ Funding prospective studies of AI tool impact on clinical outcomes and costs
3.​ Establishing data sharing agreements that facilitate AI evaluation while protecting patient
privacy
4.​ Requiring AI tools to demonstrate performance across varied populations as a condition
of coverage (optimizing healthcare delivery)

Research & Development
HHS’s research ecosystem can catalyze AI innovation that advances the Quintuple Aim.

Public-Private Partnerships for Benchmarking Infrastructure

MLCommons operates as a neutral convener of industry, academic, and non-profit stakeholders
to develop benchmarking tools. This model has proven effective for AI hardware/software
benchmarking through MLPerf and is now being applied to medical AI through MedPerf. HHS
could support similar efforts through:

●​ Cooperative Research and Development Agreements (CRADAs) with benchmark
developers
●​ Funding for broad, representative benchmark datasets that enable performance
optimization
●​ Recognition of community-developed evaluation standards (such as MLCommons’
Croissant for dataset metadata and MLCommons’ AILuminate for AI safety)
●​ Support for federated infrastructure that enables evaluation without data centralization

Federated Research Infrastructure: The FeTS 2.0 Model
Our MedPerf platform demonstrates that federated evaluation can enable AI assessment on
real-world clinical data without requiring data centralization. The Federated Tumor
Segmentation (FeTS) 2.0 study provides concrete evidence of this approach at scale:

Metric FeTS 2.0 (Federated) BraTS 2024 (Centralized)
Participating institutions 53 global sites Centralized
Training data 8,100 timepoints 1,350 timepoints
Validation data 2,108 timepoints 397 timepoints
Total patient data 10,208 timepoints 1,747 timepoints
Peritumoral edema DSC 0.95 0.89
Enhancing tumor DSC 0.94 0.79
Resection cavity DSC 0.89 0.78
Necrosis DSC 0.77 0.81

Key findings from FeTS 2.0:

       Scale without data sharing: 53 institutions contributed data while patient imaging never
          left institutional premises. Only trained model weights and validation scores were
          shared between collaborators.
       Superior performance: The federated approach achieved record Dice Similarity
          Coefficients, outperforming the centralized BraTS 2024 study in three of four
          segmentation classes (peritumoral edema, enhancing tumor, resection cavity) while
          achieving comparable results for necrosis.
       Privacy preservation: Executed through MLCommons’ MedPerf orchestrator and Intel’s
           OpenFL framework, demonstrating that privacy-preserving approaches do not
           sacrifice performance.
       Clinical impact: The resulting AI model enables reliable delineation of postoperative
           regions-of-interest, supporting standardized glioblastoma response assessment and
           adaptive therapeutic decision-making worldwide.

This study demonstrates that federated approaches can achieve superior results compared
to centralized methods while respecting data privacy, a finding directly relevant to HHS policy
on data access and AI evaluation.

We recommend that NIH and other HHS research entities invest in federated infrastructure that
can support both AI development and post-deployment monitoring while enabling performance
optimization across varied populations.
Responses to Specific Questions
Question 1: What are the biggest barriers to private sector innovation in AI for health
care and its adoption and use in clinical care?

Based on our experience working with a broad range of stakeholders, the primary barriers
include:

Barrier Description Impact on Potential Solution
Quintuple Aim
Data Access Privacy regulations, Limits AI Technical Policies,
institutional policies, and development Metadata (Croissant)
technical barriers limit and performance Federated evaluation
access to clinical data optimization (MedPerf)
Evaluation Developers lack access to Undermines Standardized
Infrastructure representative populations safety and benchmark datasets;
for prospective evaluation performance federated testing
consistency
Regulatory Limited guidance for Delays Harmonized HHS
Uncertainty non-device AI deployment of guidance
beneficial tools
Integration Fragmented EHR landscape Increases cost, FHIR API
Complexity requires custom integrations limits adoption standardization
Trust Deficit Clinicians lack confidence in Reduces Open benchmarking;
AI performance adoption of transparency
effective tools requirements
Performance Fear that AI will create Limits adoption Stratified performance
Variation performance gaps across in reporting
Concerns populations resource-limited
settings

Question 2: What regulatory, payment policy, or programmatic design changes should
HHS prioritize?

We recommend HHS prioritize changes that advance all five dimensions of the Quintuple Aim:

1.​ Harmonized guidance on non-device clinical AI evaluation: Clear standards for
evaluation methods, performance metrics, and ongoing monitoring for AI tools outside
FDA jurisdiction. This guidance should explicitly require performance optimization
assessment.
2.​ Support for federated evaluation infrastructure: Funding and policy support for
platforms that enable AI evaluation on real-world data while preserving privacy and
enabling performance assessment across varied populations.
 3.​ Accelerated coverage pathways for AI tools with demonstrated Quintuple Aim
impact: Streamlined processes for incorporating AI tools that demonstrate improvement
across multiple aim dimensions.
4.​ Interoperability requirements that support AI integration: The proposed
FHIR-forward approach in the deregulatory rule directly addresses this need.
5.​ Performance optimization requirements: AI tools seeking coverage should
demonstrate consistent performance across demographic groups, with particular
attention to populations underrepresented in training data.

Specific regulatory provisions that could be revisited include:

●​ 45 CFR 164.514 (HIPAA de-identification): Clarify that federated evaluation
approaches where protected health information never leaves covered entities can satisfy
HIPAA requirements. This would unlock evaluation across varied populations without
compromising privacy.
●​ 42 CFR 414 (Medicare Part B): Consider demonstration projects for AI tool
reimbursement in value-based arrangements, with explicit requirements for performance
optimization assessment.
●​ 42 CFR 425 (MSSP): Allow ACOs to count AI-enabled quality improvement activities
toward shared savings calculations.

Question 3: For non-medical devices, what novel legal and implementation issues exist?

Key issues include:

1.​ Algorithm transparency: Requirements for disclosing AI system characteristics,
limitations, and performance vary. Standardized transparency requirements would
benefit all stakeholders. MLCommons has developed approaches for AI documentation
through model cards and our AILuminate framework that could inform such
requirements.
2.​ Continuous learning systems: AI systems that update based on local data raise
questions about validation requirements and version control. Our working group has
developed approaches for versioning and lineage tracking that could inform guidance.
3.​ Performance optimization and calibration: AI systems may perpetuate or amplify
existing differential healthcare outcomes. Emerging research has identified specific
systematic error recognition and correction strategies, but legal frameworks for
addressing algorithmic performance variation in healthcare are underdeveloped. HHS
could provide guidance on acceptable performance differentials across demographic
groups.
4.​ Data ownership and access: When AI systems are trained or fine-tuned on institutional
data, questions arise about data ownership, model ownership, and ongoing access
rights. Information blocking regulations should address these scenarios.

Question 4: For non-medical devices, what are the most promising AI evaluation
methods?
Based on our experience developing and deploying evaluation infrastructure, we recommend a
comprehensive framework:

Pre-Deployment Evaluation Framework:

Evaluation Type Methods Tools/Standards
Performance Assessment Benchmark MedPerf, domain-specific
testing on benchmarks
standardized
datasets[8]
Performance Optimization Stratified Croissant metadata for
Assessment performance demographic tracking
analysis across
demographics
Robustness Testing Evaluation Statistical tests (MMD, KS)
against data
quality variations,
distribution shifts

Safety Evaluation Failure mode AILuminate, curated edge case
analysis, edge repositories
case testing
Human Factors Usability testing, FDA human factors guidance
workflow (adapted)
integration
assessment

Post-Deployment Monitoring Framework:

Monitoring Level Frequency Activities Quintuple Aim Focus
Continuous Real-time System output Patient safety
tracking, safety
signals
Weekly 7 days Automated Reliability
performance
summaries,
statistical
process control
 Monthly 30 days Comprehensive Healthcare Delivery
reports with trend Optimization, effectiveness
analysis,
optimization
metrics
Quarterly 90 days Clinical expert Safety, provider experience
review of edge
cases and failure
modes
Annual Yearly Full re-evaluation All dimensions
against updated
standards

Statistical Methods for Drift Detection:

●​ Control charts (CUSUM, EWMA) for detecting performance drift
●​ Maximum mean discrepancy (MMD) for distribution shift detection
●​ Sequential probability ratio tests for early warning
●​ Calibration assessment comparing predictions to outcomes

HHS could support these methods through:

●​ Cooperative agreements with organizations developing evaluation infrastructure
●​ Grant funding for evaluation tool development and validation studies
●​ Prize competitions for innovative approaches to AI monitoring
●​ Recognition of community-developed standards as acceptable evaluation methods

Question 5: How can HHS best support private sector activities to promote innovative
and effective AI use?

We recommend actions that reduce barriers while ensuring AI advances the Quintuple Aim:

1.​ Recognition of industry-developed standards: HHS could formally recognize
community-developed evaluation standards (like those from MLCommons) as
acceptable methods for demonstrating AI safety and effectiveness. This would reduce
duplicative validation costs.
2.​ Public benchmarking infrastructure: Support for open, neutral benchmarking
platforms that enable fair comparison of AI systems. This promotes competition and
drives quality improvement.
3.​ Federated evaluation networks: Fund the development of federated infrastructure that
allows AI evaluation across varied clinical sites without data centralization. This directly
enables performance optimization.
4.​ Accreditation pathway development: Work with professional societies and
accreditation bodies to develop AI competency frameworks for clinical institutions.
 5.​ Safe harbor for good-faith evaluation: Provide legal protection for institutions that
share data for AI evaluation purposes and for developers that transparently report
performance issues.
6.​ Workforce development: Support training programs for clinical informaticists, data
scientists, and AI safety specialists who can oversee AI deployment.

Question 6: Where have AI tools deployed in clinical care met or exceeded performance
expectations and where have they fallen short?

Our working group has observed the following patterns:

Successes (advancing multiple Quintuple Aim dimensions):

Application Quintuple Aim Impact Key Success Factors
Diabetic retinopathy Population health, expanded Well-defined task, clear ground
screening access, cost truth, regulatory clarity

Clinical Provider work life, cost Addresses acute pain point,
documentation/ambi measurable time savings
ent scribing
Sepsis early Population health, patient Clear clinical value, integration
warning experience into existing workflows

Radiology triage Patient experience, population Reduces delays for urgent
(critical findings) health cases

Challenges (where AI has fallen short):

Challenge Quintuple Aim Impact Root Cause
Performance Healthcare Delivery Optimization Training data not
degradation on new representative; lack of
populations federated evaluation

Alert fatigue Provider work life High false-positive
rates; poor workflow
integration
Outcome Population health, cost Intermediate metrics
improvement unclear don’t translate to
patient outcomes
Variable Healthcare Delivery Optimization Insufficient evaluation
performance across across subgroups
demographics
Integration friction Cost, provider work life Lack of standardized
APIs; custom
integration required
Greatest Potential (pending barrier removal):

●​ AI systems that reduce administrative burden (advancing provider work life and cost)
●​ Population health management and risk stratification (advancing population health and
delivery optimization)
●​ Care coordination across fragmented health systems (advancing patient experience)
●​ Federated AI that learns from distributed data while preserving privacy (advancing all
dimensions)

Question 7: Which roles within health care organizations have the most influence on AI
adoption?

Based on our interactions with a broad range of health systems:

Role Influence Level Primary Concerns How HHS Can Help
CMIO/CMAO Very High Clinical safety, workflow Clear evaluation
integration, evidence standards, recognized
benchmarks

CIO/CTO High Security, integration, FHIR standardization,
vendor management security guidance
Clinical High Specialty-specific value, Specialty society
Champions peer acceptance engagement, pilot
funding
Legal/Compliance High (veto Liability, regulatory risk Clear guidance, safe
power) harbors
CFO/Finance High ROI, reimbursement Coverage pathways,
value demonstration
Nursing Medium-High Workflow, patient Workflow integration
Leadership safety, staff burden requirements
Quality/Safety Medium Outcomes, adverse Monitoring standards,
Officers events reporting requirements

Primary administrative hurdles include:

●​ Lengthy security and privacy review processes (6-18 months typical)
●​ Lack of standardized evaluation criteria leading to duplicative reviews
●​ Integration complexity with existing systems
●​ Unclear governance structures for AI oversight
●​ Procurement processes not designed for AI (SaaS, continuous updates)

Question 8: Where would enhanced interoperability widen market opportunities and
accelerate AI development?
Enhanced interoperability would have the greatest impact in areas that advance the Quintuple
Aim:

Priority Data Types for AI:

Data Type Current State AI Opportunity Quintuple Aim Impact
Clinical notes Limited NLP for Provider work life,
standardization documentation, population health
clinical insights
Medical imaging DICOM Diagnostic AI, Population health, cost
standard but treatment
metadata planning
inconsistent
Patient-generated Fragmented, Remote Population health, patient
data non-standard monitoring, experience
chronic disease
management
Social determinants Rarely Risk stratification, Healthcare Delivery
structured care coordination Optimization, population
health
Prior authorizations Manual, Automation, Cost, provider work life
fax-based real-time
decisions
Quality measures Retrospective, Real-time quality Population health, cost
burdensome monitoring

Data Standards Priorities:

●​ FHIR-based APIs for consistent data access (strongly support proposed rule)
●​ Standardized data quality indicators (enables AI to assess input reliability)
●​ Croissant-compatible metadata for ML datasets (enables reproducibility)
●​ Common representation of temporal relationships (critical for predictive AI)
●​ Standardized demographic data elements (enables performance optimization
assessment)

Benchmarking Tools Needed:

●​ Reference implementations for AI evaluation on FHIR data
●​ Synthetic data generation tools that preserve statistical properties
●​ Federated evaluation infrastructure compatible with certified EHR APIs
●​ Performance optimization frameworks with standardized demographic categories

The proposed FHIR-forward approach in the deregulatory rule directly addresses many of these
needs and should be finalized.
Question 9: What challenges do patients and caregivers wish to see addressed by AI?

Based on input from patient representatives in our working group:

Desired AI Applications (mapped to Quintuple Aim):

Patient/Caregiver Need AI Solution Quintuple Aim Dimension
Faster diagnosis Triage AI, Patient Experience
diagnostic support

Care coordination Information Patient Experience, Cost
synthesis across
providers
Understanding medical Plain language Patient Experience, Healthcare
information explanations, Delivery Optimization
health literacy
tools
Medication safety Interaction Population Health, Patient
checking, Experience
adherence
support
Caregiver support Care planning Patient Experience, Provider Work
tools, resource Life
navigation
Access in rural and Telehealth AI, Healthcare Delivery Optimization
resource-limited areas remote
diagnostics
Reduced out-of-pocket costs Administrative Cost
automation, prior
auth

Patient Concerns:

Concern Mitigation Strategy HHS Role
Privacy/security Federated approaches, strong encryption Clarify HIPAA
applicability
Transparency Disclosure when AI involved in care Require transparency
standards

Performance Stratified performance monitoring Require performance
variations optimization
assessment
 Human oversight Maintain physician role Guidance on
appropriate
autonomy levels
Broad access Ensure AI benefits reach all populations Coverage
requirements, rural
health focus

Question 10: Are there specific areas of AI research that HHS should prioritize?

We recommend prioritizing research that advances the Quintuple Aim:

Research Area Quintuple Aim Impact Current Gap Recommended
Investment
Evaluation All dimensions Limited Federated evaluation
methodology real-world infrastructure
assessment
methods
Performance Healthcare Delivery Systematic error Broad benchmark
consistency Optimization detection and datasets, optimization
correction metrics
immature
Human-AI Provider work life, Limited Clinical workflow studies
interaction safety understanding
of optimal
collaboration
Continuous All dimensions Safety of Methods for safe model
learning adaptive updates
systems unclear

Multimodal AI Population health, Integration of Interoperability standards
effectiveness imaging, notes, for AI
labs, genomics

Federated Healthcare Delivery Privacy-preservi Infrastructure and
learning Optimization, privacy ng training at methods research
scale

Administrative Cost, provider work life Automation of Workflow automation
AI prior auth, studies
documentation

10a. Published findings on adopted AI tools:
The literature on deployed clinical AI is growing but remains limited. Key sources include: -
FDA’s database of authorized AI/ML-enabled medical devices (1,000+ devices)[9] - Published
post-market studies (relatively rare; systematic selection toward positive results) - Health system
implementation reports (often not peer-reviewed) - Industry-sponsored studies (potential
conflicts of interest)

We recommend HHS support systematic evidence generation for deployed AI tools through: -
Real-world evidence initiatives with standardized outcome measures - Registry requirements for
AI-enabled devices - Federated post-market surveillance networks

10b. Literature on costs, benefits, and transfers:

The literature on AI economics in healthcare is nascent.[10] Most studies focus on potential
benefits (improved accuracy, time savings) rather than measured outcomes. Key gaps include:

●​ Limited prospective studies of AI impact on healthcare costs
●​ Insufficient data on implementation costs and time-to-value
●​ Lack of standardized economic evaluation frameworks for clinical AI
●​ Limited assessment of distributional effects (who benefits, who bears costs)
●​ Inadequate study of impact on healthcare workforce

We recommend HHS support health economics research specifically focused on clinical AI
tools, including: - Total cost of ownership studies (implementation, maintenance, training) -
Productivity impact assessments - Distributional analyses (effects across payer types, patient
populations) - Workforce impact studies
Part II: Response to Proposed Rule on Health Data,
Technology, and Interoperability
We strongly support the proposed deregulatory actions and the FHIR-forward vision articulated
in this proposed rule. The transition to FHIR-based APIs creates essential infrastructure for AI to
advance the Quintuple Aim.

Support for FHIR-Based Approach
The proposed consolidation around FHIR-based APIs directly enables AI deployment and
evaluation:

Proposed Change AI Impact Quintuple Aim Benefit
FHIR API standardization Consistent data Cost, Provider Work Life
access reduces
integration cost
Removal of redundant Reduced Cost
criteria compliance burden
enables innovation
focus
USCDI v3.1 adoption Standardized data Population Health, Healthcare
elements improve Delivery Optimization
AI
training/evaluation

Information blocking AI systems can All dimensions
revisions access data like
human users

Modern AI Integration

The rule’s reference to emerging standards like Model Context Protocol (MCP) demonstrates
awareness of how AI systems interact with data sources. FHIR provides the data layer upon
which such protocols can operate. This forward-looking approach positions the United States as
a leader in AI-enabled healthcare interoperability.

Comments on Specific Provisions
Certification Criteria Removal (Section III.A)

We support the proposed removal of redundant certification criteria that are no longer necessary
given FHIR adoption. The proposal to remove 34 of 60 criteria represents significant burden
reduction.

However, we note the following consideration:
Clinical Decision Support (Section III.A.1.b): The proposed revisions maintain core CDS
functionality while removing burdensome requirements. We support this approach. For
AI-enabled CDS specifically, we recommend guidance on:
o Performance monitoring requirements
o Update/versioning procedures
o User notification of AI involvement

Real World Testing Revisions (Section III.D.3)

We strongly support the proposed changes to Real World Testing (RWT) requirements. The
current RWT framework, while well-intentioned, has proven burdensome without proportionate
benefit.

The proposed changes align with our experience in federated evaluation:

Current Requirement Proposed Change Our Assessment
Annual RWT plans Descoped Support: plans often
formulaic, limited value
Detailed results reporting Descoped Support: focus on
meaningful metrics
instead
SVAP documentation Streamlined Support: accelerates
standards adoption

However, we recommend that HHS consider how RWT principles could be adapted for
AI-specific evaluation:

●​ Federated RWT: Allow developers to satisfy RWT through participation in federated
evaluation networks (like MedPerf) that assess performance across varied real-world
settings
●​ Continuous monitoring: Replace annual RWT cycles with continuous performance
monitoring for AI systems
●​ Performance optimization assessment: Require RWT to include performance
stratification across demographic groups

Standards Version Advancement Process (Section III.D.3)

We support streamlining SVAP requirements. Faster standards adoption is particularly important
for AI, where capabilities and best practices evolve rapidly.

We recommend: - Expedited SVAP pathways for AI-relevant standards (e.g., FHIR IGs for AI
use cases) - Recognition of MLCommons standards (Croissant, AILuminate) as SVAP-eligible -
Coordination with FDA on standards for AI-enabled medical devices

Insights Condition Revisions (Section III.D.5)
We support the proposed focus on “use of FHIR in apps through certified health IT” as the
primary Insights measure. This metric directly tracks interoperability adoption.

For AI specifically, we recommend HHS consider future Insights measures such as: - Number of
AI-enabled applications accessing data through certified APIs - Volume of API calls for AI/ML
purposes - Performance metrics for AI systems integrated with certified health IT

USCDI v3.1 Adoption (Section III.B)

We support the adoption of USCDI v3.1 and the iterative process for expanding standardized
data elements. For AI applications, we note:

Data Element Category AI Relevance Recommendation
Clinical notes Essential for NLP-based AI Prioritize in future USCDI
versions
Imaging metadata Critical for radiology AI Standardize DICOM-FHIR
mapping
Social determinants Enables optimization-focused AI Expand SDOH elements

Patient-reported outcomes Supports outcome prediction Add PRO instruments

Data quality indicators Enables AI to assess input Add provenance/quality
reliability flags

We recommend that future USCDI development include explicit consideration of AI use cases
and engage the AI development community in prioritization.

Information Blocking Revisions (Section IV)

We strongly support the proposed revisions to information blocking definitions and exceptions.
These changes directly enable AI deployment while addressing documented misuse.

1.​ Clarification that “access” and “use” include automated means (Section IV.A): This
clarification is essential for AI systems that require programmatic access to EHI.
Autonomous AI agents and automated data pipelines should be able to access data
under the same conditions as human users.
Concrete scenario: A hospital deploys an AI system for sepsis early warning.
The system needs continuous access to vital signs, lab results, and clinical notes.
Under current ambiguity, EHR vendors have argued that automated AI access is not
covered by information blocking rules. The proposed clarification eliminates this
barrier.

2.​ Revision of Infeasibility Exception conditions (Section IV.B): Removing conditions
susceptible to misuse will improve data access for legitimate AI applications.
Concrete scenario: An AI developer requests API access to evaluate their
algorithm across multiple health systems. Under current rules, health systems have
cited the “third party seeking modification use” condition to deny access, claiming
 any external evaluation constitutes “modification.” The proposed removal of this
condition prevents such misuse.

3.​ Manner Exception clarifications (Section IV.C): Ensuring that data access cannot be
impeded by unreasonable contractual terms supports a competitive market for AI tools.
Concrete scenario: An EHR vendor offers API access but requires AI developers
to sign contracts with excessive indemnification, non-compete clauses, or
above-market pricing. The proposed clarification that contracts must be “market rate”
and cannot be “unconscionable” addresses this barrier.

4.​ TEFCA Manner Exception removal (Section IV.D): We support this proposal. The
information blocking regulations should apply uniformly regardless of the specific
exchange mechanism used. This ensures AI systems can access data through any
compliant pathway.

Considerations for AI-Enabled Health IT
As HHS resets the Certification Program foundation, we recommend consideration of future
requirements specific to AI-enabled health IT. These should be voluntary guidance rather than
burdensome certification requirements:

AI Consideration Recommended Approach MLCommons Resource
Performance monitoring Continuous monitoring with drift MedPerf monitoring
detection framework
Version control Documentation of model GaNDLF versioning
versions and changes
Transparency Model cards and performance AILuminate documentation
disclosure standards
Performance optimization Stratified performance reporting Croissant demographic
assessment metadata

Safety evaluation Testing against edge cases and AILuminate safety
failure modes benchmarks

We recommend HHS develop voluntary guidance that recognizes industry-developed standards
(such as those from MLCommons) as acceptable approaches, rather than creating new
prescriptive requirements.
Alignment Between Initiatives: A Unified Vision for the
Quintuple Aim
These two HHS initiatives are deeply interconnected. Together, they create the foundation for AI
to advance all five dimensions of the Quintuple Aim:

AI Adoption Barrier Deregulatory Solution Quintuple Aim Impact
Integration complexity FHIR API standardization Cost, Provider Work Life
Data access limitations Information blocking revisions All dimensions

Evaluation infrastructure Federated access through Healthcare Delivery
standardized APIs Optimization, Population
Health
Innovation barriers Reduced certification burden Cost

Performance optimization Standardized demographics in Healthcare Delivery
gaps USCDI Optimization
Trust deficit Transparency through Patient Experience
recognized standards

American Leadership

The coordinated approach represented by these initiatives positions the United States as the
global leader in AI-enabled healthcare. By establishing: - Open, standardized APIs (FHIR) -
Clear rules against information blocking - Reduced regulatory burden on innovation - Support
for federated evaluation (preserving privacy while enabling assessment)

The United States can create the model that other nations follow, cementing American
competitiveness in the growing global market for healthcare AI.
Conclusion
The MLCommons Medical AI Working Group supports HHS’s efforts to accelerate AI adoption in
clinical care while modernizing health IT infrastructure. The FHIR-forward approach creates an
essential technical foundation for AI deployment, and the focus on reducing unnecessary
regulatory burden while preserving safety mechanisms reflects appropriate balance.

AI has the potential to advance all five dimensions of the Quintuple Aim: - Population
Health: Early detection, risk stratification, preventive interventions - Patient Experience:
Reduced wait times, better coordination, personalized care - Per Capita Cost: Administrative
automation, reduced waste, optimized resource use - Provider Work Life: Documentation
assistance, decision support, reduced burden - Healthcare Delivery Optimization:
Performance monitoring across demographics, expanded access

Realizing this potential requires: - Continued coordination across HHS agencies (FDA, CMS,
ONC) - Support for open, neutral evaluation infrastructure - Engagement with a broad range of
stakeholders including developers, providers, and patients - Recognition of industry-developed
standards and best practices - Explicit attention to performance optimization in all AI evaluation
and deployment

We offer our expertise and infrastructure to support HHS in achieving these goals. Our MedPerf
platform, GaNDLF framework, Croissant metadata standard, and AILuminate safety
benchmarks demonstrate that open, neutral approaches can accelerate AI adoption while
maintaining rigorous evaluation standards and optimizing performance across populations.

The alternative to coordinated action is fragmented approaches that slow innovation, create
compliance burden, and ultimately delay patient access to beneficial AI tools. With thoughtful
implementation of the approaches outlined in these initiatives, HHS can establish American
leadership in clinical AI while ensuring safety, effectiveness, and optimized performance for all
patients.

Acknowledgments
This response reflects the collective expertise and real-world experience of MLCommons
Medical AI Working Group members, including:

●​ Academic medical centers and community hospitals
●​ Clinical practitioners across multiple specialties, and other healthcare professionals
●​ Data scientists and AI researchers
●​ Patient advocates

We thank all contributors for their insights and commitment to advancing safe, effective, and
optimized AI in healthcare. For questions or further discussion, please contact:
medical-chairs@mlcommons.org
Appendix: Mapping MLCommons Infrastructure to HHS
Initiatives
The following table maps specific HHS requirements and goals to MLCommons technical
solutions:

HHS Requirement/Goal MLCommons Solution Operational Mechanism

Real-world AI evaluation MedPerf Federated evaluation across
decentralized sites; algorithms
travel to data, preserving
privacy
Standardized ML workflows GaNDLF Zero/low-code framework
ensures reproducible AI
development pipelines
Dataset interoperability Croissant Metadata format enables
ML-ready datasets with
standardized documentation

AI safety assessment AILuminate Benchmark suite evaluates AI
risk and reliability across
standardized scenarios
Performance optimization MedPerf + Croissant Federated evaluation with
assessment demographic metadata
enables stratified performance
analysis
Post-market monitoring MedPerf monitoring Continuous performance
tracking with drift detection
across deployment sites
Transparency / Model cards + AILuminate Standardized documentation
documentation of AI system characteristics
and limitations

FHIR integration MedPerf FHIR adapters Reference implementations
for AI evaluation on
FHIR-accessible data
Example: How MedPerf Addresses Information Blocking Scenarios

Scenario Current Barrier How MedPerf Helps
Multi-site AI Data cannot leave institutions Algorithms travel to data; only
validation aggregate metrics returned
Performance Demographic data too sensitive Local stratified analysis; only
optimization to share summary statistics aggregated
assessment
Continuous No infrastructure for distributed Federated monitoring dashboard
monitoring surveillance with site-level and aggregate views

Competitive Institutions reluctant to share Neutral third-party orchestration;
evaluation performance data blinded comparisons

Alignment with Quintuple Aim:

MLCommons Population Patient Cost Provider Healthcare
Tool Health Experience Work Life Delivery
Optimization
MedPerf Enables Ensures AI Reduces Streamlines Enables
validation works for all duplicate evaluation stratified
across patients validation assessment
populations
GaNDLF Reproducible Consistent AI Reduces Standardized Reproducible
development behavior development workflows optimization
cost analysis
Croissant Dataset Transparency Reduces Clear data Demographic
documentatio data prep specs metadata
n cost
AILuminate Safety Trust in AI Reduces Confidence Systematic
assessment safety in tools error
incidents detection
References

[1] Machine learning is one of the key techniques through which AI systems are built.

[2] Peter Mattson, et al, “MLPerf: An Industry Standard Benchmark Suite for Machine Learning
Performance,” IEEE Xplore, 2020. https://ieeexplore.ieee.org/abstract/document/9001257

[3] Karargyris, A., Umeton, R., Sheller, M.J. et al. Federated benchmarking of medical artificial
intelligence with MedPerf. Nat Mach Intell 5, 799-810 (2023).
https://doi.org/10.1038/s42256-023-00652-2

[4] Pati, S., Thakur, S.P., Hamamci, I.E. et al. GaNDLF: the generally nuanced deep learning
framework for scalable end-to-end clinical workflows. Commun Eng 2, 23 (2023).
https://doi.org/10.1038/s44172-023-00066-3

[5] Akhtar, M., et al. “Croissant: A metadata format for ML-ready datasets.” Advances in Neural
Information Processing Systems 37 (2024): 82133-82148.

[6] “The AILuminate Benchmark,” MLCommons, accessed January 2026,
https://mlcommons.org/ailuminate/

[7] LaBella, D., Kassem, H., Edwards, B., Sheller, M., Pati, S., Aristizabal, A., Huang, R., Baid,
U., Karargyris, A., Bakas, S., et al. “FeTS 2.0: Federated learning sets benchmark in post-op
GBM segmentation.” Neuro-Oncology, Volume 27, Supplement 5, November 2025, Page v289.
https://doi.org/10.1093/neuonc/noaf201.1148

[8] Maier-Hein, L., Reinke, A., Godau, P. et al. Metrics reloaded: recommendations for image
analysis validation. Nat Methods 21, 195-212 (2024).
https://doi.org/10.1038/s41592-023-02151-z

[9] FDA, “Artificial Intelligence and Machine Learning (AI/ML)-Enabled Medical Devices,”
updated 2025,
https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-m
achine-learning-aiml-enabled-medical-devices

[10] Sahni, N., Stein, G., Zemmel, R., & Cutler, D. M. (2023). The potential impact of artificial
intelligence on healthcare spending. The Economics of Artificial Intelligence: Health Care
Challenges. University of Chicago Press.

[11] Vasey, B., et al. (2022). Guidelines and quality criteria for artificial intelligence-based
prediction models in healthcare: a scoping review. npj Digital Medicine, 5, Article 2.
List of Acronyms
●​ ACO: Accountable Care Organization
●​ AI: Artificial Intelligence
●​ API: Application Programming Interface
●​ ASTP: Assistant Secretary for Technology Policy
●​ CDS: Clinical Decision Support
●​ CFO: Chief Financial Officer
●​ CFR: Code of Federal Regulations
●​ CIO: Chief Information Officer
●​ CMAO: Chief Medical Analytics Officer
●​ CMIO: Chief Medical Information Officer
●​ CMS: Centers for Medicare & Medicaid Services
●​ CRADA: Cooperative Research and Development Agreement
●​ CTO: Chief Technology Officer
●​ CUSUM: Cumulative Sum (control chart)
●​ DICOM: Digital Imaging and Communications in Medicine
●​ DSC: Dice Similarity Coefficient
●​ EHI: Electronic Health Information
●​ EHR: Electronic Health Record
●​ EWMA: Exponentially Weighted Moving Average
●​ FDA: Food and Drug Administration
●​ FHIR: Fast Healthcare Interoperability Resources
●​ GBM: Glioblastoma Multiforme
●​ HHS: Department of Health and Human Services
●​ HIPAA: Health Insurance Portability and Accountability Act
●​ IEC: International Electrotechnical Commission
●​ IEEE: Institute of Electrical and Electronics Engineers
●​ IG: Implementation Guide
●​ IT: Information Technology
●​ KS: Kolmogorov-Smirnov (test)
●​ MCP: Model Context Protocol
●​ ML: Machine Learning
●​ MMD: Maximum Mean Discrepancy
●​ MSSP: Medicare Shared Savings Program
●​ NIH: National Institutes of Health
●​ NLP: Natural Language Processing
●​ ONC: Office of the National Coordinator for Health Information Technology
●​ PRO: Patient-Reported Outcomes
●​ RFI: Request for Information
●​ RIN: Regulation Identifier Number
●​ ROI: Return on Investment
●​ RWT: Real World Testing
●​ SaaS: Software as a Service
●​ SDOH: Social Determinants of Health
●​ SVAP: Standards Version Advancement Process
●​ TEFCA: Trusted Exchange Framework and Common Agreement
●​ USCDI: United States Core Data for Interoperability
