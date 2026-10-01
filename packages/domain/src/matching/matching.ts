import type { Career, CareerMatch, CareerProfile, MatchEvidence, InterestDimension, WorkStyleDimension } from '@career-finder/types';
import { INTEREST_DIMENSIONS, WORK_STYLE_DIMENSIONS } from '@career-finder/types';

export const MATCHING_VERSION = '2026.1';

function dimensionFit(user: number, career: number): number {
  return Math.max(0, 100 - Math.abs(user - career));
}

function strength(score: number): CareerMatch['matchStrength'] {
  if (score >= 80) return 'strong';
  if (score >= 65) return 'good';
  if (score >= 50) return 'explore';
  return 'lower';
}

export function matchCareer(profile: CareerProfile, career: Career): CareerMatch {
  const workEvidence: MatchEvidence[] = WORK_STYLE_DIMENSIONS.map((dimension: WorkStyleDimension) => ({
    dimension,
    fit: dimensionFit(profile.workStyle[dimension], career.workStyles[dimension]),
    direction: profile.workStyle[dimension] >= career.workStyles[dimension] - 15 ? 'positive' : 'negative'
  }));
  const interestEvidence: MatchEvidence[] = INTEREST_DIMENSIONS.map((dimension: InterestDimension) => ({
    dimension,
    fit: dimensionFit(profile.interests[dimension], career.interests[dimension]),
    direction: profile.interests[dimension] >= career.interests[dimension] - 15 ? 'positive' : 'negative'
  }));

  const interestFit = Math.round(interestEvidence.reduce((sum, item) => sum + item.fit, 0) / interestEvidence.length);
  const workStyleFit = Math.round(workEvidence.reduce((sum, item) => sum + item.fit, 0) / workEvidence.length);
  const overallScore = Math.round(interestFit * 0.55 + workStyleFit * 0.45);

  return {
    careerId: career.id,
    interestFit,
    workStyleFit,
    overallScore,
    matchStrength: strength(overallScore),
    evidence: [...interestEvidence, ...workEvidence].sort((a, b) => b.fit - a.fit).slice(0, 6)
  };
}

export function rankCareers(profile: CareerProfile, careers: Career[]): CareerMatch[] {
  return careers
    .map((career) => matchCareer(profile, career))
    .sort((a, b) => b.overallScore - a.overallScore);
}
