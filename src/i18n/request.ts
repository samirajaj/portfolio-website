import { getRequestConfig } from "next-intl/server";
import { resolve } from "./locale";

export default getRequestConfig(async () => {
  const locale = await resolve();

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
