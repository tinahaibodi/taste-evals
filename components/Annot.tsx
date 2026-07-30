"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";

/** Handwritten red annotation label, absolutely positioned inside a .panel */
export function Annot({ style, children }: { style?: CSSProperties; children: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className="annot"
      style={style}
      initial={reduce ? false : { opacity: 0, rotate: -2, scale: 0.96 }}
      whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: 0.35 }}
    >
      {children}
    </motion.span>
  );
}

/** Hand-drawn arrow: an SVG path that draws itself on scroll into view */
export function Arrow({
  style,
  d,
  w,
  h,
  circle,
}: {
  style?: CSSProperties;
  d?: string;
  w: number;
  h: number;
  circle?: { cx: number; cy: number; rx: number; ry: number };
}) {
  const reduce = useReducedMotion();
  const draw = {
    initial: reduce ? {} : { pathLength: 0, opacity: 0 },
    inView: { pathLength: 1, opacity: 1 },
  };
  return (
    <motion.svg
      className="arrow"
      style={style}
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      initial="initial"
      whileInView="inView"
      viewport={{ once: true, margin: "-60px" }}
    >
      {d && (
        <motion.path
          d={d}
          variants={draw}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
        />
      )}
      {circle && (
        <motion.ellipse
          cx={circle.cx}
          cy={circle.cy}
          rx={circle.rx}
          ry={circle.ry}
          variants={draw}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
        />
      )}
    </motion.svg>
  );
}
