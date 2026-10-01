import type {
  AssessmentResponse,
  AssessmentVersion,
  CareerProfile,
  InterestDimension,
  WorkStyleDimension
} from '@career-finder/types';
import { INTEREST_DIMENSIONS, WORK_STYLE_DIMENSIONS } from '@career-finder/types';

const SCORING_VERSION = '2026.1';

function normalize(raw: number, max: number): number {
  if (max <= 0) return 50;
  return Math.round((raw / max) * 100);
}

function confidenceFor(values: number[]): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => b - a);
  const spread = sorted[0] - sorted[sorted.length - 1];
  return Math.round(Math.min(100, 40 + spread));
}

export function scoreAssessment(
  assessment: AssessmentVersion,
  responses: AssessmentResponse[]
): CareerProfile {
  const responseByQuestion = new Map(responses.map((response) => [response.questionId, response]));
  const workRaw = Object.fromEntries(WORK_STYLE_DIMENSIONS.map((dimension) => [dimension, 0])) as Record<WorkStyleDimension, number>;
  const interestRaw = Object.fromEntries(INTEREST_DIMENSIONS.map((dimension) => [dimension, 0])) as Record<InterestDimension, number>;
  let answered = 0;
  let maxSignal = 0;

  for (const question of assessment.questions) {
    const response = responseByQuestion.get(question.id);
    if (!response) continue;
    const selected = new Set(response.selectedOptionIds);
    const options = question.options.filter((option) => selected.has(option.id));
    if (options.length === 0) continue;
    answered += 1;

    for (const option of options) {
      for (const signal of option.signals) {
        maxSignal += Math.abs(signal.value);
        if (signal.dimension in workRaw) {
          workRaw[signal.dimension as WorkStyleDimension] += signal.value;
        } else {
          interestRaw[signal.dimension as InterestDimension] += signal.value;
        }
      }
    }
  }

  const workMax = Math.max(1, ...Object.values(workRaw).map(Math.abs));
  const interestMax = Math.max(1, ...Object.values(interestRaw).map(Math.abs));
  const workStyle = Object.fromEntries(
    WORK_STYLE_DIMENSIONS.map((dimension) => [dimension, normalize(Math.max(0, workRaw[dimension]), workMax)])
  ) as Record<WorkStyleDimension, number>;
  const interests = Object.fromEntries(
    INTEREST_DIMENSIONS.map((dimension) => [dimension, normalize(Math.max(0, interestRaw[dimension]), interestMax)])
  ) as Record<InterestDimension, number>;

  const workValues = Object.values(workStyle);
  const interestValues = Object.values(interests);
  const completionConfidence = assessment.questions.length === 0 ? 0 : Math.round((answered / assessment.questions.length) * 100);
  const signalConfidence = maxSignal > 0 ? 100 : 0;

  return {
    workStyle: {
      ...workStyle,
      confidence: Math.round((confidenceFor(workValues) + completionConfidence + signalConfidence) / 3),
      calculationVersion: SCORING_VERSION
    },
    interests: {
      ...interests,
      confidence: Math.round((confidenceFor(interestValues) + completionConfidence + signalConfidence) / 3),
      calculationVersion: SCORING_VERSION
    }
  };
}
