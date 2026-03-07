# HHS-ONC-2025-0005-0259 - attachment text

The Honorable Thomas Keane, MD, MBA
Assistant Secretary for Technology Policy and
National Coordinator for Health Information Technology
U.S. Department of Health and Human Services
330 C St SW Floor 7
Washington, DC 20201
Dear Assistant Secretary Keane:
On behalf of Abridge, we appreciate the opportunity to comment on the Health Data,
Technology, and Interoperability: ASTP/ONC Deregulatory Actions to Unleash Prosperity
(HTI-5) Proposed Rule (RIN: 0955-AA09).
We commend this initiative to gather input on the digital health product market, data
interoperability, and the broader health technology infrastructure from a broad range of
stakeholders, and are grateful for the chance to contribute to this vital conversation.
Founded in 2018, Abridge is the leading enterprise-grade AI platform for clinical
conversations. Powered by a purpose-built system of intelligence for healthcare, the
company is building real-time bridges between patients, providers, and payers, including
prior authorization, risk adjustment, and clinical decision support. This year, Abridge is
projected to support more than 80 million patient-clinician conversations across 250 of the
largest and most complex health systems in the U.S. With deep EHR integration, support for
28+ languages, and 50+ specialties, Abridge is used across the entire care journey, including
outpatient, emergency department, inpatient, and nursing workﬂows.
Abridge is seing the industry standard for the responsible deployment of AI across health
systems. Features like Linked Evidence map AI-generated clinical documentation to source
data, helping clinicians quickly trust and verify the output.
Abridge appreciates ASTP/ONC’s leadership in issuing the HTI-5 Proposed Rule and supports
the agency’s eort to modernize the Health IT Certiﬁcation Program in a manner that both
reduces unnecessary regulatory burden and strengthens the foundation for AI-enabled
interoperability. The Proposed Rule reﬂects a clear recognition that certiﬁcation frameworks
1

originally designed for static health IT products must evolve to accommodate continuously
improving, standards-based technologies while preserving patient safety and clinician
oversight.
Set forth below are Abridge’s comments on speciﬁc aspects of the Proposed Rule, framed to
support the agency’s objectives while oering considerations that may assist ASTP/ONC in
ﬁnalizing durable, workable policy.
I. Removal of Artiﬁcial Intelligence “Model Card” Requirements
The Proposed Rule would remove the artiﬁcial intelligence “model card” requirement
established under the Decision Support Interventions (DSI) certiﬁcation criterion. Abridge
supports this proposal and agrees that static documentation requirements are misaligned
with the technical and operational realities of modern AI systems. AI models used in clinical
seings are frequently updated, retrained, or adapted to local workﬂows, which limits the
utility of ﬁxed documentation prepared at a single point in time.
From a patient-safety perspective, reliance on static disclosures risks creating a false sense
of assurance while diverting aention from more meaningful safeguards. Abridge’s
experience demonstrates that safety and accountability are beer advanced through
mechanisms that operate continuously within clinical workﬂows, including clinician
oversight, human-in-the-loop veriﬁcation, and auditability of AI-generated outputs. By
enabling clinicians to trace generated clinical documentation directly to the underlying
transcript and audio recording of the patient encounter, embedded auditability provides
real-time transparency that remains eective as AI systems evolve.
II. Clariﬁcation of “Access” and “Use” to Include Autonomous AI Systems
The Proposed Rule clariﬁes that automated and autonomous systems are included within
the deﬁnitions of “access” and “use” of electronic health information. Abridge strongly
supports this clariﬁcation and views it as foundational to eective interoperability in modern
clinical environments. Recognizing these autonomous systems is not merely a technicality; it
is a prerequisite for a future where patient data is truly ﬂuid. By ensuring AI agents can
access and structure information without friction, the ONC empowers patients to receive
more accurate, timely care and reduces the 'data tax' currently paid by clinicians in the form
of administrative burnout.
2

AI systems increasingly function as authorized agents acting on behalf of
clinicians—extracting data, structuring clinical information, and supporting documentation in
real time. Absent explicit regulatory recognition, such systems may be subject to de facto
information blocking despite appropriate patient or provider authorization. This ambiguity
can be leveraged through technical or contractual barriers that undermine interoperability
while nominally complying with existing rules.
By expressly including autonomous systems within the scope of permissible access and use,
ASTP/ONC provides needed clarity to developers, providers, and enforcement bodies alike,
ensuring that information blocking protections reﬂect how care is delivered today and will be
increasingly delivered in the future.
As ASTP/ONC ﬁnalizes this clariﬁcation, additional implementation guidance may be helpful
to ensure consistent application across the ecosystem. Speciﬁcally, conﬁrmation that
“automated means” includes service accounts, provider-authorized AI agents, and
event-driven API workﬂows would reduce ambiguity and prevent interoperability barriers.
Clear alignment between information blocking policy and modern API architecture will ensure
that authorized AI systems can retrieve, structure, and act upon EHI in real time consistent
with clinician intent and patient consent.
III. Revisions to the Infeasibility Exception
The Proposed Rule would remove the “third party seeking modiﬁcations use” condition from
the Infeasibility Exception. Abridge supports this revision and agrees with ASTP/ONC that
the exception, as currently structured, has been susceptible to misuse in ways that impede
legitimate interoperability.
In practice, infeasibility claims may be invoked to delay or deny data exchange even where
technical solutions exist and access is authorized. One recurring challenge involves the
secure return of structured data into systems of record. Despite technical feasibility,
developers and providers may encounter resistance framed as infeasibility, eectively
limiting innovation and patient beneﬁt.
This revision is especially timely given the rapid advancement of AI-enabled clinical tools.
Agentic systems require real-time, automated access to EHR data to maximize their
potential to improve patient care. For example, a physician querying an AI-powered Clinical
Decision Support (CDS) tool about appropriate medications for a patient must receive a
response informed by that patient's current allergies, active medications, and other potential
3

contraindications drawn directly from the EHR. Under the current infeasibility condition, an
actor could plausibly claim that supporting real-time, automated data retrieval by a
third-party CDS system is "infeasible" — not because of genuine technical barriers, but
because of the cost or eort of enabling the integration. Removing the "third party seeking
modiﬁcation use" condition would narrow this avenue for obstruction and beer align the
exception with ASTP/ONC's stated intent to support automated and AI-driven access to EHI.
Reﬁning the exception as proposed would help ensure that infeasibility claims are grounded
in genuine technical or operational constraints. This change would also reinforce the broader
goals of the information blocking framework by promoting consistent application and
reducing opportunities for selective enforcement.
IV. Modernization of FHIR-Based API Requirements
The Proposed Rule signals a reset of the Certiﬁcation Program’s regulatory scope to
establish a foundation for future FHIR®-based API requirements. Abridge supports this
direction and agrees that modern, standards-based APIs are essential to advancing
interoperability.
However, experience across care seings indicates that many current FHIR implementations
remain limited in practice to read-only access and are not designed to support automation,
bidirectional workﬂows, or structured data write-back. As AI-enabled tools become more
integral to clinical operations, APIs must evolve to support authorized agents that both
retrieve and return data in a secure, usable manner.
As ASTP/ONC builds upon the HTI-5 framework, continued emphasis on APIs that enable
bidirectional, structured exchange will be critical to ensuring that AI systems reduce
administrative burden rather than shift it to clinicians. Aligning certiﬁcation requirements
with these functional realities will help ensure that interoperability advances in a way that is
both scalable and clinically meaningful.
In particular, ASTP/ONC may wish to consider emphasizing API functionality that supports
authorized bidirectional exchange. As AI systems increasingly generate structured
documentation, quality-relevant data elements, and coding-support artifacts, the ability to
return validated outputs into the system of record is essential to realizing administrative
burden reduction. Without bidirectional capability, interoperability risks becoming extractive
rather than transformative, requiring clinicians to manually reconcile AI-generated insights
rather than seamlessly incorporating them into care delivery.
4

V. Oversight of AI-Enabled Interoperability and the Role of Trusted
Intermediaries
ASTP/ONC’s issuance of the Proposed Rule alongside an HHS request for information on AI
governance, reimbursement, and interoperability reﬂects a balanced approach, resolving
near-term issues while investing in long-term policy development. Abridge supports this
dual-track strategy.
As the agency continues to develop its AI policy framework, a risk-based approach that
recognizes trusted intermediaries may oer a more eective path forward than uniform
certiﬁcation requirements applied across heterogeneous technologies. Focusing oversight
on demonstrable safeguards—such as security controls, auditability, provenance, and
clinician oversight—would allow regulators to target meaningful risks while enabling
responsible innovation at scale.
Such an approach would also help reduce fragmentation and promote consistency in how
AI-enabled interoperability is implemented across the health system.
Conclusion
HTI-5 represents an important inﬂection point in federal health IT policy. ASTP/ONC can
accelerate the trusted adoption of AI throughout the health system by strengthening
interoperability safeguards against technical or contractual gatekeeping and reducing
outdated certiﬁcation requirements. Abridge stands ready to partner with the Department to
ensure that the next generation of interoperability policy enables innovation while
safeguarding patient trust and clinician accountability. We are eager to collaborate further
and contribute to the ongoing dialogue. For any inquiries or additional information, please
reach out to Damika Barr at govaairs@abridge.com .
Sincerely,
Tim Hwang
General Counsel
5

---
