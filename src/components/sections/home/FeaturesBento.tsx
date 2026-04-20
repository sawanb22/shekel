import React from 'react';
import { colors, typography, radiuses } from '@/tokens/design-tokens';

export default function FeaturesBento() {
  return (
    <section className="w-full flex justify-center py-20 relative overflow-hidden" style={{ backgroundColor: colors.white }}>
      <div className="max-w-[1440px] w-full px-8 grid grid-cols-4 gap-8">
        {/* Top Row */}
        
        {/* Card 1: AI Agent Marketplace */}
        <div 
          className="col-span-2 flex flex-col justify-between p-12 relative overflow-hidden"
          style={{ 
            minHeight: '300px', 
            backgroundColor: colors.white,
            border: `1px solid ${colors.border.card}`,
            borderRadius: radiuses.card
          }}
        >
          <div 
            className="absolute bottom-0 left-0 right-0 h-1/2"
            style={{
              background: `linear-gradient(to left, ${colors.gradient.purpleTransparent}, ${colors.gradient.purpleLight}, ${colors.gradient.purpleTransparent})`
            }}
          />
          <div className="relative z-10 flex flex-col gap-4">
            <h3 style={{ fontFamily: typography.fonts.inter, fontSize: '24px', fontWeight: 600, color: colors.black }}>
              AI Agent Marketplace
            </h3>
            <p style={{ fontFamily: typography.fonts.inter, fontSize: '16px', color: colors.black, lineHeight: '24px', maxWidth: '384px' }}>
              The world&apos;s largest repository of fine-tuned, task-specific autonomous agents ready for work.
            </p>
            <div className="flex items-center gap-2 mt-4 cursor-pointer">
              <span 
                style={{ 
                  fontFamily: typography.fonts.inter, 
                  fontSize: '16px', 
                  fontWeight: 600,
                  background: `linear-gradient(to bottom, ${colors.brand.blueStart}, ${colors.brand.blueEnd})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Explore Marketplace
              </span>
              <div className="w-4 h-4 bg-gray-200" /> {/* Placeholder for arrow icon */}
            </div>
          </div>
        </div>

        {/* Card 2: Flexible Pricing */}
        <div 
          className="col-span-1 flex flex-col px-8 pt-8 pb-24"
          style={{ 
            backgroundColor: colors.white,
            border: `1px solid ${colors.border.card}`,
            borderRadius: radiuses.card
          }}
        >
          <div className="w-8 h-6 bg-gray-200 mb-3" /> {/* Placeholder for icon */}
          <h4 className="mb-3" style={{ fontFamily: typography.fonts.inter, fontSize: '20px', fontWeight: 600, color: colors.black }}>
            Flexible Pricing
          </h4>
          <p style={{ fontFamily: typography.fonts.inter, fontSize: '14px', color: colors.black, lineHeight: '20px' }}>
            Usage-based, subscription, or one-time license fees tailored to your business.
          </p>
        </div>

        {/* Card 3: Workflow Builder */}
        <div 
          className="col-span-1 flex flex-col px-8 pt-8 pb-24"
          style={{ 
            backgroundColor: colors.white,
            border: `1px solid ${colors.border.card}`,
            borderRadius: radiuses.card
          }}
        >
          <div className="w-8 h-7 bg-gray-200 mb-3" /> {/* Placeholder for icon */}
          <h4 className="mb-3" style={{ fontFamily: typography.fonts.inter, fontSize: '20px', fontWeight: 600, color: colors.black }}>
            Workflow Builder
          </h4>
          <p style={{ fontFamily: typography.fonts.inter, fontSize: '14px', color: colors.black, lineHeight: '20px' }}>
            Visual drag-and-drop interface to connect disparate agents into full pipelines.
          </p>
        </div>

        {/* Bottom Row */}

        {/* Card 4: Dev Ecosystem */}
        <div 
          className="col-span-1 flex flex-col px-8 pt-8 pb-16"
          style={{ 
            backgroundColor: colors.white,
            border: `1px solid ${colors.border.card}`,
            borderRadius: radiuses.card
          }}
        >
          <div className="w-[30px] h-6 bg-gray-200 mb-3" /> {/* Placeholder for icon */}
          <h4 className="mb-3" style={{ fontFamily: typography.fonts.inter, fontSize: '20px', fontWeight: 600, color: colors.black }}>
            Dev Ecosystem
          </h4>
          <p style={{ fontFamily: typography.fonts.inter, fontSize: '14px', color: colors.black, lineHeight: '20px' }}>
            Full SDK support for Python, JS, and Rust to integrate Shekel into any stack.
          </p>
        </div>

        {/* Card 5: Global Settlement Network */}
        <div 
          className="col-span-3 flex items-center justify-between p-12"
          style={{ 
            height: '256px',
            backgroundColor: colors.white,
            border: `1px solid ${colors.border.card}`,
            borderRadius: radiuses.card
          }}
        >
          <div className="flex flex-col gap-4 max-w-[379px]">
            <h3 style={{ fontFamily: typography.fonts.inter, fontSize: '24px', fontWeight: 600, color: colors.black }}>
              Global Settlement Network
            </h3>
            <p style={{ fontFamily: typography.fonts.inter, fontSize: '16px', color: colors.black, lineHeight: '24px' }}>
              Instant, low-latency payments for every agent execution using decentralized ledger technology.
            </p>
          </div>
          
          <div 
            className="flex items-center justify-center p-px"
            style={{ 
              width: '381px',
              height: '160px',
              backgroundColor: colors.background.networkPill,
              border: `1px solid ${colors.border.networkPill}`,
              borderRadius: radiuses.pill
            }}
          >
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3"
                style={{ 
                  borderRadius: radiuses.full,
                  background: `linear-gradient(to bottom, ${colors.brand.blueStart}, ${colors.brand.blueEnd})`
                }}
              />
              <span 
                style={{ 
                  fontFamily: typography.fonts.mono, 
                  fontSize: '14px', 
                  color: colors.text.networkPill,
                  letterSpacing: '1.4px',
                  textTransform: 'uppercase'
                }}
              >
                NETWORK LIVE: 12.4K TPS
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
