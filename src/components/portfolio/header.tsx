"use client";

import { useState } from "react";
import {
  RiCloseFill,
  RiMenuFill,
  RiTranslate2,
  RiUserSmileLine,
} from "@remixicon/react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useLocale } from "next-intl";
import { useTranslations } from "use-intl";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LocaleSwitcher } from "../locale-switcher";
import { ModeToggle } from "../mode-toggle";

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  /**
   * Motion scroll tracking
   */
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  const navItems = [
    { id: "about", label: t("about") },
    { id: "skills", label: t("skills") },
    { id: "experience", label: t("experience") },
    { id: "projects", label: t("projects") },
    { id: "education", label: t("education") },
    { id: "contact", label: t("contact") },
  ];

  return (
    <motion.header
      animate={{
        backdropFilter: scrolled ? "blur(24px)" : "blur(0px)",
        backgroundColor: scrolled
          ? "rgba(var(--background),0.7)"
          : "rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.35 }}
      className="fixed top-0 right-0 left-0 z-50 border-b border-transparent"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#"
          className="text-muted-foreground hover:text-primary flex items-center justify-center rounded-full p-2 transition-colors duration-200"
        >
          <RiUserSmileLine size={22} className="stroke-[1.6]" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center md:flex">
          {navItems.map((item) => (
            <Button
              variant="ghost"
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={cn(
                "relative px-3 py-2 text-sm font-medium",
                activeSection === item.id && "text-muted-foreground",
              )}
            >
              {item.label}

              <AnimatePresence>
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="bg-primary absolute bottom-0.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full"
                  />
                )}
              </AnimatePresence>
            </Button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <ModeToggle />
          <LocaleSwitcher />
          <Button
            variant="outline"
            size="icon"
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2.5 md:hidden"
          >
            {mobileOpen ? (
              <RiCloseFill className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <RiMenuFill className="h-[1.2rem] w-[1.2rem]" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-b md:hidden"
          >
            <nav className="container mx-auto flex flex-col gap-1 px-6 py-3">
              {navItems.map((item) => (
                <Button
                  variant="outline"
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileOpen(false);
                  }}
                  className="rounded-lg px-4 py-3 text-left"
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
