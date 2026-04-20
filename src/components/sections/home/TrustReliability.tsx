import Image from "next/image";

// LAYOUT MAP: Trust & Reliability Section (Frame 500:22234)
// Section: full-width, bg: gradient white → #f2f4f7, px: 32px (container max-w), py: 128px
// Container: max-w-[1536px] centered, gap-96px between header and grid
// Section Header: centered heading — Poppins Medium 48px, tracking -1.2px, color #191c1e
//   - "reliability" & "trust": gradient text #2864e4 → #ecf2ff
// Grid: 4 columns, gap-48px
// Cards: p-32px, rounded-12px, semi-transparent white bg + subtle border, flex-col
//   - Icon block: ~51-53px SVG with shadow, mb-32px
//   - Title: Plus Jakarta Sans Bold, 20px, tracking -0.5px, #191c1e, mb-12px
//   - Body: Inter Regular, 16px, line-height 26px, #414753

const cards = [
  {
    icon: "/section-9/icon-verified.svg",
    alt: "Verified Agents Icon",
    title: "Verified Agents",
    body: "Every agent undergoes rigorous security and quality audit",
    iconW: 51,
    iconH: 56,
  },
  {
    icon: "/section-9/icon-community.svg",
    alt: "Community Ratings Icon",
    title: "Community Ratings",
    body: "Transparent reviews and historical performance data",
    iconW: 53,
    iconH: 53,
  },
  {
    icon: "/section-9/icon-secure.svg",
    alt: "Secure Infrastructure Icon",
    title: "Secure Infrastructure",
    body: "Enterprise-grade data encryption and privacy controls",
    iconW: 51,
    iconH: 56,
  },
  {
    icon: "/section-9/icon-scalable.svg",
    alt: "Scalable Platform Icon",
    title: "Scalable Platform",
    body: "Execute thousands of tasks simultaneously with low latency",
    iconW: 49,
    iconH: 56,
  },
];

export default function TrustReliability() {
  return (
    <section
      className="w-full"
      style={{
        background: "linear-gradient(to bottom, #ffffff, #f2f4f7)",
        paddingTop: "128px",
        paddingBottom: "128px",
        paddingLeft: "32px",
        paddingRight: "32px",
      }}
    >
      {/* Container */}
      <div className="mx-auto flex flex-col gap-24 w-full max-w-[1536px]">
        {/* Section Header */}
        <div className="flex flex-col items-center w-full">
          <h2
            className="text-center"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: "48px",
              lineHeight: "48px",
              letterSpacing: "-1.2px",
              color: "#191c1e",
            }}
          >
            Built for{" "}
            <span
              style={{
                background: "linear-gradient(to bottom, #2864e4, #ecf2ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              reliability
            </span>{" "}
            and{" "}
            <span
              style={{
                background: "linear-gradient(to bottom, #2864e4, #ecf2ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              trust
            </span>
          </h2>
        </div>

        {/* 4-Column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col"
              style={{
                padding: "32px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              {/* Icon */}
              <div className="mb-8 relative" style={{ width: card.iconW, height: card.iconH }}>
                <Image
                  src={card.icon}
                  alt={card.alt}
                  width={card.iconW}
                  height={card.iconH}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <p
                className="mb-3"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "28px",
                  letterSpacing: "-0.5px",
                  color: "#191c1e",
                }}
              >
                {card.title}
              </p>

              {/* Body */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#414753",
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
