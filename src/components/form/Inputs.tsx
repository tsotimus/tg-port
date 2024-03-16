import { Option } from "@/types/options";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type GenericInputProps = {
  name: string;
  label?: string;
  rules?: RegisterOptions;
};

type TextInputProps = GenericInputProps;

export const TextInput = ({ name, label, rules }: TextInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => {
        return (
          <input
            className="border border-gray-300 rounded-md p-2"
            placeholder={label}
            onChange={onChange}
            value={value}
            onBlur={onBlur}
          />
        );
      }}
    />
  );
};

type SelectInputProps = GenericInputProps & {
  options: Option[];
};

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
          <Select value={value} onValueChange={onChange}>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select a timezone" />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      }}
    />
  );
};
