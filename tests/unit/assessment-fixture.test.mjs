import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { scoreAssessment, validateResponses, rankCareers } from '../../packages/domain/dist/index.js';

const assessment = JSON.parse(await readFile(new URL('../../data/assessment/assessment.v1.draft.json', import.meta.url), 'utf8'));
const careers = JSON.parse(await readFile(new URL('../../data/careers/careers.v1.json', import.meta.url), 'utf8'));

const responses = assessment.questions.map((question) => ({
  questionId: question.id,
  selectedOptionIds: [question.options[0].id]
}));

test('draft assessment fixture is structurally valid', () => {
  assert.equal(assessment.questions.length, 4);
  assert.ok(assessment.questions.every((q) => q.options.length === 4));
  assert.ok(assessment.questions.every((q) => q.options.every((o) => o.signals.length > 0)));
});

test('draft fixture can flow through scoring and matching', () => {
  assert.deepEqual(validateResponses(assessment, responses), []);
  const profile = scoreAssessment(assessment, responses);
  const matches = rankCareers(profile, careers);
  assert.equal(matches.length, careers.length);
  assert.ok(matches[0].overallScore >= matches.at(-1).overallScore);
  assert.ok(matches[0].evidence.length > 0);
});
