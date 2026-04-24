# CLAUDE.md — Master Agent Rules

> **Read this file first, every session, before touching any tool or file.**
> After this, read `PROGRESS.md` to know what is done and what is next.
> This file supersedes and replaces: `GEMINI.md`, `AGENTS.md`, `DEVELOPMENT_PROTOCOL.md`.

---

## ⚠️ Next.js Version Warning

This project uses a specific version of Next.js with the App Router.
**APIs, conventions, and file structure may differ from your training data.**
Before writing any Next.js-specific code, check `node_modules/next/dist/docs/`
for the relevant guide. Never assume behaviour from older Next.js versions.

---

## What Is Already Built — Do Not Touch

### Home Page (complete)
All 11 sections of `src/app/page.tsx` are implemented and verified. See `PROGRESS.md`.
Do not modify any home page section file unless explicitly instructed.

### Marketplace Page (complete)
All sections of `src/app/marketplace/page.tsx` are implemented and verified.
Component folder: `src/components/sections/marketplace/`
Do not modify any marketplace section file unless explicitly instructed.

### Shared Components (complete, permanent)
| File | Status |
|------|--------|
| `src/components/shared/Header.tsx` | ✅ Done — never modify |
| `src/components/shared/Footer.tsx` | ✅ Done — never modify |
| `src/app/layout.tsx` | ✅ Done — do not modify |
| `src/components/motion/Reveal.tsx` | ✅ Done — use as-is |
| `src/components/motion/Float.tsx` | ✅ Done — use as-is |
| `src/tokens/design-tokens.ts` | ✅ Active — read before every section |

### Established Patterns (follow exactly)
- **Dual-layout**: every section ships `hidden md:block` desktop (cqw canvas) + `block md:hidden` mobile (flex reflow). Already proven in Hero, Concept, Compare, and 8 others.
- **Reference implementations**: `src/components/sections/home/Concept.tsx` is the canonical example for shared sub-components. Read it before implementing any new section.
- **Hero.tsx is NOT a reference** for desktop/mobile text — it duplicates copy between layouts, which is a known violation. Follow Concept.tsx instead.

---

## Tech Stack — Permanent, Never Change

| Layer | Choice |
|-------|--------|
| Framework | Next.js App Router |
| Language | TypeScript |
| Styling | Tailwind CSS for layout/spacing + inline `style={{}}` for Figma typography and canvas coords |
| Images | `next/image` only — never `<img>` for project assets |
| Animation | `framer-motion` (already installed) — use `useReducedMotion` fallbacks |

---

## The Inline Style Rule

**Tailwind CSS handles**: layout, spacing, flex, grid, padding, margin, visibility (`hidden md:block`), overflow.

**Inline `style={{}}` is required for**:
1. All typography from Figma: `fontFamily`, `fontWeight`, `fontSize`, `lineHeight`, `letterSpacing`, `color`.
   — Tailwind text utilities round to its scale and break pixel match.
2. All coordinates inside the cqw canvas: `left`, `top`, `width`, `height`.
   — Tailwind arbitrary values (e.g. `left-[82px]`) can be purged in edge cases.
3. Gradients, box shadows, and border-radius when the exact Figma value doesn't match a Tailwind preset.
4. `aspectRatio`, `containerType`, `transform`, `transformOrigin` on the canvas wrapper.

**Never use inline style for**: layout structure (use Tailwind flex/grid), colours that already exist as a design token and can be set via a className, anything outside the cqw canvas that could be a standard Tailwind class.

---

## File Structure — Law

```
src/
  app/
    page.tsx                          # Home (complete — do not touch)
    marketplace/
      page.tsx                        # Marketplace (complete — do not touch)
    [page-name]/
      page.tsx                        # New pages go here
  components/
    sections/
      home/                           # Home sections (complete — do not touch)
      marketplace/                    # Marketplace sections (complete — do not touch)
      [page-name]/                    # New page sections go here
    shared/                           # Header, Footer (complete — do not touch)
    motion/                           # Reveal, Float (complete — do not touch)
  tokens/
    design-tokens.ts                  # Single token file — always read first

public/
  section-1/ → section-11/           # Home assets (done)
  section-1-marketplace/ → section-10-marketplace/  # Marketplace assets (done)
  section-1-[page-name]/             # New page assets — restart from 1 per page
  section-2-[page-name]/
  ...
  shared/                             # Header, Footer, global brand (never touch)
```

**Folder naming**: always kebab-case.
- Page `about` → `src/app/about/`, `src/components/sections/about/`, `public/section-1-about/`
- Page `agent-store` → `src/app/agent-store/`, `src/components/sections/agent-store/`, `public/section-1-agent-store/`

**Section files**: PascalCase, no "Section" suffix → `Hero.tsx`, `Compare.tsx`.
**Never create**: `SECTION_MANIFEST.json`, `PAGE_THEME.json`, or any `.json` in root.

---

## page.tsx Shell — Follow Marketplace Pattern Exactly

Every page.tsx imports Header and Footer directly. Do NOT rely on layout.tsx:

```tsx
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import SectionOne from "@/components/sections/[page-name]/SectionOne";
// ... more section imports in page order

export default function PageName() {
  return (
    <div className="min-h-screen overflow-x-clip text-white selection:bg-blue-500/30">
      <Header />
      <SectionOne />
      {/* sections in Figma y-order */}
      <Footer />
    </div>
  );
}
```

Never import `fs from 'fs'` or any Node.js modules in page.tsx.

---

## Section Reuse Rule

Before implementing any section, check if a visually identical section already
exists in `home/` or `marketplace/`. If yes — import it directly, do not rebuild.

Check in this order:
1. `src/components/sections/home/`
2. `src/components/sections/marketplace/`

---

## Design Token Reference

File: `src/tokens/design-tokens.ts`

### Colors (import as `colors`)
```
colors.white, colors.black
colors.brand.blueStart, .blueEnd, .blue, .cyan
colors.gradient.purpleLight, .purpleTransparent
colors.text.dark, .body, .heading, .bodyMuted, .networkPill,
       .inputLabel, .badgeDark, .nodeLabel, .badgePurple, .badgeBlue, .badgeUpcoming
colors.background.section, .sectionAlt, .badgePurple, .badgeBlue,
                .badgeDark, .trustSection, .trustCard, .faq, .networkPill
colors.status.green
colors.overlay.blueSubtle, .blueFaint, .whiteGlass, .whiteBorder,
              .whiteNode, .badgeShadowPurple, .badgeShadowBlue
colors.border.card, .networkPill, .timeline, .footer, .footerStrong
```

### Typography (import as `typography`)
```
typography.fonts.inter     → "var(--font-inter, 'Inter', sans-serif)"
typography.fonts.poppins   → "var(--font-poppins, 'Poppins', sans-serif)"
typography.fonts.jakarta   → "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)"
typography.fonts.mono      → "'Liberation Mono', monospace"
```

### Radiuses (import as `radiuses`)
```
radiuses.card      = "24px"
radiuses.cardLg    = "32px"
radiuses.cardSm    = "12px"
radiuses.pill      = "16px"
radiuses.full      = "9999px"
radiuses.icon      = "12px"
radiuses.inputIcon = "8px"
radiuses.tag       = "4px"
```

Import `radiuses` in every section file. Never hardcode a `borderRadius` value
that matches one of the above.

### Token Rules
1. Read the file before every section — never guess what exists.
2. If a matching token exists → use it. Never hardcode a value that has a token.
3. New value used ≥ 2 times in the section → append to bottom of its group.
4. New value used only once → declare as `const` at top of the component file.
5. Never rename, reorder, or delete existing tokens.

---

## Position: Absolute Rule

**Inside the scaled desktop cqw canvas div**: every child element MUST use
`position: absolute` with inline `left`, `top`, `width`, `height` from Figma.
This is the entire point of the cqw canvas technique.

**Outside the canvas** (mobile layout, page structure, shared components):
never use `position: absolute` unless elements visually overlap in the Figma design.
Use Tailwind flex and grid for all structural layout.

---

## Figma MCP Rules

- **Figma MCP is the sole source of truth.** Never guess or estimate a value.
- Always resolve `globalVars.styles` references (`layout_XXX`, `fill_XXX`, `style_XXX`, `effect_XXX`) before writing code.
- Frames are unnamed (e.g. "Frame 2147225698") — name files descriptively from visual content, never from frame IDs.
- Log the mapping in `PROGRESS.md` as: `- [ ] Frame 2147225698 → Hero.tsx`

---

## Icons and Images

**Folder structure:**
- Home section assets → `public/section-[N]/` (e.g. `public/section-1/`)
- New page section assets → `public/section-[N]-[page-name]/` (e.g. `public/section-1-about/`)
  Numbers restart from 1 for each new page
- Global/shared assets → `public/shared/`
- Never create `public/images/` subfolders
- Never use global sequential numbers across pages

**Handling assets:**
1. Check `public/` first — if the asset exists, use it directly.
2. If not: export via `download_figma_images` MCP tool → save to the correct folder.
3. Complex SVGs that export with `NaN` paths → export as PNG instead.
4. If export fails completely → inline SVG data from the MCP `fills`/children payload.
5. **Never use a placeholder.** Never skip an icon.
6. If an asset cannot be resolved after all attempts → log under `MISSING ASSETS:` in `PROGRESS.md` and stop.
7. Background gradients and overlays must be read from Figma exactly — never default to white or transparent.

---

## Visual Verification

Cursor's built-in browser agent handles verification automatically.
After every section the agent must:

1. Navigate to `localhost:3000/[page-route]` in the browser agent
2. Set viewport to exactly **1280px wide** (= CANVAS_W, gives true 1:1 scale match — no fixed height)
3. Scroll to the section being verified and screenshot it
4. Fetch the Figma frame image via Figma MCP for comparison
5. List every discrepancy with exact px values, fix them, re-screenshot
6. Set viewport to **375px wide**, scroll to section, screenshot mobile
7. Mark `[x]` in PROGRESS.md only after both viewports match Figma

No manual user screenshots required.

---

## Auto-Loop Verification Protocol

When running in AUTO-LOOP MODE, after each section the browser agent must:

1. Navigate to `localhost:3000/[page-route]`
2. Set viewport to exactly **1280px wide**
3. Scroll to the section being verified — screenshot that section only
4. Fetch the Figma frame image via Figma MCP
5. Compare and list discrepancies with exact px values
6. Fix, re-screenshot, confirm
7. Resize to **375px wide**, scroll to section, screenshot mobile
8. Only after both pass → mark `[x]` in PROGRESS.md → proceed immediately to next section

If a discrepancy cannot be resolved after 3 fix attempts:
- Log it under known issues in `PROGRESS.md`
- Mark `[!]` instead of `[x]`
- Continue to next section — do not block the loop

---

## AUTO-LOOP MODE

If the user provides multiple frame node IDs in one message, the agent runs
the full implementation + verification process for section 1, confirms it
passes, updates PROGRESS.md, then immediately moves to section 2 —
no pause, no waiting for user input between sections.

Only stop the loop if:
- A section has a truly unresolvable asset after all attempts (log `[!]`, continue)
- A discrepancy cannot be fixed after 3 attempts (log `[!]`, continue)
- The user explicitly says "stop after this section"

After ALL sections are done, send one final summary:
- Full page screenshot at 1280px
- Full page screenshot at 375px
- List of any `[!]` issues needing attention
- Tokens added
- Missing assets

---

## When Implementing a Section

Follow the Cursor Rule **`figma-section.mdc`** step by step.
That rule is the canonical implementation protocol.
Never improvise, shortcut, or skip steps.

---

## Forbidden — Never Do These

- Modify `Header.tsx`, `Footer.tsx`, `layout.tsx`, or any complete home or marketplace section.
- Use Tailwind `text-base / text-lg / text-xl` for Figma font sizes.
- Use `vw` in the scale formula — always `cqw` (avoids scrollbar double-counting).
- Use `mx-auto` on the inner canvas div (breaks left-edge alignment).
- Cap scale with `min(1, …)` (creates black bars on wide viewports).
- Use placeholder images or emoji substitutes for missing assets.
- Hardcode a value that exists as a design token.
- Hardcode a `borderRadius` value that exists in `radiuses` tokens.
- Duplicate heading/body/button text between SectionDesktop and SectionMobile
  — use shared sub-components (Concept.tsx pattern), never Hero.tsx pattern.
- Move or reorder any section in an existing `page.tsx`.
- Create `SECTION_MANIFEST.json`, `PAGE_THEME.json`, or any undeclared `.json` files.
- Import `fs from 'fs'` or any Node.js module in a page.tsx file.
- Create `public/images/` subfolders — use `public/section-[N]-[page-name]/` only.
- Reuse sequential section numbers across pages — each page restarts from 1.
- Modify any file not in: the new section file, its assets folder,
  `page.tsx`, `design-tokens.ts`, `PROGRESS.md`.