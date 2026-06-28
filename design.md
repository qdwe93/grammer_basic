## Overview

This is the design system for an **English-grammar quiz app for beginners** (Korean learners). The visual language is borrowed from Airtable's quietly editorial marketing surfaces — white canvas, dark ink type, generous whitespace, and a near-black pill-free CTA — and re-pointed at a focused study tool. Nothing fights for attention until the moment a learner needs it: when answers are graded, when a sentence is colored apart into its grammar, or when a quiz is finished and the app celebrates.

The product has two voltage moments, and the design reserves color for exactly those two:
1. **The grammar color-coding system** — once a sentence is answered correctly, each word is tinted by its **part of speech (품사)** and each phrase is bracketed by its **sentence component (문장성분)**. This is the pedagogical payload, so the rest of the screen stays calm to let it read.
2. **The completion celebration** — a full-bleed signature surface card (in `{colors.signature-coral}`, `{colors.signature-forest}`, or `{colors.surface-dark}`) carries the final score and a reward (fireworks / trophy / cheering character) scaled to the accuracy rate.

Between those moments, the quiz reads like a clean worksheet: a sentence at the top, answer selectors beneath each word, a single near-black primary CTA, and breathing room. Brand strength comes from type, whitespace, and the disciplined grammar palette — never from gradient washes or accent walls.

**Key Characteristics:**
- Primary CTA (e.g. "채점하기" / "다음 문제") is `{colors.primary}` (near-black ink) with white text and a `{rounded.lg}` (12px) corner — confident and final, one per viewport.
- Secondary CTA (e.g. "다시 풀기" / "건너뛰기") is a `{colors.canvas}` button with `{colors.ink}` text and a hairline outline. The two together form the signature button pair.
- The quiz board is white canvas. No atmospheric gradient, no mesh — the sentence and its answer controls sit in clean whitespace so grammar color is the only color on screen.
- **Grammar color is a two-channel system.** Part of speech is carried as a soft **token background tint** on each word; sentence component is carried as an **underline bracket + label chip** under each phrase. The two channels never use the same visual treatment, so a word can show both at once without reading as noise.
- Color is **progressive**: while a learner is answering, the board is monochrome. Color is revealed only after an answer is confirmed correct. This keeps the answering state calm and makes the reveal feel like a reward.
- **Feedback is semantic, not decorative**: a wrong answer is marked with `{colors.error}` (red); a confirmed-correct answer with `{colors.success}` (green). These two colors appear only as grading feedback and never as brand accents.
- Completion uses **signature surface cards** (`{colors.signature-coral}`, `{colors.signature-forest}`, `{colors.surface-dark}`) full-bleed, exactly as Airtable uses them to break editorial monotony — here they carry the result/reward.
- Border radius is hierarchical: `{rounded.lg}` (12px) for primary CTAs and result/signature cards, `{rounded.md}` (10px) for the quiz board and content cards, `{rounded.sm}` (6px) for inputs and grammar tokens, `{rounded.full}` for legend dots, icon buttons, and avatars.
- Vertical rhythm is `{spacing.section}` (96px) between major screens/bands on wide layouts, tightening on mobile.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #181d26): The dominant brand color. Primary CTA background, large display headings (score, screen titles), and the `{component.result-card-dark}` band. Black IS the primary throughout — not blue-then-black.
- **Primary Active** (`{colors.primary-active}` — #0d1218): The press state on primary buttons.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The default page surface; the floor of the quiz board and every screen.
- **Surface Soft** (`{colors.surface-soft}` — #f8fafc): The quiz board background and selector trays — a near-white that separates the working area from pure-white page margin.
- **Surface Strong** (`{colors.surface-strong}` — #e0e2e6): Light gray utility bands (e.g. the "설정" section header strip, disabled rows).
- **Surface Dark** (`{colors.surface-dark}` — #181d26): The dark result/CTA card variant (`{component.result-card-dark}`), used for the "완료" summary on a high score.
- **Hairline** (`{colors.hairline}` — #dddddd): The 1px border tone for input outlines, board dividers, selector outlines, and secondary buttons.

### Text
- **Ink** (`{colors.ink}` — #181d26): The strongest text — screen titles, the English sentence itself, primary button text-on-light. Same hex as `{colors.primary}` (same role at type and button layers).
- **Body** (`{colors.body}` — #333840): Default running-text and instruction copy.
- **Muted** (`{colors.muted}` — #41454d): Captions, the number index above each word, meta text, secondary nav.
- **On Primary / On Dark** (`{colors.on-primary}` — #ffffff): Text on primary buttons and dark surfaces.

### Feedback (Grading Semantics)
These three roles appear **only** during grading and never as brand or grammar color.
- **Error / Wrong** (`{colors.error}` — #c8362a) and **Error Soft** (`{colors.error-soft}` — #fbe9e7): A wrong selection's text/border turns `{colors.error}`; its token sits on `{colors.error-soft}`. Used for the "틀린 부분만 빨갛게 표시" requirement.
- **Success / Correct** (`{colors.success}` — #006400) and **Success Soft** (`{colors.success-soft}` — #e4f3e6): A confirmed-correct selection.
- **Was-Wrong Marker** (`{colors.was-wrong}` — #9297a0): The small muted check/dot that marks an answer the learner originally got wrong but later corrected (per "틀렸던 부분은 작게 체크표시"). Quiet on purpose — it records history without re-alarming.

### Focus & Link
- **Focus Ring** (`{colors.focus}` — #458fff): The 2px outline on a focused input, selector, or button (keyboard accessibility).
- **Link** (`{colors.link}` — #1b61c9): Inline links and anchor text. Darkens to `{colors.link-active}` (#1a3866) on press. Note: despite any `--theme_button-background-primary` CSS-variable name, this is the **link** color, not the primary button color.

### Grammar Palette — Part of Speech (품사)
Carried as a **soft token background tint** behind each word, with the matching darker shade as the token's text color. Tints are deliberately low-chroma so a whole sentence of tinted words reads as calm, not as confetti. Seven roles, each clearly separable:

| Token | Role (품사) | Tint (background) | Ink (text) |
|---|---|---|---|
| `{colors.pos-noun}` | 명사 (noun) | #e8f0fb | #1f538f |
| `{colors.pos-pronoun}` | 대명사 (pronoun) | #e2f1ef | #1f6f67 |
| `{colors.pos-verb}` | 동사 (verb) | #fbe8e2 | #a83b1c |
| `{colors.pos-adjective}` | 형용사 (adjective) | #f7eecf | #8a5a12 |
| `{colors.pos-adverb}` | 부사 (adverb) | #ece6f6 | #5a4391 |
| `{colors.pos-preposition}` | 전치사 (preposition) | #e4f1ea | #2a6e45 |
| `{colors.pos-conjunction}` | 접속사 (conjunction) | #ecedf0 | #4f5763 |

Mnemonic logic: noun = steady blue, its sibling pronoun = blue-leaning teal; verb = coral/oxide (the action color, echoing `{colors.signature-coral}`); adjective = warm amber (it "describes/decorates" nouns); adverb = violet; preposition = forest green; conjunction = neutral slate (a structural glue word, deliberately the most colorless).

### Grammar Palette — Sentence Component (문장성분)
Carried as an **underline bracket** spanning a phrase plus a small **label chip** beneath it. This is a separate visual channel from POS tints, so the two never collide. Five families (object splits into direct/indirect, complement covers 주격보어; all share their family hue):

| Token | Role (문장성분) | Bracket / chip color | Chip text |
|---|---|---|---|
| `{colors.comp-subject}` | 주어 (subject) | #3a6ea5 | on light |
| `{colors.comp-predicate}` | 서술어 (predicate / verb) | #b4502e | on light |
| `{colors.comp-object}` | 목적어 (object · 직접/간접) | #3a7d57 | on light |
| `{colors.comp-complement}` | 보어 (complement · 주격보어) | #6a4f9c | on light |
| `{colors.comp-modifier}` | 수식어 (modifier) | #b08416 | on light |

Component hues are intentionally a half-step more saturated than the POS tints (they are thin underlines, not fills, so they can afford it) and follow the same family logic as POS so the two systems reinforce rather than fight: subject↔blue, predicate↔coral, object↔green, complement↔violet, modifier↔amber.

### Signature Surfaces (Celebration & Section Voltage)
Used full-bleed on the result screen and as occasional section punctuation — never as accents on small elements.
- **Coral** (`{colors.signature-coral}` — #aa2d00): The high-score celebration card (full-bleed dark coral, white type, fireworks/trophy).
- **Forest** (`{colors.signature-forest}` — #0a2e0e): The mid-score "잘했어요" result card.
- **Cream** (`{colors.signature-cream}` — #f5e9d4): The soft callout band behind the full Korean-sentence translation on the reveal screen — warm enough to feel like a finished, framed answer.
- **Peach** (`{colors.signature-peach}` — #fcab79), **Mint** (`{colors.signature-mint}` — #a8d8c4), **Yellow** (`{colors.signature-yellow}` — #f4d35e): Optional warm surfaces for the start screen's story/topic cards.

## Typography

### Font Families
The Latin/English system runs **Haas / Haas Groot Disp** (Airtable's licensed display + text type): Haas Groot Disp for display sizes (score, screen titles), Haas Grotesk for everything 24px and below, including the English sentence. Fallback stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif`.

Because this app constantly shows **Korean** (chunk glosses and full translations), a dedicated Korean stack is part of the system: **Pretendard** as the primary, falling through `"Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans KR", sans-serif`. Korean and Latin share size/weight tokens so a mixed English-Korean line stays visually even. Set Korean line-height ~5% looser than Latin for legibility of stacked glosses.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 48px | 500 | 1.1 | 0 | Result-screen score number |
| `{typography.display-lg}` | 40px | 400 | 1.2 | 0 | Start-screen / screen title |
| `{typography.display-md}` | 32px | 400 | 1.2 | 0 | Result card headline ("완료!"), section heads |
| `{typography.sentence}` | 28px | 400 | 1.5 | 0 | **The English quiz sentence** — the largest reading object on the board; loose line-height to leave room for component brackets below words |
| `{typography.title-lg}` | 24px | 400 | 1.35 | 0.12px | Sub-section titles, settings group titles |
| `{typography.title-md}` | 20px | 400 | 1.5 | 0 | Card titles, modal titles |
| `{typography.label-md}` | 16px | 500 | 1.4 | 0 | Selector labels, list labels, legend labels |
| `{typography.button}` | 16px | 500 | 1.4 | 0 | CTA button labels |
| `{typography.body-md}` | 14px | 400 | 1.25 | 0 | Instruction copy, settings field help, nav items |
| `{typography.gloss}` | 14px | 500 | 1.4 | 0 | **해석(chunk)** — the Korean phrase gloss under a component bracket |
| `{typography.translation}` | 16px | 400 | 1.6 | 0 | **해석(문장)** — the full reordered Korean sentence on the cream callout |
| `{typography.index}` | 12px | 500 | 1.2 | 0.16px | The number index (번호) above each word; `{colors.muted}` |
| `{typography.chip}` | 12px | 600 | 1.2 | 0.16px | Component label chips and POS tags |

### Principles
The Haas system prefers weight 400 even at display sizes — a 40px title is **not** bold. Emphasis comes from size, color contrast, and the grammar palette, not from weight; where the system wants weight it pivots to 500 (labels, buttons), and reserves 600 only for the tiny chips/tags that need to punch above their size. Never use 700 in body or display.

The English sentence (`{typography.sentence}`) is set at a generous 1.5 line-height specifically so the **component underline bracket and its Korean gloss** have vertical room to sit beneath each phrase without crowding the next line.

### Note on Font Substitutes
If Haas is unavailable, **Inter Display** (variable) is the closest open-source substitute — drop line-height ~5% to match Haas's tighter cap-height. For Korean, **Pretendard** is the default and needs no substitute; on systems without it the stack falls through to the OS Korean UI font (Apple SD Gothic Neo on macOS/iOS, Malgun Gothic on Windows).

## Layout

### Spacing System
- **Base unit:** 4px (all spacing snaps to 4-multiples).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **Screen padding (vertical):** `{spacing.section}` (96px) top/bottom on desktop for the start and result screens; the in-quiz board tightens to `{spacing.xxl}` (48px) so more of the sentence fits above the fold.
- **Quiz board internal padding:** `{spacing.xl}` (32px).
- **Card internal padding:** `{spacing.xxl}` (48px) inside signature result cards; `{spacing.lg}` (24px) for the cream translation callout and content cards.
- **Word-token spacing:** `{spacing.xs}` (8px) horizontal gap between word tokens; `{spacing.xxs}` (4px) between a word and its component bracket; `{spacing.xs}` (8px) between a bracket and its Korean gloss.
- **Gutters:** `{spacing.lg}` (24px) between cards in grids; `{spacing.md}` (16px) inside the selector tray.

### Grid & Container
- **Reading column:** the quiz board caps at **~840px** centered — narrower than a marketing page, because the priority is comfortable single-line reading of a sentence plus its annotations.
- **Start / settings / result screens:** cap at ~1080px with `{spacing.xxl}` (48px) horizontal margin.
- **Sentence layout:** words flow inline-wrap (like text), each word a vertical stack of `[번호 index] / [word token] / [component bracket] / [chunk gloss]`. Phrases that share a component render a single continuous underline bracket spanning their words.
- **Answer-selector layout:** during answering, each word (for 품사) and each phrase (for 문장성분) gets a selector. On desktop these can sit inline beneath the word; on narrow screens they collapse into a stacked tray (see Responsive).

### Whitespace Philosophy
Whitespace is the dominant atmospheric tool. The quiz board sits in calm white with no decoration so the only color present is grammar/feedback color. There is no gradient, aurora, or mesh anywhere — the board trusts whitespace and the disciplined palette to do the framing.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Page background, header, footer |
| Soft hairline | 1px `{colors.hairline}` border | The quiz board, inputs, selectors, secondary buttons |
| Button rest | Soft drop with subtle blue-tinted glow at low alpha | Primary CTA buttons |
| Focus ring | Outer 2px `{colors.focus}` ring | Keyboard focus on inputs, selectors, buttons |
| Card flat | No shadow; relies on color contrast against canvas | Signature result cards, cream translation callout |
| Token | No shadow; soft tint fill only | Grammar word tokens — depth comes from the tint, never elevation |

The elevation philosophy is **color-block first, shadow second**. Depth is delegated to the contrast between white canvas and tinted tokens / signature cards. There is no soft-glow or heavy-elevation language anywhere.

### Motion & Reward (in scope for this app)
Unlike the source marketing system, this app **does** use motion — but only at reward moments. On a correct reveal, color tints fade in (~200ms). On quiz completion the celebration card animates a reward keyed to accuracy: fireworks (e.g. ≥90%), trophy drop (e.g. ≥70%), or a cheering character (below). Keep all motion brief and non-blocking; it punctuates, it doesn't decorate the answering flow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 6px | Text inputs, dropdowns, **grammar word tokens**, label chips |
| `{rounded.md}` | 10px | Quiz board, content cards, cream translation callout |
| `{rounded.lg}` | 12px | Primary CTA buttons, signature result cards |
| `{rounded.full}` | 9999px / 50% | Legend dots, circular icon buttons, character avatars |

### Token & Bracket Geometry
- Grammar word tokens use `{rounded.sm}` (6px) with `{spacing.xxs}`–`{spacing.xs}` internal padding — small enough to hug the word, never balloon it.
- Component brackets are a **2px underline** in the component color with short upward ticks at each end (an architect's bracket), not a filled box — keeping the POS tint the dominant fill and the component a lighter structural mark.
- Label chips (component name, POS tag) are `{rounded.sm}` pills in `{typography.chip}`.

## Components

> **No hover states documented.** Per the source system's no-hover policy, each spec documents only Default and Active/Pressed (and, where relevant to grading, Selected / Correct / Wrong / Revealed) states. Variants live as separate `components:` entries, never nested state objects.

### Navigation

**`app-header`** — A 64px-tall white bar pinned to the top. App wordmark/logo at left (taps back to start); a right cluster with the current-deck label. The header stays light on every screen and never inverts over the dark result card.

**`footer`** — Minimal light footer (`{colors.canvas}`): app name and version. `{typography.body-md}`.

### Buttons

**`button-primary`** — The signature CTA ("채점하기", "다음 문제", "설정 저장"). Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}`, padding 16px × 24px, rounded `{rounded.lg}`. One per viewport.
- Active: `button-primary-active` darkens to `{colors.primary-active}`.
- Disabled: muted to `{colors.surface-strong}` with `{colors.muted}` text — used for "채점하기" before all answers are filled.

**`button-secondary`** — White outline button ("다시 풀기", "건너뛰기"). Background `{colors.canvas}`, text `{colors.ink}`, rounded `{rounded.lg}`, 1px hairline outline. The natural pair to `{component.button-primary}`.

**`button-secondary-on-dark`** — Same shape as `{component.button-secondary}` but for use on signature result cards. Stays white-on-dark (the system never inverts to a translucent on-dark style).

**`button-icon-circular`** — 40 × 40px circular button, `{colors.canvas}` background, hairline border, `{colors.ink}` icon. Settings gear, audio replay, carousel/back affordances.

**`text-link`** — Inline link in `{colors.link}`, no underline by default, `{typography.body-md}`.

### Quiz Board

**`quiz-board`** — The central working surface. Background `{colors.surface-soft}`, rounded `{rounded.md}`, 1px hairline border, internal padding `{spacing.xl}`. Holds the progress indicator, the sentence with its tokens, and (during answering) the inline selectors. Caps at ~840px wide, centered.

**`progress-indicator`** — Top of the board: "문제 N / 전체" in `{typography.label-md}` `{colors.muted}`, plus a thin 4px progress bar filling in `{colors.primary}`.

**`word-token`** — A single English word in the sentence, the atomic unit of the board. States:
- *Default (answering):* `{typography.sentence}`, `{colors.ink}`, no fill — plain text while the learner is deciding.
- *Selected:* a 1px `{colors.focus}` outline indicates the token currently being answered.
- *Wrong (after grading):* text `{colors.error}` on `{colors.error-soft}` fill, marking the "틀린 부분만 빨갛게" requirement; the rest of the sentence stays neutral.
- *Correct (after grading):* brief `{colors.success}` outline, then settles.
- *Revealed (final, all correct):* fills with its **part-of-speech tint** (`{colors.pos-*}`) and matching ink. If this token was originally answered wrong, a small `{colors.was-wrong}` check sits at its top-right corner.
- Above every token sits its `{typography.index}` number (번호); this is always visible to mirror the worksheet.

**`component-bracket`** — A 2px underline in the relevant `{colors.comp-*}` color spanning all words of one phrase, with a `{typography.chip}` label chip (e.g. "주어", "수식어") centered beneath it. Appears in the revealed state. Direct/indirect object and 주격보어 use their family hue plus a clarifying chip label.

**`chunk-gloss`** — The Korean phrase translation (해석 chunk) in `{typography.gloss}` `{colors.body}`, sitting directly under its `{component.component-bracket}`. This is the per-component Korean meaning required on the reveal screen.

**`legend`** — A collapsible color key, shown on the reveal/result screens. Two rows of `{rounded.full}` dots + `{typography.label-md}` labels: one row for the seven `{colors.pos-*}` roles, one for the five `{colors.comp-*}` families. Lets a learner decode the board without memorizing the palette.

### Answer Selection

**`pos-selector`** — Per-word control for choosing part of speech. A compact dropdown (or segmented control on wide screens) listing the seven 품사 options, each prefixed with its `{colors.pos-*}` dot. Background `{colors.canvas}`, rounded `{rounded.sm}`, hairline border, `{typography.label-md}`. Focus shows `{colors.focus}` ring.

**`component-selector`** — Per-phrase control for choosing sentence component. Same shape as `{component.pos-selector}` but lists the 문장성분 families (주어 / 서술어 / 목적어[직접·간접] / 보어 / 수식어), each with its `{colors.comp-*}` dot. Because components span phrases, this selector attaches to a phrase grouping affordance rather than a single word.

**`selector-tray`** — On narrow layouts, the per-word/per-phrase selectors collapse into a stacked tray beneath the sentence: one row per word (번호 · word · 품사 selector) and a grouping section for 문장성분. Background `{colors.surface-soft}`, rows divided by hairlines.

### Grading & Reveal

**`grade-summary-inline`** — After "채점하기": a compact line above the board stating how many are correct and prompting a retry ("3곳이 틀렸어요. 빨간 부분을 다시 생각해 볼까요?") in `{colors.body}`, with wrong tokens already marked via `{component.word-token}` Wrong state. No answers are revealed yet — only that something is wrong and where.

**`reveal-panel`** — Shown once every answer is correct. The sentence enters its Revealed state (POS tints + component brackets + chunk glosses), and below it a `{component.translation-callout}` carries the full Korean sentence. Any originally-wrong tokens keep their small `{colors.was-wrong}` check so the learner sees what they fixed.

**`translation-callout`** — The full reordered Korean translation (해석 문장). Background `{colors.signature-cream}`, rounded `{rounded.md}`, padding `{spacing.lg}`, type `{typography.translation}` `{colors.ink}`. A soft, finished surface that frames the complete-sentence meaning as the closing answer.

### Result & Celebration

**`result-card`** — The end-of-quiz summary. A full-bleed signature surface whose color is chosen by accuracy: `{colors.signature-coral}` (top tier), `{colors.signature-forest}` (mid tier), or `{colors.surface-dark}` (`{component.result-card-dark}`, lower tier). Rounded `{rounded.lg}`, internal padding `{spacing.xxl}`. Carries the score in `{typography.display-xl}`, a headline in `{typography.display-md}` ("훌륭해요!" / "잘했어요!" / "다시 도전해 볼까요?"), and a `{component.button-secondary-on-dark}` to restart or continue.

**`reward-animation`** — Sits inside `{component.result-card}`, keyed to accuracy: fireworks burst for the top tier, a trophy drop for the mid tier, a cheering character/doll for the lower tier. Brief, celebratory, non-blocking. Exact rendering is implementer's choice; keep it within the card's color world.

### Start Screen

**`start-hero`** — The full-width white-canvas entry screen. No surface card, no gradient — just a title (`{typography.display-lg}`), a one-line description, a deck/story picker, and the primary "시작하기" button in `{spacing.section}` of whitespace.

**`deck-card`** — Optional cards for choosing a story/topic (e.g. "The Town Mouse and the Country Mouse"). Background a warm signature surface (`{colors.signature-peach}` / `{colors.signature-mint}` / `{colors.signature-yellow}`), rounded `{rounded.md}`, padding `{spacing.lg}`. Carries the story title, sentence count, and last-score badge.

## Do's and Don'ts

### Do
- Keep `{component.button-primary}` near-black. The primary CTA is `{colors.primary}`, not the link blue.
- Reserve `{component.button-primary}` for one primary action per viewport.
- Pair `{component.button-primary}` with `{component.button-secondary}` (white + hairline outline) as the signature button row.
- Keep the answering state monochrome; reveal grammar color **only** after a correct answer. Color is the reward, not the wallpaper.
- Use the two grammar channels as designed: POS as **token tint**, sentence component as **underline bracket + chip**. Never collapse them into one channel.
- Keep the grammar tints low-chroma. A full sentence of tinted words must still read as calm — "명확하게 구분되지만 현란하지 않게".
- Mark wrong answers with `{colors.error}` and nothing else; mark fixed-but-originally-wrong tokens with the quiet `{colors.was-wrong}` check.
- Use the signature surface cards (`{colors.signature-coral}` / `{colors.signature-forest}` / `{colors.surface-dark}`) for the celebration moment — that's where the brand voltage belongs.
- Set the English sentence at loose line-height so component brackets and glosses have room beneath each phrase.
- Pair every Latin font token with its Korean counterpart so mixed lines stay even.

### Don't
- Don't make `{colors.link}` (#1b61c9) the primary button color. It's the link color; the primary button is `{colors.primary}` (#181d26).
- Don't use the feedback colors (`{colors.error}`, `{colors.success}`) as brand or grammar accents. They mean "wrong" and "correct" — overloading them confuses grading.
- Don't reuse a `{colors.pos-*}` tint as a `{colors.comp-*}` bracket fill or vice versa. The channels must stay visually distinct even though their family hues rhyme.
- Don't add a gradient, mesh, or aurora to any board or hero. The surfaces are white/soft-white, full stop.
- Don't bold display-weight type. Display sizes are 400/500 by design; 700 reads as a generic template.
- Don't crank the grammar palette saturation to "make it pop". Distinction comes from hue separation, not intensity.
- Don't surface reward motion outside the result card or let it block interaction.
- Don't introduce accent colors beyond the documented feedback, grammar, and signature palettes.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Single-column; header collapses to hamburger; selectors move into `{component.selector-tray}` below the sentence; the sentence wraps freely; result card stays full-bleed; legend collapses behind a toggle |
| Tablet | 768–1024px | Sentence keeps inline tokens; selectors can sit inline or in a compact tray; deck cards 2-up |
| Desktop | 1024–1440px | Full inline answering (selectors under each word); legend expanded; deck cards 3-up; board centered at ~840px |
| Wide | > 1440px | Same as Desktop with more outer breathing room; board stays ~840px and the page adds margin rather than widening the reading column |

### Touch Targets
- `{component.button-primary}` and siblings render at 48 × 48px minimum.
- `{component.pos-selector}` / `{component.component-selector}` rows are ≥ 44px tall.
- `{component.button-icon-circular}` is 40 × 40px; the centered icon compensates visually.

### Collapsing Strategy
- Header collapses to a hamburger (full-screen sheet, not dropdown) at < 768px.
- Inline per-word selectors collapse into `{component.selector-tray}` so small screens never cramp the sentence.
- The legend collapses to a single "색상 안내" toggle on mobile.
- The result card stays full-bleed at every size; only its internal padding tightens.

### Sentence & Annotation Behavior
- Words wrap like normal text; a `{component.component-bracket}` that would break across a line wrap re-renders as two aligned bracket segments rather than stretching across the gap.
- Chunk glosses stay attached beneath their bracket on wrap.
- On very narrow screens, brackets/glosses can stack into the `{component.selector-tray}` rows instead of sitting under the sentence.

## Iteration Guide

1. Focus on ONE component at a time; reference its key directly (`{component.word-token}`, `{component.result-card}`).
2. When adding a grammar color, decide first which **channel** it belongs to: part-of-speech tint (`{colors.pos-*}`) or sentence-component bracket (`{colors.comp-*}`). Never add a color that serves both.
3. Variants of a component (`-active`, `-disabled`, `-focus`, and the grading states Selected/Wrong/Correct/Revealed) live as separate `components:` entries, not nested state objects.
4. Use `{token.refs}` everywhere prose mentions a color, radius, type role, or spacing value. Hex appears at most once next to the reference.
5. Never document hover. Document Default, Active/Pressed, and (for the board) the grading states only.
6. Keep the grammar palette validated for contrast: every `{colors.pos-*}` ink-on-tint pair and every `{colors.comp-*}` chip must clear WCAG AA for its text size.
7. When in doubt about emphasis: bigger type before bolder type; reveal color before adding decoration.

## Known Gaps

- The exact hex values of the warm start-screen surfaces (`{colors.signature-peach}`, `{colors.signature-mint}`, `{colors.signature-yellow}`) are inherited from the source system and may be tuned once real story-deck art exists.
- Reward-animation specifics (fireworks/trophy/character art, exact accuracy thresholds for each tier) are described by intent only and left to the implementer.
- Audio (e.g. sentence pronunciation playback) is anticipated via `{component.button-icon-circular}` but no audio-state spec exists yet.
- The grammar palettes are tuned for light mode only; a dark-mode mapping is not yet defined.
- Hover behavior across all components is intentionally undocumented (no-hover policy inherited from the source system).
