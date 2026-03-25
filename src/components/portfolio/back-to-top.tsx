"use client";

import { useState } from "react";
import { RiArrowUpLine } from "@remixicon/react";
import { animate, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function BackToTop() {
  const { scrollYProgress, scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  /**
   * Reactive scroll tracking
   * no window
   * no document
   */
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setVisible(v > 0.3);
  });

  /**
   * Smooth scroll using Motion animator
   * (no window.scrollTo)
   */
  const scrollToTop = () => {
    animate(scrollY.get(), 0, {
      duration: 0.6,
      ease: "easeOut",
      onUpdate: (latest) => {
        document.documentElement.scrollTop = latest;
      },
    });
  };

  return (
    <motion.div
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 16,
        pointerEvents: visible ? "auto" : "none",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed right-8 bottom-8 z-50"
    >
      <Button
        size="icon"
        variant="outline"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={cn(
          "rounded-full backdrop-blur-xl",
          "bg-card/80 border-border/60 shadow-lg",
          "hover:border-primary/30 hover:shadow-xl",
        )}
      >
        <RiArrowUpLine size={18} />
      </Button>
    </motion.div>
  );
}
