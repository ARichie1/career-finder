# ADR 0001 — Initial Career Finder Stack

- **Date:** 2026-09-04
- **Status:** Accepted for Phase 3 implementation

## Decision

Use a modular monolith with:

- SvelteKit + Svelte 5 + TypeScript for the web application
- Fastify + TypeScript for the API
- PostgreSQL as the primary relational system of record
- Prisma as the planned ORM/migration layer
- pnpm workspaces for the repository
- framework-independent TypeScript domain logic

## Why

This combination fits the technical migration plan while keeping the first
version simple enough for a small development team. The domain and matching
logic can be tested without the frontend, HTTP server or database.

## Alternatives considered

### Separate microservices
Rejected for the MVP because they introduce operational complexity without a
current product requirement.

### Frontend-only scoring
Rejected because scoring must be deterministic, versioned and reusable by the
API and future persistence layer.

### AI-first matching
Rejected because matching is a product-critical deterministic capability and
AI should remain an interpretation/assistance layer.

## Consequences

The API becomes the application boundary for assessment processing and career
matching. PostgreSQL will become the source of truth for mutable user state
once persistence is wired in. External career data will enter through adapters
rather than leaking provider-specific fields into the domain.
