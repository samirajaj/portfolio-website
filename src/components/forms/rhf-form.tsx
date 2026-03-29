import { zodResolver } from "@hookform/resolvers/zod";
import {
  DefaultValues,
  FormProvider,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { Control, FieldValues, Path } from "react-hook-form";
import * as z from "zod";

export type BaseFieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  description?: string;
};

export function useZodForm<TSchema extends z.ZodObject>(options: {
  schema: TSchema;
  defaultValues: DefaultValues<z.infer<TSchema>>;
}) {
  return useForm<z.infer<TSchema>>({
    resolver: zodResolver(options.schema) as any,
    defaultValues: options.defaultValues,
  });
}

type Props<T extends FieldValues> = {
  form: UseFormReturn<T>;
  children: React.ReactNode;
};

export function FormProviderWrapper<T extends FieldValues>({
  form,
  children,
}: Props<T>) {
  return <FormProvider {...form}>{children}</FormProvider>;
}
