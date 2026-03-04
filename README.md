# HTI-5 Public Comment Analysis

A comprehensive web application analyzing 305 public comments on the **HHS-ONC-2025-0005** proposed rule (Health Information Technology Certification Requirements and Standards).

**Live:** https://hti5.vercel.app
**Source:** https://github.com/jacobmr/hti5

---

## Overview

The HTI-5 proposed rule seeks to remove or reduce health IT certification requirements under the guise of burden reduction. This website provides a systematic, data-driven analysis of all 305 public comments submitted during the 60-day public comment period (January 28 – February 27, 2026).

**Key Finding:** The response was decisively negative. Average sentiment scored −0.81 on a −3 to +3 scale. Of 274 comments with a clear position:
- **129 (47%)** opposed the proposed actions
- **71 (26%)** supported them
- **74** took neutral or mixed positions

---

## Features

### 📊 Dashboard
- Position distribution chart (strongly oppose → strongly support)
- Key statistics (total comments, sentiment, stakeholder breakdown)
- Top 11 comment themes with mention counts
- Stakeholder analysis by organization type
- Key findings and executive summary

### 💬 Searchable Comments Database
- Full-text search across all 305 comments
- Filter by position, theme, organization type, and coordination status
- View original comment text, commenter affiliation, and position metadata
- Conflict-of-interest indicators for stakeholder transparency
- Coordination badges showing organized advocacy campaigns

### 🎯 Thematic Analysis
- 11 major policy themes identified through systematic analysis:
  - Patient Safety (245 mentions)
  - Burden Reduction (224 mentions)
  - AI Regulation & Governance (112 mentions)
  - Data Privacy & Security (108 mentions)
  - Audit Log Standards (81 mentions)
  - And 6 more...
- Safety-first ranking emphasizing patient protection concerns
- Theme distribution across stakeholder types

### 📋 Coordination Analysis
- Identifies organized comment campaigns (attorney networks, form letter campaigns, professional associations)
- Detects shared language patterns and coordination fingerprints
- Transparent about which comments are part of organized advocacy
- Links to GitHub issues for each coordinated campaign

### 💡 Policy Recommendations
- Evidence-based recommendations to regulators
- Derived from stakeholder feedback and technical analysis
- Consensus points across different stakeholder groups
- Areas of legitimate disagreement

---

## Data & Sources

### Public Comments
- **Source:** https://www.regulations.gov/document/HHS-ONC-2025-0005-0001/comment
- **Count:** 305 submissions
- **Period:** January 28 – February 27, 2026
- **Status:** Public record, analyzed with permission

### Analysis Framework
The analysis applies a **healthcare policy analyst framework** emphasizing:
- Patient safety as the primary lens
- Expert credibility weighting (clinicians, standards bodies, patient advocates)
- Conflict-of-interest flagging (vendors with financial interest in deregulation)
- Standards genealogy tracing (why specific technical requirements exist)

### Data Files
All analysis data is included in the repository:
- `client/src/data/comments.json` — Full comments with position/theme classifications
- `client/src/data/themes.json` — 11 themes with detailed analysis and examples
- `client/src/data/stats.json` — Aggregate statistics
- `client/src/data/coordination_groups.json` — Organized advocacy campaigns
- `raw-data/comments/` — Raw comment metadata and full text

---

## Tech Stack

### Frontend
- **React 19** — UI framework
- **Vite** — Build tool & dev server
- **Tailwind CSS v4** — Utility-first styling
- **Radix UI** — Accessible component library
- **Recharts** — Data visualization
- **Wouter** — Lightweight client-side router

### Backend
- **Express.js** — Node.js web server
- **Axios** — HTTP client

### Deployment
- **Vercel** — Hosting & CDN
- **Vercel Analytics** — Privacy-focused traffic tracking

### Development
- **TypeScript** — Strict mode type checking
- **ESM** — ECMAScript modules (Node.js native)
- **pnpm** — Package manager (monorepo support)
- **Prettier** — Code formatting

---

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm 10.4.1+ (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/jacobmr/hti5.git
cd hti5

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will open at `http://localhost:3000` with hot-reload enabled.

### Build for Production

```bash
# Build frontend + bundle server
pnpm build

# Run production server
pnpm start
```

### Type Checking

```bash
# Check TypeScript errors
pnpm check

# Format code
pnpm format
```

---

## Project Structure

```
hti5/
├── client/src/
│   ├── pages/              # Route pages (Home, Comments, Themes, etc.)
│   ├── components/         # React components (Layout, CommentDialog, etc.)
│   ├── data/              # Static JSON data files
│   ├── contexts/          # React contexts (ThemeContext)
│   ├── hooks/             # Custom hooks
│   └── App.tsx            # Main app with router
│
├── server/
│   └── index.ts           # Express server
│
├── source/
│   └── analyze_coordination.py  # Python script for coordination analysis
│
├── raw-data/
│   └── comments/          # Comment data, full text, attachments
│
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

---

## How Comments Work

This website includes a comment submission feature (the irony is intentional—a comments section on a comments analysis site).

### Submitting a Comment
1. Click **"Add a comment"** in the sidebar footer
2. Enter your name, email, and comment
3. Click **Submit Comment**
4. Your comment is posted as a GitHub issue in the public repository
5. You receive a link to view your comment on GitHub

### Viewing Comments
All submitted comments are visible as GitHub issues:
- https://github.com/jacobmr/hti5/issues

Comments are public and labeled with `user-comment`. This approach:
- Keeps feedback transparent and public
- Enables discussion via GitHub comments
- Avoids building yet another comment system
- Leverages the platform's existing infrastructure

---

## Contributing

### Report an Issue
Found a data error or analysis problem? Open an issue:
- https://github.com/jacobmr/hti5/issues

### Improve the Analysis
The codebase is fully open source (MIT License). Contributions welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improve-themes`)
3. Make your changes
4. Run `pnpm check` to verify TypeScript
5. Commit and push (`git push origin feature/improve-themes`)
6. Open a pull request

### Share Feedback
Use the **Add a comment** feature to share feedback, suggestions, or questions about the analysis.

---

## Data Privacy & Transparency

### What We Track
- **Vercel Analytics** — Page views, device types, geographic regions
- No cookies, no personal tracking
- Privacy-respecting analytics (https://vercel.com/analytics)

### Data Retention
- Comments submitted via the form are posted to GitHub as public issues
- Raw comment data from regulations.gov is retained as part of the analysis
- No additional data is stored or sold

### Your Information
When you submit a comment:
- Your name and email are posted as part of the GitHub issue
- Your email is visible to GitHub (public issue)
- No additional data is collected

---

## About the Analysis

### Methodology
Comments were analyzed using:
1. **Position Classification** — Categorizing each comment's stance on deregulation
2. **Thematic Analysis** — Identifying 11 major policy themes
3. **Stakeholder Segmentation** — Grouping commenters by organization type
4. **Coordination Detection** — Identifying organized advocacy campaigns
5. **Sentiment Analysis** — Calculating average sentiment scores

### Limitations
- Sentiment analysis is heuristic-based (rule-based, not ML)
- Theme detection may miss novel arguments
- Organization type classification relies on self-reported information
- Coordination detection uses pattern matching (not perfect)

### Verification
All analysis code and data are publicly available. You can:
- Review the raw comment data in `raw-data/comments/`
- Examine the analysis scripts in `source/`
- Check the theme definitions in `client/src/data/themes.json`
- View coordination detection results in `client/src/data/coordination_groups.json`

---

## License

MIT License — See LICENSE file for details.

This means:
- You can freely use, modify, and distribute this code
- You must include a copy of the license
- The author provides no warranty

---

## Feedback & Questions

- **GitHub Issues:** https://github.com/jacobmr/hti5/issues
- **Comment Form:** Use the "Add a comment" feature on the site
- **Email:** Contact via issue on GitHub

---

## Version History

- **v1.0.0** (March 4, 2026) — Initial release with coordination analysis and stakeholder depth features

---

## Related Resources

- **Federal Register Notice:** https://www.regulations.gov/document/HHS-ONC-2025-0005-0001
- **Public Comment Period:** https://www.regulations.gov/document/HHS-ONC-2025-0005-0001/comment
- **ONC Health IT Certification Program:** https://www.healthit.gov/certification
- **ASTM E2147-18:** Standards for audit trail preservation

---

## Acknowledgments

This analysis was conducted to support evidence-based healthcare policy discussion. We thank:
- The 305 commenters who submitted thoughtful feedback
- Healthcare organizations, clinicians, and patient advocates who prioritize safety
- Regulators at HHS-ONC who take public feedback seriously
- The open-source community for the tools that made this possible
