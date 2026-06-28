/**
 * DotSelect — 항목 앞에 색 점(dot)이 붙는 공용 드롭다운.
 * pos-selector / component-selector가 공유하는 모양 (design.md: "Same shape as pos-selector").
 *
 * 무채색 보드 규칙(docs/04 §1-2): 색 점은 "열린 메뉴의 항목"에만 보이는 안내용이다.
 * 닫힌 트리거에는 선택 라벨만 잉크색으로 표시하고 색 점을 두지 않아, 답하는 동안
 * 보드/입력에 문법 색이 미리 새지 않게 한다.
 */
import { type CSSProperties, useEffect, useRef, useState } from "react";
import styles from "./DotSelect.module.css";

export interface DotOption {
  value: string;
  label: string;
  /** 점 색 CSS 변수 (pos: --dot-bg/--dot-ink, comp: --dot-color) */
  vars: CSSProperties;
}

export interface DotSelectProps {
  value: string | null;
  options: DotOption[];
  placeholder: string;
  ariaLabel: string;
  dotKind: "pos" | "comp";
  onChange: (value: string) => void;
}

export function DotSelect({
  value,
  options,
  placeholder,
  ariaLabel,
  dotKind,
  onChange,
}: DotSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const selected = options.find((o) => o.value === value) ?? null;
  const dotClass = dotKind === "pos" ? styles.dotPos : styles.dotComp;

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function choose(v: string) {
    onChange(v);
    setOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        ref={triggerRef}
        type="button"
        className={`t-label-md ${styles.trigger} ${selected ? styles.triggerFilled : ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.triggerLabel}>{selected ? selected.label : placeholder}</span>
        <span className={styles.chevron} aria-hidden="true">
          ▾
        </span>
      </button>

      {open && (
        <ul className={styles.menu} role="listbox" aria-label={ariaLabel}>
          {options.map((o) => (
            <li key={o.value} role="option" aria-selected={o.value === value}>
              <button
                type="button"
                className={`t-label-md ${styles.option} ${
                  o.value === value ? styles.optionSelected : ""
                }`}
                onClick={() => choose(o.value)}
              >
                <span className={`${styles.dot} ${dotClass}`} style={o.vars} />
                <span>{o.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
