"use client";

import { useState } from "react";
import { useFormContext, Controller, type RegisterOptions } from "react-hook-form";
import { FormLabel, FormControl } from "../ui/form";
import { Input } from "../ui/input";
import { FormRow } from "./FormLayout";
import Pill from "../Pill";

interface PillSectionProps {
  pills: string[];
  inputValue: string;
  onInputChange: (value: string) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const PillSection = ({
  pills,
  onInputChange,
  onKeyDown,
  inputValue,
}: PillSectionProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-fit w-full rounded-md border border-input bg-transparent text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
      <div className="flex flex-wrap w-full">
        {pills.map((pill, index) => (
          <Pill key={index} text={pill} />
        ))}
      </div>
      <Input
        type="text"
        placeholder="Enter tags"
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyDown={onKeyDown}
        className="py-0 border-none"
      />
    </div>
  );
};

interface PillInputProps {
  name: string;
  label: string;
  rules?: RegisterOptions;
  defaultValue?: string[];
}

export const PillInput = ({
  name,
  label,
  rules,
  defaultValue = [],
}: PillInputProps) => {
  const { control } = useFormContext();
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    onChange: (value: string[]) => void,
    pills: string[]
  ) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      event.preventDefault();
      const newPills = [...pills, inputValue.trim()];
      onChange(newPills); // Update the form state and trigger validation
      setInputValue("");
    }
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, value } }) => {
        return (
          <FormRow>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <PillSection
                pills={value}
                inputValue={inputValue}
                onInputChange={handleInputChange}
                onKeyDown={(event) => handleKeyDown(event, onChange, value)}
              />
            </FormControl>
          </FormRow>
        );
      }}
    />
  );
};
