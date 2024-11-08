import { type RegisterOptions } from "react-hook-form";
import { type Option } from "@/types/options";

export type GenericInputProps = {
    name: string;
    label?: string;
    rules?: RegisterOptions;
    defaultValue?: string;
  };

  
export type TextInputProps = GenericInputProps;

export type SelectInputProps = GenericInputProps & {
    options: Option[];
};

export type ScrollableSelectProps = SelectInputProps & {
    isLoading: boolean;
    onScroll: () => void;
}

export type SwitchInputProps = GenericInputProps & {
disabled?: boolean;
};
  
export type FileInputProps = Omit<GenericInputProps, "rules"> & {
    required?: boolean;
};