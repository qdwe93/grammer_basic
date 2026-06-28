/**
 * step-indicator — "1 · 품사 N/M  ›  2 · 문장성분 N/M".
 * 현재 단계(커서가 어느 종류 타깃에 있는지)를 강조하고, 클릭하면 해당 단계 첫 칸으로 이동.
 */
import styles from "./StepIndicator.module.css";

export interface StepIndicatorProps {
  phase: "pos" | "comp";
  posFilled: number;
  posTotal: number;
  compFilled: number;
  compTotal: number;
  onSelectPos: () => void;
  onSelectComp: () => void;
}

export function StepIndicator({
  phase,
  posFilled,
  posTotal,
  compFilled,
  compTotal,
  onSelectPos,
  onSelectComp,
}: StepIndicatorProps) {
  return (
    <div className={styles.steps}>
      <button
        type="button"
        className={[styles.step, phase === "pos" ? styles.stepActive : ""]
          .filter(Boolean)
          .join(" ")}
        aria-current={phase === "pos" || undefined}
        onClick={onSelectPos}
      >
        <span className={styles.stepNum}>1</span>
        <span>품사</span>
        <span className={styles.count}>
          {posFilled}/{posTotal}
        </span>
      </button>

      <span className={styles.arrow} aria-hidden="true">
        ›
      </span>

      <button
        type="button"
        className={[styles.step, phase === "comp" ? styles.stepActive : ""]
          .filter(Boolean)
          .join(" ")}
        aria-current={phase === "comp" || undefined}
        onClick={onSelectComp}
      >
        <span className={styles.stepNum}>2</span>
        <span>문장성분</span>
        <span className={styles.count}>
          {compFilled}/{compTotal}
        </span>
      </button>
    </div>
  );
}
