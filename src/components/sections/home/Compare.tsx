// Compare.tsx — "The Fragmented Approach vs The Shekel Standard" Section
// Figma node: 500:22005 (Body), y=1432, w=1280, h=507
//
// LAYOUT:
//   Outer: same gradient blob background as AppStore (shared feel)
//   Inner: rounded-[40px] container with a 2-column CSS grid (gap-x-px — 1px divider)
//          border #e2e8f0, shadow-xl
//   Left  (white bg):   Icon, "The Fragmented Approach", 3× X items
//   Right (slate-50 bg): Icon, "The Shekel Standard", 3× ✓ items + purple blur overlay
//
// Design tokens from Figma node 500:22007:
//   Container: rounded-[40px], shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)]
//   Left bg:  #ffffff, padding 80px
//   Right bg: #f1f5f9, padding 80px
//   Heading:  Plus Jakarta Sans Bold 30px, #0b0b0b
//   List gap: 24px between items (gap-y-6)
//   Item gap: 16px between icon and text (gap-x-4)
//   Icon X (red):     14×14px SVG
//   Icon ✓ (blue):    22×21px SVG
//   Body text: Inter Regular 16px, lh 24px
//     Fragmented: text-[#475569]
//     Standard:   text-[#0b0b0b]
//   Right blur overlay: absolute, right-0 top-0, 256×256, bg rgba(79,70,229,0.05), blur-[40px]

import Image from "next/image";

const FRAGMENTED_ITEMS = [
  "Weeks of building basic chat interfaces",
  "Inconsistent component styling across teams",
  'Technical debt from "quick-fix" UI updates',
];

const STANDARD_ITEMS = [
  "Launch sophisticated AI apps in days",
  "Unified design language across all products",
  "Optimized for performance and heavy data",
];

export default function Compare() {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* ── Same decorative background as AppStore for visual continuity ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute rounded-full blur-[120px] opacity-30"
          style={{
            width: "120%",
            height: "500px",
            bottom: "-100px",
            left: "-10%",
            background:
              "radial-gradient(ellipse at center, #c4b5fd 0%, #e0e7ff 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full blur-[100px] opacity-25"
          style={{
            width: "500px",
            height: "500px",
            top: "-100px",
            right: "-100px",
            background:
              "radial-gradient(ellipse at center, #fbcfe8 0%, #fce7f3 40%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/*
          2-column grid card container.
          Figma: gap-x-px (1px gap used as divider), bg-[#e2e8f0] container acts as the border/divider color.
          Replicated: gap-x-px within a rounded-[40px] bg-[#e2e8f0] wrapper, so #e2e8f0 bleeds through the gap 
          as a 1px divider line. Outer shadow matches Figma xl shadow.
        */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px rounded-[40px] overflow-hidden bg-[#e2e8f0]"
          style={{
            boxShadow:
              "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)",
          }}
        >

          {/* ── LEFT: The Fragmented Approach ── */}
          <div className="bg-white flex flex-col gap-6 p-[80px]">
            {/* Icon — 454.5×38 in Figma — the red warning/fragmented icon */}
            <div className="h-[38px] w-auto flex items-center">
              <Image
                src="/images/section-3/icon-fragmented.svg"
                alt="Fragmented Approach icon"
                width={48}
                height={38}
                className="object-contain"
              />
            </div>

            {/* Heading */}
            <h3 className="font-heading font-bold text-[30px] leading-[36px] text-[#0b0b0b]">
              The Fragmented Approach
            </h3>

            {/* List — gap-6 between items (24px from Figma) */}
            <ul className="flex flex-col gap-6">
              {FRAGMENTED_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  {/* X icon — 14×14px */}
                  <div className="flex-shrink-0 w-[14px] h-[14px]">
                    <Image
                      src="/images/section-3/icon-x.svg"
                      alt="✗"
                      width={14}
                      height={14}
                    />
                  </div>
                  <span className="font-sans font-normal text-[16px] leading-[24px] text-[#475569]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── RIGHT: The Shekel Standard ── */}
          <div className="bg-[#f1f5f9] relative flex flex-col gap-6 p-[80px] overflow-hidden rounded-r-[40px]">
            {/* Purple blur overlay top-right — Figma: Overlay+Blur, 256×256, rgba(79,70,229,0.05), blur-[40px] */}
            <div
              className="absolute top-0 right-0 w-[256px] h-[256px] rounded-[12px] pointer-events-none"
              style={{
                background: "rgba(79,70,229,0.05)",
                filter: "blur(40px)",
              }}
              aria-hidden="true"
            />

            {/* Icon — 454.5×40 in Figma — the blue circle-check icon */}
            <div className="h-[40px] w-auto flex items-center relative z-10">
              <Image
                src="/images/section-3/icon-shekel-standard.svg"
                alt="Shekel Standard icon"
                width={48}
                height={40}
                className="object-contain"
              />
            </div>

            {/* Heading */}
            <h3 className="font-heading font-bold text-[30px] leading-[36px] text-[#0b0b0b] relative z-10">
              The Shekel UI Standard
            </h3>

            {/* List — gap-6 between items (24px from Figma) */}
            <ul className="flex flex-col gap-6 relative z-10">
              {STANDARD_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  {/* Check icon — 22×21px */}
                  <div className="flex-shrink-0 w-[22px] h-[21px]">
                    <Image
                      src="/images/section-3/icon-check-circle.svg"
                      alt="✓"
                      width={22}
                      height={21}
                    />
                  </div>
                  <span className="font-sans font-normal text-[16px] leading-[24px] text-[#0b0b0b]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
