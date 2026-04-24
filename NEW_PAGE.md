# NEW PAGE KICKOFF — Fill in the blanks then paste entire file into Cursor

---

## AGENT INSTRUCTIONS — READ EVERYTHING BEFORE TOUCHING ANY FILE

You are starting a full page build in AUTO-LOOP MODE.
Read and follow every instruction below exactly and in order.
Do not skip steps. Do not ask for confirmation between sections.

---

## STEP A — Load Context (do this before anything else)

Read these files in this exact order:

1. `CLAUDE.md` — master rules, what is already built, token reference
2. `PROGRESS.md` — what pages and sections are done, current known issues
3. `src/tokens/design-tokens.ts` — full token list
4. `src/components/sections/home/Concept.tsx` — canonical reference implementation
5. `src/app/marketplace/page.tsx` — canonical page.tsx shell pattern

Do not proceed to Step B until all five files are read and understood.

---

## STEP B — Page Details

```
Page name (display):      [e.g. About]
Route:                    src/app/[page-name]/page.tsx
Component folder:         src/components/sections/[page-name]/
Asset folder pattern:     public/section-[N]-[page-name]/   ← N restarts from 1
Figma file key:           [paste file key from Figma URL]
```

---

## STEP C — Section Frame IDs (Figma y-order, top → bottom)

```
Section 1:  [paste node ID e.g. 500:12345]
Section 2:  [paste node ID]
Section 3:  [paste node ID]
Section 4:  [paste node ID]
Section 5:  [paste node ID]
Section 6:  [paste node ID]
Section 7:  [paste node ID]
Section 8:  [paste node ID]
```

Add or remove lines as needed. Order must match Figma top-to-bottom.

---

## STEP D — Create the Page Shell First

Before implementing any section, create the empty page file:

```
src/app/[page-name]/page.tsx
```

Use this exact shell structure (marketplace pattern):

```tsx
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
// Section imports will be added here as each section is completed

export default function [PageName]Page() {
  return (
    <div className="min-h-screen overflow-x-clip text-white selection:bg-blue-500/30">
      <Header />
      {/* Sections will be added here in order */}
      <Footer />
    </div>
  );
}
```

Also create the empty component folder:

```
src/components/sections/[page-name]/
```

Confirm both exist before starting the section loop.

---

## STEP E — Section Reuse Check

Before building any section, scan these folders for a visually identical component:

- `src/components/sections/home/`
- `src/components/sections/marketplace/`

If a match exists → import it directly into `page.tsx`, skip implementation,
mark `[x]` in PROGRESS.md with note "reused from [folder]/[File].tsx", move to next section.

---

## STEP F — AUTO-LOOP: Implement Each Section

For every section frame ID in Step C, run the full `figma-section.mdc` process:

```
Step 0  → Read context (already done in Step A — confirm tokens + Concept.tsx still in context)
Step 1  → Fetch frame from Figma MCP
Step 2  → Determine file name (descriptive PascalCase, never frame ID)
Step 3  → Read ALL properties recursively from MCP (resolve all globalVars.styles)
Step 4  → Write layout map comment at top of file
Step 5  → Export all assets to public/section-[N]-[page-name]/
Step 6  → Token check — reuse existing, append new, local const if single-use
Step 7  → Implement component (desktop cqw canvas + mobile reflow)
Step 8  → Wire into page.tsx (import + JSX in correct position)
Step 9  → Verification loop:
            → Browser agent: navigate localhost:3000/[route]
            → Viewport CANVAS_W px wide → screenshot → compare vs Figma MCP frame
            → List discrepancies with exact px values → fix → re-screenshot
            → Viewport 1440px → confirm edge-to-edge scaling
            → Viewport 375px → confirm mobile layout
            → All three must pass before continuing
Step 10 → Update PROGRESS.md with [x] and full section detail block
Step 11 → Immediately begin next section — no pause, no user prompt
```

Only stop the loop if:

- Asset is unresolvable after all attempts → log `[!]`, continue
- Discrepancy unfixable after 3 attempts → log `[!]`, continue
- You see the words "STOP HERE" in this file

---

## STEP G — Final Report (after all sections complete)

Send one message with:

1. Full page screenshot at CANVAS_W px (desktop)
2. Full page screenshot at 375px (mobile)
3. PROGRESS.md summary — list all sections with status
4. Any `[!]` issues that need human attention
5. All tokens added to `design-tokens.ts`
6. All missing assets logged
7. Confirmation that `page.tsx` imports are in correct Figma y-order

---

## HARD RULES — AGENT MUST NOT VIOLATE THESE

- `cqw` not `vw` in scale formula
- `absolute left-0 top-0` on inner canvas div — never `mx-auto`
- Inline `style` for ALL typography — never Tailwind `text-*` utilities
- `radiuses` tokens for ALL border radius — never hardcoded values
- Shared sub-components for text — never duplicate copy between desktop and mobile
- `next/image` only — never `<img>`
- Never import `fs from 'fs'` in page.tsx
- Never create public/images/ subfolders
- Never touch: Header.tsx, Footer.tsx, layout.tsx, home sections, marketplace sections
- Never mark `[x]` without browser agent screenshot confirmation at all three viewports

