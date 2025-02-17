import { FormLabel, FormControl } from "@/components/ui/form";
import { Switch } from "@radix-ui/react-switch";
import { Controller, useFormContext } from "react-hook-form";
import { FormRow } from "../FormLayout";
import { type SwitchInputProps } from "./types";


type CheckedValue = boolean | undefined

export const SwitchInput = ({
    name,
    label,
    rules,
    defaultValue,
    disabled,
  }: SwitchInputProps) => {
    const { control } = useFormContext();
    return (
      <Controller
        name={name}
        control={control}
        rules={rules}
        disabled={disabled}
        defaultValue={defaultValue ?? ""}
        render={({ field: { onChange, value } }) => {
          return (
            <FormRow>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <Switch
                  checked={value as CheckedValue}
                  onCheckedChange={onChange}
                  aria-readonly
                  disabled={disabled}
                />
              </FormControl>
            </FormRow>
          );
        }}
      />
    );
  };
  