import { readFile } from 'node:fs/promises';

const workStyles = ['harmony', 'exploration', 'drive', 'structure'];
const interests = ['realistic', 'investigative', 'artistic', 'social', 'enterprising', 'conventional'];
const assessment = JSON.parse(await readFile(new URL('../../data/assessment/assessment.v1.draft.json', import.meta.url), 'utf8'));
const careers = JSON.parse(await readFile(new URL('../../data/careers/careers.v1.json', import.meta.url), 'utf8'));

const errors = [];
const assert = (condition, message) => { if (!condition) errors.push(message); };

assert(assessment.id && assessment.version, 'Assessment must have id and version.');
assert(assessment.questions.length >= 1, 'Assessment must contain questions.');
const questionIds = new Set();
for (const question of assessment.questions) {
  assert(!questionIds.has(question.id), `Duplicate question id: ${question.id}`);
  questionIds.add(question.id);
  assert(question.options.length === 4, `Question ${question.id} must contain exactly 4 options.`);
  const optionIds = new Set();
  for (const option of question.options) {
    assert(!optionIds.has(option.id), `Duplicate option id in ${question.id}: ${option.id}`);
    optionIds.add(option.id);
    assert(typeof option.image === 'string' && option.image.length > 0, `Missing image for ${option.id}.`);
    assert(option.signals.length > 0, `Missing signals for ${option.id}.`);
    for (const signal of option.signals) {
      assert([...workStyles, ...interests].includes(signal.dimension), `Unknown signal dimension: ${signal.dimension}.`);
      assert(Number.isFinite(signal.value), `Invalid signal value for ${option.id}.`);
    }
  }
}

const careerIds = new Set();
const slugs = new Set();
for (const career of careers) {
  assert(!careerIds.has(career.id), `Duplicate career id: ${career.id}`);
  assert(!slugs.has(career.slug), `Duplicate career slug: ${career.slug}`);
  careerIds.add(career.id); slugs.add(career.slug);
  for (const dimension of [...workStyles, ...interests]) {
    if (workStyles.includes(dimension)) {
      assert(Number.isFinite(career.workStyles[dimension]) && career.workStyles[dimension] >= 0 && career.workStyles[dimension] <= 100, `${career.name}: invalid ${dimension} work-style score.`);
    } else {
      assert(Number.isFinite(career.interests[dimension]) && career.interests[dimension] >= 0 && career.interests[dimension] <= 100, `${career.name}: invalid ${dimension} interest score.`);
    }
  }
}

if (errors.length) {
  console.error(errors.map((error) => `✗ ${error}`).join('\n'));
  process.exit(1);
}
console.log(`✓ Assessment content valid (${assessment.questions.length} questions)`);
console.log(`✓ Career content valid (${careers.length} careers)`);
