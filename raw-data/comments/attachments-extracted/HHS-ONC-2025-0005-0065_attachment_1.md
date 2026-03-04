# HHS-ONC-2025-0005-0065 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0065/attachment_1.pdf

---

Interoperability Agentic Gen AI for API-Driven
Health IT: Advancing the Modernized US ONC
Framework
Satyadhar Joshi
Independent Researcher
Alumnus, International MBA, Bar-Ilan University, Israel
Alumnus, Touro College MSIT, NY, USA
ORCID: 0009-0002-6011-5080
satyadhar.joshi@gmail.com

Abstract—The convergence of generative artificial intelligence, tomation, Regulatory Policy, Data Standards
autonomous agentic systems, and healthcare interoperability
standards represents one of the most transformative technological I. I NTRODUCTION
opportunities of the twenty-first century. This paper provides
a comprehensive examination of the U.S. regulatory landscape The United States healthcare system stands at a critical
governing health information technology, with particular focus crossroads in its decades-long journey toward comprehensive
on the proposed rule ”Health Data, Technology, and Interoper- digitization, interoperability, and now, intelligent automation.
ability: ASTP/ONC Deregulatory Actions To Unleash Prosperity” Since the enactment of the Health Information Technology
(RIN 0955-AA09). We analyze how this proposed deregulatory
for Economic and Clinical Health (HITECH) Act in 2009,
framework, which seeks to streamline the ONC Health IT
Certification Program by removing outdated certification criteria the Office of the National Coordinator for Health Information
and embracing a Fast Healthcare Interoperability Resources Technology (ONC), now operating within the Assistant Sec-
(FHIR)-forward architecture, creates both opportunities and retary for Technology Policy (ASTP), has driven the adoption
challenges for the deployment of agentic generative AI systems in of electronic health records (EHRs) through its voluntary
healthcare. Drawing upon extensive literature spanning technical
certification program. This initiative has successfully digitized
architecture, regulatory policy, artificial intelligence governance,
and health economics, we develop a comprehensive framework health data for the vast majority of hospitals and physi-
for understanding the interplay between interoperability stan- cians, creating an unprecedented foundation for data-driven
dards and autonomous AI systems. We argue that standardized, healthcare transformation. However, this success has come
well-documented application programming interfaces (APIs) are at the cost of regulatory complexity, with the Certification
not merely convenient but fundamentally essential for agentic AI
Program accumulating numerous distinct certification criteria
systems that must perceive, reason, and act across fragmented
healthcare environments. The proposed rule’s explicit recognition governing everything from clinical decision support to privacy
that ”access” and ”use” of electronic health information includes and security functionality [1]–[4].
automated means such as robotic process automation and au- The emergence of generative artificial intelligence and, more
tonomous artificial intelligence systems represents a landmark recently, agentic AI systems represents a paradigm shift in
clarification that removes legal ambiguity surrounding AI-driven
what is technologically possible in healthcare. Unlike tradi-
data access. However, we identify critical governance gaps created
by the removal of AI transparency mandates and propose a multi- tional AI systems that respond reactively to user prompts,
layered framework for ensuring safe, equitable, and nationally agentic AI systems are characterized by their autonomy,
secure deployment of autonomous healthcare agents. This paper goal-oriented behavior, and capacity to orchestrate complex
synthesizes findings from over 100 academic sources, industry workflows across multiple systems with minimal human in-
reports, and policy documents to provide actionable recom-
tervention [1], [5]–[7]. These systems can perceive their en-
mendations for policymakers, technology developers, healthcare
providers, and researchers navigating this transformative era. vironment through APIs, reason about complex goals using
Our analysis demonstrates that the successful integration of large language models, plan sequences of actions, and execute
agentic AI into U.S. healthcare depends critically on three factors: those actions by interacting with digital systems. In healthcare,
robust API infrastructure, clear regulatory guidance on auto- this translates to transformative applications: autonomous prior
mated access, and comprehensive governance frameworks for
authorization agents that can navigate complex payer rules,
autonomous systems. We conclude with specific recommendations
for each stakeholder group and identify priority areas for future clinical decision support agents that synthesize patient data
research and policy development. with medical literature, patient engagement agents that provide
Index Terms—Agentic AI, Healthcare Interoperability, FHIR, 0 Cite as: Satyadhar Joshi (Feb. 2026). Interoperability Agentic Gen AI
API, ONC Certification, Information Blocking, Artificial Intelli- for API-Driven Health IT: Advancing the Modernized US ONC Framework.
gence Governance, Digital Health Innovation, U.S. Health Policy, Comment submitted to the Department of Health and Human Services, Docket
National Competitiveness, Autonomous Systems, Healthcare Au- ID HHS-ONC-2025-0005, Regulations.gov.
24/7 personalized coaching, and population health agents that and private sectors, citing over 100 sources from academic
monitor for disease outbreaks [8]–[11]. research, industry analysis, and policy documents.
The technical requirements for such systems are substan- The paper is organized as follows. Section II provides a
tial. Agentic AI requires programmatic access to data—these comprehensive examination of agentic AI technologies and
systems cannot function by manually viewing screens or pars- their healthcare applications. Section III analyzes the technical
ing human-readable documents. They require standardized, architecture of healthcare interoperability, with emphasis on
machine-readable endpoints that provide consistent data mod- FHIR and API standards. Section IV examines the proposed
els, granular access controls, and reliable performance. This regulatory framework in detail, analyzing its provisions and
is precisely what modern API-driven interoperability stan- their implications for AI deployment. Section V presents the
dards, particularly Fast Healthcare Interoperability Resources Interoperability Agentic Mesh (IAM) technical architecture
(FHIR), provide [12]–[14], [14]. FHIR’s RESTful architectural framework. Section VI develops a comprehensive governance
style, its organization of data into granular ”resources” like framework for ensuring safe and equitable agentic AI in
Patient, Observation, and MedicationRequest, its use of stan- healthcare. Section VII presents a future timeline and roadmap
dard HTTP operations, and its support for modern security through 2035. Section VIII provides actionable recommenda-
frameworks like OAuth 2.0 and OpenID Connect make it an tions for stakeholders. Section IX concludes with reflections
ideal substrate for agentic AI [15]–[17]. on national competitiveness and future research directions.
The proposed rule, ”Health Data, Technology, and Interop-
erability: ASTP/ONC Deregulatory Actions To Unleash Pros- II. AGENTIC A RTIFICIAL I NTELLIGENCE : F OUNDATIONS
perity” (RIN 0955-AA09), represents a fundamental strategic AND H EALTHCARE A PPLICATIONS
pivot in U.S. health IT policy. Issued in response to Executive
Agentic AI represents a fundamental evolution in artificial
Order 14192, ”Unleashing Prosperity Through Deregulation,”
intelligence capabilities, moving beyond reactive systems that
and Executive Order 14267, ”Reducing Anti-Competitive Reg-
simply respond to prompts to autonomous systems that can
ulatory Barriers,” this rule proposes to dramatically streamline
pursue complex goals, make decisions, and take actions in
the regulatory landscape by removing numerous certifica-
digital environments. Understanding the technical foundations
tion criteria and revising others. The core thesis is that by
of these systems is essential for analyzing their interoperability
reducing compliance burdens and eliminating requirements
requirements and regulatory implications.
for outdated, document-centric exchange standards like the
Consolidated Clinical Document Architecture (C-CDA), the
A. Defining Agentic AI: Architecture and Capabilities
rule will free health IT developers to redirect resources toward
innovation, particularly in the realm of FHIR-based APIs. Agentic AI systems are characterized by several defining
This paper argues that this deregulatory thrust, while ap- capabilities that distinguish them from traditional AI appli-
pearing to retreat from active governance, actually creates cations. First, they possess autonomy—the ability to operate
essential conditions for the widespread deployment of agentic without continuous human intervention, pursuing goals over
AI in healthcare. However, it also creates governance gaps that extended time horizons [1], [5]. Second, they exhibit goal-
must be addressed through complementary frameworks. The directed behavior, maintaining representations of desired out-
removal of specific AI transparency mandates—particularly comes and planning sequences of actions to achieve them.
requirements for source attribute documentation and interven- Third, they can perceive their environment through sensors
tion risk management for predictive decision support interven- or digital interfaces, typically APIs, and update their internal
tions—eliminates regulatory safeguards without establishing representations based on new information. Fourth, they can
alternatives. As autonomous agents become more capable take actions in their environment, again typically through
and widespread, the need for robust frameworks ensuring APIs, to effect change. Fifth, they often possess learning
transparency, accountability, fairness, and security becomes capabilities, improving their performance over time based on
correspondingly urgent [18]–[21]. feedback [6], [7], [10].
This paper makes several contributions. First, we pro- The architecture of agentic AI systems typically includes
vide a comprehensive technical analysis of the requirements several key components. A perception module processes inputs
for agentic AI in healthcare, synthesizing literature across from the environment, transforming raw data into structured
AI architecture, API design, and interoperability standards. representations. A reasoning engine, often based on large
Second, we examine the proposed regulatory framework in language models, evaluates the current state relative to goals
detail, analyzing how its provisions align with or diverge and generates plans. A memory system maintains both short-
from the requirements of autonomous AI systems. Third, term context and long-term knowledge. An action selection
we identify critical governance gaps created by deregulatory module chooses among possible actions and executes them
actions and propose a multi-layered framework for addressing through APIs or other interfaces. A learning mechanism up-
them. Fourth, we offer actionable recommendations for pol- dates system parameters based on outcomes [17], [18], [22].
icymakers, technology developers, healthcare providers, and Recent advances in large language models have dramati-
researchers. Throughout, we ground our analysis in extensive cally accelerated agentic AI capabilities. Models like GPT-
literature and real-world developments in both the public 4, Claude, Gemini, and open-source alternatives like Llama,
DeepSeek, and Qwen provide sophisticated reasoning, plan- can verify insurance eligibility, calculate patient responsibil-
ning, and natural language understanding that serve as the ity, submit clean claims, follow up on denials, and manage
cognitive core of agentic systems [18], [19], [23], [24]. These appeals. The economic impact is substantial: studies suggest
models can decompose complex goals into sequences of ac- AI-driven automation can reduce manual data tasks by up to
tions, generate API calls, interpret responses, and adapt plans 80 percent and improve margin by 12-18 percent in advisory
based on intermediate outcomes. services [31], [32]. For Medicare and Medicaid programs
specifically, agentic AI offers pathways to reduce administra-
B. Healthcare Applications of Agentic AI tive waste while improving beneficiary access and experience
[28].
The potential applications of agentic AI in healthcare 3) Patient Engagement and Care Coordination: Agentic AI
are vast and transformative, spanning clinical, administrative, systems can serve as personalized health assistants, engaging
research, and public health domains. Understanding these patients continuously between clinical encounters [1], [33],
applications illuminates the interoperability requirements that [34]. These agents can remind patients to take medications,
regulatory frameworks must support. answer questions about care plans, schedule appointments,

1.  Clinical Decision Support and Diagnostic Assistance: provide education based on patient conditions, and escalate
    Agentic AI systems can revolutionize clinical decision support concerns to care teams when appropriate [2], [34], [35]. For
    by autonomously synthesizing patient data, medical literature, patients with chronic conditions, agentic systems can monitor
    and clinical guidelines to provide personalized recommen- data from connected devices, detect concerning patterns, and
    dations [18], [22]. Unlike traditional decision support tools intervene early to prevent complications [3], [36], [37].
    that fire rule-based alerts, agentic systems can engage in Care coordination across multiple providers and settings is
    sophisticated reasoning: retrieving a patient’s complete med- another promising application [9], [10]. An agent managing a
    ical history via FHIR APIs, searching PubMed for relevant patient with complex needs can ensure that primary care, spe-
    studies, consulting clinical practice guidelines, and generating cialists, home health, and pharmacy are all aligned on the care
    differential diagnoses with supporting evidence [7], [9], [10]. plan, sharing information appropriately and flagging potential
    These systems can operate continuously, monitoring patient conflicts or gaps. This is particularly valuable for patients
    data and alerting clinicians to emerging issues before they with multiple chronic conditions who navigate fragmented care
    become critical [8], [11]. delivery systems [7], [38].
    Research has demonstrated that agentic AI systems can 4) Population Health and Public Health Surveillance: At
    match or exceed human performance in complex diagnostic the population level, agentic AI systems can monitor health
    tasks [23], [25], [26]. The MedResearcher-R1-32B agent, for data across entire populations to detect emerging threats,
    example, combines a medical knowledge network with special- identify at-risk groups, and guide resource allocation [15],
    ized information retrieval to achieve significant improvements [16], [39]. During infectious disease outbreaks, agents can
    in complex medical question answering [25]. Studies from aggregate case reports, test results, and syndromic surveillance
    Harvard Medical School have shown that open-source AI data to provide real-time situational awareness and predict
    models can match proprietary systems in solving difficult disease spread [39], [39]. For chronic disease management,
    medical cases, democratizing access to advanced diagnostic agents can identify patients overdue for preventive services
    capabilities [23], [25]. These capabilities suggest that agentic and conduct outreach to them directly.
    systems will increasingly serve as collaborative partners to Public health agencies are beginning to explore these ca-
    clinicians, augmenting rather than replacing human expertise pabilities. The Centers for Disease Control and Prevention’s
    [27]. data modernization initiative emphasizes the importance of
2.  Administrative Automation and Workflow Optimization: interoperable, real-time data for effective public health re-
    Administrative burden is a major source of clinician burnout sponse. Agentic AI systems that can autonomously monitor
    and healthcare costs, with estimates suggesting that U.S. and analyze population health data could dramatically accel-
    healthcare providers spend hundreds of billions of dollars an- erate detection and response to emerging health threats [14],
    nually on administrative activities [28], [29]. Agentic AI offers [16].
    transformative potential for automating these workflows. Prior 5) Research and Drug Development: Agentic AI is trans-
    authorization, a particularly burdensome process requiring forming medical research by automating literature review,
    extensive documentation and back-and-forth communication hypothesis generation, and experimental design [40], [41].
    between providers and payers, can be fully automated by Agents can search and synthesize millions of scientific papers,
    agentic systems [14], [28], [30]. An agent can retrieve clinical identify promising drug candidates, design virtual screen-
    documentation via FHIR APIs, complete prior authorization ing experiments, and even control laboratory automation to
    forms, submit them through payer portals or APIs, track conduct physical experiments. The acceleration of research
    status, and notify providers of outcomes—all without human timelines has profound implications for drug development and
    intervention [12], [14]. personalized medicine [42], [43].
    Claims processing, billing, and revenue cycle management In clinical research, agentic systems can automate patient
    similarly benefit from agentic automation [28], [31]. Agents recruitment by continuously screening EHR data to identify
    eligible participants, notify research coordinators, and even en- specific transactions like admissions, discharges, and trans-
    gage potential participants directly [14], [15]. This capability fers. These standards were widely adopted but suffered from
    addresses a major bottleneck in clinical trial execution and significant implementer variation, making true interoperability
    could accelerate the development of new therapies. difficult [9], [12], [20].
    The development of Clinical Document Architecture (CDA)
    C. Technical Requirements for Healthcare Agentic AI and its Consolidated CDA (C-CDA) implementation guide
    The deployment of agentic AI in healthcare environ- represented a shift toward document-centric exchange. C-
    ments imposes stringent technical requirements that regulatory CDA provides a structured format for clinical documents
    frameworks must accommodate. First and foremost, agentic like discharge summaries, consultation notes, and continuity
    systems require comprehensive, reliable, and secure access of care documents. While C-CDA improved consistency, its
    to electronic health information. This access must be pro- document-centric nature made granular data access difficult.
    grammatic—agents cannot operate through user interfaces de- To retrieve a single lab result, an application might need to
    signed for human interaction. They require APIs that provide parse an entire document [10], [15], [16].
    machine-readable access to structured data [12], [17], [44]. Fast Healthcare Interoperability Resources (FHIR) repre-
    Second, the data models exposed through APIs must be sents a paradigm shift. FHIR combines the best features of
    standardized and consistent across different source systems. previous approaches—the rich clinical models of CDA with
    An agent that can retrieve patient medications from one EHR the web-friendly simplicity of modern APIs. FHIR organizes
    using FHIR should be able to do the same from any other health data into discrete ”resources” representing individual
    FHIR-compliant EHR without customization. This interoper- clinical concepts: patients, observations, medications, condi-
    ability is essential for agents to scale across the healthcare tions, procedures, and so on. These resources can be accessed
    ecosystem [9], [12], [20]. individually or in combinations through RESTful APIs using
    Third, security and authorization frameworks must support standard HTTP methods [13], [14], [47].
    autonomous agent operation while maintaining rigorous pro-
    tections for sensitive health information. Agents must be able B. FHIR: Technical Architecture and Capabilities
    to authenticate themselves, obtain appropriate authorization
    for the data and actions they require, and operate within FHIR’s technical architecture is specifically designed to
    defined boundaries [17], [45], [46]. OAuth 2.0 and SMART support modern application development and, by extension,
    on FHIR provide foundations, but agentic scenarios introduce agentic AI. The core of FHIR is its resource model, which
    new challenges around delegation, consent, and audit. defines approximately 150 resource types covering the ma-
    Fourth, performance and reliability requirements are strin- jor clinical and administrative concepts in healthcare. Each
    gent. Agents supporting clinical workflows must operate with resource has a defined structure, expressed in JSON, XML,
    low latency and high availability. APIs must be designed to or RDF, with mandatory and optional elements, terminology
    handle agentic workloads, which may involve high request bindings, and extension points [12], [17].
    volumes and complex query patterns [13], [16], [47]. Resources are accessed through a RESTful API that uses
    Fifth, observability and auditability are essential. Healthcare standard HTTP methods: GET to retrieve resources, POST to
    organizations must be able to monitor agent activity, under- create new resources, PUT to update existing resources, and
    stand why agents made particular decisions, and reconstruct DELETE to remove resources. This simple, uniform interface
    agent actions for quality assurance, compliance, and liability makes FHIR accessible to any developer familiar with web
    purposes [18], [20]. This requires that agents log their actions APIs. Queries can be parameterized to retrieve specific re-
    and reasoning, and that APIs expose this information appro- sources or collections, and search capabilities support complex
    priately. filtering [12], [17], [44].
    FHIR supports several interaction patterns relevant to agen-
    III. I NTEROPERABILITY S TANDARDS AND API tic AI. Read interactions retrieve individual resources by
    A RCHITECTURE FOR H EALTHCARE ID. Search interactions retrieve sets of resources matching
    The technical foundation for agentic AI in healthcare rests specified criteria. History interactions retrieve the version
    on interoperability standards that enable seamless data ex- history of resources. Transaction interactions allow multiple
    change across heterogeneous systems. This section examines operations to be performed atomically. Operation interactions
    the evolution of these standards, with particular focus on invoke custom functions beyond standard CRUD operations
    FHIR, and analyzes the API architectures that support au- [13], [14], [16].
    tonomous agent operation. Security and authorization are addressed through the
    SMART on FHIR framework, which builds on OAuth 2.0
    A. The Evolution of Healthcare Interoperability Standards and OpenID Connect. SMART on FHIR provides standard
    Healthcare interoperability standards have evolved signifi- mechanisms for applications to obtain authorization to access
    cantly over the past three decades, reflecting changing tech- FHIR resources on behalf of users, with fine-grained scopes
    nical capabilities and use cases. The earliest standards, such limiting access to specific resource types and operations.
    as HL7 Version 2, focused on message-based exchange for This framework supports the delegation scenarios essential
    for agentic AI, where an agent may need to act on behalf API provides managed FHIR stores, integration with other
    of patients or providers [17], [45], [46]. Google services, and tools for building AI applications [13],
    [16], [48]. AWS offers HealthLake, a FHIR-compliant data
    C. API Design for Agentic AI Workloads store with built-in analytics and AI capabilities [16], [35], [49].
    While FHIR provides the foundational data model and Microsoft’s Azure API for FHIR provides similar capabilities.
    access methods, effective support for agentic AI requires These platforms are designed to support the scale and com-
    additional API design considerations. Agentic workloads differ plexity of agentic AI workloads.
    from human-driven application workloads in several ways that
    E. The Model Context Protocol and Emerging Standards
    impact API design.
    First, agentic systems often make high-volume requests The proposed rule’s mention of the Model Context Protocol
    as they explore solution spaces, monitor for changes, or (MCP) highlights an important emerging trend: standards for
    coordinate across multiple tasks. APIs must be designed to AI-agent interaction with applications and data. MCP, de-
    handle these volumes without degrading performance for other veloped by Anthropic, standardizes how applications provide
    users. Rate limiting, caching, and efficient query processing context to large language models, enabling more sophisticated
    become critical [13], [16], [17]. AI interactions [12], [16]. For healthcare agentic AI, MCP and
    Second, agents may need to maintain state across mul- similar protocols could provide standardized ways for agents to
    tiple interactions, tracking the context of conversations or request context, receive updates, and coordinate actions across
    workflows. APIs should support mechanisms for passing and multiple systems.
    maintaining context, such as conversation IDs or workflow Other emerging standards are also relevant. The HL7 FHIR
    tokens [12], [14], [44]. community is developing implementation guides for specific
    Third, agents may need to perform complex sequences of use cases like prior authorization, clinical decision support,
    operations atomically. Transaction support, allowing multiple and patient access. These guides provide detailed specifica-
    resource operations to be performed as a single unit, is tions for how FHIR resources should be used in particular
    essential for maintaining data consistency during multi-step contexts, reducing implementer variation and improving inter-
    agent workflows [14], [16], [47]. operability [12], [14], [16].
    Fourth, agents require rich metadata about available APIs, IV. R EGULATORY F RAMEWORK A NALYSIS
    data models, and capabilities. Service discovery mechanisms, The proposed ASTP/ONC rule represents a fundamental
    API documentation in machine-readable formats like Ope- rethinking of health IT regulation in the United States. This
    nAPI, and capability statements help agents understand what section provides a comprehensive analysis of the rule’s provi-
    operations are possible and how to invoke them [12], [17], sions, their alignment with agentic AI requirements, and the
    [20]. governance challenges they create.
    Fifth, webhook and subscription mechanisms allow agents
    to receive notifications when data changes, rather than polling A. Deregulatory Philosophy and Strategic Vision
    repeatedly. FHIR’s subscription resources support this pattern, The proposed rule is grounded in a deregulatory philosophy
    enabling agents to be notified when relevant patient data is that views regulatory burden as an impediment to innovation
    updated [14], [16], [17]. and economic growth. This philosophy is explicitly articulated
    in the rule’s invocation of Executive Order 14192, which
    D. Current State of Healthcare API Adoption states that it is U.S. policy to ”significantly reduce the private
    The adoption of FHIR-based APIs in U.S. healthcare has expenditures required to comply with Federal regulations to
    accelerated significantly since the publication of the 21st secure America’s economic prosperity and national security.”
    Century Cures Act Final Rule in 2020, which required cer- Applied to health IT, this philosophy translates into several
    tified health IT to provide standardized APIs. Major EHR strategic objectives: removing duplicative or outdated certi-
    vendors including Epic, Oracle Health (formerly Cerner), and fication requirements, reducing barriers to market entry for
    MEDITECH have implemented FHIR APIs, and thousands of new health IT developers, freeing developer resources for
    applications have been developed to consume these APIs [9], innovation rather than compliance, and focusing regulatory
    [10], [14]. attention on areas of greatest impact. The rule’s embrace of a
    Real-world testing results demonstrate the scale of API ”FHIR-Forward” future reflects a judgment that the greatest
    adoption. Epic customers processed millions of API requests, impact lies in ensuring robust, standardized API access to
    Oracle Health handled extensive third-party application traffic, health data.
    and MEDITECH’s Expanse product successfully processed This strategic vision aligns well with the requirements of
    millions of document exchanges [15], [16]. These volumes, agentic AI. By prioritizing API-based interoperability over
    while impressive, represent only the beginning of API-driven document exchange, the rule creates the technical foundation
    healthcare. As agentic AI systems proliferate, API traffic for autonomous agents. By reducing compliance burdens, it
    volumes are expected to increase by orders of magnitude. frees developer resources for building innovative AI appli-
    Cloud providers are actively building infrastructure to sup- cations. By lowering barriers to market entry, it encourages
    port healthcare API workloads. Google Cloud’s Healthcare competition and diversity in the AI application ecosystem.
     However, the deregulatory approach also creates risks. The agentic AI enablement. By signaling that the Certification
    removal of specific requirements may eliminate safeguards Program will prioritize FHIR-based APIs, the rule encourages
    that, while burdensome, served important purposes. The chal- developers to invest in API infrastructure and discourages
    lenge for policymakers is to distinguish between genuinely continued investment in legacy exchange methods [12], [14],
    duplicative requirements and those that provide essential [16].
    protections. Our analysis suggests that while many of the The rule’s mention of emerging standards like the Model
    proposed removals are justified, the complete elimination of Context Protocol (MCP) demonstrates awareness that FHIR
    AI transparency and risk management requirements creates a alone is insufficient for sophisticated AI applications. MCP,
    governance gap that must be addressed. which standardizes how applications provide context to large
    language models, represents the kind of higher-level protocol
    B. Analysis of Key Regulatory Changes
    that agentic AI systems require. The rule’s openness to such
    The proposed rule encompasses numerous specific changes standards suggests a regulatory approach that can evolve with
    to the Certification Program and information blocking regula- technology [12], [16].
    tions. This section analyzes those most relevant to agentic AI However, the rule does not establish specific requirements
    deployment. for API performance, reliability, or scalability that agentic
3.  Certification Criteria Removals and Their Implications: systems require. While the Certification Program’s existing
    The removal of 34 certification criteria represents a dramatic API requirements ensure basic functionality, they do not
    simplification of the regulatory landscape. For agentic AI, the address the quality-of-service expectations for production AI
    most significant removals include: workloads. This gap may need to be addressed through indus-
    Privacy and Security Certification Criteria: The com- try best practices or future regulatory action [17], [44].
    plete removal of all privacy and security certification criteria 3) Information Blocking Definition and Exception Revi-
    (§170.315(d)) eliminates specific requirements for authenti-
    sions: The proposed revisions to information blocking defi-
    cation, access control, audit logging, encryption, and other
    nitions and exceptions are perhaps the most directly conse-
    security capabilities. While developers will likely maintain
    quential for agentic AI. The explicit addition of automated
    many of these capabilities due to market demands and other
    means—including robotic process automation and autonomous
    regulatory requirements (e.g., HIPAA Security Rule), the
    artificial intelligence systems—to the definitions of ”access”
    removal eliminates certification program oversight of these
    and ”use” removes legal ambiguity about whether AI-driven
    critical functions. For agentic AI, which depends on robust
    data access is protected.
    security to protect sensitive data and prevent harmful actions,
    this creates uncertainty about baseline security expectations This clarification is essential. Without it, actors could po-
    [45], [46]. tentially argue that they are not required to accommodate
    Decision Support Interventions Transparency Requirements: automated access, or that interfering with AI agents does not
    The removal of source attribute documentation and risk man- constitute information blocking. The proposed rule eliminates
    agement requirements for predictive DSIs eliminates regula- this ambiguity, establishing that patients and providers have
    tory mandates for AI transparency. Agentic AI systems, which the right to use AI agents to access and use their health
    make autonomous decisions affecting patient care, should be information, and that actors who interfere with such access
    transparent and accountable. Without regulatory requirements, may be subject to enforcement [12], [14].
    transparency becomes voluntary, raising concerns about patient The proposed tightening of the Infeasibility and Manner
    safety and algorithmic bias [18], [20], [50]. Exceptions further supports agentic AI. The removal of the
    Clinical Information Reconciliation and Incorporation: The ”third party seeking modification use” condition eliminates a
    removal of CIRI certification reflects confidence that this potential barrier for agents that need to write data to EHRs.
    functionality is so widely adopted and used that regulatory The revision of the ”manner exception exhausted” condition,
    mandate is unnecessary. For agentic AI, this is positive: the particularly the change from ”substantial number” to ”any”
    functionality will remain available, but developers are freed in determining whether an actor provides analogous access,
    from certification burden. However, it also means that future makes it more difficult for actors to deny access to innovative
    innovations in this area will be market-driven rather than requestors while providing it to others [12], [14].
    regulation-driven [9], [14]. These changes collectively create a legal environment favor-
    Family Health History and Implantable Device List: These able to AI agent deployment. Actors cannot block automated
    removals reflect a mature understanding that data standards access simply because it is automated. They cannot claim
    (USCDI) can replace functional certification requirements. infeasibility to avoid accommodating third-party modification
    For agentic AI, this is advantageous: agents can rely on the requests. They cannot limit requestors to outdated exchange
    presence of standardized data elements without needing to methods while providing modern APIs to others. For agentic
    verify that specific certified functions exist [12], [16]. AI developers, this regulatory certainty reduces investment risk
4.  FHIR-Forward Strategy and API Requirements: The and encourages innovation.
    rule’s explicit embrace of FHIR as the foundation for future 4) Governance Gaps Created by Deregulation: While the
    interoperability is its most significant positive contribution to rule’s deregulatory actions create enabling conditions for
    agentic AI, they also create governance gaps that must be implementing FHIR APIs with varying degrees of complete-
    addressed. The most significant gaps include: ness and performance characteristics [9], [10]. Payer sys-
    AI Transparency and Accountability: The removal of source tems expose member and claims data through FHIR-based
    attribute documentation and risk management requirements interfaces, enabling agents to perform eligibility verification,
    eliminates regulatory oversight of how predictive AI systems claims processing, and prior authorization tasks [28]. Health
    are developed, tested, and monitored. Without such oversight, Information Exchanges (HIEs) provide regional and national
    patients and providers cannot easily evaluate the reliability and data sharing networks that aggregate data across organiza-
    fairness of AI systems embedded in certified health IT [18], tional boundaries [14]. Internet of Things (IoT) devices and
    [50]. wearables generate continuous streaming data that agents can
    Security Baseline Assurance: The removal of privacy and monitor for early warning signs of health deterioration [36],
    security certification criteria eliminates certification program [37]. Research databases and clinical trial registries provide
    assurance that certified health IT meets minimum security the evidence base for clinical decision support [15].
    standards. While HIPAA Security Rule applies to covered Each data source exposes FHIR resources through RESTful
    entities and business associates, it does not provide the same APIs, with resource types defined by the FHIR specification
    level of assurance as certification testing [45], [46]. and implementation guides for specific use cases. The core
    Performance and Reliability Standards: The rule does not FHIR resources essential for agentic AI operations include
    establish expectations for API performance, reliability, or clinical resources (Patient, Observation, Condition, Medica-
    scalability. Agentic AI systems require consistent, high-quality tionRequest, Procedure, Encounter, DiagnosticReport) and ad-
    API access; without standards, performance may vary widely ministrative resources (Coverage, Claim, ExplanationOfBene-
    across developers and deployments [17], [44]. fit) [12], [14]. The set of required resource types expands with
    Algorithmic Bias and Fairness: The rule does not address agent complexity, as formalized in Equation 2.
    algorithmic bias or fairness in AI systems. As agentic AI
    becomes more prevalent in clinical decision-making, ensuring R = {P atient, Observation, Condition, M edicationRequest, P rocedu
    that these systems do not perpetuate or amplify existing (1)
    disparities becomes critical [18], [28]. The cardinality of required resource types scales with agent
    capability according to the relationship:
    V. T ECHNICAL A RCHITECTURE F RAMEWORK FOR
    AGENTIC AI IN H EALTHCARE I NTEROPERABILITY |Ragent | = f (cagent ) ∝ log(cagent + 1) (2)
    Building upon the foundational concepts of agentic AI and
    where cagent represents the agent’s capability score across
    healthcare interoperability standards established in Sections
    clinical, administrative, and analytical dimensions. This loga-
    II and III, this section presents a comprehensive technical
    rithmic relationship reflects the observation that basic agents
    architecture framework for deploying autonomous AI systems
    can accomplish many tasks with a limited set of resources,
    within FHIR-based healthcare environments. The proposed
    while advanced agents require access to increasingly special-
    Interoperability Agentic Mesh (IAM) architecture addresses
    ized resource types [22].
    the critical requirements identified in the literature while 2) Layer 2: FHIR API Gateway: The API gateway layer
    operationalizing the regulatory enablers discussed in Section provides a unified entry point for agentic systems, abstracting
    IV. This framework synthesizes insights from enterprise API the heterogeneity of underlying data sources while enforcing
    design [17], multi-agent coordination protocols [22], and security, performance, and reliability policies. This layer im-
    healthcare-specific security requirements [45], [46]. plements several critical functions that enable scalable agent
    deployment [17], [44].
    A. The Interoperability Agentic Mesh (IAM) Architecture
    Resource Access Layer: Implements the full range of FHIR
    The IAM architecture comprises five interconnected layers RESTful operations including read (retrieving individual re-
    that collectively address the perception, reasoning, action, sources by ID), search (retrieving resource collections match-
    governance, and observability requirements of autonomous ing criteria), create (posting new resources), update (modifying
    healthcare agents. This layered design reflects the principle existing resources), delete (removing resources), and trans-
    of separation of concerns, enabling independent evolution of action (executing multiple operations atomically) [12], [16].
    each layer while maintaining well-defined interfaces between The transaction capability is particularly important for agentic
    them [12], [16]. Figure 1 provides a high-level overview of workflows that must maintain data consistency across multiple
    the architecture. resource modifications.
5.  Layer 1: Healthcare Data Sources and FHIR Foun- Security Enforcement: Implements OAuth 2.0 and OpenID
    dation: The foundation layer encompasses all data sources Connect with SMART on FHIR scopes, providing fine-grained
    that agentic systems must access, with FHIR serving as the authorization controls that limit agent access to specific re-
    unifying data model. This heterogeneous data environment source types and operations [45], [46]. The gateway validates
    includes electronic health record (EHR) systems from major authentication tokens, enforces scope restrictions, and main-
    vendors such as Epic, Oracle Health, and MEDITECH, each tains audit records of all access attempts.
     Interoperability Agentic Mesh (IAM)
    Architecture
    Layer 5: Observability & Audit ↑
    • Action Logging • Decision Traceability
    • Performance Monitoring • Compliance Reporting
    Layer 4: Governance & Safety ↑
    • Policy Enforcement • Consent Management
    • Bias Mitigation • Human Oversight Interfaces
    Layer 3: Agent Orchestration ↑
    • Multi-Agent Coordination • Workflow Planning
    • State Management • Context Propagation
    Layer 2: FHIR API Gateway ↑
    • Resource Access • Security Enforcement
    • Rate Limiting • Protocol Translation
    Layer 1: Healthcare Data Sources ↑
    • EHR Systems • Payer Systems • HIE Networks
    • IoT Devices • Research Databases
    Source: Author’s synthesis based on [12], [16],
    [17]
    Fig. 1. Interoperability Agentic Mesh (IAM) Architecture Framework

Rate Limiting and Quota Management: Prevents resource agents and data sources. This layer implements several so-
exhaustion and ensures fair access across the agent population. phisticated capabilities that distinguish agentic systems from
For agentic workloads characterized by high request volumes simple API consumers [10], [22].
and bursty traffic patterns, adaptive rate limiting is essential
[13], [17]. Multi-Agent Coordination: Implements protocols for agent
communication and task decomposition, enabling specialized
Protocol Translation: Converts between different FHIR
agents to collaborate on complex problems. Following the
versions (DSTU2, STU3, R4, R5) and legacy formats (HL7
framework proposed by [22], agents are categorized into four
v2, C-CDA) when necessary, enabling agents to interact with
progressive models: Foundation agents (basic task execution),
heterogeneous source systems through a unified interface [15].
Assistant agents (collaborative support), Partner agents (peer-
The gateway maintains a capability statement S describing
level collaboration), and Pioneer agents (autonomous innova-
available resources and operations, which agents can query to
tion). Each category has distinct coordination requirements and
discover the API’s capabilities dynamically:
interaction patterns.

             S = {(r, o, p)|r ∈ R, o ∈ O, p ∈ P}                 (3)      Workflow Planning and Execution: Dynamically plans
                                                                        multi-step clinical and administrative workflows, decomposing

where O is the set of supported operations and P represents high-level goals into sequences of FHIR operations. The
supported parameters and search modifiers. This capability planner must consider data dependencies, resource availability,
discovery mechanism enables agents to adapt their behavior and optimization objectives such as minimizing latency or
based on the specific capabilities of each endpoint [14]. maximizing throughput [14], [16].
For agentic workloads, the gateway implements adaptive
rate limiting based on agent priority and system load: State Management: Maintains persistent storage of agent
context, conversation history, and intermediate results across
wa Ctotal workflow steps. This state enables agents to resume interrupted
Rlimit (a, t) = Rbase · P · (4) workflows, maintain conversation coherence, and provide ex-
j∈At wj ρ(t) · τ
plainable reasoning for their actions [18].
where Rlimit (a, t) is the rate limit for agent a at time t, wa
Context Propagation: Shares relevant context across agent
is the agent’s priority weight, At is the set of active agents,
boundaries while maintaining privacy and minimizing data
Ctotal is total system capacity, ρ(t) is current utilization, and τ
transfer. The Model Context Protocol (MCP) mentioned in
is a safety factor typically set between 0.8 and 0.9 to maintain
the proposed rule provides a standardized approach to context
headroom for burst traffic [13], [17].
management that the IAM architecture incorporates [12], [16]. 3) Layer 3: Agent Orchestration: The orchestration layer
manages the lifecycle and coordination of multiple agentic The orchestration layer maintains a directed acyclic graph
AI systems, enabling complex workflows that span multiple (DAG) of agent dependencies and workflows:
 Ψ(op, context) → {allow, deny, review} (8)
G = (V, E) where V = {a1 , a2 , . . . , an }, E ⊆V ×V
(5) Actions that exceed risk thresholds (θhigh ) trigger human
Each edge eij ∈ E represents a dependency where agent aj review:
requires output from agent ai . The orchestration layer ensures
topological ordering of agent execution, preventing deadlocks review(op) ⇐⇒ Ragent (op) > θhigh (9)
and ensuring data availability [22].
For complex workflows, the planner decomposes goals into where Ragent (op) is the risk score computed as a weighted
sequences of FHIR operations: combination of factors:

Π(g) = ⟨op1 , op2 , . . . , opk ⟩ where opi ∈ O × R × Q (6) Ragent (op) = α·Sdata (op)+β·Pconsequence (op)+γ·Unovelty (op)
(10)
where Q represents query parameters and filters. The plan- with Sdata representing data sensitivity (based on resource
ner optimizes for minimal execution time while respecting data types and patient populations), Pconsequence the potential
dependencies: impact (clinical, financial, or reputational), Unovelty the nov-
elty of the action pattern (measured against historical agent
k
X i−1
[ behavior), and α, β, γ weighting factors calibrated through
min t(opi ) s.t. ∀i, deps(opi ) ⊆ outputs(opj ) (7) organizational risk tolerance assessments [20].
Π
i=1 j=1 5) Layer 5: Observability and Audit: The top layer provides
This optimization problem is NP-hard in the general case, comprehensive visibility into agent operations for quality as-
but heuristic approaches based on topological sorting and surance, compliance, and continuous improvement. This layer
greedy resource allocation achieve near-optimal performance addresses the auditability requirements essential for healthcare
in practice [16]. deployments [17], [18]. 4) Layer 4: Governance and Safety: The governance layer Action Logging: Maintains immutable logs of all FHIR
ensures that agentic AI systems operate within ethical, le- operations performed by agents, including timestamps, re-
gal, and organizational boundaries, addressing the governance source identifiers, operation types, and outcomes. These logs
gaps created by deregulatory actions [18], [20]. This layer support forensic analysis, compliance audits, and performance
operationalizes the transparency, accountability, and fairness optimization [45].
requirements identified in Section VI. Decision Traceability: Records the reasoning chains that
Policy Enforcement: Provides real-time validation of agent led to agent decisions, enabling retrospective analysis of why
actions against organizational policies, regulatory require- particular actions were taken. This capability is essential for
ments, and ethical guidelines. The policy engine evaluates liability determination, quality improvement, and regulatory
each proposed action against a machine-readable policy set, compliance [18], [22].
enabling or blocking actions based on configurable rules [20], Performance Monitoring: Tracks metrics on agent accuracy,
[50]. latency, throughput, and resource utilization. These metrics
Consent Management: Enforces patient consent directives enable proactive identification of performance degradation and
across all data access and modification operations. The con- capacity planning [13], [16].
sent manager maintains a machine-readable representation of Compliance Reporting: Automatically generates reports for
patient preferences, derived from legal consent forms, and regulatory requirements, demonstrating adherence to informa-
evaluates each data access request against these preferences tion blocking rules, privacy regulations, and other mandates.
[45], [46]. This capability reduces the burden of manual compliance
Bias Mitigation: Continuously monitors agent decisions and activities [20].
outcomes for evidence of algorithmic bias across demographic For each agent action a, the observability layer records a
groups. When bias is detected, the system can trigger alerts, comprehensive audit tuple:
adjust agent behavior, or require human review of affected
decisions [28], [50]. L(a) = ⟨t, op, contexta , reasoninga , outcome, audita ⟩ (11)
Human Oversight Interfaces: Provides dashboards and alert-
ing systems that enable human supervisors to monitor agent where t is timestamp, op is the FHIR operation, contexta
activity, review decisions requiring escalation, and intervene is agent context at decision time, reasoninga is the chain
when necessary. These interfaces are designed according to the of thought, outcome is the result (success, failure, or partial
principles of human-centered AI, maintaining human agency success with details), and audita is a cryptographic hash for
while leveraging automation [18]. non-repudiation.
The policy enforcement function Ψ evaluates each proposed To ensure audit integrity and detect tampering, the observ-
agent action: ability layer maintains a Merkle tree of agent actions:
 where µ is the service rate, λ is the arrival rate, E[S 2 ] is the
second moment of service time, and ρ = λ/µ is the utilization
T = MerkleTree({L(a1 ), L(a2 ), . . . , L(an )}) (12)
[16].
with the root hash Hroot published periodically to a dis- Throughput for a population of N agents is limited by the
tributed ledger or trusted timestamping service. This crypto- FHIR API gateway’s bandwidth and server capacity:
graphic assurance enables external auditors to verify that audit  
logs have not been altered [20]. Bgateway Cserver
Tmax = min , (17)
s̄ t̄
B. Mathematical Framework for Agentic AI Performance
where Bgateway is gateway bandwidth in bytes per second,
To quantify the operational characteristics of agentic AI sys- s̄ is average request size in bytes, Cserver is server capacity
tems within the IAM architecture, we propose a mathematical in operations per second, and t̄ is average processing time per
framework that draws on information theory, queueing theory, operation. This dual limitation reflects the fact that agentic
and reliability engineering [16], [17]. workloads may be constrained by either network bandwidth

1.  Agent Capability Model: An agent’s capability to per- (for large data transfers) or server processing capacity (for
    form healthcare tasks can be modeled as a function of its complex queries) [13].
    model parameters, training data, and available tools, reflect- 3) Reliability and Fault Tolerance: System reliability with
    ing the relationship between model scale and performance
    k redundant components follows the standard reliability block
    observed in large language models [23], [24]:
    diagram model:
    p
    Ca = γ1 · log(|Θa |) + γ2 · |Da | + γ3 · |Ta | (13) k
    Y
    Rsystem (t) = 1 − (1 − Ri (t)) (18)
    where |Θa | is the number of model parameters, |Da | is
    i=1
    the size of training data in tokens, |Ta | is the number of
    available FHIR operations, and γi are scaling factors deter- where Ri (t) is the reliability function of component i,
    mined empirically. The logarithmic scaling with parameters typically modeled as Ri (t) = e−λi t for constant failure rates
    reflects the diminishing returns observed in model scaling λi [17].
    laws, while the square root scaling with data reflects the For agentic workflows requiring m sequential steps, overall
    sublinear improvement from additional training examples [23]. reliability is the product of step reliabilities and orchestration
    For multi-agent systems, the collective capability is super- reliability:
    additive due to specialization and collaboration: m
    Y
    Rworkf low = Rstepi · Rorchestration (19)
    n
    X X i=1
    Csystem = Cai + ϕij · min(Cai , Caj ) (14)
    i=1 i<j
    This multiplicative relationship highlights the importance of
    high reliability for each step, as the overall workflow reliability
    where ϕij represents the synergy coefficient between agents degrades exponentially with the number of steps. For critical
    i and j, typically 0 ≤ ϕij ≤ 1. This formulation captures the clinical workflows, this motivates the use of redundant agents
    observation that specialized agents collaborating on complex and automatic retry mechanisms [16].
    tasks achieve more than the sum of their individual capabilities
    [22]. C. Implementation Considerations for the Proposed Rule
2.  Latency and Throughput Models: The end-to-end la- The IAM architecture directly addresses the regulatory
    tency for a multi-step agent workflow is the sum of API changes proposed in RIN 0955-AA09 while filling governance
    latencies, reasoning times, and network delays: gaps through its layered design. This alignment ensures that
    health IT developers can build agentic AI capabilities that
    k
    X m
    X comply with both the letter and spirit of the proposed rule
    Ltotal = Lapi (opi ) + Lreasoning (stepj ) + Lnetwork [12], [14].
    i=1 j=1 FHIR-Forward Alignment: Layer 2’s FHIR API gateway
    (15)
    operationalizes the rule’s prioritization of modern API stan-
    where Lapi (op) includes FHIR server processing time,
    dards over legacy document exchange. By providing a unified
    network time between gateway and server, and gateway
    interface to FHIR resources, the gateway enables agents to
    processing overhead; Lreasoning is agent computation time
    access granular data without parsing document-centric formats
    for planning and decision-making; and Lnetwork is network
    like C-CDA. This alignment with the rule’s strategic vision
    latency between agent and gateway [17].
    reduces implementation complexity and improves interoper-
    API latency can be modeled using queueing theory, with
    ability [12], [16].
    the FHIR server as an M/G/1 queue:
    Automated Access Enablement: The orchestration layer
    1 λE[S 2 ] (Layer 3) implements the rule’s clarification that automated
    Lapi = + (16) access includes AI agents, providing the infrastructure for
    µ 2(1 − ρ)
    autonomous operations. The workflow planning and execution routing and quality-of-service prioritization, ensuring that
    capabilities enable agents to perform complex sequences of high-priority clinical agents receive preferential treatment over
    operations without human intervention, while state manage- batch processing agents. Equation 15 provides the framework
    ment ensures continuity across workflow steps. This directly for latency budgeting and optimization.
    supports the rule’s recognition that ”access” and ”use” of Resource Utilization: Agentic workloads exhibit bursty
    electronic health information includes automated means such traffic patterns as agents respond to events, initiate work-
    as robotic process automation and autonomous artificial intel- flows, and coordinate activities. The adaptive rate limiting
    ligence systems [14]. mechanism (Equation 4) maintains stable system behavior
    Governance Gap Filling: Layer 4’s governance and safety under burst conditions, while the throughput model (Equation
    mechanisms address the removed AI transparency mandates 17) guides capacity planning. Cloud providers’ healthcare
    through voluntary implementation of source attribution, risk API platforms demonstrate the feasibility of handling these
    management, and human oversight. While the rule eliminates workloads, with Google Cloud’s Healthcare API supporting
    regulatory requirements for source attribute documentation and FHIR stores with billions of resources [13].
    intervention risk management, the IAM architecture incorpo- Fault Tolerance Requirements: Healthcare applications
    rates these capabilities as best practices that maintain patient require high availability, with five nines (99.999%) reliability
    safety and trust. The policy enforcement function ensures that expected for critical systems. The IAM architecture’s redun-
    agents operate within organizational boundaries, while bias dant components (Equation 18) and workflow reliability model
    mitigation mechanisms address algorithmic fairness concerns (Equation 19) provide the framework for achieving these
    [18], [20]. reliability targets through appropriate redundancy and failover
    Information Blocking Compliance: The architecture en- mechanisms.
    sures that agents can access data through standardized APIs,
    making it difficult for actors to claim infeasibility under E. Integration with Emerging Standards
    the revised exceptions. The FHIR API gateway provides the
    The IAM architecture is designed to incorporate emerging
    standardized, documented interfaces that information blocking
    standards that extend FHIR’s capabilities for AI applications.
    regulations require, while the observability layer maintains
    The proposed rule’s mention of the Model Context Protocol
    audit logs that demonstrate compliance. This alignment with
    (MCP) highlights the importance of these evolving standards
    the tightened Infeasibility and Manner Exceptions reduces
    [12], [16].
    legal risk for both agent developers and data holders [12].
    Model Context Protocol (MCP): MCP standardizes how
    Security and Privacy Assurance: Despite the removal of
    applications provide context to large language models, en-
    privacy and security certification criteria, the IAM architec-
    abling more sophisticated AI interactions. In the IAM archi-
    ture implements robust security controls aligned with HIPAA
    tecture, MCP can be integrated at the orchestration layer to
    Security Rule requirements and industry best practices. The
    provide agents with rich context about patients, workflows,
    gateway’s security enforcement, consent management, and
    and organizational policies. This integration enables agents
    audit logging capabilities provide the assurance that patients
    to make more informed decisions and reduces the need for
    and providers require, even in the absence of certification
    repetitive data retrieval [16].
    program oversight [45], [46].
    SMART on FHIR Enhancements: The SMART on FHIR
    D. Performance Evaluation and Scalability Analysis framework continues to evolve, with enhancements for dele-
    To validate the IAM architecture’s ability to support pro- gated authorization and granular scopes that support agentic
    duction agentic workloads, we analyze its performance char- scenarios. These enhancements enable agents to act on behalf
    acteristics under various load conditions, drawing on empirical of patients or providers with appropriate consent and oversight,
    data from cloud healthcare API deployments [13], [16]. addressing the delegation challenges identified in Layer 4 [45].
    Request Volume Scaling: Major EHR vendors already HL7 FHIR Implementation Guides: Domain-specific im-
    process millions of API requests daily, with Epic customers plementation guides for prior authorization, clinical decision
    processing 51-100 million API requests and Oracle Health support, and patient access provide detailed specifications that
    handling 16-25 million third-party application sessions [15]. reduce implementer variation. The IAM architecture incorpo-
    As agentic AI systems proliferate, request volumes are ex- rates these guides through configurable validation rules in the
    pected to increase by orders of magnitude. The IAM architec- API gateway and workflow templates in the orchestration layer
    ture’s layered design enables horizontal scaling of each layer [14].
    independently, with the API gateway and orchestration layer
    designed for stateless operation that supports elastic scaling in F. Summary
    cloud environments. The Interoperability Agentic Mesh (IAM) architecture pro-
    Latency Budgets: Clinical workflows impose stringent la- vides a comprehensive framework for deploying autonomous
    tency requirements, with interactive applications requiring sub- AI systems within FHIR-based healthcare environments. Its
    second response times and background processing tolerating five-layer design addresses the perception, reasoning, action,
    longer delays. The IAM architecture supports latency-based governance, and observability requirements essential for safe
    and effective agentic AI deployment. The mathematical frame- pillar operationalizes the principle that autonomous systems
    work quantifies performance characteristics and guides ca- must be explainable and auditable [18], [22].
    pacity planning, while the alignment with regulatory changes Figure 3 illustrates the key components of the transparency
    ensures compliance with the proposed ASTP/ONC rule. By framework and their interactions.
    incorporating emerging standards and industry best practices,
    the IAM architecture offers a blueprint for health IT devel- Transparency and Accountability Framework
    opers to build agentic AI capabilities that enhance healthcare Components
    delivery while maintaining patient safety and trust [12], [17],
    [18]. 1. Source Attribution
    Description: Documentation of data sources used in
    VI. A G OVERNANCE F RAMEWORK FOR AGENTIC AI IN decisions.
    H EALTHCARE Implementation: FHIR Provenance resources, citation
    Addressing the governance gaps identified in Section IV metadata.
    requires a comprehensive framework that ensures safe, equi- 2. Reasoning Documentation
    table, and accountable deployment of agentic AI while pre-
    Description: Recording of decision-making processes.
    serving the innovation-enabling benefits of deregulation. This
    Implementation: Chain-of-thought logging, decision trees.
    section proposes a multi-layered governance framework that
    operationalizes the principles of transparency, accountability, 3. Action Logging
    security, and fairness through architectural patterns, policy Description: Comprehensive record of all agent actions.
    mechanisms, and stakeholder responsibilities [18], [20], [50]. Implementation: Immutable audit logs, blockchain
    anchoring.
    A. Governance Framework Architecture
    Figure 2 presents the proposed governance framework, 4. Human Oversight
    organized around four interconnected pillars that collectively Description: Mechanisms for human intervention.
    address the full lifecycle of agentic AI systems from develop- Implementation: Escalation workflows, approval
    ment through deployment and monitoring. dashboards. 5. Periodic Auditing
    Multi-Layered Governance Framework for Agentic AI Description: Independent verification of agent behavior.
    in Healthcare Implementation: Third-party audits, automated
    compliance checks. 1. Governance Pillars
    • Transparency & Accountability Accountability Chain
    • Security & Privacy Patient → Provider → Health System
    • Performance & Reliability → Developer → Regulator
    • Equity & Fairness Source: Adapted from [18], [20] 2. Implementation Layers
    Fig. 3. Transparency and Accountability Framework
    • Policy Layer: Regulatory Requirements & Standards
    • Organizational Layer: Governance Structures & Pro- The accountability chain establishes clear responsibility for
    cesses agent actions, with each link in the chain having defined
    • Technical Layer: Architectural Controls & Monitoring obligations:
    • Operational Layer: Day-to-Day Management & Over-
    sight 3. Lifecycle Stages Achain = {Ppatient , Pprovider , Hsystem , Ddeveloper , Rregulator }
    (20)
    • Development: Requirements, Design, Implementation
    where each entity’s accountability is quantified through
    • Validation: Testing, Certification, Risk Assessment
    responsibility scores:
    • Deployment: Integration, Training, Go-live
    • Monitoring: Performance, Audit, Continuous Im-
    X
    Resp(e) = wa · I(a) (21)
    provement
    a∈Actionse
    Source: Author’s synthesis based on [18], [50], [51] with wa representing the weight of action a and I(a)
    Fig. 2. Multi-Layered Governance Framework Architecture indicating whether entity e was involved in or responsible for
    action a.
3.  Pillar 1: Transparency and Accountability Framework: 2) Pillar 2: Security and Privacy Framework: The security
    The transparency and accountability pillar ensures that agentic and privacy pillar addresses the unique challenges posed by
    AI systems operate in ways that can be understood, verified, autonomous agents operating on sensitive health data. Figure
    and challenged by patients, providers, and regulators. This 4 presents the layered security architecture.
     Security and Privacy Framework – Defense in Depth Performance and Reliability Framework

                         1. Identity Layer                                                1. Critical Care (Mission-Critical)

    Security Controls: Authentication, Credential Management • Availability: 99.999%
    Agent Requirements: Agent identity certificates, service • Response Time (p95): < 200ms
    accounts • Throughput: 1000+ req/s
    • Error Rate: < 0.01% 2. Authorization Layer
    Security Controls: OAuth 2.0, SMART on FHIR scopes 2. Ambulatory Systems
    Agent Requirements: Fine-grained permissions, delegation • Availability: 99.9%
    chains • Response Time (p95): < 1s
    • Throughput: 100+ req/s 3. Data Layer
    • Error Rate: < 0.1%
    Security Controls: Encryption, Data minimization
    Agent Requirements: Need-to-know access, field-level 3. Administrative Systems
    redaction • Availability: 99.5%
    • Response Time (p95): < 5s 4. Communication Layer • Throughput: 50+ req/s
    Security Controls: TLS, Mutual authentication • Error Rate: < 1%
    Agent Requirements: Certificate validation, secure
    channels Reliability Model 5. Monitoring Layer k
    Y
    Security Controls: Anomaly detection, Behavioral analysis Rsystem = Rgateway · Rorchestration · Ragenti
    Agent Requirements: Pattern recognition, deviation alerts i=1

               Security Control Effectiveness Model                                          Fault Tolerance Mechanisms
                                                                                  • Redundant components
                                  n
                                  Y                                               • Automatic failover
                     Pbreach =          (1 − Pcontroli )                          • Retry with exponential backoff
                                  i=1                                             • Circuit breakers
                                                                                  • Bulkheads
                  Source: Based on [17], [45], [46]
                                                                                  • Graceful degradation
          Fig. 4. Security and Privacy Framework – Defense in Depth
                                                                                           Source: Adapted from [13], [16], [17]

    The overall security posture is quantified through the prob- Fig. 5. Performance and Reliability Framework with Service Level Objectives
    ability of breach, which decreases multiplicatively with each
    effective control layer: 4) Pillar 4: Equity and Fairness Framework: The equity
    n
    Y and fairness pillar ensures that agentic AI systems do not
    Pbreach = (1 − ηi · Ci ) (22) perpetuate or amplify existing healthcare disparities. Figure
    i=1 6 presents the framework for bias detection and mitigation.
    where ηi is the effectiveness factor of control i and Ci The disparate impact ratio measures whether agent decisions
    indicates whether the control is properly implemented. disproportionately affect protected groups:

4.  Pillar 3: Performance and Reliability Framework: The
    performance and reliability pillar ensures that agentic AI sys- P (positive outcome|G = minority)
    DI = (25)
    tems meet the stringent requirements of clinical environments. P (positive outcome|G = majority)
    Figure 5 presents the service level objectives and monitoring with values below 0.8 or above 1.25 typically triggering
    framework. investigation and mitigation [28].
    The end-to-end reliability for multi-agent workflows follows
    the product of individual component reliabilities: B. Governance Implementation Pathways
    m
    The governance framework requires implementation
    Y through multiple pathways that leverage different mechanisms
    Rworkf low = Rstepi · Rcoordination (23)
    and stakeholder groups. Figure 7 illustrates the relationships
    i=1
    between these pathways.
    with the mean time between failures (MTBF) and mean time
    to recover (MTTR) determining overall availability: C. Summary
    M T BF The multi-layered governance framework proposed in this
    A= (24) section provides a comprehensive approach to ensuring safe,
    M T BF + M T T R
     Equity and Fairness Framework Governance Implementation Pathways

                        1. Pre-Development                                                       1. Industry Self-Regulation
        • Bias Detection: Demographic analysis of training data                      • Mechanism: Voluntary standards, certification
        • Mitigation: Data balancing, synthetic data generation                      • Timeline: Short-term (1–2 years)

                          2. Development                                             • Stakeholders: Developers, vendors, industry associa-

    • Bias Detection: Algorithmic fairness metrics
    tions
    • Mitigation: Fairness constraints, adversarial debiasing 2. Regulatory Action 3. Validation • Mechanism: Rulemaking, enforcement
    • Timeline: Medium-term (2–4 years)
    • Bias Detection: Disparate impact testing
    • Stakeholders: ASTP/ONC, CMS, OCR
    • Mitigation: Threshold adjustment, model revision

                       4. Deployment                                                             3. Legislative Action
                                                                                 • Mechanism: Federal legislation

    • Bias Detection: Real-world outcome monitoring
    • Timeline: Long-term (3–5 years)
    • Mitigation: Continuous feedback loops, alerts
    • Stakeholders: Congress, advocacy groups 5. Post-Deployment 4. Multi-Stakeholder Collaboration
    • Bias Detection: Longitudinal disparity analysis
    • Mechanism: Consensus standards, best practices
    • Mitigation: Model retraining, policy updates
    • Timeline: Ongoing

                     Core Fairness Metrics                                       • Stakeholders: All ecosystem participants


                                                                                               Pathway Interaction Model

Demographic Parity: P (Ŷ = 1 | G = g) = P (Ŷ = 1), ∀g

                                                                               Self-Regulation → Proven Practices → Regulatory Adoption → Legislat

Equal Opportunity: P (Ŷ = 1 | Y = 1, G = g) = P (Ŷ = 1 | Y = 1), ∀g
Source: Author’s analysis based on [18], [20]
Fig. 7. Governance Implementation Pathways and Stakeholder Roles
Predictive Parity: P (Y = 1 | Ŷ = 1, G = g) = P (Y = 1 | Ŷ = 1), ∀g
A. Technology Adoption Lifecycle
Source: Based on [28], [50]
Figure 8 presents the projected adoption lifecycle for agentic
Fig. 6. Equity and Fairness Framework for Bias Detection and Mitigation
AI in healthcare, based on technology adoption patterns and
market forecasts.
equitable, and accountable agentic AI deployment in health- The adoption curve follows the logistic function typical of
care. Its four pillars—transparency and accountability, security technology diffusion:
and privacy, performance and reliability, and equity and fair-
K
ness—address the governance gaps created by the proposed A(t) = (26)
deregulatory rule. The implementation pathways recognize 1 + e−r(t−t0 )
that governance can emerge through multiple mechanisms, where K is the saturation level, r is the adoption rate,
from voluntary industry standards to regulatory action and and t0 is the inflection point. Based on current projections,
legislative frameworks, and that these pathways are com- the healthcare agentic AI market is expected to reach $44.97
plementary rather than mutually exclusive. By establishing billion by 2035 with a compound annual growth rate (CAGR)
clear expectations for agent behavior across all four pillars of 22.28% [52].
and engaging multiple stakeholders in implementation, this
B. Regulatory and Policy Timeline
framework enables the realization of agentic AI’s benefits
while managing its inherent risks [18], [20], [50]. Figure 9 presents the projected timeline for regulatory
developments affecting agentic AI in healthcare.
VII. F UTURE T IMELINES AND ROADMAP FOR AGENTIC
AI IN H EALTHCARE C. Capability Maturation Timeline
The deployment of agentic AI in healthcare will unfold over Figure 10 illustrates the projected maturation of agentic AI
multiple phases, driven by technological advances, regulatory capabilities across different healthcare domains.
developments, and market adoption. This section presents a Capability growth follows an exponential trajectory in each
comprehensive timeline and roadmap for the evolution of domain:
agentic AI capabilities and governance frameworks through
2035 [43], [52], [53]. Cd (t) = Cd,0 · eλd t (27)
 Agentic AI Adoption Lifecycle in Healthcare Regulatory and Policy Timeline (2025–2035)
(2025–2035)
2025 1. Innovators (2025–2027) • Action: Proposed Rule (RIN 0955-AA09)
• Adoption: < 5% • Impact: FHIR-forward framework established
• Applications: Administrative automation, pilot pro- 2026–2027
grams • Action: Rule finalization and implementation
• Market Size: $5–10B
• Impact: API infrastructure investment accelerates 2. Early Adopters (2027–2029) 2028–2029
• Adoption: 5–15%
• Action: AI governance guidance from ASTP/ONC
• Applications: Clinical decision support, prior autho-
• Impact: Voluntary transparency standards emerge
rization
2030–2031
• Market Size: $10–25B
• Action: Potential legislative action on AI 3. Early Majority (2029–2032)
• Impact: Baseline safety and fairness requirements
• Adoption: 15–50%
2032–2033
• Applications: Patient engagement, population health
• Action: International harmonization efforts
• Market Size: $25–50B
• Impact: Global interoperability standards 4. Late Majority (2032–2034)
2034–2035
• Adoption: 50–85%
• Action: AGI preparedness framework
• Applications: Full clinical integration, multi-agent sys-
• Impact: Governance for artificial general intelligence
tems
• Market Size: $50–100B
Regulatory Evolution Path 5. Laggards (2035+)
• Adoption: > 85%
• Applications: Ubiquitous deployment, advanced AGI Deregulation → Voluntary Standards → Targeted Regulation → Compre
capabilities
• Market Size: $100B+ Source: Author’s projections based on [20], [50], [54]
Fig. 9. Regulatory and Policy Timeline for Agentic AI in Healthcare
Adoption Model
1
A(t) = where R(t) represents the risk level from increasingly
1 + e−r(t−t0 )
capable agents and M (t) represents mitigation capability from
Source: Projections based on [52], [53] governance frameworks. Maintaining this balance requires
continuous investment in governance capabilities that keep
Fig. 8. Agentic AI Adoption Lifecycle in Healthcare (2025–2035)
pace with technological advancement [20].
VIII. R ECOMMENDATIONS FOR S TAKEHOLDERS
where λd varies by domain, with administrative capabilities
Based on our analysis, we offer the following recommenda-
maturing fastest (λ ≈ 0.3) and clinical capabilities requiring
tions for stakeholders navigating the intersection of regulatory
more time (λ ≈ 0.2) due to safety and validation requirements
modernization and agentic AI deployment.
[22].
A. For Policymakers and Regulators
D. Integrated Roadmap 2025-2035 First, finalize the proposed rule’s FHIR-forward provisions
Figure 11 presents an integrated roadmap combining tech- while addressing governance gaps through complementary
nology adoption, regulatory developments, and capability mat- actions. The strategic vision of API-driven interoperability is
uration. sound and should be implemented [12], [14].
Second, initiate a multi-stakeholder process to develop vol-
E. Risk Trajectory and Mitigation Timeline untary governance standards for agentic AI in healthcare. This
process should address transparency, security, performance,
As agentic AI capabilities increase, so do potential risks.
and equity, producing consensus standards that can guide
Figure 12 illustrates the projected risk trajectory and corre-
industry practice [18], [20].
sponding mitigation capabilities.
Third, monitor the impact of deregulatory actions on AI
The risk-mitigation gap must be minimized over time: transparency and patient safety. If voluntary approaches prove
insufficient, prepare for future rulemaking to establish manda-
lim [R(t) − M (t)] = 0 (28) tory requirements [28], [50].
t→∞
 Agentic AI Capability Maturation Timeline Integrated Roadmap for Agentic AI in Healthcare
(2025–2035) 1. Administrative
• 2025–2027: Basic automation Phase 1: 2025–2027 (Foundation)
• 2028–2030: Workflow orchestration • Technology: FHIR API expansion, pilot agents
• 2031–2033: End-to-end processing • Regulatory: Proposed rule implementation
• 2034–2035: Autonomous administration • Market: Early innovators ($5–10B) 2. Clinical Decision Support • Research: Safety validation, pilot studies

    • 2025–2027: Rule-based alerts                                               Phase 2: 2028–2030 (Expansion)
    • 2028–2030: Literature synthesis                                   • Technology: Multi-agent coordination, MCP adoption
    • 2031–2033: Multi-modal reasoning                                  • Regulatory: Voluntary governance standards
    • 2034–2035: Collaborative diagnosis                                • Market: Early adopters ($10–25B)
                 3. Patient Engagement                                  • Research: Clinical effectiveness, bias detection

    • 2025–2027: Scheduled reminders                                            Phase 3: 2031–2033 (Acceleration)
    • 2028–2030: Personalized coaching                                  • Technology: Advanced reasoning, IoT integration
    • 2031–2033: Proactive intervention                                 • Regulatory: Targeted regulation
    • 2034–2035: Continuous care coordination                           • Market: Early majority ($25–50B)

                  4. Population Health                                  • Research: Human–AI collaboration, workflow integra-

    • 2025–2027: Retrospective reporting
                                                                          tion
    • 2028–2030: Real-time surveillance                                          Phase 4: 2034–2035 (Maturation)
    • 2031–2033: Predictive modeling                                    • Technology: AGI capabilities, autonomous systems
    • 2034–2035: Autonomous public health response                      • Regulatory: Comprehensive framework

                       5. Research                                      • Market: Late majority ($50–100B+)
                                                                        • Research: Governance evolution, international harmo-
    • 2025–2027: Literature search
    • 2028–2030: Hypothesis generation
                                                                          nization
    • 2031–2033: Experimental design
                                                                                     Critical Success Factors
    • 2034–2035: Autonomous discovery
                                                                        • Robust API infrastructure
                   Capability Scaling Model                             • Clear regulatory guidance
                                                                        • Comprehensive governance
                          C(t) = C0 · eλt                               • Stakeholder collaboration


                  Source: Based on [22], [43]                          Source: Author’s synthesis integrating [20], [52], [53]
     Fig. 10. Agentic AI Capability Maturation Timeline by Domain    Fig. 11. Integrated Roadmap for Agentic AI in Healthcare (2025–2035)

Fourth, coordinate with international partners on AI gover- ment requirements. Implement webhooks and subscriptions to
nance to ensure U.S. leadership while maintaining interoper- support event-driven agent architectures [14], [16].
ability with global health systems. International alignment on Third, implement comprehensive logging and observability.
AI ethics and governance provides a foundation for coopera- Agents will need to be audited; providing rich logs as a service
tion [50], [51], [54]. will differentiate your platform [17], [44].
Fifth, invest in research on agentic AI safety, effectiveness, Fourth, engage with governance standard-setting processes.
and equity. Federal funding agencies should prioritize research The rules for agentic AI will be written in the coming years;
that addresses the unique challenges of autonomous systems developers who participate in shaping them will be better
in healthcare [43], [53]. positioned to comply [18], [20].
Fifth, invest in AI safety and fairness capabilities. Proac-
tively addressing these issues will reduce regulatory risk and
B. For Health IT Developers
build customer trust [28], [50].
First, invest aggressively in FHIR-based API infrastructure.
The regulatory signal is clear: the future is API-driven. De- C. For Healthcare Providers
velopers who build robust, scalable APIs will be positioned to First, develop organizational strategies for agentic AI adop-
support the agentic AI applications that will increasingly drive tion. Identify high-value use cases, assess vendor capabilities,
customer value [12], [17]. and plan for integration with existing systems [9], [10].
Second, design APIs with agentic workloads in mind. Second, establish governance processes for AI agent deploy-
Consider request volumes, query patterns, and state manage- ment. Define roles and responsibilities for oversight, create
 Risk Trajectory and Mitigation Capability Second, study the impact of agentic AI on clinical work-
(2025–2035) flows, patient outcomes, and healthcare disparities. Empirical
evidence is needed to guide policy and practice [28], [50].
2025 Third, contribute to the development of governance stan-
• Risk Level: Low dards. Research on transparency, fairness, and accountability
• Mitigation: Basic logging can inform the standards development process [20], [43].
• Gap: Narrow Fourth, explore the intersection of agentic AI with emerging
2027 interoperability standards like the Model Context Protocol.
• Risk Level: Medium
Understanding how these technologies interact will inform
• Mitigation: Enhanced monitoring
both technical development and policy [12], [16].
• Gap: Moderate
Fifth, investigate the economic implications of agentic AI
adoption. Quantifying benefits and costs will help providers
2030
and policymakers make informed decisions [31], [32].
• Risk Level: Medium-High
• Mitigation: Real-time intervention E. For Patients and Advocacy Organizations
• Gap: Stable First, advocate for transparency in AI systems that affect
2033 your care. Patients should have the right to understand how
• Risk Level: High decisions about their care are made [18], [50].
• Mitigation: Predictive prevention Second, participate in governance processes. Patient per-
• Gap: Narrowing spectives are essential for ensuring that AI systems serve
2035 patient needs and respect patient values [28], [51].
• Risk Level: Very High
Third, stay informed about AI developments in healthcare.
• Mitigation: Autonomous governance
Understanding the capabilities and limitations of these systems
• Gap: Target: Zero
will help you make informed decisions about your care [1],
[10].
Risk-Mitigation Balance Model
D ECLARATION
Gap(t) = R(t) − M (t) → 0 as t → ∞ The views expressed are those of the author and do not
represent any affiliated institutions. This work is conducted
Source: Author’s analysis based on [18], [20] as part of independent research. This is a review paper, and
Fig. 12. Risk Trajectory and Mitigation Capability Timeline all results, proposals, and findings are derived from the cited
literature. The author does not claim any novel findings. The
author’s work was to review and organize existing research.
review procedures for new agent applications, and develop Portions of this manuscript were drafted with the assis-
monitoring capabilities [18], [22]. tance of AI writing tools (including ChatGPT and Claude
Third, invest in workforce development. Clinicians and by Anthropic) to improve clarity and organization. All AI-
staff will need training to work effectively with AI agents. generated content was reviewed, edited, and verified by the
Understanding agent capabilities and limitations, interpreting author for coherence and factual accuracy, and to eliminate
agent recommendations, and maintaining appropriate oversight potential hallucinations as much as possible. The LATEX code
are skills that will become essential [31], [55]. was developed with the assistance of GitHub Copilot and
edited through DeepSeek. This paper has been submitted as
Fourth, engage with vendors on transparency. When eval-
a public comment to the Department of Health and Human
uating agentic AI products, ask detailed questions about how
Services, Docket ID HHS-ONC-2025-0005, in response to the
agents make decisions, what data they use, and how they can
proposed rule Health Data, Technology, and Interoperability:
be audited [18], [50].
ASTP/ONC Deregulatory Actions to Unleash Prosperity (Dec.
Fifth, participate in multi-stakeholder governance initiatives. 29, 2025). Final responsibility for all content, including any
Provider perspectives are essential for developing practical, errors or omissions, rests solely with the readers.
effective governance frameworks [20], [28].
IX. C ONCLUSION AND F UTURE D IRECTIONS
D. For Researchers The proposed ASTP/ONC deregulatory rule represents a
watershed moment for health information technology in the
First, develop methods for evaluating agentic AI systems in United States. By aggressively pruning outdated certification
healthcare contexts. Traditional evaluation approaches focused requirements and embracing a FHIR-forward, API-driven ar-
on static model performance are insufficient for systems that chitecture, the rule creates the essential technical foundation
interact dynamically with their environment over time [18], for the next generation of healthcare innovation: agentic gen-
[22]. erative AI. The explicit recognition that automated access to
health data is protected under information blocking regulations [4] Agentic AI in Healthcare. TECHCOMMUNITY.MICROSOFT.COM.
removes legal ambiguity and affirms a national policy in favor [Online]. Available: https://techcommunity.microsoft.com/blog/
healthcareandlifesciencesblog/agentic-ai-in-healthcare/4447082
of programmable, interoperable health data [12], [14]. [5] Agentic AI: 4 reasons why it’s the next big thing in AI research — IBM.
However, the rule’s deregulatory approach also creates [Online]. Available: https://www.ibm.com/think/insights/agentic-ai
governance gaps that must be addressed. The removal of [6] Agents of change: The role of AGENTIC AI in modern
healthcare — by marta g. zanchi — nina capital —
AI transparency mandates, privacy and security certification Medium. [Online]. Available: https://medium.com/ninacapital/
requirements, and other safeguards eliminates regulatory over- agents-of-change-the-role-of-agentic-ai-in-modern-healthcare-943a7c6510dd
sight without establishing alternatives. As agentic AI systems [7] Core Innovation Capital. Core Innovation Cap-
ital. [Online]. Available: https://corevc.com/perspective/
become more capable and prevalent, the need for robust ai-agents-in-healthcare-bridging-data-and-human-care/
governance frameworks ensuring transparency, accountability, [8] faheem.nawaz. How Agentic AI is Transforming Healthcare: Benefits
security, and fairness becomes urgent [18], [20]. & Use Cases. Accelirate. [Online]. Available: https://www.accelirate.
com/agentic-ai-in-healthcare/
The framework proposed in this paper offers a path forward. [9] How Agentic AI Is Transforming Healthcare Interoperability: A
By establishing clear expectations for agent transparency, Comprehensive Guide. Naviant. [Online]. Available: https://naviant.
security, performance, and equity, and by engaging multiple com/blog/agentic-ai-healthcare-interoperability/
[10] How agentic AI systems can solve problems in healthcare today.
stakeholders in implementation, we can realize the benefits of [Online]. Available: https://www.gehealthcare.com/insights/article/
agentic AI while managing its risks. The choice is not between how-agentic-ai-systems-can-solve-the-three-most-pressing-problems-in-healthcare-tod
regulation and innovation but between thoughtful governance srsltid=AfmBOopw0xm4 i3wOS-J4Z GtIRZWa6wWsZLRotbhUoq8
d6owuK4s8t
that enables innovation and reactive governance that responds [11] Use Cases of Agentic AI in Healthcare — Svitla Systems. [Online].
to failures [43], [53]. Available: https://svitla.com/blog/agentic-ai-healthcare-use-cases/
The stakes extend beyond healthcare efficiency and patient [12] (3) API-Driven Agentic Systems: Accelerating
Interoperability Across Healthcare Platforms —
outcomes. Artificial intelligence is increasingly recognized LinkedIn. [Online]. Available: https://www.linkedin.com/pulse/
as a strategic technology for national competitiveness and api-driven-agentic-systems-accelerating-across-healthcare-riken-shah-lfc8c/
security [20], [53]. Nations that successfully integrate AI into [13] (3) Google Cloud Healthcare API for Agentic AI Interoperability
— LinkedIn. [Online]. Available: https://www.linkedin.com/pulse/
their healthcare systems will achieve advantages in population google-cloud-healthcare-api-agentic-ai-leo-akin-odutola-3pklc/
health, economic productivity, and technological capability. [14] AI Agents for Interoperability & Integration — FHIR,
The United States has an opportunity to lead this transfor- HL7, HIPAA. [Online]. Available: https://nextigent.ai/functions/
interoperability-and-integration/
mation, building on its strengths in research, innovation, and [15] From APIs to AI Agents: The Next Era of Healthcare
regulatory sophistication [20], [56]. Interoperability. Rhapsody. [Online]. Available: https://rhapsody.health/
Future research should address several critical questions. blog/from-apis-to-ai-agents-the-next-era-of-healthcare-interoperability/
[16] Building healthcare AI agents with open-source AWS
How can agentic AI systems be evaluated for safety and effec- HealthLake MCP server — AWS for Industries.
tiveness before deployment? What governance structures best [Online]. Available: https://aws.amazon.com/blogs/industries/
balance innovation and oversight? How do agentic systems building-healthcare-ai-agents-with-open-source-aws-healthlake-mcp-server/
[17] A. Satav, “Enterprise API & Platform Strategy in the era of
interact with existing healthcare workflows and professional Agentic AI,” vol. 7, no. 1, pp. 380–385. [Online]. Available:
roles? What are the long-term impacts on health disparities https://al-kindipublisher.com/index.php/jcsts/article/view/8907
and access to care? Answering these questions will require [18] S. Joshi. Framework for Government Policy on Agentic and
Generative AI in Healthcare: Governance, Regulation, and Risk
sustained collaboration across technical, clinical, policy, and Management of Open-Source and Proprietary Models. [Online].
social science disciplines [18], [22]. Available: https://www.preprints.org/manuscript/202509.1087
The convergence of agentic AI and healthcare interoperabil- [19] J. Satyadhar, “Comprehensive Review of Gen Agentic AI in
Marketing: Tools, Theories and Applications,” vol. 12, no. 5,
ity is not merely a technical development but a social transfor- pp. 1–8. [Online]. Available: https://ijirem.org/view abstract.
mation. It will reshape how care is delivered, how decisions php?title=Comprehensive-Review-of-Gen-Agentic-AI-in-Marketing:
are made, and how patients experience the healthcare system. -Tools,-Theories-and-Applications&year=2025&vol=12&primary=
QVJULTE5MTk=
Getting it right—ensuring that these powerful technologies [20] ——, “Securing U.S. AI Leadership: A policy guide for
serve human needs, respect human values, and expand human regulation, standards and interoperability frameworks,” vol. 16,
capabilities—is one of the defining challenges of our time [51], no. 3, pp. 001–026. [Online]. Available: https://journalijsra.com/content/
securing-us-ai-leadership-policy-guide-regulation-standards-and-interoperability-frame
[54]. The regulatory framework we build today will shape [21] ——, “Strategic Integration of Artificial Intelligence in U.S. K–12
the healthcare of tomorrow, determining whether agentic AI Education: A Comprehensive Review and Policy Roadmap,” vol. 187.
fulfills its promise of more accessible, affordable, and effective [22] P. Timsina, G. Raut, S. N. Cheetirala, B. Glicksberg, M. A.
Levin, G. Nadkarni, R. Freeman, E. Klang, and P. Timsina.
care for all Americans [20], [28]. AI Agents in Modern Healthcare: From Foundation to Pioneer
– A Comprehensive Review and Implementation Roadmap for
R EFERENCES Impact and Integration in Clinical Settings. [Online]. Available:
https://www.preprints.org/manuscript/202503.1352
[1] Agentic AI in Healthcare 2025: Applications & [23] J. Satyadhar, “Open-Source vs. Commercial Coding Assistants:
Challenges. [Online]. Available: https://kodexolabs.com/ A 2025 Comparison of DeepSeek R1, Qwen 2.5 and Claude
agentic-ai-healthcare-applications-benefits-challenges/ 3.7.” [Online]. Available: https://ijcat.com/archieve/volume14/issue9/
[2] Agentic AI in Healthcare. Osplabs. [Online]. Available: https: ijcatr14091002.pdf
//www.osplabs.com/agentic-ai-in-healthcare/ [24] A. Temsah, K. Alhasan, I. Altamimi, A. Jamal, A. Al-Eyadhy, K. H.
[3] Agentic AI in healthcare: A new era of intelligent automation. [Online]. Malki, M.-H. Temsah, A. Temsah, K. Alhasan, I. Altamimi, A. Jamal,
Available: https://www.kore.ai/blog/agentic-ai-in-healthcare A. Al-Eyadhy, K. H. Malki, and M.-H. Temsah, “DeepSeek in
 Healthcare: Revealing Opportunities and Steering Challenges of a New Aug. 2025. [Online]. Available: https://www.klover.ai/
Open-Source Artificial Intelligence Frontier,” Cureus, vol. 17, no. 2, Feb. siemens-healthineers-ai-strategy-analysis-of-dominance-in-medical-tech-ai/
2025, publisher: Cureus. [Online]. Available: https://cureus.com/articles/ [43] J. Satyadhar, “Review of Artificial General Intelligence (AGI):
341667-deepseek-in-healthcare-revealing-opportunities-and-steering-challenges-of-a-new-open-source-artificial-intelligence-frontier
Implications for the U.S. Workforce and Economic Stability,” pp. 336–
[25] H. M. School, “Open-source AI tool competes with leading proprietary 350. [Online]. Available: https://ijisem.com/journal/index.php/ijisem/
models in medical diagnosis,” Mar. 2025, section: Medical News. article/view/354
[Online]. Available: https://www.news-medical.net/news/20250314/ [44] Why CIOs see APIs as vital for agentic AI success.
Open-source-AI-tool-competes-with-leading-proprietary-models-in-medical-diagnosis. CIO. [Online]. Available: https://www.cio.com/article/4018578/
aspx why-cios-see-apis-as-vital-for-agentic-ai-success.html
[26] T. A. Buckley, B. Crowe, R.-E. E. Abdulnour, A. Rodman, [45] Ekene. Agentic API in Healthcare : Securing medical agents
and A. K. Manrai, “Comparison of Frontier Open-Source and mesh. PPLE Labs. [Online]. Available: https://pplelabs.com/
Proprietary Large Language Models for Complex Diagnoses,” JAMA agentic-api-in-healthcare/
Health Forum, vol. 6, no. 3, pp. e250 040–e250 040, Mar. 2025, [46] HIPAA-Compliant Agentic AI for Safer & Smarter
publisher: American Medical Association. [Online]. Available: https: Patient Care. [Online]. Available: https://kodexolabs.com/
//jamanetwork.com/journals/jama-health-forum/fullarticle/2831206 hipaa-compliant-agentic-ai-for-better-patient-care/
[27] L. Riedemann, M. Labonne, and S. Gilbert, “The path forward for large [47] InterSystems and Google Cloud Integrate InterSystems HealthShare
language models in medicine is open,” npj Digital Medicine, vol. 7, with Google Cloud’s Healthcare API — FirstWord HealthTech.
no. 1, p. 339, Nov. 2024, publisher: Nature Publishing Group. [Online]. [Online]. Available: https://firstwordhealthtech.com/story/6327516
Available: https://www.nature.com/articles/s41746-024-01344-w [48] “Google for Health - Advancing Cutting-edge AI Capabilities.”
[28] S. Joshi. Medicare and Medicaid Healthcare Access and Affordability [Online]. Available: https://health.google/ai-models
Using Agentic Generative AI and AGI: Policy Implications and [49] “Accelerating The Healthcare AI Revolution: Reasoning Models
Guidelines. [Online]. Available: https://www.preprints.org/manuscript/ and Data.” [Online]. Available: https://www.carahsoft.com/wordpress/
202509.1269 accelerating-the-healthcare-ai-revolution-reasoning-models-and-data-nutanix-2025/
[29] K. Coleman, “Lowering Health Care Costs Through [50] R. Bouderhem, “Shaping the future of AI in healthcare through ethics
AI: The Possibilities and Barriers,” Jul. 2024. and governance,” Humanities and Social Sciences Communications,
[Online]. Available: https://paragoninstitute.org/private-health/ vol. 11, no. 1, p. 416, Mar. 2024, publisher: Palgrave. [Online].
lowering-health-care-costs-through-ai-the-possibilities-and-barriers/ Available: https://www.nature.com/articles/s41599-024-02894-w
[30] “Revolutionizing Claims Operations With AI and Agentic [51] Ethics and Governance of Artificial Intelligence for Health: WHO
Workflows,” May 2025, section: Commentary. [Online]. Available: Guidance, 1st ed. Geneva: World Health Organization, 2021.
https://www.hmpgloballearningnetwork.com/site/frmc/commentary/ [52] M. R. Future (MRFR). Agentic Ai Market Is Pro-
revolutionizing-claims-operations-ai-and-agentic-workflows jected To Reach USD 44.97 Billion by 2035
[31] J. Satyadhar, “Training the US older workforce for the impact of —. [Online]. Available: https://www.openpr.com/news/4392022/
generative AI on Financial Services: A Policy Guide,” vol. 17, agentic-ai-market-is-projected-to-reach-usd-44-97-billion-by-2035
no. 1, pp. 001–016. [Online]. Available: https://journalijsra.com/content/ [53] J. Satyadhar, “Agentic Generative AI and the Future US. Workforce
training-us-older-workforce-impact-generative-ai-financial-services-policy-guideAdvancing Innovation and National Competitiveness,” vol. 12, no. 2,
[32] S. Joshi, “Impact of GenAI on US. Financial Advisors: Re-skilling pp. 102–113. [Online]. Available: https://www.ijrrjournal.com/IJRR
for Cost-Effective and Efficient Financial Analysis and Planning,” Vol.12 Issue.2 Feb2025/IJRR12.pdf
vol. 12, no. 4, pp. 69–79. [Online]. Available: https://ijirem.org/ [54] Ethics and Governance of Artificial Intelligence for Health: Large
view abstract.php?title=Impact-of-GenAI-on-U.S.-Financial-Advisors: Multi-Modal Models. WHO Guidance, 1st ed. Geneva: World Health
-Re-skilling-for-Cost-Effective-and-Efficient-Financial-Analysis-and-Planning& Organization, 2024.
year=2025&vol=12&primary=QVJULTE5MTc= [55] J. Satyadhar, “Reskilling the U.S. Military Workforce for the Agentic
[33] Agentic AI Integrations for athenaOne® — athenahealth. AI Era: A Framework for Educational Transformation,” vol. 38,
[Online]. Available: https://www.athenahealth.com/resources/blog/ no. 6, pp. 1–13. [Online]. Available: https://journaljesbs.com/index.php/
benefits-of-agentic-ai-marketplace-integrations JESBS/article/view/1436
[34] Why we built a healthcare-focused agentic AI plat- [56] W. Chang, R. Arcesati, and A. Hmaidi, “CHINA’S DRIVE TOWARD
form. [Online]. Available: https://www.notablehealth.com/blog/ SELF-RELIANCE IN ARTIFICIAL INTELLIGENCE.”
why-we-built-a-healthcare-focused-agentic-ai-platform
[35] Announcing agentic AI for healthcare patient engagement
in Amazon Connect (Preview) — AWS for Industries.
[Online]. Available: https://aws.amazon.com/blogs/industries/
announcing-agentic-ai-for-healthcare-patient-engagement-in-amazon-connect-preview/
[36] Agentic AI and IoT devices intersect in Healthcare : Health
Cloud Solutions. [Online]. Available: https://healthcloudsolutions.org/
agentic-ai-and-iot-devices-intersect-in-healthcare
[37] A. G. Lee. Agentic AI–Powered Innovation-
Focused Hospital Partnership Framework. Medium.
[Online]. Available: https://medium.com/@alexglee/
agentic-ai-powered-innovation-focused-hospital-partnership-framework-0cfccc2eecd9
[38] Discover Health Systems. SpringerLink. [Online]. Available: https:
//link.springer.com/journal/44250
[39] “Opportunities for gen AI in public health | McKinsey.”
[Online]. Available: https://www.mckinsey.com/industries/social-sector/
our-insights/public-healths-inflection-point-with-generative-ai
[40] “Accelerating Life Sciences Innovation with Agentic AI on
AWS | AWS for Industries,” May 2025, section: Amazon
Bedrock. [Online]. Available: https://aws.amazon.com/blogs/industries/
accelerating-life-sciences-innovation-with-agentic-ai-on-aws/
[41] J. Satyadhar, “Comprehensive review of Artificial General Intelligence
(AGI): Applications in Business and Finance,” vol. 7, no. 5, pp. 250– 261. [Online]. Available: https://ijaem.net/issue dcp/Comprehensive%
20review%20of%20Artificial%20General%20Intelligence%20AGI%
20%20Applications%20in%20Business%20and%20Finance.pdf
[42] K. Dany, “Siemens Healthineers AI Strategy Analysis
of Dominance in Medical Tech AI Klover ai,”
