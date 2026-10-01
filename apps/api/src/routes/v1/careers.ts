import type { FastifyInstance } from 'fastify';
import { getCareerBySlug, listCareers } from '../../services/career.js';

export async function careerRoutes(app: FastifyInstance) {
  app.get<{ Querystring: { search?: string; category?: string } }>('/api/v1/careers', async (request) => {
    return listCareers(request.query.search, request.query.category);
  });

  app.get<{ Params: { slug: string } }>('/api/v1/careers/:slug', async (request, reply) => {
    const career = getCareerBySlug(request.params.slug);
    if (!career) return reply.code(404).send({ error: 'Career not found' });
    return career;
  });
}
