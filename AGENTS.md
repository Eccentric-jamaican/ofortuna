<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Ofortuna Project Overview

Ofortuna is a secure business-formation and legal-coordination platform.

It helps founders move from an unstructured idea to a structured matter workspace where they can:
- Capture business context
- Track missing information and next steps
- Upload and organize legal/company documents
- Maintain activity and audit continuity
- Route prepared matters to lawyers when deeper legal work is needed

The product is not a lawyer marketplace and not just a document vault.
It is a matter-based operating system for business setup, company records, and legal coordination.

## Core Users

- Founders: organize formation, ownership context, records, and readiness
- Lawyers: receive better-prepared matters with cleaner context and consolidated documentation

## Product Direction

- Tone: calm, premium, serious, professional
- UX goal: reduce confusion and back-and-forth, increase structure and continuity
- Brand idea: access, entry, and movement (from uncertainty to structure)

# Tech Stack (Current)

## Monorepo

- Package manager: pnpm
- Monorepo orchestration: Turborepo
- Repository root: `C:\Users\ADDIS ELLIS\source\repos\mono\ofortuna`

## Applications

- `apps/web`: Next.js App Router application (primary product)
- `apps/marketing`: Astro marketing site
- Mobile app: deferred for now (not in active build scope)

## Shared Packages

- `packages/ui`: shared shadcn/ui component library + Tailwind v4 theme tokens
- `packages/config`: shared TypeScript and ESLint configuration
- `packages/utils`: shared utility package
- `packages/shared-types`: shared TypeScript types

## Backend / Platform Services

- Convex: primary backend (queries, mutations, actions, realtime)
- Effect: runtime/effect system in `apps/web` (currently scoped to web only)
- WorkOS: planned auth provider
- OpenAI Responses API: planned AI-guided intake and extraction
- AWS S3: planned secure document storage
- Resend: planned transactional email
- PostHog: planned analytics
- Browser automation: planned third-party integration (service TBD)
- Payments: deferred (Stripe likely later)

## Data and API Direction

- Current backend approach: Convex only
- tRPC: intentionally not used (rolled back to avoid overlap with Convex)

## UI Direction

- Design language: premium, minimal, calm professional workspace
- Component system: shadcn/ui
- Styling: Tailwind CSS v4
