import type { FastifyInstance } from 'fastify';
import type { AssessmentResponse } from '@career-finder/types';
import { calculateAssessmentResult, getCurrentAssessment } from '../../services/assessment.js';

export async function assessmentRoutes(app: FastifyInstance) {
  app.get('/api/v1/assessment/current', async () => getCurrentAssessment());

  app.post<{ Body: { responses: AssessmentResponse[] } }>('/api/v1/assessment/score', async (request, reply) => {
    const responses = request.body?.responses;
    if (!Array.isArray(responses)) {
      return reply.code(400).send({ error: 'responses must be an array' });
    }

    const { issues, result } = calculateAssessmentResult(responses);
    if (issues) {
      return reply.code(400).send({ error: 'Invalid assessment responses', issues });
    }

    return result;
  });
}
