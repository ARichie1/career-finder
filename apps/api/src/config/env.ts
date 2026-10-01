const port = Number(process.env.PORT ?? 3000);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('PORT must be a valid TCP port');
}

export const env = {
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  HOST: process.env.HOST ?? '127.0.0.1',
  PORT: port,
  WEB_ORIGIN: process.env.WEB_ORIGIN ?? 'http://localhost:5173'
} as const;
