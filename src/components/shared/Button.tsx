import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline' | 'nav';
  children: React.ReactNode;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', children, ...props }, ref) => {
    
    const baseClass = "inline-flex items-center justify-center font-sans tracking-tight transition-all disabled:pointer-events-none disabled:opacity-50";
    
    // Exact values from Figma context
    const variants = {
      primary: "bg-gradient-to-r from-[var(--color-primary-from)] to-[var(--color-primary-to)] font-semibold text-[var(--color-text-light)] text-[16px] px-[32px] py-[17px] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(186,158,255,0.2),0px_4px_6px_-4px_rgba(186,158,255,0.2)] hover:opacity-90",
      outline: "bg-[#1a1f2d] border border-[rgba(255,255,255,0.2)] font-semibold text-white text-[16px] px-[33px] py-[17px] rounded-[12px] hover:bg-white/5",
      nav: "bg-gradient-to-b from-[#2864e4] to-[#c6f8ff] font-medium text-white text-[14px] uppercase tracking-[-0.35px] px-[24px] py-[8px] rounded-[5px] hover:opacity-90",
    };

    return (
      <button 
        ref={ref}
        className={`${baseClass} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
