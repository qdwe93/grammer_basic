export type RewardTier = "high" | "middle" | "low";

export const SCORING = {
  perfectQuestionWeight: 1,
  retriedQuestionWeight: 0,
  possibleQuestionWeight: 1,
} as const;

export const RESULT_TIER_THRESHOLDS = {
  high: 90,
  middle: 70,
} as const;

export interface QuestionScoreInput {
  questionId: string;
  perfect: boolean;
}

export interface ScoreSummary {
  accuracy: number;
  earnedPoints: number;
  possiblePoints: number;
  perfectCount: number;
  total: number;
}

export function getQuestionWeight(perfect: boolean): number {
  return perfect ? SCORING.perfectQuestionWeight : SCORING.retriedQuestionWeight;
}

export function calculateScore(questions: QuestionScoreInput[]): ScoreSummary {
  const total = questions.length;
  const possiblePoints = total * SCORING.possibleQuestionWeight;
  const earnedPoints = questions.reduce(
    (sum, question) => sum + getQuestionWeight(question.perfect),
    0,
  );
  const perfectCount = questions.filter((question) => question.perfect).length;
  const accuracy =
    possiblePoints > 0 ? Math.round((earnedPoints / possiblePoints) * 100) : 0;

  return {
    accuracy,
    earnedPoints,
    possiblePoints,
    perfectCount,
    total,
  };
}

export function getRewardTier(accuracy: number): RewardTier {
  if (accuracy >= RESULT_TIER_THRESHOLDS.high) return "high";
  if (accuracy >= RESULT_TIER_THRESHOLDS.middle) return "middle";
  return "low";
}

export function isRewardTier(value: string | null): value is RewardTier {
  return value === "high" || value === "middle" || value === "low";
}
