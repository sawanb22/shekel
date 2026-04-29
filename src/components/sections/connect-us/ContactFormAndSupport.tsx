"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// ContactFormAndSupport.tsx  —  "Contact Form & Support Info"
// Figma frame: 508-7598  "Section 3 & 4: Contact Form & Support Info"
// Canvas: 1280 × 800 px   Page-y: 1312   bg: transparent
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Container        (x=32, y=80)       1216×640
//     Form (Left)    (x=0, y=0)         682.66×640
//     Support (Right)(x=746.67, y=0)    469.33×auto
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 800;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BORDER_SOFT = "rgba(193, 198, 213, 0.15)";
const INPUT_BG = "#F2F4F7";
const HEADING_DARK = "#191C1E";
const TEXT_LABEL = "#414753";
const TEXT_PLACEHOLDER = "#727785";
const BUTTON_GRADIENT = `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`;
const FAQ_BG = "rgba(22, 114, 223, 0.1)";
const FAQ_BORDER = "#005AB6";
const ICON_BG = "#ECEEF1";

export default function ContactFormAndSupport() {
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
        <div
          className="absolute flex flex-row items-stretch"
          style={{
            left: 32,
            top: 80,
            width: 1216,
            height: 640,
            gap: 64,
          }}
        >
          {/* Left Form */}
          <div
            className="flex flex-col border shadow-sm"
            style={{
              width: 682.66,
              height: "100%",
              backgroundColor: colors.white,
              borderColor: BORDER_SOFT,
              borderRadius: radiuses.cardLg,
              padding: 48,
              gap: 32,
            }}
          >
            <h2
              className="m-0"
              style={{
                fontFamily: typography.fonts.jakarta,
                fontWeight: 700,
                fontSize: 30,
                lineHeight: "36px",
                color: HEADING_DARK,
              }}
            >
              Send a Message
            </h2>

            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex gap-6">
                <div className="flex flex-col flex-1 gap-2">
                  <label
                    style={{
                      fontFamily: typography.fonts.inter,
                      fontWeight: 600,
                      fontSize: 14,
                      lineHeight: "20px",
                      color: TEXT_LABEL,
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full border-none outline-none ring-0"
                    style={{
                      backgroundColor: INPUT_BG,
                      borderRadius: radiuses.inputIcon,
                      padding: "16px",
                      fontFamily: typography.fonts.inter,
                      fontSize: 16,
                      color: HEADING_DARK,
                    }}
                  />
                </div>
                <div className="flex flex-col flex-1 gap-2">
                  <label
                    style={{
                      fontFamily: typography.fonts.inter,
                      fontWeight: 600,
                      fontSize: 14,
                      lineHeight: "20px",
                      color: TEXT_LABEL,
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full border-none outline-none ring-0"
                    style={{
                      backgroundColor: INPUT_BG,
                      borderRadius: radiuses.inputIcon,
                      padding: "16px",
                      fontFamily: typography.fonts.inter,
                      fontSize: 16,
                      color: HEADING_DARK,
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: TEXT_LABEL,
                  }}
                >
                  Subject
                </label>
                <select
                  className="w-full border-none outline-none ring-0 appearance-none"
                  style={{
                    backgroundColor: INPUT_BG,
                    borderRadius: radiuses.inputIcon,
                    padding: "16px",
                    fontFamily: typography.fonts.inter,
                    fontSize: 16,
                    color: HEADING_DARK,
                    backgroundImage: 'url("/section-3-connect-us/chevron.svg")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                  }}
                >
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Billing</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: TEXT_LABEL,
                  }}
                >
                  Message
                </label>
                <textarea
                  placeholder="How can we help you?"
                  className="w-full border-none outline-none ring-0 resize-none"
                  style={{
                    backgroundColor: INPUT_BG,
                    borderRadius: radiuses.inputIcon,
                    padding: "16px",
                    height: 120,
                    fontFamily: typography.fonts.inter,
                    fontSize: 16,
                    color: HEADING_DARK,
                  }}
                />
              </div>

              <button
                className="w-full border-none cursor-pointer"
                style={{
                  background: BUTTON_GRADIENT,
                  borderRadius: radiuses.inputIcon,
                  padding: "16px",
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 700,
                  fontSize: 16,
                  color: colors.white,
                  marginTop: 8,
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Support Info */}
          <div
            className="flex flex-col"
            style={{
              width: 469.33,
              gap: 48,
              paddingTop: 16,
            }}
          >
            <div className="flex flex-col gap-8">
              <h3
                className="m-0"
                style={{
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 700,
                  fontSize: 24,
                  lineHeight: "32px",
                  color: HEADING_DARK,
                }}
              >
                Service Excellence
              </h3>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{ width: 48, height: 48, backgroundColor: ICON_BG, borderRadius: radiuses.icon }}
                  >
                    <Image src="/section-3-connect-us/icon-response.svg" alt="Response" width={24} height={24} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span
                      style={{
                        fontFamily: typography.fonts.inter,
                        fontWeight: 700,
                        fontSize: 18,
                        lineHeight: "28px",
                        color: HEADING_DARK,
                      }}
                    >
                      Response time
                    </span>
                    <span
                      style={{
                        fontFamily: typography.fonts.inter,
                        fontWeight: 400,
                        fontSize: 16,
                        lineHeight: "24px",
                        color: TEXT_LABEL,
                      }}
                    >
                      We usually reply within 24 hours.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{ width: 48, height: 48, backgroundColor: ICON_BG, borderRadius: radiuses.icon }}
                  >
                    <Image src="/section-3-connect-us/icon-clock.svg" alt="Availability" width={24} height={24} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span
                      style={{
                        fontFamily: typography.fonts.inter,
                        fontWeight: 700,
                        fontSize: 18,
                        lineHeight: "28px",
                        color: HEADING_DARK,
                      }}
                    >
                      Availability
                    </span>
                    <span
                      style={{
                        fontFamily: typography.fonts.inter,
                        fontWeight: 400,
                        fontSize: 16,
                        lineHeight: "24px",
                        color: TEXT_LABEL,
                      }}
                    >
                      Mon-Fri: 9am - 6pm EST
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <span
                style={{
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 700,
                  fontSize: 14,
                  lineHeight: "20px",
                  letterSpacing: "0.1em",
                  color: TEXT_PLACEHOLDER,
                  textTransform: "uppercase",
                }}
              >
                CONNECT WITH US
              </span>
              <div className="flex gap-4">
                {[1, 2, 3].map((i) => (
                  <Image key={i} src={`/section-3-connect-us/social-${i}.svg`} alt="Social" width={24} height={24} />
                ))}
              </div>
            </div>

            <div
              className="flex items-center justify-between"
              style={{
                backgroundColor: FAQ_BG,
                borderLeft: `4px solid ${FAQ_BORDER}`,
                borderRadius: "0 8px 8px 0",
                padding: "24px 32px",
                marginTop: "auto",
              }}
            >
              <div className="flex flex-col gap-1">
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 700,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: FAQ_BORDER,
                  }}
                >
                  Looking for quick answers?
                </span>
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: TEXT_LABEL,
                  }}
                >
                  Browse Faq
                </span>
              </div>
              <Image src="/section-3-connect-us/arrow-right.svg" alt="Arrow" width={24} height={24} />
            </div>
          </div>
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
      <div className="flex flex-col gap-12 px-6 py-16 sm:px-8">
        
        {/* Left Form */}
        <div
          className="flex flex-col border shadow-sm"
          style={{
            backgroundColor: colors.white,
            borderColor: BORDER_SOFT,
            borderRadius: radiuses.cardLg,
            padding: 32,
            gap: 32,
          }}
        >
          <h2
            className="m-0"
            style={{
              fontFamily: typography.fonts.jakarta,
              fontWeight: 700,
              fontSize: 24,
              lineHeight: "32px",
              color: HEADING_DARK,
            }}
          >
            Send a Message
          </h2>

          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="flex flex-col flex-1 gap-2">
                <label
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: TEXT_LABEL,
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border-none outline-none ring-0"
                  style={{
                    backgroundColor: INPUT_BG,
                    borderRadius: radiuses.inputIcon,
                    padding: "16px",
                    fontFamily: typography.fonts.inter,
                    fontSize: 16,
                    color: HEADING_DARK,
                  }}
                />
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <label
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: TEXT_LABEL,
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border-none outline-none ring-0"
                  style={{
                    backgroundColor: INPUT_BG,
                    borderRadius: radiuses.inputIcon,
                    padding: "16px",
                    fontFamily: typography.fonts.inter,
                    fontSize: 16,
                    color: HEADING_DARK,
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: "20px",
                  color: TEXT_LABEL,
                }}
              >
                Subject
              </label>
              <select
                className="w-full border-none outline-none ring-0 appearance-none"
                style={{
                  backgroundColor: INPUT_BG,
                  borderRadius: radiuses.inputIcon,
                  padding: "16px",
                  fontFamily: typography.fonts.inter,
                  fontSize: 16,
                  color: HEADING_DARK,
                  backgroundImage: 'url("/section-3-connect-us/chevron.svg")',
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 16px center",
                }}
              >
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Billing</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: "20px",
                  color: TEXT_LABEL,
                }}
              >
                Message
              </label>
              <textarea
                placeholder="How can we help you?"
                className="w-full border-none outline-none ring-0 resize-none"
                style={{
                  backgroundColor: INPUT_BG,
                  borderRadius: radiuses.inputIcon,
                  padding: "16px",
                  height: 120,
                  fontFamily: typography.fonts.inter,
                  fontSize: 16,
                  color: HEADING_DARK,
                }}
              />
            </div>

            <button
              className="w-full border-none cursor-pointer"
              style={{
                background: BUTTON_GRADIENT,
                borderRadius: radiuses.inputIcon,
                padding: "16px",
                fontFamily: typography.fonts.jakarta,
                fontWeight: 700,
                fontSize: 16,
                color: colors.white,
                marginTop: 8,
              }}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Support Info */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-8">
            <h3
              className="m-0"
              style={{
                fontFamily: typography.fonts.jakarta,
                fontWeight: 700,
                fontSize: 24,
                lineHeight: "32px",
                color: HEADING_DARK,
              }}
            >
              Service Excellence
            </h3>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{ width: 48, height: 48, backgroundColor: ICON_BG, borderRadius: radiuses.icon }}
                >
                  <Image src="/section-3-connect-us/icon-response.svg" alt="Response" width={24} height={24} />
                </div>
                <div className="flex flex-col gap-1">
                  <span
                    style={{
                      fontFamily: typography.fonts.inter,
                      fontWeight: 700,
                      fontSize: 18,
                      lineHeight: "28px",
                      color: HEADING_DARK,
                    }}
                  >
                    Response time
                  </span>
                  <span
                    style={{
                      fontFamily: typography.fonts.inter,
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: "24px",
                      color: TEXT_LABEL,
                    }}
                  >
                    We usually reply within 24 hours.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{ width: 48, height: 48, backgroundColor: ICON_BG, borderRadius: radiuses.icon }}
                >
                  <Image src="/section-3-connect-us/icon-clock.svg" alt="Availability" width={24} height={24} />
                </div>
                <div className="flex flex-col gap-1">
                  <span
                    style={{
                      fontFamily: typography.fonts.inter,
                      fontWeight: 700,
                      fontSize: 18,
                      lineHeight: "28px",
                      color: HEADING_DARK,
                    }}
                  >
                    Availability
                  </span>
                  <span
                    style={{
                      fontFamily: typography.fonts.inter,
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: "24px",
                      color: TEXT_LABEL,
                    }}
                  >
                    Mon-Fri: 9am - 6pm EST
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span
              style={{
                fontFamily: typography.fonts.jakarta,
                fontWeight: 700,
                fontSize: 14,
                lineHeight: "20px",
                letterSpacing: "0.1em",
                color: TEXT_PLACEHOLDER,
                textTransform: "uppercase",
              }}
            >
              CONNECT WITH US
            </span>
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <Image key={i} src={`/section-3-connect-us/social-${i}.svg`} alt="Social" width={24} height={24} />
              ))}
            </div>
          </div>

          <div
            className="flex items-center justify-between"
            style={{
              backgroundColor: FAQ_BG,
              borderLeft: `4px solid ${FAQ_BORDER}`,
              borderRadius: "0 8px 8px 0",
              padding: "24px",
            }}
          >
            <div className="flex flex-col gap-1">
              <span
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 700,
                  fontSize: 16,
                  lineHeight: "24px",
                  color: FAQ_BORDER,
                }}
              >
                Looking for quick answers?
              </span>
              <span
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: "20px",
                  color: TEXT_LABEL,
                }}
              >
                Browse Faq
              </span>
            </div>
            <Image src="/section-3-connect-us/arrow-right.svg" alt="Arrow" width={24} height={24} />
          </div>
        </div>

      </div>
    </section>
  );
}