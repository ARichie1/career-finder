import assert from 'node:assert/strict';
import test from 'node:test';
import { scoreAssessment, validateResponses } from '../../packages/domain/dist/index.js';
import { rankCareers } from '../../packages/domain/dist/index.js';

const assessment = {
  id: 'test',
  assessmentId: 'test',
  version: 'test-1',
  status: 'active',
  questions: [
    { id: 'q1', order: 1, prompt: 'q1', selectionMode: 'single', options: [
      { id: 'a', label: 'a', image: 'a.svg', signals: [
        { dimension: 'drive', value: 1, source: 'question-option' },
        { dimension: 'enterprising', value: 1, source: 'question-option' }
      ] },
      { id: 'b', label: 'b', image: 'b.svg', signals: [
        { dimension: 'structure', value: 1, source: 'question-option' },
        { dimension: 'conventional', value: 1, source: 'question-option' }
      ] }
    ]},
    { id: 'q2', order: 2, prompt: 'q2', selectionMode: 'multiple', options: [
      { id: 'c', label: 'c', image: 'c.svg', signals: [
        { dimension: 'investigative', value: 2, source: 'question-option' }
      ] }
    ]}
  ]
};

test('validates complete single and multiple responses', () => {
  assert.deepEqual(validateResponses(assessment, [
    { questionId: 'q1', selectedOptionIds: ['a'] },
    { questionId: 'q2', selectedOptionIds: ['c'] }
  ]), []);
});

test('rejects invalid options and missing questions', () => {
  const issues = validateResponses(assessment, [{ questionId: 'q1', selectedOptionIds: ['missing'] }]);
  assert.equal(issues.some((issue) => issue.message.includes('Unknown option')), true);
  assert.equal(issues.some((issue) => issue.questionId === 'q2'), true);
});

test('produces deterministic normalized profile scores', () => {
  const responses = [
    { questionId: 'q1', selectedOptionIds: ['a'] },
    { questionId: 'q2', selectedOptionIds: ['c'] }
  ];
  const first = scoreAssessment(assessment, responses);
  const second = scoreAssessment(assessment, responses);
  assert.deepEqual(first, second);
  assert.equal(first.workStyle.drive, 100);
  assert.equal(first.interests.investigative, 100);
  assert.equal(first.workStyle.calculationVersion, '2026.1');
});

test('ranks careers from highest to lowest compatibility', () => {
  const profile = scoreAssessment(assessment, [
    { questionId: 'q1', selectedOptionIds: ['a'] },
    { questionId: 'q2', selectedOptionIds: ['c'] }
  ]);
  const careers = [
    { id:'low', slug:'low', name:'Low', category:'x', overview:'', workStyles:{harmony:0,exploration:0,drive:0,structure:0}, interests:{realistic:0,investigative:0,artistic:0,social:0,enterprising:0,conventional:0}, skills:[], education:'', activities:[], relatedCareerIds:[], source:'test', sourceVersion:'1' },
    { id:'high', slug:'high', name:'High', category:'x', overview:'', workStyles:{harmony:50,exploration:50,drive:100,structure:0}, interests:{realistic:0,investigative:100,artistic:0,social:0,enterprising:100,conventional:0}, skills:[], education:'', activities:[], relatedCareerIds:[], source:'test', sourceVersion:'1' }
  ];
  const ranked = rankCareers(profile, careers);
  assert.equal(ranked[0].careerId, 'high');
  assert.equal(ranked.length, 2);
});
