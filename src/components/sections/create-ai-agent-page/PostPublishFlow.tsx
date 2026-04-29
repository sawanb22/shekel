"use client";

import Image from "next/image";
import { typography } from "@/tokens/design-tokens";

const ITEMS = [
  { icon: "/section-4-create-ai-agent-page/icon-1.svg", title: "Marketplace Presence", body: "Your agent appears in our global marketplace, visible to thousands of potential users." },
  { icon: "/section-4-create-ai-agent-page/icon-2.svg", title: "Organic Discovery", body: "Users can discover, search for, and run your agent for their specific business needs." },
  { icon: "/section-4-create-ai-agent-page/icon-3.svg", title: "Earn Revenue", body: "You earn directly from every execution, providing a scalable passive income stream." },
];

export default function PostPublishFlow() {
  return (
    <section className="px-4 md:px-8">
      <div className="mx-auto max-w-[1024px]">
        <h2 className="text-center" style={{ margin: 0, color: "#191c1e", fontFamily: typography.fonts.poppins, fontSize: 36, lineHeight: "36px", fontWeight: 500 }}>What happens after you publish?</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {ITEMS.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#daf2fd]">
                <Image src={item.icon} alt="" width={28} height={24} />
              </div>
              <h3 style={{ margin: "14px 0 8px", color: "#191c1e", fontFamily: typography.fonts.jakarta, fontWeight: 700, fontSize: 30 }}>{item.title}</h3>
              <p style={{ margin: 0, color: "#414753", lineHeight: "22px" }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
