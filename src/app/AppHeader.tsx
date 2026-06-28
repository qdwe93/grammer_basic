/**
 * app-header (design.md Navigation) — 64px 흰 바, 모든 화면에서 라이트 유지.
 *
 * 좌: 앱 워드마크(→ 시작). 우: 현재 덱 라벨.
 * 헤더는 다크 결과 카드 위에서도 인버트하지 않는다.
 */
import styles from "./AppHeader.module.css";

export type AppView = "start" | "quiz";

export interface AppHeaderProps {
  view: AppView;
  /** 현재 진행 중인 덱 제목(있으면 우측에 표시). */
  currentDeckTitle?: string;
  onNavStart: () => void;
}

export function AppHeader({ currentDeckTitle, onNavStart }: AppHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <button
          type="button"
          className={`t-title-md ${styles.wordmark}`}
          onClick={onNavStart}
        >
          문법 퀴즈
        </button>

        <div className={styles.right}>
          {currentDeckTitle ? (
            <span className={`t-body-md ${styles.deckLabel}`} lang="en">
              {currentDeckTitle}
            </span>
          ) : null}
        </div>
      </div>
    </header>
  );
}
