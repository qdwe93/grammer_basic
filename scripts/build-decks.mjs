/**
 * 덱 빌드 스크립트 — 간결 DSL 작성본을 docs/02_데이터모델.md 스키마의 Deck JSON으로 변환한다.
 *
 * 작성본(scripts/data/*.mjs)은 인덱스/구 커버리지 같은 기계적 부기를 손으로 하지 않고,
 * "구(component, gloss, 단어/품사 나열)" 단위로만 적는다. 이 스크립트가
 *  - 토큰 인덱스를 1부터 연속 배정하고
 *  - 각 구의 tokenIndexes를 자동 계산하며(연속·겹침없음·전수 커버 보장)
 *  - 품사/문장성분 enum을 검증한다.
 *
 * 사용: node scripts/build-decks.mjs
 * 출력: src/data/seed/<id>.json
 */
import { writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SEED_DIR = resolve(__dirname, "../src/data/seed");

/** 품사 약어 → schema.ts POS_VALUES */
const POS = {
  n: "noun",
  pr: "pronoun",
  v: "verb",
  a: "adjective", // 관사/한정사 포함
  av: "adverb",
  p: "preposition",
  c: "conjunction",
};

/** 문장성분 약어 → schema.ts COMPONENT_VALUES */
const COMP = {
  S: "subject",
  P: "predicate",
  O: "object",
  Od: "object_direct",
  Oi: "object_indirect",
  C: "complement",
  M: "modifier",
};

/**
 * 한 작성 항목 { tr, p: [ [compAbbr, gloss, "word/pos word/pos ..."], ... ] } 을
 * 검증된 Question 으로 변환한다.
 */
function buildQuestion(item, qid) {
  const { tr, p } = item;
  if (!tr || typeof tr !== "string") throw new Error(`${qid}: translation(tr) 누락`);
  if (!Array.isArray(p) || p.length === 0) throw new Error(`${qid}: phrases(p) 누락`);

  const tokens = [];
  const phrases = [];
  let index = 0;

  p.forEach(([compAbbr, gloss, words], pi) => {
    const component = COMP[compAbbr];
    if (!component) throw new Error(`${qid}: 알 수 없는 문장성분 약어 "${compAbbr}"`);
    if (!gloss) throw new Error(`${qid}: 구 ${pi + 1} chunkGloss 누락`);
    if (!words || typeof words !== "string")
      throw new Error(`${qid}: 구 ${pi + 1} 단어 나열 누락`);

    const tokenIndexes = [];
    for (const spec of words.trim().split(/\s+/)) {
      const cut = spec.lastIndexOf("/");
      if (cut < 1) throw new Error(`${qid}: 잘못된 단어/품사 "${spec}"`);
      const text = spec.slice(0, cut);
      const posAbbr = spec.slice(cut + 1);
      const pos = POS[posAbbr];
      if (!pos) throw new Error(`${qid}: 알 수 없는 품사 약어 "${posAbbr}" (단어 ${text})`);
      index += 1;
      tokens.push({ index, text, pos });
      tokenIndexes.push(index);
    }

    phrases.push({ id: `p${pi + 1}`, tokenIndexes, component, chunkGloss: gloss });
  });

  const sentence = tokens.map((t) => t.text).join(" ");
  return { id: qid, sentence, tokens, phrases, translation: tr };
}

/** 구조 검증(02 §6) — 빌드 결과가 앱 Zod 검증을 통과할지 사전 확인. */
function assertValid(deck) {
  for (const q of deck.questions) {
    q.tokens.forEach((t, i) => {
      if (t.index !== i + 1) throw new Error(`${deck.id}/${q.id}: index 비연속`);
    });
    const cover = new Map();
    for (const ph of q.phrases) {
      const sorted = [...ph.tokenIndexes].sort((a, b) => a - b);
      sorted.forEach((v, i) => {
        if (i > 0 && v !== sorted[i - 1] + 1)
          throw new Error(`${deck.id}/${q.id}/${ph.id}: tokenIndexes 비연속`);
      });
      for (const idx of ph.tokenIndexes) cover.set(idx, (cover.get(idx) ?? 0) + 1);
    }
    for (const t of q.tokens) {
      const c = cover.get(t.index) ?? 0;
      if (c !== 1) throw new Error(`${deck.id}/${q.id}: 토큰 ${t.index} 커버 ${c}회`);
    }
  }
}

async function buildOne(mod) {
  const { meta, items } = mod.default;
  const questions = items.map((it, i) => buildQuestion(it, `q${i + 1}`));
  const deck = {
    id: meta.id,
    title: meta.title,
    language: "en",
    source: "seed",
    questions,
  };
  assertValid(deck);
  const out = resolve(SEED_DIR, `${meta.id}.json`);
  writeFileSync(out, JSON.stringify(deck, null, 2) + "\n", "utf8");
  console.log(`✓ ${meta.id}.json — ${questions.length}문장`);
}

const sources = ["social.mjs", "science.mjs", "tech.mjs"];
for (const f of sources) {
  const mod = await import(`./data/${f}`);
  await buildOne(mod);
}
console.log("완료.");
