# HTI-5 Comment Analysis Website — Design Brainstorm

## Context

A policy analysis website presenting 305 public comments on a federal health IT rulemaking. The audience is health policy professionals, clinicians, researchers, and advocates. The content is dense and substantive — this is not a marketing site. It needs to feel authoritative, navigable, and analytically serious.

---

<response>
<text>
## Idea A: Federal Register Meets Data Journalism

**Design Movement:** Editorial Data Journalism (think ProPublica, The Marshall Project, FiveThirtyEight)

**Core Principles:**

1. Typography-first hierarchy — the text IS the design
2. Data visualization integrated inline with prose, not siloed
3. Restrained color palette with purposeful accent use
4. Dense but navigable — respects the reader's intelligence

**Color Philosophy:** Off-white (#F7F5F0) background with near-black (#1A1A1A) text. A single accent color — deep federal blue (#1B3A6B) — used sparingly for links, active states, and key callouts. Muted amber (#C4862A) for warnings or "oppose" indicators. This palette signals seriousness without feeling like a government website.

**Layout Paradigm:** Asymmetric editorial grid. Left sidebar (fixed, 220px) for navigation. Main content area uses a two-column grid that collapses to single on mobile. Charts bleed to the right margin. Pull quotes break the grid intentionally.

**Signature Elements:**

- Ruled horizontal lines separating sections (like a newspaper)
- Monospaced font for comment IDs and data labels
- Color-coded position badges (oppose = amber, support = teal, neutral = gray)

**Interaction Philosophy:** Minimal animation. Hover states are subtle color shifts. Search results highlight matching text. Filter chips animate in/out cleanly.

**Animation:** Fade-in on scroll for major sections. Chart bars animate on first view. No parallax, no excessive motion.

**Typography System:**

- Display: Playfair Display (serif) for section headers — authoritative, editorial
- Body: Source Serif Pro — readable at length, feels like a policy document
- Data/UI: JetBrains Mono — for IDs, numbers, code-like elements
  </text>
  <probability>0.08</probability>
  </response>

<response>
<text>
## Idea B: Policy Intelligence Dashboard

**Design Movement:** Analytical Dashboard / Information Architecture (think Bloomberg Terminal meets Notion)

**Core Principles:**

1. Information density without clutter — every pixel earns its place
2. Modular card-based layout with clear visual hierarchy
3. Dark mode as default — signals technical seriousness
4. Tabular data as a first-class citizen

**Color Philosophy:** Deep slate background (#0F172A) with layered card surfaces (#1E293B, #334155). Electric blue (#3B82F6) as the primary accent. Red (#EF4444) for opposition, green (#22C55E) for support, amber (#F59E0B) for neutral. This creates a Bloomberg-esque analytical feel.

**Layout Paradigm:** Fixed left sidebar navigation + scrollable main content with sticky section headers. Top bar shows key stats at a glance. Content uses a 12-column grid with cards of varying widths.

**Signature Elements:**

- Stat cards with large numbers and trend indicators
- Horizontal bar charts with inline labels
- Tag/badge system for themes and positions

**Interaction Philosophy:** Everything is filterable. Clicking a theme filters the comment list. Search is instant. Keyboard navigation supported.

**Animation:** Smooth transitions on filter changes. Numbers count up on page load. Subtle glow on hover for interactive elements.

**Typography System:**

- Display: Space Grotesk (geometric sans) — modern, technical
- Body: Inter — clean, readable at small sizes
- Data: Fira Code — monospaced for IDs and numbers
  </text>
  <probability>0.07</probability>
  </response>

<response>
<text>
## Idea C: Archival Policy Record

**Design Movement:** Swiss International Style meets Government Archives

**Core Principles:**

1. Grid discipline — strict 8px baseline grid throughout
2. Black and white with one structural color
3. Typography as visual structure — size and weight create hierarchy without decoration
4. Content-first — no decorative elements that don't carry information

**Color Philosophy:** Pure white background. Black text. A single structural color — deep teal (#0D5C63) — used for borders, active states, and data fills. No gradients, no shadows. The austerity signals archival permanence.

**Layout Paradigm:** Full-width horizontal sections separated by thick ruled lines. Navigation is a top horizontal bar. Content uses strict typographic columns. Tables are prominent and styled like reference documents.

**Signature Elements:**

- Thick black border accents on section headers
- Numbered sections like a legal document
- Tables with alternating row shading

**Interaction Philosophy:** Functional over decorative. Search is prominent. Filters are checkboxes, not chips. Everything works without JavaScript if needed.

**Animation:** None except for smooth scroll. Transitions are instant. This is a reference document, not an app.

**Typography System:**

- All text: IBM Plex Sans — designed for information-dense environments
- Monospace: IBM Plex Mono — for IDs and data
- Hierarchy through size and weight only, no decorative fonts
  </text>
  <probability>0.06</probability>
  </response>

---

## Selected Approach: **Idea A — Federal Register Meets Data Journalism**

This approach best fits the audience (policy professionals who read dense documents) and the content (substantive analysis that deserves editorial treatment). The typography-first approach ensures the analysis itself is the hero, while the data journalism aesthetic signals credibility and rigor without feeling like a dry government site.
