import styles from "./TranslationCallout.module.css";

export interface TranslationCalloutProps {
  translation: string;
}

export function TranslationCallout({ translation }: TranslationCalloutProps) {
  return (
    <div className={styles.callout}>
      <p className={`t-translation ${styles.text}`} lang="ko">
        {translation}
      </p>
    </div>
  );
}
