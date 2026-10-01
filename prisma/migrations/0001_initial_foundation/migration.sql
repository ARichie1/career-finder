-- Career Finder Phase 3 foundation.
-- Keep this migration version-controlled and non-destructive.

CREATE TYPE "AssessmentStatus" AS ENUM ('DRAFT', 'ACTIVE', 'RETIRED');
CREATE TYPE "AttemptStatus" AS ENUM ('IN_PROGRESS', 'COMPLETED', 'ABANDONED');
CREATE TYPE "SelectionMode" AS ENUM ('SINGLE', 'MULTIPLE');
CREATE TYPE "MatchStrength" AS ENUM ('STRONG', 'GOOD', 'EXPLORE', 'LOWER');

CREATE TABLE "User" (
  "id" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "displayName" TEXT,
  "country" TEXT,
  "journeyType" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

CREATE TABLE "Assessment" (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Assessment_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "AssessmentVersion" (
  "id" TEXT NOT NULL,
  "assessmentId" TEXT NOT NULL,
  "version" TEXT NOT NULL,
  "status" "AssessmentStatus" NOT NULL DEFAULT 'DRAFT',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "AssessmentVersion_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "AssessmentVersion_assessmentId_fkey" FOREIGN KEY ("assessmentId") REFERENCES "Assessment"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
CREATE UNIQUE INDEX "AssessmentVersion_assessmentId_version_key" ON "AssessmentVersion"("assessmentId", "version");
CREATE INDEX "AssessmentVersion_assessmentId_status_idx" ON "AssessmentVersion"("assessmentId", "status");

CREATE TABLE "Question" (
  "id" TEXT NOT NULL,
  "assessmentVersionId" TEXT NOT NULL,
  "order" INTEGER NOT NULL,
  "prompt" TEXT NOT NULL,
  "selectionMode" "SelectionMode" NOT NULL,
  CONSTRAINT "Question_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "Question_assessmentVersionId_fkey" FOREIGN KEY ("assessmentVersionId") REFERENCES "AssessmentVersion"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
CREATE UNIQUE INDEX "Question_assessmentVersionId_order_key" ON "Question"("assessmentVersionId", "order");
CREATE INDEX "Question_assessmentVersionId_idx" ON "Question"("assessmentVersionId");

CREATE TABLE "QuestionOption" (
  "id" TEXT NOT NULL,
  "questionId" TEXT NOT NULL,
  "label" TEXT NOT NULL,
  "description" TEXT,
  "image" TEXT NOT NULL,
  CONSTRAINT "QuestionOption_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "QuestionOption_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
CREATE INDEX "QuestionOption_questionId_idx" ON "QuestionOption"("questionId");

CREATE TABLE "Signal" (
  "id" TEXT NOT NULL,
  "questionOptionId" TEXT NOT NULL,
  "dimension" TEXT NOT NULL,
  "value" DOUBLE PRECISION NOT NULL,
  "source" TEXT NOT NULL DEFAULT 'question-option',
  CONSTRAINT "Signal_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "Signal_questionOptionId_fkey" FOREIGN KEY ("questionOptionId") REFERENCES "QuestionOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
CREATE INDEX "Signal_questionOptionId_dimension_idx" ON "Signal"("questionOptionId", "dimension");

CREATE TABLE "AssessmentAttempt" (
  "id" TEXT NOT NULL,
  "userId" TEXT,
  "assessmentId" TEXT NOT NULL,
  "assessmentVersionId" TEXT NOT NULL,
  "status" "AttemptStatus" NOT NULL DEFAULT 'IN_PROGRESS',
  "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "completedAt" TIMESTAMP(3),
  CONSTRAINT "AssessmentAttempt_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "AssessmentAttempt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT "AssessmentAttempt_assessmentId_fkey" FOREIGN KEY ("assessmentId") REFERENCES "Assessment"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT "AssessmentAttempt_assessmentVersionId_fkey" FOREIGN KEY ("assessmentVersionId") REFERENCES "AssessmentVersion"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
CREATE INDEX "AssessmentAttempt_userId_startedAt_idx" ON "AssessmentAttempt"("userId", "startedAt");
CREATE INDEX "AssessmentAttempt_assessmentId_status_idx" ON "AssessmentAttempt"("assessmentId", "status");

CREATE TABLE "Response" (
  "id" TEXT NOT NULL,
  "attemptId" TEXT NOT NULL,
  "questionId" TEXT NOT NULL,
  "selectedOptions" JSONB NOT NULL,
  "answeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Response_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "Response_attemptId_fkey" FOREIGN KEY ("attemptId") REFERENCES "AssessmentAttempt"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT "Response_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
CREATE UNIQUE INDEX "Response_attemptId_questionId_key" ON "Response"("attemptId", "questionId");
CREATE INDEX "Response_questionId_idx" ON "Response"("questionId");

CREATE TABLE "CareerProfile" (
  "id" TEXT NOT NULL,
  "userId" TEXT,
  "assessmentAttemptId" TEXT,
  "harmony" DOUBLE PRECISION NOT NULL,
  "exploration" DOUBLE PRECISION NOT NULL,
  "drive" DOUBLE PRECISION NOT NULL,
  "structure" DOUBLE PRECISION NOT NULL,
  "realistic" DOUBLE PRECISION NOT NULL,
  "investigative" DOUBLE PRECISION NOT NULL,
  "artistic" DOUBLE PRECISION NOT NULL,
  "social" DOUBLE PRECISION NOT NULL,
  "enterprising" DOUBLE PRECISION NOT NULL,
  "conventional" DOUBLE PRECISION NOT NULL,
  "workStyleConfidence" DOUBLE PRECISION NOT NULL,
  "interestConfidence" DOUBLE PRECISION NOT NULL,
  "calculationVersion" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "CareerProfile_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "CareerProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT "CareerProfile_assessmentAttemptId_fkey" FOREIGN KEY ("assessmentAttemptId") REFERENCES "AssessmentAttempt"("id") ON DELETE SET NULL ON UPDATE CASCADE
);
CREATE INDEX "CareerProfile_userId_createdAt_idx" ON "CareerProfile"("userId", "createdAt");
CREATE INDEX "CareerProfile_assessmentAttemptId_idx" ON "CareerProfile"("assessmentAttemptId");

CREATE TABLE "Career" (
  "id" TEXT NOT NULL,
  "slug" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "category" TEXT NOT NULL,
  "overview" TEXT NOT NULL,
  "education" TEXT NOT NULL,
  "activities" JSONB NOT NULL,
  "source" TEXT NOT NULL,
  "sourceVersion" TEXT NOT NULL,
  "isPublished" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Career_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "Career_slug_key" ON "Career"("slug");
CREATE INDEX "Career_category_isPublished_idx" ON "Career"("category", "isPublished");

CREATE TABLE "CareerInterest" (
  "id" TEXT NOT NULL,
  "careerId" TEXT NOT NULL,
  "dimension" TEXT NOT NULL,
  "score" DOUBLE PRECISION NOT NULL,
  CONSTRAINT "CareerInterest_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "CareerInterest_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "Career"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
CREATE UNIQUE INDEX "CareerInterest_careerId_dimension_key" ON "CareerInterest"("careerId", "dimension");

CREATE TABLE "CareerWorkStyle" (
  "id" TEXT NOT NULL,
  "careerId" TEXT NOT NULL,
  "dimension" TEXT NOT NULL,
  "score" DOUBLE PRECISION NOT NULL,
  CONSTRAINT "CareerWorkStyle_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "CareerWorkStyle_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "Career"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
CREATE UNIQUE INDEX "CareerWorkStyle_careerId_dimension_key" ON "CareerWorkStyle"("careerId", "dimension");

CREATE TABLE "Skill" (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "category" TEXT NOT NULL,
  CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "Skill_name_key" ON "Skill"("name");

CREATE TABLE "CareerSkill" (
  "id" TEXT NOT NULL,
  "careerId" TEXT NOT NULL,
  "skillId" TEXT NOT NULL,
  "importance" DOUBLE PRECISION NOT NULL DEFAULT 1,
  CONSTRAINT "CareerSkill_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "CareerSkill_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "Career"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT "CareerSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
CREATE UNIQUE INDEX "CareerSkill_careerId_skillId_key" ON "CareerSkill"("careerId", "skillId");
CREATE INDEX "CareerSkill_skillId_idx" ON "CareerSkill"("skillId");

CREATE TABLE "CareerRequirement" (
  "id" TEXT NOT NULL,
  "careerId" TEXT NOT NULL,
  "type" TEXT NOT NULL,
  "value" TEXT NOT NULL,
  CONSTRAINT "CareerRequirement_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "CareerRequirement_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "Career"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
CREATE INDEX "CareerRequirement_careerId_type_idx" ON "CareerRequirement"("careerId", "type");

CREATE TABLE "CareerMatch" (
  "id" TEXT NOT NULL,
  "profileId" TEXT NOT NULL,
  "careerId" TEXT NOT NULL,
  "interestFit" DOUBLE PRECISION NOT NULL,
  "workStyleFit" DOUBLE PRECISION NOT NULL,
  "preferenceFit" DOUBLE PRECISION,
  "goalFit" DOUBLE PRECISION,
  "constraintFit" DOUBLE PRECISION,
  "overallScore" DOUBLE PRECISION NOT NULL,
  "matchStrength" "MatchStrength" NOT NULL,
  "matchingVersion" TEXT NOT NULL,
  "evidence" JSONB NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "CareerMatch_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "CareerMatch_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "CareerProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT "CareerMatch_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "Career"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
CREATE UNIQUE INDEX "CareerMatch_profileId_careerId_matchingVersion_key" ON "CareerMatch"("profileId", "careerId", "matchingVersion");
CREATE INDEX "CareerMatch_profileId_overallScore_idx" ON "CareerMatch"("profileId", "overallScore");

CREATE TABLE "SavedCareer" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "careerId" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "SavedCareer_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "SavedCareer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT "SavedCareer_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "Career"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
CREATE UNIQUE INDEX "SavedCareer_userId_careerId_key" ON "SavedCareer"("userId", "careerId");
CREATE INDEX "SavedCareer_careerId_idx" ON "SavedCareer"("careerId");
