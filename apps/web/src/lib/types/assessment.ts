export type WorkStyleDimension = 'harmony' | 'exploration' | 'drive' | 'structure';
export type InterestDimension = 'realistic' | 'investigative' | 'artistic' | 'social' | 'enterprising' | 'conventional';
export type AssessmentDimension = WorkStyleDimension | InterestDimension;

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
  selectionMode: 'single' | 'multiple';
  options: AssessmentOption[];
}

export interface Assessment {
  id: string;
  name: string;
  description: string;
  version: string;
  status: 'draft' | 'active' | 'retired';
  questions: AssessmentQuestion[];
}

export interface CareerMatch {
  career: { id: string; slug: string; name: string; category: string; overview: string };
  careerId: string;
  interestFit: number;
  workStyleFit: number;
  overallScore: number;
  matchStrength: 'strong' | 'good' | 'explore' | 'lower';
  evidence: { dimension: AssessmentDimension; fit: number; direction: 'positive' | 'neutral' | 'negative' }[];
}

export interface AssessmentResult {
  assessmentId: string;
  assessmentVersion: string;
  profile: {
    workStyle: Record<WorkStyleDimension, number> & { confidence: number; calculationVersion: string };
    interests: Record<InterestDimension, number> & { confidence: number; calculationVersion: string };
  };
  matches: CareerMatch[];
}
