"use client";

import React, { useMemo, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface Level {
  id: string;
  label: string;
  icon: string;
}

const SPRING = {
  stiffness: 220,
  damping: 30,
  mass: 0.4,
};

export function SectionProgress() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const levels: Level[] = useMemo(
    () => [
      { id: "about", label: t("about"), icon: "01" },
      { id: "skills", label: t("skills"), icon: "02" },
      { id: "experience", label: t("experience"), icon: "03" },
      { id: "projects", label: t("projects"), icon: "04" },
      { id: "education", label: t("education"), icon: "05" },
      { id: "contact", label: t("contact"), icon: "06" },
    ],
    [t],
  );

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, SPRING);
  const height = useTransform(smoothProgress, (v) => `${v * 100}%`);

  const [activeIndex, setActiveIndex] = useState(0);

  // Update the active section when changing in scroll
  useMotionValueEvent(smoothProgress, "change", (value) => {
    const index = Math.min(
      levels.length - 1,
      Math.floor(value * levels.length),
    );
    setActiveIndex(index);
  });

  const visited = useMemo(
    () => new Set(levels.slice(0, activeIndex + 1).map((l) => l.id)),
    [activeIndex, levels],
  );

  return (
    <div
      className={cn(
        "fixed top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-1 lg:flex",
        isRTL ? "left-5" : "right-5",
      )}
    >
      {/* vertical line */}
      <div className="bg-border/40 absolute inset-y-0 w-px overflow-hidden">
        <motion.div
          className="bg-primary absolute top-0 right-0 left-0"
          style={{ height }}
        />
      </div>

      {levels.map((level, index) => {
        const isActive = index === activeIndex;
        const isVisited = visited.has(level.id);

        return (
          <a
            key={level.id}
            href={`#${level.id}`}
            className="group relative flex items-center gap-3 py-2"
            aria-label={level.label}
          >
            {/* Tooltip */}
            <motion.span
              initial={{ opacity: 0, x: isRTL ? -6 : 6 }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.18 }}
              className={cn(
                "absolute rounded-md px-2.5 py-1 text-xs font-medium whitespace-nowrap",
                "bg-card/90 border-border/50 pointer-events-none border shadow-sm backdrop-blur-sm",
                isRTL ? "left-full ml-3" : "right-full mr-3",
              )}
            >
              {level.label}
            </motion.span>

            {/* Node */}
            <motion.div
              layout
              transition={SPRING}
              animate={{
                scale: isActive ? 1.15 : 1,
                backgroundColor: isActive
                  ? "var(--primary)"
                  : isVisited
                    ? "rgba(var(--primary-rgb),0.15)"
                    : "var(--card)",
                color: isActive
                  ? "var(--primary-foreground)"
                  : isVisited
                    ? "var(--primary)"
                    : "var(--muted-foreground)",
                borderColor: isActive ? "var(--primary)" : "var(--border)",
              }}
              className={cn(
                "relative z-10 flex h-8 w-8 items-center justify-center rounded-full",
                "border font-mono text-[10px] font-bold backdrop-blur-sm",
              )}
            >
              <motion.span
                key={isVisited && !isActive ? "check" : level.icon}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {isVisited && !isActive ? "✓" : level.icon}
              </motion.span>
            </motion.div>
          </a>
        );
      })}
    </div>
  );
}
