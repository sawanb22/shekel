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
    <section className="relative w-full bg-black min-h-screen flex flex-col justify-between overflow-hidden pt-28">
      {/* Decorative Background Gradients (Simulating ellipses) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#b557fa]/20 via-[#b557fa]/5 to-transparent pointer-events-none -translate-y-1/4 translate-x-1/4 rounded-full blur-[80px]" />
      
      {/* Concentric Border Decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-[#b557fa]/30 rounded-3xl -translate-y-10 translate-x-32 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] border border-[#b557fa]/20 rounded-[40px] -translate-y-20 translate-x-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] border border-[#b557fa]/10 rounded-[50px] -translate-y-32 translate-x-52 pointer-events-none" />

      {/* Main Content Container */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between relative z-10">
        
        {/* Left Column: Typography & CTAs */}
        <div className="flex flex-col items-start max-w-2xl mt-12 lg:mt-0">
          
          <h1 className="font-heading font-medium tracking-tight flex flex-col mb-[50px]">
             {/* Gradient applied to 'The Marketplace for' */}
             <span 
               className="text-[48px] md:text-[64px] leading-[1.1] bg-clip-text text-transparent"
               style={{ backgroundImage: "linear-gradient(190.548deg, rgb(255, 255, 255) 55.625%, rgba(255, 255, 255, 0) 110.73%)" }}
             >
               The Marketplace for
             </span>
             {/* Solid Blue Gradient applied to 'AI Agents' */}
             <span className="text-[64px] md:text-[88px] leading-[1.1] bg-gradient-to-b from-[#2864e4] to-[#ecf2ff] bg-clip-text text-transparent">
               AI Agents
             </span>
          </h1>

          <p className="font-sans font-normal text-[#a7aab9] text-[18px] md:text-[20px] leading-[1.6] max-w-[628px] mb-[60px]">
            Discover, deploy, and monetize high-performance decentralized intelligence. The premier ecosystem for chaining autonomous workflows across industries.
          </p>

          <div className="flex flex-row items-center gap-[14px]">
            <Button variant="primary">Join Waitlist</Button>
            <Button variant="outline">Explore Platform</Button>
          </div>
        </div>

        {/* Right Column: Hero Graphic */}
        <div className="relative w-full max-w-lg lg:max-w-[645px] aspect-square mt-16 lg:mt-0 lg:ml-8 flex-shrink-0">
          <Image 
            src="/images/hero/robot.png" 
            alt="AI Robot Graphic" 
            fill 
            className="object-contain animate-[float_6s_ease-in-out_infinite]"
            priority
          />
        </div>
      </div>

      {/* Partner Logo Strip */}
      <div className="w-full relative h-[89px] border-t border-b border-[rgba(255,255,255,0.2)] bg-black overflow-hidden flex items-center justify-center mt-20">
         {/* Fade left/right */}
         <div className="absolute top-0 left-0 bottom-0 w-[100px] bg-gradient-to-r from-black to-transparent z-10" />
         <div className="absolute top-0 right-0 bottom-0 w-[100px] bg-gradient-to-l from-black to-transparent z-10" />

         {/* Logos Flex Track */}
         <div className="flex flex-row items-center justify-between w-full max-w-7xl mx-auto px-8 gap-8 whitespace-nowrap opacity-80 overflow-x-auto no-scrollbar relative z-0">
           {PATNERS.map((partner, idx) => (
             <div key={idx} className="relative flex items-center justify-center min-w-max">
               <Image 
                 src={partner.src} 
                 alt={partner.name} 
                 width={partner.width > 120 ? 120 : partner.width} 
                 height={partner.height > 40 ? 40 : partner.height}
                 className="object-contain hover:opacity-100 transition-opacity" 
               />
             </div>
           ))}
         </div>
      </div>
    </section>
  );
}
