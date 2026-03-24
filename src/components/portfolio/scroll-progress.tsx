"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="bg-primary fixed top-0 right-0 left-0 z-60 h-0.75 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
