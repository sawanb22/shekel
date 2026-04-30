"use client";

import React from 'react';
import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';

type ButtonProps = Omit<HTMLMotionProps<'button'>, 'children'> & {
  variant?: 'primary' | 'outline' | 'nav' | 'hero';
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
      /** Home hero CTAs: outline at rest, gradient + glow on hover (both buttons match). */
      hero:
        'bg-[#1a1f2d] border border-[rgba(255,255,255,0.2)] font-semibold text-white text-[16px] px-[32px] py-[17px] rounded-[12px]',
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
            : variant === 'hero'
              ? {
                  y: -3,
                  scale: 1.02,
                  borderColor: 'transparent',
                  background:
                    'linear-gradient(to right, var(--color-primary-from), var(--color-primary-to))',
                  color: 'var(--color-text-light)',
                  boxShadow:
                    '0px 12px 28px -6px rgba(186, 158, 255, 0.45), 0px 8px 20px -8px rgba(105, 156, 255, 0.35)',
                }
              : variant === 'outline'
              ? {
                  y: -3,
                  borderColor: 'transparent',
                  background:
                    'linear-gradient(to right, var(--color-primary-from), var(--color-primary-to))',
                  color: 'var(--color-text-light)',
                  boxShadow: 'none',
                }
              : variant === 'primary'
                ? {
                  y: -3,
                  scale: 1.025,
                  background: 'linear-gradient(180deg, rgba(26,31,45,1) 0%, rgba(40,50,74,1) 100%)',
                  color: '#ffffff',
                  borderColor: 'rgba(255,255,255,0.2)',
                  boxShadow:
                    '0px 18px 34px -8px rgba(20, 24, 36, 0.55), 0px 8px 18px -8px rgba(20, 24, 36, 0.4)',
                }
                : {
                  y: -3,
                  scale: 1.025,
                  boxShadow:
                    '0px 18px 34px -8px rgba(186,158,255,0.5), 0px 8px 18px -8px rgba(186,158,255,0.38)',
                  filter: 'brightness(1.15)',
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
