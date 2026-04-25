# AGENTS.md — Project Rules for Cursor + Codex

> Read this file first every session before touching any tool or file.
> Then read CLAUDE.md and PROGRESS.md.
> The Figma plugin + skill handles all Figma MCP tool calls automatically —
> do not override or re-implement that flow. This file adds project-specific
> rules on top of it.

@CLAUDE.md

---

## Session Start — Ground Truth Check

Before implementing anything, check the live file system:

```bash
find src/app -name "page.tsx" | sort
ls src/components/sections/
ls public/ | sort
```

Trust the file system over PROGRESS.md. If a file exists on disk → it is
already built. Do not rebuild or overwrite it.

---

## Figma Skill Output → Project Translation Rules

The Figma skill gives you React + Tailwind as a structural reference.
Before writing any code, translate it into this project's conventions:

**Typography** — never use Tailwind `text-*` utilities for font sizes.
Convert every font size, line height, weight, letter spacing to inline
`style={{}}` with values from the Figma output.

**Colors** — check `src/tokens/design-tokens.ts` first. If a color from
the Figma output matches a token → use the token. Never hardcode a hex
that already exists as `colors.xxx`.

**Border radius** — always use `radiuses` tokens. Never hardcode a px value.
Import `radiuses` from `@/tokens/design-tokens` in every section file.

**Layout** — ignore the Figma skill's absolute positioning output for the
outer layout. Use the cqw canvas pattern from CLAUDE.md instead:
- Desktop: scaled cqw canvas (`calc(100cqw / CANVAS_W px)`)
- Mobile: flex reflow with `clamp()` font sizes
- Children inside the canvas: position absolute with exact Figma x/y/w/h

**Assets** — the Figma skill provides localhost asset sources. Use them
directly — never use placeholders, never add icon packages.
Save final assets to `public/section-[N]-[page-name]/` before shipping.

---

## What Is Already Built — Do Not Touch

Check the live folders above. Additionally these are permanently done:
- `src/components/shared/Header.tsx`
- `src/components/shared/Footer.tsx`
- `src/app/layout.tsx`
- All of `src/components/sections/home/`
- All of `src/components/sections/marketplace/`

---

## Browser Verification — Run When Prompted

Do not run verification automatically after each section unless the user
says "verify" or "check" or pastes this prompt:

```
Verify the last implemented section:
1. npm run dev (if not running)
2. Open browser agent → localhost:3000/[route]
3. Viewport CANVAS_W px → screenshot → compare vs Figma get_screenshot
4. List discrepancies with exact px values → fix → re-screenshot
5. Viewport 1440px → confirm edge-to-edge, no overflow
6. Viewport 375px → confirm mobile layout readable + brand preserved
7. All three pass → mark [x] in PROGRESS.md
```

This keeps the implementation loop fast and batches verification
at natural checkpoints rather than after every single section.

---

## File Hierarchy

```
AGENTS.md          ← you are here
CLAUDE.md          ← master rules (stack, tokens, structure, forbidden)
PROGRESS.md        ← section status tracker
NEW_PAGE.md        ← paste to start a full automated page build
.cursor/rules/
  figma-section.mdc  ← Cursor only, auto-triggers on Figma frame links
```