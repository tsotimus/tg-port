import { FormLabel, FormControl } from "@/components/ui/form";
import { useFormContext, Controller } from "react-hook-form";
import { FormRow } from "../FormLayout";
import { type SelectInputProps } from "./types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


type SelectValue = string | undefined

export const SelectInput = ({
    name,
    label,
    rules,
    options,
  }: SelectInputProps) => {
    const { control } = useFormContext();
    return (
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => {
          return (
            <FormRow>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <Select value={value as SelectValue} onValueChange={onChange}>
                  <SelectTrigger className="w-[280px]">
                    <SelectValue placeholder={label} />
                  </SelectTrigger>
                  <SelectContent>
                    {options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
            </FormRow>
          );
        }}
      />
    );
  };