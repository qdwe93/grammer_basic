/**
 * answer-palette — 현재 커서가 가리키는 타깃(단어 또는 구)의 후보를 한 줄에 펼친 선택 팔레트.
 *
 * - 드롭다운(DotSelect)을 대체한다. 항목마다 번호 배지(키 1–N)와 색 점이 붙는다.
 * - 색·라벨·순서는 design/legend.ts(단일 소스)를 따른다.
 *   품사 점 = 배경 틴트 + 잉크 테두리, 문장성분 점 = family 색. (2채널 분리 규칙)
 * - 문장성분은 5 family만 노출. object_direct/indirect는 grading의 family 비교로 정답 처리된다.
 */
import { type CSSProperties } from "react";
import type { Component, Pos } from "../../data/schema";
import {
  COMPONENT_LEGEND,
  COMPONENT_LEGEND_ORDER,
  POS_LEGEND,
  POS_LEGEND_ORDER,
} from "../../design/legend";
import { componentFamily } from "./grading";
import styles from "./Palette.module.css";

interface PaletteOption {
  value: string;
  label: string;
  dotStyle: CSSProperties;
}

const POS_OPTIONS: PaletteOption[] = POS_LEGEND_ORDER.map((pos) => {
  const { label, bgVar, inkVar } = POS_LEGEND[pos];
  return {
    value: pos,
    label,
    dotStyle: { "--dot-bg": `var(${bgVar})`, "--dot-ink": `var(${inkVar})` } as CSSProperties,
  };
});

const COMP_OPTIONS: PaletteOption[] = COMPONENT_LEGEND_ORDER.map((c) => {
  const { label, colorVar } = COMPONENT_LEGEND[c];
  return {
    value: c,
    label,
    dotStyle: { "--dot-color": `var(${colorVar})` } as CSSProperties,
  };
});

export interface PaletteProps {
  kind: "pos" | "comp";
  /** 현재 타깃의 선택값(있으면 해당 칩이 selected). */
  value: Pos | Component | null;
  /** "3번 mouse 은(는) 무슨 품사일까요?" 같은 질문 문구. */
  context: string;
  /** 옵션 i번 선택(키 i+1 또는 클릭). */
  onPick: (optionIndex: number) => void;
}

export function Palette({ kind, value, context, onPick }: PaletteProps) {
  const options = kind === "pos" ? POS_OPTIONS : COMP_OPTIONS;

  const isSelected = (optionValue: string): boolean => {
    if (value == null) return false;
    if (kind === "comp") {
      return componentFamily(value as Component) === componentFamily(optionValue as Component);
    }
    return value === optionValue;
  };

  return (
    <div className={styles.palette}>
      <p className={styles.context}>
        <span className={`t-chip ${styles.kindBadge}`}>
          {kind === "pos" ? "품사" : "문장성분"}
        </span>
        <span className={`t-label-md ${styles.contextText}`}>{context}</span>
      </p>

      <div
        className={styles.chips}
        role="listbox"
        aria-label={kind === "pos" ? "품사 선택" : "문장성분 선택"}
      >
        {options.map((opt, i) => {
          const selected = isSelected(opt.value);
          return (
            <button
              key={opt.value}
              type="button"
              role="option"
              aria-selected={selected}
              className={[styles.chip, selected ? styles.chipSelected : ""]
                .filter(Boolean)
                .join(" ")}
              onClick={() => onPick(i)}
            >
              <span className={styles.chipNum} aria-hidden="true">
                {i + 1}
              </span>
              <span
                className={kind === "pos" ? styles.dotPos : styles.dotComp}
                style={opt.dotStyle}
                aria-hidden="true"
              />
              <span className={styles.chipLabel}>{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
