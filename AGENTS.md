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
This repository is a VERY EARLY WIP. Proposing sweeping changes that improve long-term maintainability is encouraged.



## Core Users

- Founders: organize formation, ownership context, records, and readiness
- Lawyers: receive better-prepared matters with cleaner context and consolidated documentation
- Later will expand to more legal matters for example estate planning etc.

## Core Priorities

- Performance first.
- Security first. Build the app to be SOC 2 Compliant from the start.
- Privacy first. Build the app to be GDPR Compliant from the start.
- Reliability first.
- Scalability first.
- Maintainability first.

If a tradeoff is required, choose correctness and robustness over short-term convenience.

## Maintainability

Long term maintainability is a core priority. If you add new functionality, first check if there are shared logic that can be extracted to a separate module. Duplicate logic across mulitple files is a code smell and should be avoided. Don't be afraid to change existing code. Don't take shortcuts by just adding local logic to solve a problem.

## Deterministic Coding Rules

- Never use `any`.
- Never use `as any`.
- Types must be explicit and intentional.
- If data is uncertain, use `unknown` and validate it at the boundary.
- Prefer explicit unions, generics, schema-derived types, and narrow local assertions over weak typing.
- If a type assertion is unavoidable, use the narrowest possible assertion and keep it local.
- Do not add useless fallbacks.
- Do not hide invalid or missing state behind placeholder defaults.
- Avoid patterns like `|| []`, `|| {}`, `|| ""`, `?? []`, `?? {}`, and `?? ""` unless the fallback is an intentional product behavior.
- Prefer explicit handling of loading, empty, null, and error states.
- Surface invalid states clearly instead of silently masking them.

## Backend Strictness

- Apply the same strictness to Convex schemas, queries, mutations, and actions.
- Always model Convex data explicitly with validators and precise document shapes.
- Never weaken backend types with `any`, broad assertions, or placeholder defaults.
- For auth and identity, derive user identity on the server and type it explicitly.
- When integrating WorkOS, validate external auth payloads at the boundary before they enter application code.
- Do not silently coerce missing auth, organization, or matter state into fake defaults.
- Missing identity, missing organization membership, and invalid matter state should be handled explicitly and fail clearly.



## Product Direction

- Tone: calm, premium, serious, professional
- UX goal: reduce confusion and back-and-forth, increase structure and continuity
- Brand idea: access, entry, and movement (from uncertainty to structure)
- The most un-technical person should be able to use this product easily.

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
- Sentry: planned error tracking
- Browser automation: planned third-party integration (service TBD)
- Payments: deferred (Stripe likely later)

## Data and API Direction

- Current backend approach: Convex only

## UI Direction

- Design language: premium, minimal, calm professional workspace
- Component system: shadcn/ui
- Styling: Tailwind CSS v4
