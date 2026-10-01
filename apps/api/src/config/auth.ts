import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { env } from './env.js';
import { prisma } from '../infrastructure/prisma.js';
import { sendAuthEmail } from '../services/auth-email.js';

function deliverEmail(to: string, subject: string, url: string) {
  void sendAuthEmail(to, subject, url).catch(() => {
    console.error('Authentication email delivery failed. Check the SMTP configuration.');
  });
}

export const auth = betterAuth({
  appName: 'Career Finder',
  baseURL: env.BETTER_AUTH_URL,
  basePath: '/api/auth',
  secret: env.BETTER_AUTH_SECRET,
  trustedOrigins: [env.WEB_ORIGIN],
  database: prismaAdapter(prisma, { provider: 'postgresql' }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    autoSignIn: false,
    revokeSessionsOnPasswordReset: true,
    sendResetPassword: async ({ user, url }) => {
      deliverEmail(user.email, 'Reset your Career Finder password', url);
    }
  },
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url }) => {
      deliverEmail(user.email, 'Verify your Career Finder email', url);
    }
  },
  account: {
    encryptOAuthTokens: true,
    accountLinking: { enabled: true, trustedProviders: ['google'] }
  },
  rateLimit: {
    enabled: true,
    window: 60,
    max: 100,
    storage: 'database',
    customRules: {
      '/sign-in/email': { window: 60, max: 8 },
      '/sign-up/email': { window: 3600, max: 5 },
      '/request-password-reset': { window: 3600, max: 3 }
    }
  },
  socialProviders: env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET
    ? {
        google: {
          clientId: env.GOOGLE_CLIENT_ID,
          clientSecret: env.GOOGLE_CLIENT_SECRET
        }
      }
    : {},
  advanced: {
    defaultCookieAttributes: {
      httpOnly: true,
      sameSite: 'lax',
      secure: env.NODE_ENV === 'production'
    }
  }
});
