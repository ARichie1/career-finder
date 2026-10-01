# Legacy Repository Audit — Phase 3 WP1

## Audit status

Completed against the uploaded repository snapshot on 2026-09-04.

## Findings

### Repository

The current repository is already a clean SaaS migration skeleton. It contains:

- `apps/web` — SvelteKit application
- `apps/api` — Fastify API
- `packages/config`
- `packages/domain`
- `packages/types`
- `packages/validation`
- `data/assessment`
- `data/careers`
- `prisma`
- `docs`

### Existing API

The Fastify API was already operational before this implementation step.
It exposes `/` and `/health`, with CORS registered for browser access.

### Existing frontend

The SvelteKit frontend was still the generated starter page. No migrated
assessment UI was present.

### Legacy source availability

The uploaded archive does **not** contain the legacy Career Finder source
application or its original assessment/career content. It contains the
migration documentation and the new repository skeleton only.

Therefore the audit cannot truthfully classify individual legacy traits or
rounds as KEEP / REWRITE / REPLACE / REMOVE / MERGE yet.

### Migration decision

Do not fabricate or destructively replace legacy content.

Build the target assessment engine and data contracts first. When the legacy
source/content is supplied, add a repeatable extraction → normalization →
validation → import pipeline and map every legacy item explicitly.

## Reuse decisions

| Existing item | Decision | Reason |
|---|---|---|
| 30-round visual assessment concept | KEEP | Core product differentiator |
| Four work-style dimensions | KEEP | Explicit MVP strategy |
| Generated SvelteKit shell | REUSE | Correct target frontend stack |
| Fastify API shell | REUSE | Correct modular-monolith backend direction |
| Legacy trait/category architecture | REPLACE | Target model requires signals and multidimensional scoring |
| Legacy data files | PENDING | Not present in uploaded snapshot |

## WP1 exit criteria

- [x] Current repository structure inspected
- [x] Current API state verified from supplied project state
- [x] Frontend state identified
- [x] Legacy content availability recorded
- [x] Reuse/replacement boundary documented
- [ ] Legacy item-by-item mapping — blocked until legacy source/content is supplied
