import type { FastifyInstance } from 'fastify';
import { fromNodeHeaders } from 'better-auth/node';
import { auth } from '../config/auth.js';
import { env } from '../config/env.js';

export async function authRoutes(app: FastifyInstance) {
  app.route({
    method: ['GET', 'POST'],
    url: '/api/auth/*',
    async handler(request, reply) {
      const url = new URL(request.url, env.BETTER_AUTH_URL);
      const headers = fromNodeHeaders(request.headers);
      const body = request.method === 'GET' || request.method === 'HEAD'
        ? undefined
        : JSON.stringify(request.body ?? {});

      try {
        const response = await auth.handler(new Request(url, {
          method: request.method,
          headers,
          body
        }));

        response.headers.forEach((value, key) => {
          if (key.toLowerCase() !== 'set-cookie') reply.header(key, value);
        });
        const cookies = response.headers.getSetCookie();
        if (cookies.length) reply.header('set-cookie', cookies);

        reply.code(response.status);
        const responseBody = await response.text();
        return reply.send(responseBody || null);
      } catch (error) {
        request.log.error('Authentication request failed');
        return reply.code(500).send({ error: 'Authentication request failed' });
      }
    }
  });

  app.get('/api/v1/auth/config', async () => ({
    googleEnabled: Boolean(env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET)
  }));
}
