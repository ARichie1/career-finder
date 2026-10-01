import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { scoreAssessment, rankCareers } from '../../packages/domain/dist/index.js';

const assessment = JSON.parse(await readFile(new URL('../../data/assessment/assessment.v1.draft.json', import.meta.url), 'utf8'));
const careers = JSON.parse(await readFile(new URL('../../data/careers/careers.v1.json', import.meta.url), 'utf8'));

test('assessment result contract contains only public career summary fields', () => {
  const responses = assessment.questions.map((q) => ({ questionId: q.id, selectedOptionIds: [q.options[0].id] }));
  const profile = scoreAssessment(assessment, responses);
  const matches = rankCareers(profile, careers).map((match) => {
    const career = careers.find((item) => item.id === match.careerId);
    return { ...match, career: { id: career.id, slug: career.slug, name: career.name, category: career.category, overview: career.overview } };
  });

  assert.equal(matches.length, careers.length);
  assert.equal(Object.hasOwn(matches[0].career, 'source'), false);
  assert.equal(Object.hasOwn(matches[0].career, 'workStyles'), false);
  assert.equal(Object.hasOwn(matches[0].career, 'interests'), false);
});
