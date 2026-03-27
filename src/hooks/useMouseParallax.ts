"use client";

import { useMotionValue, useSpring } from "motion/react";

export function useMouseParallax(intensity = 20) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 120, damping: 20 });
  const y = useSpring(rawY, { stiffness: 120, damping: 20 });

  const onPointerMove = (e: React.PointerEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();

    rawX.set((e.clientX - rect.width / 2) / intensity);
    rawY.set((e.clientY - rect.height / 2) / intensity);
  };

  return { x, y, onPointerMove };
}
