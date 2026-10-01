# Career Finder

Career Finder is a mobile-first career discovery SaaS.

## Architecture

- `apps/web` — SvelteKit frontend
- `apps/api` — Fastify backend
- `packages/domain` — framework-independent business logic
- `packages/types` — shared TypeScript contracts
- `packages/validation` — shared input validation helpers
- `packages/config` — shared product configuration
- `data/assessment` — versioned assessment content
- `data/careers` — development career data
- `prisma` — PostgreSQL schema and migrations
- `scripts` — repeatable data/migration tooling
- `tests` — framework-independent business tests
- `docs` — product and technical migration documentation

## Current Phase 3 vertical slice

The first deterministic discovery path is now implemented:

```text
Assessment content
      ↓
Question / option response
      ↓
Signals
      ↓
Work-style + interest profile
      ↓
Deterministic career matching
      ↓
Explainable match evidence
```

The web app has a landing page, a data-driven assessment interaction, a result
view and basic career exploration/detail pages.

The API currently exposes:

- `GET /`
- `GET /health`
- `GET /api/v1/assessment/current`
- `POST /api/v1/assessment/score`
- `GET /api/v1/careers`
- `GET /api/v1/careers/:slug`

## Development

This repository uses pnpm workspaces.

```bash
pnpm install
pnpm --filter @career-finder/api dev
```

In another terminal:

```bash
pnpm --filter @career-finder/web dev
```

Validate development content and deterministic business logic:

```bash
pnpm validate:data
pnpm test:domain
```

## Important migration boundary

The legacy Career Finder application is treated as a source of behavior and
content. Its architecture is not copied into the new application.

The uploaded migration snapshot does not contain the original legacy source
or the original 30-round assessment assets. The current assessment JSON is
therefore explicitly marked `draft` and exists to exercise the target engine
and UI. It must be replaced by audited legacy content before production
activation.

## Database

The target system uses PostgreSQL as the relational system of record, with
Prisma as the intended migration/data-access layer. The initial schema and a
version-controlled foundation migration are in `prisma/`.

User data should eventually live in PostgreSQL. Static JSON remains suitable
for content authoring/import pipelines, not as a competing production source
of truth.
