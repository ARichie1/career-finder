import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type { AssessmentVersion } from '@career-finder/types';

const file = resolve(process.cwd(), '../../data/assessment/assessment.v1.draft.json');
export const assessment = JSON.parse(readFileSync(file, 'utf8')) as AssessmentVersion;
