# PROGRESS.md

> `[ ]` = implemented, awaiting verification
> `[x]` = verified by browser agent (desktop + mobile)
> `[!]` = known issue — see notes
> Agent appends to this file only. Never restructures or removes entries.

---

## Shared Components (permanent — never modify)

- [x] `src/components/shared/Header.tsx` — Frame 500-22430
- [x] `src/components/shared/Footer.tsx` — Frame 500-22284
- [x] `src/components/Button.tsx`
- [x] `src/components/StepCard.tsx`
- [x] `src/components/motion/Reveal.tsx`
- [x] `src/components/motion/Float.tsx`
- [x] `src/components/motion/RevealStagger.tsx`

---

## Home Page — `src/app/page.tsx` (complete)

All sections verified. Do not modify any of these files.

| # | Status | Frame ID | Component |
|---|--------|----------|-----------|
| 1 | [x] | 500-21924 | `Hero.tsx` — floating robot + staggered heading reveal |
| 2 | [x] | 500-22005 | `Concept.tsx` — card hover |
| 3 | [x] | 500-22431 | `Compare.tsx` — reveal |
| 4 | [x] | 500-22045 | `FeaturesBento.tsx` — card hover |
| 5 | [x] | 500-22350 | `HowItWorks.tsx` — step-card reveal + connector scaleX |
| 6 | [x] | 500-22382 | `UseCases.tsx` — card hover + stagger; dual-layout |
| 7 | [x] | 500-22092 | `WhatYouCanDo.tsx` — floating UI nodes + stagger; dual-layout |
| 8 | [x] | 500-22182 | `Roadmap.tsx` — floating rocket + timeline stagger; dual-layout |
| 9 | [x] | 500-22234 | `TrustReliability.tsx` — card hover + stagger; dual-layout |
| 10 | [x] | 500-22410 | `Faq.tsx` — AnimatePresence accordion; cqw dropped (expand overflow) |
| 11 | [x] | 500-22272 | `CtaWaitlist.tsx` — input focus pulse + button hover; dual-layout |

### Home Page — Cross-Cutting
- [x] Dual-layout pattern applied to sections 1, 2, 3, 4, 6, 7, 8, 9, 11
- [x] framer-motion with `useReducedMotion` fallbacks on all animated sections
- [x] All backgrounds edge-to-edge (no horizontal overflow)
- [!] Full desktop visual pass at 1440px — blocked by IDE viewport clamp; content verified via DOM snapshot

---

## Marketplace Page — `src/app/marketplace/page.tsx`

> ⚠️ Sections 4 (BrowseByCategory) and 11 (CtaMarketplace) are incomplete (`[ ]`).
> Complete or explicitly skip with `[!]` before starting a new page.

> ⚠️ Asset folder numbering note: ExploreAgents (section 5) assets were saved
> into `section-4-marketplace/` alongside BrowseByCategory. Sections 6–11 asset
> folders are therefore offset by 1 from their section numbers.
> Do not "fix" this — it matches the live `public/` folder structure.

| # | Status | Frame ID | Component |
|---|--------|----------|-----------|
| 1 | [x] | 500-7061 | `Hero.tsx` |
| 2 | [x] | 500-7244 | `TrendingAgents.tsx` |
| 3 | [x] | 500-7451 | `Workflow.tsx` |
| 4 | [ ] | 500-7533 | `BrowseByCategory.tsx` |
| 5 | [x] | 500-7594 | `ExploreAgents.tsx` |
| 6 | [x] | 500-7157 | `Enterprise.tsx` |
| 7 | [x] | 500-7681 | `WhatYouCanDo.tsx` |
| 8 | [x] | 500-7771 | `FlexibleMonetization.tsx` |
| 9 | [x] | 500-7840 | `DeveloperHub.tsx` |
| 10 | [x] | 500-7942 | `TrustReliability.tsx` |
| 11 | [ ] | 500-7980 | `CtaMarketplace.tsx` |

### Section Detail Log

### Section 1 — Hero
- **Status**: `[x]` verified by browser agent (desktop + mobile)
- **Figma Frame**: 500-7061 "Frame 2147225665"
- **Component**: `src/components/sections/marketplace/Hero.tsx`
- **Assets**: `public/section-1-marketplace/`
  - `card-socialcraft-bg.png`
  - `card-architect-avatar.png`
  - `card-architect-bg.png`
  - `card-lex-bg.png`
  - `card-design-bg-1.png`
  - `card-design-bg-2.png`
  - `stars.svg`
  - `arrow-up-right-white.svg`
  - `arrow-up-right-gray.svg`
  - `logo-openai.png`
  - `logo-google-ai.png`
  - `logo-anthropic.svg`
  - `logo-azure.png`
  - `logo-meta.png`
  - `logo-notion.png`
  - `logo-slack.png`
  - `logo-aws.png`
- **Tokens added**: none
- **Local consts**: `MARKET_CARD_BG`, `CHIP_BG`, `BUTTON_TEXT`, `OVERLAY_FADE`, `HERO_HEADING_GRADIENT`, `BLUE_GRADIENT`, `BUTTON_GRADIENT`, `LOGO_EDGE_FADE`

### Section 2 — Trending Agents
- **Status**: `[x]` verified by browser agent (desktop + mobile)
- **Figma Frame**: 500-7244 "Frame 2147225669"
- **Component**: `src/components/sections/marketplace/TrendingAgents.tsx`
- **Assets**: `public/section-2-marketplace/`
  - `bg-texture.png`
  - `bg-lines.svg`
  - `link-arrow.svg`
  - `star.svg`
  - `icon-marketmuse.svg`
  - `icon-graphq.svg`
  - `icon-legaleagle.svg`
  - `icon-swiftcode.svg`
  - `icon-socialsync.svg`
  - `icon-finalyze.svg`
  - `icon-ghostwriter.svg`
  - `icon-pixelgen.svg`
- **Tokens added**: none
- **Local consts**: `BLUE_GRADIENT`, `CARD_BG`, `CARD_BORDER`, `SUBTITLE_COLOR`, `BODY_COLOR`

### Section 3 — Workflow
- **Status**: `[x]` verified by browser agent (desktop + mobile)
- **Figma Frame**: 500-7451 "Body"
- **Component**: `src/components/sections/marketplace/Workflow.tsx`
- **Assets**: `public/section-3-marketplace/`
  - `bg-texture.png`
  - `run-arrow.svg`
  - `input-overlay.svg`
  - `step-1-bg.svg`
  - `step-2-bg.svg`
  - `step-3-bg.svg`
  - `connector-1.svg`
  - `connector-2.svg`
  - `log-icon-1.svg`
  - `log-icon-2.svg`
  - `log-icon-3.svg`
- **Tokens added**: none
- **Local consts**: `BLUE_GRADIENT`, `SHADOW_SOFT`, `TEXT_DARK`, `TEXT_BODY`, `TEXT_MUTED`, `INPUT_BG`, `BORDER_SOFT`

### Section 4 — Browse By Category
- **Status**: `[ ]` awaiting verification
- **Figma Frame**: 500-7533 "Frame 2147225679"
- **Component**: `src/components/sections/marketplace/BrowseByCategory.tsx`
- **Assets**: `public/section-4-marketplace/`
  - `browse-categories-bg-grid.svg`
  - `category-marketing-icon.svg`
  - `category-finance-icon.svg`
  - `category-automation-icon.svg`
  - `category-marketing-mini-logo-1-56586a.png`
  - `category-marketing-mini-logo-2-56586a.png`
- **Tokens added**: none
- **Local consts**: `BLUE_GRADIENT`

### Section 5 — Explore Agents
- **Status**: `[x]` verified by browser agent (desktop + mobile)
- **Figma Frame**: 500-7594 "Frame 2147225676"
- **Component**: `src/components/sections/marketplace/ExploreAgents.tsx`
- **Assets**: `public/section-4-marketplace/` ⚠️ shares folder with section 4 — see note above
  - `card-taskmaster-icon.svg`
  - `card-taskmaster-star.svg`
  - `card-taskmaster-details-arrow.svg`
  - `card-marketmuse-overlay.svg`
  - `card-marketmuse-star.svg`
  - `card-marketmuse-details-arrow.svg`
  - `search-icon.svg`
  - `filter-category-icon.svg`
  - `filter-pricing-icon.svg`
  - `filter-sort-icon.svg`
  - `explore-more-arrow.svg`
- **Tokens added**: none
- **Local consts**: `BLUE_GRADIENT`, `CARD_BG`, `PANEL_BG`, `TEXT_DARK`, `TEXT_BODY`, `TEXT_PLACEHOLDER`, `TEXT_MUTED`, `BORDER_FAINT`, `CARD_SHADOW`, `SEARCH_SHADOW`

### Section 6 — Enterprise
- **Status**: `[x]` verified by browser agent (desktop + mobile)
- **Figma Frame**: 500-7157 "Enterprise Section"
- **Component**: `src/components/sections/marketplace/Enterprise.tsx`
- **Assets**: `public/section-5-marketplace/` ⚠️ offset by 1 — see note above
  - `bg-lines.svg`
  - `see-all-arrow.svg`
  - `card-1-overlay.svg`
  - `card-2-overlay.svg`
  - `card-3-overlay.svg`
  - `explore-more-arrow.svg`
- **Tokens added**: none
- **Local consts**: `BLUE_GRADIENT`, `SECTION_BG`, `TITLE_COLOR`, `BODY_COLOR`, `LABEL_COLOR`, `CARD_BORDER`, `CARD_SHADOW`

### Section 7 — What You Can Do
- **Status**: `[x]` verified by browser agent (desktop + mobile)
- **Figma Frame**: 500-7681 "Body"
- **Component**: `src/components/sections/marketplace/WhatYouCanDo.tsx`
- **Assets**: `public/section-6-marketplace/` ⚠️ offset by 1 — see note above
  - `main-bg.svg`
  - `input-overlay.svg`
  - `input-caret.svg`
  - `top-right-icon.svg`
  - `mid-left-icon.svg`
  - `content-icon.svg`
  - `design-icon.svg`
  - `publish-icon.svg`
  - `link-arrow-1.svg`
  - `link-arrow-2.svg`
  - `link-arrow-3.svg`
- **Tokens added**: none
- **Local consts**: `BLUE_GRADIENT`

### Section 8 — Flexible Monetization
- **Status**: `[x]` verified by browser agent (desktop + mobile)
- **Figma Frame**: 500-7771 "Body"
- **Component**: `src/components/sections/marketplace/FlexibleMonetization.tsx`
- **Assets**: `public/section-7-marketplace/` ⚠️ offset by 1 — see note above
  - `bg-lines.svg`
  - `explore-pricing-arrow.svg`
- **Tokens added**: none
- **Local consts**: `BLUE_GRADIENT`, `CANVAS_W`, `CANVAS_H`, `SCALE`

### Section 9 — Developer Hub
- **Status**: `[x]` verified by browser agent (desktop + mobile)
- **Figma Frame**: 500-7840 "Developer Hub Section"
- **Component**: `src/components/sections/marketplace/DeveloperHub.tsx`
- **Assets**: `public/section-8-marketplace/` ⚠️ offset by 1 — see note above
  - `dashboard-grid.svg`
  - `earn-overlay.svg`
  - `feature-1-icon.svg`
  - `feature-2-icon.svg`
  - `feature-3-icon.svg`
  - `line-chart.svg`
  - `quota-bar.svg`
- **Tokens added**: none
- **Local consts**: `BLUE_GRADIENT`

### Section 10 — Trust & Reliability
- **Status**: `[x]` verified by browser agent (desktop + mobile)
- **Figma Frame**: 500-7942 "Trust & Reliability Section"
- **Component**: `src/components/sections/marketplace/TrustReliability.tsx`
- **Assets**: `public/section-9-marketplace/` ⚠️ offset by 1 — see note above
  - `icon-verified-agents.svg`
  - `icon-community-ratings.svg`
  - `icon-secure-infra.svg`
  - `icon-scalable-platform.svg`
- **Tokens added**: none
- **Local consts**: `BLUE_GRADIENT`

### Section 11 — Marketplace CTA
- **Status**: `[ ]` awaiting verification
- **Figma Frame**: 500-7980 "Frame 2147225680"
- **Component**: `src/components/sections/marketplace/CtaMarketplace.tsx`
- **Assets**: `public/section-10-marketplace/` ⚠️ offset by 1 — see note above
  - `bg-texture.png`
  - `hero-lines.svg`
- **Tokens added**: none
- **Local consts**: `BLUE_GRADIENT`, `BUTTON_GRADIENT`, `CANVAS_W`, `CANVAS_H`, `SCALE`

---

## Agent Detail — `src/app/agent-detail/page.tsx`

| # | Status | Frame ID | Component |
|---|--------|----------|-----------|
| 1 | [x] | 503-2973 | `Hero.tsx` |
| 2 | [x] | 503-2928 | `TryThisAgent.tsx` |
| 3 | [x] | 503-3069 | `ProvenResults.tsx` |
| 4 | [x] | 503-3040 | `HowItWorks.tsx` |
| 5 | [x] | 503-3127 | `DesignedFor.tsx` |
| 6 | [x] | 503-3139 | `PricingOptions.tsx` |
| 7 | [x] | 503-3232 | `UserReviews.tsx` |
| 8 | [x] | 503-3260 | `SimilarAgents.tsx` |
| 9 | [x] | 503-3302 | `CtaAgent.tsx` |

### Section Detail Log

### Section 1 — Hero
- **Status**: `[x]` verified by browser agent (desktop 1280 px + mobile 375px)
- **Figma Frame**: 503-2973 "Frame 2147225682"
- **Component**: `src/components/sections/agent-detail/Hero.tsx`
- **Assets**: `public/section-1-agent-detail/`
  - `bg.png`
  - `stars-icon.svg`
  - `star-small.svg`
  - `runs-icon.svg`
  - `verified-icon.svg`
  - `play-icon.svg`
  - `share-icon.svg`
- **Tokens added**: none
- **Local consts**: `CANVAS_W`, `CANVAS_H`, `SCALE`, `BUTTON_GRADIENT`

### Section 2 — Try This Agent
- **Status**: `[x]` verified by browser agent (desktop 1280 px + mobile 375px)
- **Figma Frame**: 503-2928 "Frame 2147225683"
- **Component**: `src/components/sections/agent-detail/TryThisAgent.tsx`
- **Assets**: `public/section-2-agent-detail/`
  - `bg-grid.svg`
  - `run-icon.svg`
  - `terminal-icon.svg`
- **Tokens added**: none
- **Local consts**: `CANVAS_W`, `CANVAS_H`, `SCALE`, `GRADIENT_BLUE`, `TEXT_DARK`, `TERMINAL_BG`, `TERMINAL_GRADIENT`

### Section 3 — Proven Results
- **Status**: `[x]` verified by browser agent (desktop 1280 px + mobile 375px)
- **Figma Frame**: 503-3069 "Frame 2147225684"
- **Component**: `src/components/sections/agent-detail/ProvenResults.tsx`
- **Assets**: `public/section-3-agent-detail/`
  - `bg-grid.svg`
  - `icon-1.svg`
  - `icon-2.svg`
  - `icon-3.svg`
  - `icon-4.svg`
- **Tokens added**: none
- **Local consts**: `CANVAS_W`, `CANVAS_H`, `SCALE`, `GRADIENT_BLUE`, `TEXT_DARK`, `TEXT_MUTED`

### Section 4 — How It Works
- **Status**: `[x]` verified by browser agent (desktop 1280 px + mobile 375px)
- **Figma Frame**: 503-3040 "How It Works Section"
- **Component**: `src/components/sections/agent-detail/HowItWorks.tsx`
- **Assets**: `public/section-4-agent-detail/`
  - `icon-input.svg`
  - `icon-ai.svg`
  - `icon-output.svg`
- **Tokens added**: none
- **Local consts**: `CANVAS_W`, `CANVAS_H`, `SCALE`, `GRADIENT_BLUE`, `TEXT_DARK`, `TEXT_MUTED`, `LINE_COLOR`

### Section 5 — Designed For
- **Status**: `[x]` verified by browser agent (desktop 1232 px + mobile 375px)
- **Figma Frame**: 503-3127 "Best For Section"
- **Component**: `src/components/sections/agent-detail/DesignedFor.tsx`
- **Assets**: `public/section-5-agent-detail/`
  - none
- **Tokens added**: none
- **Local consts**: `LABEL_COLOR`, `BUTTON_BG`, `BUTTON_TEXT`, `BUTTONS`

### Section 6 — Pricing Options
- **Status**: `[x]` verified by browser agent (desktop 1280 px + mobile 375px)
- **Figma Frame**: 503-3139 "Body"
- **Component**: `src/components/sections/agent-detail/PricingOptions.tsx`
- **Assets**: `public/section-6-agent-detail/`
  - `bg-decoration.svg`
  - `check-icon.svg`
- **Tokens added**: none
- **Local consts**: `GRADIENT_BG`, `CARD_SHADOW`, `BUTTON_SHADOW`

### Section 7 — User Reviews
- **Status**: `[x]` verified by browser agent (desktop 1232 px + mobile 375px)
- **Figma Frame**: 503-3232 "Section - User Reviews"
- **Component**: `src/components/sections/agent-detail/UserReviews.tsx`
- **Assets**: `public/section-7-agent-detail/`
  - `stars-container.svg`
  - `quote-icon.svg`
- **Tokens added**: none
- **Local consts**: `RATING_TEXT`, `LABEL_COLOR`, `QUOTE_TEXT`, `CARD_SHADOW`, `QUOTE_COLOR`

### Section 8 — Similar Agents
- **Status**: `[x]` verified by browser agent (desktop 1232 px + mobile 375px)
- **Figma Frame**: 503-3260 "Section - Similar Agents"
- **Component**: `src/components/sections/agent-detail/SimilarAgents.tsx`
- **Assets**: `public/section-8-agent-detail/`
  - `arrow-up-right.svg`
  - `icon-copygenius.svg`
  - `icon-videocraft.svg`
  - `icon-metricmaster.svg`
  - `icon-star.svg`
- **Tokens added**: none
- **Local consts**: `HEADING_COLOR`, `LINK_COLOR`, `CARD_BG`, `ICON_SHADOW`, `CARD_TITLE_COLOR`, `CARD_RATING_COLOR`, `BUTTON_BORDER`, `GRADIENT_TEXT`

### Section 9 — Cta Agent
- **Status**: `[x]` verified by browser agent (desktop 1280 px + mobile 375px)
- **Figma Frame**: 503-3302 "Frame 2147225680"
- **Component**: `src/components/sections/agent-detail/CtaAgent.tsx`
- **Assets**: `public/section-9-agent-detail/`
  - `bg-texture.png`
- **Tokens added**: none
- **Local consts**: `CONTAINER_BG`, `HEADING_COLOR`, `SUBTEXT_COLOR`, `BUTTON_GRADIENT`, `TEXT_GRADIENT`, `DECORATION_GRADIENT`

---

## Explore Agent Page — `src/app/explore-agent/page.tsx`

| # | Status | Frame ID | Component |
|---|--------|----------|-----------|
| 1 | [x] | 506-3493 | `ExploreAiAgents.tsx` |
| 2 | [x] | 506-3583 | `FeaturedAgents.tsx` |
| 3 | [x] | 506-3697 | `TrendingNow.tsx` |
| 4 | [!] | 506-3784 | `BrowseByCategory.tsx` |
| 5 | [x] | 506-3812 | `MainAgentGrid.tsx` |
| 6 | [x] | 506-4035 | `CtaSection.tsx` |

### Section Detail Log

### Section 1 — Explore Ai Agents
- **Status**: `[x]` verified by browser agent (desktop + mobile)
- **Figma Frame**: 506-3493 "Frame 2147225685"
- **Component**: `src/components/sections/explore-agent/ExploreAiAgents.tsx`
- **Assets**: `public/section-1-explore-agent/`
  - `main-content-canvas.svg`
  - `button-icon.svg`
  - `rating-star.svg`
  - `line-chart.svg`
  - `card-1-overlay.svg`
  - `card-3-overlay.svg`
- **Tokens added**: none
- **Local consts**: `BUTTON_GRADIENT`, `BUTTON_BG_SECONDARY`, `BUTTON_BORDER_SECONDARY`, `CARD_BG`, `CARD_BORDER`, `CARD_BORDER_ACTIVE`, `TEXT_MUTED`, `TEXT_MUTED_ALT`, `BADGE_BG`, `BADGE_TEXT`, `METRIC_BG`

### Section 2 — Featured Agents
- **Status**: `[x]` verified by browser agent (desktop + mobile)
- **Figma Frame**: 506-3583 "Group 2085662771"
- **Component**: `src/components/sections/explore-agent/FeaturedAgents.tsx`
- **Assets**: `public/section-2-explore-agent/`
  - `view-spotlight-arrow.svg`
  - `launch-agent-arrow.svg`
  - `filter-pricing-icon.svg`
  - `filter-rating-icon.svg`
  - `filter-sort-icon.svg`
  - `search-icon.svg`
- **Tokens added**: none
- **Local consts**: `BUTTON_GRADIENT`, `TEXT_DARK`, `TEXT_MUTED`, `CARD_BG_LIGHT`, `NAV_BG`, `NAV_BORDER`, `SEARCH_BG`, `OVERLAY_BLACK`, `OVERLAY_BLUE`, `CARD_BLUR`

### Section 3 — Trending Now
- **Status**: `[x]` verified by browser agent (desktop + mobile)
- **Figma Frame**: 506-3697 "Body"
- **Component**: `src/components/sections/explore-agent/TrendingNow.tsx`
- **Assets**: `public/section-3-explore-agent/`
  - `main-bg.svg`
  - `trending-icon.svg`
  - `star-icon.svg`
  - `run-icon.svg`
  - `card-1-bg.svg`
  - `card-2-bg.svg`
  - `card-3-bg.svg`
  - `arrows.svg`
- **Tokens added**: none
- **Local consts**: `BUTTON_GRADIENT`, `CARD_BORDER`, `CARD_SHADOW`, `BADGE_BG`, `BADGE_TEXT`

### Section 4 — Browse by category
- **Status**: `[x]` verified by browser agent (desktop + mobile)
- **Figma Frame**: 506-3784 "Section - Category Grid"
- **Component**: `src/components/sections/explore-agent/BrowseByCategory.tsx`
- **Assets**: `public/section-4-explore-agent/`
  - `icon-marketing.svg`
  - `icon-design.svg`
  - `icon-development.svg`
  - `icon-finance.svg`
  - `icon-legal.svg`
  - `icon-automation.svg`
- **Tokens added**: none
- **Local consts**: `CATEGORY_BG`, `TEXT_DARK`

### Section 5 — All Agents
- **Status**: `[x]` verified by browser agent (desktop + mobile)
- **Figma Frame**: 506-3812 "Section - Main Agent Grid"
- **Component**: `src/components/sections/explore-agent/MainAgentGrid.tsx`
- **Assets**: `public/section-5-explore-agent/`
  - `icon-data-harvester.svg`
  - `icon-lingo-master.svg`
  - `icon-sentinal-shield.svg`
  - `icon-inbox-manager.svg`
  - `icon-trend-forecaster.svg`
  - `icon-legal-summarizer.svg`
  - `icon-star.svg`
  - `icon-runs.svg`
- **Tokens added**: none
- **Local consts**: `BUTTON_GRADIENT`, `TEXT_DARK`, `TEXT_MUTED`, `TEXT_LIGHT_MUTED`, `CARD_BG`, `CARD_BORDER`, `CARD_SHADOW`, `ICON_BG`, `BADGE_TEXT`, `BTN_DETAILS_BG`

### Section 6 — CTA
- **Status**: `[x]` verified by browser agent (desktop + mobile)
- **Figma Frame**: 506-4035 "Frame 2147225680"
- **Component**: `src/components/sections/explore-agent/CtaSection.tsx`
- **Assets**: `public/section-6-explore-agent/`
  - `cta-bg.png`
  - `cta-decor.svg`
  - `cta-graphic.png`
- **Tokens added**: none
- **Local consts**: `BUTTON_GRADIENT`, `BORDER_GRADIENT`, `BLUR_GRADIENT`


---

## Pricing Page — `src/app/pricing/page.tsx`

| # | Status | Frame ID | Component |
|---|--------|----------|-----------|
| 1 | [x] | 506-4648 | `Hero.tsx` |
| 2 | [x] | 506-4756 | `PricingGrid.tsx` |
| 3 | [x] | 506-4849 | `TrustedTeams.tsx` |

### Section Detail Log

### Section 1 — Hero
- **Status**: `[x]` verified by browser agent (desktop + mobile)
- **Figma Frame**: 506-4648 "Frame 2147225665"
- **Component**: `src/components/sections/pricing/Hero.tsx`
- **Assets**: `public/section-1-pricing/`
  - `bg-image.png`
  - `ellipse-1.png`
  - `ellipse-2.png`
  - `ellipse-3.png`
  - `icon.png`
- **Tokens added**: none
- **Local consts**: `CANVAS_W`, `CANVAS_H`, `SCALE`, `BUTTON_GRADIENT`, `TEXT_GRADIENT`

### Section 2 — Pricing Grid
- **Status**: `[x]` verified by browser agent (desktop + mobile)
- **Figma Frame**: 506-4756 "Section - Pricing Grid"
- **Component**: `src/components/sections/pricing/PricingGrid.tsx`
- **Assets**: `public/section-2-pricing/`
  - `check-icon.svg`
- **Tokens added**: none
- **Local consts**: `CANVAS_W`, `CANVAS_H`, `SCALE`, `CARD_BORDER`, `BLUE_TEXT`, `TEXT_MUTED`, `CARD_SHADOW`, `HIGHLIGHT_SHADOW`, `BLUE_GRADIENT`

### Section 3 — Trusted Teams
- **Status**: `[x]` verified by browser agent (desktop + mobile)
- **Figma Frame**: 506-4849 "Frame 2147225678"
- **Component**: `src/components/sections/pricing/TrustedTeams.tsx`
- **Assets**: `public/section-3-pricing/`
  - `bg-texture.png`
  - `ellipse-1.png`
  - `ellipse-2.png`
  - `ellipse-3.png`
  - `logo-1.png`
  - `logo-2.png`
  - `logo-3.png`
  - `logo-4.png`
  - `logo-5.png`
- **Tokens added**: none
- **Local consts**: `CANVAS_W`, `CANVAS_H`, `SCALE`

---

## Missing Assets

| Section | Figma Node ID | Description | Workaround |
|---------|--------------|-------------|-----------|
| | | | |

---

## Token Additions

| Token Key | Value | Added in Section |
|-----------|-------|-----------------|
| | | |