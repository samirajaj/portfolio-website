import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const LOCALES = ["en", "ar"] as const;
const DEFAULT_LOCALE = "en";

type Locale = (typeof LOCALES)[number];

export async function POST(req: NextRequest) {
  try {
    const { locale } = await req.json();

    // validation
    if (!locale || !LOCALES.includes(locale)) {
      return NextResponse.json({ error: "Invalid locale" }, { status: 400 });
    }

    // set cookie (server-side)
    (await cookies()).set({
      name: "locale",
      value: locale as Locale,
      path: "/",
      httpOnly: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
    });

    return NextResponse.json({
      success: true,
      locale,
    });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
