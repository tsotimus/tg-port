import { Controller, useFormContext } from "react-hook-form";
import { CheckBoxProps } from "./types";
import { FormRow } from "../FormLayout";
import { FormControl, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

const CheckBoxInput = ({
    name,
    label,
    rules,
    defaultValue,
  }: CheckBoxProps) => {
    const { control } = useFormContext();
    return (
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue ?? false}
        render={({ field: { onChange, value } }) => {
          return (
            <FormRow>
              <FormControl>
                <fieldset className="flex space-x-2 items-center">
                  <Checkbox 
                    onCheckedChange={(checked) => onChange(checked)}
                    value={value ? "true" : "false"}
                    checked={value ? true : false}
                    />
                    <FormLabel>{label}</FormLabel>
                </fieldset>
              </FormControl>
            </FormRow>
          );
        }}
      />
    );
  };

export default CheckBoxInput