# Migration scripts

Legacy migration is intentionally repeatable and non-destructive.

Planned pipeline:

1. extract legacy assessment/career data
2. normalize records
3. transform into Career Finder domain contracts
4. validate transformed records
5. import into PostgreSQL
6. verify counts, relationships and versions

The uploaded project archive currently contains the new SaaS skeleton but does
not contain the legacy application's source/content. Therefore no destructive
or speculative legacy import is performed in this step.
