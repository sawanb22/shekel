"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

const FORM_BG = "#f2f4f7";
const FIELD_BG = "#ffffff";
const LABEL = "#414753";
const PLACEHOLDER = "rgba(114,119,133,0.5)";
const BORDER = "rgba(193,198,213,0.15)";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        margin: 0,
        fontFamily: typography.fonts.inter,
        fontWeight: 600,
        fontSize: 14,
        lineHeight: "20px",
        color: LABEL,
      }}
    >
      {children}
    </p>
  );
}

function InputLike({ text, h = 48 }: { text: string; h?: number }) {
  return (
    <div
      style={{
        height: h,
        backgroundColor: FIELD_BG,
        borderRadius: radiuses.icon,
        boxShadow: `0 0 0 1px ${BORDER}`,
        padding: "12px 16px",
      }}
    >
      <p
        style={{
          margin: 0,
          fontFamily: typography.fonts.inter,
          fontWeight: 400,
          fontSize: 16,
          lineHeight: h > 60 ? "24px" : "24px",
          color: PLACEHOLDER,
        }}
      >
        {text}
      </p>
    </div>
  );
}

function LeftForm() {
  return (
    <div className="flex flex-col gap-12">
      <div className="rounded-3xl p-8" style={{ background: FORM_BG }}>
        <div className="mb-8 flex items-center gap-2">
          <Image src="/section-2-create-ai-agent-page/basic-icon.svg" alt="" width={20} height={20} />
          <h3 style={{ margin: 0, fontFamily: typography.fonts.jakarta, fontWeight: 700, fontSize: 20, lineHeight: "28px", color: "#191c1e" }}>Basic Information</h3>
        </div>
        <div className="space-y-8">
          <div className="space-y-2">
            <Label>Agent Name</Label>
            <InputLike text="e.g. Content Strategist Pro" />
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <InputLike text="Briefly describe what your agent does..." h={120} />
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Category</Label>
              <div
                className="flex items-center justify-between"
                style={{ height: 48, background: FIELD_BG, borderRadius: radiuses.icon, boxShadow: `0 0 0 1px ${BORDER}`, padding: "12px 16px" }}
              >
                <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontSize: 16, lineHeight: "24px", color: "#191c1e" }}>Marketing & SEO</p>
                <Image src="/section-2-create-ai-agent-page/chevron.svg" alt="" width={24} height={24} />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Agent Icon</Label>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-dashed" style={{ borderColor: "#c1c6d5", background: "#e0e3e6" }}>
                  <Image src="/section-2-create-ai-agent-page/upload-icon.svg" alt="" width={22} height={20} />
                </div>
                <div className="rounded-lg px-4 py-2" style={{ background: "#e0e3e6" }}>
                  <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "20px", color: "#191c1e" }}>Upload Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl p-8" style={{ background: FORM_BG }}>
        <div className="mb-8 flex items-center gap-2">
          <Image src="/section-2-create-ai-agent-page/capability-icon.svg" alt="" width={16} height={20} />
          <h3 style={{ margin: 0, fontFamily: typography.fonts.jakarta, fontWeight: 700, fontSize: 20, lineHeight: "28px", color: "#191c1e" }}>Capabilities</h3>
        </div>
        <div className="space-y-6">
          <div>
            <Label>Core Features</Label>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              {["SEO Optimization", "Social Media Scheduling", "Lead Generation", "Bulk Email Campaigns"].map((f) => (
                <div key={f} className="flex items-center gap-3 rounded-xl bg-white p-4" style={{ boxShadow: `0 0 0 1px ${BORDER}` }}>
                  <div className="h-5 w-5 rounded border" style={{ borderColor: "#6b7280" }} />
                  <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 500, fontSize: 14, lineHeight: "20px", color: "#191c1e" }}>{f}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Example Outputs</Label>
            <InputLike text="Type your first prompt example here to show users what to expect..." h={52} />
          </div>
          <div>
            <Label>Industry Tags</Label>
            <div className="mt-3 flex flex-wrap gap-2">
              {["#SaaS", "#Marketing", "#Automation"].map((tag) => (
                <span key={tag} style={{ borderRadius: 9999, background: "#b7eaff", color: "#001f28", padding: "6px 16px", fontFamily: typography.fonts.inter, fontSize: 12, lineHeight: "16px", fontWeight: 600 }}>
                  {tag}
                </span>
              ))}
              <span style={{ borderRadius: 9999, border: "2px dashed #c1c6d5", color: "#727785", padding: "6px 16px", fontFamily: typography.fonts.inter, fontSize: 12, lineHeight: "16px", fontWeight: 600 }}>
                + Add Tag
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl p-8" style={{ background: FORM_BG }}>
        <div className="mb-8 flex items-center gap-2">
          <Image src="/section-2-create-ai-agent-page/pricing-icon.svg" alt="" width={22} height={16} />
          <h3 style={{ margin: 0, fontFamily: typography.fonts.jakarta, fontWeight: 700, fontSize: 20, lineHeight: "28px", color: "#191c1e" }}>Pricing Strategy</h3>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Pay-per-use", sub: "Charge for every successful execution.", price: "$0.05", unit: "/ RUN", icon: "/section-2-create-ai-agent-page/pricing-card-icon-1.svg", active: true },
            { title: "Subscription", sub: "Set a monthly fee for unlimited access.", price: "$19.00", unit: "/ MO", icon: "/section-2-create-ai-agent-page/pricing-card-icon-2.svg" },
            { title: "Freemium", sub: "Free with limits, then scale up.", price: "Free", unit: "", icon: "/section-2-create-ai-agent-page/pricing-card-icon-3.svg" },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl bg-white p-6" style={{ boxShadow: c.active ? "0 0 0 2px #005ab6, 0 10px 15px -3px rgba(0,0,0,0.1)" : `0 0 0 1px ${BORDER}` }}>
              <Image src={c.icon} alt="" width={28} height={26} />
              <p style={{ margin: "12px 0 0", fontFamily: typography.fonts.jakarta, fontWeight: 700, fontSize: 16, lineHeight: "24px", color: "#191c1e" }}>{c.title}</p>
              <p style={{ margin: "2px 0 0", fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "16px", color: "#414753" }}>{c.sub}</p>
              <div className="mt-3 flex items-end gap-1">
                <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 28, lineHeight: "28px", color: "#191c1e" }}>{c.price}</p>
                <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 10, lineHeight: "15px", color: "#727785", letterSpacing: 0.5 }}>{c.unit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl p-8" style={{ background: FORM_BG }}>
        <div className="mb-8 flex items-center gap-2">
          <Image src="/section-2-create-ai-agent-page/config-icon.svg" alt="" width={22} height={22} />
          <h3 style={{ margin: 0, fontFamily: typography.fonts.jakarta, fontWeight: 700, fontSize: 20, lineHeight: "28px", color: "#191c1e" }}>Model Configuration</h3>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Base Model</Label>
            <div className="flex items-center justify-between rounded-xl bg-white p-3" style={{ boxShadow: `0 0 0 1px ${BORDER}` }}>
              <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontSize: 16, lineHeight: "24px", color: "#191c1e" }}>GPT-4o (Optimized)</p>
              <Image src="/section-2-create-ai-agent-page/chevron.svg" alt="" width={24} height={24} />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Output Format</Label>
            <div className="grid grid-cols-3 gap-4">
              {["Markdown", "JSON", "HTML"].map((v, i) => (
                <div key={v} className="rounded-lg bg-white py-2 text-center" style={{ boxShadow: i === 0 ? "0 0 0 1px #005ab6" : `0 0 0 1px ${BORDER}` }}>
                  <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "20px", color: "#414753" }}>{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 space-y-2">
          <Label>System Prompt / Instructions</Label>
          <div className="rounded-xl bg-white p-3" style={{ minHeight: 144, boxShadow: `0 0 0 1px ${BORDER}` }}>
            <p style={{ margin: 0, fontFamily: typography.fonts.mono, fontSize: 14, lineHeight: "20px", color: "#6b7280" }}>
              You are a professional marketing architect specializing in SaaS scaling...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightRail() {
  return (
    <div className="flex flex-col gap-10">
      <div className="rounded-[24px] p-6" style={{ backgroundColor: FORM_BG, boxShadow: "0 1px 1px rgba(0,0,0,0.05)" }}>
        <div className="flex items-center justify-between">
          <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 10, lineHeight: "15px", letterSpacing: 1, textTransform: "uppercase", color: "#2864e4" }}>Live Preview</span>
          <Image src="/section-2-create-ai-agent-page/preview-eye.svg" alt="" width={17} height={12} />
        </div>
        <div className="mt-6 rounded-2xl border border-black/10 bg-white p-4">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: "linear-gradient(180deg,#2864e4,#ecf2ff)" }}>
              <Image src="/section-2-create-ai-agent-page/preview-card-icon.svg" alt="" width={28} height={24} />
            </div>
            <div>
              <p style={{ margin: 0, fontFamily: typography.fonts.jakarta, fontWeight: 800, fontSize: 18, lineHeight: "22.5px", color: "#000" }}>Content Strategist Pro</p>
              <p style={{ margin: "3px 0 0", fontFamily: typography.fonts.inter, fontWeight: 500, fontSize: 12, lineHeight: "16px", color: "#000" }}>By You</p>
            </div>
          </div>
          <p style={{ margin: "14px 0 0", fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "22.75px", color: "#000" }}>
            Professional content architect that generates SEO-optimized blueprints for...
          </p>
          <div className="mt-3 flex gap-2">
            <span style={{ border: "1px solid rgba(255,255,255,0.26)", borderRadius: 6, padding: "4px 8px", fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 10, lineHeight: "15px", color: "#070707" }}>#SEO</span>
            <span style={{ border: "1px solid rgba(255,255,255,0.26)", borderRadius: 6, padding: "4px 8px", fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 10, lineHeight: "15px", color: "#000" }}>#Marketing</span>
          </div>
          <div className="mt-4 border-t pt-4" style={{ borderColor: "rgba(193,198,213,0.2)" }}>
            <div className="flex items-center justify-between">
              <div>
                <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 500, fontSize: 12, lineHeight: "16px", color: "#000" }}>Price per run</p>
                <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 32, lineHeight: "28px", background: "linear-gradient(180deg,#2864e4,#ecf2ff)", WebkitBackgroundClip: "text", color: "transparent" }}>$0.05</p>
              </div>
              <div className="rounded-xl px-5 py-2" style={{ background: "linear-gradient(180deg,#2864e4,#ecf2ff)", boxShadow: "0 4px 6px -1px rgba(0,0,0,.1)" }}>
                <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "20px", color: "#fff" }}>Try Agent</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between px-2">
            <span style={{ fontFamily: typography.fonts.inter, fontWeight: 500, fontSize: 12, lineHeight: "16px", color: "#000" }}>Completion Score</span>
            <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 12, lineHeight: "16px", background: "linear-gradient(180deg,#2864e4,#ecf2ff)", WebkitBackgroundClip: "text", color: "transparent" }}>85%</span>
          </div>
          <div style={{ height: 6, borderRadius: 9999, background: "#e0e3e6", overflow: "hidden" }}>
            <div style={{ width: "85%", height: "100%", background: "linear-gradient(180deg,#2864e4,#ecf2ff)" }} />
          </div>
          <p style={{ margin: "10px 8px 0", fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 11, lineHeight: "13.75px", color: "#000" }}>
            Tip: Adding high-quality example outputs increases agent engagement by up to 40%.
          </p>
        </div>
      </div>

      <div className="rounded-xl bg-white p-5" style={{ boxShadow: "0 1px 1px rgba(0,0,0,.05)" }}>
        <div className="mb-4 flex h-7 w-7 items-center justify-center rounded-lg" style={{ background: "rgba(0,90,182,0.05)" }}>
          <Image src="/section-2-create-ai-agent-page/help-icon.svg" alt="" width={13} height={13} />
        </div>
        <p style={{ margin: 0, fontFamily: typography.fonts.jakarta, fontWeight: 700, fontSize: 30, lineHeight: "22.5px", color: "#0f172a" }}>Need help launching?</p>
        <p style={{ margin: "10px 0 16px", fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "22.75px", color: "#64748b" }}>
          Get guidance to set up, optimize, and publish your AI agent faster.
        </p>
        <div className="rounded-xl py-2 text-center" style={{ background: "#2864e4", boxShadow: "0 10px 15px -3px rgba(0,90,182,0.1)" }}>
          <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "20px", color: "#fff" }}>Book a Demo</p>
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-1">
            <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "20px", color: "#005ab6" }}>Contact Support</p>
            <Image src="/section-2-create-ai-agent-page/help-arrow.svg" alt="" width={9} height={9} />
          </div>
          <p style={{ margin: "6px 0 0", fontFamily: typography.fonts.inter, fontWeight: 500, fontSize: 12, lineHeight: "18px", color: "#94a3b8" }}>Response within 24 hours</p>
        </div>
      </div>
    </div>
  );
}

export default function AgentBuilderSection() {
  return (
    <section className="px-4 md:px-8">
      <div className="mx-auto grid max-w-[1236px] gap-8 lg:grid-cols-[794.666px_373.333px]">
        <LeftForm />
        <RightRail />
      </div>
    </section>
  );
}
