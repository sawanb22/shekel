// StepCard.tsx
// Reusable component for the "How It Works" section.
// Design tokens sourced from Figma node 500:22358.
// Number bubble: w-20 h-20, rounded-full, bg-white + drop shadow.
// Number text: Inter SemiBold 30px, gradient #2864e4 → #ecf2ff.
// Title: Poppins Medium 24px, #1a1c1c.
// Body: Inter Regular 16px, lh 24px, #414753.

import { colors, typography } from "@/tokens/design-tokens";

type StepCardProps = {
  number: string;      // e.g. "01"
  title: string;
  description: string;
};

export default function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {/* Number Bubble — 80×80px, rounded-full, white bg, Figma shadow */}
      <div
        className="flex items-center justify-center w-20 h-20 rounded-full bg-white"
        style={{
          boxShadow:
            "0px 12px 32px 0px rgba(0,0,0,0.04), 0px 4px 8px 0px rgba(0,0,0,0.02)",
        }}
      >
        {/* Gradient number text: Inter SemiBold 30px */}
        <span
          className="select-none bg-clip-text text-transparent"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 600,
            fontSize: 30,
            lineHeight: "36px",
            backgroundImage: "linear-gradient(to bottom, #2864e4, #ecf2ff)",
          }}
        >
          {number}
        </span>
      </div>

      {/* Title — Poppins Medium 24px, #1a1c1c, pt-5 inferred from y=92 - y=80 = 12 + 20pt gap  */}
      <div className="pt-5">
        <h3
          className="whitespace-nowrap"
          style={{
            margin: 0,
            fontFamily: typography.fonts.poppins,
            fontWeight: 500,
            fontSize: 24,
            lineHeight: "28px",
            color: colors.text.dark,
          }}
        >
          {title}
        </h3>
      </div>

      {/* Body — Inter Regular 16px, lh 24px, #414753 */}
      <p
        style={{
          margin: 0,
          maxWidth: 320,
          whiteSpace: "pre-line",
          fontFamily: typography.fonts.inter,
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: colors.text.body,
        }}
      >
        {description}
      </p>
    </div>
  );
}
