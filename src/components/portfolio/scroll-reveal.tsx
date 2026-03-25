"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
  delay?: number;
  once?: boolean;
  amount?: number;
}

const variantsMap: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  once = true,
  amount = 0.15,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={variantsMap[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount,
        margin: "0px 0px -60px 0px",
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: delay / 1000,
      }}
    >
      {children}
    </motion.div>
  );
}
