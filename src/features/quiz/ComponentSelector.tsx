/**
 * component-selector — 구(phrase) 1개의 문장성분 선택.
 * 노출 순서: 주어 / 서술어 / 목적어(직접·간접) / 보어 / 수식어 (docs/02 §2.2, docs/04 §4).
 * 목적어는 직접/간접까지 선택할 수 있게 펼쳐 두되(시드 q4 정답이 직접·간접목적어),
 * 같은 family 색(comp-object)을 공유한다 — 칩 라벨만 다름.
 */
import { type CSSProperties } from "react";
import type { Component } from "../../data/schema";
import { COMPONENT_LEGEND } from "../../design/legend";
import { DotSelect, type DotOption } from "./DotSelect";

const COMPONENT_SELECT_ORDER: Component[] = [
  "subject",
  "predicate",
  "object",
  "object_direct",
  "object_indirect",
  "complement",
  "modifier",
];

const COMPONENT_OPTIONS: DotOption[] = COMPONENT_SELECT_ORDER.map((c) => {
  const { label, colorVar } = COMPONENT_LEGEND[c];
  return {
    value: c,
    label,
    vars: { "--dot-color": `var(${colorVar})` } as CSSProperties,
  };
});

export interface ComponentSelectorProps {
  value: Component | null;
  onChange: (component: Component) => void;
  ariaLabel: string;
}

export function ComponentSelector({ value, onChange, ariaLabel }: ComponentSelectorProps) {
  return (
    <DotSelect
      value={value}
      options={COMPONENT_OPTIONS}
      placeholder="문장성분"
      ariaLabel={ariaLabel}
      dotKind="comp"
      onChange={(v) => onChange(v as Component)}
    />
  );
}
