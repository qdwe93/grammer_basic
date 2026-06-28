/**
 * quiz-board — 키보드 우선 플레이 버전 (docs/04 §4, design.md Quiz Board).
 *
 * 상호작용 모델(변경점):
 *  - 단일 커서가 문장 전체를 훑는다: 단어(품사) → 구(문장성분) 순서.
 *  - 단계 분리: 커서가 단어에 있으면 "품사" 단계(단어에 박스), 구에 있으면 "문장성분" 단계(구에 밑줄).
 *  - 하단 팔레트에서 숫자키 1–N으로 즉시 선택 → 자동으로 다음 빈칸 이동.
 *  - 키보드만으로 완주 가능: 1–N 선택 / ←→(Tab) 이동 / ⌫ 지우기 / Enter 채점·다음.
 *  - 마우스도 그대로: 단어/구 클릭=포커스, 칩 클릭=선택, 단계 칩 클릭=해당 단계로 이동.
 *  - 데스크톱/모바일 동일 UI(팔레트는 44px 터치 타깃). 채점 전엔 문법 색을 미리 보이지 않는다.
 *
 * 상태·채점·공개·결과 로직은 원본과 동일(useQuizState / grading / RevealPanel / ResultCard).
 */
import { useEffect, useRef, useState } from "react";
import { Button } from "../../components/Button";
import type { Component, Deck, Phrase, Pos, Question } from "../../data/schema";
import { COMPONENT_LEGEND, POS_LEGEND } from "../../design/legend";
import { saveQuizHistoryEntry } from "../../lib/storage";
import { ResultCard } from "../result/ResultCard";
import {
  calculateScore,
  getRewardTier,
  type QuestionScoreInput,
} from "../result/scoring";
import { getWrongTokenDisplayIndexes } from "./grading";
import { GradeSummaryInline } from "./GradeSummaryInline";
import { Palette } from "./Palette";
import { phraseText } from "./phrase";
import { RevealPanel } from "./RevealPanel";
import { StepIndicator } from "./StepIndicator";
import { useQuizState } from "./useQuizState";
import styles from "./QuizBoard.module.css";

export interface QuizBoardProps {
  deck: Deck;
  onHome?: () => void;
}

const cx = (...classes: Array<string | false | undefined>): string =>
  classes.filter(Boolean).join(" ");

export function QuizBoard({ deck, onHome }: QuizBoardProps) {
  const [current, setCurrent] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [perfectByQuestion, setPerfectByQuestion] = useState<Record<string, boolean>>(
    {},
  );
  const total = deck.questions.length;
  const question = deck.questions[current];

  const quiz = useQuizState(question);
  const { answer, focused } = quiz;

  const wrongCount = answer.wrongTokenIndexes.size + answer.wrongPhraseIds.size;
  const shouldShowWrong = answer.graded && !answer.revealed && wrongCount > 0;
  const wrongTokenDisplayIndexes = shouldShowWrong
    ? getWrongTokenDisplayIndexes(question, answer.wrongTokenIndexes, answer.wrongPhraseIds)
    : new Set<number>();

  // 단계/진행 카운트
  const posTokens = question.tokens.filter((t) => t.pos !== null);
  const posTotal = posTokens.length;
  const posFilled = posTokens.filter((t) => answer.posByIndex[t.index] != null).length;
  const compTotal = question.phrases.length;
  const compFilled = question.phrases.filter(
    (p) => answer.componentByPhrase[p.id] != null,
  ).length;
  const phase: "pos" | "comp" = focused?.kind === "comp" ? "comp" : "pos";

  // 현재 타깃 → 팔레트 입력값/질문 문구
  let paletteValue: Pos | Component | null = null;
  let paletteContext = "";
  let paletteCount = 7;
  if (focused?.kind === "pos") {
    const tok = question.tokens.find((t) => t.index === focused.tokenIndex);
    paletteValue = answer.posByIndex[focused.tokenIndex] ?? null;
    paletteContext = `${focused.tokenIndex}번 “${tok?.text ?? ""}” 은(는) 무슨 품사일까요?`;
    paletteCount = 7;
  } else if (focused?.kind === "comp") {
    const ph = question.phrases.find((p) => p.id === focused.phraseId);
    paletteValue = answer.componentByPhrase[focused.phraseId] ?? null;
    paletteContext = `“${ph ? phraseText(question, ph) : ""}” 은(는) 어떤 문장성분일까요?`;
    paletteCount = 5;
  }

  function handleGrade() {
    quiz.grade();
  }

  function isCurrentPerfect() {
    return (
      answer.everWrongTokenIndexes.size === 0 && answer.everWrongPhraseIds.size === 0
    );
  }

  function getQuestionScores(scores: Record<string, boolean>): QuestionScoreInput[] {
    return deck.questions.map((q) => ({ questionId: q.id, perfect: scores[q.id] === true }));
  }

  function handleAdvance() {
    const nextScores = { ...perfectByQuestion, [question.id]: isCurrentPerfect() };
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

  // ── 전역 키보드 (board 포커스 불필요) ──
  // 매 렌더 최신 핸들러/상태를 ref에 담아, 리스너는 1회만 등록하고 stale closure를 피한다.
  const keyRef = useRef({
    completed,
    revealed: answer.revealed,
    allFilled: quiz.allFilled,
    assign: quiz.assign,
    move: quiz.move,
    clearFocused: quiz.clearFocused,
    focusNextUnfilled: quiz.focusNextUnfilled,
    grade: handleGrade,
    advance: handleAdvance,
  });
  keyRef.current = {
    completed,
    revealed: answer.revealed,
    allFilled: quiz.allFilled,
    assign: quiz.assign,
    move: quiz.move,
    clearFocused: quiz.clearFocused,
    focusNextUnfilled: quiz.focusNextUnfilled,
    grade: handleGrade,
    advance: handleAdvance,
  };

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const s = keyRef.current;
      if (s.completed) return;
      const key = event.key;

      if (s.revealed) {
        if (key === "Enter") {
          event.preventDefault();
          s.advance();
        }
        return;
      }

      if (key >= "1" && key <= "9") {
        event.preventDefault();
        s.assign(parseInt(key, 10) - 1);
      } else if (key === "Tab") {
        event.preventDefault();
        s.move(event.shiftKey ? -1 : 1);
      } else if (key === "ArrowRight" || key === "ArrowDown") {
        event.preventDefault();
        s.move(1);
      } else if (key === "ArrowLeft" || key === "ArrowUp") {
        event.preventDefault();
        s.move(-1);
      } else if (key === "Backspace" || key === "Delete") {
        event.preventDefault();
        s.clearFocused();
      } else if (key === "Enter") {
        event.preventDefault();
        if (s.allFilled) s.grade();
        else s.focusNextUnfilled();
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (completed) {
    const score = calculateScore(getQuestionScores(perfectByQuestion));
    return <ResultCard score={score} onRestart={handleRestart} onHome={handleHome} />;
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

      {!answer.revealed && (
        <StepIndicator
          phase={phase}
          posFilled={posFilled}
          posTotal={posTotal}
          compFilled={compFilled}
          compTotal={compTotal}
          onSelectPos={() => quiz.focusIndex(0)}
          onSelectComp={() => quiz.focusIndex(posTotal)}
        />
      )}

      {shouldShowWrong && <GradeSummaryInline wrongCount={wrongCount} />}

      {answer.revealed ? (
        <RevealPanel question={question} answer={answer} />
      ) : phase === "pos" ? (
        <PosPhase
          question={question}
          posByIndex={answer.posByIndex}
          wrongTokenIndexes={wrongTokenDisplayIndexes}
          focusedIndex={focused?.kind === "pos" ? focused.tokenIndex : null}
          onFocus={(target) => quiz.focusIndex(target)}
        />
      ) : (
        <CompPhase
          question={question}
          componentByPhrase={answer.componentByPhrase}
          wrongPhraseIds={answer.wrongPhraseIds}
          showWrong={shouldShowWrong}
          focusedPhraseId={focused?.kind === "comp" ? focused.phraseId : null}
          posOffset={posTotal}
          onFocus={(target) => quiz.focusIndex(target)}
        />
      )}

      {answer.revealed ? (
        <div className={styles.footer}>
          <span className={`t-body-md ${styles.hint}`}>
            <kbd className={styles.key}>Enter</kbd> 를 눌러 계속
          </span>
          <Button variant="primary" onClick={handleAdvance}>
            {current < total - 1 ? "다음 문제" : "결과 보기"}
          </Button>
        </div>
      ) : (
        <div className={styles.controls}>
          {focused && (
            <Palette
              kind={phase}
              value={paletteValue}
              context={paletteContext}
              onPick={quiz.assign}
            />
          )}
          <div className={styles.keyRow}>
            <span className={styles.keyHints}>
              <span className={styles.keyHint}>
                <kbd className={styles.key}>1–{paletteCount}</kbd> 선택
              </span>
              <span className={styles.keyHint}>
                <kbd className={styles.key}>←</kbd>
                <kbd className={styles.key}>→</kbd> 이동
              </span>
              <span className={styles.keyHint}>
                <kbd className={styles.key}>⌫</kbd> 지우기
              </span>
              <span className={styles.keyHint}>
                <kbd className={styles.key}>Enter</kbd> {quiz.allFilled ? "채점" : "다음 빈칸"}
              </span>
            </span>
            <Button variant="primary" disabled={!quiz.allFilled} onClick={handleGrade}>
              채점하기
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}

/* ── 품사 단계: 단어에 박스 ── */
interface PosPhaseProps {
  question: Question;
  posByIndex: Record<number, Pos | null>;
  wrongTokenIndexes: ReadonlySet<number>;
  focusedIndex: number | null;
  onFocus: (targetIndex: number) => void;
}

function PosPhase({
  question,
  posByIndex,
  wrongTokenIndexes,
  focusedIndex,
  onFocus,
}: PosPhaseProps) {
  // 타깃 인덱스 매핑: pos 타깃은 토큰 순서대로 0..posTotal-1
  let posCursor = -1;
  return (
    <div className={styles.sentence} lang="en">
      {question.tokens.map((t) => {
        if (t.pos === null) {
          return (
            <span key={t.index} className={styles.plainToken}>
              <span className={`t-index ${styles.tokenIndex}`}>{t.index}</span>
              <span className={`t-sentence ${styles.plainWord}`}>{t.text}</span>
            </span>
          );
        }
        posCursor += 1;
        const targetIndex = posCursor;
        const value = posByIndex[t.index] ?? null;
        const focused = focusedIndex === t.index;
        const wrong = wrongTokenIndexes.has(t.index);
        const boxState = focused
          ? styles.tokenBoxFocused
          : wrong
            ? styles.tokenBoxWrong
            : "";
        return (
          <div
            key={t.index}
            className={cx(styles.posToken, focused && styles.posTokenFocused)}
            onClick={() => onFocus(targetIndex)}
            role="button"
            tabIndex={-1}
            aria-label={`${t.index}번 ${t.text} 품사`}
          >
            <span className={`t-index ${styles.tokenIndex}`}>{t.index}</span>
            <span
              className={cx(
                `t-sentence ${styles.tokenWord} ${styles.tokenBox}`,
                boxState,
                wrong && styles.tokenWordWrong,
              )}
            >
              {t.text}
            </span>
            <span
              className={cx(
                styles.pill,
                value ? styles.pillFilled : styles.pillEmpty,
                wrong && styles.pillWrong,
              )}
            >
              {value ? POS_LEGEND[value].label : "품사?"}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/* ── 문장성분 단계: 구에 밑줄 ── */
interface CompPhaseProps {
  question: Question;
  componentByPhrase: Record<string, Component | null>;
  wrongPhraseIds: ReadonlySet<string>;
  showWrong: boolean;
  focusedPhraseId: string | null;
  posOffset: number;
  onFocus: (targetIndex: number) => void;
}

function CompPhase({
  question,
  componentByPhrase,
  wrongPhraseIds,
  showWrong,
  focusedPhraseId,
  posOffset,
  onFocus,
}: CompPhaseProps) {
  const tokensByIndex = new Map(question.tokens.map((t) => [t.index, t]));
  return (
    <div className={styles.phrases} lang="en">
      {question.phrases.map((p: Phrase, i) => {
        const targetIndex = posOffset + i;
        const value = componentByPhrase[p.id] ?? null;
        const focused = focusedPhraseId === p.id;
        const wrong = showWrong && wrongPhraseIds.has(p.id);
        const underlineState = focused
          ? styles.underlineFocused
          : wrong
            ? styles.underlineWrong
            : value
              ? styles.underlineFilled
              : "";
        return (
          <div
            key={p.id}
            className={cx(styles.phraseGroup, focused && styles.phraseGroupFocused)}
            onClick={() => onFocus(targetIndex)}
            role="button"
            tabIndex={-1}
            aria-label={`${phraseText(question, p)} 문장성분`}
          >
            <span className={cx(styles.underline, underlineState)}>
              {p.tokenIndexes.map((idx) => {
                const tok = tokensByIndex.get(idx);
                if (!tok) return null;
                return (
                  <span key={idx} className={styles.phraseTokenStack}>
                    <span className={`t-index ${styles.tokenIndex}`}>{idx}</span>
                    <span
                      className={cx(
                        `t-sentence ${styles.phraseWord}`,
                        wrong && styles.tokenWordWrong,
                      )}
                    >
                      {tok.text}
                    </span>
                  </span>
                );
              })}
            </span>
            <span
              className={cx(
                styles.pill,
                value ? styles.pillFilled : styles.pillEmpty,
                wrong && styles.pillWrong,
              )}
            >
              {value ? COMPONENT_LEGEND[value].label : "문장성분?"}
            </span>
          </div>
        );
      })}
    </div>
  );
}
