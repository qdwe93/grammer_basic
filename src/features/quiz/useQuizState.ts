/**
 * 퀴즈 진행/입력 상태 (docs/03 §3 AnswerState)
 *
 * Phase 3: 학습자 입력(posByIndex / componentByPhrase), 채점 결과(wrong*),
 * 한 번이라도 틀린 이력(everWrong*), 전부 정답 시 revealed 전환까지 다룬다.
 */
import { useEffect, useReducer } from "react";
import type { Component, Pos, Question } from "../../data/schema";
import { gradeQuestion } from "./grading";

export interface AnswerState {
  // 학습자 입력
  posByIndex: Record<number, Pos | null>; // 토큰 index → 선택 품사
  componentByPhrase: Record<string, Component | null>; // phrase id → 선택 문장성분
  // 채점 결과 (후속 Phase)
  graded: boolean;
  wrongTokenIndexes: Set<number>;
  wrongPhraseIds: Set<string>;
  // 이력 (was-wrong 마커 & 점수, 후속 Phase)
  everWrongTokenIndexes: Set<number>;
  everWrongPhraseIds: Set<string>;
  revealed: boolean; // 전부 정답 → 공개
}

function initAnswerState(question: Question): AnswerState {
  const posByIndex: Record<number, Pos | null> = {};
  for (const t of question.tokens) {
    if (t.pos !== null) posByIndex[t.index] = null; // 채점 대상 토큰만 입력 칸 생성
  }
  const componentByPhrase: Record<string, Component | null> = {};
  for (const p of question.phrases) componentByPhrase[p.id] = null;

  return {
    posByIndex,
    componentByPhrase,
    graded: false,
    wrongTokenIndexes: new Set(),
    wrongPhraseIds: new Set(),
    everWrongTokenIndexes: new Set(),
    everWrongPhraseIds: new Set(),
    revealed: false,
  };
}

type Action =
  | { type: "setPos"; index: number; pos: Pos }
  | { type: "setComponent"; phraseId: string; component: Component }
  | { type: "grade"; question: Question }
  | { type: "reset"; question: Question };

function unionSet<T>(a: ReadonlySet<T>, b: ReadonlySet<T>): Set<T> {
  return new Set([...a, ...b]);
}

function reducer(state: AnswerState, action: Action): AnswerState {
  switch (action.type) {
    case "setPos":
      return {
        ...state,
        posByIndex: { ...state.posByIndex, [action.index]: action.pos },
        revealed: false,
      };
    case "setComponent":
      return {
        ...state,
        componentByPhrase: { ...state.componentByPhrase, [action.phraseId]: action.component },
        revealed: false,
      };
    case "grade": {
      const result = gradeQuestion(action.question, state);
      return {
        ...state,
        graded: true,
        wrongTokenIndexes: result.wrongTokenIndexes,
        wrongPhraseIds: result.wrongPhraseIds,
        everWrongTokenIndexes: unionSet(
          state.everWrongTokenIndexes,
          result.wrongTokenIndexes,
        ),
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
  setPos: (index: number, pos: Pos) => void;
  setComponent: (phraseId: string, component: Component) => void;
  grade: () => void;
  reset: () => void;
  /** 모든 채점 대상 토큰 품사 + 모든 구 문장성분이 채워졌는가 (채점하기 활성 조건) */
  allFilled: boolean;
}

export function useQuizState(question: Question): UseQuizState {
  const [answer, dispatch] = useReducer(reducer, question, initAnswerState);

  // 문제가 바뀌면 입력 상태 초기화
  useEffect(() => {
    dispatch({ type: "reset", question });
  }, [question]);

  const allPosFilled = question.tokens
    .filter((t) => t.pos !== null)
    .every((t) => answer.posByIndex[t.index] != null);
  const allCompFilled = question.phrases.every(
    (p) => answer.componentByPhrase[p.id] != null,
  );

  return {
    answer,
    setPos: (index, pos) => dispatch({ type: "setPos", index, pos }),
    setComponent: (phraseId, component) =>
      dispatch({ type: "setComponent", phraseId, component }),
    grade: () => dispatch({ type: "grade", question }),
    reset: () => dispatch({ type: "reset", question }),
    allFilled: allPosFilled && allCompFilled,
  };
}
