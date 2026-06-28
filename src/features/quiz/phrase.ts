/**
 * 구(phrase) 유틸 — phrases.tokenIndexes 기준으로 구에 속한 토큰 텍스트를 잇는다.
 * 학습자는 구를 직접 나누지 않고, 정해진 구에 라벨만 선택한다 (docs/02 §3.4).
 */
import type { Phrase, Question } from "../../data/schema";

export function phraseText(question: Question, phrase: Phrase): string {
  const byIndex = new Map(question.tokens.map((t) => [t.index, t.text]));
  return phrase.tokenIndexes
    .map((i) => byIndex.get(i) ?? "")
    .filter(Boolean)
    .join(" ");
}
