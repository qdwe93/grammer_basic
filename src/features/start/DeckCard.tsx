/**
 * deck-card (스토리/덱 선택 카드) — design.md Start Screen, docs/04 §4
 *
 * 따뜻한 signature 표면(peach/mint/yellow) 위에 스토리 제목·문장 수·최근 점수 배지.
 * 시작 화면에서 라디오처럼 동작(한 번에 하나 선택). 색 규칙: 시작 화면은 문법 2채널 색
 * (pos 틴트 / comp 브래킷)을 쓰지 않는다. 표면은 signature 토큰만 사용.
 */
import type { RewardTier } from "../result/scoring";
import styles from "./DeckCard.module.css";

export type DeckSurface = "peach" | "mint" | "yellow";

export interface DeckCardProps {
  title: string;
  /** 보조 설명(예: "저장된 데이터" / "실시간 생성"). */
  kicker: string;
  sentenceCount: number;
  /** 최근 점수 배지(정답률 %). 기록이 없으면 생략. */
  lastScore?: number;
  lastTier?: RewardTier;
  surface: DeckSurface;
  selected: boolean;
  onSelect: () => void;
}

const SURFACE_CLASS: Record<DeckSurface, string> = {
  peach: styles.peach,
  mint: styles.mint,
  yellow: styles.yellow,
};

export function DeckCard({
  title,
  kicker,
  sentenceCount,
  lastScore,
  surface,
  selected,
  onSelect,
}: DeckCardProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      className={`${styles.card} ${SURFACE_CLASS[surface]} ${selected ? styles.selected : ""}`}
      onClick={onSelect}
    >
      <span className={`t-chip ${styles.kicker}`}>{kicker}</span>

      <span className={`t-title-md ${styles.title}`} lang="en">
        {title}
      </span>

      <span className={styles.meta}>
        <span className={`t-body-md ${styles.count}`}>문장 {sentenceCount}개</span>
        {typeof lastScore === "number" ? (
          <span className={`t-chip ${styles.badge}`}>최근 {lastScore}%</span>
        ) : null}
      </span>
    </button>
  );
}
