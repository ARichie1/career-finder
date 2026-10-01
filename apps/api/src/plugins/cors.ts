import cors from '@fastify/cors';
import type { FastifyInstance } from 'fastify';
import { env } from '../config/env.js';

export async function registerCors(app: FastifyInstance) {
  await app.register(cors, {
    origin: [env.WEB_ORIGIN, 'http://127.0.0.1:5173']
  });
}
