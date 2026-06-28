import type { RewardTier, ScoreSummary } from "../features/result/scoring";

const HISTORY_KEY = "history";
const MAX_HISTORY_ENTRIES = 20;

export interface QuizHistoryEntry extends ScoreSummary {
  id: string;
  deckId: string;
  deckTitle: string;
  completedAt: string;
  tier: RewardTier;
}

function canUseLocalStorage(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function loadQuizHistory(): QuizHistoryEntry[] {
  if (!canUseLocalStorage()) return [];

  try {
    const raw = window.localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as QuizHistoryEntry[]) : [];
  } catch {
    return [];
  }
}

export function saveQuizHistoryEntry(entry: QuizHistoryEntry): void {
  if (!canUseLocalStorage()) return;

  try {
    const history = [entry, ...loadQuizHistory()].slice(0, MAX_HISTORY_ENTRIES);
    window.localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch {
    // 학습 기록 저장 실패가 결과 화면 표시를 막으면 안 된다.
  }
}
