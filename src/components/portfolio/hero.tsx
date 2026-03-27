"use client";

import Image from "next/image";
import { usePortfolio } from "@/context/portfolio-context";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import {
  RemixiconComponentType as IconType,
  RiDownload2Line,
  RiGithubLine,
  RiLink,
  RiLinkedinLine,
  RiMapPinLine,
  RiTelegram2Line,
  RiTwitterXLine,
  RiWhatsappLine,
} from "@remixicon/react";
import { motion, useScroll, useTransform } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "@/components/ui/typewriter-effect";
import { ScrollReveal } from "./scroll-reveal";

export const LINKS: Record<string, { icon: IconType; label: string }> = {
  github: {
    icon: RiGithubLine,
    label: "GitHub",
  },
  linkedin: {
    icon: RiLinkedinLine,
    label: "LinkedIn",
  },
  telegram: {
    icon: RiTelegram2Line,
    label: "Telegram",
  },
  whatsapp: {
    icon: RiWhatsappLine,
    label: "WhatsApp",
  },
  twitter: {
    icon: RiTwitterXLine,
    label: "Twitter",
  },
};

export function Hero() {
  const {
    portfolio: { personalInfo, summary },
  } = usePortfolio();

  const parts = personalInfo.fullName.trim().split(" ");
  const firstName = parts[0];
  const lastName = parts.slice(1).join(" ");
  const words = [{ text: firstName }, { text: lastName }];

  const t = useTranslations("hero");
  const locale = useLocale();
  const isRTL = locale === "ar";

  /**
   * Mouse parallax (source of spatial depth)
   */
  const { x, y, onPointerMove } = useMouseParallax(25);

  /**
   * Scroll-driven motion (replaces scroll listener)
   */
  const { scrollY } = useScroll();

  const scrollFade = useTransform(scrollY, [0, 600], [1, 0]);
  const translateY = useTransform(scrollY, [0, 600], [0, 80]);

  /**
   * Helper to combine mouse depth
   */
  const parallaxStyle = (depth: number) => ({
    x: x.get() * depth,
    y: y.get() * depth,
  });

  return (
    <motion.section
      style={{ y: translateY }}
      className="relative flex min-h-dvh flex-col justify-center overflow-hidden pt-16"
      onPointerMove={onPointerMove}
    >
      {/* ================= Atmospheric Background ================= */}
      <motion.div
        style={{ opacity: scrollFade }}
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          className="bg-primary/[0.07] animate-pulse-soft absolute top-[10%] right-[8%] h-128 w-lg rounded-full blur-[120px]"
          style={parallaxStyle(1.8)}
        />

        <motion.div
          className="bg-primary/5 animate-pulse-soft absolute bottom-[15%] left-[3%] h-104 w-104 rounded-full blur-[100px]"
          style={parallaxStyle(1.2)}
        />

        <motion.div
          className="bg-accent/40 animate-pulse-soft absolute top-[55%] right-[25%] h-72 w-[18rem] rounded-full blur-[80px]"
          style={parallaxStyle(0.8)}
        />

        {/* floating particles */}
        <motion.div
          className="border-primary/20 animate-float absolute top-[20%] left-[15%] h-3 w-3 rounded-full border"
          style={parallaxStyle(2.5)}
        />

        <motion.div
          className="bg-primary/15 animate-float absolute top-[35%] right-[20%] h-2 w-2 rounded-full"
          style={parallaxStyle(3)}
        />

        <motion.div
          className="border-primary/10 animate-float absolute bottom-[30%] left-[25%] h-2.5 w-2.5 rotate-45 border"
          style={parallaxStyle(2)}
        />

        <motion.div
          className="bg-primary/20 animate-float absolute top-[70%] right-[12%] h-1.5 w-1.5 rounded-full"
          style={parallaxStyle(3.5)}
        />

        {/* texture layer */}
        <motion.div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(hsl(var(--foreground)) 0.8px, transparent 0.8px)",
            backgroundSize: "28px 28px",
            ...parallaxStyle(0.3),
          }}
        />
      </motion.div>

      {/* ================= Content ================= */}
      <div className="relative z-10 container mx-auto flex flex-1 items-center px-6 py-20">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr,auto] lg:gap-20">
          {/* ---------- TEXT SIDE ---------- */}
          <div className={`flex flex-col gap-6 ${isRTL ? "lg:order-2" : ""}`}>
            <ScrollReveal delay={0}>
              <span className="bg-secondary/80 text-muted-foreground border-border/50 inline-flex w-fit items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium backdrop-blur-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                <RiMapPinLine size={12} />
                {personalInfo.location}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-foreground font-serif text-4xl leading-[1.08] font-bold tracking-tight sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
                <TypewriterEffectSmooth words={words} />
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-primary text-lg leading-relaxed font-medium sm:text-xl">
                {personalInfo.jobTitle}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-muted-foreground max-w-xl text-base leading-[1.7] sm:text-lg">
                {summary}
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal delay={400}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="group bg-primary text-primary-foreground shadow-primary/20 hover:shadow-primary/30 hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-medium shadow-lg transition-all duration-300 hover:shadow-xl active:scale-[0.97]"
                >
                  {t("cta")}
                </a>

                <a
                  href={personalInfo.cv.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border bg-card/50 text-foreground hover:bg-accent/50 hover:border-primary/20 inline-flex items-center gap-2 rounded-lg border px-7 py-3.5 text-sm font-medium backdrop-blur-sm transition-all duration-300 active:scale-[0.97]"
                >
                  <RiDownload2Line size={16} />
                  {t("download")}
                </a>
              </div>
            </ScrollReveal>

            {/* Socials */}
            <ScrollReveal delay={500}>
              <div className="flex items-center gap-1.5 pt-1">
                {Object.entries(personalInfo.links)
                  .filter(([key, value]) => key !== "other" && value)
                  .map(([key, value]) => {
                    const config = LINKS[key];

                    if (!config) return null;

                    return (
                      <a
                        key={key}
                        href={value as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={config.label}
                        className="text-muted-foreground hover:text-foreground hover:bg-accent/60 rounded-lg p-2.5 transition-all duration-200 active:scale-95"
                      >
                        <config.icon size={20} />
                      </a>
                    );
                  })}

                {personalInfo.links.other?.map((link, index) => (
                  <a
                    key={`other-${index}`}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="External link"
                    className="text-muted-foreground hover:text-foreground hover:bg-accent/60 rounded-lg p-2.5 transition-all duration-200 active:scale-95"
                  >
                    <RiLink size={20} />
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* ---------- AVATAR ---------- */}
          <ScrollReveal
            delay={200}
            direction="scale"
            className={`flex justify-center lg:justify-end ${
              isRTL ? "lg:order-1" : ""
            }`}
          >
            <motion.div style={parallaxStyle(0.5)} className="relative">
              <div className="from-primary/20 to-accent/30 animate-pulse-soft absolute -inset-4 rounded-full bg-linear-to-br via-transparent blur-2xl" />

              <Image
                src={personalInfo.profileImage?.url || "/images/avatar.jpg"}
                alt={personalInfo.fullName}
                className="border-border relative rounded-full border object-cover shadow-xl sm:h-52 sm:w-52 lg:h-60 lg:w-60"
                width={176}
                height={176}
              />
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </motion.section>
  );
}
