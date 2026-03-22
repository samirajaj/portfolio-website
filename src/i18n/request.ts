import { cookies, headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";

const LOCALES = ["en", "ar"];
const DEFAULT_LOCALE = "en";

async function resolve() {
  let locale = (await cookies()).get("locale")?.value;
  if (locale && LOCALES.includes(locale)) return locale;

  const acceptLanguage = (await headers()).get("accept-language");
  if (!acceptLanguage) return DEFAULT_LOCALE;

  const language = acceptLanguage.split(",")[0].split("-")[0].toLowerCase();
  return LOCALES.includes(language) ? language : DEFAULT_LOCALE;
}

export default getRequestConfig(async () => {
  const locale = await resolve();

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
