import { type CSSProperties } from "react";
import type { Phrase, Question, Token } from "../../data/schema";
import { COMPONENT_LEGEND } from "../../design/legend";
import { WordToken } from "./WordToken";
import styles from "./ComponentBracket.module.css";

export interface ComponentBracketProps {
  question: Question;
  phrase: Phrase;
  everWrongTokenIndexes: ReadonlySet<number>;
  wasWrongPhrase: boolean;
}

export function ComponentBracket({
  question,
  phrase,
  everWrongTokenIndexes,
  wasWrongPhrase,
}: ComponentBracketProps) {
  const componentStyle = COMPONENT_LEGEND[phrase.component];
  const tokensByIndex = new Map(question.tokens.map((token) => [token.index, token]));
  const tokens = phrase.tokenIndexes
    .map((tokenIndex) => tokensByIndex.get(tokenIndex))
    .filter((token): token is Token => token != null);
  const colorStyle = {
    "--component-color": `var(${componentStyle.colorVar})`,
  } as CSSProperties;

  return (
    <span className={styles.phrase} style={colorStyle}>
      <span className={styles.tokenRow}>
        {tokens.map((token, index) => {
          const isFirst = index === 0;
          const isLast = index === tokens.length - 1;
          const segmentClass = [
            styles.bracketSegment,
            isFirst ? styles.bracketStart : "",
            isLast ? styles.bracketEnd : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <span key={token.index} className={styles.tokenUnit}>
              <WordToken
                index={token.index}
                text={token.text}
                pos={token.pos}
                isRevealed
                wasWrong={everWrongTokenIndexes.has(token.index)}
              />
              <span className={segmentClass} aria-hidden="true" />
            </span>
          );
        })}
      </span>

      <span className={styles.chipRow}>
        <span className={`t-chip ${styles.chip}`}>
          {componentStyle.label}
          {wasWrongPhrase && (
            <span className={styles.wasWrong} aria-label="고쳐서 맞힌 구">
              ✓
            </span>
          )}
        </span>
      </span>
      <span className={`t-gloss ${styles.gloss}`} lang="ko">
        {phrase.chunkGloss}
      </span>
    </span>
  );
}
