# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**HTI-5 Comment Analysis Website** — A full-stack application for analyzing 305 public comments on federal health IT rulemaking policy. The site presents substantive policy analysis in an editorial, data-journalism style targeted at health policy professionals.

### Tech Stack

- **Frontend**: React 19 + Vite + Tailwind CSS + Radix UI
- **Backend**: Express.js (Node.js, ESM)
- **Routing**: Wouter (lightweight SPA router)
- **Data**: Static JSON files (comments.json, themes.json, stats.json)
- **Package Manager**: pnpm
- **TypeScript**: Strict mode, monorepo configuration

## Commands

### Development

```bash
pnpm dev            # Start Vite dev server (port 3000, auto-reload)
pnpm check          # Type-check all TypeScript files
pnpm format         # Format code with Prettier
```

### Production

```bash
pnpm build          # Build frontend (Vite) + bundle server (esbuild)
pnpm start          # Run production server (requires `pnpm build` first)
pnpm preview        # Preview production build locally with Vite
```

### Notes

- `pnpm dev` serves both frontend (Vite) and watches for TypeScript errors
- Build output: `dist/public/` (frontend) and `dist/index.js` (server)
- The build process bundles the server as ESM and handles external dependencies via esbuild
- No test runner configured; project has no .test.ts or .spec.ts files

## Environment Variables

Create a `.env` file (or `.env.local` for development) with:

```
# GitHub API token (required for comment submission feature)
# Create at: https://github.com/settings/tokens
# Requires: public_repo scope (to create issues in jacobmr/hti5)
GITHUB_TOKEN=github_pat_...

# Server port (optional, defaults to 3000)
PORT=3000

# Node environment
NODE_ENV=production
```

The `.env.example` file documents these variables. On Vercel, set `GITHUB_TOKEN` in project settings.

## Architecture

### Monorepo Structure

```
client/src/          # React frontend
├── pages/          # Route pages (Home, Comments, Themes, Coordination, Recommendations)
├── components/     # React components (Layout, ErrorBoundary, CommentDialog, ui/* Radix)
├── hooks/          # Custom hooks (useMobile, usePersistFn, useComposition)
├── contexts/       # React contexts (ThemeContext)
├── data/           # Static JSON data files (comments.json, themes.json, stats.json, coordination_groups.json)
├── lib/            # Utilities (utils.ts)
└── App.tsx         # Main app with router and providers

server/
└── index.ts        # Express server entry point (serves static frontend + SPA fallback)

api/
└── index.js        # Vercel serverless function (Express app with /api/comments endpoint)

shared/
└── const.ts        # Shared constants (COOKIE_NAME, timing constants)

raw-data/
└── comments/       # Raw comment data from regulations.gov (metadata, full text, attachments)

source/
└── analyze_coordination.py  # Python script for detecting organized comment campaigns
```

### Key Design Decisions

**Data Architecture**: Data is loaded as static JSON files bundled with the frontend. No API layer exists — the application is a client-side data analysis tool. The server is minimal and only serves static files with SPA fallback routing.

**Routing**: Uses Wouter (lightweight router) instead of React Router. All routes are defined in `App.tsx` with a centralized `Router` component:

- `/` → Home (dashboard with statistics and theme overview)
- `/comments` → Comments page (searchable, filterable by position/theme/organization/coordination)
- `/themes` → Themes analysis page (detailed breakdown of 11 policy themes)
- `/coordination` → Coordination page (identifies organized comment campaigns)
- `/recommendations` → Recommendations page (policy recommendations based on feedback)
- `*` → 404 page

**Styling**: Tailwind CSS v4 with custom CSS in `src/index.css`. Uses Radix UI primitives for accessible component foundations (20+ components: dialog, dropdown-menu, select, etc.). Layout and theme management via CSS custom properties.

**Theme System**: Light/dark mode managed via `ThemeContext`. Persists to localStorage via `usePersistFn` hook. Controlled by `next-themes` integration.

### Path Aliases

- `@/*` → `client/src/*` (frontend imports)
- `@shared/*` → `shared/*` (shared constants)

## Important Implementation Details

### Data Files

All data is stored as static JSON in `/client/src/data/`:

**comments.json** (~430KB):

- Array of 305 comment objects
- Fields: id, name, email, position (position on deregulation), themes (array), organization_type, sentiment, full_text
- Positions: strongly_oppose_deregulation, oppose_deregulation, neutral, support_deregulation, strongly_support_deregulation
- Organization types: individual, clinician, health_it_company, professional_association, patient_advocate, government, etc.
- Used by CommentsPage for searching and filtering

**themes.json**:

- 11 major policy themes with detailed analysis
- Fields per theme: id, name, description, mention_count, safety_importance (ranking), examples (array of comment IDs)
- Themes: patient_safety, burden_reduction, ai_regulation, data_privacy, audit_logs, clinical_completeness, information_blocking, interoperability, c_cda_concerns, uscdi_standards, ehi_export
- Used by Home and ThemesPage

**stats.json**:

- Aggregate statistics: total_comments, sentiment_average, position_distribution (counts by position)
- Stakeholder breakdown by organization type
- Theme mention counts

**coordination_groups.json**:

- Organized comment campaigns detected via pattern analysis
- Fields: id, name, description, member_count, comment_ids (array)
- Used by CoordinationPage to show coordinated advocacy

### Frontend-Mostly Architecture

All data fetching happens client-side via static JSON imports. However, there is one API endpoint:

**Comment Submission Feature** (`POST /api/comments`):

- Accepts `{ name, email, comment }` from the CommentDialog form
- Creates a GitHub issue in the `jacobmr/hti5` repository with label `user-comment`
- Returns the issue URL and number to display in a success toast
- Requires `GITHUB_TOKEN` environment variable with `public_repo` scope
- Validates: name/email/comment present, comment 10-5000 characters
- Error handling: returns 400 for validation, 500 for GitHub API failures

Data transformations and filtering are all in React component logic. The server is primarily for serving static frontend and handling SPA routing.

### CSS Customization

Tailwind CSS is used with custom CSS in `src/index.css` for:

- Typography system (Playfair Display for headers, Source Serif Pro for body, JetBrains Mono for data)
- Color system (federal blue #1B3A6B, amber #C4862A, teal accents)
- Badge styles for comment positions (badge-oppose, badge-support, badge-neutral, badge-unclear)

### Build Pipeline

The `pnpm build` command runs both frontend and server builds:

1. **Frontend Build** (Vite):
   - Transpiles React 19 + TypeScript
   - Processes Tailwind CSS v4 with @tailwindcss/vite plugin
   - Bundles with code splitting and optimization
   - Injects commit hash via `__COMMIT_HASH__` global variable
   - Outputs to `dist/public/`

2. **Server/API Build** (esbuild):
   - Bundles `server/index.ts` as ESM module
   - Marks npm dependencies as external (express, axios, etc.)
   - Outputs to `dist/index.js` for local/self-hosted deployment
   - On Vercel: also bundled as serverless function in `api/index.js`

3. **Production Runtime**:
   - **Local**: Node.js runs `dist/index.js` which serves static files from `dist/public/` and handles SPA routing
   - **Vercel**: Serverless function at `api/index.js` handles API endpoints and serves frontend from `dist/public/`
   - All routing (except root `/` and `/api/*`) is handled by `app.get("*")` fallback to serve `index.html` for client-side routing

## Development Workflow

### Making Changes

1. Edit TypeScript/React files in `client/src/`, `server/`, or `shared/`
2. Vite hot-reloads the frontend automatically
3. Run `pnpm check` to catch TypeScript errors
4. Format code with `pnpm format` before committing

### Debugging

- Browser console: Use browser DevTools (F12) to inspect logs and network requests
- Source maps: Vite dev server includes full source maps for debugging
- Comment submission: Check browser Network tab and server logs (api/index.js has comprehensive logging for `/api/comments`)
- GitHub API: Ensure `GITHUB_TOKEN` is set and has `public_repo` scope; check GitHub API error response in server logs

### Adding Components

- Radix UI components are pre-configured in `client/src/components/ui/`
- Create new component files in `client/src/components/`
- Follow existing naming conventions (PascalCase for components)

### Modifying Data

- Update JSON files in `client/src/data/` and hot-reload will refresh the UI
- Ensure schema matches expected Comment/Theme structure for TypeScript compliance

## Code Style & Standards

### TypeScript Configuration

- `strict: true` — All TypeScript files must pass strict mode checks
- `noEmit: true` — Type checking only, not compilation (Vite handles transpilation)
- `jsx: "preserve"` — Vite's React plugin handles JSX transformation
- `allowImportingTsExtensions: true` — TypeScript files can import from `.ts` extensions

### Prettier Configuration

- 2-space indentation, 80-character line width
- Trailing commas (es5), double quotes for strings
- Single arrow function parameters (avoid parens)
- LF line endings

### Import Conventions

- Use path aliases (`@/`, `@shared/`, `@assets/`)
- Group imports: React → third-party → local
- Avoid circular dependencies between client/server/shared

## Environment & Deployment

### Environment Variables

- `PORT` — Server port (default: 3000)
- `NODE_ENV` — Set to "production" for production builds
- `GITHUB_TOKEN` — (Production only) GitHub Personal Access Token for comment submission feature
  - **Security**: This is a sensitive credential that grants write access to the repository's issue tracker
  - **Setup**: Generate a token at https://github.com/settings/tokens with `public_repo` scope
  - **Storage**: Store ONLY in hosting environment variables (Vercel, etc.), NEVER in code or .env files
  - **Protection**: The token is never exposed in client-side code, logs, or error messages
  - **Verification**: If comment submission fails with "GitHub token not configured", verify the env var is set in your hosting platform

### Production Deployment

#### Local/Self-Hosted

1. Run `pnpm build` to generate optimized frontend + bundled server
2. Set `NODE_ENV=production` and `GITHUB_TOKEN` (if using comment feature)
3. Run `pnpm start`
4. Server will serve frontend from `dist/public/` and handle SPA routing

#### Vercel Deployment

The project is configured for Vercel with serverless function support:

1. `api/index.js` is deployed as a Vercel serverless function
   - Handles `/api/comments` endpoint for comment submission
   - Serves static frontend from `dist/public/`
   - Handles SPA routing fallback to `index.html`

2. Frontend is built and deployed to Vercel Edge Network

3. Environment variables on Vercel:
   - `GITHUB_TOKEN` — Required for comment submission feature
   - `NODE_ENV` — Set to "production"

4. Build command: `pnpm build` (generates `dist/public/` and `api/index.js`)

5. Deployment includes:
   - Vercel Analytics integration (privacy-respecting, no cookies)
   - Commit hash detection for version display (uses `VERCEL_GIT_COMMIT_SHA` env var)

### Development Server

- Vite runs on port 3000 with hot module replacement (HMR)
- If port 3000 is busy, automatically finds next available port
- Filesystem restrictions in vite.config.ts: denies access to dotfiles, specific hosts whitelisted
- Commit hash injected via vite build variable `__COMMIT_HASH__`

## Analytics & Monitoring

**Vercel Analytics** is integrated for privacy-respecting traffic tracking:

- Tracks page views, device types, geographic regions
- No cookies, no personal data collection
- Enabled via Analytics component in App.tsx
- Dashboard available in Vercel project settings
- Details: https://vercel.com/analytics

## Known Quirks

1. **Wouter Patch**: `patches/wouter@3.7.1.patch` is applied via pnpm. This modifies the Wouter router library behavior. Check the patch file if routing behaves unexpectedly.

2. **API/Serverless Duplication**: Both `server/index.ts` and `api/index.js` contain the same Express app logic. Keep them in sync when modifying the `/api/comments` endpoint or SPA routing logic.

## Analysis & Raw Data

The project includes tools for analyzing comment patterns and organization:

**raw-data/** — Raw comment data from regulations.gov:

- Complete metadata and full text for all 305 comments
- Organized in subdirectories by submission date or organization
- Used as source for comments.json

**source/analyze_coordination.py** — Python script for detecting organized campaigns:

- Pattern matching to identify coordinated comments
- Detects shared language, form letters, attorney network campaigns
- Outputs results to coordination_groups.json
- Run via: `python source/analyze_coordination.py` (requires pandas/numpy if used locally)

## Optimization Notes

- The comments JSON file is ~430KB. Consider lazy loading or pagination if adding more comments.
- Vite's code splitting is enabled; ensure large component trees are in separate routes for better caching.
- Tailwind CSS v4 with the vite plugin provides very efficient style bundling.
- Consider caching coordination_groups.json if the analysis script runs frequently.
