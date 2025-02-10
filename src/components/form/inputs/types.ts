import { type RegisterOptions } from "react-hook-form";
import { type Option } from "@/types/options";

export interface GenericInputProps {
    name: string;
    label?: string;
    rules?: RegisterOptions;
    defaultValue?: string;
    placeholder?: string;
};

  

export interface SelectInputProps extends GenericInputProps {
    options: Option[];
}

export interface ScrollableSelectProps extends SelectInputProps {
    isLoading: boolean;
    onScroll: () => void;
}

export interface SwitchInputProps extends GenericInputProps {
    disabled?: boolean;
}
  
export interface FileInputProps extends Omit<GenericInputProps, "rules"> {
    required?: boolean;
}

export interface CheckBoxProps extends Omit<GenericInputProps, "label" | "defaultValue"> {
    label: string;
}

export interface MultiSelectInputProps extends GenericInputProps {
    options: Option[];
    onScroll?: () => void;
    isLoading?: boolean;
}