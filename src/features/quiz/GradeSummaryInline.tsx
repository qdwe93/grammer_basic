import styles from "./GradeSummaryInline.module.css";

export interface GradeSummaryInlineProps {
  wrongCount: number;
}

export function GradeSummaryInline({ wrongCount }: GradeSummaryInlineProps) {
  if (wrongCount <= 0) return null;

  return (
    <p className={`t-body-md ${styles.summary}`} role="status" aria-live="polite">
      {wrongCount}곳이 틀렸어요. 빨간 부분을 다시 생각해 볼까요?
    </p>
  );
}
