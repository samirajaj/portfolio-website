import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { resolve } from "@/i18n/locale";
import { LoginForm } from "@/components/forms/login-form";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolve();
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return { title: t("login.title") };
}

export default function Login() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
