# 실행 & 배포 매뉴얼

영어 초급 문법 퀴즈 웹앱의 로컬 실행과 정적 배포 안내. **백엔드 없는 정적 SPA**(Vite + React 18 + TypeScript)이며, 학습 기록은 브라우저 `localStorage`에만 저장된다.

---

## 1. 요구사항

| 항목 | 권장 |
|---|---|
| Node.js | 18 LTS 이상 (Vite 6 요구) |
| 패키지 매니저 | npm (저장소에 `package-lock.json` 포함) |
| 브라우저 | 최신 Chrome / Edge / Safari / Firefox |

확인:

```bash
node -v   # v18+ 인지 확인
npm -v
```

---

## 2. 설치

저장소 루트(`package.json`이 있는 폴더)에서:

```bash
npm install
```

---

## 3. 개발 서버 실행

```bash
npm run dev
```

- 기본 주소: <http://localhost:5173>
- 포트 변경: 환경변수 `PORT`로 지정 (`vite.config.ts`가 읽음)
  - macOS/Linux: `PORT=3000 npm run dev`
  - Windows PowerShell: `$env:PORT=3000; npm run dev`
- 코드 저장 시 HMR로 자동 반영된다.

---

## 4. 프로덕션 빌드

```bash
npm run build
```

- 결과물: `dist/` 폴더 (정적 파일 — HTML/CSS/JS). 이 폴더만 배포하면 된다.
- 스크립트는 `tsc -b`(타입 검사) → `vite build` 순서로 실행된다.

> ⚠️ **알려진 사전 이슈:** 현재 `tsc -b` 단계가 `vite.config.ts`의 `process` 참조에서 타입 오류로 실패할 수 있다(`@types/node` 미설치). 빌드를 통과시키려면 아래 중 하나를 적용한다.
>
> **방법 A (권장)** — node 타입 추가:
> ```bash
> npm i -D @types/node
> ```
> 그리고 `tsconfig.node.json`의 `compilerOptions`에 `"types": ["node"]`를 추가.
>
> **방법 B** — 타입 검사 없이 번들만:
> ```bash
> npx vite build
> ```
> (앱 소스 `src/`는 타입 오류가 없으므로 번들 자체는 정상 생성된다.)

빌드 결과 로컬 확인:

```bash
npm run preview
```

---

## 5. 정적 배포

`dist/`는 어떤 정적 호스팅에도 올릴 수 있다. 별도 서버·DB·환경변수 불필요.

### 5.1 아무 정적 파일 서버
```bash
npm run build
# dist/ 폴더를 Nginx / Apache / S3 / Netlify / Vercel 등에 업로드
```

### 5.2 GitHub Pages (서브경로에 배포할 때)
리포지토리 하위 경로(`https://<id>.github.io/<repo>/`)로 서빙하면 자산 경로를 위해 `base`를 지정해야 한다. `vite.config.ts`에 추가:

```ts
export default defineConfig({
  plugins: [react()],
  base: "/<repo>/",   // 예: "/grammer_basic/"
  server: { port: process.env.PORT ? Number(process.env.PORT) : 5173 },
});
```
빌드 후 `dist/`를 `gh-pages` 브랜치로 배포한다. 루트 도메인(커스텀 도메인)으로 서빙하면 `base`는 기본값(`/`) 그대로 두면 된다.

### 5.3 SPA 라우팅 주의
이 앱은 화면 전환을 클라이언트 상태로 처리하므로 추가 라우팅 리라이트 설정은 필요 없다(모든 진입은 `index.html` 하나).

---

## 6. 데이터 & 저장 위치

기본은 **저장된 데이터**(내장 시드 스토리 "The Town Mouse and the Country Mouse", 5문항)로 바로 동작한다.

| 항목 | 저장소 키 | 설명 |
|---|---|---|
| 학습 기록 | `history` | 최근 점수(덱별 최신 항목이 시작 화면 배지로 표시) |

브라우저 `localStorage`에 저장된다. 초기화하려면 해당 브라우저의 사이트 데이터를 지운다.

시드 문제 데이터: `src/data/seed/town_mouse.json`

---

## 7. npm 스크립트 요약

| 명령 | 동작 |
|---|---|
| `npm run dev` | 개발 서버(HMR) |
| `npm run build` | 타입 검사 + 프로덕션 번들 → `dist/` |
| `npm run preview` | 빌드 결과 로컬 미리보기 |
| `npm run typecheck` | 타입 검사만 (`tsc -b --noEmit`) |

---

## 8. 자주 묻는 문제

- **포트 충돌**: `PORT` 환경변수로 다른 포트 지정(§3).
- **`npm run build` 실패(`Cannot find name 'process'`)**: §4의 방법 A 또는 B 적용.
- **한글/영문 폰트**: Pretendard·Inter를 CDN으로 로드한다(`index.html`). 오프라인 환경에서는 OS 기본 폰트로 폴백된다.
