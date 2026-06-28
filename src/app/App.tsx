import { useMemo, useState } from "react";
import { sampleDeck, type DeckEntry } from "../data/loadDeck";
import type { Deck } from "../data/schema";
import { QuizBoard } from "../features/quiz/QuizBoard";
import { ResultCard } from "../features/result/ResultCard";
import { StartHero } from "../features/start/StartHero";
import {
  calculateScore,
  isRewardTier,
  type RewardTier,
  type ScoreSummary,
} from "../features/result/scoring";
import { AppHeader, type AppView } from "./AppHeader";
import { AppFooter } from "./AppFooter";
import styles from "./App.module.css";

const FORCED_RESULT_COUNTS: Record<RewardTier, { perfect: number; total: number }> = {
  high: { perfect: 9, total: 10 },
  middle: { perfect: 7, total: 10 },
  low: { perfect: 5, total: 10 },
};

function getForcedResultScore(): ScoreSummary | null {
  if (!import.meta.env.DEV || typeof window === "undefined") return null;

  const tier = new URLSearchParams(window.location.search).get("resultTier");
  if (!isRewardTier(tier)) return null;

  const { perfect, total } = FORCED_RESULT_COUNTS[tier];
  return calculateScore(
    Array.from({ length: total }, (_, index) => ({
      questionId: `forced-${tier}-${index + 1}`,
      perfect: index < perfect,
    })),
  );
}

function clearForcedResult() {
  const url = new URL(window.location.href);
  url.searchParams.delete("resultTier");
  window.history.replaceState({}, "", url);
  window.location.reload();
}

/**
 * 앱 루트 & 라우터. 시작(start-hero) → 퀴즈(보드→채점→공개 반복 + 결과) → 다시.
 *
 * 개발 서버에서는 ?resultTier=high|middle|low 로 결과 카드를 강제 확인할 수 있다.
 */
export default function App() {
  const forcedResultScore = useMemo(() => getForcedResultScore(), []);

  const [view, setView] = useState<AppView>("start");
  const [deck, setDeck] = useState<Deck | null>(null);

  function handleStart(entry: DeckEntry) {
    // 주제 덱은 100문장 중 무작위 5문장을 뽑아 출제한다(story는 전체).
    setDeck(sampleDeck(entry.deck, entry.quizSize));
    setView("quiz");
  }

  function goStart() {
    setView("start");
  }

  if (forcedResultScore) {
    return (
      <main className={styles.main}>
        <ResultCard
          score={forcedResultScore}
          onRestart={clearForcedResult}
          onHome={clearForcedResult}
        />
      </main>
    );
  }

  return (
    <div className={styles.shell}>
      <AppHeader
        view={view}
        currentDeckTitle={view === "quiz" ? deck?.title : undefined}
        onNavStart={goStart}
      />

      <main className={styles.main}>
        {view === "quiz" && deck ? (
          <QuizBoard deck={deck} onHome={goStart} />
        ) : (
          <StartHero onStart={handleStart} />
        )}
      </main>

      <AppFooter />
    </div>
  );
}
