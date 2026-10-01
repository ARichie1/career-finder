
Career Finder — Technical Migration Plan

Document: "tech-migration-plan.md"
Product: Career Finder
Phase: Phase 3 — Technical Migration
Status: In Progress
Purpose: Technical architecture and migration specification

---

1. Technical Migration Objective

Phase 3 transforms the product decisions established during Phase 2 into a concrete technical migration strategy.

The objective is not simply to rewrite the existing Career Finder application.

The objective is to evolve the existing system into a maintainable SaaS platform capable of supporting:

30-Round Assessment
        ↓
Work-Style Profile
        ↓
Interest Profile
        ↓
Career Profile
        ↓
Career Matching
        ↓
Career Exploration
        ↓
Career Comparison
        ↓
Skill Analysis
        ↓
Career Roadmap
        ↓
AI Career Coach

The technical architecture must support this progression without requiring repeated architectural rewrites as each capability is introduced.

---

1.1 Primary Technical Goal

The primary goal is:

«Build a modular, testable, data-driven Career Finder platform while preserving the strongest validated behavior of the existing application.»

The new architecture must separate:

Product Content
Application Logic
Domain Logic
Persistence
External Data
AI Services
Infrastructure

These concerns should not become unnecessarily coupled.

---

1.2 What Phase 3 Is Responsible For

Phase 3 is responsible for determining:

- what currently exists
- what should be preserved
- what should be redesigned
- what should be replaced
- what should be migrated
- what should be removed
- what the target architecture should look like
- how the migration will occur
- how the new system will be tested
- how the new system will be deployed
- how the migration can be safely rolled back

---

1.3 What Phase 3 Is Not

Phase 3 is not intended to immediately implement the entire Career Finder SaaS.

It is not:

"Rewrite everything immediately."

It is:

Audit
 ↓
Understand
 ↓
Design
 ↓
Map
 ↓
Plan
 ↓
Implement Incrementally

Implementation should follow the technical decisions established in this document.

---

2. Technical Principles

The technical migration will follow a set of architectural principles.

These principles should guide implementation decisions throughout Phase 3 and subsequent development phases.

---

2.1 Product Architecture Over Legacy Architecture

The new architecture should represent the new Career Finder product.

It should not reproduce the structure of the old application merely because that structure already exists.

The old application is a source of:

- product knowledge
- existing content
- existing behavior
- implementation references
- potentially reusable components

It is not automatically the source of truth for the new architecture.

---

2.2 Preserve Valuable Behavior

The migration should preserve the strongest existing product behavior.

In particular:

30 assessment rounds
Visual choices
Image-based interaction
Multi-selection
Progress feedback
Assessment result experience

The implementation behind these experiences may change substantially.

The user experience should only change where there is a deliberate product reason to change it.

---

2.3 Separate Domain Logic from UI

Core product logic must not depend directly on UI components.

For example, scoring should not exist primarily inside:

AssessmentPage
QuestionCard
ResultComponent

Instead:

Assessment UI
      ↓
Assessment Domain
      ↓
Scoring Engine
      ↓
Profile

This allows the same domain logic to be tested and reused independently of the frontend.

---

2.4 Deterministic Core

The core Career Finder systems should be deterministic wherever practical.

This applies particularly to:

- assessment scoring
- profile calculation
- normalization
- confidence calculation
- career matching
- career ranking
- skill-gap calculation

Given identical inputs and identical rule/data versions, the system should produce the same result.

Conceptually:

Same Input
+
Same Version
        ↓
Same Result

This is essential for:

- testing
- debugging
- reproducibility
- user trust
- historical results

---

2.5 AI Is an Application Layer

AI should not become the hidden foundation of the product.

The architecture should instead be:

Structured Data
      ↓
Deterministic Domain Logic
      ↓
Structured Result
      ↓
AI Context
      ↓
AI Explanation / Assistance

AI may explain or assist with a result.

AI should not silently replace the underlying scoring or matching system.

---

2.6 Data Over Hard-Coding

Career information should be represented as data.

The application should not require code changes merely to update:

- career descriptions
- skills
- interests
- requirements
- education
- work styles
- career relationships

Conceptually:

Career Data
    ≠
Application Code

---

2.7 Version Everything That Affects Results

The system should be able to identify the versions of data and rules that produced a result.

At minimum, this applies to:

Assessment Version
Question Version
Scoring Rules
Career Data
Matching Rules

A historical result must remain interpretable even after future improvements.

---

2.8 Modular Monolith First

The initial SaaS architecture should favor a modular monolith unless the existing system or a specific technical requirement demonstrates a strong reason to introduce distributed services.

Conceptually:

                    APPLICATION
                         │
       ┌─────────────────┼─────────────────┐
       ▼                 ▼                 ▼
  Assessment          Careers           Users
       │                 │                 │
       ▼                 ▼                 ▼
  Scoring             Matching          Profiles
       │                 │                 │
       └─────────────────┼─────────────────┘
                         ▼
                    Persistence

This provides domain separation without introducing unnecessary operational complexity.

---

2.9 API Boundaries

Frontend components should communicate with application/domain functionality through defined contracts.

Avoid uncontrolled access from UI components directly into:

- database models
- external APIs
- scoring internals
- AI providers

The intended flow should be:

Frontend
   ↓
API / Application Layer
   ↓
Domain Logic
   ↓
Infrastructure

---

2.10 External Services Must Be Replaceable

External dependencies should be isolated behind application interfaces where practical.

Potential external dependencies include:

- career-data providers
- AI providers
- authentication providers
- payment providers
- email providers
- analytics providers

The product should avoid spreading provider-specific implementation details throughout the domain layer.

---

2.11 Security by Design

Security should not be treated as a final cleanup task.

The architecture must account for:

- authentication
- authorization
- secrets
- input validation
- API protection
- rate limiting
- data access
- logging
- backups
- dependency security
- privacy

from the beginning.

---

2.12 Mobile-First Performance

The assessment is a mobile-first experience.

The technical architecture must therefore account for:

- limited bandwidth
- image-heavy assessment content
- touch interactions
- slower devices
- intermittent connections
- efficient asset loading
- responsive rendering

Performance should be measured on realistic mobile conditions rather than only high-end desktop environments.

---

3. Existing System Audit

Before migration implementation begins, the current Career Finder system must be audited.

The purpose of the audit is to establish the actual technical baseline.

No critical architectural decision should be based solely on assumptions about the existing application.

---

3.1 Audit Principle

The current system should be treated as:

Observed System

rather than:

Assumed System

The audit must document what actually exists.

---

3.2 Repository Audit

The repository should be inspected for:

- root files
- directories
- source files
- configuration
- package manifests
- lock files
- environment files
- scripts
- tests
- build configuration
- deployment configuration
- documentation

The result should produce an initial repository map.

Example:

career-finder/
├── ...
├── ...
├── ...
└── ...

The actual structure must be populated from the repository during the audit.

---

3.3 Technology Audit

Identify the current:

Frontend

- framework
- language
- UI library
- styling system
- state management
- routing
- form handling
- image handling

Backend

- runtime
- framework
- API architecture
- services
- middleware
- validation
- authentication

Data

- database
- ORM/query layer
- local JSON
- static data
- external APIs
- caching

Tooling

- package manager
- build tool
- test framework
- linting
- formatting
- type checking

---

3.4 Dependency Audit

Every significant dependency should be classified.

For example:

Dependency| Purpose| Required?| Migration Action
Existing framework| Application| TBD| Audit
Existing UI library| UI| TBD| Audit
Existing state library| State| TBD| Audit
Existing database layer| Persistence| TBD| Audit
Existing assessment package| Assessment| TBD| Audit

The actual table will be populated after repository inspection.

---

3.5 Route Audit

Every existing route should be identified.

Classify each route as:

KEEP
MODIFY
REBUILD
MERGE
REMOVE
NEW

Example:

Existing Route| Classification| Reason
"/"| Audit| Existing entry point
"/assessment"| Preserve/Rebuild| Signature experience
"/results"| Rebuild| New profile model
"/careers"| Audit| Career discovery
"/career/:id"| Rebuild| New career page
"/about"| Audit| Supporting page

These are examples only.

The actual route inventory must come from the existing application.

---

3.6 Component Audit

Existing UI components should be classified as:

REUSE
REFACTOR
REBUILD
REMOVE
UNKNOWN

A component should not be rewritten merely because it belongs to the legacy system.

Reusable components may include:

- cards
- buttons
- navigation
- progress indicators
- assessment controls
- image selectors
- layout primitives

---

3.7 State Management Audit

Identify:

- global state
- local state
- server state
- persisted state
- assessment state
- authentication state
- user profile state

The audit should determine whether current state management is:

Local
Global
Server-backed
Persistent
Derived
Duplicated

Duplicate or conflicting sources of truth should be identified.

---

3.8 Assessment Audit

The assessment receives special treatment because it is the core legacy product capability.

Audit:

- number of rounds
- number of traits
- questions
- choices
- images
- selection behavior
- multi-selection rules
- progress behavior
- validation
- persistence
- scoring
- result generation
- reset behavior
- retakes

The final audit should establish the complete assessment pipeline.

---

3.9 Trait Audit

The existing trait inventory must be extracted.

The target is approximately:

120 legacy traits

Each trait should eventually receive:

Legacy ID
Legacy Name
Legacy Description
Legacy Category
Existing Score
New Dimension Mapping
Interest Mapping
Migration Status
Notes

Migration status:

KEEP
REWRITE
REPLACE
REMOVE
MERGE

---

3.10 Scoring Audit

The current scoring implementation must be identified precisely.

Determine:

- where scoring occurs
- what inputs it accepts
- how scores are calculated
- whether scores are normalized
- whether multiple dimensions are possible
- whether scoring is deterministic
- whether scoring is coupled to UI
- whether scoring is persisted

The old behavior should be documented before replacement.

---

3.11 Career Data Audit

Identify every current career-data source.

Potential sources may include:

- JSON files
- database records
- hard-coded objects
- APIs
- generated content
- manually maintained content

For each source, record:

Source
Format
Fields
Number of Careers
Relationships
Update Process
License
Owner
Migration Status

---

3.12 Authentication Audit

Determine whether the existing application has:

- account creation
- login
- sessions
- password authentication
- OAuth/social login
- user profiles
- protected routes
- authorization

If authentication does not exist, the new architecture must introduce it deliberately.

---

3.13 Persistence Audit

Determine what information currently survives a page refresh or new session.

Examples:

Assessment responses
Assessment results
User profile
Saved careers
Preferences

Classify storage as:

Memory
Browser Storage
File
Database
External Service

---

3.14 API Audit

Identify:

- internal APIs
- external APIs
- API routes
- server actions
- fetch utilities
- third-party integrations
- authentication endpoints

Each should eventually be classified as:

KEEP
REFACTOR
REPLACE
REMOVE
NEW

---

3.15 Environment Audit

Identify all environment variables used by the application.

Classify each as:

PUBLIC
SERVER_ONLY
SECRET
CONFIGURATION
LEGACY

No secret should be exposed to client-side code.

---

3.16 Deployment Audit

Determine:

- current hosting
- build command
- start command
- environment configuration
- database deployment
- migrations
- asset hosting
- domain configuration
- HTTPS
- monitoring
- rollback

The target deployment strategy should be based on actual current requirements.

---

3.17 Testing Audit

Identify existing:

- unit tests
- integration tests
- end-to-end tests
- component tests
- test fixtures
- mock data
- CI test execution

Determine which important behaviors currently have no automated coverage.

---

3.18 Technical Debt Audit

Identify:

- duplicated logic
- dead code
- tightly coupled modules
- undocumented behavior
- hard-coded data
- fragile dependencies
- outdated packages
- inconsistent naming
- missing tests
- security weaknesses

Technical debt should be prioritized by impact rather than simply by age.

---

4. Legacy-to-Target Migration Model

Once the existing system has been audited, each important legacy capability must be mapped to its target architecture.

---

4.1 Migration Classification

Every significant legacy component should receive one of six classifications:

PRESERVE

Keep substantially as-is because it represents valuable validated behavior.

REFACTOR

Keep the capability but restructure its implementation.

REBUILD

Keep the product capability but implement it using a new architecture.

TRANSFORM

Convert legacy data/content into a new representation.

ARCHIVE

Retain historical information without making it part of the active system.

REMOVE

Delete because the capability is no longer part of Career Finder.

---

4.2 Initial Migration Direction

The expected high-level mapping is:

Legacy Capability| Target Direction
30-round assessment| Rebuild
Visual assessment UI| Preserve/Rebuild
Image choices| Preserve/Rebuild
Multi-selection| Preserve
120 traits| Audit → Transform
Four personality categories| Transform
Legacy scoring| Replace
Personality result| Replace with profile
Career recommendations| Rebuild
Career data| Transform
Career pages| Rebuild
User accounts| Rebuild/Extend
Saved careers| New
Career comparison| New
Skill gaps| New
Roadmaps| New
AI coach| New
B2B| Later

This table is an initial strategic mapping.

It must be refined after the repository audit.

---

4.3 Migration Boundary

The migration boundary should separate:

LEGACY SYSTEM

from:

NEW CAREER FINDER DOMAIN

The new domain should not directly depend on arbitrary legacy implementation details.

Where legacy data is required, it should pass through explicit transformation logic.

---

4.4 Target Data Flow

The target assessment flow is:

Assessment Definition
        ↓
Question
        ↓
User Response
        ↓
Response Signals
        ↓
Scoring Rules
        ↓
Work-Style Profile
        ↓
Interest Profile
        ↓
Career Profile
        ↓
Matching Engine
        ↓
Career Matches

This flow should be represented explicitly in the technical architecture.

---

4.5 Migration Rule

The most important migration rule is:

«Do not allow legacy implementation details to become accidental dependencies of the new domain model.»

The migration should extract useful information from the old system while allowing the new system to evolve independently.

---

4.6 Phase 3 Working Rule

Before implementing each major technical subsystem:

Understand Existing
        ↓
Define Target
        ↓
Define Migration
        ↓
Define Tests
        ↓
Implement
        ↓
Validate

This sequence should be maintained throughout Phase 3.

5. Target Technical Architecture

The new Career Finder architecture should be designed around the product's actual domain rather than around individual screens.

The core architecture should support:

                    CAREER FINDER
                         │
                         ▼
                    Application
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
   Assessment         Careers           Users
        │                │                │
        ▼                ▼                ▼
    Scoring          Matching         Profiles
        │                │                │
        └────────────────┼────────────────┘
                         ▼
                  Career Intelligence
                         │
             ┌───────────┼───────────┐
             ▼           ▼           ▼
          Skills      Roadmaps       AI

The architecture should remain understandable to a small development team and should not introduce infrastructure complexity without a clear product requirement.

---

5.1 Recommended Architecture Style

The initial system should use a modular monolith.

This means:

- one primary application
- clearly separated domain modules
- shared infrastructure where appropriate
- explicit interfaces between modules
- centralized authentication
- centralized persistence
- independently testable domain logic

The architecture should avoid prematurely splitting the application into microservices.

---

5.2 High-Level Layers

The application should conceptually contain the following layers:

┌─────────────────────────────────────────┐
│              Presentation               │
│     Pages / Components / UI / Forms     │
├─────────────────────────────────────────┤
│            Application Layer             │
│   Use Cases / Commands / Queries / API  │
├─────────────────────────────────────────┤
│              Domain Layer               │
│ Assessment / Matching / Careers / etc. │
├─────────────────────────────────────────┤
│           Infrastructure Layer          │
│ DB / APIs / AI / Auth / Storage / Mail  │
└─────────────────────────────────────────┘

The exact framework implementation will be determined after the existing repository is audited.

---

5.3 Presentation Layer

The presentation layer is responsible for:

- rendering interfaces
- collecting user input
- displaying application state
- navigation
- accessibility
- responsive behavior
- loading states
- error states

It should not contain core scoring or career-matching rules.

For example, a component may submit:

AssessmentResponse

but should not independently calculate:

CareerMatchScore

---

5.4 Application Layer

The application layer coordinates use cases.

Examples:

StartAssessment
SubmitAssessmentResponse
CompleteAssessment
CalculateProfile
GetCareerMatches
GetCareer
SaveCareer
CompareCareers
CalculateSkillGap
GenerateRoadmap
AskCareerCoach

These use cases provide stable entry points between the presentation layer and domain logic.

---

5.5 Domain Layer

The domain layer contains the actual Career Finder rules.

Potential domain modules:

assessment/
profiles/
interests/
careers/
matching/
skills/
roadmaps/
users/
subscriptions/

The domain layer should not know whether the application uses:

- PostgreSQL
- MySQL
- Supabase
- a particular AI provider
- a particular frontend framework

Those are infrastructure concerns.

---

5.6 Infrastructure Layer

Infrastructure provides implementations for external concerns.

Examples:

database/
authentication/
career-data/
ai/
payments/
email/
storage/
analytics/

Infrastructure should implement interfaces required by the application/domain layers.

---

6. Domain Architecture

Career Finder should be organized around explicit business domains.

The initial target domains are:

User
Assessment
Profile
Career
Matching
Skill
Roadmap
Subscription
AI

Some domains may initially share implementation infrastructure, but their responsibilities should remain conceptually distinct.

---

6.1 User Domain

Responsible for:

- user identity
- account information
- profile metadata
- journey type
- preferences
- goals
- constraints

Examples:

Student
Job seeker
Career changer
Curious user

The user domain should not contain assessment scoring logic.

---

6.2 Assessment Domain

Responsible for:

- assessment definitions
- rounds
- questions
- choices
- traits/signals
- response recording
- assessment attempts
- assessment versions
- completion state

Core concept:

Assessment
   ↓
Attempt
   ↓
Response
   ↓
Signals

---

6.3 Profile Domain

Responsible for transforming assessment signals into structured profiles.

Potential profile components:

WorkStyleProfile
InterestProfile
PreferenceProfile
GoalProfile
CareerProfile

The profile domain should provide normalized representations that can be consumed by the matching engine.

---

6.4 Career Domain

Responsible for:

- career definitions
- career descriptions
- career metadata
- interests
- skills
- work styles
- education
- requirements
- related careers
- career data versions

A career should be treated as a structured domain object rather than a simple text entry.

---

6.5 Matching Domain

Responsible for:

- comparing user profiles against career profiles
- calculating component scores
- applying constraints
- ranking careers
- determining match strength
- generating match explanations from structured signals

The matching engine should remain deterministic.

---

6.6 Skill Domain

Responsible for:

- skills
- career-skill relationships
- skill importance
- user skills
- skill proficiency
- skill gaps

This domain will eventually support:

Current Skills
        ↓
Required Skills
        ↓
Skill Gap
        ↓
Learning Priorities

---

6.7 Roadmap Domain

Responsible for:

- roadmap generation
- roadmap steps
- prerequisites
- learning priorities
- progress
- completion state

A roadmap should be generated from structured information rather than being only an AI-generated paragraph.

---

6.8 Subscription Domain

Responsible for:

- free/premium status
- entitlements
- subscription state
- usage limits
- premium feature access

Business rules should not be scattered throughout UI components.

---

6.9 AI Domain

The AI domain should provide controlled access to AI capabilities.

Potential capabilities:

ExplainMatch
CompareCareers
ExplainSkillGap
GenerateRoadmapAdvice
CareerCoaching
AlternativePathAdvice

The AI domain should receive structured context from the application rather than unrestricted access to the database.

---

7. Target Repository Architecture

The repository structure should reflect the target domain architecture.

The exact structure will depend on the current framework, but the conceptual organization should resemble:

career-finder/
│
├── app/
│   ├── routes/
│   ├── pages/
│   └── layouts/
│
├── components/
│   ├── assessment/
│   ├── careers/
│   ├── profile/
│   ├── roadmap/
│   └── shared/
│
├── domains/
│   ├── assessment/
│   │   ├── domain/
│   │   ├── application/
│   │   └── repositories/
│   │
│   ├── profile/
│   │
│   ├── careers/
│   │
│   ├── matching/
│   │
│   ├── skills/
│   │
│   ├── roadmaps/
│   │
│   ├── users/
│   │
│   └── subscriptions/
│
├── infrastructure/
│   ├── database/
│   ├── auth/
│   ├── ai/
│   ├── career-data/
│   ├── payments/
│   └── storage/
│
├── lib/
│   ├── validation/
│   ├── utilities/
│   └── configuration/
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── scripts/
│   ├── migration/
│   ├── seed/
│   └── data/
│
└── docs/

This is a target architecture, not a requirement to force the current repository into this exact structure.

The actual framework conventions must be respected.

---

7.1 Domain Module Structure

A domain module should preferably expose a small public API.

Conceptually:

domains/matching/
│
├── domain/
│   ├── match.ts
│   ├── scoring.ts
│   ├── ranking.ts
│   └── explanation.ts
│
├── application/
│   └── get-career-matches.ts
│
└── repositories/
    └── career-repository.ts

The objective is to prevent unrelated parts of the application from reaching directly into internal implementation details.

---

7.2 Public vs Internal APIs

Each module should distinguish between:

Public Module API

and:

Internal Implementation

For example:

matching.matchCareer()
matching.rankCareers()

may be public.

Internal normalization or weighting utilities should remain private to the module unless there is a genuine reuse requirement.

---

7.3 Shared Code

Shared utilities should remain limited.

A common failure mode is creating:

utils/

and putting unrelated business logic into it.

Shared code should generally contain technical utilities such as:

- date handling
- identifiers
- validation helpers
- serialization
- formatting
- configuration

Business logic belongs in its appropriate domain.

---

8. Target Data Architecture

The new data architecture must support both the current MVP and future SaaS functionality.

The conceptual model is:

User
 │
 ├── AssessmentAttempts
 │       │
 │       └── Responses
 │
 ├── Profiles
 │
 ├── SavedCareers
 │
 ├── CareerComparisons
 │
 ├── SkillProfile
 │
 ├── Roadmaps
 │
 └── Subscription

Career intelligence exists separately:

Career
 │
 ├── Interests
 ├── Work Styles
 ├── Skills
 ├── Requirements
 ├── Education
 ├── Technologies
 └── Related Careers

---

8.1 Core Entities

The initial target entities are:

User
Assessment
AssessmentVersion
AssessmentAttempt
Question
QuestionOption
Response
Signal
WorkStyleProfile
InterestProfile
PreferenceProfile
GoalProfile
Career
CareerInterest
CareerWorkStyle
CareerSkill
CareerRequirement
CareerMatch
SavedCareer
Skill
UserSkill
SkillGap
CareerRoadmap
RoadmapStep
Subscription

Some entities may be merged during implementation if the chosen persistence model makes that appropriate.

The conceptual separation should remain clear even if the physical database representation differs.

---

8.2 User

Conceptual fields:

id
email
displayName
journeyType
country
createdAt
updatedAt

Additional fields should only be introduced when they have a defined product purpose.

---

8.3 Assessment

Represents an assessment definition.

Conceptual fields:

id
name
description
version
status
createdAt
updatedAt

An assessment should be separate from an assessment attempt.

---

8.4 AssessmentAttempt

Represents one user's execution of an assessment.

Conceptual fields:

id
userId
assessmentId
assessmentVersion
startedAt
completedAt
status

This allows multiple assessments over time.

---

8.5 Response

Represents an individual user response.

Conceptual fields:

id
attemptId
questionId
selectedOptions
answeredAt

The exact representation of multi-selection will depend on the database architecture.

---

8.6 Signal

A response should ultimately produce structured signals.

Conceptually:

Response
   ↓
Signal
   ├── Dimension
   ├── Weight
   └── Direction

A signal should not simply mean:

Trait = "Leader"

It should represent measurable contribution to one or more dimensions.

---

8.7 WorkStyleProfile

Represents the four primary work-style dimensions:

Harmony
Exploration
Drive
Structure

Conceptual representation:

harmony
exploration
drive
structure
confidence
calculationVersion

---

8.8 InterestProfile

Represents vocational-interest dimensions:

Realistic
Investigative
Artistic
Social
Enterprising
Conventional

These may be stored as normalized scores with metadata describing the calculation version.

---

8.9 Career

The career entity should contain structured information rather than relying on one large description field.

Potential categories include:

identity
description
workEnvironment
education
training
salary
outlook
technology
skills
interests
workStyles
relatedCareers

Not every field needs to be implemented in the first MVP.

---

8.10 CareerMatch

A match should represent the relationship between a user profile and a career at a particular calculation point.

Conceptually:

userId
assessmentAttemptId
careerId
interestFit
workStyleFit
preferenceFit
goalFit
constraintFit
overallScore
matchStrength
matchingVersion
createdAt

The internal score may be numeric.

The user-facing result should emphasize interpretable categories such as:

Strong match
Good match
Worth exploring
Lower match

---

8.11 Versioning Requirements

Results must retain enough information to reproduce or explain how they were generated.

At minimum:

assessmentVersion
scoringVersion
careerDataVersion
matchingVersion

Future AI-generated explanations should also record the relevant AI/model metadata where appropriate.

---

8.12 Database Strategy

The final database technology should be selected after the current repository and infrastructure are audited.

The database must support:

- relational relationships
- structured career data
- user accounts
- assessment history
- saved careers
- subscriptions
- roadmap state
- scalable querying

A relational database is the expected direction because Career Finder contains many structured relationships.

The specific provider should not be hard-coded into the domain architecture before the audit.

---

8.13 Migration Data Rule

Legacy data should never be modified destructively during the initial migration.

The preferred process is:

Legacy Data
    ↓
Extract
    ↓
Validate
    ↓
Transform
    ↓
Import
    ↓
Verify
    ↓
Activate

Original data should remain recoverable until the new system has been validated.

---

8.14 Target Data Flow

The overall system should eventually operate approximately as follows:

User
 ↓
Assessment Attempt
 ↓
Responses
 ↓
Signals
 ↓
Work-Style Profile
 +
Interest Profile
 +
Preferences
 +
Goals
 ↓
Career Profile
 ↓
Matching Engine
 ↓
Career Matches
 ↓
Career Exploration
 ↓
Skills
 ↓
Skill Gaps
 ↓
Roadmap
 ↓
AI Assistance

This data flow is the central technical model for the new Career Finder platform.

9. Assessment Engine Migration

The assessment engine is the most important legacy subsystem to migrate because the 30-round visual assessment is the signature Career Finder experience.

The migration must preserve the experience while replacing the simplistic underlying scoring model.

The target architecture is:

Assessment Definition
        ↓
Assessment Version
        ↓
Question
        ↓
Options
        ↓
User Response
        ↓
Response Signals
        ↓
Scoring Engine
        ↓
Profile Calculation

---

9.1 Assessment Engine Responsibilities

The assessment engine is responsible for:

- loading an assessment
- identifying the active assessment version
- presenting rounds/questions
- validating responses
- recording responses
- supporting multi-selection
- calculating completion
- finalizing an attempt
- producing structured response signals

It should not be responsible for:

- rendering UI
- displaying career recommendations
- generating AI explanations
- deciding which careers appear on the results page

Those responsibilities belong to other modules.

---

9.2 Assessment Versioning

Assessment content must be versioned.

For example:

Assessment v1
Assessment v2
Assessment v3

A completed attempt must retain the version against which it was taken.

This prevents a future content update from changing the interpretation of an old assessment retroactively.

---

9.3 Assessment Structure

The target assessment structure is approximately:

Assessment
│
└── Assessment Version
      │
      ├── Round 1
      │    ├── Option A
      │    ├── Option B
      │    ├── Option C
      │    └── Option D
      │
      ├── Round 2
      │    ├── Option A
      │    ├── Option B
      │    ├── Option C
      │    └── Option D
      │
      └── ...

The MVP target remains:

30 rounds
4 visual choices per round

The architecture should not assume that every future assessment must have exactly 30 rounds.

---

9.4 Question Representation

A question should represent the assessment interaction rather than encode scoring directly.

Conceptually:

Question
├── id
├── assessmentVersionId
├── order
├── prompt
├── selectionMode
└── options

Possible selection modes:

single
multiple

The MVP should support the existing multi-selection behavior.

---

9.5 Option Representation

Each visual choice should contain presentation information and scoring signals.

Conceptually:

QuestionOption
├── id
├── questionId
├── label
├── description
├── image
└── signals

The option should not simply contain:

trait = "leader"

Instead it should reference structured signals.

---

10. Response Signal Architecture

The most important scoring migration is the transition from category membership to multidimensional signals.

Legacy model:

Selected Trait
      ↓
+1 Category

Target model:

Selected Option
      ↓
Multiple Signals
      ↓
Multiple Dimensions

---

10.1 Signal Example

A response might contribute:

Harmony       +0.00
Exploration   +0.20
Drive         +0.30
Structure     +0.40

Realistic     +0.10
Investigative +0.80
Artistic      +0.00
Social        +0.10
Enterprising  +0.10
Conventional  +0.20

These numbers are illustrative.

The actual weights must be established through content design, testing, and validation.

---

10.2 Signal Model

Conceptually:

Signal
├── dimension
├── value
└── source

Example:

{
  dimension: "investigative",
  value: 0.8,
  source: "question-option"
}

The implementation may use IDs instead of strings.

---

10.3 Signal Independence

A single response should be able to contribute to multiple dimensions.

For example:

"I enjoy figuring out how complicated systems work."

may contribute to:

Exploration
Drive
Structure
Investigative

This is fundamentally different from assigning the response to one personality category.

---

11. Scoring Engine

The scoring engine transforms responses into normalized profile dimensions.

The conceptual process is:

Responses
   ↓
Extract Signals
   ↓
Aggregate Signals
   ↓
Normalize
   ↓
Calculate Relative Position
   ↓
Calculate Confidence
   ↓
Generate Profile

---

11.1 Scoring Must Be Deterministic

For a fixed:

Assessment Version
+
Responses
+
Scoring Version

the result must be deterministic.

This allows:

- repeatable tests
- debugging
- result comparison
- historical consistency
- controlled experiments

---

11.2 Raw Scores

The engine should first calculate raw dimension scores.

For example:

Harmony = 31.4
Exploration = 48.2
Drive = 41.7
Structure = 26.8

Raw values should remain internal unless there is a deliberate reason to expose them.

---

11.3 Normalization

Raw values should be normalized into a consistent representation.

For example:

0 ─────────────────── 100

The normalization method must be defined and versioned.

The system should avoid implying that:

80 = objectively twice as much as 40

unless the underlying measurement model actually supports that interpretation.

---

11.4 Profile Scores

The user-facing profile may display:

Harmony       72
Exploration   84
Drive         67
Structure     41

The values should be interpreted as relative indicators of response patterns, not clinical or psychological measurements.

---

12. Work-Style Profile

The original four dimensions become the first proprietary work-style model.

The dimensions are:

Harmony
Exploration
Drive
Structure

---

12.1 Harmony

Represents tendencies associated with:

- cooperation
- empathy
- support
- patience
- interpersonal consideration
- maintaining productive relationships

It should not be interpreted as:

"nice"

or:

"good with people"

The dimension describes tendencies, not personal worth.

---

12.2 Exploration

Represents tendencies associated with:

- novelty
- experimentation
- spontaneity
- variety
- expression
- discovering alternatives

It should not automatically imply creativity or extroversion.

---

12.3 Drive

Represents tendencies associated with:

- initiative
- achievement
- leadership
- decisiveness
- autonomy
- competitive motivation

The dimension should remain behaviorally framed.

---

12.4 Structure

Represents tendencies associated with:

- organization
- planning
- precision
- consistency
- systematic thinking
- reliability

A high Structure score should not automatically imply that a user dislikes creativity.

---

13. Interest Profile

Career Finder should eventually calculate an interest profile based on six vocational-interest dimensions:

Realistic
Investigative
Artistic
Social
Enterprising
Conventional

These dimensions should be represented internally as structured identifiers.

Example:

R
I
A
S
E
C

The user-facing interface does not need to expose the acronym unless useful.

---

13.1 Interest Scoring

Interest scoring follows the same general architecture:

Responses
   ↓
Interest Signals
   ↓
Aggregate
   ↓
Normalize
   ↓
Rank
   ↓
Interest Profile

Example:

Investigative    88
Enterprising    81
Artistic        67
Realistic       61
Social          54
Conventional    43

---

13.2 Interest Ranking

The system should retain both:

absolute score

and:

relative rank

This makes it possible to distinguish:

Clearly dominant interest

from:

Broadly balanced interests

---

14. Work Preferences

Work preferences should be represented separately from work-style tendencies.

Example dimensions:

Independence ↔ Collaboration

Routine ↔ Variety

Direction ↔ Autonomy

Predictability ↔ Risk

Office ↔ Flexibility

Individual Work ↔ Team Work

These should not be inferred blindly from personality scores.

They should eventually be measured explicitly through targeted questions.

---

14.1 Preference Representation

A preference can be represented conceptually as:

Preference
├── dimension
├── position
└── confidence

Example:

teamOrientation = 72

where the scale represents a defined position between the two endpoints.

---

15. Career Goals and Constraints

The assessment profile should eventually include user-provided goals.

Potential goals:

Income
Stability
Creativity
Helping People
Independence
Leadership
Work-Life Balance
Intellectual Challenge
Remote Flexibility
Social Impact

Potential constraints:

Education Time
Financial Constraints
Location
Remote Preference
Required Income
Training Tolerance
Existing Experience

These values should be explicitly stored rather than inferred from AI.

---

16. Career Profile

The Career Profile combines the available information.

Conceptually:

                    CAREER PROFILE
                          │
       ┌──────────────────┼──────────────────┐
       ▼                  ▼                  ▼
  Work Style          Interests         Preferences
       │                  │                  │
       └──────────────────┼──────────────────┘
                          ▼
                        Goals
                          │
                          ▼
                     Constraints

The profile is therefore broader than the original assessment result.

---

16.1 Profile Completeness

Not every user will provide every layer.

The system should support partial profiles.

For example:

Work Style     ✓
Interests      ✓
Preferences    ✓
Goals          ✗
Constraints    ✗

The matching engine should still operate while clearly identifying missing information.

---

17. Confidence and Profile Clarity

Career Finder must avoid false precision.

A score should not automatically imply high confidence.

For example:

Harmony       81
Exploration   80
Drive         79
Structure     82

indicates a relatively balanced profile.

Compare:

Harmony       31
Exploration   88
Drive         84
Structure     42

which provides stronger differentiation.

---

17.1 Confidence Inputs

Confidence may eventually consider:

- number of valid responses
- response consistency
- separation between dimensions
- missing data
- assessment version
- measurement coverage

The exact formula should be established experimentally.

---

17.2 User-Facing Language

The system should use language such as:

Your responses suggest...
You appear to prefer...
You may enjoy...
Your strongest tendencies include...
These careers may be worth exploring...

Avoid:

You are definitely...
Your personality is...
You were born to be...
This is your perfect career...

---

18. Career Matching Engine

The matching engine transforms a Career Profile into ranked career opportunities.

Target architecture:

Career Profile
      │
      ├── Work Style
      ├── Interests
      ├── Preferences
      ├── Goals
      └── Constraints
             │
             ▼
       Matching Engine
             │
             ▼
       Career Candidates
             │
             ▼
       Component Scores
             │
             ▼
        Overall Ranking
             │
             ▼
        Match Strength

---

18.1 Matching Inputs

The engine may eventually consider:

Interest Fit
Work-Style Fit
Preference Fit
Goal Fit
Constraint Fit
Skill Fit
Education/Training Fit

Not every factor needs to be enabled in the first MVP.

---

18.2 Component Scores

Internally, a match may contain:

Interest Fit       0.92
Work-Style Fit     0.86
Preference Fit     0.78
Goal Fit           0.81
Training Fit       0.74

These are internal analytical values.

---

18.3 Overall Score

A weighted model may eventually calculate:

Overall =
    Interest × W1
  + WorkStyle × W2
  + Preference × W3
  + Goals × W4
  + Constraints × W5

The exact weights must not be arbitrarily selected and permanently embedded in code.

They should be configurable and versioned.

---

18.4 Matching Version

Every matching calculation must identify its version.

Example:

matchingVersion = "2026.1"

If the weighting system changes:

matchingVersion = "2026.2"

Historical matches remain interpretable.

---

19. Match Strength

Internal numerical scores should be translated into user-friendly categories.

Potential categories:

Strong Match
Good Match
Worth Exploring
Lower Match

The exact thresholds should be validated.

The product should not present a score as:

92% chance of becoming a Software Engineer

because the engine does not measure that.

---

19.1 Match Explanation

Every major match should be explainable using structured evidence.

Example:

Why this career appears

✓ Strong investigative interest
✓ Strong problem-solving preference
✓ High autonomy preference
✓ Comfortable with structured systems
✓ Strong continuous-learning orientation

The explanation should be generated from actual matching inputs.

---

20. Matching Engine Separation

The matching engine should remain independent from:

UI
AI
Database Provider
Career Page Components
Authentication

Its conceptual interface should resemble:

matchCareer(profile, career, rules)

and:

rankCareers(profile, careers, rules)

The exact implementation will be determined during coding.

---

21. Career Candidate Filtering

Matching should happen in stages.

First:

Candidate Selection

Then:

Compatibility Calculation

Then:

Ranking

Then:

Explanation

This prevents the system from calculating expensive operations for every career unnecessarily.

---

21.1 Candidate Filtering

Potential filters include:

- career availability
- profile completeness
- explicit user constraints
- education constraints
- geographic availability
- data quality
- deprecated career records

Filters should be clearly separated from scoring.

---

22. Match Explanation Architecture

The system should create structured explanation data before rendering or sending anything to an AI model.

Conceptually:

Career Match
     ↓
Evidence
     ├── Interest Evidence
     ├── Work-Style Evidence
     ├── Preference Evidence
     ├── Goal Evidence
     └── Constraint Evidence

Example:

Evidence:
- Investigative interest: strong
- Structure preference: strong
- Autonomy preference: strong
- Continuous learning goal: strong

This evidence can then power:

UI explanation
AI explanation
Career comparison
Analytics

---

23. Assessment Migration Strategy

The assessment migration should occur in controlled stages.

Legacy Assessment
       ↓
Inventory
       ↓
Content Audit
       ↓
Trait Mapping
       ↓
Signal Mapping
       ↓
New Assessment Schema
       ↓
Scoring Engine
       ↓
Validation
       ↓
New Assessment

---

23.1 Legacy Trait Mapping

Every legacy trait should receive a migration decision:

KEEP
REWRITE
REPLACE
REMOVE
MERGE

No legacy trait should be automatically migrated without review.

---

23.2 Negative Trait Removal

Traits containing judgmental or unnecessarily negative labels should not be carried into the new system.

Examples of problematic concepts include labels equivalent to:

Lazy
Weak-willed
Bad with people
Unreliable
Controlling

These should be transformed into neutral behavioral statements where the underlying behavior is genuinely useful.

---

23.3 Behavioral Wording

The preferred structure is:

Behavior
+
Context
+
Preference

For example:

I prefer to consider several options before making an important decision.

rather than:

I am indecisive.

---

24. Assessment Content Quality Requirements

Every assessment item should be reviewed for:

- clarity
- neutrality
- behavioral specificity
- ambiguity
- cultural assumptions
- visual interpretation
- accessibility
- duplication
- measurement overlap
- scoring relevance

An item should have a documented reason for contributing to its assigned dimensions.

---

25. Assessment Testing

Assessment testing must occur at multiple levels.

Unit tests

Test:

- signal aggregation
- normalization
- scoring
- confidence
- edge cases

Integration tests

Test:

Question
 ↓
Response
 ↓
Signal
 ↓
Profile

End-to-end tests

Test:

Start Assessment
 ↓
Complete 30 Rounds
 ↓
Submit
 ↓
View Profile
 ↓
View Matches

---

26. Assessment Migration Acceptance Criteria

The new assessment engine is not considered migrated until:

- all intended assessment rounds are available
- visual choices work correctly
- multi-selection works
- progress is accurate
- responses persist correctly
- incomplete attempts behave correctly
- completed attempts are immutable or version-controlled
- scoring is deterministic
- profiles are generated correctly
- legacy-to-new content mappings are documented
- automated tests cover critical scoring behavior
- mobile interaction is validated

The visual experience should remain fast and intuitive.

---

27. Core Technical Outcome

At the completion of this stage, Career Finder should have transformed the old conceptual pipeline:

Trait
 ↓
Category
 ↓
Career

into:

Response
 ↓
Signals
 ↓
Work-Style Profile
 +
Interest Profile
 +
Preferences
 +
Goals
 ↓
Career Profile
 ↓
Matching Engine
 ↓
Explainable Career Match

This becomes the technical foundation for the rest of the SaaS.


28. Career Data Architecture

Career Finder's long-term value depends heavily on the quality of its career data.

The assessment tells the user something about themselves.

Career data tells them what those results mean in the real world.

Therefore, career information must be treated as a first-class product data system rather than as static content attached to pages.

The target architecture is:

External Sources
      │
      ▼
Data Ingestion
      │
      ▼
Validation
      │
      ▼
Normalization
      │
      ▼
Career Data Model
      │
      ├── Interests
      ├── Work Styles
      ├── Skills
      ├── Education
      ├── Requirements
      ├── Technology
      └── Related Careers
             │
             ▼
       Matching Engine
             │
             ▼
        Career Pages

---

29. Career Data Principles

Career data must follow several principles.

29.1 Structured First

Wherever possible, information should be stored as structured data.

Prefer:

career.skills
career.education
career.interests
career.workStyles
career.technology

over one large text field containing all information.

Structured data allows the same information to power:

- matching
- filtering
- comparison
- skill-gap analysis
- roadmaps
- search
- AI explanations
- SEO pages

---

29.2 Source Attribution

Every externally sourced career-data field should have a known source.

Conceptually:

Career
 ├── source
 ├── sourceId
 ├── sourceVersion
 └── importedAt

This makes it possible to determine where information came from.

---

29.3 Do Not Treat External Data as Permanent Truth

Career information changes.

Examples:

- technologies change
- training requirements change
- occupations evolve
- salaries change
- employment outlook changes

External data should therefore be treated as a versioned source rather than immutable truth.

---

30. External Career Data Strategy

Career Finder should use established occupational data wherever practical rather than attempting to manually construct an entire occupational database from scratch.

Potential sources include:

- O*NET
- government labor-market data
- national statistical agencies
- official occupational classifications
- education providers
- licensed commercial datasets
- manually researched editorial content

The final production sources must be selected after verifying:

License
Attribution requirements
Commercial-use rights
Redistribution rights
Update frequency
API limits
Geographic coverage
Data quality

---

31. O*NET Integration Strategy

O*NET is a strong candidate for the underlying U.S. occupational-data layer because it provides structured occupational information relevant to Career Finder's model.

Potentially useful data includes:

Occupations
Interests
Skills
Work Styles
Tasks
Knowledge
Education
Technology Skills
Related Occupations

However, O*NET should not automatically become the only Career Finder data source.

The product is intended to eventually support users across different countries and education systems.

Therefore:

Career Finder
      │
      ├── U.S. Career Data
      │
      ├── Regional Career Data
      │
      └── Career Finder Editorial Layer

should remain possible.

Before production integration, licensing and attribution requirements must be verified against the specific O*NET datasets/services being used.

---

32. Career Data Abstraction Layer

The domain should not directly depend on O*NET-specific field names.

Instead:

O*NET
   ↓
O*NET Adapter
   ↓
Career Finder Data Model
   ↓
Application

For example, the application should work with:

career.skills

rather than requiring:

onetElement.occupationData.skills

This makes future source replacement possible.

---

33. Career Data Provider Interface

The architecture should define an abstract career-data interface.

Conceptually:

CareerDataProvider

getCareer()
getCareers()
getSkills()
getInterests()
getWorkStyles()
getRelatedCareers()

External providers implement the interface.

Potential future providers could include:

O*NETProvider
GovernmentDataProvider
RegionalProvider
EditorialProvider

The domain layer should only depend on the normalized Career Finder representation.

---

34. Career Data Normalization

External data will rarely match Career Finder's internal model perfectly.

The ingestion pipeline should therefore perform normalization.

External Data
      ↓
Parse
      ↓
Validate
      ↓
Map
      ↓
Normalize
      ↓
Deduplicate
      ↓
Enrich
      ↓
Store

---

34.1 Normalization Requirements

Normalize:

- identifiers
- occupation names
- skill names
- interest categories
- work-style categories
- education terminology
- career relationships
- technology names
- units
- numeric ranges

---

35. Career Identity

Every career should have a stable internal identifier.

Example:

careerId

External identifiers should be stored separately.

Conceptually:

Career
├── id
├── canonicalSlug
├── name
├── source
└── sourceId

This prevents an external provider's identifier from becoming the permanent primary key of Career Finder.

---

36. Career Slugs

Career pages should use stable human-readable slugs.

Example:

/careers/software-developer
/careers/data-analyst
/careers/product-designer

The slug should not depend on an external provider's raw identifier.

Redirects should be supported if a slug changes.

---

37. Career Data Relationships

Career data should support relationships such as:

Career
 │
 ├── Interests
 ├── Skills
 ├── Work Styles
 ├── Education
 ├── Technologies
 ├── Tasks
 ├── Requirements
 └── Related Careers

This creates a reusable career knowledge graph.

---

38. Career-Skill Relationships

A career should be associated with multiple skills.

Example:

Software Developer
 ├── Programming
 ├── Problem Solving
 ├── Software Design
 ├── Testing
 └── Version Control

The relationship should eventually include importance.

Conceptually:

CareerSkill
├── careerId
├── skillId
├── importance
└── source

This is necessary for meaningful skill-gap analysis.

---

39. Career-Interest Relationships

Career interests should be represented as weighted relationships.

Example:

Software Developer
 ├── Investigative   High
 ├── Realistic       Medium
 └── Conventional    Medium

These relationships become matching inputs.

---

40. Career-Work-Style Relationships

Careers should also contain work-style expectations.

Example:

Software Developer
 ├── Structure       High
 ├── Exploration     Medium
 ├── Drive           Medium
 └── Harmony         Medium

These values should be derived from appropriate occupational data and/or Career Finder's validated mapping model.

They should not simply be guessed.

---

41. Career Requirements

Requirements should be represented separately from recommendations.

Potential categories:

Education
Training
Certification
Experience
Technical Skills
Soft Skills
Licensing

This allows Career Finder to distinguish between:

What this career commonly requires

and:

What this particular user currently has

---

42. Career Education Data

Education data should support multiple pathways.

For example:

University Degree
Bootcamp
Vocational Training
Certification
Apprenticeship
Self-Directed Learning
Work Experience

The system should avoid presenting one pathway as universally mandatory unless the occupation genuinely requires it.

This is especially important when Career Finder expands internationally.

---

43. Regional Career Data

Career information should eventually support regional context.

Conceptually:

Career
 │
 ├── Global Information
 │
 ├── Country Information
 │
 └── Region Information

Potential regional differences include:

- job titles
- education requirements
- licensing
- salaries
- employment outlook
- qualifications
- training pathways

Regional support should be introduced incrementally rather than attempting to solve every country's career system in the MVP.

---

44. Salary Data

Salary information should be treated as time-sensitive.

A salary record should conceptually contain:

salary
currency
region
period
source
sourceDate

Avoid storing an unexplained value such as:

salary = 85000

without knowing:

- currency
- geography
- period
- source

---

45. Employment Outlook

Employment outlook should similarly include:

metric
value
period
region
source
sourceDate

The UI should make clear that labor-market information can change.

---

46. Technology Data

Technology information can be particularly useful for technical careers.

A career may contain:

Technology
 ├── JavaScript
 ├── Python
 ├── SQL
 └── Git

The technology layer should be kept separate from general skills where appropriate.

For example:

Programming

is a broader skill.

Python

is a specific technology/tool.

---

47. Career Content Layer

Not all useful career information needs to come directly from external occupational datasets.

Career Finder should eventually maintain an editorial layer for:

- simplified explanations
- user-friendly descriptions
- common misconceptions
- career comparisons
- example projects
- beginner guidance
- transition advice
- roadmap explanations

The architecture should distinguish:

Source Data

from:

Career Finder Editorial Content

This allows the product to add value without modifying the underlying source dataset.

---

48. Career Page Architecture

Every supported career should eventually have a structured career page.

Target structure:

Career
│
├── Overview
├── What You Do
├── Work Environment
├── Skills
├── Interests
├── Work Style
├── Education
├── Training
├── Technology
├── Salary
├── Outlook
├── Related Careers
└── Your Match

Not all sections need to be available in the MVP.

---

49. Career Page Personalization

A public career page should be useful without an account.

For an authenticated user, additional information can appear:

Your Match
      ↓
Why It Matches
      ↓
Your Strengths
      ↓
Skill Gaps
      ↓
Possible Roadmap

This creates a natural transition from SEO/discovery content into the SaaS experience.

---

50. Career Comparison Data

Career comparison requires normalized career data.

For example:

                 Software       Data          Product
                 Engineer       Analyst       Designer

Interest         Strong         Very Strong   Strong
Structure        High           High          Medium
Creativity       Medium         Medium        Very High
People           Medium         Medium        High
Training         Medium         Medium        Medium

The comparison engine should calculate these values from structured data rather than manually maintaining separate comparison tables.

---

51. Career Data Ingestion Pipeline

Career data imports should be repeatable.

The preferred workflow is:

Fetch
 ↓
Store Raw Data
 ↓
Validate
 ↓
Transform
 ↓
Normalize
 ↓
Generate Internal Records
 ↓
Run Integrity Checks
 ↓
Publish New Data Version

---

51.1 Raw Data Preservation

Where licensing permits, the original imported dataset should be retained or otherwise reproducibly referenced.

This allows debugging when:

source data

and:

normalized data

do not match expectations.

---

52. Data Validation

Before career data becomes active, validation should check:

- missing IDs
- duplicate careers
- invalid relationships
- missing names
- malformed values
- invalid ranges
- unsupported categories
- broken references
- stale records

The import should fail safely when critical validation errors occur.

---

53. Data Versioning

Each published career dataset should have a version.

Example:

careerDataVersion = 2026.08

A user assessment/match should be associated with the career-data version used during calculation where necessary.

---

54. Career Data Updates

Updates should not automatically overwrite all active data without validation.

Preferred process:

New Dataset
     ↓
Import
     ↓
Validate
     ↓
Compare With Current
     ↓
Review Changes
     ↓
Publish

Significant changes should be auditable.

---

55. Career Data Deprecation

Careers may eventually become:

ACTIVE
UPDATED
MERGED
DEPRECATED
ARCHIVED

A deprecated career should not necessarily disappear immediately.

Existing saved careers and historical matches may still reference it.

---

56. Career Data Quality Score

The system may eventually maintain an internal quality indicator for career records.

Potential factors:

Completeness
Source Reliability
Recency
Relationship Coverage
Editorial Review
Regional Coverage

This should initially remain an internal operational metric.

---

57. Career Data MVP

The MVP does not require a massive global career database.

The initial objective is:

Reliable
Structured
Explainable
Useful

rather than:

Maximum Number of Careers

A smaller high-quality dataset is preferable to thousands of poorly mapped careers.

---

58. Career Data Migration From Legacy System

Legacy career data should follow:

Legacy Career Data
       ↓
Inventory
       ↓
Source Identification
       ↓
Duplicate Detection
       ↓
Field Mapping
       ↓
Normalization
       ↓
Validation
       ↓
Import

Legacy records should not automatically become canonical Career Finder records.

Each record must be evaluated against the new career model.

---

59. Career Data Acceptance Criteria

The career-data subsystem is ready for MVP when:

- careers have stable internal IDs
- career names are normalized
- career pages can retrieve structured records
- interests are mapped
- work-style data is mapped where available
- skills are mapped
- requirements are represented
- sources are identified
- data versions are recorded
- invalid records are rejected
- relationships are validated
- career matching can consume the normalized model

---

60. Career Data Long-Term Direction

The eventual Career Finder career-data architecture should become:

                CAREER KNOWLEDGE LAYER
                         │
       ┌─────────────────┼─────────────────┐
       ▼                 ▼                 ▼
 Occupational       Labor Market      Editorial
   Data                 Data            Content
       │                 │                 │
       └─────────────────┼─────────────────┘
                         ▼
                 Normalized Model
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
     Matching        Comparison         Search
        │                │                │
        └────────────────┼────────────────┘
                         ▼
                   User Experience

This allows Career Finder to evolve from a career quiz into a structured career-intelligence platform without making the assessment engine responsible for the entire product.


61. AI Architecture

AI is an important part of the future Career Finder product, but it must remain subordinate to the deterministic product systems.

The fundamental architecture is:

User
 │
 ▼
Career Finder Application
 │
 ├── Assessment Engine
 │
 ├── Profile Engine
 │
 ├── Matching Engine
 │
 ├── Career Data
 │
 └── AI Service
          │
          ▼
      AI Provider

The AI layer consumes structured Career Finder data.

It should not independently reconstruct the user's profile from raw assessment answers unless explicitly required for a separate feature.

---

62. AI Design Principle

The primary rule is:

«AI explains and assists; deterministic systems measure and decide.»

Therefore:

Assessment
      ↓
Deterministic Scoring
      ↓
Career Profile
      ↓
Deterministic Matching
      ↓
Structured Evidence
      ↓
AI Explanation

Not:

Assessment
      ↓
AI
      ↓
"Your personality is..."
      ↓
Career recommendations

---

63. AI Responsibilities

AI may eventually perform the following functions:

Explain

Explain why a career appears in the user's results.

Compare

Compare two or more careers using structured career data.

Plan

Help turn a career goal into actionable steps.

Coach

Answer questions about career exploration and preparation.

Adapt

Explain alternative pathways based on user constraints.

Summarize

Turn structured information into concise, understandable language.

---

64. AI Non-Responsibilities

AI must not silently control:

- assessment scoring
- personality dimensions
- interest scores
- career-match ranking
- career-data facts
- user eligibility
- subscription state
- access control
- financial calculations

Those systems must remain deterministic.

---

65. AI Service Abstraction

The application should not directly couple the business logic to a single AI provider.

Conceptually:

AIService
   │
   ├── generateExplanation()
   ├── compareCareers()
   ├── generateRoadmap()
   └── answerCareerQuestion()

Provider-specific implementations can then sit underneath.

Example:

AIService
   │
   ├── OpenAIProvider
   ├── AnthropicProvider
   └── OtherProvider

The exact provider strategy can be selected later.

---

66. Provider Independence

The product should avoid scattering provider-specific API calls throughout the application.

Avoid:

CareerPage
   ↓
OpenAI API

Prefer:

CareerPage
   ↓
Career AI Service
   ↓
AI Provider

This provides:

- easier provider changes
- centralized error handling
- centralized cost controls
- testing
- logging
- prompt versioning

---

67. AI Context Architecture

AI should receive structured context rather than unrestricted database access.

Example:

AI Request Context
├── User Profile
├── Career Match
├── Match Evidence
├── Career Data
├── User Goals
└── User Question

The AI service should construct this context deliberately.

---

68. Structured AI Context

For a career explanation, the context might conceptually contain:

User Profile
- Harmony: 72
- Exploration: 84
- Drive: 67
- Structure: 41

Interests
- Investigative: 88
- Enterprising: 81
- Artistic: 67

Career
- Software Developer

Match Evidence
- Strong investigative interest
- Strong autonomy preference
- Strong problem-solving alignment

The model then explains the evidence.

---

69. AI Must Not Invent Evidence

The AI must never claim:

"You scored highly in mathematics."

unless the structured profile actually contains evidence supporting that statement.

Likewise, it should not invent:

- skills
- qualifications
- salary figures
- employment statistics
- career requirements
- user experience

when those facts are unavailable.

---

70. Grounded AI Responses

AI responses should be grounded in Career Finder's structured data.

Conceptually:

Structured Data
      ↓
Evidence Builder
      ↓
AI Context
      ↓
LLM
      ↓
Validation
      ↓
Response

This significantly reduces hallucination risk.

---

71. AI Response Types

The AI layer should support explicit response modes.

Potential modes:

EXPLAIN
COMPARE
PLAN
COACH
ALTERNATIVE
SUMMARIZE

This makes behavior easier to control than one generic "career chatbot."

---

72. Explain Mode

Example request:

Why does Software Engineering match me?

The system should provide:

Career
↓
Match Evidence
↓
AI Explanation

The AI should explain the strongest evidence first.

---

73. Compare Mode

Example:

Compare Software Engineering and Data Analysis for me.

The application should first calculate structured comparison data.

Then AI can explain the differences.

Career A
Career B
     ↓
Comparison Engine
     ↓
Structured Comparison
     ↓
AI Interpretation

The AI should not calculate the underlying match scores itself.

---

74. Plan Mode

Example:

How can I start moving toward this career?

The system can provide:

Current Profile
+
Career Requirements
+
Skill Gaps
+
User Constraints

Then AI can turn those facts into a readable plan.

---

75. Coach Mode

The AI career coach should operate as an interactive assistant.

Possible questions:

What should I learn first?
How do I get experience?
What projects should I build?
What if I don't have a degree?
How can I tell if this career is really for me?
What related careers should I explore?

The AI should respond using Career Finder's data where appropriate.

---

76. Alternative Path Mode

A particularly valuable feature is helping users discover alternatives.

For example:

"I don't want to spend four years at university."

The AI can inspect:

Career Requirements
+
Regional Education Data
+
User Constraints

and explain possible pathways.

It must distinguish:

Required

from:

Common

and:

Alternative

pathways.

---

77. AI Roadmap Generation

Roadmaps should not be entirely generated from nothing.

The deterministic system should establish:

Target Career
Required Skills
Current Skills
Skill Gaps
Known Constraints

Then:

AI
 ↓
Organizes and explains the roadmap

Example:

Current
 ↓
Excel
 ↓
SQL
 ↓
Statistics
 ↓
Data Visualization
 ↓
Projects
 ↓
Portfolio

The underlying required skills remain controlled by Career Finder data.

---

78. AI Roadmap Validation

AI-generated roadmaps should be checked for obvious structural problems.

For example:

- missing prerequisite skills
- impossible ordering
- irrelevant skills
- duplicate steps
- unsupported claims
- excessive complexity

The system should not blindly store every generated roadmap as canonical career data.

---

79. AI Prompt Management

Prompts should be treated as versioned application assets.

Example:

prompts/
├── explain-career.v1
├── compare-careers.v1
├── roadmap.v1
└── coach.v1

When prompts change:

v1
↓
v2

the application should know which version produced a response.

---

80. AI Output Contracts

Where possible, AI should return structured output.

For example:

{
  "summary": "...",
  "reasons": [],
  "considerations": [],
  "nextSteps": []
}

The exact schema will be defined during implementation.

Structured output makes AI responses easier to:

- validate
- render
- test
- localize
- modify

---

81. AI Output Validation

AI responses should pass through validation before reaching the user where structured output is expected.

Conceptually:

AI
 ↓
Parse
 ↓
Schema Validation
 ↓
Safety / Policy Checks
 ↓
Business Rule Checks
 ↓
Render

Invalid output should trigger:

retry
fallback
or
graceful error

rather than breaking the application.

---

82. AI Fallback Strategy

AI should never become a single point of failure for the core product.

If AI is unavailable:

Assessment
✓
Profile
✓
Career Matching
✓
Career Pages
✓
Comparison
✓

should continue working.

Only AI-enhanced functionality should degrade.

For example:

"AI explanation is temporarily unavailable."

The deterministic match explanation can still be displayed.

---

83. AI Cost Control

AI calls can become one of the largest variable costs.

Therefore the architecture should support:

Caching
Rate Limiting
Usage Limits
Model Selection
Prompt Compression
Context Reduction
Response Reuse

---

84. AI Caching

Some AI responses are reusable.

For example, a general explanation of:

"What does a data analyst do?"

does not need to be regenerated for every user.

Potentially cache:

Career Overview
Career Explanation
General Skill Explanation
General Education Explanation

Personalized responses should be cached more carefully.

---

85. Personalized AI Caching

A personalized response may depend on:

User Profile Version
Career
Career Data Version
Prompt Version
Model Version

Therefore the cache key should incorporate relevant versions.

Conceptually:

userProfileVersion
+
careerId
+
careerDataVersion
+
promptVersion
+
modelVersion

---

86. AI Rate Limiting

AI access should be controlled by:

User
Plan
Feature
Time Window
Usage

Example:

Free
Limited AI explanations

Premium
Higher AI allowance

The actual limits should be determined through usage and cost experiments.

---

87. AI Usage Tracking

Every AI request should eventually be observable.

Potential metadata:

AI Request
├── userId
├── feature
├── provider
├── model
├── promptVersion
├── inputTokens
├── outputTokens
├── latency
├── status
└── estimatedCost

Sensitive user content should not be logged unnecessarily.

---

88. AI Privacy

The AI layer must follow data-minimization principles.

Only information required for the requested feature should be passed to the model.

For example, a career explanation does not need:

User Email
Password
Authentication Tokens
Payment Information

The AI context should contain only relevant career-profile information.

---

89. AI Conversation Architecture

Future AI conversations may become persistent.

Conceptually:

AIConversation
├── id
├── userId
├── context
├── createdAt
└── messages

However, persistent AI conversation history should not be required for the MVP.

The initial implementation should favor stateless requests where practical.

---

90. AI Coach Boundaries

The AI coach should be positioned as a career exploration assistant, not an authority that determines a user's future.

Preferred language:

"You could consider..."
"Based on your profile..."
"One possible path is..."
"These careers may be worth exploring..."

Avoid:

"You should definitely..."
"This is the only career for you..."
"You will succeed at..."

---

91. AI and Assessment Integrity

The assessment result must remain reproducible without AI.

Given:

Assessment Version
+
Responses
+
Scoring Version

the system should be capable of generating the same profile regardless of AI availability.

This is a core architectural requirement.

---

92. AI and Matching Integrity

Similarly:

Career Profile
+
Career Data Version
+
Matching Version

must produce deterministic career-match results.

AI can explain those results but must not silently reorder them.

---

93. AI Feature Rollout

AI should be introduced incrementally.

Stage 1

Deterministic career explanations.

Stage 2

AI-powered explanations.

Stage 3

Career comparison assistant.

Stage 4

Personalized roadmap assistant.

Stage 5

Interactive career coach.

Stage 6

Advanced adaptive career planning.

This allows AI costs and user value to be measured at every stage.

---

94. AI MVP Requirements

The MVP does not require a full conversational AI coach.

The minimum AI architecture should support:

AI Provider Abstraction
Prompt Versioning
Structured Context
Career Explanation
Basic Error Handling
Usage Tracking
Rate Limiting
Fallback Behavior

The full coach can be added after the core product has validated demand.

---

95. AI Acceptance Criteria

The AI subsystem is ready for production use when:

- it cannot modify assessment scores
- it cannot silently modify career rankings
- responses are grounded in structured data
- provider access is abstracted
- prompts are versioned
- structured outputs are validated
- failures have graceful fallbacks
- usage is measurable
- costs are measurable
- rate limits exist
- unnecessary personal data is not transmitted
- AI-generated claims can be traced to available evidence where applicable

---

96. Final AI Architecture

The resulting architecture should be:

                         CAREER FINDER
                              │
                 ┌────────────┴────────────┐
                 │                         │
          Deterministic Core             AI Layer
                 │                         │
       ┌─────────┼─────────┐        ┌──────┼──────┐
       ▼         ▼         ▼        ▼      ▼      ▼
 Assessment   Profile   Matching  Explain Compare Coach
       │         │         │        │      │      │
       └─────────┼─────────┘        └──────┼──────┘
                 │                         │
                 ▼                         ▼
          Structured Data            AI Provider
                 │
                 ▼
          Career Knowledge

The deterministic core remains the source of truth.

AI becomes the conversational intelligence layer on top of that foundation.


97. SaaS Application Architecture

Career Finder should be migrated from the legacy application structure into a modular SaaS architecture.

The target system is:

                         CAREER FINDER
                              │
             ┌────────────────┼────────────────┐
             │                │                │
             ▼                ▼                ▼
         Web App           API Layer       Background Jobs
             │                │                │
             └────────────────┼────────────────┘
                              │
                    ┌─────────┼─────────┐
                    ▼         ▼         ▼
                Database    Cache    File Storage
                              │
                    ┌─────────┴─────────┐
                    ▼                   ▼
              Career Data           AI Services

The architecture should remain simple enough for an MVP while allowing the product to scale without requiring a complete rewrite.

---

98. Architecture Principles

The migration should follow these principles:

1. Separate presentation from business logic.
2. Keep assessment scoring deterministic.
3. Keep career matching deterministic.
4. Keep external integrations behind adapters.
5. Keep database access behind domain/application services where appropriate.
6. Avoid unnecessary microservices.
7. Prefer modular monolith architecture for MVP.
8. Design clear boundaries before introducing distributed infrastructure.
9. Make important business rules testable without the web application.
10. Keep infrastructure replaceable where practical.

---

99. Recommended MVP Architecture

The initial SaaS should use a modular monolith rather than multiple independent backend services.

Conceptually:

                 Career Finder Application
                          │
       ┌──────────────────┼──────────────────┐
       │                  │                  │
       ▼                  ▼                  ▼
   Assessment          Careers            Users
     Module             Module            Module
       │                  │                  │
       ▼                  ▼                  ▼
   Matching            Profile           Billing
     Module             Module            Module
       │                  │                  │
       └──────────────────┼──────────────────┘
                          ▼
                       Database

This provides strong internal boundaries without introducing unnecessary deployment complexity.

---

100. Why Not Microservices Yet

The MVP does not require separate services for:

Assessment Service
Career Service
AI Service
Matching Service
Profile Service
Billing Service

Doing so too early would create:

- deployment complexity
- networking overhead
- duplicated configuration
- difficult local development
- harder debugging
- more infrastructure cost

The system should first establish strong module boundaries inside one application.

Services can be extracted later if actual scale requires it.

---

101. Frontend Architecture

The frontend should be responsible for:

- rendering the interface
- navigation
- assessment interactions
- loading states
- form validation
- visualizations
- career pages
- profile pages
- comparison views
- account interface
- responsive behavior

The frontend should not contain authoritative scoring or matching rules.

For example, avoid:

frontend:
  if selectedOption === "x":
      drive += 1

Instead:

frontend
   ↓
submit response
   ↓
backend
   ↓
scoring engine

---

102. Frontend Application Areas

The target application should eventually contain:

/
├── Landing
├── Assessment
├── Results
├── Careers
├── Career Detail
├── Compare
├── Dashboard
├── Profile
├── Roadmap
├── Saved Careers
├── AI Coach
├── Account
└── Billing

Not every route must be implemented in the first release.

---

103. Public vs Authenticated Experience

Career Finder should deliberately separate public discovery from authenticated functionality.

Public

Users should be able to access:

- landing page
- assessment
- basic results
- career pages
- selected career information
- shareable results

Authenticated

Accounts unlock:

- saved assessment
- saved careers
- profile history
- career comparisons
- personalized roadmap
- progress tracking
- premium features
- AI usage

This supports the product's free-to-paid funnel.

---

104. Assessment Session

The assessment must support users who are not authenticated.

Conceptually:

Anonymous User
      ↓
Start Assessment
      ↓
Assessment Session
      ↓
Complete
      ↓
Results
      ↓
Optional Account Creation

This avoids forcing account creation before the user experiences the product.

---

105. Assessment Persistence

Assessment attempts should be persisted independently of the UI.

Conceptually:

Assessment
     │
     ▼
AssessmentAttempt
     │
     ├── Responses
     ├── Version
     ├── Status
     └── Result

Possible statuses:

NOT_STARTED
IN_PROGRESS
COMPLETED
ABANDONED

---

106. Anonymous Assessment Identity

Anonymous users need a temporary identity for assessment persistence.

Potential implementation approaches include:

Session Identifier
Temporary Assessment Token
Signed Anonymous Identifier

The implementation should avoid placing sensitive information directly into client-controlled identifiers.

---

107. Account Conversion

After completing the assessment, the user can be encouraged to create an account.

Conceptually:

Assessment Complete
       ↓
View Results
       ↓
"Save your career profile"
       ↓
Create Account
       ↓
Attach Anonymous Attempt
       ↓
User Profile

The assessment should not be lost when the user creates the account.

---

108. User Module

The user module owns:

- account identity
- profile metadata
- authentication state
- account lifecycle
- preferences
- onboarding state

It should not own assessment scoring.

---

109. Authentication

Authentication should be implemented using established authentication mechanisms rather than custom password handling.

Potential methods:

Email + Password
Magic Link
OAuth
Passkeys

The MVP should use the smallest reliable authentication surface required.

Authentication provider selection should be finalized during Phase 3 implementation based on:

- framework compatibility
- cost
- developer experience
- security
- user experience

---

110. Authorization

Authentication answers:

Who is this user?

Authorization answers:

What can this user access?

Career Finder should explicitly model authorization.

Examples:

Free User
Premium User
Administrator
Content Manager

Future:

Counselor
School Administrator
Student
Organization Administrator

---

111. Feature Entitlements

Premium functionality should not be scattered through frontend conditionals.

Prefer a centralized entitlement model.

Conceptually:

User
 ↓
Subscription
 ↓
Plan
 ↓
Entitlements

Example:

free:
  assessment
  basic-profile
  top-careers

premium:
  comparison
  skill-gap
  roadmap
  advanced-ai
  unlimited-saves

---

112. Profile Module

The profile module should aggregate:

Work Style
Interests
Preferences
Goals
Constraints
Career Matches
Saved Careers
Roadmaps

It should not duplicate the raw assessment responses unnecessarily.

The raw assessment remains the source for historical attempts.

---

113. Profile History

Users should eventually be able to retain multiple assessment attempts.

Conceptually:

User
 │
 ├── Assessment Attempt #1
 ├── Assessment Attempt #2
 └── Assessment Attempt #3

Each attempt retains:

Assessment Version
Scoring Version
Responses
Profile Result
Created At

This enables future profile comparison.

---

114. Profile Versioning

A calculated profile should identify the rules used to generate it.

Conceptually:

Profile
├── assessmentVersion
├── scoringVersion
├── careerDataVersion
└── matchingVersion

This becomes important when the system evolves.

---

115. Career Module

The career module owns:

- career records
- career pages
- skills
- interests
- work styles
- requirements
- related careers
- career metadata
- career-data versions

It should not own user-specific career matches.

---

116. Matching Module

The matching module owns:

- matching rules
- scoring weights
- career ranking
- match strength
- match evidence
- matching versions

It consumes:

Career Profile
+
Career Data

and produces:

Career Matches

---

117. Saved Career Module

Saving a career should be a user-level relationship.

Conceptually:

User
 │
 └── SavedCareer
       ├── careerId
       ├── createdAt
       └── metadata

Future metadata could include:

notes
status
priority

---

118. Career Comparison Module

The comparison system should allow a user to select multiple careers.

Example:

Compare
 ├── Software Developer
 ├── Data Analyst
 └── Product Designer

The comparison engine should retrieve normalized data and generate comparable dimensions.

The MVP may initially limit the number of careers compared simultaneously.

---

119. Roadmap Module

The roadmap module should represent:

Career Goal
 ↓
Required Skills
 ↓
Current Skills
 ↓
Skill Gaps
 ↓
Learning/Action Steps
 ↓
Progress

The roadmap should belong to the user rather than the career itself.

A career can provide the template.

The user's roadmap provides the personalization.

---

120. Skill Module

Skills should have stable internal identifiers.

Conceptually:

Skill
├── id
├── name
├── category
├── description
└── metadata

Career relationships:

CareerSkill

User relationships:

UserSkill

Gap calculation:

CareerSkill
      ↓
compare
      ↑
UserSkill
      ↓
SkillGap

---

121. API Architecture

The API should expose application capabilities rather than database tables directly.

Prefer:

POST /assessment-attempts
POST /assessment-attempts/:id/responses
POST /assessment-attempts/:id/complete
GET  /profiles/me
GET  /careers
GET  /careers/:slug
POST /saved-careers

over exposing unrestricted CRUD operations for every database entity.

---

122. API Layer Responsibilities

The API layer should handle:

- authentication
- authorization
- input validation
- request parsing
- application-service invocation
- response serialization
- error handling
- rate limiting

Business logic should live below the route/controller layer.

---

123. Application Service Layer

The application service layer coordinates use cases.

Examples:

StartAssessment
SubmitAssessmentResponse
CompleteAssessment
GetCareerProfile
GenerateCareerMatches
SaveCareer
CompareCareers
GenerateRoadmap
AskCareerCoach

This creates clear boundaries around product behavior.

---

124. Domain Layer

The domain layer should contain core business rules.

Examples:

ScoringEngine
MatchingEngine
ProfileCalculator
CareerComparisonEngine
SkillGapCalculator

These components should be testable without HTTP or database infrastructure.

---

125. Repository Layer

Database access should be isolated behind repositories or equivalent data-access abstractions where useful.

Conceptually:

Application Service
       ↓
Repository
       ↓
Database

Examples:

AssessmentRepository
CareerRepository
ProfileRepository
UserRepository
SavedCareerRepository

The exact repository pattern should be applied pragmatically rather than mechanically to every table.

---

126. Database Architecture

The MVP should use a relational database because Career Finder contains many structured relationships.

Core relationships include:

Users
Assessments
Questions
Responses
Profiles
Careers
Skills
Interests
Matches
Saved Careers
Roadmaps

A relational model provides strong integrity for these relationships.

---

127. Database Design Principle

The database should model the new product rather than reproduce the legacy JSON structure.

Do not create:

legacy_traits.json
legacy_careers.json
legacy_results.json

as the permanent architecture.

Instead create normalized domain entities.

---

128. Initial Entity Groups

Identity

User
Account
Session
Subscription

Assessment

Assessment
AssessmentVersion
Question
QuestionOption
Response
AssessmentAttempt

Profile

WorkStyleProfile
InterestProfile
PreferenceProfile
GoalProfile
CareerProfile

Career

Career
Skill
Interest
WorkStyle
CareerSkill
CareerInterest
CareerWorkStyle
CareerRequirement

Matching

CareerMatch
MatchEvidence

User Journey

SavedCareer
SkillGap
CareerRoadmap
RoadmapStep

Additional entities can be introduced as requirements become real.

---

129. Database Migrations

All database schema changes must be version-controlled.

The repository should contain migration files.

Conceptually:

migrations/
├── 001_initial_schema
├── 002_assessment_versioning
├── 003_career_data
└── ...

The actual migration tooling will depend on the selected stack.

---

130. Data Integrity

Database constraints should enforce important invariants.

Examples:

- unique user identifiers
- unique career slugs
- unique external career identifiers where applicable
- valid foreign keys
- unique assessment ordering
- valid relationship records

Business rules should not depend exclusively on frontend validation.

---

131. Caching

Caching should be introduced only where it provides measurable value.

Likely candidates include:

Public Career Pages
Career Search
Career Data
Static Assessment Definitions
AI Responses

User-specific mutable data should be cached cautiously.

---

132. Background Jobs

Some operations should eventually run asynchronously.

Potential jobs:

Career Data Import
Career Data Validation
AI Roadmap Generation
Email Notifications
Analytics Aggregation
Search Index Updates

The MVP should not introduce a job queue until there is a real asynchronous workload requiring it.

---

133. File Storage

The assessment is image-driven, so image assets need proper storage.

Potential assets:

Assessment Images
Career Illustrations
User Avatars
Share Images

Static assets should be separated from application logic.

User-uploaded assets should have stricter access controls.

---

134. Image Architecture

Assessment images should have stable identifiers.

Conceptually:

QuestionOption
      ↓
Asset
      ↓
Storage Provider

Avoid hardcoding storage URLs throughout the application.

This allows the storage provider to change without modifying assessment content.

---

135. Frontend State Management

Only state that genuinely needs client-side persistence should be maintained globally.

Examples:

Assessment Session
Authentication State
UI Preferences

Server-owned data such as:

Career Matches
Profile
Saved Careers

should remain synchronized with the backend.

The exact frontend state-management technology should follow the framework selected for the migration.

---

136. Assessment Offline/Refresh Resilience

Because the assessment is mobile-first, accidental refreshes or temporary network failures should not destroy progress.

The system should consider:

Local temporary state
+
Server persistence

Responses should be saved progressively where practical.

The implementation must prevent duplicate submissions.

---

137. Idempotency

Important mutation endpoints should support idempotent behavior where appropriate.

For example:

Complete Assessment

should not create multiple conflicting results if the client retries the request.

Similarly, response submission should avoid accidental duplicate records.

---

138. Error Handling

Errors should be classified.

Examples:

Validation Error
Authentication Error
Authorization Error
Not Found
Conflict
Rate Limited
External Service Failure
Internal Error

The API should return predictable error structures.

The frontend should translate them into user-friendly messages.

---

139. Observability

The MVP should provide basic observability.

Track:

- request errors
- assessment completion failures
- matching failures
- database errors
- AI failures
- external data-import failures
- performance metrics

Logs should avoid unnecessary sensitive information.

---

140. Security Requirements

The migration must include:

- secure authentication
- authorization checks
- input validation
- server-side entitlement enforcement
- protection against injection
- secure session handling
- rate limiting
- secure secret management
- safe file handling
- appropriate CORS configuration
- production HTTPS

Security should be part of the architecture rather than a post-MVP cleanup task.

---

141. Environment Configuration

Configuration must be separated from source code.

Examples:

DATABASE_URL
AUTH_SECRET
AI_PROVIDER_KEY
STORAGE credentials
PAYMENT credentials

Secrets must never be committed to version control.

Separate environments should eventually exist for:

development
staging
production

---

142. Target Project Structure

The exact framework may change, but the conceptual project structure should resemble:

career-finder/
│
├── apps/
│   └── web/
│
├── packages/
│   ├── domain/
│   ├── assessment/
│   ├── matching/
│   ├── careers/
│   ├── ai/
│   └── shared/
│
├── database/
│   ├── migrations/
│   └── seeds/
│
├── data/
│   ├── assessment/
│   └── careers/
│
├── scripts/
│   ├── import-careers/
│   └── validate-data/
│
├── tests/
│
├── docs/
│
└── ...

This is an architectural target, not a requirement to create a monorepo immediately.

---

143. Module Boundaries

The following boundaries should be maintained:

Assessment
    ↓
Profile
    ↓
Matching
    ↓
Careers

with:

AI

operating as an enhancement layer.

Avoid circular dependencies such as:

Assessment → AI → Matching → Assessment

---

144. Dependency Direction

A preferred dependency direction is:

UI
 ↓
Application
 ↓
Domain
 ↓
Infrastructure

Infrastructure should implement interfaces required by the application/domain rather than becoming the source of business rules.

---

145. Testing Architecture

Testing should occur at several levels.

Unit

Test:

Scoring
Matching
Profile calculations
Skill gaps
Comparison

Integration

Test:

API
Database
Authentication
Repositories
External data adapters

End-to-End

Test:

Landing
Assessment
Results
Account creation
Career exploration
Saving
Premium flow

---

146. Technical Migration Acceptance Criteria

The SaaS architecture is considered ready for the next implementation stage when:

- frontend and backend responsibilities are defined
- assessment logic is separated from UI
- scoring is deterministic
- matching is deterministic
- career data is normalized
- authentication boundaries are defined
- authorization boundaries are defined
- premium entitlements are centralized
- database entities are identified
- migrations are version-controlled
- external integrations have adapters
- AI is isolated from the deterministic core
- errors are predictable
- environment secrets are separated
- critical business logic is testable

---

147. Target Runtime Architecture

The resulting MVP architecture should conceptually look like:

                         USER
                          │
                          ▼
                     WEB CLIENT
                          │
                          ▼
                       API
                          │
             ┌────────────┼────────────┐
             ▼            ▼            ▼
        Assessment      Profile      Careers
             │            │            │
             └────────────┼────────────┘
                          ▼
                       Matching
                          │
             ┌────────────┼────────────┐
             ▼            ▼            ▼
          Database       Cache      AI Service
             │                         │
             ▼                         ▼
       Career Knowledge          AI Provider

The critical distinction is that the database, assessment engine, profile engine, career-data layer, and matching engine form the product's deterministic foundation.

AI, caching, payments, analytics, and other infrastructure sit around that foundation.

This architecture gives Career Finder enough structure to migrate safely without prematurely turning the MVP into a distributed enterprise system.


148. Legacy Migration Strategy

The migration should not begin by immediately deleting the existing application.

The old application contains valuable assets:

- assessment questions
- traits
- images
- career mappings
- UI patterns
- scoring knowledge
- existing user-flow assumptions
- potentially reusable components

The objective is therefore:

OLD CAREER FINDER
       │
       ▼
AUDIT
       │
       ▼
CLASSIFY
       │
       ▼
EXTRACT
       │
       ▼
TRANSFORM
       │
       ▼
VALIDATE
       │
       ▼
NEW CAREER FINDER

The old application becomes a source of product knowledge rather than the architecture for the new product.

---

149. Migration Principle

The migration should follow:

«Preserve valuable content and validated behavior; replace weak architecture and outdated product assumptions.»

This means we should not perform a blind rewrite.

Every significant legacy component should receive a migration decision.

---

150. Legacy Classification

Every existing file or significant component should be classified as one of:

KEEP
MIGRATE
REWRITE
TRANSFORM
REPLACE
ARCHIVE
DELETE

KEEP

The existing implementation remains useful.

MIGRATE

The implementation can move into the new architecture with limited modification.

REWRITE

The functionality remains useful but the implementation should be replaced.

TRANSFORM

The underlying content remains useful but its structure or meaning must change.

REPLACE

A completely new implementation is required.

ARCHIVE

The file is retained for historical reference but is not part of the application.

DELETE

The file has no remaining value.

---

151. Migration Inventory

Before implementation, create a complete legacy inventory.

Example:

Legacy Inventory
├── Pages
├── Components
├── Styles
├── Assessment
├── Traits
├── Questions
├── Images
├── Career Data
├── Scoring
├── State
├── Utilities
├── API
├── Configuration
├── Dependencies
└── Documentation

Every significant item should eventually have a migration status.

---

152. Legacy Assessment Migration

The old assessment is one of the most valuable assets.

The migration should preserve:

30 rounds
4 choices per round
Visual presentation
Multi-selection
Progressive interaction

However, the underlying content should be redesigned.

Therefore:

Legacy Assessment UI
        │
        ├── interaction pattern → PRESERVE
        ├── 30-round structure → PRESERVE
        ├── visual concept → PRESERVE
        ├── trait wording → AUDIT
        ├── scoring → REPLACE
        └── category model → TRANSFORM

---

153. Assessment Content Migration

The existing assessment content should be exported into a temporary migration dataset.

Conceptually:

legacy/
└── assessment-export.json

This dataset should not automatically become production data.

Instead:

Legacy Content
      ↓
Migration Dataset
      ↓
Content Audit
      ↓
Redesign
      ↓
New Assessment Dataset

---

154. Trait Migration

Each legacy trait should be evaluated individually.

Possible outcomes:

KEEP
REWRITE
REPLACE
REMOVE
MERGE

The migration should preserve traceability.

For example:

Legacy Trait ID
      ↓
New Trait ID

This makes it possible to understand how old content became new content.

---

155. Trait Metadata

The new trait model should eventually support metadata such as:

Trait
├── id
├── name
├── description
├── dimension contributions
├── interest contributions
├── positive/neutral wording
├── version
└── status

The exact schema will be finalized during database design.

---

156. Question Migration

Legacy questions should not simply be copied into the new system.

Each question should be evaluated for:

- clarity
- neutrality
- behavioral specificity
- ambiguity
- redundancy
- stereotype risk
- measurement value
- visual suitability

Questions that fail the criteria should be rewritten or replaced.

---

157. Image Migration

Existing assessment images should be audited separately.

Each image should receive a status:

KEEP
REPLACE
REDESIGN
REMOVE

The audit should consider:

- relevance
- quality
- licensing
- accessibility
- cultural neutrality
- stereotype risk
- visual consistency

---

158. Image Licensing

No legacy image should automatically be assumed to be safe for commercial use.

Before production:

Image
 ↓
Source identified
 ↓
License verified
 ↓
Commercial-use status confirmed
 ↓
Attribution requirement recorded

Images without acceptable licensing should be replaced.

---

159. Assessment Data Versioning

The new assessment must be versioned.

Conceptually:

Assessment
├── v1
├── v2
└── v3

A completed attempt should retain the version it used.

This is essential because changing questions or scoring later should not silently rewrite historical results.

---

160. Scoring Migration

The legacy scoring system should not be migrated as-is.

Old:

selected trait
     ↓
+1 category

New:

response
     ↓
weighted signals
     ↓
work-style dimensions
     +
interest dimensions
     ↓
profile

The old scoring engine should therefore be treated as historical reference material.

---

161. Career Mapping Migration

Legacy career mappings should also be treated as source material.

For each existing mapping:

Legacy Trait
     ↓
Legacy Career

we should determine:

Why was this career associated?
Is the association still useful?
What structured evidence supports it?
What career data can replace it?

This prevents old assumptions from silently becoming new product logic.

---

162. Career Data Transformation

The target structure should be:

Career
 ├── Interests
 ├── Skills
 ├── Work Styles
 ├── Education
 ├── Requirements
 ├── Environment
 ├── Technology
 └── Related Careers

rather than:

Trait
 ↓
Career

---

163. Legacy UI Migration

The visual identity of the old application should be separated from its implementation.

For each component ask:

Is this interaction valuable?
Is this visual pattern valuable?
Is this implementation reusable?

Possible result:

Interaction → KEEP
Visual concept → KEEP
Component code → REWRITE

This is preferable to blindly copying old components.

---

164. Legacy State Migration

Legacy client-side state should be audited.

Identify:

Assessment State
User State
Result State
Career State
UI State

Then determine whether each state should become:

Server state
Client state
Persistent database state
Temporary session state

---

165. Legacy API Migration

Existing APIs should be inventoried before replacement.

For each endpoint:

Endpoint
├── Purpose
├── Consumers
├── Data returned
├── Authentication
├── Dependencies
└── Migration status

Possible outcomes:

KEEP
REWRITE
MERGE
REPLACE
DELETE

---

166. Legacy Database/Data Migration

If the current application has a database, its schema should be documented before modification.

If it relies primarily on JSON/static files, those files should be treated as legacy content sources.

The migration should not assume that the legacy storage model is suitable for SaaS.

---

167. Data Migration Pipeline

The preferred process is:

Legacy Data
    ↓
Extract
    ↓
Normalize
    ↓
Transform
    ↓
Validate
    ↓
Import
    ↓
Verify

The transformation step should be explicit and repeatable.

---

168. Repeatable Migration Scripts

Data migration should be scriptable.

Avoid manually copying hundreds of records.

Instead create migration tooling conceptually similar to:

scripts/
├── export-legacy
├── transform-assessment
├── transform-careers
├── validate-data
└── import-data

This allows the migration to be repeated safely.

---

169. Data Validation

Before importing transformed data, validate:

- required fields
- unique identifiers
- references
- missing relationships
- invalid values
- duplicate records
- malformed content
- image references

The migration should fail loudly when critical data is invalid.

---

170. Migration Mapping Tables

Where legacy IDs differ from new IDs, maintain explicit mappings.

Example:

legacy_trait_id
        ↓
new_trait_id

and:

legacy_career_id
        ↓
new_career_id

This makes migration traceable.

---

171. Compatibility Layer

A temporary compatibility layer may be useful during migration.

Conceptually:

Legacy Format
      ↓
Compatibility Adapter
      ↓
New Domain Model

This allows legacy content to be inspected or tested without forcing the new domain model to understand legacy structures permanently.

---

172. Avoid Permanent Compatibility Debt

Compatibility code should have an explicit expiration point.

Each compatibility component should have:

Purpose
Owner
Migration dependency
Removal condition
Target removal phase

Once migration is complete:

Compatibility Layer
        ↓
REMOVE

---

173. Parallel Development

Where practical, the old and new systems can temporarily coexist.

Example:

Legacy App
     │
     └── reference

New App
     │
     └── active development

The legacy system should not continue receiving major feature development during migration.

Only critical fixes should be made.

---

174. Feature Freeze

Before the final migration begins, establish a legacy feature freeze.

After the freeze:

Legacy
 ├── Critical bug fixes
 └── Security fixes

New
 ├── Architecture
 ├── Features
 └── Product redesign

This prevents the two systems from continuously diverging.

---

175. Migration Phases

The technical migration should follow these broad phases:

Phase A
Legacy Audit

Phase B
Architecture Foundation

Phase C
Assessment Migration

Phase D
Career Data Migration

Phase E
User/Profile Migration

Phase F
SaaS Features

Phase G
AI Integration

Phase H
Validation

Phase I
Cutover

Phase J
Legacy Removal

---

176. Phase A — Legacy Audit

Deliverables:

Legacy inventory
Architecture map
Dependency map
Data inventory
Assessment inventory
Career inventory
Asset inventory
Migration classification

No major production rewrite should begin before this audit is sufficiently complete.

---

177. Phase B — Architecture Foundation

Build:

Project structure
Environment configuration
Database
Migration system
Authentication foundation
API foundation
Domain modules
Testing foundation
Logging

At this point, the application does not need every feature.

The goal is to establish the new foundation.

---

178. Phase C — Assessment Migration

Implement:

Assessment model
Assessment versions
Questions
Options
Images
Responses
Scoring engine
Profile generation

Then recreate the signature 30-round experience.

---

179. Phase D — Career Data Migration

Implement:

Career model
Interest relationships
Skill relationships
Work-style relationships
Requirements
Career pages
Search

Then import validated career data.

---

180. Phase E — User/Profile Migration

Implement:

Authentication
User accounts
Assessment history
Career profile
Saved careers
Preferences
Goals

Anonymous assessment-to-account conversion should also be implemented.

---

181. Phase F — SaaS Features

Add:

Dashboard
Career comparison
Skill gaps
Roadmaps
Premium entitlements
Subscription system
Progress tracking

Features should be added according to validated MVP priorities.

---

182. Phase G — AI Integration

After the deterministic system works:

AI Service
 ↓
Career explanations
 ↓
Comparison assistance
 ↓
Roadmap assistance
 ↓
Career coach

AI should not be used to compensate for incomplete core architecture.

---

183. Phase H — Validation

Validation should occur across:

Product

Does the new experience make sense?

Data

Are career and assessment records correct?

Technical

Does the application behave correctly?

Performance

Can it handle expected MVP traffic?

Security

Are accounts and user data protected?

Business

Do users actually value the new functionality?

---

184. Phase I — Cutover

The cutover should be deliberate.

Conceptually:

Legacy
  │
  ├── Final backup
  ├── Final data verification
  └── Freeze
          ↓
       New App
          ↓
       Production

The cutover should include monitoring immediately after release.

---

185. Phase J — Legacy Removal

Only after the new system has demonstrated stability should legacy infrastructure be removed.

Remove:

Unused components
Legacy routes
Legacy scoring
Legacy data formats
Compatibility adapters
Unused dependencies
Dead assets
Old configuration

The final repository should contain only the new architecture and intentionally retained historical documentation.

---

186. Rollback Strategy

The migration must have a rollback plan.

Before cutover:

Database Backup
Code Version
Configuration Snapshot
Asset Backup
Migration State

If a critical production problem occurs:

New App
   ↓
Rollback Decision
   ↓
Legacy App

Rollback should be possible without destroying the original system.

---

187. Migration Checkpoints

The migration should use explicit checkpoints.

Example:

CHECKPOINT 1
Architecture validated

CHECKPOINT 2
Assessment validated

CHECKPOINT 3
Career data validated

CHECKPOINT 4
User accounts validated

CHECKPOINT 5
SaaS MVP validated

CHECKPOINT 6
Production cutover validated

Do not proceed blindly from one stage to the next.

---

188. Migration Testing

Every migrated component should be tested at two levels:

Legacy behavior
        ↓
Expected product behavior

The objective is not necessarily identical behavior.

The objective is to verify that intentional changes are actually intentional.

---

189. Golden Test Cases

Create a set of representative assessment scenarios.

Example:

Scenario A
High Exploration
High Drive

Scenario B
High Harmony
High Structure

Scenario C
Balanced Profile

Scenario D
Strong Investigative Interest
Strong Enterprising Interest

These can be used to verify scoring and matching behavior across future code changes.

---

190. Regression Protection

Once the new assessment and matching engines are validated, create regression tests.

If a future developer changes:

scoring weights

the tests should detect unexpected changes.

Likewise for:

career matching
profile calculation
skill-gap calculation

---

191. Migration Documentation

The migration itself should be documented.

Recommended documents:

docs/
├── legacy-architecture.md
├── migration-map.md
├── data-migration.md
├── assessment-migration.md
├── career-data-migration.md
├── cutover-plan.md
└── rollback-plan.md

Not all documents need to exist immediately.

They should be created when their corresponding work begins.

---

192. Migration Definition of Done

The migration is complete when:

- all required legacy assets have been classified
- required content has been transformed
- assessment works on the new architecture
- new scoring works deterministically
- career data is normalized
- career matching works
- user accounts work
- assessment history works
- saved careers work
- premium boundaries work
- required SaaS features work
- AI integrations are isolated
- migrated data has been validated
- production monitoring exists
- rollback procedures have been tested
- obsolete legacy code has been removed
- documentation reflects the new architecture

---

193. Migration Philosophy

The final migration should produce more than a technically newer version of the old application.

It should produce:

OLD
Personality Quiz
      ↓
Career List

BECOMES

NEW
Career Discovery Platform
      ↓
Assessment
      ↓
Career Profile
      ↓
Career Matching
      ↓
Career Exploration
      ↓
Career Comparison
      ↓
Skill Gaps
      ↓
Career Roadmap
      ↓
AI Career Support

The migration therefore represents both a technical transformation and a product transformation.

The technical architecture must support the new product model rather than preserve limitations created by the old application.


194. Phase 3 Technical Requirements

Phase 3 is where Career Finder moves from product architecture into technical architecture.

The purpose of Phase 3 is not simply to start writing code.

The purpose is to establish a technical foundation that can support the redesigned Career Finder product without repeating the architectural problems of the legacy application.

Phase 3 should therefore answer:

What are we building?
        ↓
How will it be structured?
        ↓
Where does the data live?
        ↓
How does the application communicate?
        ↓
How are business rules implemented?
        ↓
How do we test them?
        ↓
How do we deploy safely?

---

195. Phase 3 Technical Objectives

Phase 3 should establish:

- the production technology stack
- repository architecture
- application boundaries
- database architecture
- migration system
- authentication architecture
- API conventions
- assessment engine architecture
- career-data architecture
- matching engine architecture
- testing strategy
- environment strategy
- deployment strategy
- observability foundation
- security foundation
- migration tooling

At the end of Phase 3, development should be able to proceed feature-by-feature on a stable technical foundation.

---

196. Technology Selection Principles

Technology should be selected according to:

1. Product requirements
2. Developer productivity
3. Mobile-first performance
4. Maintainability
5. Ecosystem maturity
6. Deployment simplicity
7. Cost
8. Security
9. Testing support
10. Long-term scalability

The goal is not to use the largest or newest technology stack.

The goal is to use the smallest stack that can support the product correctly.

---

197. Frontend Technology

The frontend should use a modern component-based web framework capable of supporting:

- server rendering where useful
- responsive interfaces
- interactive assessment flows
- authenticated dashboards
- reusable components
- SEO-friendly career pages
- fast mobile experiences

The final framework choice should be explicitly recorded before implementation begins.

The migration should not support multiple competing frontend frameworks simultaneously.

---

198. Backend Technology

The backend should provide:

- API endpoints
- authentication integration
- business logic
- assessment processing
- profile generation
- career matching
- career data access
- AI integration
- subscription enforcement
- administrative functionality

The backend should remain independent enough that business logic can be tested without rendering the frontend.

---

199. Database Technology

A relational database should be the primary system of record.

The database must support:

- relationships
- transactions
- constraints
- indexes
- migrations
- structured queries
- historical records
- versioned assessment data

The exact database provider should be selected during Phase 3 implementation.

---

200. Database as Source of Truth

The database should become the authoritative source for mutable application data.

Examples:

Users
Assessment Attempts
Responses
Profiles
Saved Careers
Roadmaps
Subscriptions

Static source files may still be used for development and data-import pipelines.

They should not become competing production sources of truth.

---

201. Static vs Dynamic Data

Career Finder contains two broad categories of data.

Product Content

Examples:

Questions
Question Options
Traits
Career Descriptions
Skills
Career Relationships

User Data

Examples:

Accounts
Responses
Profiles
Saved Careers
Roadmaps
Subscriptions

Product content may originate from version-controlled datasets.

User data must be persisted through the production database.

---

202. Database Seed Strategy

Development environments should be able to populate representative data automatically.

Conceptually:

seed/
├── assessment
├── careers
├── skills
└── test-users

Seed data should be deterministic enough for local development and automated testing.

---

203. Database Migration Strategy

Schema changes must be represented as migration files.

Never rely on manually modifying the production database.

Preferred process:

Code Change
 ↓
Migration
 ↓
Test
 ↓
Staging
 ↓
Production

Every production schema change must be reproducible.

---

204. Assessment Data Model Requirements

The assessment system must support:

Assessment
Assessment Version
Question
Question Option
Trait Signal
Response
Assessment Attempt

The system must support multiple assessment versions over time.

---

205. Question Requirements

A question should be able to define:

- identifier
- assessment version
- ordering
- prompt
- explanation
- status
- metadata

The question should not directly contain hardcoded career recommendations.

---

206. Question Option Requirements

Each option should support:

- identifier
- question relationship
- title
- description
- image reference
- ordering
- scoring signals
- active status

One option may contribute to multiple dimensions.

---

207. Signal-Based Scoring

The scoring model should represent responses as signals.

Conceptually:

Question Option
      │
      ├── Harmony
      ├── Exploration
      ├── Drive
      ├── Structure
      │
      ├── Realistic
      ├── Investigative
      ├── Artistic
      ├── Social
      ├── Enterprising
      └── Conventional

Not every option must contribute to every dimension.

---

208. Scoring Configuration

Scoring weights should be data-driven where practical.

Example:

Signal
├── dimension
├── weight
└── version

This makes experimentation and versioning easier.

The scoring engine should consume the configuration rather than embedding hundreds of constants throughout application code.

---

209. Scoring Engine Requirements

The scoring engine must:

- accept a completed assessment
- validate responses
- apply the correct assessment version
- apply the correct scoring version
- calculate work-style dimensions
- calculate interest dimensions where applicable
- normalize scores
- calculate relative differences
- calculate confidence/clarity
- produce a reproducible result

---

210. Profile Generation

The profile engine should transform raw scoring output into a structured profile.

Conceptually:

Responses
   ↓
Scoring Engine
   ↓
Dimension Scores
   ↓
Profile Calculator
   ↓
Career Profile

The profile should contain both raw/normalized values and interpretive metadata where appropriate.

---

211. Profile Interpretation

Interpretation should not be permanently embedded inside the scoring algorithm.

Instead:

Scores
 ↓
Profile State
 ↓
Interpretation Rules
 ↓
User-Facing Explanation

This allows language and presentation to evolve independently from measurement.

---

212. Interest Assessment Requirements

The initial implementation may separate work-style assessment from interest personalization.

The architecture should nevertheless allow both to contribute to a unified profile.

Conceptually:

Work Style
+
Interests
+
Preferences
+
Goals
        ↓
Career Profile

---

213. Preference Model

The preference system should support structured dimensions such as:

People ↔ Alone
Routine ↔ Variety
Direction ↔ Freedom
Predictability ↔ Risk
Office ↔ Flexible
Individual ↔ Team

Each preference should be represented as a normalized value rather than a collection of arbitrary strings.

---

214. Goal Model

Goals should also be structured.

Potential goal identifiers:

income
stability
creativity
helping_people
independence
leadership
work_life_balance
intellectual_challenge
remote_flexibility
social_impact

The exact list remains subject to product validation.

---

215. Constraint Model

Future matching should support constraints.

Examples:

Education duration
Location
Remote preference
Financial constraints
Time availability
Career transition urgency

Constraints should influence matching transparently rather than secretly eliminating careers.

---

216. Career Data Model Requirements

A career record should support at minimum:

Identity
Description
Interests
Skills
Work Styles
Education
Requirements
Environment
Related Careers
External References

Additional fields can be added as validated data sources become available.

---

217. External Career Data

External career data should be imported through adapters.

Conceptually:

External Source
      ↓
Source Adapter
      ↓
Normalized Career Model
      ↓
Validation
      ↓
Database

The application should not make its domain model dependent on one external provider's schema.

---

218. Career Data Provenance

Each important external data point should ideally retain provenance.

Conceptually:

Career Fact
├── source
├── source identifier
├── retrieved date
├── version
└── attribution requirements

This is especially important for:

- salary information
- employment outlook
- education requirements
- occupational descriptions

---

219. Career Data Refresh

Career information changes.

Therefore the system should eventually support:

Import
 ↓
Validate
 ↓
Diff
 ↓
Review
 ↓
Publish

The initial implementation may use scheduled/manual imports.

Automatic publishing should not occur until the validation process is trustworthy.

---

220. Career Matching Engine

The matching engine should combine:

Work Style
+
Interests
+
Preferences
+
Goals
+
Constraints
+
Career Data

to produce a structured match.

---

221. Match Output

A match should contain more than a single number.

Conceptually:

Career Match
├── career
├── strength
├── internal score
├── evidence
├── strengths
├── considerations
└── matching version

The internal score is an implementation mechanism, not a promise of career success.

---

222. Match Strength

The user-facing match should use understandable categories.

For example:

Excellent Match
Strong Match
Potential Match
Worth Exploring

The exact labels should be validated with users.

---

223. Match Evidence

Each match should be explainable.

Example:

Career
Software Developer

Evidence
✓ Strong investigative interest
✓ Strong problem-solving alignment
✓ High autonomy preference
✓ Comfortable with structured systems

The evidence should originate from deterministic calculations.

---

224. Match Versioning

Matching rules must be versioned.

Example:

matchingVersion = 1

When weights or formulas change:

v1
↓
v2

Historical assessment results should retain the version used to generate them.

---

225. Search Architecture

Career search should support:

- title search
- related terms
- interest filters
- skill filters
- career categories
- education filters where data exists

The initial implementation should avoid building a sophisticated search engine unless actual data volume requires it.

---

226. SEO Architecture

Public career pages should be designed as indexable pages.

Each career should ideally have:

Stable URL
Unique title
Description
Structured metadata
Relevant headings
Internal links
Related careers

The application should avoid requiring JavaScript execution for all meaningful career information.

---

227. URL Strategy

Career URLs should use stable identifiers such as:

/careers/software-developer
/careers/data-analyst
/careers/product-designer

The URL should not depend on an internal database ID exposed directly to users.

---

228. Authentication Requirements

Authentication must support:

- registration
- login
- logout
- session management
- password/account recovery where applicable
- account deletion
- authenticated API access

The exact authentication provider will be selected during implementation.

---

229. Account Linking

Anonymous assessment results should be linkable to a newly created account.

The operation should be:

Anonymous Attempt
       ↓
Authenticated User
       ↓
Ownership Transfer

This must be implemented securely.

---

230. Subscription Architecture

The subscription system should separate:

Plan
Subscription
Entitlement
Usage

A payment provider may manage payment transactions, but Career Finder should maintain its own application-level entitlement state.

---

231. Payment Provider Abstraction

Payment logic should not be deeply embedded into unrelated product modules.

Conceptually:

Billing Service
      ↓
Payment Provider

The rest of the application should ask:

"Does this user have entitlement X?"

rather than directly inspecting payment-provider objects.

---

232. API Versioning

The API should be designed with future evolution in mind.

Possible initial structure:

/api/v1/...

Whether explicit URL versioning is necessary depends on the selected framework and deployment model, but breaking API changes must have a controlled strategy.

---

233. API Validation

Every externally supplied value should be validated.

Examples:

Assessment ID
Response ID
Career ID
User preferences
Roadmap inputs
AI requests

Validation must occur server-side.

---

234. API Authorization

Every protected operation should verify ownership.

For example:

GET /assessment-attempts/:id

must verify that the authenticated user is allowed to access that attempt.

Never assume that possessing an ID grants access.

---

235. Rate Limiting

Rate limiting should be applied to potentially expensive or abuse-prone operations.

Examples:

Authentication
Assessment mutations
AI requests
Search
Password recovery

The exact limits should be established during implementation and adjusted using real usage data.

---

236. Testing Requirements

At minimum, Phase 3 should establish:

Unit Testing
Integration Testing
End-to-End Testing
Migration Testing
Data Validation Testing

Critical business logic should receive the highest testing priority.

---

237. Critical Test Coverage

The following must have strong automated coverage:

Assessment scoring
Profile calculation
Interest scoring
Career matching
Match explanations
Skill-gap calculation
Subscription entitlements
Authentication authorization
Assessment persistence

---

238. CI Pipeline

The repository should eventually run:

Install
 ↓
Lint
 ↓
Type Check
 ↓
Unit Tests
 ↓
Integration Tests
 ↓
Build

Production deployment should only proceed when required checks pass.

---

239. Environment Architecture

Use separate environments:

Development
      ↓
Staging
      ↓
Production

Each environment should have its own appropriate:

- database
- secrets
- configuration
- external service credentials

Production data must never be casually used in development.

---

240. Deployment Strategy

The first deployment architecture should prioritize simplicity.

The application should be deployable through a repeatable process.

At minimum:

Git Push
 ↓
CI
 ↓
Build
 ↓
Deploy
 ↓
Health Check

The exact hosting provider is a Phase 3 implementation decision.

---

241. Health Checks

The application should provide a basic health mechanism.

It should distinguish between:

Application Healthy
Database Unavailable
External Dependency Unavailable

This makes deployment and monitoring easier.

---

242. Logging

Logs should capture:

- application errors
- failed requests
- important background jobs
- external service failures
- migration failures
- authentication events where appropriate

Logs must not expose:

- passwords
- authentication tokens
- payment secrets
- unnecessary personal information

---

243. Analytics

Product analytics should be designed around the core funnel.

Important events include:

assessment_started
assessment_completed
results_viewed
career_opened
career_saved
comparison_started
roadmap_created
account_created
subscription_started

Analytics should be privacy-conscious and useful for product decisions.

---

244. Feature Flags

Feature flags may be useful for controlled rollout of:

New Assessment
New Matching Algorithm
AI Features
Premium Features
Experimental UI

The MVP does not need a sophisticated feature-flag platform unless the deployment process requires it.

---

245. Administrative Architecture

A minimal administrative capability should eventually allow authorized users to manage:

- assessment content
- career content
- skills
- relationships
- data imports
- content publication

This does not necessarily require a full admin dashboard immediately.

Internal scripts and database tooling may initially be sufficient.

---

246. Content Publishing

Career content should ideally follow:

Draft
 ↓
Review
 ↓
Approved
 ↓
Published

This becomes increasingly important as Career Finder begins relying on external career data.

---

247. Phase 3 Implementation Order

The recommended technical implementation order is:

1. Repository audit
2. Stack decision
3. Project structure
4. Environment setup
5. Database foundation
6. Migration tooling
7. Domain models
8. Assessment engine
9. Career-data model
10. Matching engine
11. API layer
12. Authentication
13. Frontend migration
14. Profile/dashboard
15. Saved careers
16. Career comparison
17. Skill gaps
18. Roadmaps
19. Billing
20. AI integration
21. Testing
22. CI/CD
23. Staging
24. Production migration

This order may be adjusted when implementation reveals dependencies.

---

248. Phase 3 Work Packages

To make implementation manageable, Phase 3 should be divided into technical work packages.

WP1 — Legacy Audit

Understand the current system.

WP2 — Foundation

Create the new application structure.

WP3 — Data Layer

Implement database and migration infrastructure.

WP4 — Assessment

Build the new assessment engine.

WP5 — Career Intelligence

Implement career data and matching.

WP6 — SaaS Identity

Implement accounts and persistence.

WP7 — User Experience

Migrate the major product flows.

WP8 — Monetization

Implement plans and entitlements.

WP9 — AI

Add AI capabilities on top of deterministic systems.

WP10 — Production

Testing, deployment, migration and launch.

---

249. Phase 3 Deliverables

By the end of Phase 3, the repository should contain a clear implementation foundation for:

Application
Database
Assessment
Career Data
Matching
Profiles
Authentication
Billing
AI
Testing
Deployment
Documentation

The exact feature completeness may extend beyond Phase 3.

The important requirement is that the architecture for these capabilities has been established correctly.

---

250. Phase 3 Definition of Done

Phase 3 should not be considered complete simply because the application runs locally.

It is complete when:

- the technology stack is documented
- the repository structure is established
- environment configuration works
- the database is operational
- migrations work
- core domain models exist
- assessment architecture is established
- scoring is deterministic
- career data architecture is established
- matching architecture is established
- API boundaries are defined
- authentication architecture is working
- authorization rules are defined
- tests exist for critical business logic
- CI checks run
- staging deployment is possible
- production configuration is documented
- legacy migration scripts are established
- rollback strategy is documented

---

251. Phase 3 Does Not Mean "Build Everything"

A critical distinction must be maintained.

Phase 3 is not:

Build every Career Finder feature.

It is:

Build the technical foundation
that allows Career Finder
to be developed safely.

The product should still follow the MVP boundary established during Phase 2.

---

252. Technical Decision Record

Every major technical decision should be recorded.

Examples:

Frontend Framework
Backend Framework
Database
Authentication
Storage
Hosting
AI Provider
Payment Provider
Analytics
Search

Each decision should record:

Decision
Reason
Alternatives
Trade-offs
Date

This prevents architectural decisions from becoming undocumented assumptions.

---

253. Avoiding Premature Complexity

The following should not be introduced merely because they are technically interesting:

- microservices
- Kubernetes
- event-driven architecture
- complex distributed queues
- multiple databases
- custom authentication
- custom payment processing
- custom AI infrastructure
- dedicated search clusters
- elaborate data warehouses

These may become appropriate later.
They are not requirements for the initial Career Finder SaaS.
254. Technical Migration Principle
The new architecture should be:
Simple enough to build
+
Structured enough to evolve
+
Reliable enough to trust
+
Flexible enough to scale
That balance is the objective of Phase 3.
255. Phase 3 Starting Point
The first implementation task should therefore not be writing the new assessment UI.
The first task should be:
AUDIT THE EXISTING REPOSITORY
We need to establish exactly:
What exists?
What works?
What is broken?
What data exists?
What dependencies exist?
What can be reused?
What must be replaced?
Only after that audit should the final technical stack and migration sequence be locked.
256. Transition to Implementation
The complete Phase 3 flow becomes:
TECH-MIGRATION-PLAN
        │
        ▼
LEGACY REPOSITORY AUDIT
        │
        ▼
TECHNOLOGY DECISIONS
        │
        ▼
TARGET ARCHITECTURE
        │
        ▼
DATABASE + DOMAIN FOUNDATION
        │
        ▼
ASSESSMENT ENGINE
        │
        ▼
CAREER DATA
        │
        ▼
MATCHING ENGINE
        │
        ▼
SAAS FEATURES
        │
        ▼
AI
        │
        ▼
TESTING
        │
        ▼
STAGING
        │
        ▼
PRODUCTION MIGRATION
This is the technical execution path from the existing Career Finder application to the redesigned Career Finder SaaS.
257. Phase 3 First Artifact
The first implementation artifact after this document should be:
tech-migration-plan.md
It becomes the technical reference document for Phase 3.
Once approved, the next working artifact should be the legacy repository audit, followed by the concrete technology and architecture decisions.
The technical implementation should proceed from documented decisions rather than making architecture decisions accidentally while coding.


