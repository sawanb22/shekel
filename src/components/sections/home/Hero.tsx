import React from "react";
import Image from "next/image";
import { Button } from "@/components/shared/Button";

// The partner logos we downloaded
const PATNERS = [
  { name: "OpenAI", src: "/images/hero/openai.png", width: 103, height: 28 },
  { name: "Google AI", src: "/images/hero/google-ai.png", width: 134, height: 73 },
  { name: "Anthropic", src: "/images/hero/anthropic.svg", width: 185, height: 123 },
  { name: "Azure", src: "/images/hero/azure.png", width: 90, height: 26 },
  { name: "Meta", src: "/images/hero/meta.png", width: 95, height: 19 },
  { name: "Notion", src: "/images/hero/notion.png", width: 102, height: 72 },
  { name: "Slack", src: "/images/hero/slack.png", width: 103, height: 42 },
  { name: "AWS", src: "/images/hero/aws.png", width: 50, height: 50 },
];

export default function Hero() {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Fixed-height hero area (Figma frame is 726px tall incl. logos bar) */}
      <div className="relative w-full h-[726px]">
        {/* Decorative background ellipses */}
        <div className="absolute left-[-19px] top-[-49px] h-[211px] w-[1343px] pointer-events-none">
          <div className="absolute inset-0 blur-[120px] opacity-40 bg-[radial-gradient(ellipse_at_center,_rgba(181,87,250,0.25),_transparent_70%)]" />
        </div>
        <div className="absolute left-[-98px] top-[-139px] w-[163px] h-[163px] pointer-events-none">
          <div className="absolute inset-0 blur-[100px] opacity-35 bg-[radial-gradient(ellipse_at_center,_rgba(181,87,250,0.35),_transparent_70%)]" />
        </div>
        <div className="absolute left-[1252px] top-[-82px] w-[163px] h-[163px] pointer-events-none">
          <div className="absolute inset-0 blur-[100px] opacity-35 bg-[radial-gradient(ellipse_at_center,_rgba(249,168,212,0.35),_transparent_70%)]" />
        </div>

        {/* Concentric border decorations + circuit zone */}
        <div className="absolute right-[-340px] top-[50px] w-[980px] h-[980px] pointer-events-none">
          <div className="absolute inset-[0%] border border-[#b557fa] rounded-[30px] opacity-30 mix-blend-difference" />
          <div className="absolute inset-[6%] border border-[#b557fa] rounded-[30px] opacity-30 mix-blend-difference" />
          <div className="absolute inset-[12%] border border-[#b557fa] rounded-[30px] opacity-20 mix-blend-difference" />
          <div className="absolute inset-[18%] border border-[#b557fa] rounded-[30px] opacity-10 mix-blend-difference" />
        </div>

        {/* Content (keep section full-width; constrain only inner content) */}
        <div className="relative z-10 w-full h-[637px] pt-[75px]">
          <div className="relative mx-auto w-full max-w-[1440px] h-full px-[56px]">
            {/* Left content block */}
            <div className="absolute left-[56px] top-[118px] w-[628px]">
              <h1 className="font-heading font-medium tracking-tight">
                <span
                  className="block text-[64px] leading-[72px] bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(190.548deg, rgb(255, 255, 255) 55.625%, rgba(255, 255, 255, 0) 110.73%)",
                    letterSpacing: "-3.6px",
                  }}
                >
                  The Marketplace for
                </span>
                <span className="block text-[88px] leading-[normal] bg-gradient-to-b from-[#2864e4] to-[#ecf2ff] bg-clip-text text-transparent">
                  AI Agents
                </span>
              </h1>

              <p className="mt-[60px] font-sans font-normal text-[#a7aab9] text-[20px] leading-[32.5px] w-[628px]">
                Discover, deploy, and monetize high-performance decentralized intelligence. The premier ecosystem for
                chaining autonomous workflows across industries.
              </p>

              <div className="mt-[64px] flex items-center gap-[14px]">
                <Button variant="primary">Join Waitlist</Button>
                <Button variant="outline">Explore Platform</Button>
              </div>
            </div>

            {/* Robot */}
            <div className="absolute left-[653px] top-[118px] w-[645px] h-[645px]">
              <Image src="/images/hero/robot.png" alt="AI Robot Graphic" fill className="object-cover" priority />
            </div>
          </div>
        </div>

        {/* Partner Logo Strip (fixed at bottom of hero frame) */}
        <div className="absolute left-0 right-0 bottom-0 h-[89px] bg-black border-y border-[rgba(255,255,255,0.2)] overflow-hidden">
          {/* Fades (34px) */}
          <div className="absolute left-0 top-0 bottom-0 w-[34px] bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-[34px] bg-gradient-to-l from-black to-transparent z-10" />

          <div className="relative mx-auto w-full max-w-[1280px] h-full">
            <div className="absolute left-[-23px] top-1/2 -translate-y-1/2">
              <Image src="/images/hero/openai.png" alt="OpenAI" width={103} height={28} />
            </div>
            <div className="absolute left-[131px] top-[2px]">
              <Image src="/images/hero/google-ai.png" alt="Google AI" width={134} height={73} />
            </div>
            <div className="absolute left-[301px] top-[-17px]">
              <Image src="/images/hero/anthropic.svg" alt="Anthropic" width={185} height={123} />
            </div>
            <div className="absolute left-[560px] top-[26px]">
              <Image src="/images/hero/azure.png" alt="Azure" width={90} height={26} />
            </div>
            <div className="absolute left-[723px] top-[35px]">
              <Image src="/images/hero/meta.png" alt="Meta" width={95} height={19} />
            </div>
            <div className="absolute left-[892px] top-[8px]">
              <Image src="/images/hero/notion.png" alt="Notion" width={102} height={72} />
            </div>
            <div className="absolute left-[1049px] top-[23px]">
              <Image src="/images/hero/slack.png" alt="Slack" width={103} height={42} />
            </div>
            <div className="absolute left-[1207px] top-[18px]">
              <Image src="/images/hero/aws.png" alt="AWS" width={50} height={50} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
