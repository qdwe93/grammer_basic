/**
 * 퀴즈 진행/입력 상태 (docs/03 §3 AnswerState) — 키보드 우선 플레이 버전.
 *
 * 변경점(원본 대비):
 *  - cursor 추가: 단어(품사) → 구(문장성분) 순서로 평탄화한 "타깃" 목록 위를 움직이는 단일 커서.
 *  - assign/move/focus/clear 액션 추가. 입력은 모두 functional update라 연타에도 누락이 없다.
 *  - assign 후 자동으로 다음 빈칸으로 이동. grade 시 첫 오답으로 커서 점프.
 *  - 학습자 입력/채점/이력/공개 의미는 원본과 동일(grading.ts 그대로 사용).
 */
import { useEffect, useReducer } from "react";
import type { Component, Pos, Question } from "../../data/schema";
import { COMPONENT_LEGEND_ORDER, POS_LEGEND_ORDER } from "../../design/legend";
import { gradeQuestion } from "./grading";

/** 입력 타깃: 채점 대상 토큰 1개(품사) 또는 구 1개(문장성분). */
export type Target =
  | { kind: "pos"; tokenIndex: number }
  | { kind: "comp"; phraseId: string };

/** 단어(품사) → 구(문장성분) 순서로 평탄화한 타깃 목록. */
export function getTargets(question: Question): Target[] {
  const targets: Target[] = [];
  for (const t of question.tokens) {
    if (t.pos !== null) targets.push({ kind: "pos", tokenIndex: t.index });
  }
  for (const p of question.phrases) {
    targets.push({ kind: "comp", phraseId: p.id });
  }
  return targets;
}

export interface AnswerState {
  // 학습자 입력
  posByIndex: Record<number, Pos | null>;
  componentByPhrase: Record<string, Component | null>;
  // 커서(타깃 인덱스)
  cursor: number;
  // 채점 결과
  graded: boolean;
  wrongTokenIndexes: Set<number>;
  wrongPhraseIds: Set<string>;
  // 이력 (was-wrong 마커 & 점수)
  everWrongTokenIndexes: Set<number>;
  everWrongPhraseIds: Set<string>;
  revealed: boolean;
}

function initAnswerState(question: Question): AnswerState {
  const posByIndex: Record<number, Pos | null> = {};
  for (const t of question.tokens) {
    if (t.pos !== null) posByIndex[t.index] = null;
  }
  const componentByPhrase: Record<string, Component | null> = {};
  for (const p of question.phrases) componentByPhrase[p.id] = null;

  return {
    posByIndex,
    componentByPhrase,
    cursor: 0,
    graded: false,
    wrongTokenIndexes: new Set(),
    wrongPhraseIds: new Set(),
    everWrongTokenIndexes: new Set(),
    everWrongPhraseIds: new Set(),
    revealed: false,
  };
}

type Action =
  | { type: "assign"; question: Question; optionIndex: number }
  | { type: "move"; question: Question; delta: number }
  | { type: "focus"; index: number }
  | { type: "focusNextUnfilled"; question: Question }
  | { type: "clear"; question: Question }
  | { type: "grade"; question: Question }
  | { type: "reset"; question: Question };

function unionSet<T>(a: ReadonlySet<T>, b: ReadonlySet<T>): Set<T> {
  return new Set([...a, ...b]);
}
function withoutValue<T>(set: ReadonlySet<T>, value: T): Set<T> {
  const next = new Set(set);
  next.delete(value);
  return next;
}

function isTargetFilled(state: AnswerState, target: Target): boolean {
  return target.kind === "pos"
    ? state.posByIndex[target.tokenIndex] != null
    : state.componentByPhrase[target.phraseId] != null;
}

/** from 다음부터 한 바퀴 돌며 첫 빈 타깃 인덱스. 없으면 -1. */
function nextUnfilledIndex(
  question: Question,
  state: AnswerState,
  from: number,
): number {
  const targets = getTargets(question);
  const n = targets.length;
  for (let k = 1; k <= n; k++) {
    const i = (from + k) % n;
    if (!isTargetFilled(state, targets[i])) return i;
  }
  return -1;
}

function clampCursor(question: Question, cursor: number): number {
  const n = getTargets(question).length;
  if (cursor < 0) return 0;
  if (cursor > n - 1) return n - 1;
  return cursor;
}

function reducer(state: AnswerState, action: Action): AnswerState {
  switch (action.type) {
    case "assign": {
      const targets = getTargets(action.question);
      const target = targets[state.cursor];
      if (!target) return state;

      let next: AnswerState;
      if (target.kind === "pos") {
        const pos = POS_LEGEND_ORDER[action.optionIndex];
        if (!pos) return state;
        next = {
          ...state,
          posByIndex: { ...state.posByIndex, [target.tokenIndex]: pos },
          wrongTokenIndexes: withoutValue(state.wrongTokenIndexes, target.tokenIndex),
          revealed: false,
        };
      } else {
        const component = COMPONENT_LEGEND_ORDER[action.optionIndex];
        if (!component) return state;
        next = {
          ...state,
          componentByPhrase: { ...state.componentByPhrase, [target.phraseId]: component },
          wrongPhraseIds: withoutValue(state.wrongPhraseIds, target.phraseId),
          revealed: false,
        };
      }

      const nx = nextUnfilledIndex(action.question, next, state.cursor);
      return { ...next, cursor: nx >= 0 ? nx : state.cursor };
    }

    case "move":
      return { ...state, cursor: clampCursor(action.question, state.cursor + action.delta) };

    case "focus":
      return { ...state, cursor: action.index };

    case "focusNextUnfilled": {
      const nx = nextUnfilledIndex(action.question, state, state.cursor);
      return nx >= 0 ? { ...state, cursor: nx } : state;
    }

    case "clear": {
      const targets = getTargets(action.question);
      const target = targets[state.cursor];
      if (!target) return state;
      if (target.kind === "pos") {
        return {
          ...state,
          posByIndex: { ...state.posByIndex, [target.tokenIndex]: null },
          wrongTokenIndexes: withoutValue(state.wrongTokenIndexes, target.tokenIndex),
          revealed: false,
        };
      }
      return {
        ...state,
        componentByPhrase: { ...state.componentByPhrase, [target.phraseId]: null },
        wrongPhraseIds: withoutValue(state.wrongPhraseIds, target.phraseId),
        revealed: false,
      };
    }

    case "grade": {
      const result = gradeQuestion(action.question, state);
      let cursor = state.cursor;
      if (!result.allCorrect) {
        const targets = getTargets(action.question);
        const firstWrong = targets.findIndex((t) =>
          t.kind === "pos"
            ? result.wrongTokenIndexes.has(t.tokenIndex)
            : result.wrongPhraseIds.has(t.phraseId),
        );
        if (firstWrong >= 0) cursor = firstWrong;
      }
      return {
        ...state,
        graded: true,
        cursor,
        wrongTokenIndexes: result.wrongTokenIndexes,
        wrongPhraseIds: result.wrongPhraseIds,
        everWrongTokenIndexes: unionSet(state.everWrongTokenIndexes, result.wrongTokenIndexes),
        everWrongPhraseIds: unionSet(state.everWrongPhraseIds, result.wrongPhraseIds),
        revealed: result.allCorrect,
      };
    }

    case "reset":
      return initAnswerState(action.question);
  }
}

export interface UseQuizState {
  answer: AnswerState;
  /** 평탄화된 타깃 목록(단어 → 구). */
  targets: Target[];
  /** 현재 커서가 가리키는 타깃. */
  focused: Target | null;
  /** 현재 타깃에 팔레트 옵션 i번을 할당(키 i+1 / 칩 클릭). 자동으로 다음 빈칸 이동. */
  assign: (optionIndex: number) => void;
  /** 커서 이동(±1). */
  move: (delta: number) => void;
  /** 특정 타깃으로 포커스 이동(단어/구 클릭, 단계 칩 클릭). */
  focusIndex: (index: number) => void;
  /** 현재 위치에서 다음 빈칸으로 이동(Enter, 미완성 시). */
  focusNextUnfilled: () => void;
  /** 현재 타깃 선택 비우기(⌫). */
  clearFocused: () => void;
  grade: () => void;
  reset: () => void;
  /** 모든 채점 대상 토큰 품사 + 모든 구 문장성분이 채워졌는가. */
  allFilled: boolean;
}

export function useQuizState(question: Question): UseQuizState {
  const [answer, dispatch] = useReducer(reducer, question, initAnswerState);

  // 문제가 바뀌면 입력 상태 초기화
  useEffect(() => {
    dispatch({ type: "reset", question });
  }, [question]);

  const targets = getTargets(question);
  const focused = targets[answer.cursor] ?? null;

  const allPosFilled = question.tokens
    .filter((t) => t.pos !== null)
    .every((t) => answer.posByIndex[t.index] != null);
  const allCompFilled = question.phrases.every(
    (p) => answer.componentByPhrase[p.id] != null,
  );

  return {
    answer,
    targets,
    focused,
    assign: (optionIndex) => dispatch({ type: "assign", question, optionIndex }),
    move: (delta) => dispatch({ type: "move", question, delta }),
    focusIndex: (index) => dispatch({ type: "focus", index }),
    focusNextUnfilled: () => dispatch({ type: "focusNextUnfilled", question }),
    clearFocused: () => dispatch({ type: "clear", question }),
    grade: () => dispatch({ type: "grade", question }),
    reset: () => dispatch({ type: "reset", question }),
    allFilled: allPosFilled && allCompFilled,
  };
}
