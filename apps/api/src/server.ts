import Fastify from 'fastify';
import { env } from './config/env.js';
import { registerCors } from './plugins/cors.js';
import { registerRoutes } from './routes/index.js';

const app = Fastify({
  logger: {
    redact: {
      paths: ['req.headers.authorization', 'req.headers.cookie', 'req.url'],
      censor: '[REDACTED]'
    }
  }
});

app.get('/', async () => ({
  name: 'Career Finder API',
  status: 'ok',
  version: '0.1.0'
}));

await registerCors(app);
await registerRoutes(app);

try {
  await app.listen({ host: env.HOST, port: env.PORT });
} catch (error) {
  app.log.error(error);
  process.exit(1);
}
