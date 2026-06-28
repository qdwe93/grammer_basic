/**
 * 스타일 샌드박스 (개발 전용, 임시 라우트)
 * Phase 1 산출물(타이포 토큰 · 버튼 · 범례)을 한 화면에서 시각 확인한다.
 * 실제 화면 로직과 무관하며 후속 단계에서 제거/대체 가능.
 */
import { Button, IconButton } from "../components/Button";
import { Legend } from "../components/Legend";
import styles from "./StyleSandbox.module.css";

interface TypeSample {
  cls: string;
  name: string;
  sample: string;
}

const TYPE_SAMPLES: TypeSample[] = [
  { cls: "t-display-xl", name: "display-xl", sample: "92%" },
  { cls: "t-display-lg", name: "display-lg", sample: "영어 초급 문법 퀴즈" },
  { cls: "t-display-md", name: "display-md", sample: "완료!" },
  { cls: "t-sentence", name: "sentence", sample: "A country mouse lived in a small hole." },
  { cls: "t-title-lg", name: "title-lg", sample: "서브섹션 타이틀" },
  { cls: "t-title-md", name: "title-md", sample: "카드 타이틀" },
  { cls: "t-label-md", name: "label-md", sample: "선택기 라벨" },
  { cls: "t-button", name: "button", sample: "채점하기" },
  { cls: "t-body-md", name: "body-md", sample: "안내 문구·설정 도움말" },
  { cls: "t-gloss", name: "gloss", sample: "시골 쥐 한 마리가" },
  { cls: "t-translation", name: "translation", sample: "농장 근처의 작은 구멍 속에서 시골 쥐 한 마리가 살았다." },
  { cls: "t-index", name: "index", sample: "1" },
  { cls: "t-chip", name: "chip", sample: "주어" },
];

export function StyleSandbox() {
  return (
    <div className={styles.page}>
      <h1 className={`t-display-lg ${styles.sectionHead}`}>스타일 샌드박스 (Phase 1)</h1>

      {/* 타이포그래피 */}
      <section className={styles.section}>
        <h2 className={`t-display-md ${styles.sectionHead}`}>타이포그래피</h2>
        <div className={styles.typeList}>
          {TYPE_SAMPLES.map((t) => (
            <div key={t.cls} className={styles.typeRow}>
              <span className={`t-body-md ${styles.typeName}`}>{t.name}</span>
              <span className={`${t.cls} ${styles.typeSample}`}>{t.sample}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 버튼 */}
      <section className={styles.section}>
        <h2 className={`t-display-md ${styles.sectionHead}`}>버튼</h2>

        <div className={styles.row}>
          <span className={`t-body-md ${styles.rowLabel}`}>primary (기본 / disabled)</span>
          <Button variant="primary">채점하기</Button>
          <Button variant="primary" disabled>
            채점하기
          </Button>
        </div>

        <div className={styles.row}>
          <span className={`t-body-md ${styles.rowLabel}`}>secondary (기본 / disabled)</span>
          <Button variant="secondary">다시 풀기</Button>
          <Button variant="secondary" disabled>
            다시 풀기
          </Button>
        </div>

        <div className={styles.row}>
          <span className={`t-body-md ${styles.rowLabel}`}>icon-circular</span>
          <IconButton aria-label="설정">⚙</IconButton>
          <IconButton aria-label="다시 듣기">▶</IconButton>
        </div>

        <div className={styles.darkCard}>
          <p className={`t-title-md ${styles.darkCardText}`}>
            secondary-on-dark (결과 카드 위)
          </p>
          <div className={styles.row}>
            <Button variant="secondaryOnDark">다시 도전</Button>
          </div>
        </div>
      </section>

      {/* 범례 */}
      <section className={styles.section}>
        <h2 className={`t-display-md ${styles.sectionHead}`}>범례 (모바일에선 "색상 안내" 토글)</h2>
        <Legend />
      </section>
    </div>
  );
}
