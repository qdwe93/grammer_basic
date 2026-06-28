/**
 * 덱 로드 — 내장 시드(저장된 데이터) 검증 후 반환
 *
 * 출처: docs/03_기술스택_아키텍처.md §4, docs/02_데이터모델.md §6
 *
 * 이 앱은 여러 개의 저장된 시드 덱을 사용한다.
 *  - 생쥐 이야기(story): 순서대로 전 문항 풀이.
 *  - 사회/과학/게임·IT 주제 덱: 100문장 중 랜덤 5문장을 뽑아 출제(문장 구조 묻기).
 */
import { type Deck, validateDeck } from "./schema";
import townMouseRaw from "./seed/town_mouse.json";
import socialRaw from "./seed/social-6.json";
import scienceRaw from "./seed/science-6.json";
import techRaw from "./seed/tech-fun.json";
import type { DeckSurface } from "../features/start/DeckCard";

/** 한 판에 출제할 랜덤 문항 수(주제 덱 공통). */
export const QUIZ_SAMPLE_SIZE = 5;

/** 시작 화면 덱 카드 + 출제 규칙을 정의하는 항목. */
export interface DeckEntry {
  deck: Deck;
  /** 보조 설명(카드 kicker). */
  kicker: string;
  /** 카드 표면 색(signature). */
  surface: DeckSurface;
  /** 한 판 출제 문항 수. story는 전체, 주제 덱은 QUIZ_SAMPLE_SIZE. */
  quizSize: number;
}

/** 모든 시드 덱을 검증해 시작 화면 항목으로 반환한다. */
export function loadDeckEntries(): DeckEntry[] {
  const town = validateDeck(townMouseRaw);
  const social = validateDeck(socialRaw);
  const science = validateDeck(scienceRaw);
  const tech = validateDeck(techRaw);
  return [
    { deck: social, kicker: "사회 6학년", surface: "mint", quizSize: QUIZ_SAMPLE_SIZE },
    { deck: science, kicker: "과학 6학년", surface: "yellow", quizSize: QUIZ_SAMPLE_SIZE },
    { deck: tech, kicker: "게임·IT", surface: "peach", quizSize: QUIZ_SAMPLE_SIZE },
    { deck: town, kicker: "이야기", surface: "mint", quizSize: town.questions.length },
  ];
}

/**
 * 덱에서 무작위로 n문항을 뽑아 같은 메타의 새 덱을 만든다.
 * n이 전체보다 크거나 같으면 원본을 그대로 돌려준다(순서 유지).
 */
export function sampleDeck(deck: Deck, n: number): Deck {
  if (deck.questions.length <= n) return deck;
  const pool = [...deck.questions];
  // Fisher–Yates 셔플 후 앞에서 n개.
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return { ...deck, questions: pool.slice(0, n) };
}

/** 내장 시드 덱(생쥐 이야기)을 검증 후 반환한다. (이전 호환용) */
export function loadSeedDeck(): Deck {
  return validateDeck(townMouseRaw);
}

/**
 * 개발 확인용: 모든 시드 덱이 스키마·구조 검증을 통과해 로드되는지 콘솔에 로그.
 */
export function logSeedDeckLoad(): void {
  try {
    const entries = loadDeckEntries();
    for (const { deck } of entries) {
      console.info(
        `[seed] 덱 검증·로드 완료: "${deck.title}" (id=${deck.id}, source=${deck.source}, 문제 ${deck.questions.length}개)`,
      );
    }
  } catch (e) {
    console.error("[seed] 덱 검증 실패:", e);
  }
}
