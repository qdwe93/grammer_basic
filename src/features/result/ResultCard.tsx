import { Button } from "../../components/Button";
import { RewardAnimation } from "./RewardAnimation";
import styles from "./ResultCard.module.css";
import { getRewardTier, type RewardTier, type ScoreSummary } from "./scoring";

export interface ResultCardProps {
  score: ScoreSummary;
  onRestart: () => void;
  onHome: () => void;
}

function getHeadline(tier: RewardTier): string {
  if (tier === "high") return "훌륭해요!";
  if (tier === "middle") return "잘했어요!";
  return "다시 도전해 볼까요?";
}

export function ResultCard({ score, onRestart, onHome }: ResultCardProps) {
  const tier = getRewardTier(score.accuracy);

  return (
    <section className={`${styles.card} ${styles[tier]}`} aria-label="결과">
      <RewardAnimation tier={tier} />
      <div className={styles.content}>
        <p className={`t-body-md ${styles.meta}`}>
          한 번에 맞힌 문장 {score.perfectCount} / {score.total}
        </p>
        <p className={`t-display-xl ${styles.score}`}>{score.accuracy}%</p>
        <h2 className={`t-display-md ${styles.headline}`}>{getHeadline(tier)}</h2>
        <div className={styles.actions}>
          <Button variant="secondaryOnDark" onClick={onRestart}>
            다시 풀기
          </Button>
          <Button variant="secondaryOnDark" onClick={onHome}>
            처음으로
          </Button>
        </div>
      </div>
    </section>
  );
}
