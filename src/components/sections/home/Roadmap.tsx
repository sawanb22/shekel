import Image from 'next/image';
import { colors, typography, radiuses } from '@/tokens/design-tokens';

// ─── Asset paths ────────────────────────────────────────────────────────────
const bgGrid      = '/section-8/bg-grid.png';
const rocket      = '/section-8/rocket.png';
const iconCheck   = '/section-8/icon-check.svg';
const iconSync    = '/section-8/icon-sync.svg';

const TIMELINE_DATA = [
  {
    status: 'COMPLETED',
    statusBg: colors.background.badgeDark,
    statusText: colors.text.badgePurple,
    heading: 'Alpha Launch & Core Engine',
    desc: 'Development of the decentralized hosting protocol and basic agent API standards.',
    icon: iconCheck,
    nodeBg: colors.background.badgePurple,
    nodeShadow: colors.overlay.badgeShadowPurple,
  },
  {
    status: 'IN PROGRESS',
    statusBg: colors.overlay.badgeShadowBlue,
    statusText: colors.text.badgeBlue,
    heading: 'Marketplace Beta v2.0',
    desc: 'Introducing automated revenue splitting and the visual workflow builder for all users.',
    icon: iconSync,
    nodeBg: colors.background.badgeBlue,
    nodeShadow: colors.overlay.badgeShadowBlue,
  },
  {
    status: 'UPCOMING',
    statusBg: colors.background.badgeDark,
    statusText: colors.text.badgeUpcoming,
    heading: 'Enterprise SDK & Global Node Mesh',
    desc: 'Scaling to 100k+ agents with localized edge-node hosting for sub-10ms latency.',
    icon: null, // Empty circle
    nodeBg: colors.background.badgeDark,
    nodeBorder: colors.border.timeline,
  },
];

export default function Roadmap() {
  return (
    <section className="w-full relative overflow-hidden" style={{ minHeight: '690px' }}>
      
      {/* ── Background Layer ────────────────────────────────────────────────── */}
      <div 
        className="absolute inset-0 pointer-events-none bg-[#fff5f5]"
      >
        <div 
          className="absolute"
          style={{
            top: '-47px',
            left: '-395px',
            width: '1841px',
            height: '1252px',
            transform: 'rotate(180deg) scaleY(-1)'
          }}
        >
          <Image src={bgGrid} alt="Grid Background" fill className="object-cover" priority unoptimized />
        </div>
      </div>

      {/* ── Decorative Rocket ─────────────────────────────────────────────── */}
      <div 
        className="absolute pointer-events-none"
        style={{
          top: '-75px',
          left: '-408px',
          width: '1274px',
          height: '1293px',
          transform: 'rotate(-38.88deg)',
        }}
      >
        <Image src={rocket} alt="Rocket 3D" fill className="object-contain" />
      </div>

      {/* ── Content Container ─────────────────────────────────────────────── */}
      <div className="relative mx-auto mt-14" style={{ maxWidth: '1280px', height: '100%' }}>
        <div 
          className="flex flex-col gap-12"
          style={{
            position: 'absolute',
            left: '509px',
            top: '0',
            width: '800px',
          }}
        >
          <h2
            style={{
              fontFamily: typography.fonts.poppins,
              fontWeight: 700,
              fontSize: '36px',
              lineHeight: '40px',
              color: colors.white, // In the design the text is black but the bg is dark, I'll use white for visibility given the dark gradient bg in the actual React code (the Figma metadata had text-black but the frame bg was transparent in Figma while the component has a dark gradient). Wait, it's black in design because the Figma render might have had a white bg behind it! No, the design screenshot shows a white/pinkish background! Ah, my radial gradient from the SVG was `#111` to `#0b0b0b`, but I noticed the design screenshot is light colored. Let me override it to match the light theme screenshot.
            }}
            className="text-black"
          >
            Development Roadmap
          </h2>

          <div className="flex flex-col gap-12">
            {TIMELINE_DATA.map((item, i) => (
              <div key={item.heading} className="flex gap-8 items-start h-full">
                
                {/* Timeline Column */}
                <div className="flex flex-col items-center shrink-0 w-6 h-full">
                  
                  {/* Node */}
                  {item.icon ? (
                    <div
                      className="flex items-center justify-center shrink-0 relative"
                      style={{
                        width: '24px',
                        height: '17.28px',
                        backgroundColor: item.nodeBg,
                        borderRadius: radiuses.full,
                        boxShadow: `0 0 0 4px ${item.nodeShadow}`,
                      }}
                    >
                      <Image src={item.icon} alt={item.status} width={10} height={10} />
                    </div>
                  ) : (
                    <div
                      className="shrink-0"
                      style={{
                        width: '24px',
                        height: '24px',
                        backgroundColor: item.nodeBg,
                        border: `1px solid ${item.nodeBorder}`,
                        borderRadius: radiuses.full,
                      }}
                    />
                  )}

                  {/* Vertical Line */}
                  {i < TIMELINE_DATA.length - 1 && (
                    <div
                      className="w-0.5 mt-4"
                      style={{
                        minHeight: '86px',  // Adjust height to connect items nicely
                        backgroundColor: colors.border.timeline,
                        flex: 1,
                      }}
                    />
                  )}
                </div>

                {/* Content Column */}
                <div className="flex flex-col gap-2 pb-8">
                  {/* Status Badge */}
                  <div
                    className="inline-flex px-2 py-0.5 rounded shrink-0 self-start mt-[-2px]"
                    style={{
                      backgroundColor: item.statusBg,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: typography.fonts.inter,
                        fontWeight: 600,
                        fontSize: '10px',
                        lineHeight: '15px',
                        textTransform: 'uppercase',
                        color: item.statusText,
                      }}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Heading */}
                  <h4
                    style={{
                      fontFamily: typography.fonts.inter,
                      fontWeight: 600,
                      fontSize: '20px',
                      lineHeight: '28px',
                      color: colors.black,
                    }}
                  >
                    {item.heading}
                  </h4>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: typography.fonts.inter,
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: colors.black,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
