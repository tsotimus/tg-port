import { Option } from "@/types/options";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChangeEvent, MutableRefObject, useRef, useState } from "react";

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

type FileInputProps = Omit<GenericInputProps, "rules"> & {
  required?: boolean;
};

export const FileInput = ({ name, required, label }: FileInputProps) => {
  const { register, setValue } = useFormContext();
  const fileElement = useRef<HTMLInputElement>(null);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    setValue(name, file, {
      shouldTouch: true,
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  return (
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="file_input"
      >
        {label ? label : "Upload file"}
      </label>
      <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
        accept="image/*"
        {...register(name, {
          required: required,
        })}
        onChange={handleOnChange}
        ref={fileElement}
      />
    </div>
  );
};
