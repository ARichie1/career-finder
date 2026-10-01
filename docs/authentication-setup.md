# Authentication Setup

Career Finder uses Better Auth on the Fastify API with PostgreSQL-backed Prisma storage. Email/password accounts require verified email; Google sign-in is enabled when both OAuth credentials are configured.

## Local Setup

1. Copy the root `.env.example` to `.env`.
2. Set `DATABASE_URL` to a reachable PostgreSQL database.
3. Generate a secret with `node -e "console.log(require('node:crypto').randomBytes(32).toString('base64'))"` and set `BETTER_AUTH_SECRET`.
4. Configure SMTP host, port, sender, and credentials. Verification and password-reset links are sent through this provider.
5. To enable Google, create a web OAuth client and set `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`. Add `http://localhost:3000/api/auth/callback/google` as an authorized redirect URI.
6. Generate the Prisma client and apply migrations:

   ```powershell
   pnpm db:generate
   pnpm db:migrate
   ```

7. Start the workspace with `pnpm dev`.

Google sign-in remains disabled until both Google credentials are set. Email registration requires a working SMTP provider so accounts can receive verification links.

## Production Requirements

Set `NODE_ENV=production`, a unique `BETTER_AUTH_SECRET` of at least 32 characters, `DATABASE_URL`, `SMTP_HOST`, `SMTP_FROM`, an HTTPS `BETTER_AUTH_URL`, and an HTTPS `WEB_ORIGIN`. Configure Google credentials if Google sign-in is offered. Never commit `.env` or provider credentials.

Passwords are hashed by Better Auth using scrypt. Email verification is required before password sign-in; password reset revokes existing sessions. Session cookies are HTTP-only, SameSite=Lax, and Secure in production. OAuth tokens are encrypted at rest. Fastify CORS accepts only `WEB_ORIGIN`; auth endpoints use persistent database-backed rate limits, with tighter limits on login, signup, and password-reset requests. Auth URLs, cookies, and authorization headers are redacted from API request logs.

The frontend calls the API using the same `localhost` hostname as the OAuth callback in development. Keep `PUBLIC_API_BASE_URL`, `BETTER_AUTH_URL`, and the browser hostname aligned so the browser can retain and send the session cookie.
