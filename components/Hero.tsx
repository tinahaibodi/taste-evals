"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <header className="hero">
      <motion.h1
        className="hero-title"
        initial={reduce ? false : { opacity: 0, scale: 0.94, rotate: -1.5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, ease: [0.21, 0.6, 0.35, 1] }}
      >
        Taste Labs
      </motion.h1>
      <motion.p
        className="hero-sub"
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        Field Notes · Design Evals &amp; QA · Planning Doc
      </motion.p>
    </header>
  );
}
