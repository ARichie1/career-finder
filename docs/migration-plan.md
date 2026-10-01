Career Finder — Migration Plan

Document: "migration-plan.md"
Product: Career Finder
Purpose: Strategic migration from the original Career Finder application into the Career Finder SaaS product
Status: Phase 2 complete — Strategic product migration defined
Next Phase: Phase 3 — Technical Migration Planning

---

1. Product Vision

1.1 The Original Product

The original Career Finder application is fundamentally a personality-style assessment:

Assessment
    ↓
Personality group
    ↓
Career suggestions

This provides a useful starting point, but it creates a relatively narrow product experience.

The user:

1. Takes the assessment.
2. Receives a personality result.
3. Receives career suggestions.
4. Leaves the product.

There is little reason for the user to return after the initial assessment.

The original product therefore behaves primarily like a career quiz, rather than a long-term career discovery product.

---

1.2 The New Product

Career Finder should evolve from a personality assessment into a career-discovery and career-decision platform.

The new product concept is:

                    CAREER FINDER

                         USER
                          │
                          ▼
                 30-Round Assessment
                          │
             ┌────────────┴────────────┐
             ▼                         ▼
        Work Style                 Interests
             │                         │
             └────────────┬────────────┘
                          ▼
                    Career Profile
                          │
             ┌────────────┼────────────┐
             ▼            ▼            ▼
          Explore      Compare        Save
             │            │            │
             └────────────┼────────────┘
                          ▼
                    Career Matching
                          │
                          ▼
                     Skill Gaps
                          │
                          ▼
                    Career Roadmap
                          │
                          ▼
                     AI Career Coach

The fundamental product promise becomes:

«Help people understand themselves, discover careers that fit them, and understand what it would take to pursue those careers.»

Career Finder should not claim:

«"We know your perfect career."»

Instead, the product should help users answer:

«"What careers might fit me, why do they fit, and what can I do next?"»

---

1.3 Product Philosophy

The new Career Finder should be built around the following principles.

Useful rather than sensational

The product should provide genuinely useful career information instead of relying on exaggerated personality-test claims.

Explainable rather than mysterious

Users should understand why a career was recommended.

Multidimensional rather than deterministic

A user should not be reduced to one personality category.

Actionable rather than informational

The product should help users move from discovery to action.

Mobile-first rather than desktop-first

The original visual assessment experience is particularly well suited to mobile interaction and should remain a core part of the product identity.

Personalized without pretending to know everything

Career Finder should use user information to improve recommendations without claiming to know a person's future.

AI-assisted rather than AI-dependent

AI should enhance the product rather than become the source of truth for assessment results.

---

1.4 Product Transformation

The strategic transformation can be summarized as:

Old Career Finder

PERSONALITY QUIZ
       ↓
PERSONALITY TYPE
       ↓
CAREER LIST

Career Finder 2026

                    SELF-DISCOVERY
                          │
                          ▼
                     ASSESSMENT
                          │
              ┌───────────┴───────────┐
              ▼                       ▼
         WORK STYLE               INTERESTS
              │                       │
              └───────────┬───────────┘
                          ▼
                   CAREER PROFILE
                          │
              ┌───────────┼───────────┐
              ▼           ▼           ▼
           EXPLORE     COMPARE       SAVE
              │           │           │
              └───────────┼───────────┘
                          ▼
                    CAREER MATCHING
                          │
                          ▼
                      SKILL GAPS
                          │
                          ▼
                   CAREER ROADMAP
                          │
                          ▼
                      AI COACH

The product therefore moves from answering:

«"What personality type am I?"»

to helping answer:

«"How do I work?"»

«"What am I interested in?"»

«"What careers could fit me?"»

«"Why do these careers fit?"»

«"How do these careers compare?"»

«"What would I need to pursue them?"»

«"What should I do next?"»

---

1.5 Long-Term Product Vision

The long-term Career Finder experience should allow a user to move through an ongoing career-development journey:

Discover
   ↓
Understand
   ↓
Explore
   ↓
Compare
   ↓
Choose
   ↓
Prepare
   ↓
Learn
   ↓
Progress
   ↓
Reassess

The assessment is therefore not the entire product.

It is the front door into the product.

The assessment creates the initial user profile.

The profile powers career discovery.

Career discovery leads to career decisions.

Career decisions lead to skill analysis.

Skill analysis leads to roadmaps.

Roadmaps create an ongoing relationship with the product.

That relationship eventually creates the foundation for premium functionality.

---

1.6 Core Product Loop

The fundamental product loop should become:

Assessment
    ↓
Career Profile
    ↓
Career Matches
    ↓
Career Exploration
    ↓
Career Comparison
    ↓
Skill Analysis
    ↓
Career Roadmap
    ↓
Progress
    ↓
Reassessment

AI sits alongside this loop as an assistance layer:

                 ┌───────────────┐
                 │   AI COACH    │
                 └───────┬───────┘
                         │
                         ▼
Assessment → Profile → Careers → Skills → Roadmap

The AI should help users understand and interact with the product's underlying information.

It should not replace the underlying system.

---

1.7 Strategic Objective

The ultimate objective of the migration is therefore:

«Transform Career Finder from a one-time personality quiz into a trustworthy, explainable, actionable and extensible career-discovery SaaS platform.»

The original assessment experience remains the product's distinctive entry point.

The new career intelligence layer becomes the foundation that turns that experience into a sustainable product.

2. Problem Being Solved

Career decisions are difficult because people often lack three things:

1. Self-understanding
2. Reliable career information
3. A practical path from interest to action

Many career quizzes stop at:

"You are X."

Career Finder should go further:

"You tend to work this way."
        ↓
"You appear interested in these areas."
        ↓
"These careers may fit those patterns."
        ↓
"Here is why."
        ↓
"Here is what those careers require."
        ↓
"Here are your current gaps."
        ↓
"Here is a possible path forward."

The product should therefore address the complete journey from self-discovery to career action.

---

2.1 Core User Problems

Problem A — "I don't know what career fits me."

Many users have difficulty translating their personality, interests and preferences into possible career paths.

Career Finder should provide a structured way to explore those connections.

Self-understanding
       ↓
Interests
       ↓
Work preferences
       ↓
Potential careers

The product should not tell the user that one career is guaranteed to be correct.

Instead, it should provide a useful set of careers worth exploring.

---

Problem B — "I have too many career options."

Modern career choice can create the opposite problem.

Instead of having no options, users may have too many.

A user might simultaneously consider:

Software Engineering
Data Analysis
Product Design
Marketing
Teaching
Research
Business
Healthcare

Career Finder should help reduce this uncertainty by identifying stronger areas of fit while still allowing users to explore alternatives.

The goal is not:

100 careers
↓
1 "perfect" career

The goal is:

Many possibilities
       ↓
Relevant possibilities
       ↓
Strong candidates
       ↓
User makes an informed decision

---

Problem C — "I don't understand why a career was recommended."

A recommendation without an explanation can feel arbitrary.

For example:

Software Engineer
Strong Match

does not tell the user enough.

Career Finder should instead provide reasoning such as:

Why this career appears

✓ Strong investigative interests
✓ Strong problem-solving orientation
✓ High autonomy preference
✓ Comfortable with structured systems
✓ Strong interest in continuous learning

The user should be able to understand the connection between their profile and the career.

---

Problem D — "I know what career I want, but I don't know how to get there."

Career discovery is only one part of the problem.

A user might already know:

«"I want to become a Data Analyst."»

The next questions become:

What skills do I need?
What education is useful?
What tools should I learn?
What experience should I gain?
What projects should I build?
What should I do first?

Career Finder should eventually answer these questions through:

Career
   ↓
Requirements
   ↓
Required skills
   ↓
Current skills
   ↓
Skill gaps
   ↓
Roadmap

This is one of the major ways Career Finder moves beyond a traditional career quiz.

---

Problem E — "I'm choosing between several careers."

Users often need to compare options rather than receive a single recommendation.

For example:

Software Engineering
vs
Data Analysis
vs
Product Design

Career Finder should allow users to compare dimensions such as:

- interest fit
- work-style fit
- work environment
- creativity
- people interaction
- training requirements
- structure
- autonomy
- skill requirements
- career outlook

The product becomes a decision-support tool, rather than simply a recommendation engine.

---

Problem F — "My career situation has changed."

Career decisions are not necessarily permanent.

A person may:

- develop new interests
- gain new skills
- change their priorities
- enter a new industry
- leave a previous career
- discover new career possibilities

Career Finder should eventually allow users to reassess themselves and compare how their profile changes over time.

Assessment #1
       ↓
Career Profile
       ↓
Learning / Experience
       ↓
Assessment #2
       ↓
Updated Profile

This transforms the assessment from a one-time event into part of an ongoing career journey.

---

2.2 The Deeper Problem

The deeper problem Career Finder is solving is not simply:

«"Which career should I choose?"»

It is:

«"How can I make a better-informed career decision based on who I am, what interests me, what I value, and what it would take to pursue different options?"»

This distinction should influence every major product decision.

Career Finder should provide decision support, not deterministic career assignment.

---

2.3 What Career Finder Should Not Promise

The product should explicitly avoid claims such as:

"This is your perfect career."

"You are guaranteed to succeed."

"This test knows your future."

"You have an 85% chance of becoming a successful software engineer."

Those claims would create false certainty.

Instead, Career Finder should use language such as:

"Your responses suggest..."

"You appear to prefer..."

"You may enjoy..."

"This career may be worth exploring because..."

"These careers appear to align with your current profile."

The product should help users make decisions without pretending that an assessment can predict their entire future.

---

3. Target Customers

Career Finder should initially focus on B2C users.

The first version should be designed around individuals rather than schools, companies or career counselors.

B2B should remain a future expansion once the consumer product has demonstrated meaningful demand.

---

3.1 Primary Target Market

Students and Young Adults

This is the primary target group.

These users may be:

- choosing subjects
- choosing a degree
- considering university
- considering vocational training
- entering the workforce
- looking for their first job
- uncertain about their career direction

Their core question is often:

«"What should I do with my future?"»

Career Finder can provide:

Assessment
    ↓
Self-understanding
    ↓
Career discovery
    ↓
Education options
    ↓
Career roadmap

---

3.2 Secondary Target Market

Early-Career Professionals

These users have already entered the workforce but may not be satisfied with their current direction.

They may be asking:

«"Is this really the career I want?"»

or:

«"What else could I do with my skills?"»

Career Finder can help them explore alternatives.

Current Career
       ↓
Profile
       ↓
Alternative Careers
       ↓
Transferable Skills
       ↓
Skill Gaps
       ↓
Transition Roadmap

---

3.3 Tertiary Target Market

Career Explorers

These users may not be facing an immediate career decision.

They may simply be curious about:

- careers
- personality
- interests
- professional development
- different occupations
- possible futures

This audience is important because the assessment itself can be a low-friction acquisition mechanism.

The user does not need to be actively planning a career change to find the product interesting.

---

3.4 Future Target Markets

After the B2C product is validated, Career Finder can expand into organizational markets.

Potential customers include:

Schools

Career discovery and student guidance.

Universities and Colleges

Career services, student development and career exploration.

Career Counselors

Assessment and career-planning tools for clients.

Workforce Organizations

Career transition, workforce development and reskilling.

The B2B product should not be treated as an MVP requirement.

It should be built only after the consumer product demonstrates:

- engagement
- usefulness
- retention
- demand
- reliable career data
- stable technical infrastructure

---

3.5 Customer Priority

The initial priority should therefore be:

                    CAREER FINDER
                          │
                          ▼
                     INDIVIDUALS
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
       Students      Early Career     Explorers
          │               │               │
          └───────────────┼───────────────┘
                          ▼
                    B2C PRODUCT
                          │
                          ▼
                 VALIDATED PRODUCT
                          │
                          ▼
                    FUTURE B2B

This keeps the initial product focused while preserving a clear path toward a larger SaaS business.

---

3.6 Customer Problem by Segment

Segment| Primary Problem| Most Valuable Feature
Students| "What career should I explore?"| Assessment + Career Discovery
Career Explorers| "What careers fit my interests?"| Assessment + Career Matching
Early Professionals| "What else could I do?"| Alternative Careers + Comparison
Career Changers| "How can I transition?"| Skill Gaps + Roadmap
Job Seekers| "What should I improve?"| Skills + Roadmap
Schools| "How can we support students?"| Future B2B Dashboard
Counselors| "How can I manage career assessments?"| Future Counselor Workspace

---

3.7 Initial Customer Focus

For MVP purposes, Career Finder should primarily optimize for:

«People who are actively uncertain about their career direction and are willing to spend a few minutes discovering possible career paths.»

This group provides the clearest validation of the core product promise.

The MVP does not need to solve every career problem for every type of user.

It needs to prove that the core journey works:

"I don't know what career fits me."
              ↓
        Take assessment
              ↓
        Understand myself
              ↓
        Discover careers
              ↓
        Explore possibilities

Once that loop works, additional journeys can be layered on top.


4. User Personas

Career Finder should not treat every user as having the same career problem.

Different users enter the product with different levels of certainty, experience and urgency.

The product should therefore support several core user personas while keeping the initial experience simple.

---

4.1 Persona 1 — The Uncertain Student

Situation

«"I have no idea what career I should pursue."»

This user may be:

- in secondary school
- preparing for university
- choosing a degree
- considering vocational education
- approaching graduation
- preparing for their first job

They may have interests but lack a clear understanding of how those interests translate into careers.

Needs

The Uncertain Student needs:

- fast self-discovery
- understandable results
- career ideas
- explanations
- education/training information
- reassurance without false certainty
- practical next steps

Primary Product Journey

Assessment
    ↓
Work-Style Profile
    ↓
Interest Profile
    ↓
Career Matches
    ↓
Career Exploration
    ↓
Education / Training Options
    ↓
Career Roadmap

Product Opportunity

This persona represents one of the strongest potential entry points for Career Finder because the assessment directly addresses their uncertainty.

---

4.2 Persona 2 — The Career Explorer

Situation

«"I know what I like, but I don't know which careers connect to those interests."»

This user may already have several interests but does not understand the occupational possibilities associated with them.

For example:

Likes technology
Likes solving problems
Likes creativity
Likes working independently

They may wonder:

«"What careers combine these things?"»

Needs

The Career Explorer needs:

- career discovery
- relevant career recommendations
- career descriptions
- work-environment information
- comparisons
- explanations of why careers match

Primary Product Journey

Assessment
    ↓
Interests
    ↓
Career Matches
    ↓
Explore Careers
    ↓
Compare Careers
    ↓
Save Careers

Product Opportunity

This persona is especially valuable for career exploration and SEO because individual career pages can become discovery entry points.

---

4.3 Persona 3 — The Career Changer

Situation

«"I don't want to stay in my current field."»

This user already has work experience.

Their problem is different from that of a student.

They may ask:

- What other careers fit me?
- Which of my skills transfer?
- What would I need to learn?
- How difficult would the transition be?
- Which career options are realistic?

Needs

The Career Changer needs:

- alternative career discovery
- transferable-skill analysis
- skill-gap analysis
- career comparison
- transition planning
- realistic roadmaps

Primary Product Journey

Assessment
    ↓
Career Profile
    ↓
Alternative Careers
    ↓
Transferable Skills
    ↓
Skill Gaps
    ↓
Transition Roadmap

Product Opportunity

This persona creates strong potential for premium features because career transitions involve deeper information and ongoing planning.

---

4.4 Persona 4 — The Job Seeker

Situation

«"I need to improve my career prospects."»

This user may already have a career direction but does not know which skills or capabilities to prioritize.

Needs

- career direction
- skill-gap analysis
- learning priorities
- practical next steps
- roadmap
- progress tracking

Primary Product Journey

Career Profile
    ↓
Career Selection
    ↓
Skill Requirements
    ↓
Current Skills
    ↓
Skill Gaps
    ↓
Learning Roadmap
    ↓
Progress

Product Opportunity

This persona can eventually connect Career Finder to professional development and learning ecosystems.

However, job-search infrastructure itself should remain outside the initial MVP.

---

4.5 Persona 5 — The Curious User

Situation

«"I just want to see what careers might suit me."»

This user may not currently be making an important career decision.

They may simply enjoy:

- assessments
- self-discovery
- career content
- quizzes
- professional development
- exploring possible futures

Needs

The Curious User needs:

- an enjoyable assessment
- interesting results
- attractive visual presentation
- career discoveries
- easy sharing

Primary Product Journey

Landing Page
    ↓
Assessment
    ↓
Interesting Result
    ↓
Career Exploration
    ↓
Share Result

Product Opportunity

This persona can be particularly valuable for acquisition and virality.

They can discover Career Finder without having an urgent career problem.

---

4.6 Persona Comparison

Persona| Main Question| Primary Value
Uncertain Student| "What should I explore?"| Assessment + Career Discovery
Career Explorer| "What careers fit my interests?"| Matching + Exploration
Career Changer| "What else could I do?"| Alternatives + Skill Gaps
Job Seeker| "What should I improve?"| Skills + Roadmap
Curious User| "What might fit me?"| Assessment + Exploration

---

4.7 Persona Priority

The initial product should prioritize:

1. Uncertain Student
2. Career Explorer
3. Career Changer
4. Job Seeker
5. Curious User

This does not mean other personas should be blocked.

It means product decisions, messaging and validation should initially focus on users who most strongly experience the core Career Finder problem.

---

4.8 Persona Expansion Strategy

The product should be architected so that the same underlying profile can support multiple journeys.

For example:

                   USER PROFILE
                        │
        ┌───────────────┼────────────────┐
        ▼               ▼                ▼
    Student       Career Changer     Job Seeker
        │               │                │
   Education       Transition          Skills
   Discovery        Planning          Roadmap

The profile becomes the common foundation.

Different user journeys can then be layered on top without creating separate assessment systems for every audience.

---

5. Competitive Landscape

Career Finder enters an existing and increasingly sophisticated career-assessment market.

The product will compete indirectly or directly with:

- personality assessments
- vocational-interest assessments
- career quizzes
- career databases
- career-planning platforms
- career coaching products
- education discovery platforms
- AI career assistants

This means Career Finder cannot rely on the basic proposition:

«"We have a career test."»

That proposition is too easy to replicate and already exists in many forms.

---

5.1 Established Assessment Systems

Career Finder should study established assessment frameworks and career-data systems rather than attempting to invent every concept independently.

One important reference is the O*NET ecosystem.

O*NET provides structured occupational information covering areas such as:

- occupations
- interests
- skills
- work styles
- knowledge
- education
- work activities
- technology
- related occupational information

This demonstrates that career matching can be built on structured occupational data rather than purely subjective personality interpretations.

Career Finder should learn from this model while developing its own product experience and assessment content.

---

5.2 Career Exploration Platforms

Products such as CareerExplorer demonstrate that users can be presented with substantially richer career profiles than a simple personality-to-career quiz.

Modern career platforms can combine:

Interests
+
Goals
+
Personality
+
History
+
Workplace Preferences
+
Career Data

and use those inputs to generate career recommendations.

This means Career Finder needs a meaningful product differentiation strategy.

---

5.3 The Competitive Gap

The competitive opportunity is not necessarily to have more assessment questions.

Instead, Career Finder can differentiate through the experience surrounding the assessment.

The proposed differentiation is:

Assessment
      ↓
Profile
      ↓
Explainable Matching
      ↓
Career Exploration
      ↓
Career Comparison
      ↓
Skill Analysis
      ↓
Career Roadmap
      ↓
AI Coach

The assessment becomes the entry point rather than the complete product.

---

5.4 Competitive Weakness #1 — Assessment Experience

Many career systems can feel like traditional questionnaires.

Career Finder should preserve its distinctive visual interaction:

30 Rounds
×
4 Visual Choices
×
Images
×
Words
×
Multi-selection

The objective is to make the assessment feel more like an interactive discovery experience than a conventional form.

This should become one of the product's strongest differentiators.

---

5.5 Competitive Weakness #2 — Explainability

A career recommendation without an explanation creates uncertainty.

Instead of:

Software Engineer
92%

Career Finder should show:

Why this career appears

✓ Strong investigative interest
✓ Strong problem-solving orientation
✓ High autonomy preference
✓ Comfortable with structured systems
✓ Interest in continuous learning

The user should understand the relationship between:

Your Profile
     ↓
Career Characteristics
     ↓
Match

This makes the recommendation easier to trust.

---

5.6 Competitive Weakness #3 — Career Decision Support

Traditional career assessments often emphasize ranking.

Career Finder should emphasize decision support.

For example:

You are considering:

Software Engineering
Data Analysis
Product Design

The product should allow users to compare:

Dimension| Software Engineering| Data Analysis| Product Design
Interest fit| Strong| Very Strong| Strong
Work-style fit| Very Strong| Strong| Strong
Creativity| Medium| Medium| Very High
People interaction| Medium| Medium| High
Training path| Medium| Long| Medium
Structure| High| High| Medium

The user is then empowered to make the decision.

Career Finder does not make the decision for them.

---

5.7 Competitive Weakness #4 — Actionability

Career recommendations frequently stop at:

«"You may enjoy this career."»

Career Finder should continue toward:

Career
   ↓
Requirements
   ↓
Skills
   ↓
Current capabilities
   ↓
Skill gaps
   ↓
Learning priorities
   ↓
Projects / Experience
   ↓
Roadmap

This creates a much stronger relationship between discovery and action.

---

5.8 Competitive Weakness #5 — AI as a Layer

AI should not be used as a gimmick.

Career Finder should avoid positioning itself as:

«"An AI that decides your career."»

Instead:

Structured Assessment
        ↓
Structured Profile
        ↓
Structured Career Data
        ↓
Deterministic Matching
        ↓
AI Assistance

The AI can then help users:

- understand results
- compare careers
- ask questions
- explore alternatives
- plan learning
- understand skill gaps
- navigate roadmaps

This creates an AI experience that is grounded in the product rather than replacing it.

---

5.9 Competitive Weakness #6 — Mobile-First Experience

Career Finder's assessment was originally designed around visual interactions.

This creates an opportunity to make the entire discovery experience especially strong on mobile devices.

The product should prioritize:

- touch interaction
- visual cards
- fast transitions
- minimal typing
- responsive layouts
- readable career information
- progressive disclosure
- lightweight interactions

The mobile experience should not simply be a smaller desktop interface.

It should be designed as a mobile-first product.

---

5.10 Competitive Position

Career Finder should therefore compete on:

                    CAREER FINDER
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
       EXPERIENCE     INTELLIGENCE      ACTION
          │               │               │
       Visual          Explainable      Roadmaps
       Fast            Matching         Skill Gaps
       Mobile          Comparison       Next Steps
       Engaging        Career Data      Progress
                          │
                          ▼
                       AI Coach

The product does not need to beat every competitor on the size of its database.

It needs to provide a better career-discovery journey for its target users.

---

5.11 Competitive Strategy

The strategic position should be:

«Career Finder combines an engaging visual assessment with explainable career matching and actionable career planning.»

The product should therefore avoid competing primarily on:

- number of assessment questions
- number of personality types
- number of AI features
- size of marketing claims

Instead, it should compete on:

1. Assessment experience
2. Quality of career matching
3. Explainability
4. Career comparison
5. Actionable roadmaps
6. Mobile usability
7. Trustworthy use of AI
8. Useful career information


6. Product Positioning

Career Finder should not be positioned as simply another personality test.

The market already contains personality assessments, vocational assessments, career quizzes and career databases.

The product needs a clearer identity.

---

6.1 What Career Finder Is Not

Career Finder should not be positioned as:

«"An AI personality test."»

It should not be positioned as:

«"A quiz that tells you your perfect career."»

It should not claim:

«"We can predict your future career."»

It should not suggest:

«"Your assessment determines what you should become."»

These approaches create false certainty and make the product vulnerable to criticism.

---

6.2 What Career Finder Is

The core positioning should be:

«Career Finder is a career discovery and decision-support platform that helps you understand yourself, explore careers, and plan your next step.»

This positioning reflects the complete product rather than only the assessment.

---

6.3 Positioning Pillars

Career Finder should be built around seven core pillars.

1. Discover

Help users understand their work-style tendencies and interests.

How do I tend to work?
What kinds of activities interest me?
What environments might suit me?

---

2. Explore

Help users discover careers connected to their profile.

My Profile
    ↓
Potential Careers
    ↓
Career Exploration

The system should expose possibilities rather than declare a single answer.

---

3. Understand

Explain why a career appears in the user's results.

Career
   ↓
Why it matches
   ↓
Relevant profile signals

This makes the system more transparent.

---

4. Compare

Help users evaluate several careers.

Career A
   vs
Career B
   vs
Career C

The comparison should consider meaningful dimensions such as:

- interests
- work style
- work environment
- training
- skills
- creativity
- autonomy
- people interaction

---

5. Prepare

Help users understand what pursuing a career actually involves.

Career
   ↓
Requirements
   ↓
Skills
   ↓
Education
   ↓
Experience

---

6. Plan

Turn career exploration into actionable next steps.

Current State
      ↓
Skill Gaps
      ↓
Learning Priorities
      ↓
Projects / Experience
      ↓
Career Roadmap

---

7. Coach

Use AI to help users interact with their career information.

The AI can answer questions such as:

«"Why does this career fit me?"»

«"How is this different from Data Analysis?"»

«"What should I learn first?"»

«"I don't have experience. Where do I start?"»

AI therefore becomes a product capability rather than the product identity.

---

6.4 Core Positioning Statement

The strategic positioning can be summarized as:

Career Finder
=
Self-Discovery
+
Career Intelligence
+
Decision Support
+
Action Planning

The product journey becomes:

Discover
    ↓
Explore
    ↓
Compare
    ↓
Understand
    ↓
Prepare
    ↓
Plan
    ↓
Act

---

6.5 Product Promise

The product should make a modest but valuable promise:

«Understand yourself. Discover careers worth exploring. See why they fit. Figure out what comes next.»

This is stronger and more defensible than promising a "perfect career."

---

6.6 Positioning Against Traditional Career Quizzes

Traditional career quiz

Questions
    ↓
Personality Type
    ↓
Career List

Career Finder

Visual Assessment
        ↓
Work-Style Profile
        +
Interest Profile
        +
Preferences
        +
Goals
        ↓
Career Matches
        ↓
Why They Match
        ↓
Career Comparison
        ↓
Skill Gaps
        ↓
Career Roadmap
        ↓
AI Coach

The difference is not simply the number of features.

The difference is the depth of the user journey.

---

6.7 Positioning for Different Users

The same product should be capable of communicating different benefits depending on the user.

Student

«Discover careers that fit the way you think, work and what interests you.»

Career Explorer

«Explore careers that connect with your interests and preferences.»

Career Changer

«Discover alternative careers and understand what it would take to transition.»

Job Seeker

«Identify useful career directions, skill gaps and next steps.»

The underlying product remains the same.

Only the framing changes.

---

6.8 Long-Term Positioning

The long-term ambition should be to make Career Finder feel less like:

A test

and more like:

A personal career navigation system

The assessment provides the initial map.

Career data provides the terrain.

Matching provides possible routes.

Roadmaps provide directions.

AI provides conversational assistance.

The user remains the decision-maker.

---

7. Assessment Strategy

The assessment remains the signature experience of Career Finder.

The migration should preserve the original idea rather than replacing it with a conventional questionnaire.

---

7.1 Preserve the 30-Round Experience

The core assessment should retain:

- 30 rounds
- four visual choices per round
- images
- words
- multi-selection
- progress indication
- fast interactions
- mobile-first presentation

The original interaction is one of the most distinctive assets of the existing product.

It should therefore become a central part of the new product identity.

---

7.2 Why the Assessment Matters

The assessment serves several purposes.

Product purpose

It introduces users to Career Finder.

Measurement purpose

It creates structured signals about the user's work-style tendencies.

Engagement purpose

The visual interaction makes the experience more engaging than a traditional form.

Acquisition purpose

The assessment can function as a free entry point.

Personalization purpose

The assessment creates the initial career profile.

The assessment therefore sits at the beginning of the entire product system.

Landing Page
      ↓
Assessment
      ↓
Profile
      ↓
Career Discovery

---

7.3 Stage 1 — Signature Assessment

The first stage should focus primarily on work-style tendencies.

The four redesigned dimensions are:

Harmony
Exploration
Drive
Structure

These dimensions are not intended to define a user's personality.

They describe tendencies relevant to how someone may approach work.

---

7.4 Work-Style Dimension 1 — Harmony

Harmony represents tendencies toward:

- cooperation
- empathy
- support
- patience
- interpersonal consideration
- collaboration
- maintaining positive working relationships

Example behavioral signals:

Helping others succeed
Listening before responding
Supporting teammates
Considering how decisions affect others
Preferring cooperative environments

The assessment should measure behaviors and preferences rather than labeling the user.

---

7.5 Work-Style Dimension 2 — Exploration

Exploration represents tendencies toward:

- novelty
- experimentation
- spontaneity
- variety
- discovery
- expression
- trying unfamiliar approaches

Example behavioral signals:

Trying new approaches
Enjoying variety
Exploring unfamiliar ideas
Experimenting with possibilities
Adapting when circumstances change

---

7.6 Work-Style Dimension 3 — Drive

Drive represents tendencies toward:

- initiative
- leadership
- achievement
- decisiveness
- autonomy
- competition
- taking responsibility

Example behavioral signals:

Taking initiative
Leading a group
Making decisions
Pursuing challenging goals
Taking responsibility for outcomes
Working independently

Drive should not be interpreted as "better" than other dimensions.

High Drive is simply a different work-style tendency.

---

7.7 Work-Style Dimension 4 — Structure

Structure represents tendencies toward:

- organization
- planning
- precision
- consistency
- systematic thinking
- reliability
- attention to detail

Example behavioral signals:

Planning before acting
Organizing information
Following established processes
Checking details
Creating systems
Maintaining consistency

Again, Structure is not inherently better or worse than other dimensions.

---

7.8 Profile Instead of Personality Type

The result should not say:

You are a Structure personality.

Instead, it should present a multidimensional profile.

Example:

YOUR WORK-STYLE PROFILE

Harmony       72
Exploration   84
Drive         67
Structure     41

The profile represents relative tendencies.

It does not place the user into a rigid category.

---

7.9 Profile Interpretation

The result should provide a natural-language interpretation.

For example:

«Your responses suggest that you enjoy exploring new ideas and taking initiative, while preferring environments that provide flexibility rather than highly repetitive routines.»

The system should avoid making absolute claims.

Preferred language includes:

Your responses suggest...

You appear to prefer...

You may enjoy...

You may be more comfortable with...

These careers could be worth exploring...

---

7.10 Stage 2 — Personalization

The initial assessment should remain fast.

Career Finder should not immediately turn the experience into a 100-question assessment.

After the user receives their initial result, the product can ask a smaller number of additional questions.

For example:

Interests

«What activities interest you?»

Allow the user to select a limited number.

Pick up to 5

Potential categories include:

- building
- investigating
- creating
- helping
- leading
- organizing
- communicating
- analyzing
- teaching
- designing

---

Goals

«What matters most in your future work?»

Allow the user to select a limited number.

Pick up to 3

Potential goals include:

- income
- stability
- creativity
- helping people
- independence
- leadership
- work-life balance
- intellectual challenge
- flexibility
- social impact

---

Training Preference

«How much training are you willing to complete?»

Possible choices:

Short
Medium
Long

The exact definitions should be established during implementation.

---

7.11 Assessment Architecture

The conceptual assessment structure becomes:

                    ASSESSMENT
                         │
             ┌───────────┴───────────┐
             │                       │
       Work-Style Test          Interests
             │                       │
       Harmony                  Realistic
       Exploration              Investigative
       Drive                     Artistic
       Structure                 Social
                                 Enterprising
                                 Conventional
             │                       │
             └───────────┬───────────┘
                         ▼
                  Career Profile
                         │
              ┌──────────┼──────────┐
              ▼          ▼          ▼
          Preferences   Goals    Constraints
              │          │          │
              └──────────┼──────────┘
                         ▼
                  Matching Engine

This architecture allows the assessment to grow without redesigning the entire product.

---

7.12 Assessment Content Migration

The original assessment contains approximately 120 traits.

These should not simply be copied into the new system.

Each existing trait must be audited.

Every trait should receive one of:

KEEP
REWRITE
REPLACE
REMOVE
MERGE

KEEP

The trait already represents a useful and relatively clear behavioral signal.

REWRITE

The underlying concept is useful, but the wording needs improvement.

REPLACE

The original trait is too vague or poorly suited to the new measurement model.

REMOVE

The trait is judgmental, ambiguous, redundant or otherwise unsuitable.

MERGE

Several traits represent essentially the same underlying signal.

---

7.13 Negative Wording

The new assessment should avoid negative or judgmental personality labels.

Avoid:

"I am indecisive."

Prefer:

"I prefer to consider several options before making a decision."

Avoid:

"I lack initiative."

Prefer:

"I prefer being given clear direction before starting something new."

Avoid:

"I am controlling."

Prefer:

"I naturally take responsibility when a group needs direction."

The goal is to describe behavioral preferences, not judge character.

---

7.14 Situational Images

Assessment images should represent situations rather than stereotypes.

Avoid:

"Leader"
[generic CEO photograph]

Prefer:

Someone organizing a team around a project.

Avoid:

"Creative"
[generic artist photograph]

Prefer:

Someone experimenting with several design ideas.

The image should communicate an intuitive behavioral situation.

This is particularly important because the assessment is designed around visual recognition.

---

7.15 Multi-Dimensional Signals

The new assessment should not assume:

One response
      ↓
One category

Instead:

One response
      ↓
Multiple signals
      ↓
Multiple dimensions

For example, a response concerning difficult problem solving might contribute to:

Harmony       +0.0
Exploration   +0.2
Drive         +0.3
Structure     +0.4

Investigative +0.8
Realistic     +0.1
Artistic      +0.0
Social        +0.1
Enterprising  +0.1
Conventional  +0.2

The exact weights will be determined during the technical and assessment-design phases.

The important strategic decision is:

«A response is a signal, not category membership.»

---

7.16 Confidence and Clarity

Career Finder should avoid presenting weakly differentiated results as if they were highly precise.

For example:

Harmony       81
Exploration   79
Drive         78
Structure     80

This represents a relatively balanced profile.

The system should communicate that clearly.

For example:

«You have a relatively balanced work-style profile, with a slight preference toward Harmony and Structure.»

Compare that with:

Harmony       31
Exploration   88
Drive         84
Structure     42

This profile has clearer differentiation.

The result can therefore communicate:

- profile strength
- relative differences
- clarity/confidence

rather than pretending every score has equal significance.

---

7.17 Assessment Principle

The final assessment philosophy is:

Fast
+
Visual
+
Behavioral
+
Multidimensional
+
Explainable
+
Non-judgmental

The assessment should feel engaging enough to complete while producing structured information useful for the broader Career Finder platform.

The assessment is the front door.

It is not the entire house.

8. Career-Data Strategy

Career Finder's long-term quality will depend heavily on the quality of its career data.

A strong assessment with poor career data will still produce a poor product.

The career-data layer must therefore be treated as a core product system rather than a secondary content feature.

---

8.1 Career Data Objective

The objective is to create a structured career knowledge layer capable of supporting:

- career discovery
- career matching
- career comparison
- career pages
- skill-gap analysis
- career roadmaps
- AI explanations
- future regional adaptation

The data should be structured so that the application can reason about relationships between users, careers, interests, skills and requirements.

---

8.2 Career Data Model

A career should not simply be stored as:

Career
Name
Description

Instead, a career should eventually contain structured information such as:

Career
│
├── Identity
│   ├── Name
│   ├── Description
│   ├── Category
│   └── Related Careers
│
├── Interests
│   ├── Realistic
│   ├── Investigative
│   ├── Artistic
│   ├── Social
│   ├── Enterprising
│   └── Conventional
│
├── Work Style
│   ├── Harmony
│   ├── Exploration
│   ├── Drive
│   └── Structure
│
├── Work Environment
│   ├── People Interaction
│   ├── Autonomy
│   ├── Routine
│   ├── Variety
│   └── Flexibility
│
├── Skills
│   ├── Technical Skills
│   ├── Cognitive Skills
│   └── Soft Skills
│
├── Requirements
│   ├── Education
│   ├── Training
│   ├── Experience
│   └── Certifications
│
└── Market Information
    ├── Salary
    ├── Outlook
    ├── Demand
    └── Regional Information

The exact production schema will be defined during Phase 3.

---

8.3 Career Data Sources

Career Finder should use established occupational information wherever possible rather than attempting to manually invent the entire career database.

Potential sources include:

- O*NET
- government occupational databases
- official labor-market statistics
- education and qualification frameworks
- recognized professional organizations
- authoritative occupational sources
- carefully reviewed public datasets

The source strategy must be evaluated for:

- licensing
- attribution
- redistribution rights
- update frequency
- geographic coverage
- data completeness
- commercial usage restrictions

No external dataset should become a production dependency until its licensing and usage requirements have been verified.

---

8.4 O*NET as a Reference Layer

O*NET is particularly relevant because it provides structured occupational information across multiple dimensions.

Relevant areas include:

- occupations
- interests
- skills
- work styles
- work activities
- knowledge
- education
- technology
- related occupations

This makes O*NET a potentially valuable foundation or reference source for the matching architecture.

However, Career Finder should not simply copy O*NET into the application.

The product needs its own:

- user-facing terminology
- assessment content
- matching logic
- presentation
- explanations
- product experience

O*NET should therefore be treated as a potential data/reference layer rather than the identity of Career Finder.

---

8.5 Regional Data

Career information varies significantly between countries.

For example:

Education
   ↓
Qualification
   ↓
Professional Requirements
   ↓
Employment

may differ between:

- United States
- United Kingdom
- Netherlands
- Nigeria
- Canada
- Australia
- other regions

Therefore the long-term architecture should avoid assuming that one country's career pathway applies globally.

Career data should eventually support regional context.

---

8.6 Regional Career Model

The conceptual structure should eventually look like:

Career
   │
   ├── Global Definition
   │
   ├── Region A
   │   ├── Education
   │   ├── Requirements
   │   ├── Salary
   │   └── Outlook
   │
   ├── Region B
   │   ├── Education
   │   ├── Requirements
   │   ├── Salary
   │   └── Outlook
   │
   └── Region C
       ├── Education
       ├── Requirements
       ├── Salary
       └── Outlook

This does not need to be fully implemented in MVP.

However, the data model should avoid making future regional expansion unnecessarily difficult.

---

8.7 Data Freshness

Career information changes.

Examples include:

- salary
- employment demand
- technology requirements
- education requirements
- occupational classifications
- emerging careers

Career Finder should therefore track metadata such as:

Source
Source Version
Retrieved At
Updated At
Region
Confidence

This will make the career-data system easier to maintain and audit.

---

8.8 Data Provenance

Every important career-data field should ideally have a known source.

Conceptually:

Career
   ↓
Attribute
   ↓
Source
   ↓
Source Date

This is particularly important for:

- salary
- job outlook
- education requirements
- certifications
- technology
- occupational descriptions

The application should avoid presenting uncertain or outdated information as absolute fact.

---

8.9 Career Data Normalization

Different sources may describe the same concept differently.

For example:

Software Developer
Software Engineer
Application Developer
Software Programmer

may overlap significantly while representing different occupational classifications depending on the source.

Career Finder will therefore need a normalization layer.

Conceptually:

External Sources
      ↓
Normalization
      ↓
Canonical Career Model
      ↓
Application

This prevents the frontend and matching engine from becoming dependent on the structure of any individual external provider.

---

8.10 Skills Data

Skills are essential because Career Finder eventually needs to answer:

«"What do I need to become this?"»

A career should therefore have structured skill relationships.

Career
   ↓
Required / Relevant Skills
   ↓
Skill Level

For example:

Data Analyst

SQL             High
Statistics      High
Data Viz        High
Spreadsheets    Medium
Communication   Medium
Programming     Medium

The exact skill levels should be derived from validated career data rather than arbitrary assumptions.

---

8.11 Career Relationships

The career database should support relationships such as:

Career A
   │
   ├── Related Career
   ├── Alternative Career
   ├── Advancement Career
   └── Adjacent Career

This allows Career Finder to support questions such as:

«"What else could I do?"»

and:

«"What careers are similar to this one?"»

This becomes especially valuable for career changers.

---

8.12 Career Data as a Product Asset

Over time, the structured career-data layer becomes one of Career Finder's most important assets.

The product should progressively build:

Assessment Data
       +
Career Data
       +
Skill Data
       +
User Preferences
       +
Career Relationships
       ↓
Career Intelligence Layer

This intelligence layer can power:

- recommendations
- comparisons
- roadmaps
- AI explanations
- personalization

---

9. AI Strategy

AI should be an important part of Career Finder, but it should not control the fundamental assessment or matching system.

The core principle is:

«Deterministic data first. AI assistance second.»

---

9.1 What AI Should Not Do

AI should not independently determine:

- the user's assessment score
- the user's work-style dimensions
- the primary career-match score
- whether a user is "suited" for a career
- factual career requirements without grounding
- definitive predictions about the user's future

For example, the system should not work like:

User Answers
    ↓
LLM
    ↓
"You're a software engineer."

That approach would be difficult to:

- reproduce
- test
- debug
- audit
- explain

It could also produce inconsistent results for the same inputs.

---

9.2 Deterministic Core

The recommended architecture is:

Assessment Responses
        ↓
Deterministic Scoring
        ↓
Structured Profile
        ↓
Deterministic Career Matching
        ↓
Structured Career Results

This creates a stable foundation.

The same inputs should produce the same underlying results.

---

9.3 AI as an Interpretation Layer

AI can then sit on top of the structured system.

Structured Profile
       +
Career Data
       +
Match Explanation
       ↓
      AI
       ↓
Natural Language Assistance

The AI can turn structured information into understandable explanations.

---

9.4 AI Use Case 1 — Explain

User:

«"Why did I get Data Analyst?"»

The AI can explain the existing match using structured signals.

For example:

Your profile shows strong investigative interests,
a preference for structured problem solving and
a relatively high comfort with analytical work.

The AI is explaining existing data.

It is not inventing a new assessment result.

---

9.5 AI Use Case 2 — Compare

User:

«"What's the difference between Data Analysis and Software Engineering for me?"»

The system can provide structured comparison data to the AI.

The AI can then explain:

Both careers align with your analytical interests,
but Software Engineering may offer more emphasis on
building systems, while Data Analysis may involve more
interpretation and communication of information.

The underlying comparison remains grounded in the career data.

---

9.6 AI Use Case 3 — Plan

User:

«"What should I learn first?"»

The AI can use:

Target Career
+
Required Skills
+
Current Skills
+
Skill Gaps

to help explain the roadmap.

The roadmap itself should remain grounded in structured data.

---

9.7 AI Use Case 4 — Coach

The eventual AI Career Coach can support conversational interaction.

Examples:

"I have no experience. Where should I start?"

"Which of these careers requires less training?"

"Can I move from marketing into data analysis?"

"What skills from my current job could transfer?"

"What should I focus on this month?"

The coach should help users navigate Career Finder's existing intelligence.

---

9.8 AI Use Case 5 — Adapt

AI can help users explore alternative scenarios.

For example:

«"I don't want to go to university."»

The system could use the available career and education data to identify relevant alternative pathways where such pathways exist.

The AI should clearly distinguish:

Known data
from
AI-generated guidance

---

9.9 AI Must Not Silently Override Matching

Suppose the deterministic engine produces:

Software Engineering → Strong Match
Accounting → Moderate Match
Medicine → Weak Match

The AI should not silently change the ranking.

If the user says:

«"I really want to become a doctor."»

the AI can respond by acknowledging the user's stated goal and helping them explore it.

For example:

Medicine was not among your strongest current matches,
but your interest in it is still worth exploring.
Let's look at what the career requires and how it
compares with your current profile.

This maintains user autonomy and system transparency.

---

9.10 Grounded AI

AI responses should ideally be generated from structured context such as:

User Profile
+
Career Data
+
Career Match
+
Skill Data
+
Roadmap
+
User Question

rather than allowing the model to answer from unrestricted general knowledge whenever factual career information is involved.

The architecture should therefore support grounded retrieval.

Conceptually:

User Question
      ↓
Intent
      ↓
Relevant Career Data
      ↓
Relevant User Data
      ↓
AI
      ↓
Answer

---

9.11 AI Guardrails

The AI system should eventually include rules covering:

No deterministic override

AI cannot silently modify assessment or match results.

No unsupported certainty

AI should avoid statements such as:

«"You will succeed in this career."»

No fabricated career requirements

Career facts should come from trusted structured data whenever possible.

Transparent uncertainty

When data is incomplete, the AI should acknowledge that.

User autonomy

The AI should help users make decisions rather than make those decisions for them.

Data minimization

Only the user information required for the specific AI interaction should be supplied.

---

9.12 AI Architecture

The conceptual architecture becomes:

                    USER
                      │
                      ▼
                CAREER FINDER
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
    Structured Data          AI Interface
          │                       │
          │                       ▼
          │                 Intent / Query
          │                       │
          └───────────┬───────────┘
                      ▼
               Context Builder
                      │
          ┌───────────┼───────────┐
          ▼           ▼           ▼
       Profile      Career       Skills
         Data         Data         Data
          │           │           │
          └───────────┼───────────┘
                      ▼
                     AI
                      │
                      ▼
              Grounded Response

---

9.13 AI and Premium

AI is a potential premium feature, but it should not be the only premium value.

The broader premium proposition should be:

Detailed Profile
+
Career Comparison
+
Skill Analysis
+
Personal Roadmap
+
AI Coach
+
Progress Tracking

This makes premium valuable even when users do not constantly use the AI.

---

9.14 AI Strategy Principle

The final strategy is:

AI should explain the intelligence,
not replace the intelligence.

Career Finder's core intellectual property should remain in:

- assessment design
- scoring architecture
- career data
- matching logic
- skill relationships
- career relationships
- product experience

AI then becomes the conversational interface to that intelligence.

# 10. MVP Definition

The MVP should prove that Career Finder can successfully transform a user's initial curiosity into meaningful career discovery.

The MVP should not attempt to build the entire long-term Career Finder vision.

The goal is to build the smallest version that validates the core product loop.

---

## 10.1 MVP Objective

The primary MVP question is:

> **Will users complete the assessment, find the results useful, explore careers, and want to continue their career journey with Career Finder?**

The MVP therefore needs to validate:

```text id="qz4y3h"
Discovery
   ↓
Assessment
   ↓
Profile
   ↓
Career Matches
   ↓
Career Exploration
   ↓
Account
   ↓
Saved Career Journey
```

Everything beyond this should be evaluated carefully against its contribution to that loop.

---

## 10.2 MVP Core Features

The initial SaaS MVP should contain:

### Public Experience

* Landing page
* Product explanation
* Assessment introduction
* 30-round assessment
* Four visual choices per round
* Multi-selection
* Progress indicator
* Assessment completion

### Assessment

* Work-style scoring
* Harmony
* Exploration
* Drive
* Structure
* Initial interest signals
* Result interpretation
* Profile visualization

### Career Discovery

* Career matching
* Top career matches
* Basic match explanation
* Career categories
* Career search/exploration

### Career Pages

Each supported career should have a structured page containing relevant information.

At minimum:

* career name
* overview
* what the career involves
* typical activities
* relevant interests
* relevant work-style characteristics
* key skills
* education/training information
* related careers

### User Account

* Account creation
* Sign in
* Saved assessment
* Saved career profile
* Saved careers

### Sharing

* Shareable result
* Public/shareable result representation
* Social sharing support

---

## 10.3 MVP Assessment Scope

The MVP should retain the signature:

```text id="wq8d9p"
30 rounds
×
4 choices
×
visual interaction
```

The assessment should primarily measure the four work-style dimensions:

```text id="4a3gr8"
Harmony
Exploration
Drive
Structure
```

The assessment should not attempt to measure dozens of independent psychological constructs.

The goal is to create a useful first-generation work-style profile.

---

## 10.4 MVP Interest Layer

The MVP should introduce a lightweight interest layer rather than building a massive vocational assessment.

The product can begin with a concise personalization step after the primary assessment.

For example:

```text id="8jv5ez"
What activities interest you?

Pick up to 5.
```

The interests should map conceptually to:

```text id="s8l3jk"
Realistic
Investigative
Artistic
Social
Enterprising
Conventional
```

The user-facing terminology may be more accessible than the academic labels.

---

## 10.5 MVP Career Matching

The matching engine should combine multiple signals.

Conceptually:

```text id="l8b6nq"
User
 │
 ├── Work Style
 ├── Interests
 ├── Preferences
 └── Goals
        │
        ▼
  Matching Engine
        │
        ▼
 Career Candidates
```

The MVP does not need an extremely sophisticated machine-learning system.

A deterministic weighted model is preferable initially because it is:

* understandable
* testable
* reproducible
* adjustable
* explainable

---

## 10.6 MVP Match Explanation

Every career recommendation should have a reason.

Example:

```text id="8s0r0p"
DATA ANALYST

Strong Match

Why this career appears:

✓ Strong investigative interests
✓ Comfortable with analytical problems
✓ Preference for structured work
✓ Interest in solving complex problems
```

The exact explanation should be generated from the underlying structured match data.

AI can later improve the language.

---

## 10.7 MVP Career Database

The MVP should not attempt to contain every occupation in existence.

Start with a curated, high-quality career dataset.

The initial database should prioritize careers that:

* have reliable data
* have meaningful interest profiles
* have identifiable skills
* have useful career relationships
* are relevant to the target market
* can support useful career pages

The database can expand after the core product has been validated.

---

## 10.8 MVP Career Pages

A career page should provide enough information for the user to decide whether they want to investigate further.

Conceptually:

```text id="qf4j4m"
CAREER

Data Analyst

Overview
What you do
Typical work
Work environment
Skills
Education / training
Career outlook
Related careers

Your match
Why it matches you
Potential considerations
```

The page should prioritize useful information over excessive content.

---

## 10.9 MVP Account System

The user should be able to create an account after receiving meaningful value.

The product should avoid forcing account creation before the assessment unless technically necessary.

Preferred journey:

```text id="v0z1vo"
Landing
   ↓
Assessment
   ↓
Results
   ↓
"Save your results"
   ↓
Create account
```

This reduces initial friction.

---

## 10.10 MVP Save System

Users should be able to save:

* their assessment
* their profile
* careers they are interested in

This creates the beginning of the long-term career workspace.

```text id="wqk0y3"
Assessment
     ↓
Profile
     ↓
Saved
     ↓
Career Exploration
     ↓
Saved Careers
```

---

## 10.11 MVP Dashboard

The initial dashboard should be intentionally simple.

Conceptually:

```text id="0n0yn6"
MY CAREER PROFILE

Work Style
──────────────
Harmony       ████████░░
Exploration   █████████░
Drive         ███████░░░
Structure     █████░░░░░

Top Interests
──────────────
Investigative
Enterprising
Artistic

Career Matches
──────────────
1. Software Engineer
2. Data Analyst
3. Product Designer
4. Product Manager
5. UX Researcher

Saved Careers
──────────────
...
```

The dashboard should establish the foundation for future premium features.

---

## 10.12 Features Explicitly Excluded From MVP

The following should not be required for MVP completion:

* job board
* application tracking
* resume builder
* counselor dashboard
* school administration
* organization analytics
* learning marketplace
* course marketplace
* social network
* complex messaging system
* full AI career coach
* advanced progress tracking
* large-scale B2B functionality

These features may become valuable later, but they should not delay validation of the core product.

---

## 10.13 Post-MVP Layer

Once the core product has demonstrated demand, the next layer can introduce:

```text id="yn8x73"
Career Comparison
        ↓
Skill-Gap Analysis
        ↓
Personalized Roadmap
        ↓
AI Career Explanations
        ↓
AI Career Coach
        ↓
Progress Tracking
```

These features deepen the product rather than changing its fundamental identity.

---

## 10.14 MVP Completion Criteria

The MVP should not be considered complete merely because all screens exist.

The MVP is complete when a real user can:

```text id="1w0t2c"
1. Discover Career Finder
2. Start the assessment
3. Complete all 30 rounds
4. Receive a work-style profile
5. Provide basic interest information
6. Receive career matches
7. Understand why careers matched
8. Open career detail pages
9. Create an account
10. Save their profile
11. Save careers
12. Return to their results
13. Share their result
```

The entire journey should work end-to-end.

---

# 11. Free vs Premium

Career Finder should use a **freemium model**.

The fundamental principle is:

> **Free should provide genuine value. Premium should provide deeper intelligence and continued utility.**

The product should never make users pay simply to discover their basic result.

---

## 11.1 Free Experience

The free product should include:

```text id="8v5r1g"
30-Round Assessment
        ↓
Basic Work-Style Profile
        ↓
Basic Interest Profile
        ↓
Top Career Matches
        ↓
Basic Career Pages
        ↓
Share Result
```

This creates a complete and useful free experience.

---

## 11.2 Why the Assessment Must Be Free

The assessment is the primary acquisition mechanism.

If the user completes the assessment and then encounters:

> "Pay to see your result."

the experience becomes transactional.

That can damage:

* trust
* conversion
* sharing
* brand perception
* organic growth

The free assessment should therefore deliver a meaningful result.

---

## 11.3 Premium Philosophy

Premium should unlock **depth**, not basic access.

Potential premium features include:

* detailed career profile
* expanded career matches
* advanced career comparison
* detailed match explanations
* skill-gap analysis
* personalized career roadmap
* deeper career information
* unlimited saved careers
* multiple assessment attempts
* profile history
* progress tracking
* AI career coach

---

## 11.4 Free vs Premium Boundary

| Feature                  | Free              | Premium   |
| ------------------------ | ----------------- | --------- |
| 30-round assessment      | Yes               | Yes       |
| Basic work-style profile | Yes               | Yes       |
| Basic interest profile   | Yes               | Yes       |
| Top career matches       | Yes               | Expanded  |
| Basic career pages       | Yes               | Yes       |
| Share result             | Yes               | Yes       |
| Save careers             | Limited           | Unlimited |
| Career comparison        | Limited / Preview | Full      |
| Detailed match analysis  | Basic             | Full      |
| Skill-gap analysis       | No                | Yes       |
| Personalized roadmap     | No                | Yes       |
| Multiple assessments     | Limited           | Yes       |
| Profile history          | No                | Yes       |
| Progress tracking        | No                | Yes       |
| AI career coach          | No / Limited      | Yes       |

The exact limits should be determined through validation experiments.

---

## 11.5 Premium Value Ladder

The premium experience should progressively move the user from:

```text id="7l5u8x"
"What careers might fit me?"
```

to:

```text id="xk5t4v"
"Why do they fit me?"
```

then:

```text id="5upk85"
"What do I need?"
```

then:

```text id="q8kv6v"
"What should I do next?"
```

and eventually:

```text id="r1zy7q"
"Help me stay on track."
```

This creates a natural value progression.

---

## 11.6 Premium Conversion Moment

The strongest premium conversion opportunities are likely to occur after the user has already experienced value.

Potential moments include:

### After career discovery

> Explore your full career match analysis.

### After comparison

> Compare these careers in greater detail.

### After selecting a career

> See what skills you need and where your gaps are.

### After identifying a skill gap

> Build your personalized roadmap.

### During planning

> Get ongoing help from the AI Career Coach.

The user should understand exactly what additional value premium provides.

---

## 11.7 No Artificial Friction

Career Finder should avoid manipulative paywalls such as:

```text id="7t4vda"
"Your result is ready."
        ↓
PAY
        ↓
See result
```

Instead:

```text id="j8zj31"
Your result
     ↓
Useful free experience
     ↓
Premium depth
```

The user should never feel that the product intentionally withheld the basic answer.

---

## 11.8 Premium as a Career Workspace

Long-term premium should feel less like buying a report and more like subscribing to a personal career workspace.

```text id="yy1ly8"
MY CAREER JOURNEY

Profile
   ↓
Career Options
   ↓
Comparison
   ↓
Chosen Direction
   ↓
Skill Gaps
   ↓
Roadmap
   ↓
Progress
   ↓
AI Coach
```

This supports recurring subscription value.

---

## 11.9 Subscription Principle

The subscription must provide continuing value.

A user should have reasons to return after the initial assessment.

Potential recurring value includes:

* progress tracking
* roadmap updates
* changing career goals
* reassessments
* saved career research
* skill development
* AI coaching
* career comparisons
* profile evolution

Without recurring value, a one-time report or purchase may be more appropriate than a subscription.

---

## 11.10 Free-to-Premium Strategy

The intended conversion path is:

```text id="kq1xq5"
FREE ASSESSMENT
       ↓
Useful Result
       ↓
Career Exploration
       ↓
User discovers deeper questions
       ↓
Premium Feature
       ↓
Career Planning
       ↓
Continued Usage
```

The premium product should answer questions that naturally arise from the free experience.

---

## 11.11 Core Monetization Principle

Career Finder should monetize:

> **clarity, depth and actionability**

rather than:

> **basic access to the user's own assessment result.**

This should remain a core product principle throughout the migration.


12. Pricing Hypotheses

Pricing should not be finalized before the product has been validated.

At this stage, pricing should be treated as a set of hypotheses to test.

The objective is not to choose the highest possible price.

The objective is to determine:

«What level of recurring value are users willing to pay for?»

---

12.1 Initial Pricing Philosophy

Career Finder should initially use a freemium model.

FREE
↓
Assessment
↓
Basic Profile
↓
Career Discovery

Then:

PREMIUM
↓
Deeper Intelligence
↓
Career Planning
↓
Ongoing Career Support

The free experience drives acquisition.

Premium provides deeper value.

---

12.2 Pricing Should Follow Value

The product should not price premium based simply on the number of features.

For example:

10 premium features
≠
high perceived value

Instead:

Important User Problem
        ↓
Useful Solution
        ↓
Perceived Value
        ↓
Willingness to Pay

The most valuable features are likely to be those that help users move from uncertainty to action.

---

12.3 Initial Pricing Hypotheses

The initial consumer pricing hypotheses can be tested around several levels.

Hypothesis A — Low-Cost Subscription

Approximately:

€4–€7 / month

This could reduce purchase friction and make the product accessible to students and younger users.

Potential downside:

The price may be too low to support meaningful customer acquisition and product development.

---

Hypothesis B — Mid-Range Subscription

Approximately:

€8–€15 / month

This could position Career Finder as a serious career-planning product rather than a simple quiz.

Potential downside:

The product would need to demonstrate significantly more recurring value.

---

Hypothesis C — Annual Plan

An annual plan could provide:

Lower effective monthly price
+
Higher commitment
+
Better retention

For example, if monthly pricing were approximately €10, an annual plan could be positioned around:

€80–€100 / year

These numbers are hypotheses, not final pricing decisions.

---

12.4 One-Time Purchase Hypothesis

A one-time purchase could also be tested for users who do not need a recurring career workspace.

For example:

Detailed Career Report
+
Career Comparison
+
Skill Analysis
+
Roadmap

could potentially be offered as a one-time purchase.

However, this model provides less recurring revenue and may reduce long-term engagement.

---

12.5 Hybrid Pricing Model

A potential long-term model is:

FREE
   │
   ├── Assessment
   ├── Basic Profile
   ├── Top Matches
   └── Basic Career Exploration
           │
           ▼
       PREMIUM
           │
   ├── Advanced Profile
   ├── Comparisons
   ├── Skill Gaps
   ├── Roadmaps
   ├── AI Coach
   └── Progress Tracking

A one-time report could potentially exist alongside the subscription if validation supports it.

---

12.6 Student Pricing

Because students are an important target segment, a lower-cost plan could eventually be considered.

Potential models:

Student Monthly
Student Annual
Student Verification Discount

However, student pricing should not be introduced until the standard pricing structure has been validated.

---

12.7 Pricing Experiments

Pricing should be tested through controlled experiments.

Potential experiments:

€5/month
vs
€10/month

or:

€8/month
vs
€12/month

Metrics should include:

- conversion rate
- trial conversion
- cancellation rate
- retention
- revenue per user
- customer lifetime value
- refund rate

A lower price is not automatically better if it produces weak revenue or poor retention.

---

12.8 Free Trial Hypothesis

A premium trial could eventually be tested.

Possible models:

Model A

7-day premium trial.

Model B

Limited premium features for a fixed number of days.

Model C

Limited premium credits.

The product should avoid making the trial confusing or deceptive.

Users should clearly understand:

- when the trial ends
- whether payment begins afterward
- what they receive
- how to cancel

---

12.9 Pricing Validation Principle

The final pricing should be based on observed behavior rather than assumptions.

The process should be:

Pricing Hypothesis
        ↓
Experiment
        ↓
User Behavior
        ↓
Revenue Data
        ↓
Retention Data
        ↓
Pricing Decision

Pricing should remain adjustable during the early stages of the business.

---

13. B2C Strategy

The initial business strategy should focus entirely on the individual consumer.

Career Finder should first prove that individuals:

1. want the assessment
2. complete it
3. find the results useful
4. explore careers
5. return to the product
6. save careers
7. use planning features
8. eventually pay for deeper value

Only after this loop works should B2B become a major focus.

---

13.1 B2C Product Loop

The core consumer loop is:

DISCOVER
   ↓
ASSESS
   ↓
UNDERSTAND
   ↓
EXPLORE
   ↓
COMPARE
   ↓
PLAN
   ↓
RETURN

The product should progressively move users deeper into the journey.

---

13.2 Acquisition Entry Point

The strongest initial acquisition mechanism should be the free assessment.

Potential entry messaging:

«Discover what kinds of work may fit you.»

or:

«Explore careers that match the way you think, work and what interests you.»

The user should be able to start quickly.

---

13.3 First Session

The first session should prioritize:

Low Friction
+
High Engagement
+
Immediate Value

The preferred experience is:

Landing Page
      ↓
Start Assessment
      ↓
30 Visual Rounds
      ↓
Profile
      ↓
Career Matches

Account creation should ideally happen after the user has experienced value.

---

13.4 Activation

A user should be considered meaningfully activated when they have reached a useful career-discovery moment.

A possible activation event is:

Assessment Completed
+
Profile Generated
+
Career Matches Viewed

This is more meaningful than simply:

Account Created

because an account does not necessarily mean the product delivered value.

---

13.5 Engagement

The product should encourage users to continue exploring.

Possible actions include:

View Career
        ↓
Compare Career
        ↓
Save Career
        ↓
Explore Related Careers

This creates deeper engagement.

---

13.6 Account Conversion

The account should become useful rather than mandatory.

A user should have a clear reason to create one.

For example:

«Save your results and continue exploring later.»

Then:

Assessment
   ↓
Results
   ↓
Save Results
   ↓
Account

This allows anonymous users to experience the product before committing.

---

13.7 B2C Retention

Retention should come from ongoing career utility.

Potential reasons to return:

- reassess yourself
- compare careers
- update goals
- explore saved careers
- track skill development
- update roadmap
- use AI coaching
- discover new career information

The long-term product should therefore become:

One-Time Assessment
        ↓
Career Workspace
        ↓
Ongoing Career Journey

---

13.8 B2C Segmentation

Users should eventually be segmented by their current objective.

Possible states:

Exploring
Student
Job Seeker
Career Changer
Working Professional

This information can personalize:

- onboarding
- career recommendations
- roadmap content
- messaging
- premium offers
- AI assistance

---

13.9 B2C Personalization

Personalization should progressively increase.

Stage 1

Work-style profile.

Stage 2

Interest profile.

Stage 3

Work preferences.

Stage 4

Goals.

Stage 5

Current skills.

Stage 6

Career target.

Stage 7

Roadmap.

The user should not be required to provide all of this information before receiving value.

---

13.10 B2C Growth Model

The intended consumer growth loop is:

FREE ASSESSMENT
       ↓
GREAT RESULT
       ↓
CAREER DISCOVERY
       ↓
SAVE / SHARE
       ↓
RETURN
       ↓
PREMIUM

The product should be designed so that each stage naturally creates the next action.

---

13.11 B2C Brand Strategy

The brand should feel:

- modern
- approachable
- intelligent
- trustworthy
- optimistic
- practical

It should avoid feeling like:

- a clinical psychological test
- a generic quiz website
- an educational bureaucracy
- an AI gimmick
- a corporate HR platform

The visual assessment can provide a distinctive personality to the product.

---

13.12 Trust Strategy

Career decisions can influence important life choices.

Trust therefore needs to be treated as a product feature.

Career Finder should communicate:

Your results are guidance,
not a prediction of your future.

The product should explain:

- what the assessment measures
- how matching works
- where career information comes from
- what the match means
- what the match does not mean

Transparency should be built into the UX.

---

13.13 B2C Success Condition

The B2C strategy succeeds when Career Finder demonstrates:

People discover it
       ↓
People complete it
       ↓
People find it useful
       ↓
People explore careers
       ↓
People return
       ↓
Some users pay
       ↓
Revenue supports continued growth

The first objective is therefore product-market validation, not maximum monetization.

---

13.14 B2C Before B2B

The order should remain:

B2C MVP
   ↓
User Validation
   ↓
Retention
   ↓
Monetization
   ↓
Repeatable Acquisition
   ↓
B2B Experiments

B2B should not distract the team before the core consumer product has demonstrated demand.


14. Future B2B Strategy

B2B should be treated as a second-stage expansion, not an MVP requirement.

The consumer product must first establish:

- a credible assessment
- reliable career data
- useful matching
- strong user experience
- measurable engagement
- retention
- monetization

Once those foundations exist, the same underlying Career Finder intelligence can support organizations.

---

14.1 B2B Opportunity

The core B2C system produces structured career information about users.

Conceptually:

Assessment
     ↓
Career Profile
     ↓
Career Interests
     ↓
Career Matches
     ↓
Career Planning

Organizations can potentially use the same system to support:

- students
- career counselors
- schools
- universities
- workforce programs
- training organizations
- career-development providers

The underlying technology remains largely the same.

---

14.2 B2B Product Direction

The future B2B product could become:

«Career Finder for Organizations»

Potential organization types:

Schools
Universities
Career Centers
Training Organizations
Workforce Programs
Counselors

Each organization would have an administrative workspace.

---

14.3 School Dashboard

A future school dashboard could look conceptually like:

ORGANIZATION
│
├── Students
│
├── Assessments
│
├── Career Interests
│
├── Career Clusters
│
├── Reports
│
└── Settings

The school could monitor aggregate information without exposing unnecessary individual information.

---

14.4 Counselor Dashboard

A counselor-focused product could provide:

COUNSELOR
│
├── Clients
│
├── Assessments
│
├── Career Profiles
│
├── Career Matches
│
├── Saved Careers
│
├── Roadmaps
│
└── Notes

This could turn Career Finder into a tool that supports human career professionals rather than attempting to replace them.

---

14.5 B2B Value Proposition

The B2B proposition should eventually focus on:

- reducing manual assessment work
- giving counselors better client context
- helping students explore careers
- providing structured career information
- supporting career conversations
- tracking career exploration
- producing useful reports

The product should not simply sell organizations access to the consumer assessment.

It should solve an organizational workflow problem.

---

14.6 B2B Data Separation

B2B introduces substantially greater privacy requirements.

The architecture should eventually distinguish between:

Individual User Data
        │
        ├── Personal Profile
        ├── Assessments
        └── Career Journey

Organization Data
        │
        ├── Organization
        ├── Members
        ├── Roles
        └── Aggregate Analytics

Access must be governed by explicit permissions.

---

14.7 B2B Privacy Principle

Organizations should not automatically receive access to every piece of a user's personal career data.

The future system should support:

- consent
- role-based access
- data minimization
- clear ownership
- auditability
- appropriate retention policies

These requirements should influence the technical architecture even before B2B is implemented.

---

14.8 B2B Monetization

Potential B2B pricing models include:

Per-seat

Organization
    ↓
Number of users
    ↓
Subscription

Per-student

Students
    ×
Price per student

Counselor subscription

Counselor
    ↓
Monthly subscription

Organization license

Annual Organization License

The appropriate model should be validated with real organizations.

---

14.9 B2B Expansion Order

The preferred expansion sequence is:

B2C
 ↓
B2C Validation
 ↓
Counselor Pilot
 ↓
Small Organization Pilot
 ↓
School / Training Organization
 ↓
Larger Organization

This minimizes the risk of building a large enterprise system before understanding actual demand.

---

14.10 B2B Should Reuse the Core Platform

The long-term architecture should avoid building a completely separate product.

Instead:

                 CAREER FINDER CORE
                        │
            ┌───────────┴───────────┐
            ▼                       ▼
          B2C                     B2B
            │                       │
      Individual App         Organization App

Both products can share:

- career database
- assessment engine
- matching engine
- skill system
- roadmap system
- AI infrastructure

Only the workflows and permissions differ.

---

14.11 B2B Is Not Phase 3

B2B should not become a Phase 3 migration requirement unless a specific architectural dependency makes it necessary.

Phase 3 should primarily prepare the system for the B2C SaaS MVP.

B2B readiness should be achieved through good architecture, not premature B2B features.

---

15. Acquisition Strategy

Career Finder should be designed around product-led acquisition.

The product itself should be capable of attracting users through:

- search
- sharing
- recommendations
- social content
- communities
- referrals
- partnerships

Paid advertising can be tested later, but should not be assumed to be the primary growth engine.

---

15.1 Acquisition Funnel

The initial funnel should be:

DISCOVERY
   ↓
LANDING PAGE
   ↓
START ASSESSMENT
   ↓
COMPLETE ASSESSMENT
   ↓
VIEW RESULT
   ↓
EXPLORE CAREERS
   ↓
CREATE ACCOUNT
   ↓
RETURN
   ↓
PREMIUM

Each stage should have measurable conversion.

---

15.2 Primary Acquisition Asset

The strongest acquisition asset should be the assessment itself.

The product should make it easy to communicate:

«Discover what kinds of work may fit you.»

This is more compelling than marketing the underlying technology.

The user does not need to care that the system contains:

- RIASEC mappings
- weighted scoring
- career datasets
- structured occupational models

They care about discovering useful career possibilities.

---

15.3 Organic Search

SEO should become a major long-term acquisition channel.

Career Finder can potentially rank for searches such as:

What career should I choose?
Best careers for analytical people
Careers for creative people
Careers that involve helping people
Careers for people who like technology
Data analyst career
Software engineer career
Product designer career
Career assessment
Career test
Career exploration

The strategy should not rely solely on generic "career test" keywords.

---

15.4 Career Pages as Acquisition Pages

Every high-quality career page can become an independent search entry point.

For example:

Google Search
     ↓
Career Finder Career Page
     ↓
Career Information
     ↓
"See how this career matches you"
     ↓
Assessment

This creates a bridge between informational search and product activation.

---

15.5 Assessment-to-SEO Loop

The product can create a strong relationship between content and assessment.

SEO Career Content
        ↓
User discovers Career Finder
        ↓
Assessment
        ↓
Career Matches
        ↓
More Career Pages
        ↓
More Search Visibility

The content system should therefore be considered part of the acquisition strategy.

---

15.6 Social Acquisition

The visual nature of the assessment creates opportunities for social content.

Potential content formats:

- career comparison cards
- career facts
- work-style insights
- assessment snippets
- career myths
- "Which career fits this profile?" posts
- career exploration prompts
- personalized result sharing

The goal is not to expose sensitive user information.

Shared results should be intentionally designed for privacy-safe sharing.

---

15.7 Shareable Results

The assessment result should be visually attractive enough that users want to share it.

Example:

MY CAREER FINDER PROFILE

Exploration     █████████░
Drive           ████████░░
Harmony         ███████░░░
Structure       █████░░░░░

Top interests:
Investigative
Enterprising
Artistic

Then:

«Explore your own career profile.»

This creates a natural referral mechanism.

---

15.8 Referral Loop

The intended loop is:

User Completes Assessment
          ↓
Receives Attractive Result
          ↓
Shares Result
          ↓
Friend Sees Result
          ↓
Friend Takes Assessment
          ↓
New User

This is one of the reasons the assessment result should be treated as a product experience rather than simply a data output.

---

15.9 Community Acquisition

Potential communities include:

- students
- university communities
- career-change communities
- technology communities
- professional communities
- education communities

Career Finder should contribute useful information rather than simply posting promotional links.

---

15.10 Partnerships

Potential future partners include:

- universities
- schools
- student organizations
- career communities
- educational creators
- career coaches
- professional communities

Partnerships become more attractive once the product has evidence of user value.

---

15.11 Creator Strategy

Career content creators can become potential distribution partners.

Examples include creators producing:

- career advice
- student advice
- technology careers
- career-change content
- education content
- professional development content

A creator could direct their audience to:

Free Career Finder Assessment

This creates a measurable acquisition channel.

---

15.12 Paid Acquisition

Paid advertising should not be the first assumption.

Before spending significantly on ads, Career Finder should establish:

- assessment completion
- activation
- retention
- conversion
- customer lifetime value

Otherwise:

Paid Traffic
   ↓
Poor Product Conversion
   ↓
Expensive Learning

Instead:

Organic Validation
   ↓
Conversion Data
   ↓
Retention Data
   ↓
Paid Acquisition Test

---

15.13 Acquisition Channel Testing

Each channel should be evaluated using measurable metrics.

Channel| Primary Metric
SEO| Organic assessment starts
Social| Assessment starts
Referral| Referred users
Creator| Activated users
Partnerships| Activated users
Paid Ads| Cost per activated user
Direct| Returning users

The product should avoid optimizing for vanity metrics such as raw impressions alone.

---

15.14 Acquisition Principle

The acquisition strategy should follow:

Useful Product
      ↓
Useful Result
      ↓
Shareable Experience
      ↓
Organic Discovery
      ↓
More Users
      ↓
More Product Learning

The objective is to build a product that naturally supports its own distribution.

---

15.15 Acquisition Priority

Initial priority should be:

1. Product-led assessment
2. SEO
3. Share/referral loop
4. Social content
5. Communities
6. Partnerships
7. Creator distribution
8. Paid acquisition

The order may change as evidence accumulates.

The important principle is that paid acquisition should not be used to hide a weak product.


16. Viral / Share Loop

Career Finder should deliberately design sharing into the product rather than treating it as an afterthought.

The assessment is naturally suited to sharing because users receive a personal profile that can be represented visually.

The objective is to create a loop where users can share their results without exposing sensitive personal information.

---

16.1 Core Share Loop

The fundamental loop is:

User
 ↓
Completes Assessment
 ↓
Receives Career Profile
 ↓
Shares Result
 ↓
Friend / Follower Sees Result
 ↓
Visits Career Finder
 ↓
Takes Assessment
 ↓
Receives Their Own Result

This can turn the assessment into a distribution mechanism.

---

16.2 Shareable Result

The result should have a dedicated share representation.

Example:

MY CAREER FINDER PROFILE

Work Style

Exploration     █████████░
Drive           ████████░░
Harmony         ███████░░░
Structure       █████░░░░░

Top Interests

Investigative
Enterprising
Artistic

The shared result should be visually understandable without requiring someone to know how the assessment works.

---

16.3 Sharing Should Create Curiosity

The ideal shared result should cause another person to think:

«"What would my profile look like?"»

This is more powerful than:

«"This website has a career quiz."»

The result itself becomes the advertisement.

---

16.4 Shareable Career Matches

Users could also share individual discoveries.

For example:

Career Finder says:

Data Analyst
Strong match

Why:
✓ Analytical problem solving
✓ Investigative interests
✓ Structured work preference

The share should lead the recipient back to the relevant career page.

---

16.5 Privacy-Safe Sharing

Shared results should not automatically expose:

- email address
- account information
- private goals
- personal notes
- skill gaps
- private roadmap information
- private assessment history

The user should control what is shared.

---

16.6 Public Result Representation

A shareable result could use a unique public identifier.

Conceptually:

User Profile
     ↓
Share Request
     ↓
Public Result Snapshot
     ↓
Share URL

The public snapshot should contain only information explicitly intended for sharing.

---

16.7 Result Versioning

If the user retakes the assessment, an old shared result should not necessarily change automatically.

For example:

Assessment #1
     ↓
Shared Result A

Assessment #2
     ↓
Shared Result B

This allows users to preserve the result they originally shared.

---

16.8 Social Preview

Share links should eventually support attractive social previews.

Conceptually:

┌─────────────────────────────┐
│ CAREER FINDER               │
│                             │
│ My Career Profile           │
│                             │
│ Exploration   █████████░    │
│ Drive         ████████░░    │
│ Harmony       ███████░░░    │
│ Structure     █████░░░░░    │
│                             │
│ Discover yours →            │
└─────────────────────────────┘

This improves the likelihood that the shared link receives attention.

---

16.9 Referral Attribution

The system should eventually distinguish between:

Organic Visitor
Direct Visitor
Referred Visitor
Creator Referral
Partner Referral

This allows Career Finder to understand which sharing mechanisms actually produce valuable users.

---

16.10 Viral Coefficient

A useful long-term metric is the effective referral rate.

Conceptually:

Viral coefficient =
Invited users × conversion rate

The product does not need to achieve a viral coefficient greater than 1 to benefit from referrals.

Even a modest referral contribution can reduce acquisition costs.

---

16.11 Sharing Incentives

Career Finder should first test intrinsic sharing.

The result itself should be interesting enough to share.

Only later should the product consider incentives such as:

Share
 ↓
Unlock additional comparison

or:

Invite a friend
 ↓
Unlock additional exploration

Incentives should never make sharing feel mandatory.

---

16.12 Share Loop Priority

The initial implementation should focus on:

1. Attractive result visualization
2. Simple share action
3. Privacy-safe share page
4. Social preview
5. Referral attribution

Advanced referral rewards can come later.

---

17. SEO Strategy

SEO should become one of Career Finder's major long-term acquisition channels.

The strategy should combine:

Career Content
+
Career Pages
+
Assessment Pages
+
Educational Content
+
Internal Linking

The objective is to capture users at multiple stages of career discovery.

---

17.1 SEO Objective

Career Finder should eventually appear when users search for:

- careers
- career information
- career comparisons
- career assessments
- career interests
- career skills
- career requirements
- career changes
- education pathways

The product should not rely exclusively on one high-competition keyword.

---

17.2 Search Intent Categories

The SEO strategy should target several search-intent categories.

Discovery Intent

Examples:

What career should I choose?
What career fits me?
Best careers for analytical people
Careers for creative people

Career Intent

Examples:

What does a data analyst do?
How to become a software engineer
Product designer career

Comparison Intent

Examples:

Data analyst vs data scientist
Software engineer vs data analyst
UX designer vs product designer

Skills Intent

Examples:

Skills needed for data analyst
Skills needed for software engineer

Education Intent

Examples:

Do I need a degree to become a developer?
How long does it take to become a data analyst?

Career Change Intent

Examples:

Careers for people changing careers
How to move from marketing to data
Careers with transferable skills

---

17.3 Career Pages as SEO Assets

Each high-quality career page should be capable of ranking independently.

Conceptually:

/search
    ↓
Career Finder
    ↓
Career Page
    ↓
Assessment CTA

The page should answer the user's informational question before asking them to take the assessment.

---

17.4 Career Page Structure

A search-optimized career page can eventually contain:

Career Name

Overview

What does this career involve?

Typical responsibilities

Skills

Tools / technology

Work environment

Education and training

Career outlook

Salary information

Related careers

Frequently asked questions

Explore your Career Finder match

The exact information should depend on available authoritative data.

---

17.5 Programmatic SEO

Career Finder may eventually have hundreds or thousands of structured career pages.

This creates an opportunity for programmatic SEO.

Conceptually:

Career Database
      ↓
Structured Templates
      ↓
Career Pages
      ↓
Search Index

However, programmatic SEO should not mean automatically publishing thousands of thin pages.

Every generated page must provide meaningful information.

---

17.6 Avoid Thin Content

The product should avoid creating pages such as:

Career: Accountant

Accountants work with numbers.

Take our quiz.

This provides little value.

Instead, pages should contain useful structured information and clear explanations.

---

17.7 Comparison Pages

Comparison pages can target users who are already considering multiple options.

Examples:

Data Analyst vs Data Scientist
Software Engineer vs Data Analyst
UX Designer vs Product Designer
Product Manager vs Project Manager

These pages can naturally introduce Career Finder's comparison feature.

---

17.8 Career Cluster Pages

Career Finder can eventually organize careers into broader groups.

For example:

Technology Careers
     ↓
Software Development
Data
Cybersecurity
Cloud
Product
UX

Other clusters could include:

- healthcare
- business
- education
- engineering
- finance
- creative industries
- science
- public service

These pages can create strong internal linking structures.

---

17.9 Assessment SEO

The assessment itself can have a dedicated landing page optimized for relevant searches.

For example:

Career Assessment
       ↓
How it works
       ↓
What it measures
       ↓
What you'll receive
       ↓
Start Assessment

This page should clearly communicate that the assessment is guidance rather than a prediction.

---

17.10 Internal Linking

Internal linking should connect:

Career Article
     ↓
Career Page
     ↓
Related Career
     ↓
Comparison
     ↓
Assessment

This creates a coherent content graph.

---

17.11 Content Strategy

The content strategy should focus on useful career questions rather than generic SEO articles.

Potential topics:

How to choose a career
How to know if a career fits you
How to change careers
How to identify transferable skills
What careers require analytical thinking?
What careers involve creativity?
How to compare two career paths

Each article should connect naturally to relevant Career Finder functionality.

---

17.12 SEO and Product Integration

SEO should not become a separate content business.

The intended flow is:

Search
 ↓
Useful Career Information
 ↓
Career Finder
 ↓
Assessment
 ↓
Personalized Profile
 ↓
Career Matches

Content should therefore lead naturally into the product.

---

17.13 Technical SEO Requirements

The eventual platform should support:

- server-rendered career pages where appropriate
- crawlable URLs
- canonical URLs
- metadata
- Open Graph previews
- structured data where appropriate
- XML sitemap
- robots configuration
- fast page performance
- mobile-first rendering
- accessible content
- stable URL structures

These requirements should be considered during the technical migration.

---

17.14 SEO Measurement

SEO should be measured using product outcomes rather than traffic alone.

Important metrics include:

- organic impressions
- organic clicks
- organic assessment starts
- assessment completion from organic traffic
- activated users from organic traffic
- career-page engagement
- account creation
- premium conversion from organic users

The ultimate goal is not:

«"Get more Google traffic."»

It is:

«"Acquire valuable Career Finder users through search."»

---

17.15 SEO Priority

The initial SEO order should be:

1. Technical SEO foundation
2. Assessment landing page
3. Core career pages
4. Career cluster pages
5. Comparison pages
6. Career education content
7. Programmatic expansion

SEO should grow alongside the career-data system rather than being bolted on afterward.


18. Retention Strategy

Career Finder should not be designed as a product that users visit once, take a test, and leave.

The assessment may be the initial activation event, but the long-term product should become a career exploration and planning workspace.

The retention strategy therefore needs to transform:

One-Time Quiz
     ↓
Career Discovery
     ↓
Career Workspace
     ↓
Career Planning
     ↓
Ongoing Progress

---

18.1 Retention Objective

The primary retention question is:

«What meaningful reason does a user have to return after completing the assessment?»

The answer should not simply be:

«"Take the same quiz again."»

Instead, users should return because their career journey evolves.

---

18.2 First Return

The first return should be driven by something the user has not completed yet.

For example:

Assessment
   ↓
Career Matches
   ↓
Save Career
   ↓
Return
   ↓
Compare Careers

The product should create natural next steps.

---

18.3 Saved Careers

Saving careers provides one of the simplest retention mechanisms.

A user might save:

Software Engineer
Data Analyst
Product Designer

and return later to continue researching them.

This transforms the product from a static result page into a personal workspace.

---

18.4 Career Comparison

Comparison provides another reason to return.

A user might initially discover:

Software Engineering

and later add:

Data Analysis
Product Design

The user can then compare:

- interests
- work style
- environment
- skills
- education
- training
- career outlook

This creates an ongoing decision process.

---

18.5 Skill-Gap Retention

Once a user selects a target career, Career Finder can identify:

Current Skills
      ↓
Required Skills
      ↓
Skill Gaps

The user can then return to monitor progress.

This is a much stronger retention mechanism than a static personality result.

---

18.6 Roadmap Retention

A personalized roadmap creates recurring interaction.

Example:

CAREER ROADMAP

✓ Learn spreadsheet fundamentals
✓ Learn SQL

→ Learn statistics
→ Build first project
→ Build portfolio
→ Start applications

As the user progresses, Career Finder becomes increasingly useful.

---

18.7 Progress Tracking

Long-term retention can be supported by tracking progress.

Potential progress areas:

- skills
- completed roadmap steps
- saved careers
- career comparisons
- assessment history
- career goals

The product should make progress visible.

---

18.8 Reassessment

Career interests and circumstances can change.

Career Finder can eventually allow users to reassess periodically.

For example:

2026
Exploration 72
Drive       61

2027
Exploration 81
Drive       74

The product should describe this as a change in responses and preferences rather than claiming that the user's personality fundamentally changed.

---

18.9 Goal Updates

Users may change what they want.

For example:

Goal:
High income

could later become:

Goal:
Work-life balance

Career Finder should allow users to update their goals and see how that affects their exploration.

---

18.10 Career Journey Timeline

A future dashboard could provide:

MY CAREER JOURNEY

Assessment
    ↓
Career Discovery
    ↓
Saved Careers
    ↓
Career Comparison
    ↓
Target Career
    ↓
Skill Gaps
    ↓
Roadmap
    ↓
Progress

This creates a sense of progression.

---

18.11 AI Retention

AI should support retention without becoming a gimmick.

Potential recurring interactions include:

"What should I work on this week?"

"Am I making progress toward this career?"

"What can I build to demonstrate this skill?"

"What other careers could use these skills?"

The AI becomes useful because it has access to the user's structured career journey.

---

18.12 Notifications

Notifications should be introduced carefully.

Potential useful notifications include:

- roadmap reminders
- saved-career updates
- reassessment reminders
- progress milestones
- relevant career information changes

Notifications should provide genuine value.

The product should avoid spam.

---

18.13 Retention Metrics

Important retention metrics include:

- Day 1 retention
- Day 7 retention
- Day 30 retention
- monthly active users
- returning assessment users
- saved-career usage
- career-page revisits
- roadmap engagement
- AI usage
- premium retention

Retention should eventually be segmented by user type.

---

18.14 Retention by Persona

Different users will return for different reasons.

Persona| Main Retention Driver
Student| Career exploration
Curious User| New career discovery
Job Seeker| Skill gaps / career options
Career Changer| Transition roadmap
Working Professional| Career development

This reinforces the importance of user segmentation.

---

18.15 Retention Principle

The product should move users through:

Curiosity
   ↓
Clarity
   ↓
Decision
   ↓
Action
   ↓
Progress

The further a user progresses through this journey, the more useful Career Finder should become.

---

19. Revenue Model

Career Finder should initially focus on a B2C freemium revenue model, with B2B and additional revenue streams considered later.

The primary revenue principle is:

«Monetize deeper career intelligence and ongoing career planning.»

---

19.1 Primary Revenue Stream

The primary revenue stream should initially be:

Consumer Premium Subscription

Users receive:

Free
↓
Basic Career Discovery

Premium
↓
Career Intelligence + Planning

---

19.2 Premium Subscription

Potential premium features include:

- detailed career analysis
- expanded career matches
- career comparison
- skill-gap analysis
- personalized roadmap
- multiple assessments
- assessment history
- progress tracking
- AI career coach
- advanced career information

The exact package should be determined through validation.

---

19.3 Annual Subscription

An annual subscription can improve:

- cash flow
- retention
- commitment
- lifetime value

A potential structure is:

Monthly Plan
+
Annual Plan

The annual plan should provide a meaningful discount without making monthly pricing artificially expensive.

---

19.4 One-Time Products

Career Finder may eventually offer one-time purchases.

Examples:

Detailed Career Report
Career Comparison Report
Personal Career Roadmap

This could serve users who want a specific outcome without subscribing.

However, one-time products should not distract from the core subscription model until demand is established.

---

19.5 AI Usage Economics

AI introduces variable costs.

Every AI interaction may create:

Inference Cost
+
Infrastructure Cost

Therefore, premium AI usage may eventually need reasonable limits.

Possible models:

Included Usage

Premium users receive a reasonable monthly allowance.

Usage Tiers

Different premium plans receive different AI limits.

Credit Model

Users receive AI credits.

The simplest initial model should be preferred.

---

19.6 Cost-Aware AI Architecture

AI requests should be optimized.

The system should avoid sending unnecessary data to the model.

Instead of:

Entire User Database
+
Entire Career Database
→ AI

the system should provide:

Relevant User Context
+
Relevant Career Context
+
Relevant Question
→ AI

This improves:

- cost
- latency
- privacy
- response quality

---

19.7 B2B Revenue

Once B2C is validated, B2B can become a second major revenue stream.

Potential customers:

- schools
- universities
- career centers
- counselors
- workforce organizations
- training organizations

Potential pricing:

Per Student
Per Counselor
Per Seat
Organization License
Annual Contract

The final model should be determined through B2B validation.

---

19.8 Partnership Revenue

Potential future partnerships could include:

- education providers
- training providers
- career services
- certification providers
- learning platforms

However, partnerships must be handled carefully.

Career Finder should not allow commercial relationships to compromise career recommendations.

---

19.9 Affiliate Revenue

Affiliate partnerships could eventually generate revenue from relevant products or services.

Potential examples:

- learning resources
- certification programs
- career services

Any affiliate relationship should be clearly disclosed.

Career recommendations should remain independent of affiliate compensation.

---

19.10 Advertising

Advertising should not be a primary early revenue source.

Reasons include:

- lower revenue per user
- potential distraction
- reduced trust
- poor UX
- conflict with premium positioning

If advertising is ever introduced, it should not interfere with assessment results or career recommendations.

---

19.11 Revenue Diversification

The long-term revenue model could become:

                CAREER FINDER
                      │
       ┌──────────────┼──────────────┐
       ▼              ▼              ▼
     B2C            B2B          Partnerships
       │              │              │
 Subscription     Licensing      Services/
 One-time         Seats          Affiliates
 Products

However, diversification should happen only after the primary business model is working.

---

19.12 Revenue Priority

The preferred order is:

1. B2C Premium
2. Annual B2C
3. One-time products
4. B2B
5. Partnerships
6. Affiliate revenue
7. Other monetization

The business should avoid building multiple monetization systems before establishing a strong core revenue engine.

---

19.13 Revenue Principle

Career Finder should make money when it creates additional value.

The desired relationship is:

More User Value
      ↓
More Product Usage
      ↓
Higher Willingness to Pay
      ↓
Revenue
      ↓
More Product Investment
      ↓
More User Value

This creates a sustainable product loop rather than relying on aggressive paywalls.


20. Unit-Economics Assumptions

Career Finder should be designed with unit economics in mind from the beginning, even before reliable revenue data exists.

At this stage, the numbers below are hypotheses, not financial forecasts.

They exist to establish the variables that must eventually be measured.

---

20.1 Core Economic Model

The basic model is:

Revenue per Customer
        -
Variable Cost per Customer
        =
Contribution Margin

The product must eventually generate enough contribution margin to cover:

- infrastructure
- development
- marketing
- support
- administration
- AI costs
- other operating expenses

---

20.2 Important Variables

The core unit-economics variables are:

Visitors
   ↓
Assessment Starts
   ↓
Assessment Completions
   ↓
Activated Users
   ↓
Account Creation
   ↓
Premium Conversion
   ↓
Paid Customers

Each transition has a conversion rate.

---

20.3 Funnel Assumptions

The initial model should track:

Metric| Definition
Visitor → Assessment Start| Percentage beginning assessment
Start → Completion| Percentage completing assessment
Completion → Activation| Percentage reaching meaningful result
Activation → Account| Percentage creating account
Account → Premium| Percentage becoming paid
Paid → Renewal| Percentage retaining subscription

No target should be considered validated until real user data exists.

---

20.4 Assessment Completion

The 30-round assessment should have a high completion rate because it is the product's primary activation mechanism.

The team should monitor:

Assessment Starts
        ↓
Round 1
        ↓
Round 5
        ↓
Round 10
        ↓
Round 20
        ↓
Round 30
        ↓
Results

This will identify where users abandon the experience.

---

20.5 Activation

An activated user should not merely be someone who visits the result page.

A stronger activation definition could be:

«User completes the assessment and meaningfully interacts with their career results.»

Potential activation events:

- completes assessment
- views profile
- opens career match
- saves a career
- starts career exploration

The exact definition should be validated during MVP testing.

---

20.6 Conversion Assumption

The initial premium conversion rate should be treated as unknown.

The product should test:

Free Users
     ↓
Experience Value
     ↓
Encounter Premium Feature
     ↓
Premium Conversion

The key question is not:

«"How many users can we force to pay?"»

It is:

«"Which additional capabilities are valuable enough that users voluntarily pay for them?"»

---

20.7 Customer Acquisition Cost

CAC should eventually be calculated as:

CAC =
Acquisition Spend
----------------
New Paying Customers

CAC should be calculated separately by channel.

For example:

SEO CAC
Social CAC
Creator CAC
Partner CAC
Paid Ads CAC

Organic channels should still be assigned reasonable costs when evaluating the business.

---

20.8 Lifetime Value

A simplified subscription LTV model can initially be represented as:

LTV ≈
Average Revenue per Customer
×
Expected Customer Lifetime

A more useful contribution-margin version is:

LTV ≈
Average Revenue
×
Gross Margin
×
Expected Lifetime

The model should become more sophisticated as real data accumulates.

---

20.9 LTV / CAC

A key business-health metric is:

LTV
───
CAC

The goal should eventually be to establish a healthy positive relationship between customer lifetime value and acquisition cost.

However, the product should not optimize this ratio prematurely when the underlying measurements are unreliable.

---

20.10 Gross Margin

Career Finder's variable costs may include:

- AI inference
- database usage
- hosting
- storage
- email
- analytics
- payment processing
- other usage-based services

The business should track these independently.

---

20.11 AI Cost per User

AI should have a measurable cost model.

For example:

AI Requests per User
×
Average Cost per Request
=
AI Cost per User

This should be tracked separately for:

- free users
- premium users

---

20.12 Free User Economics

Free users are not necessarily unprofitable.

They can provide value through:

- referrals
- organic sharing
- SEO signals
- product learning
- future conversion
- network effects

The economic model should therefore account for indirect value.

---

20.13 Infrastructure Economics

The architecture should avoid unnecessary infrastructure complexity during MVP.

The initial objective is:

Low Fixed Cost
+
Predictable Variable Cost
+
Simple Operations

The system should scale infrastructure in response to actual usage.

---

20.14 Pricing Experiments

Pricing should be tested rather than assumed.

Potential variables:

- monthly price
- annual price
- feature limits
- AI limits
- one-time report price
- trial structure
- premium packaging

Testing should focus on willingness to pay rather than maximizing short-term conversion at any cost.

---

20.15 Economic Guardrails

The product should establish guardrails such as:

- maximum acceptable AI cost per active user
- maximum acceptable infrastructure cost
- target gross margin
- maximum CAC
- minimum expected LTV/CAC
- acceptable free-to-paid ratio

These values can remain provisional during MVP.

---

20.16 Unit-Economics Principle

The business should eventually satisfy:

Revenue
   >
Variable Costs
   >
Contribution
   >
Operating Costs

The exact numbers are unknown today.

The purpose of Phase 3 is therefore not to pretend the economics are known.

It is to make the product measurable enough to discover them.

---

21. Validation Experiments

Career Finder should be developed around explicit validation experiments rather than assumptions.

Every major product decision should eventually have evidence behind it.

---

21.1 Validation Philosophy

The development loop should be:

Hypothesis
   ↓
Experiment
   ↓
Measurement
   ↓
Learning
   ↓
Decision

The objective is to reduce uncertainty before committing significant engineering resources.

---

21.2 Assessment Experiment

Hypothesis

Users will find the 30-round visual assessment engaging enough to complete.

Experiment

Build the assessment prototype with:

- 30 rounds
- four visual choices
- multi-selection
- progress indicator
- mobile-first interaction

Measure

- start rate
- completion rate
- average completion time
- abandonment by round
- selections per round
- qualitative feedback

Success Signal

Users consistently complete the assessment and report that the interaction feels quick and engaging.

---

21.3 Profile Experiment

Hypothesis

A multidimensional profile is more useful than a single personality label.

Experiment

Show users:

Harmony
Exploration
Drive
Structure

instead of:

You are an Explorer.

Measure

Ask users whether they feel the result:

- describes them
- provides useful insight
- gives them something actionable
- feels overly generic

---

21.4 Interest Experiment

Hypothesis

Adding career interests significantly improves the usefulness of career recommendations.

Experiment

After the work-style assessment, ask users to select activities they enjoy.

Use a small initial interest model.

Measure

Compare:

Work Style Only

against:

Work Style
+
Interests

Measure user satisfaction with the resulting careers.

---

21.5 Career Matching Experiment

Hypothesis

Users trust career recommendations more when the system explains why a career matches them.

Experiment

Compare:

Data Analyst
Strong Match

against:

Data Analyst
Strong Match

Why:
✓ Investigative interests
✓ Structured problem solving
✓ Analytical work preference
✓ Comfortable with independent work

Measure

- perceived trust
- result engagement
- career-page clicks
- saved careers
- qualitative feedback

---

21.6 Comparison Experiment

Hypothesis

Users value comparing careers more than simply receiving a ranked list.

Experiment

Allow users to compare two or three careers.

Measure:

- comparison usage
- time spent
- saved careers
- roadmap initiation
- user satisfaction

---

21.7 Roadmap Experiment

Hypothesis

Users are more likely to return when Career Finder provides actionable next steps.

Experiment

Give selected users a basic roadmap.

Measure:

- roadmap views
- completed steps
- return visits
- saved careers
- self-reported usefulness

---

21.8 AI Experiment

Hypothesis

AI explanations and coaching increase product value without replacing deterministic matching.

Experiment

Provide AI capabilities such as:

Explain my match
Compare these careers
What should I learn first?

Measure

- AI usage
- repeat AI usage
- satisfaction
- premium conversion
- AI cost per user

---

21.9 Premium Experiment

Hypothesis

Users will pay for deeper career intelligence rather than for basic assessment access.

Experiment

Keep the core assessment and basic result free.

Test premium access to:

- comparison
- skill gaps
- roadmap
- advanced analysis
- AI coaching

Measure

- premium page views
- conversion
- feature usage
- cancellation
- willingness-to-pay feedback

---

21.10 Share Experiment

Hypothesis

Users will voluntarily share their career profile.

Experiment

Add a polished share action to results.

Measure:

Users with share option
        ↓
Shares
        ↓
Share clicks
        ↓
New assessment starts
        ↓
Completed assessments

---

21.11 SEO Experiment

Hypothesis

Useful career pages can generate organic assessment traffic.

Experiment

Publish a controlled set of high-quality career pages.

Measure:

- impressions
- clicks
- rankings
- assessment starts
- activation

Do not initially create thousands of pages.

---

21.12 Retention Experiment

Hypothesis

Saved careers and roadmaps create stronger retention than assessment results alone.

Experiment

Compare cohorts with:

Assessment + Results

against:

Assessment
+
Saved Careers
+
Roadmap

Measure return behavior.

---

21.13 Pricing Experiment

Hypothesis

Users have different willingness to pay for career-planning depth.

Experiment

Test different packaging and pricing structures with appropriate ethical safeguards.

Potential variables:

- monthly subscription
- annual subscription
- one-time report
- premium feature bundles

Measure:

- conversion
- revenue per visitor
- retention
- cancellation
- user feedback

---

21.14 Data-Quality Experiment

Hypothesis

Structured occupational data can support useful matching without requiring AI to generate the underlying career facts.

Experiment

Build a small authoritative career dataset.

Create:

Career
+
Interests
+
Skills
+
Work Style
+
Education
+
Environment

Test matching quality against manually reviewed examples.

---

21.15 Assessment Content Experiment

The 120 original traits should not all be migrated automatically.

The content process should test:

- clarity
- neutrality
- ambiguity
- redundancy
- behavioral specificity
- cultural interpretation
- image relevance

Each candidate statement should be evaluated before entering the new assessment.

---

21.16 Validation Priorities

The highest-priority unknowns are:

1. Will users complete the assessment?
2. Do users find the profile useful?
3. Do career matches feel relevant?
4. Do explanations increase trust?
5. Do users explore multiple careers?
6. Do users return?
7. Will users pay for deeper functionality?

These questions should be answered before significant expansion.

---

21.17 Validation Rule

No major feature should exist simply because:

«"It would be cool."»

The feature should have either:

- a strong product rationale,
- supporting evidence,
- or a clearly defined experiment.

Career Finder should remain focused on solving the career-discovery problem.


22. Product Roadmap

The Career Finder roadmap should be organized around validated product capabilities, not simply a list of technical features.

The objective is to evolve from the existing application into the new Career Finder platform while preserving the strongest part of the original experience.

---

22.1 Roadmap Overview

The high-level progression is:

Existing Application
        ↓
Phase 3 — Technical Migration
        ↓
MVP Foundation
        ↓
Assessment + Career Discovery
        ↓
Career Intelligence
        ↓
Career Planning
        ↓
AI Career Coach
        ↓
Growth Optimization
        ↓
B2B Expansion

---

22.2 Phase 3 — Technical Migration

Phase 3 is the immediate next phase.

Its purpose is to understand and prepare the existing codebase for the new product architecture.

Phase 3 should establish:

- technical architecture
- domain boundaries
- data migration strategy
- new data models
- API contracts
- assessment architecture
- career-data architecture
- authentication strategy
- persistence strategy
- testing strategy
- deployment strategy

The first major artifact of Phase 3 will be:

tech-migration-plan.md

This document should translate the product-level migration plan into an actionable technical plan.

---

22.3 Phase 4 — Core Platform

After the technical migration plan is approved, the next stage should establish the core SaaS infrastructure.

Potential capabilities:

- application shell
- authentication
- user accounts
- database
- assessment persistence
- career-data storage
- API layer
- profile persistence
- basic analytics

The goal is not yet to build every product feature.

The goal is to create a stable platform on which the product can grow.

---

22.4 Phase 5 — Assessment MVP

The assessment should become the first major product experience.

Build:

30 Rounds
    ↓
Visual Choices
    ↓
Multi-selection
    ↓
Progress
    ↓
Scoring
    ↓
Work-style Profile

The assessment must be deterministic.

AI should not participate in scoring.

---

22.5 Phase 6 — Interest & Career Matching

The next layer should introduce:

Work Style
+
Career Interests
+
Career Data
        ↓
Career Matching

This phase establishes the first meaningful Career Finder recommendation engine.

The system should initially focus on a manageable career dataset rather than attempting to represent every possible occupation.

---

22.6 Phase 7 — Career Exploration

Users should be able to:

- browse careers
- open career pages
- understand career requirements
- view career matches
- save careers
- discover related careers

This transforms the product from:

Assessment

into:

Career Discovery Platform

---

22.7 Phase 8 — Career Comparison

Users should be able to select multiple careers and compare them.

Potential dimensions:

- interest fit
- work-style fit
- work environment
- skills
- education
- training
- career outlook
- user preferences

The comparison should help users make decisions rather than simply declaring a winner.

---

22.8 Phase 9 — Skill Gap & Roadmap

The next stage should introduce:

Target Career
     ↓
Required Skills
     ↓
Current Skills
     ↓
Skill Gaps
     ↓
Roadmap

This is a major transition from career discovery to career action.

---

22.9 Phase 10 — AI Career Coach

AI should be introduced after the deterministic systems are stable.

Potential capabilities:

- explain career matches
- answer career questions
- compare career options
- explain skill gaps
- suggest next steps
- help users navigate their roadmap

The AI should operate over structured product data.

---

22.10 Phase 11 — Growth Systems

Once the core product is useful, implement:

- shareable results
- referral attribution
- SEO career pages
- comparison pages
- content system
- analytics
- lifecycle messaging
- retention features

The objective is to establish repeatable acquisition and retention.

---

22.11 Phase 12 — Monetization Optimization

Once sufficient usage exists, optimize:

- premium packaging
- pricing
- annual plans
- AI usage limits
- conversion flows
- retention
- revenue per customer

Monetization should follow evidence of value.

---

22.12 Phase 13 — B2B Pilot

Only after the B2C product demonstrates meaningful value should B2B experimentation begin.

Start with:

Counselor
      ↓
Small Pilot
      ↓
Feedback
      ↓
Organization Features

Avoid building a full enterprise system before validating the market.

---

22.13 Phase 14 — B2B Platform

If the pilot demonstrates demand, expand toward:

- organizations
- counselors
- student management
- permissions
- reporting
- aggregate analytics
- organization billing

This becomes a separate growth stage rather than part of the initial MVP.

---

22.14 Roadmap Principle

Each phase should answer a product question.

Phase| Primary Question
Technical Migration| Can the old system support the new architecture?
Core Platform| Can we reliably store and operate the new product?
Assessment| Do users engage with the signature experience?
Matching| Are recommendations useful?
Exploration| Do users investigate careers?
Comparison| Does comparison improve decisions?
Roadmap| Do users take action?
AI| Does AI add meaningful value?
Growth| Can we acquire users efficiently?
Monetization| Will users pay?
B2B| Will organizations pay?

---

23. Migration Strategy

The migration strategy must balance two competing objectives:

1. Preserve the useful parts of the existing application.
2. Avoid allowing the old architecture to constrain the new product.

The migration should therefore be incremental and controlled, rather than an uncontrolled rewrite.

---

23.1 Migration Principle

The fundamental principle is:

«Migrate the product's valuable behavior, not the old architecture.»

The old application contains useful assets:

- assessment concept
- visual interaction
- question/trait content
- existing UI patterns
- existing career-related logic
- existing user experience knowledge

But the old implementation should not automatically become the architecture of the new system.

---

23.2 What We Preserve

The migration should preserve:

30-round assessment
Visual card interaction
Image-based selection
Multi-selection
Progressive experience
Core assessment concept
Existing validated product knowledge

These are product assets.

---

23.3 What We Replace

The migration should replace or redesign:

Old personality categories
Old scoring model
Old career-matching logic
Legacy data structures
Hard-coded relationships
Monolithic assumptions
Temporary data representations
AI-dependent logic, if present

These should not be carried forward merely for compatibility.

---

23.4 Migration Layers

The migration can be understood as several layers:

                    EXISTING APP
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
       Content           UI           Logic
          │              │              │
          ▼              ▼              ▼
       Audit          Preserve       Replace
          │              │              │
          └──────────────┼──────────────┘
                         ▼
                 NEW DOMAIN MODEL
                         │
                         ▼
                  NEW APPLICATION

---

23.5 Content Migration

The original assessment contains approximately 120 traits.

These should undergo an explicit audit.

Each trait should receive a migration status:

KEEP
REWRITE
REPLACE
REMOVE
MERGE

No trait should enter the new production assessment simply because it existed in the old application.

---

23.6 Assessment Migration

The assessment experience should be rebuilt around the new scoring architecture.

Old:

Choice
 ↓
Trait
 ↓
Personality Category

New:

Choice
 ↓
Response Signals
 ↓
Multiple Dimensions
 ↓
Work-style Profile

This is one of the most important migrations.

---

23.7 Scoring Migration

The old scoring model should not be directly reused.

Old:

Selected Trait = +1

New:

Response
 ↓
Weighted Signals
 ↓
Dimension Scores
 ↓
Normalized Profile

The new system should support:

- multiple dimensions
- weighted responses
- normalization
- confidence
- versioning
- deterministic calculations

---

23.8 Career Data Migration

Existing career data should be audited before being imported.

The new career model should distinguish between:

Career
Interest
Skill
Requirement
Work Style
Environment
Education
Technology
Outlook

Relationships should be represented explicitly.

---

23.9 Data Provenance

Every important career-data field should eventually have provenance information.

Conceptually:

Career Fact
   ↓
Source
   ↓
Source Version
   ↓
Retrieved / Updated Date

This becomes particularly important for:

- salary
- employment outlook
- education requirements
- occupational descriptions
- skills
- technologies

---

23.10 User Data Migration

Existing user data should not automatically be considered compatible with the new system.

Each legacy field should be classified as:

MIGRATE
TRANSFORM
ARCHIVE
DISCARD

Migration should preserve user value while avoiding contamination of the new domain model.

---

23.11 Backward Compatibility

If the existing application is already being used by real users, migration must consider backward compatibility.

Potential strategies include:

Dual Operation

Old and new systems temporarily operate alongside each other.

Data Transformation

Legacy records are transformed into the new model.

Versioned Profiles

Old assessment results remain associated with the old assessment version.

Historical Archive

Legacy results are retained as historical data without being treated as current profile data.

---

23.12 Assessment Versioning

Assessment content and scoring should be versioned.

For example:

Assessment v1
Assessment v2
Assessment v3

A historical result should always be interpretable using the version that generated it.

This prevents a future scoring change from silently rewriting historical results.

---

23.13 Database Migration Principle

Database migrations should be:

- incremental
- reversible where practical
- tested
- documented
- version controlled
- observable

The migration should avoid destructive changes until the new system has been verified.

---

23.14 Feature Flags

Feature flags may be useful during migration.

For example:

USE_NEW_ASSESSMENT=true
USE_NEW_MATCHING=true
USE_NEW_CAREER_PAGES=false

This allows selected functionality to be enabled gradually.

Feature flags should not become permanent architectural clutter.

---

23.15 Migration Environments

The migration should maintain separate environments for:

Development
Testing
Staging
Production

Data migration scripts should be tested against non-production copies before execution against real production data.

---

23.16 Migration Validation

After migration, validate:

Data

- record counts
- relationships
- required fields
- identifiers
- references
- timestamps

Assessment

- questions load correctly
- responses persist
- scoring is deterministic
- results are reproducible

Career Data

- careers load
- relationships resolve
- sources are retained
- matching works

User Experience

- assessment completion
- results
- account access
- saved careers
- navigation

---

23.17 Rollback Strategy

Every significant production migration should have a rollback strategy.

The team should know:

What changed?
What can fail?
How do we detect failure?
How do we restore the previous state?
How do we preserve new user data?

A migration should not be considered complete until rollback procedures have been considered.

---

23.18 Migration Order

The preferred order is:

1. Audit existing system
        ↓
2. Freeze product requirements
        ↓
3. Define technical architecture
        ↓
4. Define new domain model
        ↓
5. Define migration mappings
        ↓
6. Build new persistence layer
        ↓
7. Migrate / transform content
        ↓
8. Rebuild assessment engine
        ↓
9. Rebuild matching engine
        ↓
10. Integrate career data
        ↓
11. Rebuild user flows
        ↓
12. Test
        ↓
13. Staged release
        ↓
14. Validate
        ↓
15. Retire legacy components

---

23.19 Do Not Rewrite Everything at Once

A complete rewrite creates unnecessary risk.

The preferred approach is:

Old System
    │
    ├── Audit
    │
    ├── Extract Valuable Content
    │
    ├── Define New Contracts
    │
    └── Replace Components Incrementally

The goal is controlled replacement.

---

23.20 Migration Completion Criteria

The migration should not be considered complete merely because the new code runs.

Migration is complete when:

- the new architecture is operational
- required legacy content has been audited
- necessary data has been migrated
- the new assessment works
- new scoring works
- career matching works
- user data is safe
- production behavior is observable
- legacy dependencies are no longer required for core functionality
- rollback concerns have been resolved

---

23.21 Phase 3 Handoff

The output of this migration plan is not implementation code.

The next document must translate these product and migration decisions into concrete technical decisions.

That document is:

tech-migration-plan.md

It should define:

- current architecture
- target architecture
- technology stack
- repository structure
- domain boundaries
- database schema
- migration mappings
- API contracts
- assessment engine
- scoring engine
- career-data ingestion
- authentication
- authorization
- testing
- observability
- deployment
- environment configuration
- rollout strategy

This marks the transition from product strategy into technical execution.


24. Risks

Career Finder has several significant risks that must be acknowledged before implementation.

The purpose of identifying these risks is not to avoid building the product.

It is to design the product and architecture so that the highest-impact risks can be managed.

---

24.1 Assessment Validity Risk

The biggest product risk is that users may enjoy the assessment but receive career recommendations that are not sufficiently meaningful.

A visually engaging assessment does not automatically produce valid career guidance.

The system must therefore distinguish between:

Engaging Experience
        ≠
Scientifically Valid Prediction

Career Finder should position the assessment as a career-exploration and self-reflection tool rather than a diagnostic instrument.

---

24.2 Overclaiming Risk

The product must avoid statements such as:

"This is your perfect career."

"You are definitely suited for this career."

"You have an 85% chance of succeeding."

"This test knows your future."

Instead, the product should use language such as:

"Your responses suggest..."

"You may prefer..."

"This career appears to be a strong match..."

"These careers may be worth exploring..."

This is both more accurate and more trustworthy.

---

24.3 Matching Quality Risk

A sophisticated scoring system can still produce poor recommendations if the underlying career data is weak.

The matching engine therefore depends on:

Assessment Quality
        +
Career Data Quality
        +
Mapping Quality
        +
User Context
        ↓
Recommendation Quality

Improving the algorithm cannot compensate indefinitely for poor input data.

---

24.4 Career Data Risk

Career information changes over time.

Examples include:

- salaries
- employment outlook
- technology requirements
- education pathways
- skills
- occupational descriptions

The product therefore needs a process for:

- sourcing
- validating
- updating
- versioning
- retiring

career information.

---

24.5 Data Licensing Risk

External career datasets may have:

- licensing restrictions
- attribution requirements
- usage limitations
- redistribution restrictions
- commercial-use conditions

Before a source becomes a production dependency, its licensing terms must be reviewed.

This is especially important for O*NET and any additional regional or commercial datasets.

The architecture should avoid assuming that externally sourced data can simply be copied into the product without restrictions.

---

24.6 Regional Career Data Risk

Career requirements differ between countries.

For example:

Education
Licensing
Qualifications
Salary
Job Market
Professional Requirements

may differ substantially between regions.

A career recommendation that is useful in one country may not translate directly to another.

The initial product should therefore define a clear geographic scope.

Global career intelligence should be introduced incrementally.

---

24.7 AI Hallucination Risk

AI may generate information that is:

- inaccurate
- outdated
- overly confident
- unsupported by the underlying data

AI should therefore not be the authoritative source for core career facts.

The architecture should distinguish:

Authoritative Structured Data
          ↓
Deterministic Logic
          ↓
AI Context
          ↓
AI Explanation

The AI should explain known information rather than inventing authoritative career facts.

---

24.8 AI Cost Risk

Uncontrolled AI usage can create unpredictable costs.

The product must eventually monitor:

- requests per user
- tokens / usage
- average cost
- premium usage
- free usage
- AI feature profitability

AI features should have sensible usage controls.

---

24.9 Privacy Risk

Career profiles may contain sensitive personal information.

Potential data includes:

- career goals
- education
- skills
- preferences
- assessment responses
- career history
- future plans

The product should follow data-minimization principles.

Only information necessary for the product should be collected.

---

24.10 Security Risk

The platform will eventually contain:

- user accounts
- assessment data
- saved careers
- career plans
- potentially payment information
- AI conversations

Security must therefore be considered part of the architecture from the beginning.

At minimum, the system should plan for:

- secure authentication
- authorization
- input validation
- secure secrets
- protected APIs
- database access controls
- rate limiting
- logging
- backups
- dependency management

---

24.11 Content Bias Risk

Career recommendations can unintentionally reflect biases in:

- assessment content
- images
- occupational datasets
- career mappings
- language
- cultural assumptions

The assessment should therefore avoid stereotypes.

Images should represent behaviors and situations rather than gendered, cultural, or occupational stereotypes.

---

24.12 Image Bias Risk

Because the assessment uses images, image selection is especially important.

For example:

"Leadership"

should not always be represented by:

Corporate executive

Likewise:

"Technical"

should not always be represented by:

Young man at a computer

Visual content should represent the underlying behavior as neutrally and inclusively as practical.

---

24.13 Product Scope Risk

Career Finder could easily become too large.

Potential distractions include:

- job boards
- resume builders
- social networking
- massive learning platforms
- recruiting marketplaces
- enterprise HR systems

These features may eventually be valuable, but they should not obscure the core product.

The core loop remains:

Discover Yourself
        ↓
Explore Careers
        ↓
Understand Options
        ↓
Plan Next Steps

---

24.14 Competition Risk

The career-assessment market already contains mature products.

Career Finder therefore cannot rely on:

«"We have a career quiz."»

Differentiation must come from:

- visual assessment UX
- explainable matching
- career comparison
- actionable roadmaps
- mobile-first experience
- useful career intelligence
- AI-assisted planning

---

24.15 Monetization Risk

Users may enjoy the product without being willing to pay.

The free experience must therefore be useful enough to generate trust while premium features provide meaningful additional value.

The product should validate willingness to pay before heavily investing in premium infrastructure.

---

24.16 Retention Risk

A career assessment is naturally capable of being a one-time experience.

Retention therefore cannot depend on the assessment alone.

The product must progressively introduce:

Saved Careers
      ↓
Comparison
      ↓
Skill Gaps
      ↓
Roadmap
      ↓
Progress

---

24.17 Acquisition Risk

SEO and sharing may take time to produce meaningful traffic.

The product should therefore test multiple acquisition channels rather than depending on a single channel.

---

24.18 Technical Migration Risk

The existing application may contain undocumented assumptions or tightly coupled logic.

The migration must therefore begin with:

Audit
 ↓
Documentation
 ↓
Domain Extraction
 ↓
Migration

rather than immediately replacing code.

---

24.19 Technical Complexity Risk

The future product contains many potential domains:

Assessment
Career Data
Matching
Users
Profiles
Roadmaps
AI
Billing
Analytics

The architecture should maintain clear boundaries.

Not every feature needs to become a separate service.

A modular monolith is likely to be preferable until scale provides a reason to introduce additional infrastructure.

---

24.20 Founder / Development Capacity Risk

Career Finder must be designed around realistic development capacity.

The product should prioritize:

Core Value
>
Supporting Features
>
Optimization
>
Expansion

The MVP should remain achievable without requiring a large engineering organization.

---

24.21 Risk Management Principle

The most important risks should be reduced through experiments rather than speculation.

Risk
 ↓
Hypothesis
 ↓
Experiment
 ↓
Evidence
 ↓
Decision

This is the operating principle for the product.

---

25. Success Metrics

Career Finder needs a measurable definition of product success.

Metrics should be divided into:

Acquisition
Activation
Engagement
Retention
Monetization
Recommendation Quality
Growth

---

25.1 North Star Metric

The initial North Star Metric should represent meaningful career discovery.

A candidate definition is:

«Number of users who complete the assessment and meaningfully explore at least one career recommendation within a defined period.»

This is preferable to simply measuring assessment completions.

Assessment completion alone does not prove that Career Finder created value.

---

25.2 Acquisition Metrics

Track:

- unique visitors
- assessment starts
- traffic source
- organic traffic
- referral traffic
- creator traffic
- partner traffic
- paid traffic

---

25.3 Assessment Metrics

Track:

- assessment start rate
- completion rate
- abandonment rate
- completion time
- abandonment by round
- average selections per round
- result views

---

25.4 Activation Metrics

Potential activation definition:

Assessment Completed
+
Career Profile Viewed
+
Career Explored

Track:

- activated users
- activation rate
- time to activation
- first career opened
- careers explored per user

---

25.5 Engagement Metrics

Track:

- career pages viewed
- careers saved
- comparisons created
- roadmaps started
- skill gaps viewed
- AI interactions
- profile updates

---

25.6 Retention Metrics

Track:

- Day 1 retention
- Day 7 retention
- Day 30 retention
- monthly active users
- returning users
- repeat career exploration
- roadmap activity

Retention should be evaluated by persona where sample size permits.

---

25.7 Monetization Metrics

Track:

- premium page visits
- free-to-paid conversion
- monthly recurring revenue
- annual recurring revenue
- average revenue per paid user
- cancellation rate
- renewal rate
- customer lifetime value

---

25.8 Recommendation Metrics

Recommendation quality requires its own metrics.

Potential signals include:

- career saves
- career exploration
- career comparisons
- user feedback
- "useful recommendation" responses
- recommendation dismissals
- repeated exploration

A strong recommendation should cause meaningful user behavior.

---

25.9 AI Metrics

Track:

- AI feature usage
- repeat AI usage
- response satisfaction
- reported errors
- AI cost per active user
- AI cost per premium user
- AI-related conversion

AI usage should not be considered successful simply because users send many prompts.

---

25.10 Growth Metrics

Track:

- shares
- share clicks
- referred users
- referral conversion
- organic search growth
- career-page traffic
- assessment starts per visitor

---

25.11 Metric Hierarchy

The product should prioritize:

Value
 ↓
Activation
 ↓
Retention
 ↓
Revenue
 ↓
Growth

Growth without retention is not sustainable.

Revenue without product value is not sustainable.

---

25.12 Metric Principle

Every important metric should answer a question.

Bad:

"We got 10,000 page views."

Better:

"35% of visitors started the assessment."

Better still:

"Users arriving through career pages were 18% more likely to complete the assessment."

Metrics should generate decisions.

---

26. Definition of "Profitable"

Career Finder should have an explicit definition of profitability.

The term should not simply mean:

«Revenue is greater than zero.»

A product can generate revenue while still losing money.

---

26.1 Basic Profitability

At the simplest level:

Revenue
-
Total Operating Costs
>
0

The business is profitable when this remains positive over a sustainable period.

---

26.2 Operating Costs

Total costs may include:

Hosting
Database
AI
Email
Payments
Analytics
Marketing
Development
Support
Administration
Legal
Other Operations

All material recurring costs should eventually be included.

---

26.3 Contribution Profitability

Before full company profitability, Career Finder should establish contribution profitability.

Revenue
-
Variable Costs
>
0

Variable costs include expenses that increase with user activity.

This is particularly important because AI usage can increase costs with usage.

---

26.4 Gross Margin

The product should target a healthy gross margin.

The exact target should be validated based on:

- AI costs
- infrastructure
- pricing
- usage patterns
- business model

A specific margin should not be treated as validated before real usage data exists.

---

26.5 Customer-Level Profitability

A healthy subscription model should eventually satisfy:

Customer Lifetime Value
>
Customer Acquisition Cost

with a meaningful margin.

If:

CAC > LTV

the growth model is fundamentally unsustainable.

---

26.6 Sustainable Profitability

Career Finder should be considered meaningfully profitable when:

Recurring Revenue
        >
Variable Costs
        +
Operating Costs

and this condition remains true without requiring unsustainable acquisition spending.

---

26.7 Profitability Milestones

The business can use several milestones:

Milestone 1 — Product Value

Users complete the assessment and meaningfully explore careers.

Milestone 2 — Willingness to Pay

Some users voluntarily purchase premium functionality.

Milestone 3 — Contribution Positive

Revenue exceeds variable user-related costs.

Milestone 4 — Sustainable Growth

LTV meaningfully exceeds CAC.

Milestone 5 — Operating Profitability

Revenue exceeds total operating expenses.

Milestone 6 — Scalable Profitability

The business can grow users and revenue without costs increasing at an unsustainable rate.

---

26.8 Profitability Principle

Career Finder should not optimize for early profitability at the expense of discovering product-market fit.

The sequence should be:

Useful
 ↓
Used
 ↓
Retained
 ↓
Paid
 ↓
Efficient
 ↓
Profitable
 ↓
Scalable

---

27. Phase 3's Technical Requirements

Phase 3 is where the product-level decisions in this document become technical architecture.

The next phase must not begin by randomly rewriting components.

It must begin by understanding the existing system and defining the target architecture.

---

27.1 Phase 3 Objective

The objective of Phase 3 is:

«Define exactly how the existing Career Finder application will evolve into the new SaaS architecture.»

The output should be an implementation-ready technical migration plan.

---

27.2 First Phase 3 Artifact

The first file must be:

tech-migration-plan.md

This document should become the technical counterpart to this product migration plan.

---

27.3 Current-System Audit

Phase 3 must document the existing application.

The audit should identify:

- framework
- runtime
- package manager
- dependencies
- application structure
- routes
- components
- services
- data files
- APIs
- state management
- authentication
- database usage
- assessment implementation
- scoring implementation
- career data
- deployment
- environment variables
- testing
- build process

Nothing important should be assumed.

---

27.4 Legacy Dependency Map

The technical plan should identify:

Legacy Component
      ↓
What It Does
      ↓
Who Uses It
      ↓
Keep / Replace / Refactor / Remove

This will prevent valuable functionality from being accidentally deleted.

---

27.5 Target Architecture

The target system should be defined before implementation.

At a high level:

                    CAREER FINDER
                         │
              ┌──────────┼──────────┐
              ▼          ▼          ▼
          Frontend      API       Workers
              │          │          │
              └──────────┼──────────┘
                         ▼
                     Domain Layer
                         │
       ┌─────────────────┼─────────────────┐
       ▼                 ▼                 ▼
 Assessment          Careers           Users
       │                 │                 │
       ▼                 ▼                 ▼
 Matching            Roadmaps          Profiles
                         │
                         ▼
                    AI Services

The exact implementation architecture must be determined during Phase 3.

---

27.6 Domain Boundaries

At minimum, Phase 3 should define boundaries for:

Users
Assessment
Scoring
Profiles
Interests
Careers
Matching
Saved Careers
Skills
Roadmaps
AI
Billing
Analytics

These boundaries should exist conceptually even if they are implemented within a modular monolith.

---

27.7 Data Model

Phase 3 must convert the conceptual entities into an actual schema.

Core entities include:

User
Assessment
AssessmentAttempt
Question
Trait
Response
WorkStyleProfile
InterestProfile
Career
CareerInterest
CareerSkill
CareerRequirement
CareerMatch
SavedCareer
CareerRoadmap
SkillGap

Potential future entities:

Application
Resume
LearningResource
AIConversation
Organization
Counselor
Student

Only entities required for the current product should be implemented immediately.

---

27.8 Assessment Engine

The technical architecture must support:

- versioned assessments
- versioned questions
- multiple responses
- weighted signals
- multiple dimensions
- deterministic scoring
- normalized results
- confidence calculations
- repeat assessments
- historical results

The assessment engine should not depend on AI.

---

27.9 Scoring Engine

The scoring system must be implemented independently from UI components.

Conceptually:

Response
    ↓
Scoring Rules
    ↓
Dimension Scores
    ↓
Normalization
    ↓
Profile

This allows the assessment UI to change without rewriting the scoring system.

---

27.10 Matching Engine

The matching engine must consume structured inputs.

Conceptually:

User Profile
+
Interest Profile
+
Preferences
+
Goals
+
Career Data
        ↓
Matching Engine
        ↓
Career Matches

The engine should produce explainable intermediate results rather than only a final score.

---

27.11 Explainability

A match should be explainable using structured evidence.

For example:

Career:
Data Analyst

Signals:
+ Strong Investigative Interest
+ Strong Structure Preference
+ Strong Analytical Skill Alignment
- Moderate Team Preference

The technical system should retain enough information to explain why a recommendation occurred.

---

27.12 Career Data Pipeline

Phase 3 should define how career data enters the system.

The pipeline should eventually support:

Source
 ↓
Ingestion
 ↓
Validation
 ↓
Normalization
 ↓
Mapping
 ↓
Versioning
 ↓
Database

The exact external sources must be evaluated for licensing before production use.

---

27.13 Data Updates

Career data should not require manually editing application code.

Ideally:

Career Data
     ≠
Application Logic

Career information should be represented as data that can be updated independently.

---

27.14 Authentication

Phase 3 must determine:

- authentication provider or implementation
- account creation
- login
- sessions
- password handling if applicable
- account recovery
- user identity
- authorization

The system should avoid building authentication unnecessarily from scratch if a reliable solution fits the architecture.

---

27.15 Authorization

The technical plan should define permissions for:

Anonymous User
Authenticated User
Premium User
Administrator
Future Counselor
Future Organization Admin

B2B roles should be designed later unless required for architecture.

---

27.16 Payments

The architecture should eventually support:

- subscription state
- plan
- billing status
- entitlements
- payment provider webhooks
- cancellations
- renewals

The payment provider itself should be selected during technical planning based on supported markets and business requirements.

---

27.17 Analytics

Analytics should be event-driven.

Important events may include:

assessment_started
assessment_completed
profile_viewed
career_viewed
career_saved
comparison_started
roadmap_started
roadmap_step_completed
ai_used
share_created
share_clicked
account_created
premium_viewed
subscription_started
subscription_cancelled

Events should have consistent schemas.
27.18 Observability
Phase 3 should define:
application logging
error tracking
performance monitoring
database monitoring
AI usage monitoring
billing-event monitoring
background-job monitoring
The system must make failures diagnosable.
27.19 Testing Strategy
The new architecture should have tests at multiple levels.
Unit Tests
For:
scoring
normalization
confidence
matching
transformations
Integration Tests
For:
database
API
authentication
assessment persistence
career matching
End-to-End Tests
For:
Start Assessment
 ↓
Complete Assessment
 ↓
View Results
 ↓
Explore Career
 ↓
Save Career
Critical flows must be protected.
27.20 Security Requirements
Phase 3 should explicitly address:
secrets
authentication
authorization
input validation
rate limiting
API protection
database security
dependency security
backups
audit logs where necessary
privacy controls
Security should not be postponed until after the MVP is publicly exposed.
27.21 Environment Strategy
The technical plan should define:
Development
Testing
Staging
Production
Environment configuration must be separated.
Secrets must never be committed to source control.
27.22 Deployment
Phase 3 should define:
build process
deployment process
database migrations
environment configuration
rollback
monitoring
release strategy
Deployment should eventually become repeatable rather than manual and fragile.
27.23 CI/CD
Where practical, the project should eventually automate:
Commit
 ↓
Lint
 ↓
Type Check
 ↓
Tests
 ↓
Build
 ↓
Deploy
Production deployment should require successful validation.
27.24 Repository Structure
Phase 3 must establish a clear repository structure.
The structure should reflect domain responsibilities rather than historical file organization.
The final structure will be determined after auditing the existing repository.
27.25 API Contracts
The technical plan should define stable contracts between:
Frontend
   ↕
API
   ↕
Domain Services
   ↕
Persistence
The contracts should be explicit and versionable.
27.26 AI Boundary
The architecture must clearly separate:
Deterministic Product Logic
from:
AI Assistance
AI must not silently modify:
assessment scores
career-match rankings
authoritative career facts
unless a future product decision explicitly changes this architecture.
27.27 Migration Tooling
Phase 3 should define scripts/tools for:
legacy data extraction
data transformation
validation
import
rollback
verification
Migration should be repeatable.
A migration that only works once manually is not a robust migration system.
27.28 Data Versioning
At minimum, the system should be capable of versioning:
Assessment
Questions
Scoring Rules
Career Data
Matching Rules
This ensures that historical results remain understandable.


27.29 Performance Requirements
The MVP should prioritize:
fast assessment interactions
responsive career pages
efficient API requests
low unnecessary AI latency
efficient database queries
mobile performance
The assessment is particularly important because the signature experience must feel immediate.
27.30 Mobile-First Requirement
The product was conceived around a visual assessment experience and should therefore be designed mobile-first.
Phase 3 should explicitly account for:
small screens
touch interaction
low bandwidth
image optimization
responsive layouts
accessible controls
unreliable connections
Desktop support remains important, but mobile should not be treated as a secondary adaptation.
27.31 Accessibility
The new assessment should support users who cannot interact with the interface in the intended visual manner.
Phase 3 should consider:
keyboard navigation
screen readers
semantic controls
alternative text
accessible contrast
focus states
non-color indicators
reduced-motion preferences
The visual experience should remain distinctive without making the product inaccessible.
27.32 Technical Debt Policy
Not every piece of old code must be rewritten.
The migration should classify technical debt as:
Keep
Refactor
Replace
Remove
Defer
The goal is to remove debt that prevents product evolution, not to rewrite code simply because it is old.
27.33 Phase 3 Deliverables
By the end of Phase 3, the project should have:
tech-migration-plan.md
Architecture Definition
Domain Model
Database Schema
Migration Map
Assessment Architecture
Scoring Architecture
Matching Architecture
Career Data Strategy
API Contracts
Authentication Plan
Authorization Plan
Testing Strategy
Analytics Plan
Security Plan
Deployment Plan
Rollback Plan
The exact number of supporting files can be determined during Phase 3.
27.34 Phase 3 Completion Criteria
Phase 3 is complete when the team can answer:
Architecture
What is the target architecture?
Why was it selected?
What remains modular?
What remains monolithic?
Data
What entities exist?
How are they related?
How is legacy data transformed?
How is career data sourced?
Assessment
How are questions represented?
How are responses represented?
How are scores calculated?
How are versions handled?
Matching
What inputs influence matching?
How are matches calculated?
How are explanations generated?
AI
What can AI do?
What can AI not do?
How is AI cost controlled?
Operations
How is the application deployed?
How is it monitored?
How are failures recovered?
Migration
What is migrated?
What is replaced?
What is archived?
What is removed?
How is rollback handled?
If these questions cannot be answered, Phase 3 is not complete.
Migration Plan Completion
The product-level migration plan is now complete.
The transformation is:
OLD CAREER FINDER

Personality Quiz
      ↓
Personality Type
      ↓
Career Suggestions
into:
CAREER FINDER 2026

                    USER
                     │
                     ▼
              30-Round Assessment
                     │
          ┌──────────┴──────────┐
          ▼                     ▼
      Work Style             Interests
          │                     │
          └──────────┬──────────┘
                     ▼
              Career Profile
                     │
          ┌──────────┼──────────┐
          ▼          ▼          ▼
       Explore    Compare      Save
          │          │          │
          └──────────┼──────────┘
                     ▼
               Career Match
                     │
                     ▼
                 Skill Gaps
                     │
                     ▼
              Career Roadmap
                     │
                     ▼
                AI Coach
The product strategy is now defined across:
vision
problem
customers
personas
competition
positioning
assessment
career data
AI
MVP
monetization
acquisition
sharing
SEO
retention
revenue
economics
validation
roadmap
migration
risks
metrics
profitability
technical requirements
Transition to Phase 3

Phase 2 established what Career Finder should become.
This migration plan establishes how the product should evolve at the strategic level.
Phase 3 will now establish:
How the existing codebase will technically become that product.
The first Phase 3 artifact is therefore:
tech-migration-plan.md
The next phase should begin with a technical audit of the existing Career Finder codebase, followed by the target architecture and migration design.
No production rewrite should begin until that technical migration plan has been established.