import type { FastifyInstance } from 'fastify';
import { healthRoutes } from './health.js';
import { assessmentRoutes } from './v1/assessment.js';
import { careerRoutes } from './v1/careers.js';

export async function registerRoutes(app: FastifyInstance) {
  await app.register(healthRoutes);
  await app.register(assessmentRoutes);
  await app.register(careerRoutes);
}
