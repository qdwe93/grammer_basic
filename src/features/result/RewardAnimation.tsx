import styles from "./RewardAnimation.module.css";
import type { RewardTier } from "./scoring";

export interface RewardAnimationProps {
  tier: RewardTier;
}

export function RewardAnimation({ tier }: RewardAnimationProps) {
  if (tier === "middle") {
    return (
      <div className={`${styles.reward} ${styles.middle}`} aria-hidden="true">
        <div className={styles.trophy}>
          <span className={styles.trophyCup} />
          <span className={styles.trophyStem} />
          <span className={styles.trophyBase} />
        </div>
      </div>
    );
  }

  if (tier === "low") {
    return (
      <div className={`${styles.reward} ${styles.low}`} aria-hidden="true">
        <div className={styles.character}>
          <span className={styles.characterArmLeft} />
          <span className={styles.characterArmRight} />
          <span className={styles.characterHead} />
          <span className={styles.characterBody} />
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.reward} ${styles.high}`} aria-hidden="true">
      <span className={styles.firework} />
      <span className={styles.firework} />
      <span className={styles.firework} />
    </div>
  );
}
