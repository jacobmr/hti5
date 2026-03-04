# Contributing

## Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS v4, Radix UI, Recharts, Wouter
- **Backend:** Express.js (Node.js, ESM)
- **Deployment:** Vercel (serverless functions + edge CDN)
- **Language:** TypeScript (strict mode)
- **Package Manager:** pnpm

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 10.4.1+

### Installation

```bash
git clone https://github.com/jacobmr/hti5.git
cd hti5
pnpm install
pnpm dev
```

The site opens at `http://localhost:3000` with hot-reload.

### Commands

```bash
pnpm dev       # Start Vite dev server (port 3000)
pnpm build     # Build frontend (Vite) + bundle server (esbuild)
pnpm start     # Run production server (requires build first)
pnpm check     # TypeScript type checking
pnpm format    # Format with Prettier
```

## Project Structure

```
hti5/
├── data/                  # Structured analysis datasets (JSON)
├── raw-data/              # Original comment files from regulations.gov
├── source/                # Analysis scripts and report
├── client/src/
│   ├── pages/             # Route pages (Home, Comments, Themes, etc.)
│   ├── components/        # React components (Layout, CommentDialog, ui/*)
│   ├── contexts/          # React contexts (ThemeContext)
│   ├── hooks/             # Custom hooks
│   └── App.tsx            # Main app with router
├── server/
│   └── index.ts           # Express server
├── api/
│   └── index.js           # Vercel serverless function
├── shared/
│   └── const.ts           # Shared constants
├── vite.config.ts
├── tsconfig.json
└── package.json
```

### Path Aliases

- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@data/*` → `data/*`

## Environment Variables

```bash
# Required for comment submission feature
GITHUB_TOKEN=github_pat_...   # Needs public_repo scope

# Optional
PORT=3000
NODE_ENV=production
```

Set `GITHUB_TOKEN` in your hosting platform (Vercel project settings), never in committed files.

## Making Changes

1. Edit files in `client/src/`, `server/`, or `shared/`
2. Vite hot-reloads automatically
3. Run `pnpm check` before committing
4. Format with `pnpm format`

### Modifying Data

Analysis data lives in `data/*.json`. Changes are reflected immediately via hot-reload. Ensure the JSON schema matches TypeScript expectations.

## Submitting Changes

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-change`)
3. Make changes and verify with `pnpm check`
4. Commit and push
5. Open a pull request

## Reporting Issues

Found a data error or analysis problem? Open an issue at https://github.com/jacobmr/hti5/issues
