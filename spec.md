# Ofortuna V1 Spec

## Product Summary

Ofortuna is a secure business-formation and legal-coordination platform for founders and lawyers.

The product helps a founder move from:

- an unstructured business goal
- scattered documents
- unclear next steps

to:

- a structured matter
- a secure records workspace
- a filing-ready packet where applicable
- a better-prepared handoff to legal professionals when judgment is required

The platform is not:

- a generic lawyer directory
- a legal-advice chatbot
- a pure document vault
- a marketplace built around fee-sharing

It is a matter-based workflow and coordination system.

## V1 Decisions

### Product scope

- Product scope is multi-country in language, but only **Jamaica** and **Belize** are fully modeled in v1.
- Jamaica and Belize have distinct requirements, workflows, and filing-readiness logic.

### AI product model

- V1 uses **one primary AI assistant UI**.
- Specialized internal agents power the experience behind the scenes.
- AI grounding / citations are **visible to both founders and lawyers**.
- V1 includes a **lawyer-side AI workspace**, not just founder AI plus handoff packets.

### Lawyer marketplace

- Founders browse a **searchable marketplace** of eligible lawyers.
- The list is broad and searchable, but internally ranked by fit.
- V1 does **not** use a proposal or bidding model.
- Lawyers can show **consult pricing** publicly and provide **custom quotes** for larger matters.

### Verification

- Lawyer verification is **manual admin-first**.
- The product supports **registry/status-assisted checks** as part of admin operations.
- Verification is not fully automated in v1.

### Filing Assistant

- V1 Filing Assistant is **preparation-only**.
- It prepares and validates filing packets.
- It does **not** automate registry submission.

### Collaboration and records

- V1 supports **basic collaborators** on matters.
- Document deletion is **soft-delete**.
- Notifications are **in-app only** in v1.

### AI quality

- AI quality uses **both internal ops and lawyers** in the loop.
- Evaluation is **product-specific**, workflow-aware, and stepwise.

## Core Users

### Founders / operators

They want to:

- explain what they are trying to do in plain language
- get organized quickly
- understand what is missing and what comes next
- keep records in one place
- move matters forward with less repetition and back-and-forth

### Lawyers / legal professionals

They want to:

- receive cleaner, better-prepared matters
- access structured business context and uploaded documents
- use AI to review, summarize, and understand matter context
- price and manage legal work more efficiently

### Platform admins / ops

They want to:

- verify lawyers
- review filing readiness and packet integrity
- monitor audit trails
- support permissions, notifications, and high-impact events

## Product Principles

- The UI should feel calm, premium, serious, and trustworthy.
- The founder experience should feel conversational, but the backend should stay strongly structured.
- Every important interaction should belong to a matter.
- Sensitive records and permissions are first-class concerns.
- The product should reduce repeated explanations, avoidable delay, and wasted professional time.
- AI should guide, summarize, extract, and prepare; lawyers should own legal judgment and bespoke legal work.

## Core Platform Model

### Primary object

The primary system object is the **Matter**.

Each matter contains:

- owner
- participants
- jurisdiction
- business goals and facts
- uploaded documents
- AI summaries and extraction outputs
- workflow state
- filing-readiness state
- notifications
- audit trail
- lawyer matches and legal collaboration

### Conceptual hierarchy

`User -> Workspace -> Matter -> Documents -> Tasks -> Professionals -> Outcome`

## Major Modules

### 1. AI-Guided Intake

The founder describes the business or legal/compliance need in natural language.

The assistant collects and structures:

- business type
- jurisdiction
- founder structure
- ownership context
- geography
- urgency
- current documents
- missing information
- likely next steps

This must feel like guided conversation, not a visible quiz.

### 2. Matter Workspace

The matter workspace is the center of the product.

It contains:

- matter summary
- next steps
- readiness state
- document list
- participant list
- activity and audit history
- lawyer matching / access
- filing-prep state

### 3. Company Records Vault

The vault is a structured matter- and company-records system, not generic storage.

Suggested record groups:

- formation documents
- incorporation certificates
- governing documents
- ownership records
- director / officer records
- compliance filings
- agreements
- meeting documents
- legal correspondence
- matter support files

Vault capabilities:

- upload
- download
- move
- archive
- soft-delete
- restore
- version history
- access logging
- export

### 4. Lawyer Marketplace

The lawyer layer is a verified, searchable professional marketplace.

Profiles should include:

- jurisdictions
- practice areas
- consult pricing
- quote capability
- verification status
- responsiveness / availability signals

Founders should be able to:

- browse
- search
- filter
- compare
- grant access to a matter

### 5. Lawyer Workspace

Lawyers have a dedicated workspace in v1.

It includes:

- matter inbox
- AI-generated matter summary
- source-grounded context and review
- document access
- quote / consult context
- matter messaging and progress visibility

### 6. Filing Assistant

V1 Filing Assistant is a preparation workflow for supported Jamaica and Belize matters.

It does:

- normalize matter data into filing fields
- validate completeness
- identify missing fields/documents
- assemble filing-ready packets
- preserve a reviewable record in the matter

It does not:

- automate registry submission
- silently advance external portal steps
- hold money
- act without visible review state

### 7. Notifications

V1 supports in-app notifications only.

Core events:

- collaborator invite
- document request
- lawyer access granted
- matter status change
- filing readiness change
- verification result

## AI Architecture

### Visible product model

There is one visible assistant surface for the user, but multiple internal AI jobs.

### Internal AI jobs

- intake agent
- clarification agent
- classification agent
- readiness agent
- document agent
- summarization agent
- compliance agent
- lawyer handoff agent
- filing-prep agent

### Grounding policy

Important AI outputs must include source grounding, especially:

- matter summaries
- extracted fields
- readiness decisions
- lawyer handoff briefs
- filing preparation outputs

### Document intelligence scope

V1 document intelligence should support all major categories discussed in planning, grouped into practical jobs:

- summarization
- structured extraction
- missing / inconsistent document detection
- comparison / review support where feasible
- matter-ready packaging

Implementation priority:

1. summarization and extraction
2. missing-info detection
3. comparison / review support

## AI Quality and Evaluation

The product should follow a Harvey-style quality model:

- human preference reviews
- product-specific eval datasets
- workflow-step evaluations
- internal dogfooding
- lawyer-in-the-loop rubric design and review

Quality should be judged not only by hallucination avoidance, but by:

- nuance
- completeness
- usefulness
- grounding
- clarity
- workflow fitness

The system should also capture process data from real matters so future AI workflows can improve from actual work patterns.

## Founder Workflow

1. Founder starts a matter via AI intake.
2. The matter is created with structured context.
3. Founder uploads or organizes documents.
4. The platform identifies missing items and next steps.
5. The matter becomes ready for lawyer review or filing preparation.
6. Founder either continues self-serve or grants access to a lawyer.

## Lawyer Workflow

1. Lawyer joins the platform and submits profile + verification materials.
2. Admin verifies the lawyer with registry/status support.
3. Lawyer appears in the marketplace.
4. Founder discovers the lawyer and grants matter access or engages through the platform flow.
5. Lawyer reviews the AI-prepared matter, documents, and context.
6. Lawyer works from the dedicated workspace.

## Admin Workflow

Admins manage:

- lawyer verification
- high-impact permission changes
- filing-readiness oversight
- audit logs
- manual interventions
- notification integrity

## Matter States

### Founder-facing states

- Draft
- Collecting information
- Missing documents
- Ready for review
- Ready for filing
- In progress
- Waiting on founder
- Waiting on lawyer
- Submitted
- Completed
- Archived

### Internal signals

- complexity score
- urgency score
- confidence score
- document completeness score
- lawyer fit score

## Data Model

Minimum entities:

- users
- workspaces
- matters
- matter_participants
- documents
- document_versions
- permissions
- audit_logs
- messages
- tasks
- lawyer_profiles
- lawyer_verifications
- lawyer_matches
- filing_readiness_records
- filing_packets
- notifications
- ai_summaries
- ai_extractions
- platform_invoices
- matter_invoices
- professional_fee_references

## Permissions and Audit

### Role model

- founder
- lawyer
- admin
- collaborator

### Requirements

- permissions must be matter-aware and document-aware
- collaborator access must be limited and explicit
- every high-impact action must log actor, target, old/new state, timestamp, and result
- deleted documents must remain auditable

## Non-Functional Requirements

### Security / trust

- role-based access control
- matter-level permissions
- document-level permissions
- encryption in transit
- encryption at rest
- version history
- access logs
- consent visibility
- breach-response readiness

### UX requirements

- desktop-first
- mobile-safe
- clear empty/loading/error states
- graceful partial-failure behavior
- accessible forms and navigation

### Performance

- fast dashboard load
- fast matter switching
- efficient document list rendering
- strong support for real-time status changes through Convex

## Tech Direction

### Frontend

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shared UI from `packages/ui`

### Backend

- Convex for application state, realtime, queries, and mutations
- `Effect` for orchestration and complex backend workflows

### Suggested additions

- workflow / jobs layer such as Inngest or Temporal
- LLM tracing / eval tooling such as LangSmith
- secure object storage for documents
- document parsing / OCR pipeline
- retrieval layer for grounded AI responses

## V1 Scope

### In scope

- AI-guided intake
- matter creation
- matter workspace
- company records vault
- searchable lawyer marketplace
- lawyer verification
- lawyer workspace
- filing readiness
- Filing Assistant preparation workflow
- in-app notifications
- basic collaborators
- audit logging

### Out of scope

- automated registry submission
- full escrow or platform-held legal funds
- fee-sharing assumptions in product flows
- public bidding / proposal marketplace
- every Caribbean jurisdiction
- every filing type
- bespoke legal drafting without review
- full mobile app
- advanced firm seat management

## Build Phases

### Phase 1

- spec refinement
- shared types
- Convex schema
- role-aware dashboard/workspace scaffold
- intake + matter + vault + lawyer discovery UI foundation

### Phase 2

- verification flows
- notifications
- collaborator permissions
- document versioning / deletion flows
- AI summary / extraction integrations

### Phase 3

- filing-readiness engine
- Filing Assistant prep flow
- deeper lawyer workspace tools
- more advanced audit / ops tooling

## Success Signals

- matter creation rate
- document upload completion
- lawyer profile completion and verification rate
- lawyer discovery engagement
- readiness completion rate
- filing-packet generation rate
- notification engagement
- repeat founder usage
- reduced time-to-handoff

