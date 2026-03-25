import { NextRequest, NextResponse } from "next/server";
import { portfolioAR, portfolioEN } from "@/data/portfolio";

const LOCALES = ["en", "ar"] as const;
const DEFAULT_LOCALE = "en";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const requestedLocale = searchParams.get("locale");

  const locale =
    requestedLocale && LOCALES.includes(requestedLocale as any)
      ? requestedLocale
      : DEFAULT_LOCALE;

  const portfolio = locale === "ar" ? portfolioAR : portfolioEN;

  return NextResponse.json(portfolio);
}
