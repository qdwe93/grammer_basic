/**
 * pos-selector — 단어 1개의 품사 선택 (7개 품사, 각 항목 앞 pos-* 점)
 * docs/04 §4 pos-selector. 색·라벨은 design/legend.ts(단일 소스).
 */
import { type CSSProperties } from "react";
import type { Pos } from "../../data/schema";
import { POS_LEGEND, POS_LEGEND_ORDER } from "../../design/legend";
import { DotSelect, type DotOption } from "./DotSelect";

const POS_OPTIONS: DotOption[] = POS_LEGEND_ORDER.map((pos) => {
  const { label, bgVar, inkVar } = POS_LEGEND[pos];
  return {
    value: pos,
    label,
    vars: { "--dot-bg": `var(${bgVar})`, "--dot-ink": `var(${inkVar})` } as CSSProperties,
  };
});

export interface PosSelectorProps {
  value: Pos | null;
  onChange: (pos: Pos) => void;
  ariaLabel: string;
}

export function PosSelector({ value, onChange, ariaLabel }: PosSelectorProps) {
  return (
    <DotSelect
      value={value}
      options={POS_OPTIONS}
      placeholder="품사"
      ariaLabel={ariaLabel}
      dotKind="pos"
      onChange={(v) => onChange(v as Pos)}
    />
  );
}
