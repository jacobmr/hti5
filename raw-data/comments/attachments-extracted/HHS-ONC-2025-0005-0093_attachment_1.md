# HHS-ONC-2025-0005-0093 - attachment_1

**Source:** /home/ubuntu/onc_comments/attachments/HHS-ONC-2025-0005-0093/attachment_1.pdf

---

COMMENT OF Y COMBINATOR Docket No. RIN 0955-AA09 Health Data, Technology, and
Interoperability: ASTP/ONC Deregulatory Actions To Unleash Prosperity

February 27, 2026

Assistant Secretary for Technology Policy / Office of the National Coordinator for Health
Information Technology Department of Health and Human Services Mary E. Switzer Building,
Mail Stop: 7033A 330 C Street SW Washington, DC 20201

Dear Assistant Secretary Tripathi:

Y Combinator submits this comment on the proposed rule "Health Data, Technology, and
Interoperability: ASTP/ONC Deregulatory Actions To Unleash Prosperity" (90 FR 60970). Y
Combinator is the world's leading startup accelerator. Since 2005, we have funded over 5,000
companies—including more than 150 in healthcare and health IT—representing over $600
billion in combined market capitalization. Our portfolio includes companies building clinical AI
tools, patient engagement platforms, EHR integrations, and health data infrastructure.

We write to strongly support the proposed rule's information blocking reforms and to urge the
Department to finalize the strongest versions of its alternative proposals. The experiences of
startups in our portfolio demonstrate that current exceptions to the information blocking rule are
being exploited by incumbent EHR vendors to suppress competition and restrict innovation, to
the detriment of patients and providers.

I. The Information Blocking Problem Is Real and Acute for Health IT Startups

The proposed rule states that ASTP/ONC is "concerned that this condition is being abused by
EHR developers to limit third parties . . . from accessing or using a health care provider's EHR
and relevant EHI" (90 FR 61007). Our experience funding and advising health IT startups
confirms this concern in concrete terms. As one Y Combinator partner observed after working
closely with a portfolio company navigating EHR integration: the dominant vendor is "making
things much harder for healthcare software companies than I realized. Classic monopoly
playbook."

Across our portfolio, we observe a consistent pattern: startups building innovative tools for
providers and patients are unable to access EHR data through official channels despite the 21st
Century Cures Act's mandate for open APIs. The barriers take several forms:

Inaccessible sandbox and production environments. Multiple YC-funded companies have
reported that obtaining even basic test access to major EHR platforms requires months of
negotiation, with production API credentials gated behind lengthy, bespoke vendor review
processes that vary by hospital system. Founders routinely turn to YC's network of thousands of
other founders simply to ask if anyone can help them get access to a sandbox environment.
FHIR compliance that is technically present but practically hollow. As one YC founder described
after a year of building healthcare integrations: FHIR endpoints are "missing the data you
actually need and lack writeback." EHR vendors can claim compliance with FHIR mandates
while making the APIs functionally useless for the clinical workflows that startups and providers
actually need. Going directly through EHR vendors is, in founders' words, "expensive and slow."

Security exceptions used as gatekeeping. Even when the underlying EHR platform is the same,
each hospital system imposes its own non-standardized review process for API access. As one
founder explained, "the engineering work itself is not the hard part"—the pain is "the IT
approval/compliance and vendor review that goes into accessing these systems
programmatically." The Security Exception is being invoked not to address genuine threats, but
as a generalized barrier to entry.

Platform incumbents competing with their own ecosystem. We have seen cases where startups
building on top of EHR platforms were forced to pivot after the EHR vendor announced it would
build competing functionality—a pattern enabled by the vendor's control over the integration
layer.

The market's response to these barriers is telling. A growing number of YC companies have
been forced to build workarounds—reverse-engineering internal APIs, using browser
automation, and deploying AI agents to navigate EHR interfaces—because the official
integration paths are either inaccessible, prohibitively expensive, or functionally inadequate.
That health IT startups must resort to these measures to access data that Congress intended to
flow freely is a clear sign that the current regulatory framework is not achieving its objectives.

II. We Support Removing the Third Party Seeking Modification Use Condition (§
171.204(a)(3))

We strongly support the proposal to remove § 171.204(a)(3) from the Infeasibility Exception. As
the proposed rule recognizes, this condition has been "susceptible to misuse by actors
withholding EHI to unnecessarily inhibit access, exchange, and use of EHI by third parties that
patients and health care providers want" (90 FR 60973).

The startup experience bears this out. The ability to write data back to an EHR—not just read
from it—is essential for clinical AI tools, care coordination platforms, and decision support
applications to function in real workflows. When EHR vendors can categorically refuse
"modification use" requests from third parties under the Infeasibility Exception, it effectively
blocks an entire category of innovation that providers want and patients need.

We agree with the Department's assessment that modern technical approaches to secure two-
way data exchange have matured sufficiently to retire this condition. Where genuine security
concerns exist, the Security Exception (§ 171.203) and Preventing Harm Exception (§ 171.201)
remain available.

III. We Support Removing the Manner Exception Exhausted Condition (§ 171.204(a)(4)) in
Its Entirety
The proposed rule offers two paths for § 171.204(a)(4): revise it or remove it. We urge the
Department to adopt the alternative proposal and remove the condition entirely.

Even as revised, the condition creates a framework that sophisticated incumbent vendors can
manipulate. The proposed replacement of "same" with "analogous" and "substantial number"
with "any" are improvements, but the condition still allows an actor to claim infeasibility after a
performative exercise of offering alternative manners that may not meet the requestor's actual
needs. Removal eliminates this risk entirely while preserving the other conditions of the
Infeasibility Exception for genuinely infeasible requests.

We note that the "infeasible under the circumstances" condition (§ 171.204(a)(1)) would remain
available for cases where fulfilling a request is truly beyond an actor's technical or operational
capacity. This provides adequate protection for actors without creating a structured pathway for
obstruction.

IV. We Support the Manner Exception Contract Fairness Provisions (§ 171.301(a)(2)(iii))

The proposal to prohibit contracts of adhesion, unconscionable terms, and above-market-rate
pricing in the Manner Exception addresses a well-documented power imbalance. Health IT
startups negotiating API access with dominant EHR vendors have effectively no bargaining
leverage. The vendor controls the data, the integration layer, and—in many cases—the
competitive landscape in which the startup operates.

We support the proposed definitions of "market rate," "contract of adhesion," and
"unconscionable terms," and urge the Department to finalize the proposed § 171.301(a)(2)(iii).
We also support the alternative proposal to remove § 171.301(a)(2) and apply the Fees
Exception (§ 171.302) and Licensing Exception (§ 171.303) to all requests fulfilled in the
manner requested, as this would provide even greater clarity and consistency.

V. We Support the Explicit Inclusion of Automated Access in the "Access" and "Use"
Definitions

The proposed revisions to the § 171.102 definitions of "access" and "use" to explicitly include
automation technologies—including autonomous AI systems and robotic process automation—
reflect the reality of modern health IT. AI-powered tools that can access EHR data
programmatically are not a future possibility; they are being built and deployed today by
companies in our portfolio and across the industry.

We support the alternative proposal to also revise the "exchange" definition for consistency. A
health care provider's right to use an AI agent to access, exchange, or use their patients' EHI
should not depend on whether the access occurs through a human clicking buttons or an
automated system making the same API calls.

We also note the proposed rule's reference to the Model Context Protocol (MCP), which
"standardizes how applications provide context to Large Language Models" (90 FR 60972). This
is a forward-looking recognition that interoperability standards must accommodate AI-native
workflows, and we commend the Department for including it.

VI. Conclusion

The information blocking reforms in this proposed rule would meaningfully advance competition
and innovation in health IT. We urge the Department to finalize the strongest versions of its
proposals—particularly the complete removal of §§ 171.204(a)(3) and (a)(4) and the contract
fairness provisions for the Manner Exception.

The 21st Century Cures Act envisioned a health data ecosystem where patients and providers
could access, exchange, and use electronic health information "without special effort." That
vision will not be realized as long as incumbent vendors can exploit regulatory exceptions to
maintain control over the data that patients and providers need. The proposed rule takes
important steps to close these loopholes, and we encourage the Department to move quickly to
finalize it.

Respectfully submitted,

Luther Lowe
Head of Public Policy
Y Combinator
