"use client";

import { Controller, FieldValues } from "react-hook-form";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { BaseFieldProps } from "../rhf-form";

export function InputField<T extends FieldValues>({
  name,
  control,
  label,
  description,
}: BaseFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          {label && <FieldLabel>{label}</FieldLabel>}

          <Input {...field} aria-invalid={fieldState.invalid} />

          {description && <FieldDescription>{description}</FieldDescription>}

          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
