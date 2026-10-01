export const WORK_STYLE_DIMENSIONS = ['harmony', 'exploration', 'drive', 'structure'] as const;
export type WorkStyleDimension = (typeof WORK_STYLE_DIMENSIONS)[number];

export const INTEREST_DIMENSIONS = [
  'realistic',
  'investigative',
  'artistic',
  'social',
  'enterprising',
  'conventional'
] as const;
export type InterestDimension = (typeof INTEREST_DIMENSIONS)[number];

export type AssessmentDimension = WorkStyleDimension | InterestDimension;
export type SelectionMode = 'single' | 'multiple';

export interface Signal {
  dimension: AssessmentDimension;
  value: number;
  source: 'question-option';
}

export interface AssessmentOption {
  id: string;
  label: string;
  description?: string;
  image: string;
  signals: Signal[];
}

export interface AssessmentQuestion {
  id: string;
  order: number;
  prompt: string;
  selectionMode: SelectionMode;
  options: AssessmentOption[];
}

export interface AssessmentVersion {
  id: string;
  name: string;
  description: string;
  assessmentId: string;
  version: string;
  status: 'draft' | 'active' | 'retired';
  questions: AssessmentQuestion[];
}

export interface AssessmentResponse {
  questionId: string;
  selectedOptionIds: string[];
}

export interface WorkStyleProfile {
  harmony: number;
  exploration: number;
  drive: number;
  structure: number;
  confidence: number;
  calculationVersion: string;
}

export interface InterestProfile {
  realistic: number;
  investigative: number;
  artistic: number;
  social: number;
  enterprising: number;
  conventional: number;
  confidence: number;
  calculationVersion: string;
}

export interface CareerProfile {
  workStyle: WorkStyleProfile;
  interests: InterestProfile;
}

export interface Career {
  id: string;
  slug: string;
  name: string;
  category: string;
  overview: string;
  workStyles: Record<WorkStyleDimension, number>;
  interests: Record<InterestDimension, number>;
  skills: string[];
  education: string;
  activities: string[];
  relatedCareerIds: string[];
  source: string;
  sourceVersion: string;
}

export interface MatchEvidence {
  dimension: AssessmentDimension;
  fit: number;
  direction: 'positive' | 'neutral' | 'negative';
}

export interface CareerMatch {
  careerId: string;
  interestFit: number;
  workStyleFit: number;
  overallScore: number;
  matchStrength: 'strong' | 'good' | 'explore' | 'lower';
  evidence: MatchEvidence[];
}

export interface ScoredAssessment {
  assessmentId: string;
  assessmentVersion: string;
  profile: CareerProfile;
  matches: CareerMatch[];
}
