# Home Landing Page — Figma Frame → Component Mapping

## Sections (top → bottom in `src/app/page.tsx`)

- [x] Frame 500-21924 → Hero.tsx (motion: floating robot + staggered heading reveal)
- [x] Frame 500-22005 → Concept.tsx (motion: card hover)
- [x] Frame 500-22431 → Compare.tsx (motion: reveal)
- [x] Frame 500-22045 → FeaturesBento.tsx (motion: card hover)
- [x] Frame 500-22350 → HowItWorks.tsx (motion: step-card reveal + connector scaleX; bug fix: removed broken RevealStagger + display:contents)
- [x] Frame 500-22382 → UseCases.tsx (motion: card hover + stagger reveal; dual-layout desktop cqw / mobile fluid)
- [x] Frame 500-22092 → WhatYouCanDo.tsx (motion: floating UI nodes + stagger; dual-layout)
- [x] Frame 500-22182 → Roadmap.tsx (motion: floating rocket + timeline stagger; dual-layout)
- [x] Frame 500-22234 → TrustReliability.tsx (motion: card hover + stagger; dual-layout)
- [x] Frame 500-22410 → Faq.tsx (motion: AnimatePresence accordion; fluid responsive — cqw dropped intentionally due to expand overflow)
- [x] Frame 500-22272 → CtaWaitlist.tsx (motion: input focus pulse + button hover + reveal; dual-layout)

## Shared components

- [x] Frame 500-22430 → Header.tsx
- [x] Frame 500-22284 → Footer.tsx
- [x] Button.tsx (motion: scale/shadow hover, tap feedback, `useReducedMotion` aware)
- [x] StepCard.tsx
- [x] motion/Reveal.tsx, Float.tsx, RevealStagger.tsx (all `prefers-reduced-motion` aware)

## Cross-cutting

- [x] Dual-layout pattern (hidden md:block desktop cqw canvas + block md:hidden reflowed mobile) applied to Hero, Concept, Compare, FeaturesBento, UseCases, WhatYouCanDo, Roadmap, TrustReliability, CtaWaitlist
- [x] framer-motion installed + wired into sections with `useReducedMotion` fallbacks
- [x] All backgrounds edge-to-edge (`w-full`, section `100vw`, no horizontal overflow)
- [ ] Full desktop visual pass at 1440px — blocked by IDE browser viewport clamp (<768px); verified via DOM snapshot that all content renders
