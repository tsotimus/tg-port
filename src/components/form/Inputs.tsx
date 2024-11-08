"use client";

import { Controller, useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChangeEvent, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { FormControl, FormLabel } from "@/components/ui/form";
import { FormRow } from "./FormLayout";
import { Checkbox } from "@/components/ui/checkbox";
import { FileInputProps, SelectInputProps, SwitchInputProps, TextInputProps } from "./inputs/types";


export const TextInput = ({
  name,
  label,
  rules,
  defaultValue,
}: TextInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue || ""}
      render={({ field: { onChange, onBlur, value } }) => {
        return (
          <FormRow>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder={label}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
              />
            </FormControl>
          </FormRow>
        );
      }}
    />
  );
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
          <FormRow>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Select value={value} onValueChange={onChange}>
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
      defaultValue={defaultValue || ""}
      render={({ field: { onChange, value } }) => {
        return (
          <FormRow>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Switch
                checked={value}
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
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label className="cursor-pointer block mb-2 " htmlFor="file_input">
        {label ? label : "Upload file"}
      </Label>
      <Input
        className="block w-full text-sm text-black bg-white cursor-pointer focus:outline-none placeholder-white"
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

export const CheckBoxInput = ({
  name,
  label,
  rules,
  defaultValue,
}: TextInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue || ""}
      render={({ field: { onChange, value } }) => {
        return (
          <FormRow>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Checkbox onCheckedChange={onChange} value={value} />
            </FormControl>
          </FormRow>
        );
      }}
    />
  );
};
