import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

const BLUE_GRADIENT =
  "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";

const LINKS = [
  {
    title: "Run marketing campaigns",
    body: "Generate and automate multi-channel campaigns\nusing AI agents.",
    cta: "Explore marketing",
  },
  {
    title: "Build intelligent workflows",
    body: "Connect multiple AI agents to automate business\nprocesses.",
    cta: "Explore workflows",
  },
  {
    title: "Scale with automation",
    body: "Deploy AI agents for support, finance, and\noperations.",
    cta: "Explore automation",
  },
];

export default function WhatYouCanDo() {
  return (
    <>
      <WhatYouCanDoDesktop />
      <WhatYouCanDoMobile />
    </>
  );
}

function WhatYouCanDoDesktop() {
  return (
    <section className="relative hidden w-full overflow-hidden bg-[#F7F9FC] md:block">
      <div className="mx-auto w-full max-w-[1280px] px-8 pb-24 pt-[37px]">
        <header className="mb-16">
          <h2
            className="m-0 text-center"
            style={{
              fontFamily: typography.fonts.poppins,
              fontWeight: 500,
              fontSize: 48,
              lineHeight: "48px",
              color: "#0B0B0B",
            }}
          >
            What you can do with{" "}
            <span
              style={{
                background: BLUE_GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Shekel
            </span>
          </h2>
        </header>

        <div className="relative overflow-hidden rounded-3xl bg-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "linear-gradient(90deg, rgba(47,128,237,1) 0%, rgba(86,204,242,1) 100%)",
              filter: "blur(120px)",
              transform: "translateY(-35%)",
            }}
          />
          <div className="pointer-events-none absolute inset-0">
            <Image src="/section-6-marketplace/main-bg.svg" alt="" fill unoptimized />
          </div>

          <div className="relative p-12">
            <div className="relative mx-auto flex w-fit items-center gap-8">
              <WorkflowNode icon="/section-6-marketplace/content-icon.svg" label="Content AI" />
              <div className="h-[2px] w-12 bg-gradient-to-r from-[#2F80ED] to-[#56CCF2]" />
              <WorkflowNode icon="/section-6-marketplace/design-icon.svg" label="Design AI" accent />
              <div className="h-[2px] w-12 bg-gradient-to-r from-[#56CCF2] to-[#2F80ED]" />
              <WorkflowNode icon="/section-6-marketplace/publish-icon.svg" label="Publish AI" />
            </div>

            <div className="mx-auto mt-12 max-w-[576px] rounded-xl bg-white p-4 shadow-[0px_20px_50px_0px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-4 rounded-xl bg-white p-4">
                <div className="relative h-10 w-10 rounded-lg bg-[rgba(47,128,237,0.1)]">
                  <Image src="/section-6-marketplace/input-overlay.svg" alt="" fill unoptimized />
                </div>
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: "#475569",
                  }}
                >
                  Generate marketing campaign
                </span>
                <div className="ml-auto">
                  <Image src="/section-6-marketplace/input-caret.svg" alt="" width={8} height={24} unoptimized />
                </div>
              </div>
            </div>

            <StatusPill className="absolute right-12 top-16" icon="/section-6-marketplace/top-right-icon.svg" text="12 Posts generated" />
            <StatusPill className="absolute left-16 top-[190px]" icon="/section-6-marketplace/mid-left-icon.svg" text="Scheduled" />
            <StatusPill className="absolute right-12 top-[265px]" text="Success badge" badge="Completed" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-8 px-0 pt-4">
          {LINKS.map((item, i) => (
            <article key={item.title} className="flex flex-col gap-4">
              <h3
                className="m-0"
                style={{
                  fontFamily: typography.fonts.poppins,
                  fontWeight: 600,
                  fontSize: 18,
                  lineHeight: "28px",
                  color: "#0B0B0B",
                }}
              >
                {item.title}
              </h3>
              <p
                className="m-0 whitespace-pre-line"
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "26px",
                  color: "#4A4A4A",
                }}
              >
                {item.body}
              </p>
              <a className="inline-flex items-center gap-1 no-underline" href="#">
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: "24px",
                    background: BLUE_GRADIENT,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {item.cta}
                </span>
                <Image
                  src={`/section-6-marketplace/link-arrow-${i + 1}.svg`}
                  alt=""
                  width={12}
                  height={12}
                  unoptimized
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowNode({
  icon,
  label,
  accent,
}: {
  icon: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="flex h-[88px] w-[104px] items-center justify-center rounded-3xl border bg-[rgba(255,255,255,0.7)]"
        style={{ borderColor: "rgba(255,255,255,0.4)", backdropFilter: "blur(16px)" }}
      >
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl"
          style={{ backgroundColor: accent ? "#56CCF2" : "#2F80ED" }}
        >
          <Image src={icon} alt="" width={19} height={19} unoptimized />
        </div>
      </div>
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 700,
          fontSize: 12,
          lineHeight: "16px",
          color: "#334155",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function StatusPill({
  className,
  icon,
  text,
  badge,
}: {
  className: string;
  icon?: string;
  text: string;
  badge?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${className}`}
      style={{
        background: "rgba(255,255,255,0.7)",
        borderColor: "rgba(255,255,255,0.5)",
        backdropFilter: "blur(16px)",
      }}
    >
      {badge ? (
        <span
          className="rounded px-2 py-[2px]"
          style={{
            background: "rgba(47,128,237,0.1)",
            fontFamily: typography.fonts.inter,
            fontWeight: 700,
            fontSize: 10,
            lineHeight: "15px",
            color: "#2F80ED",
          }}
        >
          {badge}
        </span>
      ) : icon ? (
        <Image src={icon} alt="" width={24} height={24} unoptimized />
      ) : null}
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 14,
          lineHeight: "20px",
          color: "#1E293B",
        }}
      >
        {text}
      </span>
    </div>
  );
}

function WhatYouCanDoMobile() {
  return (
    <section className="block bg-[#F7F9FC] px-6 py-16 md:hidden">
      <h2
        className="m-0 text-center"
        style={{
          fontFamily: typography.fonts.poppins,
          fontWeight: 500,
          fontSize: "clamp(30px,8vw,42px)",
          lineHeight: "1.1",
          color: "#0B0B0B",
        }}
      >
        What you can do with{" "}
        <span
          style={{
            background: BLUE_GRADIENT,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Shekel
        </span>
      </h2>
      <div className="mt-8 rounded-3xl bg-white p-6">
        <div className="flex flex-col gap-4">
          {["Content AI", "Design AI", "Publish AI"].map((name, idx) => (
            <div key={name} className="rounded-xl bg-slate-50 p-4 text-center text-sm font-semibold text-slate-700">
              {name}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6">
        {LINKS.map((item) => (
          <article key={`m-${item.title}`} className="flex flex-col gap-3">
            <h3 className="m-0 text-xl font-semibold text-[#0B0B0B]">{item.title}</h3>
            <p className="m-0 whitespace-pre-line text-base leading-6 text-[#4A4A4A]">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
