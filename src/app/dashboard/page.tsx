import { Metadata } from "next";
import { unauthorized } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { resolve } from "@/i18n/locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolve();
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return { title: t("dashboard.title") };
}

export default function Dashboard() {
  return unauthorized();
}
