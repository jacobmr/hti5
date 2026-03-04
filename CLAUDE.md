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

## Architecture

### Monorepo Structure

```
client/src/          # React frontend
├── pages/          # Route pages (Home, CommentsPage, ThemesPage, RecommendationsPage)
├── components/     # React components (Layout, ErrorBoundary, ui/* Radix components)
├── hooks/          # Custom hooks (useMobile, usePersistFn, useComposition)
├── contexts/       # React contexts (ThemeContext)
├── data/           # Static JSON data files (comments.json, themes.json, stats.json)
├── lib/            # Utilities (utils.ts)
└── App.tsx         # Main app with router and providers

server/
└── index.ts        # Express server entry point (serves static frontend + SPA fallback)

shared/
└── const.ts        # Shared constants (COOKIE_NAME, timing constants)
```

### Key Design Decisions

**Data Architecture**: Data is loaded as static JSON files bundled with the frontend. No API layer exists — the application is a client-side data analysis tool. The server is minimal and only serves static files with SPA fallback routing.

**Routing**: Uses Wouter (lightweight router) instead of React Router. All routes are defined in `App.tsx` with a centralized `Router` component:

- `/` → Home
- `/comments` → Comments page (searchable, filterable)
- `/themes` → Themes analysis page
- `/recommendations` → Recommendations page
- `*` → 404 page

**Styling**: Tailwind CSS v4 with custom CSS in `src/index.css`. Uses Radix UI primitives for accessible component foundations (20+ components: dialog, dropdown-menu, select, etc.). Layout and theme management via CSS custom properties.

**Theme System**: Light/dark mode managed via `ThemeContext`. Persists to localStorage via `usePersistFn` hook. Controlled by `next-themes` integration.

### Path Aliases

- `@/*` → `client/src/*` (frontend imports)
- `@shared/*` → `shared/*` (shared constants)

## Important Implementation Details

### Comments Data Structure

Comments are loaded from `/client/src/data/comments.json`. Each comment has:

- Position metadata (strongly_oppose_deregulation, oppose_deregulation, etc.)
- Theme classification (interoperability, burden_reduction, patient_safety, etc.)
- Organization type (professional_association, health_it_company, etc.)
- Full comment text for display and search

### Frontend-Only Architecture

There is **no REST API**. All data fetching happens client-side via static JSON imports. This means:

- No backend server routes for data (except static file serving)
- No need for API error handling in production
- Data transformations and filtering are all in React component logic
- The server is purely for serving the static frontend and handling SPA routing

### CSS Customization

Tailwind CSS is used with custom CSS in `src/index.css` for:

- Typography system (Playfair Display for headers, Source Serif Pro for body, JetBrains Mono for data)
- Color system (federal blue #1B3A6B, amber #C4862A, teal accents)
- Badge styles for comment positions (badge-oppose, badge-support, badge-neutral, badge-unclear)

### Build Pipeline

1. **Frontend Build** (Vite):
   - Transpiles React + TypeScript
   - Processes Tailwind CSS
   - Bundles with code splitting
   - Outputs to `dist/public/`

2. **Server Build** (esbuild):
   - Bundles `server/index.ts` as ESM module
   - Marks npm dependencies as external
   - Outputs to `dist/index.js`

3. **Production Runtime**:
   - Node.js runs `dist/index.js` which serves static files from `dist/public/`
   - All routing (except root `/`) is handled by `app.get("*")` fallback to serve `index.html` for SPA routing

## Development Workflow

### Making Changes

1. Edit TypeScript/React files in `client/src/`, `server/`, or `shared/`
2. Vite hot-reloads the frontend automatically
3. Run `pnpm check` to catch TypeScript errors
4. Format code with `pnpm format` before committing

### Debugging

- Browser console: Use browser DevTools (F12) to inspect logs and network requests
- Source maps: Vite dev server includes full source maps for debugging

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

### Production Deployment

1. Run `pnpm build` to generate optimized frontend + bundled server
2. Set `NODE_ENV=production`
3. Run `pnpm start`
4. Server will serve frontend from `dist/public/` and handle SPA routing

### Development Server

- Vite runs on port 3000 with hot module replacement (HMR)
- If port 3000 is busy, automatically finds next available port
- Strict filesystem restrictions (denies access to dotfiles)

## Known Quirks

1. **Wouter Patch**: `patches/wouter@3.7.1.patch` is applied via pnpm. This modifies the Wouter router library behavior. Check the patch file if routing behaves unexpectedly.

## Optimization Notes

- The comments JSON file is ~430KB. Consider lazy loading or pagination if adding more comments.
- Vite's code splitting is enabled; ensure large component trees are in separate routes for better caching.
- Tailwind CSS v4 with the vite plugin provides very efficient style bundling.
