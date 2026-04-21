"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

type FloatProps = {
  children: ReactNode;
  amplitude?: number;
  rotate?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
};

export function Float({
  children,
  amplitude = 12,
  rotate = 0,
  duration = 6,
  className,
  style,
}: FloatProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      animate={{
        y: [0, -amplitude, 0],
        rotate: rotate ? [0, rotate, -rotate, 0] : 0,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
