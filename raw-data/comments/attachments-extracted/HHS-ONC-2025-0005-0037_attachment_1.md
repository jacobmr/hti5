# HHS-ONC-2025-0005-0037 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0037/attachment_1.pdf

---

Public Comment on Proposed Rule: Health Data, Technology, and Interoperability:
ASTP/ONC Deregulatory Actions To Unleash Prosperity
Docket ID: HHS-ONC-2025-0005 | RIN: 0955-AA09 | FR Doc. 2025-23896 (Dec. 29, 2025)
Submitted by: Meridian Verity Group LLC (New Jersey, USA). Contact: MeridianVerity@proton.me
(optional).
Submitted on: January 29, 2026
Requested action (summary)
This comment supports ASTP/ONC’s goal to reduce certification burden and advance standards-based
interoperability. As proposed, ASTP/ONC would remove and reserve the Predictive DSI source-attribute and
intervention risk-management provisions in § 170.315(b)(11)(iv)-(vi). For Predictive Decision Support
Interventions (DSIs), this comment urges ASTP/ONC to preserve a minimal, low-burden baseline by
requiring certified Health IT Modules to support an exportable, machine-readable Evidence Artifact for each
Predictive DSI. This would replace prescriptive model card–style documentation while retaining essential
transparency and risk-governance hooks for procurement, clinical trust, and audit readiness—without
requiring raw training data, protected health information, or disclosure of trade secrets or confidential
commercial information.

1.  Why a minimal Predictive DSI baseline still matters
    Predictive DSIs influence care and payment decisions, yet stakeholders often cannot independently
    determine which model, version, and configuration were used, what risk practices were applied, or whether
    evidence changed after the fact. Today, the DSI certification criterion includes source-attribute access and
    modification capabilities and intervention risk-management expectations for Predictive DSIs (validity,
    robustness, fairness, safety, security, privacy). A full rollback would remove a common baseline and shift
    obligations into fragmented contract questionnaires and proprietary portals—raising due diligence costs and
    reducing comparability.
2.  Deregulatory-compatible solution: a computable Evidence Artifact baseline
    ASTP/ONC can preserve a meaningful floor while reducing burden by adopting a single, narrowed
    requirement: for each Predictive DSI supplied with a certified Health IT Module, the developer must support
    creation, maintenance, and export of a computable Evidence Artifact for a limited set of identified users. The
    Evidence Artifact should be:
     Machine-readable (e.g., JSON) and exportable via API or equivalent interface (no screenshot-only
    compliance).
     Bound to a specific DSI identifier, version, and configuration lineage (so drift is detectable).
     Disclosure-safe: summary-level descriptors and attestations are acceptable; raw training data, protected
    health information (PHI), and trade secrets are not required.
    At minimum, the Evidence Artifact should include:
     Intended use, population, setting, and known limitations/contraindications.
     Performance summary relevant to the intended use and monitoring cadence (with update triggers).
     High-level fairness and validity descriptors and conditions that require mitigation or human review.
     Risk-governance attestation summary (validity, reliability, robustness, fairness, safety, security, privacy)
    and accountable owner/contact.
    Optional burden reduction: tier obligations by impact (minimal baseline for all Predictive DSIs; strengthened
    artifact for high-impact triage/coverage/authorization or automated routing contexts).

                                                            1

    FHIR-forward fit: the Evidence Artifact can be transported as a FHIR DocumentReference resource, with
    issuance captured via Provenance and operational gating decisions captured via AuditEvent—enabling
    automated governance and audit without prescriptive UI mandates.

3.  Feasibility and verification (without vendor lock-in)
    A computable Evidence Artifact can be generated from existing governance workflows (model registries,
    CI/CD, risk logs) and verified by downstream parties. Standards-based, vendor-neutral transport (e.g., FHIR
    DocumentReference with Provenance and AuditEvent) enables interoperability and audit readiness without
    prescriptive UI mandates or vendor lock-in.
4.  Requested edits for the Final Rule
    The commenter respectfully requests ASTP/ONC to:
     Replace the proposed removal of Predictive DSI source-attribute and risk-management requirements (§
    170.315(b)(11)(iv)-(vi)) with the minimal Evidence Artifact requirement described above.
     Clarify that summary-level descriptors and attestations are acceptable and need not include raw training
    data, protected health information, or trade secrets or confidential commercial information.
     Clarify that export may be satisfied via standards-based APIs and interoperable envelopes (e.g., FHIR).
    Proposed regulatory text (redline-style insertion):
    45 CFR 170.315(b)(11) is amended by adding a new paragraph (iv) to read as follows:
    (iv) Evidence Artifact (Predictive DSI). For each Predictive Decision Support Intervention supplied by
    the health IT developer as part of its Health IT Module, the Health IT Module must enable a limited set
    of identified users to access, record, change, and export, in a computable format, complete and up-to-date
    plain-language descriptions and a corresponding computable Evidence Artifact that is bound to the
    specific intervention identifier, version, and configuration and that, at a minimum, includes: (1) intended
    use, intended patient population(s), intended user(s), and intended deployed setting; (2) summary
    performance characteristics and known limitations relevant to the intended use; (3) monitoring and
    update cadence, including triggers for update or suspension; and (4) a summary attestation of applied
    risk-governance practices addressing validity, reliability, robustness, fairness, safety, security, and
    privacy, including an accountable owner/contact; provided that the Evidence Artifact may be satisfied
    through summary-level descriptors and attestations and need not include raw training data, protected
    health information, or trade secrets and confidential commercial information.
    Conclusion
    HTI-5’s burden-reduction goal is important. Preserving a minimal, computable Predictive DSI Evidence
    Artifact baseline is a narrow, high-leverage compromise: it reduces burden while maintaining the safety and
    trust hooks needed for procurement, oversight, and patient-centered care.
    References: 90 FR 60970 (Dec. 29, 2025) (FR Doc. 2025-23896); ASTP/ONC DSI certification criterion
    materials (§ 170.315(b)(11)); HL7 FHIR (DocumentReference, Provenance, AuditEvent).

                                                          2
