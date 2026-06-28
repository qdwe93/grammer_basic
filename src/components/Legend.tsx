/**
 * 범례(legend) 컴포넌트 — design.md `legend` / docs/04 §4
 *
 * 2채널: 품사(틴트 점) / 문장성분(family 솔리드 점). 색·라벨은 design/legend.ts에서.
 * 모바일(<768)은 "색상 안내" 토글로 접힌다.
 */
import { type CSSProperties, useState } from "react";
import {
  COMPONENT_LEGEND,
  COMPONENT_LEGEND_ORDER,
  POS_LEGEND,
  POS_LEGEND_ORDER,
} from "../design/legend";
import { Button } from "./Button";
import styles from "./Legend.module.css";

export function Legend() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.legend}>
      <div className={styles.toggle}>
        <Button
          variant="secondary"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          색상 안내
        </Button>
      </div>

      <div className={open ? styles.body : styles.bodyHidden}>
        {/* 품사 7종 */}
        <div className={styles.row}>
          <span className={`t-body-md ${styles.rowTitle}`}>품사</span>
          <div className={styles.items}>
            {POS_LEGEND_ORDER.map((pos) => {
              const { label, bgVar, inkVar } = POS_LEGEND[pos];
              const dotStyle = {
                "--dot-bg": `var(${bgVar})`,
                "--dot-ink": `var(${inkVar})`,
              } as CSSProperties;
              return (
                <span key={pos} className={`t-label-md ${styles.item}`}>
                  <span className={`${styles.dot} ${styles.dotPos}`} style={dotStyle} />
                  {label}
                </span>
              );
            })}
          </div>
        </div>

        {/* 문장성분 5 family */}
        <div className={styles.row}>
          <span className={`t-body-md ${styles.rowTitle}`}>문장성분</span>
          <div className={styles.items}>
            {COMPONENT_LEGEND_ORDER.map((comp) => {
              const { label, colorVar } = COMPONENT_LEGEND[comp];
              const dotStyle = {
                "--dot-color": `var(${colorVar})`,
              } as CSSProperties;
              return (
                <span key={comp} className={`t-label-md ${styles.item}`}>
                  <span className={`${styles.dot} ${styles.dotComp}`} style={dotStyle} />
                  {label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
