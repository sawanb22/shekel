# SHAKEEL PROJECT — AGENT RULES

## TECH STACK — PERMANENT, NEVER CHANGE
- Framework: Next.js with App Router
- Language: TypeScript
- Styling: Tailwind CSS only
- No inline styles, no CSS modules, no styled-components

## FILE STRUCTURE — LAW

### Sections
- All sections live in: src/components/sections/[page-name]/
- File name: PascalCase, no "Section" suffix needed → Hero.tsx, Compare.tsx
- One section per file, always
- Page subfolders: home, about, services, contact (lowercase, hyphen if multi-word)

### Pages (Next.js App Router)
- Home page is src/app/page.tsx
- Other pages are src/app/[page-name]/page.tsx
- Page files ONLY import and render sections in order — no logic, no styling

### Shared Components
- Reusable across pages: src/components/shared/
- Single-page specific UI pieces: keep inside the section file itself

### Public Assets
- Section-specific assets: public/section-[number]/
- Logos and global assets: public/logos/

### Tokens
- Only file: src/tokens/design-tokens.ts
- Never hardcode colors, font sizes, or spacing in components

## SECTION_MANIFEST.json and PAGE_THEME.json
- Do NOT create or modify these files unless explicitly asked
- Do NOT read from them as source of truth — Figma MCP is the source of truth

## FIGMA FRAMES
- Frames are unnamed (e.g. "Frame 2147225698")
- When given a frame link: read it → identify visually → name the file descriptively
- Never name a file after the frame ID
- Log the mapping in PROGRESS.md as: - [ ] Frame 2147225698 → Hero.tsx

## ICONS AND IMAGES — HANDLING RULE

When Figma MCP reveals an icon or image node:
1. Check if it already exists in public/ folder
2. If yes: use it directly with next/image or img tag
3. If no: use Figma MCP to export the asset and save it to 
   public/section-[number]/[name].svg or .png
4. NEVER use a placeholder or skip an icon
5. For SVG icons: fetch the SVG node data from Figma MCP 
   and inline it directly in the component if export fails
6. Document every missing asset in PROGRESS.md under the section:
   MISSING ASSETS: [frame id] → [description]
7. Background gradients, overlays, and background images must be 
   read from Figma exactly — never default to white or transparent

## ONE SECTION PER TASK — ABSOLUTE RULE
- Implement exactly ONE section per task
- After section is done: spin up dev server → screenshot → compare to Figma → fix discrepancies → mark [x] in PROGRESS.md
- Then stop. Wait for next instruction.

## NON-AUTO-LAYOUT RULES
- This design does NOT use Auto Layout
- Never use position: absolute unless elements visually overlap in the design
- Derive spacing from x/y coordinate deltas between sibling Figma elements
- Use Tailwind flex and grid classes for all layout

## TOKEN RULES
- Before writing any value: check src/tokens/design-tokens.ts first
- If token exists: use the existing token name
- If token is new: append it to the correct group at the bottom of that group
- Never duplicate, rename, reorganize, or delete existing tokens
- Never hardcode a value in a component that belongs in tokens

## PROGRESS TRACKING
- After completing and visually verifying a section, mark [x] in PROGRESS.md
- Format: - [x] Frame 2147225698 → Hero.tsx
- Do nothing else to PROGRESS.md

## FORBIDDEN FILES — NEVER CREATE THESE
- SECTION_MANIFEST.json — deleted, do not recreate
- PAGE_THEME.json — deleted, do not recreate
- Any .json file in project root unless explicitly asked by user
- Any file not part of the defined structure