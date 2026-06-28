/**
 * selector-tray — 모바일(<768)에서 선택기를 문장 아래 스택으로 collapse (docs/04 §4-5).
 * 품사: 단어별 행([번호 · 단어 · pos-selector]) / 문장성분: 구별 행([구 · component-selector]).
 * 행은 hairline으로 구분.
 */
import type { Question } from "../../data/schema";
import { ComponentSelector } from "./ComponentSelector";
import { phraseText } from "./phrase";
import { PosSelector } from "./PosSelector";
import type { UseQuizState } from "./useQuizState";
import styles from "./SelectorTray.module.css";

export interface SelectorTrayProps {
  question: Question;
  quiz: UseQuizState;
}

export function SelectorTray({ question, quiz }: SelectorTrayProps) {
  const { answer, setPos, setComponent } = quiz;
  const gradableTokens = question.tokens.filter((t) => t.pos !== null);

  return (
    <div className={styles.tray}>
      {/* 품사 — 단어별 */}
      <section className={styles.group}>
        <h3 className={`t-label-md ${styles.groupTitle}`}>품사</h3>
        <ul className={styles.rows}>
          {gradableTokens.map((t) => (
            <li key={t.index} className={styles.row}>
              <span className={`t-index ${styles.rowIndex}`}>{t.index}</span>
              <span className={`t-sentence ${styles.rowWord}`} lang="en">
                {t.text}
              </span>
              <span className={styles.rowControl}>
                <PosSelector
                  value={answer.posByIndex[t.index] ?? null}
                  onChange={(pos) => setPos(t.index, pos)}
                  ariaLabel={`${t.index}번 단어 ${t.text}의 품사`}
                />
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* 문장성분 — 구별 */}
      <section className={styles.group}>
        <h3 className={`t-label-md ${styles.groupTitle}`}>문장성분</h3>
        <ul className={styles.rows}>
          {question.phrases.map((p) => {
            const text = phraseText(question, p);
            return (
              <li key={p.id} className={styles.row}>
                <span className={`t-sentence ${styles.rowPhrase}`} lang="en">
                  {text}
                </span>
                <span className={styles.rowControl}>
                  <ComponentSelector
                    value={answer.componentByPhrase[p.id] ?? null}
                    onChange={(c) => setComponent(p.id, c)}
                    ariaLabel={`"${text}" 구의 문장성분`}
                  />
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
