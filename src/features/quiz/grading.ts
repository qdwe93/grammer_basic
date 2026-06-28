import type { Component, Pos, Question } from "../../data/schema";

export interface GradeAnswerInput {
  posByIndex: Record<number, Pos | null | undefined>;
  componentByPhrase: Record<string, Component | null | undefined>;
}

export interface GradeResult {
  wrongTokenIndexes: Set<number>;
  wrongPhraseIds: Set<string>;
  wrongCount: number;
  allCorrect: boolean;
}

const OBJECT_COMPONENTS: ReadonlySet<Component> = new Set([
  "object",
  "object_direct",
  "object_indirect",
]);

export function componentFamily(component: Component): Component {
  return OBJECT_COMPONENTS.has(component) ? "object" : component;
}

export function isComponentAnswerCorrect(
  selected: Component | null | undefined,
  expected: Component,
): boolean {
  if (selected == null) return false;
  return componentFamily(selected) === componentFamily(expected);
}

export function gradeQuestion(
  question: Question,
  answer: GradeAnswerInput,
): GradeResult {
  const wrongTokenIndexes = new Set<number>();
  const wrongPhraseIds = new Set<string>();

  for (const token of question.tokens) {
    if (token.pos === null) continue;
    if (answer.posByIndex[token.index] !== token.pos) {
      wrongTokenIndexes.add(token.index);
    }
  }

  for (const phrase of question.phrases) {
    if (!isComponentAnswerCorrect(answer.componentByPhrase[phrase.id], phrase.component)) {
      wrongPhraseIds.add(phrase.id);
    }
  }

  const wrongCount = wrongTokenIndexes.size + wrongPhraseIds.size;

  return {
    wrongTokenIndexes,
    wrongPhraseIds,
    wrongCount,
    allCorrect: wrongCount === 0,
  };
}

export function getWrongTokenDisplayIndexes(
  question: Question,
  wrongTokenIndexes: ReadonlySet<number>,
  wrongPhraseIds: ReadonlySet<string>,
): Set<number> {
  const displayIndexes = new Set(wrongTokenIndexes);

  for (const phrase of question.phrases) {
    if (!wrongPhraseIds.has(phrase.id)) continue;
    for (const tokenIndex of phrase.tokenIndexes) {
      displayIndexes.add(tokenIndex);
    }
  }

  return displayIndexes;
}
