import { Controller, useFormContext } from "react-hook-form";
import { type GenericInputProps } from "./types";
import { Calendar } from "@/components/ui/calendar";
import { FormRow } from "../FormLayout";
import { FormLabel, FormControl } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { date } from "zod";
import { Button } from "@/components/ui/button";

interface DatePickerInputProps extends GenericInputProps {
    mode?: "single"
}

type FieldType = {
    onChange: (value: Date | undefined) => void; 
    value: Date | undefined 
}

const DatePickerInput = ({name, rules, label, mode = "single"}:DatePickerInputProps) => {
    const { control } = useFormContext();
    
    return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }: { field: FieldType }) => {
        return (
          <FormRow>
            <FormLabel>{label}</FormLabel>
            <FormControl>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                    variant="outline"
                    className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                    >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {value ? format(value, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                    mode={mode}
                    selected={value}
                    onSelect={onChange}
                    initialFocus
                    />
                </PopoverContent>
                </Popover>
            </FormControl>
          </FormRow>
        );
      }}
    />
    )
}

export default DatePickerInput