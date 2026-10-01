import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as typeof globalThis & { careerFinderPrisma?: PrismaClient };

export const prisma = globalForPrisma.careerFinderPrisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.careerFinderPrisma = prisma;
}
