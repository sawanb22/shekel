import Image from 'next/image';
import { colors, typography, radiuses } from '@/tokens/design-tokens';

// ─── Asset paths ────────────────────────────────────────────────────────────
const bgWaves       = '/section-7/bg-waves.svg';
const iconPrompt    = '/section-7/icon-prompt.svg';
const iconCheck     = '/section-7/icon-check.svg';
const iconClock     = '/section-7/icon-clock.svg';
const iconContent   = '/section-7/icon-content.svg';
const iconDesign    = '/section-7/icon-design.svg';
const iconPublish   = '/section-7/icon-publish.svg';
const iconArrow     = '/section-7/icon-arrow.svg';
const iconArrowAlt  = '/section-7/icon-arrow-alt.svg';

// ─── Workflow node data ──────────────────────────────────────────────────────
const workflowNodes = [
  { icon: iconContent, label: 'Content AI',  bg: colors.brand.blue,  iconW: 18, iconH: 18 },
  { icon: iconDesign,  label: 'Design AI',   bg: colors.brand.cyan,  iconW: 19, iconH: 18 },
  { icon: iconPublish, label: 'Publish AI',  bg: colors.brand.blue,  iconW: 19, iconH: 16 },
];

// ─── Bottom columns ──────────────────────────────────────────────────────────
const columns = [
  {
    heading: 'Run marketing campaigns',
    body:    'Generate and automate multi-channel campaigns using AI agents.',
    link:    'Explore marketing',
    icon:    iconArrow,
  },
  {
    heading: 'Build intelligent workflows',
    body:    'Connect multiple AI agents to automate business processes.',
    link:    'Explore workflows',
    icon:    iconArrow,
  },
  {
    heading: 'Scale with automation',
    body:    'Deploy AI agents for support, finance, and operations.',
    link:    'Explore automation',
    icon:    iconArrowAlt,
  },
];

export default function WhatYouCanDo() {
  return (
    <section
      style={{ backgroundColor: colors.background.sectionAlt }}
      className="w-full"
    >
      <div
        className="mx-auto flex flex-col"
        style={{
          maxWidth: '1280px',
          padding: '37px 32px 96px',
          gap: '64px',
        }}
      >
        {/* ── Section Header ─────────────────────────────────────────────── */}
        <div className="w-full text-center">
          <h2
            style={{
              fontFamily: typography.fonts.poppins,
              fontWeight: 500,
              fontSize: '48px',
              lineHeight: '48px',
              color: colors.text.heading,
            }}
          >
            What you can do with{' '}
            <span
              style={{
                background: `linear-gradient(to bottom, ${colors.brand.blueStart}, ${colors.brand.blueEnd})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Shekel
            </span>
          </h2>
        </div>

        {/* ── Main Visual Container ───────────────────────────────────────── */}
        <div
          className="w-full relative overflow-hidden"
          style={{
            backgroundColor: colors.white,
            borderRadius: radiuses.card,
            height: '330px',
          }}
        >
          {/* Radial gradient/blur blob */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '104px',
              left: '243px',
              width: '730px',
              height: '122px',
              background: `linear-gradient(to right, ${colors.brand.blue}, ${colors.brand.cyan})`,
              filter: 'blur(60px)',
              opacity: 0.4,
            }}
          />

          {/* SVG background waves */}
          <div className="absolute inset-0 w-full pointer-events-none">
            <Image
              src={bgWaves}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* ── Floating UI Orchestration layer ──────────────────────────── */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-12 p-12">

            {/* Top Input Bar */}
            <div
              className="flex items-center gap-4 shrink-0"
              style={{
                width: '576px',
                padding: '16px',
                backgroundColor: colors.white,
                borderRadius: radiuses.icon,
                boxShadow: '0px 20px 50px 0px rgba(0,0,0,0.08)',
              }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: colors.overlay.blueSubtle,
                  borderRadius: radiuses.inputIcon,
                }}
              >
                <Image src={iconPrompt} alt="Prompt" width={22} height={22} />
              </div>

              {/* Label */}
              <span
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: colors.text.inputLabel,
                  flex: 1,
                }}
              >
                Generate marketing campaign
              </span>

              {/* Cursor blink */}
              <div
                style={{
                  width: '8px',
                  height: '24px',
                  backgroundColor: colors.overlay.blueFaint,
                  borderRadius: radiuses.full,
                  flexShrink: 0,
                }}
              />
            </div>

            {/* Center Workflow: 3 nodes + 2 dividers */}
            <div className="flex items-center gap-8 shrink-0">
              {workflowNodes.map((node, i) => (
                <div key={node.label} className="flex items-center gap-8">
                  {/* Workflow Card */}
                  <div
                    className="flex flex-col items-center gap-2 relative"
                    style={{
                      padding: '21px',
                      backgroundColor: colors.overlay.whiteGlass,
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      border: `1px solid ${colors.overlay.whiteNode}`,
                      borderRadius: radiuses.card,
                      boxShadow: '0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)',
                    }}
                  >
                    {/* Icon box */}
                    <div
                      className="flex items-center justify-center"
                      style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: node.bg,
                        borderRadius: radiuses.icon,
                      }}
                    >
                      <Image
                        src={node.icon}
                        alt={node.label}
                        width={node.iconW}
                        height={node.iconH}
                      />
                    </div>
                    {/* Label */}
                    <span
                      style={{
                        fontFamily: typography.fonts.inter,
                        fontWeight: 600,
                        fontSize: '12px',
                        lineHeight: '16px',
                        color: colors.text.nodeLabel,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {node.label}
                    </span>
                  </div>

                  {/* Gradient divider between nodes */}
                  {i < workflowNodes.length - 1 && (
                    <div
                      style={{
                        width: '48px',
                        height: '2px',
                        background:
                          i === 0
                            ? `linear-gradient(to right, ${colors.brand.blue}, ${colors.brand.cyan})`
                            : `linear-gradient(to right, ${colors.brand.cyan}, ${colors.brand.blue})`,
                        opacity: 0.4,
                        flexShrink: 0,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Floating Glass Badges (absolute) ─────────────────────────── */}

          {/* Top Right: "12 Posts generated" */}
          <div
            className="absolute flex items-center gap-3"
            style={{
              top: '66px',
              right: '102px',
              padding: '13px 17px',
              backgroundColor: colors.overlay.whiteGlass,
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: `1px solid ${colors.overlay.whiteBorder}`,
              borderRadius: radiuses.icon,
              boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)',
            }}
          >
            <div
              className="flex items-center justify-center shrink-0"
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: colors.status.green,
                borderRadius: radiuses.full,
              }}
            >
              <Image src={iconCheck} alt="Check" width={11} height={8} />
            </div>
            <span
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '20px',
                color: colors.text.badgeDark,
                whiteSpace: 'nowrap',
              }}
            >
              12 Posts generated
            </span>
          </div>

          {/* Mid Left: "Scheduled" */}
          <div
            className="absolute flex items-center gap-3"
            style={{
              top: '148px',
              left: '97px',
              padding: '13px 17px',
              backgroundColor: colors.overlay.whiteGlass,
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: `1px solid ${colors.overlay.whiteBorder}`,
              borderRadius: radiuses.icon,
              boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)',
            }}
          >
            <Image src={iconClock} alt="Clock" width={20} height={20} />
            <span
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '20px',
                color: colors.text.badgeDark,
                whiteSpace: 'nowrap',
              }}
            >
              Scheduled
            </span>
          </div>

          {/* Bottom Right: "COMPLETED / Success badge" */}
          <div
            className="absolute flex items-center gap-3"
            style={{
              top: '235px',
              right: '103px',
              padding: '13px 17px',
              backgroundColor: colors.overlay.whiteGlass,
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: `1px solid ${colors.overlay.whiteBorder}`,
              borderRadius: radiuses.icon,
              boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)',
            }}
          >
            {/* "COMPLETED" pill */}
            <div
              style={{
                backgroundColor: colors.overlay.blueSubtle,
                borderRadius: radiuses.tag,
                padding: '2px 8px',
              }}
            >
              <span
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: '10px',
                  lineHeight: '15px',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  color: colors.brand.blue,
                }}
              >
                Completed
              </span>
            </div>
            <span
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '20px',
                color: colors.text.badgeDark,
                whiteSpace: 'nowrap',
              }}
            >
              Success badge
            </span>
          </div>
        </div>

        {/* ── Bottom 3 Columns ────────────────────────────────────────────── */}
        <div
          className="grid grid-cols-3 w-full"
          style={{ gap: '32px', paddingTop: '16px' }}
        >
          {columns.map((col) => (
            <div key={col.heading} className="flex flex-col" style={{ gap: '16px' }}>
              {/* Heading */}
              <h3
                style={{
                  fontFamily: typography.fonts.poppins,
                  fontWeight: 600,
                  fontSize: '18px',
                  lineHeight: '28px',
                  color: colors.text.heading,
                  margin: 0,
                }}
              >
                {col.heading}
              </h3>

              {/* Body */}
              <p
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '26px',
                  color: colors.text.bodyMuted,
                  margin: 0,
                }}
              >
                {col.body}
              </p>

              {/* Link */}
              <div className="flex items-center gap-1">
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '24px',
                    background: `linear-gradient(to bottom, ${colors.brand.blueStart}, ${colors.brand.blueEnd})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    cursor: 'pointer',
                  }}
                >
                  {col.link}
                </span>
                <Image src={col.icon} alt="→" width={12} height={12} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
