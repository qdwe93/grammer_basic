/**
 * quiz-board (docs/04 §4, design.md Quiz Board) — Phase 3: 채점 & 오답 표시 & 재시도.
 *
 * - surface-soft 배경, 최대폭 840px 중앙, progress-indicator(문제 N/전체 + 4px 진행바).
 * - 문장: 단어가 text처럼 inline-wrap. 각 단어 = [번호]/[단어(무채색)]/(아래 선택기) 스택.
 * - 데스크톱(≥768): 단어 아래 인라인 pos-selector + 문장 아래 문장성분(구별 component-selector).
 * - 모바일(<768): 선택기를 selector-tray로 collapse.
 * - "채점하기": 모든 칸(모든 토큰 품사 + 모든 구 문장성분)이 채워지기 전엔 disabled.
 *
 * 답하는 동안 문법 색은 미리 보이지 않는다. 채점 후에는 오답 위치만 feedback 색으로 표시한다.
 */
import { useState } from "react";
import { Button } from "../../components/Button";
import type { Deck } from "../../data/schema";
import { saveQuizHistoryEntry } from "../../lib/storage";
import { ResultCard } from "../result/ResultCard";
import {
  calculateScore,
  getRewardTier,
  type QuestionScoreInput,
} from "../result/scoring";
import { useMediaQuery } from "../../lib/useMediaQuery";
import { ComponentSelector } from "./ComponentSelector";
import { getWrongTokenDisplayIndexes } from "./grading";
import { GradeSummaryInline } from "./GradeSummaryInline";
import { phraseText } from "./phrase";
import { PosSelector } from "./PosSelector";
import { RevealPanel } from "./RevealPanel";
import { SelectorTray } from "./SelectorTray";
import { useQuizState } from "./useQuizState";
import { WordToken } from "./WordToken";
import styles from "./QuizBoard.module.css";

export interface QuizBoardProps {
  deck: Deck;
  onHome?: () => void;
}

export function QuizBoard({ deck, onHome }: QuizBoardProps) {
  const [current, setCurrent] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [perfectByQuestion, setPerfectByQuestion] = useState<Record<string, boolean>>(
    {},
  );
  const total = deck.questions.length;
  const question = deck.questions[current];

  const quiz = useQuizState(question);
  const { answer, setPos, setComponent, allFilled } = quiz;

  const isMobile = useMediaQuery("(max-width: 767px)");
  const wrongCount = answer.wrongTokenIndexes.size + answer.wrongPhraseIds.size;
  const shouldShowWrong = answer.graded && !answer.revealed && wrongCount > 0;
  const wrongTokenDisplayIndexes = shouldShowWrong
    ? getWrongTokenDisplayIndexes(
        question,
        answer.wrongTokenIndexes,
        answer.wrongPhraseIds,
      )
    : new Set<number>();

  function handleGrade() {
    quiz.grade();
  }

  function isCurrentPerfect() {
    return (
      answer.everWrongTokenIndexes.size === 0 && answer.everWrongPhraseIds.size === 0
    );
  }

  function getQuestionScores(
    scores: Record<string, boolean>,
  ): QuestionScoreInput[] {
    return deck.questions.map((q) => ({
      questionId: q.id,
      perfect: scores[q.id] === true,
    }));
  }

  function handleAdvance() {
    const nextScores = {
      ...perfectByQuestion,
      [question.id]: isCurrentPerfect(),
    };
    setPerfectByQuestion(nextScores);

    if (current < total - 1) {
      setCurrent((value) => value + 1);
      return;
    }

    const score = calculateScore(getQuestionScores(nextScores));
    saveQuizHistoryEntry({
      id: `${deck.id}-${Date.now()}`,
      deckId: deck.id,
      deckTitle: deck.title,
      completedAt: new Date().toISOString(),
      tier: getRewardTier(score.accuracy),
      ...score,
    });
    setCompleted(true);
  }

  function handleRestart() {
    setCurrent(0);
    setPerfectByQuestion({});
    setCompleted(false);
    quiz.reset();
  }

  function handleHome() {
    handleRestart();
    onHome?.();
  }

  if (completed) {
    const score = calculateScore(getQuestionScores(perfectByQuestion));
    return (
      <ResultCard
        score={score}
        onRestart={handleRestart}
        onHome={handleHome}
      />
    );
  }

  return (
    <section className={styles.board} aria-label="퀴즈 보드">
      {/* progress-indicator */}
      <div className={styles.progress}>
        <span className={`t-label-md ${styles.progressLabel}`}>
          문제 {current + 1} / {total}
        </span>
        <div
          className={styles.progressTrack}
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={total}
          aria-valuenow={current + 1}
        >
          <div
            className={styles.progressFill}
            style={{ width: `${((current + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      {shouldShowWrong && <GradeSummaryInline wrongCount={wrongCount} />}

      {answer.revealed ? (
        <RevealPanel question={question} answer={answer} />
      ) : (
        <>
          {/* 문장: 단어 inline-wrap */}
          <div className={styles.sentence} lang="en">
            {question.tokens.map((t) =>
              !isMobile && t.pos !== null ? (
                <WordToken
                  key={t.index}
                  index={t.index}
                  text={t.text}
                  isWrong={wrongTokenDisplayIndexes.has(t.index)}
                >
                  <span className={styles.inlinePos}>
                    <PosSelector
                      value={answer.posByIndex[t.index] ?? null}
                      onChange={(pos) => setPos(t.index, pos)}
                      ariaLabel={`${t.index}번 단어 ${t.text}의 품사`}
                    />
                  </span>
                </WordToken>
              ) : (
                <WordToken
                  key={t.index}
                  index={t.index}
                  text={t.text}
                  isWrong={wrongTokenDisplayIndexes.has(t.index)}
                />
              ),
            )}
          </div>

          {/* 선택기: 모바일=트레이 / 데스크톱=문장성분 영역(+단어 위 인라인 품사) */}
          {isMobile ? (
            <SelectorTray question={question} quiz={quiz} />
          ) : (
            <div className={styles.componentArea}>
              <h3 className={`t-label-md ${styles.componentTitle}`}>문장성분</h3>
              <ul className={styles.phraseRows}>
                {question.phrases.map((p) => {
                  const text = phraseText(question, p);
                  return (
                    <li key={p.id} className={styles.phraseRow}>
                      <span className={`t-sentence ${styles.phraseText}`} lang="en">
                        {text}
                      </span>
                      <ComponentSelector
                        value={answer.componentByPhrase[p.id] ?? null}
                        onChange={(c) => setComponent(p.id, c)}
                        ariaLabel={`"${text}" 구의 문장성분`}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </>
      )}

      <div className={styles.actions}>
        {answer.revealed ? (
          <Button variant="primary" onClick={handleAdvance}>
            {current < total - 1 ? "다음 문제" : "결과 보기"}
          </Button>
        ) : (
          <Button variant="primary" disabled={!allFilled} onClick={handleGrade}>
            채점하기
          </Button>
        )}
      </div>
    </section>
  );
}
