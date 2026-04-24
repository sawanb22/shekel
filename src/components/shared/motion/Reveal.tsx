"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: "div" | "span" | "li" | "section";
  once?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
  className,
  style,
  as = "div",
  once = true,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants: Variants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0 },
      };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variants}
      transition={{ duration, ease: "easeOut", delay }}
      className={className}
      style={style}
    >
      {children}
    </MotionTag>
  );
}
