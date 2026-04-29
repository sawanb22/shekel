import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// ContactMethods.tsx  —  "Contact Methods"
// Figma frame: 508-7475  "Frame 2147225669"
// Canvas: 1280 × 466 px   Page-y: 783   bg: #FFFFFF
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Ellipse 43664    (x=-688, y=146)    696×696   blue gradient blur
//   Ellipse 43665    (x=1270, y=148)    696×696   blue gradient blur
//   Ellipse 43664    (x=-187, y=978)    1647×163  blue gradient blur
//   Ellipse 43666    (x=-187, y=-162)   1647×163  blue gradient blur
//   Container        (x=34, y=116)      1216×auto flex row, 3 cards
//     Card 1         (x=0, y=0)         384×auto  WhatsApp
//     Card 2         (x=416, y=0)       384×auto  Email
//     Card 3         (x=832, y=0)       384×auto  Social Media
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 466;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const GRADIENT_BLUE = "linear-gradient(180deg, #2864E4 0%, #ECF2FF 100%)";
const CARD_BG = "rgba(255, 255, 255, 0.03)";
const CARD_BORDER = "rgba(0, 0, 0, 0.08)";
const HEADING_COLOR = "#000000";
const BODY_COLOR = "#A1A1AA";
const LINK_COLOR = "#2F80ED";

const CARDS = [
  {
    title: "WhatsApp",
    body: "Immediate support via encrypted chat.",
    linkText: "Start Chat",
    iconBg: "rgba(47, 128, 237, 0.1)",
    iconSrc: "/section-2-connect-us/icon-whatsapp.svg",
  },
  {
    title: "Email",
    body: "Detailed inquiries and technical help.",
    linkText: "support@shekel.ai",
    iconBg: "rgba(86, 204, 242, 0.1)",
    iconSrc: "/section-2-connect-us/icon-email.svg",
  },
  {
    title: "Social Media",
    body: "Follow our updates and news.",
    linkText: "View Profiles",
    iconBg: "#E8F1FE",
    iconSrc: "/section-2-connect-us/icon-social.svg",
  },
];

export default function ContactMethods() {
  return (
    <>
      <SectionDesktop />
      <SectionMobile />
    </>
  );
}

// ─── Desktop ─────────────────────────────────────────────────────────────────

function SectionDesktop() {
  return (
    <section
      className="relative hidden w-full overflow-hidden md:block"
      style={{
        backgroundColor: colors.white,
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
        {/* Glow Ellipses */}
        <div
          className="absolute"
          style={{
            left: -688,
            top: 146,
            width: 696,
            height: 696,
            background: GRADIENT_BLUE,
            filter: "blur(200px)",
            opacity: 0.5,
          }}
        />
        <div
          className="absolute"
          style={{
            left: 1270,
            top: 148,
            width: 696,
            height: 696,
            background: GRADIENT_BLUE,
            filter: "blur(200px)",
            opacity: 0.5,
          }}
        />
        <div
          className="absolute"
          style={{
            left: -187,
            top: 978,
            width: 1647,
            height: 163,
            background: GRADIENT_BLUE,
            filter: "blur(200px)",
            opacity: 0.5,
          }}
        />
        <div
          className="absolute"
          style={{
            left: -187,
            top: -162,
            width: 1647,
            height: 163,
            background: GRADIENT_BLUE,
            filter: "blur(200px)",
            opacity: 0.5,
          }}
        />

        {/* Cards Container */}
        <div
          className="absolute flex flex-row items-stretch"
          style={{
            left: 34,
            top: 116,
            width: 1216,
            gap: 32,
          }}
        >
          {CARDS.map((card, idx) => (
            <div key={idx} style={{ flex: "1 1 0" }}>
              <ContactCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Mobile ──────────────────────────────────────────────────────────────────

function SectionMobile() {
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden"
      style={{ backgroundColor: colors.white }}
    >
      <div
        className="absolute left-0 top-0 w-full h-full opacity-30"
        style={{
          background: GRADIENT_BLUE,
          filter: "blur(100px)",
        }}
      />
      <div className="relative z-10 flex flex-col gap-6 px-6 py-16 sm:px-8">
        {CARDS.map((card, idx) => (
          <ContactCard key={idx} {...card} />
        ))}
      </div>
    </section>
  );
}

// ─── Shared Sub-Components ───────────────────────────────────────────────────

function ContactCard({
  title,
  body,
  linkText,
  iconBg,
  iconSrc,
}: {
  title: string;
  body: string;
  linkText: string;
  iconBg: string;
  iconSrc: string;
}) {
  return (
    <div
      className="flex flex-col items-start border"
      style={{
        backgroundColor: CARD_BG,
        borderColor: CARD_BORDER,
        borderRadius: radiuses.card,
        padding: 32,
        gap: 24,
        height: "100%",
      }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: 48,
          height: 48,
          backgroundColor: iconBg,
          borderRadius: radiuses.icon,
        }}
      >
        <Image
          src={iconSrc}
          alt={`${title} icon`}
          width={24}
          height={24}
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3
          className="m-0"
          style={{
            fontFamily: typography.fonts.poppins,
            fontWeight: 500,
            fontSize: 20,
            lineHeight: "28px",
            color: HEADING_COLOR,
          }}
        >
          {title}
        </h3>
        <p
          className="m-0"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
            color: BODY_COLOR,
          }}
        >
          {body}
        </p>
      </div>

      <div className="mt-auto flex items-center gap-2 pt-4">
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 600,
            fontSize: 16,
            lineHeight: "24px",
            color: LINK_COLOR,
          }}
        >
          {linkText}
        </span>
        <Image
          src="/section-2-connect-us/link-arrow.svg"
          alt="Arrow"
          width={16}
          height={16}
        />
      </div>
    </div>
  );
}
