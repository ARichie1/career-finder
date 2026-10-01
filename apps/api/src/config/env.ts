import { existsSync } from 'node:fs';
import { randomBytes } from 'node:crypto';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootEnvPath = resolve(dirname(fileURLToPath(import.meta.url)), '../../../../.env');
if (existsSync(rootEnvPath)) process.loadEnvFile(rootEnvPath);

const port = Number(process.env.PORT ?? 3000);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('PORT must be a valid TCP port');
}

const NODE_ENV = process.env.NODE_ENV ?? 'development';
const BETTER_AUTH_SECRET = process.env.BETTER_AUTH_SECRET;
const WEB_ORIGIN = process.env.WEB_ORIGIN ?? 'http://localhost:5173';
const BETTER_AUTH_URL = process.env.BETTER_AUTH_URL ?? `http://localhost:${port}`;
const DATABASE_URL = process.env.DATABASE_URL;
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_FROM = process.env.SMTP_FROM;

if (NODE_ENV === 'production' && (!BETTER_AUTH_SECRET || BETTER_AUTH_SECRET.length < 32)) {
  throw new Error('BETTER_AUTH_SECRET must contain at least 32 characters in production');
}
if (NODE_ENV === 'production' && (!WEB_ORIGIN.startsWith('https://') || !BETTER_AUTH_URL.startsWith('https://'))) {
  throw new Error('WEB_ORIGIN and BETTER_AUTH_URL must use HTTPS in production');
}

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
if (Boolean(GOOGLE_CLIENT_ID) !== Boolean(GOOGLE_CLIENT_SECRET)) {
  throw new Error('GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET must be configured together');
}

const SMTP_PORT = Number(process.env.SMTP_PORT ?? 587);
if (!Number.isInteger(SMTP_PORT) || SMTP_PORT < 1 || SMTP_PORT > 65535) {
  throw new Error('SMTP_PORT must be a valid TCP port');
}
if (NODE_ENV === 'production' && !DATABASE_URL) {
  throw new Error('DATABASE_URL is required in production');
}
if (NODE_ENV === 'production' && (!SMTP_HOST || !SMTP_FROM)) {
  throw new Error('SMTP_HOST and SMTP_FROM are required in production for verification and password-reset emails');
}

export const env = {
  NODE_ENV,
  HOST: process.env.HOST ?? '127.0.0.1',
  PORT: port,
  WEB_ORIGIN,
  BETTER_AUTH_URL,
  BETTER_AUTH_SECRET: BETTER_AUTH_SECRET ?? randomBytes(32).toString('base64url'),
  DATABASE_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_SECURE: process.env.SMTP_SECURE === 'true',
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASSWORD: process.env.SMTP_PASSWORD,
  SMTP_FROM: SMTP_FROM ?? 'Career Finder <no-reply@localhost>'
} as const;
