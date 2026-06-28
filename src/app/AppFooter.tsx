/**
 * footer (design.md Navigation) — 최소 라이트 푸터. 앱 이름·버전. body-md.
 */
import styles from "./AppFooter.module.css";

export function AppFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={`t-body-md ${styles.meta}`}>영어 초급 문법 퀴즈 · v1.0</span>
      </div>
    </footer>
  );
}
