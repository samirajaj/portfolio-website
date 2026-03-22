import { cookies, headers } from "next/headers";

const LOCALES = ["en", "ar"];
const DEFAULT_LOCALE = "en";

export async function resolve() {
  let locale = (await cookies()).get("locale")?.value;
  if (locale && LOCALES.includes(locale)) return locale;

  const acceptLanguage = (await headers()).get("accept-language");
  if (!acceptLanguage) return DEFAULT_LOCALE;

  const language = acceptLanguage.split(",")[0].split("-")[0].toLowerCase();
  return LOCALES.includes(language) ? language : DEFAULT_LOCALE;
}
