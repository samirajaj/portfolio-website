"use client";

import { useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  shape: "circle" | "square" | "ring";
  speed: number;
  drift: number;
  opacity: number;
  delay: number;
}

const PARTICLE_COUNT = 18;

function generateParticles(): Particle[] {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 4,
    shape: (["circle", "square", "ring"] as const)[
      Math.floor(Math.random() * 3)
    ],
    speed: 20 + Math.random() * 40,
    drift: -15 + Math.random() * 30,
    opacity: 0.06 + Math.random() * 0.1,
    delay: Math.random() * 20,
  }));
}

export function FloatingParticles() {
  const { scrollY } = useScroll();

  // Generate particles only once
  const particles = useMemo(() => {
    if (typeof window === "undefined") return [];
    return generateParticles();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-1 overflow-hidden">
      {particles.map((p) => {
        /**
         * Vertical motion (Parallax):
         * (scrollY * speed * 0.003) % 120
         */
        const y = useTransform(scrollY, (v) => -((v * p.speed * 0.003) % 120));

        /**
         * Horizontal movement (drift sinus)
         */
        const x = useTransform(
          scrollY,
          (v) => Math.sin((v * 0.001 + p.delay) * 0.5) * p.drift,
        );

        return (
          <motion.div
            key={p.id}
            className="absolute"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              x,
              y,
              opacity: p.opacity,
              willChange: "transform",
            }}
          >
            {p.shape === "circle" && (
              <div
                className="bg-primary rounded-full"
                style={{ width: p.size, height: p.size }}
              />
            )}

            {p.shape === "square" && (
              <div
                className="bg-primary/80 rotate-45"
                style={{
                  width: p.size,
                  height: p.size,
                  borderRadius: 1,
                }}
              />
            )}

            {p.shape === "ring" && (
              <div
                className="border-primary/40 rounded-full border"
                style={{
                  width: p.size * 1.5,
                  height: p.size * 1.5,
                }}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
