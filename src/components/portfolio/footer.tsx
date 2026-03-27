"use client";

import { usePortfolio } from "@/context/portfolio-context";
import {
  RemixiconComponentType as IconType,
  RiGithubLine,
  RiLink,
  RiLinkedinLine,
  RiMailLine,
  RiTelegram2Line,
  RiTwitterXLine,
  RiWhatsappLine,
} from "@remixicon/react";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "./scroll-reveal";

const LINKS: Record<string, { icon: IconType; label: string }> = {
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
  twitter: {
    icon: RiTwitterXLine,
    label: "Twitter",
  },
  whatsapp: {
    icon: RiWhatsappLine,
    label: "WhatsApp",
  },
};

export function Footer() {
  const t = useTranslations("footer");

  const {
    portfolio: {
      personalInfo: { email, links },
    },
  } = usePortfolio();

  /**
   * Normalize links → renderable structure
   * Footer no longer understands platforms.
   */

  return (
    <footer className="relative overflow-hidden py-20 sm:py-28">
      {/* top gradient line */}
      <div className="pointer-events-none absolute inset-0">
        <div className="via-border absolute top-0 left-1/2 h-px w-150 -translate-x-1/2 bg-linear-to-r from-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* ================= MAIN BLOCK ================= */}
        <ScrollReveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            {/* Email + Social links */}
            <div className="flex items-center gap-4">
              {/* Email */}
              <a
                href={`mailto:${email}`}
                aria-label="Email"
                className="text-muted-foreground hover:text-foreground hover:bg-accent/60 border-border rounded-lg border p-2.5 transition-all duration-200 active:scale-95"
              >
                <RiMailLine size={18} />
              </a>

              {/* Dynamic social links */}
              <div className="flex items-center gap-4">
                {Object.entries(links)
                  .filter(([key, value]) => key !== "other" && value)
                  .map(([key, url]) => {
                    const config = LINKS[key];

                    if (!config) return null;

                    <a
                      key={key}
                      href={url as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={config.label}
                      className="text-muted-foreground hover:text-foreground hover:bg-accent/60 border-border rounded-lg border p-2.5 transition-all duration-200 active:scale-95"
                    >
                      <config.icon size={14} />
                    </a>;
                  })}
                {links.other?.map((link, index) => (
                  <a
                    key={`other-${index}`}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="External link"
                    className="text-muted-foreground hover:text-foreground hover:bg-accent/60 rounded-lg p-2.5 transition-all duration-200 active:scale-95"
                  >
                    <RiLink size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Email text */}
            <p className="text-muted-foreground text-sm">{email}</p>
          </div>
        </ScrollReveal>

        {/* ================= BOTTOM BAR ================= */}
        <ScrollReveal delay={200}>
          <div className="border-border/50 text-muted-foreground mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm sm:flex-row">
            <p className="font-medium">{t("built")}</p>

            <a
              href="https://github.com/samirajaj/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:text-foreground inline-flex items-center gap-2 transition-colors duration-200"
            >
              <RiGithubLine size={14} />

              <span className="relative">
                {t("source")}
                <span className="bg-foreground absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
