import Image from "next/image";
import Link from "next/link";
import { typography } from "@/tokens/design-tokens";

const productLinks = ["Explore Agents", "Categories", "Agent Details", "Pricing", "AI Agents Statistics"];
const platformLinks = ["Create / Publish Agents", "Workflow Builder", "Developer", "Documentation"];
const companyLinks = ["About", "Contact", "FAQ", "Testimonials / Reviews"];
const resourceLinks = ["Blog", "Case Studies", "Brand Assets / Media Kit", "Privacy Policy", "Terms of Service"];

export default function Footer() {
  return (
    <footer
      className="w-full border-t border-[rgba(198,198,199,0.15)] bg-black text-white"
      style={{ fontFamily: typography.fonts.inter }}
    >
      {/* LAYOUT MAP:
          Footer frame: 1280x447, black background, outer top stroke.
          Top area: left brand block starts near x=84; right 4-column links cluster starts near x=534.
          Left block: description, 16px gap, logo row + social icons.
          Right block: 4 columns, mixed vertical gaps (14-25px), headings in Poppins 14/20.
          Bottom bar: fixed 82px row, top stroke, horizontal padding 80, copyright left + credit right.
      */}
      <div className="mx-auto flex w-full flex-col">
        <div className="flex flex-col gap-12 px-6 py-14 md:px-[84px] lg:flex-row lg:justify-between lg:gap-20 lg:py-[87px]">
          <div className="flex w-full max-w-[331px] flex-col">
            <div className="flex flex-col gap-4">
              <Image src="/shared/footer-brand.svg" alt="Shekel logo" width={127} height={34} />
              <p className="max-w-[313px] text-[14px] leading-[22.75px] text-white/70">
                AI-powered marketplace to discover, build, and scale intelligent agents. Built for the Nocturnal
                Architect.
              </p>
            </div>
            <div className="mt-5 flex flex-col gap-[14px]">
              <Image src="/shared/footer-social-icons.png" alt="Social icons" width={54} height={20} />
            </div>
          </div>

          <div className="grid w-full max-w-[610px] grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 md:gap-x-[44px]">
            <nav className="flex w-full flex-col gap-[14px]">
              <h3
                className="text-[14px] leading-5 text-white"
                style={{ fontFamily: typography.fonts.poppins }}
              >
                Product
              </h3>
              {productLinks.map((item) => (
                <Link key={item} href="#" className="text-[14px] leading-5 text-white/70 transition-[color,opacity] duration-200 ease-out hover:text-white hover:opacity-95">
                  {item}
                </Link>
              ))}
            </nav>

            <nav className="flex w-full flex-col gap-[25px]">
              <h3
                className="text-[14px] leading-5 text-white"
                style={{ fontFamily: typography.fonts.poppins }}
              >
                Platform
              </h3>
              <div className="flex flex-col gap-[15px]">
                {platformLinks.map((item) => (
                  <Link key={item} href="#" className="text-[14px] leading-5 text-white/70 transition-[color,opacity] duration-200 ease-out hover:text-white hover:opacity-95">
                    {item}
                  </Link>
                ))}
              </div>
            </nav>

            <nav className="flex w-full flex-col items-start gap-[15px]">
              <h3
                className="text-[14px] leading-5 text-white"
                style={{ fontFamily: typography.fonts.poppins }}
              >
                Company
              </h3>
              {companyLinks.map((item) => (
                <Link key={item} href="#" className="text-[14px] leading-5 text-white/70 transition-[color,opacity] duration-200 ease-out hover:text-white hover:opacity-95">
                  {item}
                </Link>
              ))}
            </nav>

            <nav className="flex w-full flex-col gap-[15px]">
              <h3
                className="text-[14px] leading-5 text-white"
                style={{ fontFamily: typography.fonts.poppins }}
              >
                Resources
              </h3>
              {resourceLinks.map((item) => (
                <Link key={item} href="#" className="text-[14px] leading-5 text-white/70 transition-[color,opacity] duration-200 ease-out hover:text-white hover:opacity-95">
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex h-auto w-full flex-col gap-3 border-t border-[rgba(198,198,199,0.2)] px-6 py-8 md:h-[82px] md:flex-row md:items-center md:justify-between md:px-[84px] md:py-0">
          <p className="text-[11px] font-medium uppercase tracking-[0.11em] text-white">
            © 2026 Shekel Marketplace. All rights reserved.
          </p>
          <p className="text-[11px] leading-[16.5px] text-white">
            Designed &amp; Developed by spearmint
          </p>
        </div>
      </div>
    </footer>
  );
}
