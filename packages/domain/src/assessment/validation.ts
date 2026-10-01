import type { AssessmentResponse, AssessmentVersion } from '@career-finder/types';

export interface ValidationIssue {
  questionId: string;
  message: string;
}

export function validateResponses(
  assessment: AssessmentVersion,
  responses: AssessmentResponse[]
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const questions = new Map(assessment.questions.map((question) => [question.id, question]));

  for (const response of responses) {
    const question = questions.get(response.questionId);
    if (!question) {
      issues.push({ questionId: response.questionId, message: 'Unknown question.' });
      continue;
    }

    const selected = [...new Set(response.selectedOptionIds)];
    const validOptionIds = new Set(question.options.map((option) => option.id));
    const invalid = selected.filter((id) => !validOptionIds.has(id));

    if (invalid.length) {
      issues.push({ questionId: question.id, message: `Unknown option(s): ${invalid.join(', ')}` });
    }
    if (selected.length === 0) {
      issues.push({ questionId: question.id, message: 'At least one option must be selected.' });
    }
    if (question.selectionMode === 'single' && selected.length > 1) {
      issues.push({ questionId: question.id, message: 'Only one option may be selected.' });
    }
  }

  const questionIds = new Set(responses.map((response) => response.questionId));
  for (const question of assessment.questions) {
    if (!questionIds.has(question.id)) {
      issues.push({ questionId: question.id, message: 'Question has not been answered.' });
    }
  }

  return issues;
}
