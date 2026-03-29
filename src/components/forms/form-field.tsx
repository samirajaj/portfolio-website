"use client";

import { Controller, useFormContext } from "react-hook-form";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";

type Props = {
  name: string;
  label: string;
  description?: string;
  children: (props: { field: any; invalid: boolean }) => React.ReactNode;
};

export function FormField({ name, label, description, children }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel>{label}</FieldLabel>

          {children({
            field,
            invalid: fieldState.invalid,
          })}

          {description && <FieldDescription>{description}</FieldDescription>}

          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
