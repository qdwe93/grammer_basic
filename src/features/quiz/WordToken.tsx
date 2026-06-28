/**
 * word-token (Default/무채색, 채점 후 Wrong, 공개 후 Revealed)
 * [번호 index] / [단어] / (children: 아래 인라인 선택기) 스택.
 * 채점 전에는 문법 색을 쓰지 않고, 공개 후에만 POS 틴트/잉크를 적용한다.
 */
import { type CSSProperties, type ReactNode } from "react";
import type { Pos } from "../../data/schema";
import { POS_LEGEND } from "../../design/legend";
import styles from "./WordToken.module.css";

export interface WordTokenProps {
  index: number;
  text: string;
  pos?: Pos | null;
  isWrong?: boolean;
  isRevealed?: boolean;
  wasWrong?: boolean;
  /** 데스크톱: 단어 아래 인라인 pos-selector 슬롯 */
  children?: ReactNode;
}

export function WordToken({
  index,
  text,
  pos = null,
  isWrong = false,
  isRevealed = false,
  wasWrong = false,
  children,
}: WordTokenProps) {
  const posStyle =
    isRevealed && pos
      ? ({
          "--word-bg": `var(${POS_LEGEND[pos].bgVar})`,
          "--word-ink": `var(${POS_LEGEND[pos].inkVar})`,
        } as CSSProperties)
      : undefined;

  return (
    <div className={styles.token}>
      <span className={`t-index ${styles.index}`}>{index}</span>
      <span
        className={`t-sentence ${styles.word} ${
          isWrong ? styles.wordWrong : ""
        } ${isRevealed ? styles.wordRevealed : ""}`}
        style={posStyle}
        aria-invalid={isWrong || undefined}
      >
        {text}
        {isRevealed && wasWrong && (
          <span className={styles.wasWrong} aria-label="고쳐서 맞힌 단어">
            ✓
          </span>
        )}
      </span>
      {children}
    </div>
  );
}
