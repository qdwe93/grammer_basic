/**
 * 품사/문장성분 색·라벨 맵 (범례 legend 및 색상 코딩의 단일 소스)
 *
 * 출처: docs/02_데이터모델.md §2, docs/04_디자인적용가이드.md §2
 * 2채널 분리 규칙(절대 규칙): 품사 = 단어 배경 틴트(bg/ink), 문장성분 = 브래킷/칩 색.
 * 두 채널의 색을 절대 섞지 않는다.
 */
import type { Component, Pos } from "../data/schema";

/** 품사: 배경 틴트(bg) + 잉크(텍스트) CSS 변수 쌍 */
export interface PosStyle {
  label: string; // 한글 라벨
  bgVar: string; // 배경 틴트 CSS 변수
  inkVar: string; // 텍스트 잉크 CSS 변수
}

export const POS_LEGEND: Record<Pos, PosStyle> = {
  noun: { label: "명사", bgVar: "--pos-noun-bg", inkVar: "--pos-noun-ink" },
  pronoun: { label: "대명사", bgVar: "--pos-pronoun-bg", inkVar: "--pos-pronoun-ink" },
  verb: { label: "동사", bgVar: "--pos-verb-bg", inkVar: "--pos-verb-ink" },
  adjective: { label: "형용사", bgVar: "--pos-adjective-bg", inkVar: "--pos-adjective-ink" },
  adverb: { label: "부사", bgVar: "--pos-adverb-bg", inkVar: "--pos-adverb-ink" },
  preposition: { label: "전치사", bgVar: "--pos-preposition-bg", inkVar: "--pos-preposition-ink" },
  conjunction: { label: "접속사", bgVar: "--pos-conjunction-bg", inkVar: "--pos-conjunction-ink" },
};

/** 문장성분: 브래킷/칩 색 CSS 변수. object_direct/indirect는 comp-object 색 공유, 칩 라벨만 다름. */
export interface ComponentStyle {
  label: string; // 한글 칩 라벨
  colorVar: string; // 브래킷/칩 색 CSS 변수 (family 색)
}

export const COMPONENT_LEGEND: Record<Component, ComponentStyle> = {
  subject: { label: "주어", colorVar: "--comp-subject" },
  predicate: { label: "서술어", colorVar: "--comp-predicate" },
  object: { label: "목적어", colorVar: "--comp-object" },
  object_direct: { label: "직접목적어", colorVar: "--comp-object" },
  object_indirect: { label: "간접목적어", colorVar: "--comp-object" },
  complement: { label: "보어", colorVar: "--comp-complement" },
  modifier: { label: "수식어", colorVar: "--comp-modifier" },
};

/** 범례에 노출하는 품사 7행(enum 순서). */
export const POS_LEGEND_ORDER: Pos[] = [
  "noun",
  "pronoun",
  "verb",
  "adjective",
  "adverb",
  "preposition",
  "conjunction",
];

/**
 * 범례에 노출하는 문장성분 5 family.
 * 직접/간접목적어는 object family로 묶어 칩 라벨로만 구분하므로 범례에는 5행만 보인다.
 */
export const COMPONENT_LEGEND_ORDER: Component[] = [
  "subject",
  "predicate",
  "object",
  "complement",
  "modifier",
];
