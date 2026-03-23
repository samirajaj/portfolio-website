import { resolve } from "@/i18n/locale";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { unauthorized } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolve();
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return { title: t("dashboard.title") };
}

export default function Dashboard() {
  return unauthorized();
}
