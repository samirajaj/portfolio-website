"use client";

import { useRouter } from "next/navigation";
import { RiTranslate2 } from "@remixicon/react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LOCALES = ["en", "ar"] as const;

export function LocaleSwitcher() {
  const t = useTranslations("Locale");
  const l = useLocale();
  const router = useRouter();

  async function setLocale(locale: (typeof LOCALES)[number]) {
    await fetch("/api/locale", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale }),
    });

    router.refresh();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <RiTranslate2 className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch locale</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LOCALES.map(
          (locale) =>
            locale !== l && (
              <DropdownMenuItem key={locale} onClick={() => setLocale(locale)}>
                {t(locale)}
              </DropdownMenuItem>
            ),
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
