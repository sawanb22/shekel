# SKILL: Figma Section Implementation

## This skill runs every time a section frame link is given

### Step 1 — Read from Figma MCP
- Fetch the exact frame node from Figma MCP
- Read every child element's: x, y, width, height
- Read every child element's: font family, weight, size, line-height, letter-spacing
- Read every child element's: fill color, stroke color, border-radius, box-shadow
- Read gap between siblings by calculating x/y deltas

### Step 2 — Token Check
- Open src/tokens/design-tokens.ts
- For every value found in Step 1: check if it already exists
- List which values are new (will be appended) and which already exist (will be reused)

### Step 3 — Output a Layout Map (as a comment block before coding)
// LAYOUT MAP:
// Section: full width, padding-x: 80px, padding-y: 64px, bg: #FFFFFF
// Heading: top delta 0px, font: Inter 56px/64px Bold, color: #1A1A1A
// Subheading: top delta 24px, font: Inter 18px/28px Regular, color: #6B7280
// CTA Button: top delta 40px, 200x56px, bg: #FF5733, radius: 8px

### Step 4 — Append New Tokens
- Add only new tokens to src/tokens/design-tokens.ts
- Append to the bottom of the correct group
- Use descriptive names, never frame IDs

### Step 5 — Implement the Section
- Create file at src/components/sections/[page-name]/[DescriptiveName].tsx
- Use Tailwind classes only
- Reference token values, never hardcode
- Use flex/grid for layout, never position: absolute unless overlap exists in design

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

### Step 6 — Visual Self-Correction
- Spin up the dev server
- Take a screenshot via browser agent
- Compare screenshot to the Figma frame side by side
- List every discrepancy with exact pixel values
- Fix all discrepancies
- Take a second screenshot to confirm

### Step 7 — Update PROGRESS.md
- Mark the section [x] with its frame → file mapping
- Stop. Do not proceed to next section.