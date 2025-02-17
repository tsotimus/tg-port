import { Controller, useFormContext } from "react-hook-form";
import { type GenericInputProps } from "./types";
import { FormRow } from "../FormLayout";
import { FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const TextInput = ({
    name,
    label,
    rules,
    defaultValue,
  }: GenericInputProps) => {
    const { control } = useFormContext();
    return (
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue ?? ""}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <FormRow>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder={label}
                  onChange={onChange}
                  value={value as string}
                  onBlur={onBlur}
                />
              </FormControl>
            </FormRow>
          );
        }}
      />
    );
  };