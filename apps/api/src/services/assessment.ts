import { rankCareers, scoreAssessment, validateResponses } from '@career-finder/domain';
import type { AssessmentResponse } from '@career-finder/types';
import { assessment } from '../infrastructure/career-data/assessment.js';
import { careers } from '../infrastructure/career-data/careers.js';

export function getCurrentAssessment() {
  return {
    id: assessment.id,
    name: assessment.name,
    description: assessment.description,
    version: assessment.version,
    status: assessment.status,
    questions: assessment.questions.map((question) => ({
      ...question,
      options: question.options.map(({ signals: _signals, ...option }) => option)
    }))
  };
}

export function calculateAssessmentResult(responses: AssessmentResponse[]) {
  const issues = validateResponses(assessment, responses);
  if (issues.length) return { issues } as const;

  const profile = scoreAssessment(assessment, responses);
  const matches = rankCareers(profile, careers).map((match) => {
    const career = careers.find((item) => item.id === match.careerId);
    if (!career) throw new Error(`Career ${match.careerId} was not found`);
    return {
      ...match,
      career: {
        id: career.id,
        slug: career.slug,
        name: career.name,
        category: career.category,
        overview: career.overview
      }
    };
  });

  return {
    result: {
      assessmentId: assessment.id,
      assessmentVersion: assessment.version,
      profile,
      matches
    }
  } as const;
}
