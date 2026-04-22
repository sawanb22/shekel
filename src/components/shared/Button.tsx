"use client";

import React from 'react';
import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';

type ButtonProps = Omit<HTMLMotionProps<'button'>, 'children'> & {
  variant?: 'primary' | 'outline' | 'nav';
  children: React.ReactNode;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', children, ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion();
    const baseClass =
      'inline-flex items-center justify-center font-sans tracking-tight transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out disabled:pointer-events-none disabled:opacity-50';

    const variants = {
      primary:
        'bg-gradient-to-r from-[var(--color-primary-from)] to-[var(--color-primary-to)] font-semibold text-[var(--color-text-light)] text-[16px] px-[32px] py-[17px] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(186,158,255,0.2),0px_4px_6px_-4px_rgba(186,158,255,0.2)]',
      outline:
        'bg-[#1a1f2d] border border-[rgba(255,255,255,0.2)] font-semibold text-white text-[16px] px-[33px] py-[17px] rounded-[12px] hover:bg-white/8',
      nav: 'font-medium text-white text-[14px] uppercase tracking-[-0.35px] px-[24px] py-[8px] rounded-[5px]',
    };

    const navStyle =
      variant === "nav"
        ? {
            background:
              "linear-gradient(155deg, rgba(40,100,228,1) 33%, rgba(30,154,255,1) 89%, rgba(198,248,255,1) 100%)",
          }
        : {};

    return (
      <motion.button
        ref={ref}
        className={`${baseClass} ${variants[variant]} ${className}`}
        style={navStyle}
        whileHover={
          prefersReducedMotion
            ? undefined
            : variant === 'outline'
              ? {
                  y: -3,
                  borderColor: 'rgba(255,255,255,0.3)',
                  boxShadow: '0px 14px 26px -10px rgba(118, 138, 178, 0.6)',
                }
              : {
                  y: -3,
                  scale: 1.025,
                  boxShadow:
                    '0px 18px 34px -8px rgba(186,158,255,0.5), 0px 8px 18px -8px rgba(186,158,255,0.38)',
                }
        }
        whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
