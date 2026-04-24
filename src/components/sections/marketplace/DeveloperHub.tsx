import Image from "next/image";
import { typography, radiuses } from "@/tokens/design-tokens";

const BLUE_GRADIENT =
  "linear-gradient(180deg, rgba(40,100,228,1) 0%, rgba(236,242,255,1) 100%)";

type Feature = {
  title: string;
  body: string;
  icon: string;
};

const FEATURES: Feature[] = [
  {
    title: "Simple Integration",
    body: "Connect your LLM logic via API in minutes with our lightweight TypeScript SDK.",
    icon: "/section-8-marketplace/feature-1-icon.svg",
  },
  {
    title: "Automated Billing",
    body: "We handle payments, usage tracking, and global payouts so you can focus on building.",
    icon: "/section-8-marketplace/feature-2-icon.svg",
  },
  {
    title: "Built-in Analytics",
    body: "Monitor performance, usage, and earnings in real time with our developer console.",
    icon: "/section-8-marketplace/feature-3-icon.svg",
  },
];

export default function DeveloperHub() {
  return (
    <>
      <DeveloperHubDesktop />
      <DeveloperHubMobile />
    </>
  );
}

function DeveloperHubDesktop() {
  return (
    <section className="relative mt-10 hidden w-full overflow-hidden bg-[#F7F9FC] md:block">
      <div className="mx-auto w-full max-w-[1280px] px-8 py-10">
        <div className="grid grid-cols-[minmax(360px,476px)_minmax(460px,692px)] items-start justify-between gap-8 xl:gap-16">
          <div
            className="relative mt-24 w-full rounded-[32px] border bg-white p-8"
            style={{
              borderColor: "rgba(255,255,255,0.5)",
              boxShadow: "0px 20px 50px 0px rgba(0,0,0,0.05)",
            }}
          >
            <div className="absolute inset-0 opacity-[0.03]">
              <Image src="/section-8-marketplace/dashboard-grid.svg" alt="" fill unoptimized />
            </div>
            <div className="relative">
              <div className="flex items-start justify-between">
                <div>
                  <p className="m-0 text-sm font-medium leading-5 text-[#414753]">Total Earnings</p>
                  <p className="m-0 text-[36px] font-black leading-10 tracking-[-0.025em] text-[#191C1E]">$3,450.00</p>
                </div>
                <span className="rounded-full bg-[#B7EAFF] px-3 py-1 text-xs font-bold text-[#005C72]">PRO PLAN</span>
              </div>

              <div className="relative mt-8 h-40">
                <Image src="/section-8-marketplace/line-chart.svg" alt="" fill unoptimized />
              </div>

              <div className="mt-8">
                <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-[#414753]">Recent Activity</p>
                <div className="mt-4 flex flex-col gap-3">
                  <Activity text="Agent 'SocialCraft' run" time="2m ago" color="#22C55E" />
                  <Activity text="Payout processed" time="1h ago" color="#3B82F6" />
                  <Activity text="Agent 'DevHelper' update" time="4h ago" color="#22C55E" />
                </div>
              </div>

              <div className="mt-6">
                <Image src="/section-8-marketplace/quota-bar.svg" alt="" width={412} height={8} unoptimized />
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-[#414753]">API QUOTA</span>
                  <span className="text-[10px] font-semibold" style={{ background: BLUE_GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    72% USED
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full pt-5">
            <h2
              className="m-0 whitespace-pre-line"
              style={{
                fontFamily: typography.fonts.jakarta,
                fontWeight: 800,
                fontSize: 60,
                lineHeight: "72px",
                color: "#191C1E",
              }}
            >
              Build and monetize{"\n"}
              <span
                style={{
                  background: BLUE_GRADIENT,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                AI agents
              </span>
            </h2>
            <p
              className="m-0 pt-7"
              style={{
                maxWidth: 576,
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 20,
                lineHeight: "32.5px",
                color: "#414753",
              }}
            >
              Create, publish, and scale your AI agents on Shekel using our
              powerful SDK. Everything you need to turn logic into revenue.
            </p>

            <div className="mt-8 flex items-center gap-5 bg-[#F2F4F7] p-6" style={{ borderRadius: radiuses.pill }}>
              <div className="relative h-[52px] w-[52px]">
                <Image
                  src="/section-8-marketplace/earn-overlay.svg"
                  alt=""
                  fill
                  className="object-contain"
                  style={{ transform: "scale(1.22)" }}
                  unoptimized
                />
              </div>
              <div>
                <p className="m-0 text-[18px] font-bold leading-7 text-[#191C1E]">
                  Earn from every agent run
                </p>
                <p className="m-0 text-base font-medium leading-6" style={{ background: BLUE_GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Top creators earn $2k+/month
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-6">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="relative h-12 w-12 flex-shrink-0 rounded-xl bg-[#E6E8EB]">
                    <Image src={f.icon} alt="" fill unoptimized />
                  </div>
                  <div>
                    <h3 className="m-0 text-[18px] font-bold leading-7 text-[#191C1E]">{f.title}</h3>
                    <p className="m-0 pt-1 text-base leading-6 text-[#414753]">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="mt-10 h-[56px] min-w-[190px] border-0 px-8 py-0"
              style={{ background: BLUE_GRADIENT, borderRadius: radiuses.cardSm }}
            >
              <span
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 18,
                  lineHeight: "28px",
                  color: "#F7F9FC",
                }}
              >
                Start Building &gt;
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Activity({ text, time, color }: { text: string; time: string; color: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-[#F2F4F7] px-3 py-3">
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
        <span className="text-sm font-medium text-[#191C1E]">{text}</span>
      </div>
      <span className="text-xs text-[#414753]">{time}</span>
    </div>
  );
}

function DeveloperHubMobile() {
  return (
    <section className="mt-8 block bg-[#F7F9FC] px-6 py-16 md:hidden">
      <h2 className="m-0 text-[40px] font-extrabold leading-[1.05] text-[#191C1E]">
        Build and monetize{" "}
        <span style={{ background: BLUE_GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          AI agents
        </span>
      </h2>
      <p className="m-0 pt-4 text-base leading-7 text-[#414753]">
        Create, publish, and scale your AI agents on Shekel using our powerful SDK.
      </p>
    </section>
  );
}
