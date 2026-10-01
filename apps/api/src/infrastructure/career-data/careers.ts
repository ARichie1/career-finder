import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type { Career } from '@career-finder/types';

const file = resolve(process.cwd(), '../../data/careers/careers.v1.json');
export const careers = JSON.parse(readFileSync(file, 'utf8')) as Career[];
