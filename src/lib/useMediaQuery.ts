/**
 * useMediaQuery — CSS 미디어쿼리 매치 여부를 반응형으로 추적.
 * 모바일(<768) 선택기 collapse 등 레이아웃 분기에 사용 (docs/04 §5).
 */
import { useEffect, useState } from "react";

function getMatch(query: string): boolean {
  return typeof window !== "undefined" && typeof window.matchMedia === "function"
    ? window.matchMedia(query).matches
    : false;
}

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => getMatch(query));

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange(); // 마운트/쿼리 변경 시 동기화
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}
