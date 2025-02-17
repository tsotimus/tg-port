import { FormControl, FormLabel } from "@/components/ui/form";
import { MultiSelect } from "@/components/ui/multi-select";
import { useFormContext, Controller } from "react-hook-form";
import { FormRow } from "../FormLayout";
import { type MultiSelectInputProps } from "./types";


type MultiSelectInputValue = string[] | undefined

export const MultiSelectInput = ({name, rules, defaultValue, label, options, placeholder, onScroll, isLoading}:MultiSelectInputProps) => {
    const { control } = useFormContext();
  
      return (
        <Controller
          name={name}
          control={control}
          rules={rules}
          defaultValue={defaultValue ?? []}
          render={({ field: { onChange, value } }) => {
            return (
              <FormRow>
                <FormControl>
                  <fieldset>
                    <FormLabel>{label}</FormLabel>
                    <MultiSelect
                      options={options}
                      onValueChange={onChange}
                      defaultValue={value as MultiSelectInputValue}
                      placeholder={placeholder ?? "Select"}
                      variant="default"
                      maxCount={3}
                      onScroll={onScroll}
                      isLoading={isLoading}
                    />
                  </fieldset>
                </FormControl>
              </FormRow>
            );
          }}
        />
    )
  }