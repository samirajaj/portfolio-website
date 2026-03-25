"use client";

import React, { useState } from "react";
import { usePortfolio } from "@/context/portfolio-context";
import {
  RiCheckboxCircleLine,
  RiGithubLine,
  RiMailLine,
  RiMailSendLine,
} from "@remixicon/react";
import { useLocale, useTranslations } from "next-intl";
import { z } from "zod";
import { ScrollReveal } from "./scroll-reveal";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const { portfolio } = usePortfolio();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const schema = z.object({
    name: z.string().trim().min(1, t("nameRequired")).max(100),
    email: z.string().trim().email(t("emailInvalid")).max(255),
    message: z.string().trim().min(1, t("messageRequired")).max(1000),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      fieldErrors[result.error.message] = result.error.message;

      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }, 1000);
  };

  return (
    <footer id="contact" className="relative overflow-hidden py-32 sm:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="via-border absolute top-0 left-1/2 h-px w-150 -translate-x-1/2 bg-linear-to-r from-transparent to-transparent" />
        <div className="bg-primary/4 absolute right-[10%] bottom-0 h-75 w-75 rounded-full blur-[80px]" />
        <div className="bg-accent/30 absolute top-[20%] left-[5%] h-50 w-50 rounded-full blur-[60px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="mx-auto grid max-w-5xl items-start gap-16 md:grid-cols-[1fr,1.2fr] md:gap-20">
          <ScrollReveal direction={isRTL ? "right" : "left"}>
            <div className="flex flex-col gap-6">
              <div className="bg-primary/10 border-primary/20 flex h-14 w-14 items-center justify-center rounded-xl border">
                <RiMailLine size={22} className="text-primary" />
              </div>
              <h2 className="text-foreground font-serif text-3xl leading-tight font-bold sm:text-4xl">
                {t("title")}
              </h2>
              <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
                {portfolio.personalInfo.email}
              </p>
              <div className="flex items-center gap-3 pt-2">
                {portfolio.personalInfo.links.github && (
                  <a
                    href={portfolio.personalInfo.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground hover:bg-accent/60 border-border rounded-lg border p-2.5 transition-all duration-200 active:scale-95"
                    aria-label="GitHub"
                  >
                    <RiGithubLine size={18} />
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <form
              onSubmit={handleSubmit}
              className="border-border bg-card/50 grid gap-5 rounded-2xl border p-6 shadow-lg backdrop-blur-sm sm:p-8"
              noValidate
            >
              <div>
                <label
                  htmlFor="name"
                  className="text-foreground mb-2 block text-sm font-medium"
                >
                  {t("name")}
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="border-input bg-background/80 text-foreground placeholder:text-muted-foreground focus:ring-ring/50 focus:border-primary/30 w-full rounded-lg border px-4 py-3 text-sm transition-all duration-200 focus:ring-2 focus:outline-none"
                  maxLength={100}
                />
                {errors.name && (
                  <p className="text-destructive mt-1.5 text-xs font-medium">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-foreground mb-2 block text-sm font-medium"
                >
                  {t("email")}
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="border-input bg-background/80 text-foreground placeholder:text-muted-foreground focus:ring-ring/50 focus:border-primary/30 w-full rounded-lg border px-4 py-3 text-sm transition-all duration-200 focus:ring-2 focus:outline-none"
                  maxLength={255}
                />
                {errors.email && (
                  <p className="text-destructive mt-1.5 text-xs font-medium">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-foreground mb-2 block text-sm font-medium"
                >
                  {t("message")}
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  rows={5}
                  className="border-input bg-background/80 text-foreground placeholder:text-muted-foreground focus:ring-ring/50 focus:border-primary/30 w-full resize-none rounded-lg border px-4 py-3 text-sm transition-all duration-200 focus:ring-2 focus:outline-none"
                  maxLength={1000}
                />
                {errors.message && (
                  <p className="text-destructive mt-1.5 text-xs font-medium">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group bg-primary text-primary-foreground shadow-primary/20 hover:shadow-primary/30 hover:bg-primary/90 inline-flex items-center justify-center gap-2.5 rounded-lg px-7 py-3.5 text-sm font-medium shadow-lg transition-all duration-300 hover:shadow-xl active:scale-[0.97] disabled:pointer-events-none disabled:opacity-60"
              >
                {loading ? (
                  <span className="border-primary-foreground/30 border-t-primary-foreground h-4 w-4 animate-spin rounded-full border-2" />
                ) : submitted ? (
                  <RiCheckboxCircleLine size={16} />
                ) : (
                  <RiMailSendLine
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                )}
                {submitted ? t("success") : t("send")}
              </button>
            </form>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={400}>
          <div className="border-border/50 text-muted-foreground mt-28 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm sm:flex-row">
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
