/**
 * 데이터 모델 — Zod 스키마 + 타입
 *
 * 출처: docs/02_데이터모델.md
 * 모든 데이터 소스(저장된 JSON / LLM 실시간 생성)는 이 스키마를 동일하게 따른다.
 */
import { z } from "zod";

/* ──────────────────────────────────────────────────────────────
 * 2.1 품사 (Part of Speech) — pos
 * design.md의 7개 역할과 1:1 대응. 관사(a/the)는 adjective로 분류.
 * ────────────────────────────────────────────────────────────── */
export const POS_VALUES = [
  "noun", // 명사
  "pronoun", // 대명사
  "verb", // 동사
  "adjective", // 형용사 (관사·한정사 포함)
  "adverb", // 부사
  "preposition", // 전치사
  "conjunction", // 접속사
] as const;

export const PosSchema = z.enum(POS_VALUES);
export type Pos = z.infer<typeof PosSchema>;

/* ──────────────────────────────────────────────────────────────
 * 2.2 문장성분 (Sentence Component) — component
 * 5개 family. 목적어는 직접/간접으로, 보어는 주격보어 포함(같은 family 색).
 * ────────────────────────────────────────────────────────────── */
export const COMPONENT_VALUES = [
  "subject", // 주어
  "predicate", // 서술어
  "object", // 목적어
  "object_direct", // 직접목적어 (comp-object 색, 칩만 다름)
  "object_indirect", // 간접목적어 (comp-object 색, 칩만 다름)
  "complement", // 보어 (주격보어 포함)
  "modifier", // 수식어
] as const;

export const ComponentSchema = z.enum(COMPONENT_VALUES);
export type Component = z.infer<typeof ComponentSchema>;

/* ──────────────────────────────────────────────────────────────
 * 3.3 토큰(Token) = 단어 1개
 * 채점 대상이 아닌 토큰(구두점 등)은 pos: null → 선택기 미렌더.
 * ────────────────────────────────────────────────────────────── */
export const TokenSchema = z.object({
  index: z.number().int().positive(), // 워크북 번호 (1부터)
  text: z.string().min(1),
  pos: PosSchema.nullable(), // 정답 품사 (비채점 토큰은 null)
});
export type Token = z.infer<typeof TokenSchema>;

/* ──────────────────────────────────────────────────────────────
 * 3.4 구(Phrase) = 문장성분 1개
 * tokenIndexes는 이 구에 속한 토큰 번호들(연속).
 * ────────────────────────────────────────────────────────────── */
export const PhraseSchema = z.object({
  id: z.string().min(1),
  tokenIndexes: z.array(z.number().int().positive()).min(1),
  component: ComponentSchema, // 정답 문장성분
  chunkGloss: z.string().min(1), // 해석(chunk) — 이 구의 한글 뜻
});
export type Phrase = z.infer<typeof PhraseSchema>;

/* ──────────────────────────────────────────────────────────────
 * 3.2 문제(Question) = 문장 1개
 * ────────────────────────────────────────────────────────────── */
export const QuestionSchema = z.object({
  id: z.string().min(1),
  sentence: z.string().min(1),
  tokens: z.array(TokenSchema).min(1),
  phrases: z.array(PhraseSchema).min(1),
  translation: z.string().min(1), // 해석(문장)
});
export type Question = z.infer<typeof QuestionSchema>;

/* ──────────────────────────────────────────────────────────────
 * 3.1 최상위 — 문제집(Deck)
 * ────────────────────────────────────────────────────────────── */
export const DeckSourceSchema = z.enum(["seed", "llm"]);
export type DeckSource = z.infer<typeof DeckSourceSchema>;

export const DeckSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  language: z.string().min(1),
  source: DeckSourceSchema, // "seed" | "llm"
  questions: z.array(QuestionSchema).min(1),
});
export type Deck = z.infer<typeof DeckSchema>;

/* ──────────────────────────────────────────────────────────────
 * 6. 검증 규칙 (LLM 생성 데이터 포함)
 * 스키마 통과 후, 구조적 정합성을 추가로 검사한다.
 *   1. 모든 tokens[].index가 1부터 연속.
 *   2. 채점 대상 토큰(pos != null)이 정확히 하나의 phrase에 속함(누락·중복 없음).
 *   3. (pos/component enum 검증은 위 Zod 스키마가 담당)
 *   4. phrases[].tokenIndexes가 연속 구간.
 *   5. translation, 각 chunkGloss 비어있지 않음(위 스키마의 min(1)이 담당).
 * ────────────────────────────────────────────────────────────── */

/** 한 문제(Question)의 구조적 검증 (02 §6). 위반 사항 메시지 배열을 반환(빈 배열 = 통과). */
export function validateQuestionStructure(q: Question): string[] {
  const errors: string[] = [];

  // 1. index가 1부터 연속
  const indexes = q.tokens.map((t) => t.index);
  for (let i = 0; i < indexes.length; i++) {
    if (indexes[i] !== i + 1) {
      errors.push(
        `[${q.id}] tokens[].index가 1부터 연속이 아닙니다 (기대 ${i + 1}, 실제 ${indexes[i]}).`,
      );
      break;
    }
  }

  // 4. phrases[].tokenIndexes가 연속 구간
  for (const p of q.phrases) {
    const sorted = [...p.tokenIndexes].sort((a, b) => a - b);
    const contiguous = sorted.every((v, i) => i === 0 || v === sorted[i - 1] + 1);
    if (!contiguous) {
      errors.push(`[${q.id}] phrase ${p.id}의 tokenIndexes가 연속 구간이 아닙니다.`);
    }
  }

  // 2. 채점 대상 토큰(pos != null)이 정확히 하나의 phrase에 속함 (누락·중복 없음)
  const gradableIndexes = new Set(
    q.tokens.filter((t) => t.pos != null).map((t) => t.index),
  );
  const coverCount = new Map<number, number>();
  for (const p of q.phrases) {
    for (const idx of p.tokenIndexes) {
      coverCount.set(idx, (coverCount.get(idx) ?? 0) + 1);
    }
  }
  for (const idx of gradableIndexes) {
    const c = coverCount.get(idx) ?? 0;
    if (c === 0) errors.push(`[${q.id}] 토큰 ${idx}이(가) 어떤 phrase에도 속하지 않습니다.`);
    if (c > 1) errors.push(`[${q.id}] 토큰 ${idx}이(가) 여러 phrase에 중복으로 속합니다.`);
  }
  // phrase가 비채점/존재하지 않는 토큰을 가리키는 경우
  for (const [idx, c] of coverCount) {
    if (!gradableIndexes.has(idx)) {
      const exists = q.tokens.some((t) => t.index === idx);
      errors.push(
        exists
          ? `[${q.id}] phrase가 비채점 토큰 ${idx}(pos=null)을 포함합니다.`
          : `[${q.id}] phrase가 존재하지 않는 토큰 ${idx}을(를) 가리킵니다.`,
      );
      void c;
    }
  }

  return errors;
}

/**
 * Deck 전체 검증: Zod 파싱 + 구조 검증(02 §6).
 * 실패 시 Error를 throw 한다(호출부에서 폴백/안내 처리).
 */
export function validateDeck(data: unknown): Deck {
  const deck = DeckSchema.parse(data); // 3 + 5 (enum / 비어있지 않음)
  const structuralErrors = deck.questions.flatMap(validateQuestionStructure);
  if (structuralErrors.length > 0) {
    throw new Error(`Deck 구조 검증 실패:\n- ${structuralErrors.join("\n- ")}`);
  }
  return deck;
}

/** throw 대신 결과 객체를 돌려주는 안전 버전. */
export function safeValidateDeck(
  data: unknown,
): { ok: true; deck: Deck } | { ok: false; error: string } {
  try {
    return { ok: true, deck: validateDeck(data) };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) };
  }
}
