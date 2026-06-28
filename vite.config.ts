import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // 상대경로 빌드: 도메인 루트든 하위 경로(GitHub Pages 프로젝트 사이트)든
  // 어디에 올려도 assets/ 를 올바르게 찾는다.
  base: "./",
  plugins: [react()],
  // 프리뷰/툴이 PORT 환경변수로 할당한 포트를 그대로 사용(없으면 기본 5173).
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
});
