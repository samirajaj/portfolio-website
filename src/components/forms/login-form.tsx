"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import { RiEyeLine, RiEyeOffLine } from "@remixicon/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const formSchema = z.object({
  password: z.string().trim().min(3, "passwordMin").max(128, "passwordMax"),
});

export function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations("LoginForm");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast.success(JSON.stringify(data, null, 2));
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="login-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="login-form-password">
                    {t("password")}
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      {...field}
                      id="login-form-password"
                      type={isVisible ? "text" : "password"}
                      aria-invalid={fieldState.invalid}
                      autoComplete="password"
                    />
                    <InputGroupAddon
                      align="inline-end"
                      className="cursor-default select-none"
                      onClick={() => setIsVisible((prev) => !prev)}
                    >
                      {isVisible ? <RiEyeLine /> : <RiEyeOffLine />}
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldDescription>
                    {t("passwordDescription")}
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError
                      errors={[{ message: t(fieldState.error?.message!) }]}
                    />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            {t("reset")}
          </Button>
          <Button type="submit" form="login-form">
            {t("submit")}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
