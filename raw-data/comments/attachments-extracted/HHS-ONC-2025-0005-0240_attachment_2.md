# HHS-ONC-2025-0005-0240 - attachment_2

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0240/attachment_2.pdf

---

To: Assistant Secretary for Technology Policy / Office of the National Coordinator for Health IT (ASTP/ONC)

Re: Health Data, Technology, and Interoperability: ASTP/ONC Deregulatory Actions to Unleash Prosperity (HTI-5)
Proposed Rule

Kno2 appreciates the opportunity to comment on the HTI-5 proposed rule. We support
the goal of reducing unnecessary regulatory burden and enabling more practical,
modern interoperability. We also support efforts to improve access, exchange, and use
of electronic health information (EHI), including clarifying that modern automated
workflows and AI-enabled tools can operate within the regulatory framework.
At the same time, we urge ASTP/ONC to calibrate deregulatory changes to avoid
unintended regressions in real-world exchange, especially for the provider communities
that can least absorb interoperability disruption: long-term and post-acute care
(LTPAC), assisted living, home health, hospice, emergency medical services,
therapy/rehab, dental, and other low-margin or under-resourced settings. These
providers often lack the capital, technical staff, and negotiating leverage to rapidly adapt
to shifts in interoperability requirements, even when those shifts are directionally aligned
with a FHIR-forward future.
In that context, our core recommendation is straightforward: HTI-5 should not remove
practical interoperability pathways faster than the market has fully replaced them at
scale. In particular, ASTP/ONC should reconsider or phase the proposed removal of
Direct-related certification criteria, given Direct’s continued role as a major, widely
deployed way systems communicate today.
We organize our comments by the major areas addressed in HTI-5.
Deregulatory goals should include a “no interoperability regression”
guardrail
We recognize ASTP/ONC’s stated goals in HTI-5: streamline the Certification Program,
update Information Blocking regulations, and establish a new foundation for FHIR-
based APIs and AI-enabled interoperability. ASTP/ONC also proposes substantial
changes to certification criteria (including removal of 34 out of 60 and revision of seven),
along with descoping certain Conditions and Maintenance of Certification requirements
and narrowing Insights reporting.
We support burden reduction where requirements are duplicative, obsolete, or not
meaningfully advancing interoperability. However, deregulatory actions should be
evaluated not only for compliance burden reduction, but also for whether they create
downstream exchange gaps in settings that depend on lower-cost, simpler, and already-
embedded transport mechanisms.
Recommendation:
ASTP/ONC should explicitly adopt a “no interoperability regression” principle in
the final rule, under which proposed removals are phased, conditioned, or deferred
where there is evidence the removed capability remains a primary operational exchange
path for significant provider segments.
Certification criteria: support targeted cleanup, but protect capabilities that
remain foundational in practice
We appreciate ASTP/ONC’s intent to reduce burden and cost by removing criteria that
are well-established, duplicative, or that may impede innovation.
However, HTI-5 should distinguish between:
(1) criteria that are truly obsolete in market practice, and
(2) criteria that may be “legacy” from a policy perspective but still function as the
practical backbone of exchange in many settings.
This distinction matters greatly for Kno2’s target audience. Many organizations we serve
are not choosing between a fully mature FHIR ecosystem and Direct; they are choosing
between what works today at a sustainable cost and what they may be able to
implement in the future if resources permit.
A. Direct-related criteria (170.315(h)(1) and (h)(2)): proposed removal creates
immediate operational risk
ASTP/ONC’s HTI-5 chart indicates proposed removal of:
• Direct Project (§ 170.315(h)(1))
• Direct Project, Edge Protocol, and XDR/XDM (§ 170.315(h)(2))
with removal effective on the final rule effective date.
This is one of the most consequential proposals in HTI-5 from the standpoint of practical
interoperability.
Direct remains a major way systems communicate today—especially for transitions of
care, referrals, care coordination, and document exchange across heterogeneous
environments. It is often the lowest-friction path available to organizations that:
• do not have modern API teams,
• do not control their EHR roadmap,
• rely on intermediary/HIE/HIN service providers,
• cannot absorb expensive interface redevelopment, and
• need a standards-based, production-proven transport now.
Even if ASTP/ONC is correct that policy should orient toward FHIR-based APIs, the
removal of Direct-related certification requirements risks signaling to the market that
support for Direct can be deprioritized before functional substitutes are uniformly
available and affordable across provider types.
That risk will not fall evenly. It will fall hardest on providers with the least margin and
least technical capacity—precisely the groups interoperability policy should avoid
leaving behind.
Recommendations:

1.  Do not finalize immediate removal of Direct-related certification criteria. At
    minimum, defer removal and adopt a transition period tied to measurable market
    readiness.
2.  If ASTP/ONC finalizes removal, establish explicit non-regression expectations.
    For example, require that developers continue to support safe, functional
    document-based exchange pathways for existing customers for a defined period.
3.  Preserve a certifiable baseline for document transport interoperability while FHIR
    maturity continues to develop. If ASTP/ONC seeks to reduce burden, it can
    narrow scope or modernize testing rather than eliminate recognition of the
    capability.
4.  Sequence policy transitions around actual provider adoption, not only future
    architecture goals.
    FHIR-forward policy is appropriate; forced transport transitions before
    affordability and implementation support exist are not.
    B. Transitions of care (§ 170.315(b)(1)) and broader care coordination functionality
    The HTI-5 chart shows “Transitions of care” (§ 170.315(b)(1)) as revised (effective
    January 1, 2027), while some adjacent criteria are proposed for removal.
    We urge ASTP/ONC to ensure revisions to transitions-of-care functionality do not
    unintentionally weaken interoperability outcomes for providers who rely on document-
    based exchange and practical referral workflows. In many real-world settings, care
    coordination is not a single API transaction; it is a mix of document exchange,
    messaging, directory discovery, and workflow orchestration across organizations with
    uneven technical maturity.
    Recommendation:
    ASTP/ONC should evaluate transition-of-care revisions using outcome-based criteria
    (can providers actually send/receive/use relevant information across organizations at
    low cost?) and publish implementation guidance that explicitly addresses LTPAC/post-
    acute and other under-resourced settings.
    C. Broad criterion removals: avoid shifting hidden costs from developers to providers
    HTI-5 proposes wide-ranging removals and revisions across multiple certification
    categories. We understand the rationale, but caution that “deregulation” at the
    certification layer can become cost-shifting if developers respond by unbundling, de-
    prioritizing, or charging separately for capabilities providers still need.
    For low-margin providers, interoperability costs are not abstract. Small increases in
    vendor fees, implementation costs, consulting needs, or workflow retraining can
    materially reduce participation in exchange.
    Recommendation:
    ASTP/ONC should include in the final rule a request for post-finalization market
    monitoring (e.g., through listening sessions or a public RFI) focused on whether
    deregulatory changes increase effective interoperability costs for under-resourced
    providers.
    Conditions and Maintenance of Certification: support burden reduction, but
    preserve transparency into real-world performance
    ASTP/ONC proposes conforming edits to Assurances, APIs, and Attestations
    conditions; descoping aspects of Real World Testing; and removing/descoping
    measures associated with Insights consistent with prior enforcement discretion, leaving
    only the “use of FHIR in apps through certified health IT” measure.
    We support efforts to eliminate low-value reporting burden. However, we caution
    against reducing visibility into real-world interoperability performance at the same time
    the rule removes major certification requirements and accelerates a FHIR-centered
    reset.
    The combination of:
    • reduced criteria,
    • reduced testing/reporting,
    • and strong market transition expectations
    can make it harder for providers and intermediaries to identify whether
    interoperability outcomes are improving or degrading.
    Recommendations:
5.  Retain a minimal but meaningful set of real-world interoperability measures that
    reflect actual exchange outcomes, not just feature availability.
     2. Ensure measures capture provider-to-provider exchange use cases across care
    settings, including LTPAC/post-acute and non-hospital workflows.
6.  Include at least one low-burden measure related to operational exchange
    reliability/availability across common transactions (e.g., document exchange
    success/failure categories, response timeliness, or comparable proxies).
7.  Do not rely solely on FHIR app usage as a proxy for overall interoperability
    progress.
8.  New foundation for FHIR and AI-enabled interoperability: support direction, but
    avoid “FHIR-only in practice” policy effects
    ASTP/ONC states HTI-5 would reset the Certification Program’s scope and establish a
    foundation for future FHIR-based API requirements, with emphasis on automation,
    moving beyond read-only interactions, and expanding data scope; ASTP/ONC also
    frames this as supportive of AI-enabled interoperability solutions.
    We support this direction. FHIR-based APIs are essential to the future of scalable
    interoperability, automation, and many high-value workflows. We also agree that policy
    should anticipate AI-enabled access, exchange, and use where appropriate.
    But a FHIR-forward policy should not become a FHIR-exclusive policy by effect,
    particularly in the near term.
    Many of the providers Kno2 serves will participate in a FHIR-enabled ecosystem
    through network services, intermediaries, and trading partners long before they can
    directly implement and maintain sophisticated API capabilities themselves. Policy must
    preserve a pluralistic interoperability environment during this transition.
    Recommendations:
9.  In the final rule preamble or guidance, ASTP/ONC should explicitly acknowledge
    the need for multiple interoperable transport and exchange approaches during
    the transition to broader FHIR maturity.
10. ASTP/ONC should avoid policy signals that could be interpreted by developers
    as permission to degrade support for existing low-cost exchange methods before
    practical replacements are available to all provider segments.
11. ASTP/ONC should prioritize implementation resources and technical assistance
    for smaller and under-resourced settings, not only standards advancement.
12. Information blocking proposals: generally support anti-abuse clarifications, but
    preserve operational feasibility for legitimate actors
    We generally support ASTP/ONC’s efforts to address misuse of information blocking
    exceptions and clarify that the rules should not be used to justify anti-competitive or
    coercive practices. ASTP/ONC’s fact sheet describes proposals to:
    • clarify “access” and “use” (and potentially “exchange”) to include automated
    means including autonomous AI systems,
    • revise/remove certain Infeasibility Exception conditions,
    • revise the Manner Exception’s “manner requested” condition to clarify it does not
    cover non-market, adhesion, or unconscionable terms,
    • and remove the TEFCA Manner Exception.
    These changes may improve access and reduce abusive gating. However, ASTP/ONC
    should be careful to preserve room for legitimate operational constraints, security
    controls, and scalable implementation sequencing—especially for entities serving
    fragmented provider markets with heterogeneous technologies.
    Recommendations:
13. Finalize anti-abuse clarifications but provide concrete examples distinguishing
    improper barrier-setting from legitimate implementation and security constraints.
14. Ensure the final rule and guidance do not unintentionally penalize intermediaries
    and exchange networks that must operationalize requests safely across varied
    technical environments.
15. If removing the TEFCA Manner Exception, provide clear transition guidance and
    examples for participants operating in TEFCA and non-TEFCA pathways so
    compliance interpretations remain predictable.
16. Equity and inclusion in interoperability policy: center providers without margin for
    “policy churn”
    A central concern with HTI-5 is not only what changes, but who can absorb the change.
    Larger health systems and well-capitalized developers may be able to adapt quickly to
    certification resets, reduced legacy requirements, and a FHIR-first roadmap. Smaller
    providers and providers in historically underfunded interoperability sectors often cannot.
    They depend on stable, low-cost, intermediary-supported exchange mechanisms and
    incremental modernization.
    When policy removes established requirements without a carefully managed transition,
    these providers face the highest risk of:
    • reduced vendor support,
     • increased integration fees,
    • slower onboarding,
    • narrower exchange options,
    • and practical exclusion from interoperability gains that the rule is intended to
    promote.
    ASTP/ONC should include explicit analysis in the final rule of impacts on under-
    resourced provider sectors (including LTPAC/post-acute, home-based care, EMS,
    dental, and therapy providers), and should phase changes where the likely effect
    is concentrated harm to those sectors.
    We respectfully request that ASTP/ONC revise the proposal as follows:
17. Reconsider removal of Direct-related certification criteria (§ 170.315(h)(1) and
    (h)(2)).
    Maintain these criteria, or at minimum defer removal and implement a measured
    transition supported by market-readiness evidence.
18. Add a no-regression interoperability principle to the final rule.
    Deregulatory changes should not reduce practical exchange capabilities for
    providers before viable, affordable alternatives are broadly available.
19. Preserve a minimum set of real-world interoperability performance transparency
    mechanisms.
    If descoping Real World Testing/Insights, retain low-burden outcome-oriented
    measures sufficient to detect degradation in exchange performance.
20. Clarify that FHIR advancement is additive during transition, not a basis for early
    abandonment of existing operational exchange pathways. This is critical for
    provider inclusion and continuity of care coordination.
21. Publish implementation guidance focused on low-margin and under-resourced
    provider settings.
    ASTP/ONC should provide examples and transition expectations that reflect real-
    world technical and financial constraints, not only enterprise-hospital
    assumptions.
    Conclusion
    Kno2 supports the objective of reducing unnecessary burden and modernizing
    interoperability policy. HTI-5 contains important proposals that could improve the
    framework, particularly where it curbs misuse of information blocking exceptions and
    supports a stronger FHIR foundation.
    But HTI-5 should not trade near-term operational interoperability for long-term
    architectural aspirations. Direct and other practical exchange methods remain essential
    today for many providers who do not have the margin to pay for rapid interoperability
    transitions. A final rule that preserves continuity while advancing modernization will
    better serve patients, providers, and the nationwide interoperability ecosystem.
    We appreciate ASTP/ONC’s consideration of these comments.
    Sincerely,
    Matt Becker
    SVP, Interoperability and Policy
    mbecker@kno2.com
    Kno2, LLC
