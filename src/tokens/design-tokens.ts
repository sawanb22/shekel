export const colors = {
  white: '#ffffff',
  black: '#000000',
  brand: {
    blueStart: '#2864e4',
    blueEnd: '#ecf2ff',
    blue: '#2f80ed',
    cyan: '#56ccf2',
  },
  gradient: {
    purpleLight: 'rgba(186,158,255,0.1)',
    purpleTransparent: 'rgba(186,158,255,0)',
  },
  text: {
    networkPill: '#353740',
    dark: '#1a1c1c',
    body: '#414753',
    heading: '#0b0b0b',
    bodyMuted: '#4a4a4a',
    inputLabel: '#475569',
    badgeDark: '#1e293b',
    nodeLabel: '#334155',
    badgePurple: '#e5e7f6',
    badgeBlue: '#699cff',
    badgeUpcoming: '#a7aab9',
  },
  background: {
    networkPill: 'rgba(255,255,255,0.5)',
    section: '#f9f9f9',
    sectionAlt: '#f7f9fc',
    badgePurple: '#ba9eff',
    badgeBlue: '#699cff',
    badgeDark: '#202534',
    trustSection: '#f2f4f7',
    trustCard: 'rgba(255,255,255,0.8)',
    faq: '#f3f3f4',
  },
  status: {
    green: '#10b981',
  },
  overlay: {
    blueSubtle: 'rgba(47,128,237,0.1)',
    blueFaint: 'rgba(47,128,237,0.2)',
    whiteGlass: 'rgba(255,255,255,0.7)',
    whiteBorder: 'rgba(255,255,255,0.5)',
    whiteNode: 'rgba(255,255,255,0.4)',
    badgeShadowPurple: 'rgba(186,158,255,0.2)',
    badgeShadowBlue: 'rgba(105,156,255,0.2)',
  },
  border: {
    card: 'rgba(0,0,0,0.2)',
    networkPill: 'rgba(68,72,84,0.2)',
    timeline: '#444854',
    footer: 'rgba(198,198,199,0.15)',
    footerStrong: 'rgba(198,198,199,0.2)',
  }
};

export const typography = {
  fonts: {
    // CSS variable set by next/font/google in layout.tsx — falls back to literal name
    inter: "var(--font-inter, 'Inter', sans-serif)",
    poppins: "var(--font-poppins, 'Poppins', sans-serif)",
    jakarta: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)",
    mono: "'Liberation Mono', monospace",
  },
};

export const radiuses = {
  card: '24px',
  cardLg: '32px',
  pill: '16px',
  full: '9999px',
  icon: '12px',
  inputIcon: '8px',
  tag: '4px',
  cardSm: '12px',
};