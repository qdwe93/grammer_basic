/**
 * start-hero (시작 화면) — design.md Start Screen, docs/04 §4
 *
 * 흰 캔버스 전체폭 진입 화면: 타이틀(display-lg) + 한 줄 설명 + deck-card 목록 +
 * "시작하기"(button-primary, 뷰포트당 1개). 표면 카드 없음·그라데이션 없음(design.md).
 *
 * 여러 주제 덱(사회·과학·게임/IT·이야기)을 고른다. 주제 덱은 100문장 중 랜덤 5문장을
 * 뽑아 품사·문장성분을 묻는다. 최근 점수 배지는 학습 기록(localStorage)에서 채운다.
 */
import { useMemo, useState } from "react";
import { Button } from "../../components/Button";
import { loadDeckEntries, QUIZ_SAMPLE_SIZE, type DeckEntry } from "../../data/loadDeck";
import { loadQuizHistory } from "../../lib/storage";
import type { RewardTier } from "../result/scoring";
import { DeckCard } from "./DeckCard";
import styles from "./StartHero.module.css";

export interface StartHeroProps {
  /** 선택한 덱으로 퀴즈를 시작. */
  onStart: (entry: DeckEntry) => void;
}

export function StartHero({ onStart }: StartHeroProps) {
  const entries = useMemo(() => loadDeckEntries(), []);
  const [selected, setSelected] = useState(0);

  /** 덱별 최근 점수(정답률·티어) — 학습 기록의 최신 항목. */
  const lastScoreByDeck = useMemo(() => {
    const map = new Map<string, { accuracy: number; tier: RewardTier }>();
    for (const entry of loadQuizHistory()) {
      if (!map.has(entry.deckId)) {
        map.set(entry.deckId, { accuracy: entry.accuracy, tier: entry.tier });
      }
    }
    return map;
  }, []);

  const selectedEntry = entries[selected];

  return (
    <section className={styles.hero} aria-labelledby="start-title">
      <div className={styles.intro}>
        <h1 id="start-title" className="t-display-lg">
          영어 문장, 색으로 읽다
        </h1>
        <p className={`t-title-md ${styles.lead}`}>
          주제를 고르면 문장 묶음에서 무작위로 {QUIZ_SAMPLE_SIZE}문장을 뽑아 줍니다. 단어와 구로
          나눠 품사와 문장성분을 직접 맞히면, 문장이 색으로 풀리고 한글 해석이 열립니다.
        </p>
      </div>

      <div
        className={styles.decks}
        role="radiogroup"
        aria-label="학습할 주제 선택"
      >
        {entries.map((entry, index) => {
          const last = lastScoreByDeck.get(entry.deck.id);
          return (
            <DeckCard
              key={entry.deck.id}
              title={entry.deck.title}
              kicker={entry.kicker}
              sentenceCount={entry.deck.questions.length}
              lastScore={last?.accuracy}
              lastTier={last?.tier}
              surface={entry.surface}
              selected={index === selected}
              onSelect={() => setSelected(index)}
            />
          );
        })}
      </div>

      <div className={styles.actions}>
        <Button variant="primary" onClick={() => onStart(selectedEntry)}>
          시작하기
        </Button>
      </div>
    </section>
  );
}
