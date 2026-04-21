# SKILL: Pixel-Perfect Figma Section Implementation

## WHEN TO USE THIS SKILL
Use this skill every time you are given a Figma frame URL and asked to
implement it as a section of the landing page. This is the ONLY approved way
to implement or refactor a section — it guarantees pixel-perfect match to
Figma at every viewport size.

## CORE PRINCIPLES (do not skip any)

1. **Figma MCP is the only source of truth.** Never guess a value. If you
   cannot see a property in the MCP response, fetch the specific node again.
2. **Two layouts, one component.** Every section ships both a scaled
   desktop canvas (≥ 768px) and a reflowed mobile layout (< 768px). Never
   ship a section with only one of them.
3. **Absolute pixel coordinates on desktop.** Every child in the desktop
   canvas is positioned with its exact Figma `x, y, width, height`. Tailwind
   layout classes (flex/grid/gap) are only used inside sub-elements where
   Figma itself used Auto Layout.
4. **Inline style for typography.** Font size, weight, line height, and
   letter spacing from Figma are applied via `style={{}}`, not Tailwind text
   utilities — Tailwind rounds to its scale and breaks pixel match.
5. **Shared sub-components.** Desktop and mobile render the SAME sub-
   components with different `fontSize` / `lineHeight` props. Content never
   lives in two places.
6. **Assets come from Figma.** No placeholders, no emoji substitutes, no
   "close enough" icons. Export from MCP to `public/section-[N]/`.
7. **Verification is mandatory.** Screenshot → compare to Figma → list every
   discrepancy → fix → re-screenshot. Do not mark done until the screenshots
   are visually identical.

---

## STEP-BY-STEP ROADMAP

### Step 0 — Context load (before touching any tool)
Read in order:
1. `GEMINI.md` — project rules
2. `AGENTS.md` — Next.js version rules
3. `PROGRESS.md` — what is already done and what frame ID maps to what file
4. This skill file

### Step 1 — Identify the section
Fetch the frame from Figma MCP using `get_figma_data` with the provided
`fileKey` and `nodeId`. From the response, determine:
- **What the section is** — read the frame name, badge text, and heading.
- **Where it goes in `page.tsx`** — look at the frame's `locationRelativeToParent.y`
  on the parent artboard. Lower y = higher on page.
- **Canvas size** — the frame's `dimensions.width` and `dimensions.height`.
  These are your `CANVAS_W` and `CANVAS_H`.

If the page-order parent is large and hard to read, search the MCP dump for
all sibling frame IDs and sort them by `y` to place the new section.

### Step 2 — Decide the file name
- Check `src/components/sections/home/` for an existing matching file.
- If missing, create `PascalCase.tsx` using a descriptive name based on the
  section's visible heading / badge. Examples:
    - Badge "THE CONCEPT" + "App Store" heading → `Concept.tsx`
    - "Built for reliability and trust" → `TrustReliability.tsx`
- NEVER name a file after the Figma frame ID.

### Step 3 — Read every property from MCP
For every child node (recursively), record:
- `locationRelativeToParent.x`, `y`
- `dimensions.width`, `height`
- `fills` (solid, linear gradient, radial gradient — capture the stops and angle)
- `strokes` + `strokeWeight` + `borderRadius`
- `effects` (box-shadow, blur — capture blur radius and offsets exactly)
- `textStyle` (fontFamily, fontWeight, fontSize, lineHeight, letterSpacing, textAlign)
- `text` content including `\n` line breaks

MCP uses a `globalVars.styles` table — resolve every `layout_XXX`, `fill_XXX`,
`style_XXX`, `effect_XXX` reference before writing code.

### Step 4 — Write a LAYOUT MAP comment block
Before writing any code, write a comment at the top of the file
summarising every value. Future agents (and you) should be able to regenerate
the section from this comment alone. Use this template:

```typescript
// ─────────────────────────────────────────────────────────────────────────
// [ComponentName].tsx — "[Section title]" section
// Figma frame: [FRAME_ID] "[frame name]"  (W × H, y=[page-y])
//
// Responsive strategy:
//   ≥ 768px   →  Scaled Figma canvas (100cqw / [CANVAS_W]px)
//   < 768px   →  Stacked reflow, fluid font sizes
//
// LAYOUT MAP (scaled canvas — coords are section-absolute, in Figma px):
//   Canvas     [W] × [H],   bg [color]
//   [Node]     (x, y)   [w] × [h]   [style summary]
//   [Node]     (x, y)   [w] × [h]   [style summary]
//   ...
// ─────────────────────────────────────────────────────────────────────────
```

### Step 5 — Extract assets to `public/section-[N]/`
For every image / svg node discovered in Step 3:
1. Call `download_figma_images` MCP tool with the node id.
2. Save under `public/section-[N]/[descriptive-name].svg` (or `.png` if the
   SVG download fails or is malformed — some complex SVGs export with `NaN`
   path segments and must be fetched as PNG instead).
3. If the download returns 0×0 or the MCP location differs from the project
   path, `Copy-Item` the file from the MCP output path into the project.
4. NEVER use a placeholder. If an asset cannot be exported, inline the SVG
   data directly from the MCP `fills` / children payload.
5. If an asset is truly missing after all attempts, log it to `PROGRESS.md`
   under `MISSING ASSETS:` and stop.

### Step 6 — Token check
1. Read `src/tokens/design-tokens.ts`.
2. For every value from Step 3: if a token for it exists, use the token
   reference (`colors.black`, `typography.fonts.inter`, etc).
3. If a value is used ≥ 2 times in the section and no token exists for it,
   append a new token at the bottom of its group. Never duplicate, rename,
   or reorder existing tokens.
4. One-off values (a single `#BA9EFF` badge text color used nowhere else in
   the codebase) may be declared as `const` at the top of the component
   file — this keeps the token file clean while still being auditable.

### Step 7 — Implement the section (dual-layout pattern)

Use exactly this skeleton for every new section:

```typescript
import Image from "next/image";
import { colors, typography } from "@/tokens/design-tokens";

const CANVAS_W = /* from Figma */;
const CANVAS_H = /* from Figma */;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

export default function SectionName() {
  return (
    <>
      <SectionDesktop />
      <SectionMobile />
    </>
  );
}

function SectionDesktop() {
  return (
    <section
      className="relative hidden w-full overflow-hidden md:block"
      style={{
        backgroundColor: /* token or Figma value */,
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
      }}
    >
      <div
        className="absolute left-0 top-0"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
        }}
      >
        {/* Every child positioned with absolute Figma x, y, width, height */}
      </div>
    </section>
  );
}

function SectionMobile() {
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden"
      style={{ backgroundColor: /* same as desktop */ }}
    >
      <div className="flex flex-col gap-8 px-6 py-16">
        {/* Same sub-components, with mobile-friendly font sizes */}
      </div>
    </section>
  );
}
```

#### Rules for the scaled desktop canvas
- Wrapper `<section>` MUST have:
    - `hidden md:block`
    - `aspectRatio: ${CANVAS_W} / ${CANVAS_H}` → reserves proportional height.
    - `containerType: "inline-size"` → enables `cqw` units.
    - `overflow-hidden` → clips oversized decorations.
- Inner canvas `<div>` MUST have:
    - `absolute left-0 top-0` (NOT `mx-auto` — breaks left edge alignment).
    - Fixed pixel `width: CANVAS_W`, `height: CANVAS_H`.
    - `transform: scale(calc(100cqw / ${CANVAS_W}px))`.
    - `transformOrigin: "top left"`.
- Every child MUST be positioned with `position: absolute` and Figma's exact
  `left`, `top`, `width`, `height`. Do NOT use `top-[82px]` Tailwind arbitrary
  values — they round with the Tailwind purger in edge cases. Use inline style.
- Typography MUST use inline `style={{ fontFamily, fontWeight, fontSize,
  lineHeight, letterSpacing, color }}`. No Tailwind `text-*` utilities for
  font size or line height.
- Gradients MUST be reproduced exactly from Figma's `GRADIENT_LINEAR` /
  `GRADIENT_RADIAL` stops and angle. For text gradients use
  `WebkitBackgroundClip: "text"` + `WebkitTextFillColor: "transparent"`.
- Shadows from `effects` MUST be reproduced in the exact order and offsets.
  Tailwind's `shadow-xl` equals `0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)`
  which matches Figma's default card shadow — use it when values match, else
  inline the `boxShadow` string.

#### Rules for the mobile layout
- `block md:hidden` wrapper.
- Plain Tailwind flex/grid flow with `px-6 py-16` base padding.
- Fluid font sizes via `clamp()` inline or Tailwind responsive utilities.
  Heading example: `fontSize: "clamp(32px, 9vw, 48px)"`.
- Reuse the SAME sub-components as desktop; just pass different
  `fontSize` / `lineHeight` props.
- Keep the brand feeling: preserve gradients, colors, and critical images
  (hero robot, card illustrations). Simplify layout, not identity.
- For horizontal partner / logo strips: use `overflow-x-auto` with a flex
  row so all logos stay reachable by scroll.

#### Shared sub-components pattern
When desktop and mobile render the same element with different sizing,
extract it:

```typescript
function SectionHeading({ fontSize, lineHeight }: {
  fontSize: number; lineHeight: string;
}) {
  return (
    <h2 style={{
      margin: 0,
      fontFamily: typography.fonts.poppins,
      fontWeight: 500,
      fontSize,
      lineHeight,
      color: colors.black,
    }}>
      [copy here — ONE place only]
    </h2>
  );
}
```

Then:
- Desktop calls `<SectionHeading fontSize={48} lineHeight="68px" />`.
- Mobile calls `<SectionHeading fontSize={32} lineHeight="1.15" />`.

This guarantees text content never drifts between layouts.

### Step 8 — Wire into `page.tsx`
1. Read `src/app/page.tsx`.
2. Add the import in alphabetical/positional order with existing imports.
3. Insert `<SectionName />` at the correct position based on Figma y-order.
4. Keep the numbered comments (`{/* 3. ... */}`) consistent — shift them
   only if the new section pushes others down.
5. Do NOT move or modify any other section.

### Step 9 — Verification loop (mandatory, non-skippable)
1. Start the dev server if not running: `npm run dev`.
2. Navigate the browser agent to `http://localhost:3000/`.
3. Resize to 1280 × 800 (exact Figma canvas width) and take a screenshot of
   the section.
4. Compare, pixel-by-pixel mentally, against the Figma frame:
    - Element positions (x, y)
    - Element dimensions (w, h)
    - Text content and line breaks
    - Font family, size, line height, color
    - Background colors, gradients, images
    - Borders, border-radius, shadows
    - Spacing / gaps / padding
5. Write a numbered discrepancy list with EXACT pixel values:
   > 1. Heading `top` is 96px but Figma has 82px — move up 14px.
   > 2. Badge border is `rgba(186,158,255,0.1)` but Figma is `rgba(186,158,255,0.2)`.
6. Fix every item. Take a second screenshot.
7. Then resize to 375 × 812 (iPhone) and take a mobile screenshot.
8. Verify the mobile layout is readable, stacked, and preserves brand
   (colors, gradients, key images).
9. Only when BOTH screenshots look right, proceed.

### Step 10 — Progress tracking
1. Append to `PROGRESS.md`:
   `- [ ] Frame [FRAME_ID] → [FileName].tsx (awaiting user screenshot)`
2. After user confirms visually, change to `[x]`.
3. Do nothing else to `PROGRESS.md`.

### Step 11 — Handoff
Describe to the user, in one message:
- What the section is (name, badge, heading).
- Where you placed it in `page.tsx`.
- What assets you exported.
- What tokens you added (if any).
- Any one-off constants declared locally and why.
- The verification screenshots you took.
- Request: "Please share a screenshot at your real desktop width so I can
  mark [x]."

## FORBIDDEN ACTIONS
- Skipping Step 9 (verification loop).
- Using Tailwind `text-base`, `text-lg`, `text-xl` etc. for Figma typography.
- Using `vw` instead of `cqw` for the scale calculation (double-counts
  scrollbar width and causes horizontal overflow).
- Using `mx-auto` on the inner 1280px canvas (breaks left edge alignment).
- Capping the scale with `min(1, …)` (creates black bars on wide viewports).
- Placing the mobile wrapper BEFORE the desktop wrapper in the JSX — screen
  readers will read both; keep them in reading order (desktop first).
- Hardcoding a color that already exists as a token.
- Duplicating text content between desktop and mobile instead of using a
  shared sub-component.
- Moving or reordering any OTHER section in `page.tsx`.
- Modifying any file outside the section file, its assets folder, `page.tsx`,
  `design-tokens.ts`, and `PROGRESS.md`.

## REFERENCE IMPLEMENTATIONS
These two sections are the canonical examples. Read them before implementing
a new section:
- `src/components/sections/home/Hero.tsx` (Figma 500:21924) — canvas with
  complex overlapping decorations (ellipses, circuits, robot), absolute
  logo strip, gradient text.
- `src/components/sections/home/Concept.tsx` (Figma 500:22431) — canvas
  with two-column layout, staggered cards, shared sub-components pattern
  for badge / heading / body / list / card.

## QUICK TEMPLATES

### Desktop absolute child
```typescript
<div
  className="absolute"
  style={{ left: X, top: Y, width: W, height: H }}
>
  {/* content */}
</div>
```

### Desktop heading with gradient text
```typescript
<h2
  className="absolute m-0"
  style={{
    left: X, top: Y, width: W,
    fontFamily: typography.fonts.poppins,
    fontWeight: 500,
    fontSize: FS, lineHeight: `${LH}px`,
    letterSpacing: `${LS}em`,
    background: `linear-gradient(${angle}deg, ${stop1}, ${stop2})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  }}
>
  {text}
</h2>
```

### Mobile heading (fluid size)
```typescript
<h2
  style={{
    margin: 0,
    fontFamily: typography.fonts.poppins,
    fontWeight: 500,
    fontSize: "clamp(32px, 9vw, 48px)",
    lineHeight: 1.15,
    color: colors.black,
  }}
>
  {text}
</h2>
```

### Card with Figma shadow
```typescript
<div
  className="shadow-xl"
  style={{
    backgroundColor: "#fff",
    border: `1px solid ${CARD_BORDER}`,
    borderRadius: 16,
    padding: 16,
  }}
>
  {/* content */}
</div>
```

## CHECKLIST (run before declaring done)
- [ ] Canvas `aspectRatio` matches Figma frame's w/h ratio.
- [ ] Scale uses `100cqw`, not `100vw`.
- [ ] `containerType: "inline-size"` is on the section.
- [ ] Inner canvas is `absolute left-0 top-0`.
- [ ] Every child has absolute x, y, w, h from Figma.
- [ ] Typography uses inline style for font size + line height.
- [ ] All gradients reproduce Figma's angle and stops exactly.
- [ ] All shadows reproduce Figma's `effects` exactly.
- [ ] Assets exported to `public/section-[N]/`.
- [ ] Design tokens reused where possible; new ones appended only.
- [ ] Mobile wrapper is present and readable at 375×812.
- [ ] Text content lives in shared sub-components, not duplicated.
- [ ] `page.tsx` has the new section imported and rendered in correct order.
- [ ] No other section file was touched.
- [ ] `PROGRESS.md` updated with the frame→file mapping.
- [ ] `ReadLints` returns zero errors on the new file.
- [ ] Desktop and mobile screenshots both taken and verified against Figma.
