"use client";

import { FormLabel, FormControl } from "@/components/ui/form";
import { Controller, useFormContext } from "react-hook-form";
import { FormRow } from "../FormLayout";
import { ScrollableSelectProps } from "./types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRef } from "react";
import { Spinner } from "@/components/loaders/Loading";

const ScrollableSelect = ({name, rules, label, options, onScroll, isLoading}: ScrollableSelectProps) => {

    const { control } = useFormContext();

    const contentRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        if (scrollTop + clientHeight >= scrollHeight) {
          onScroll();
        }
      }
    };

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
              <Select value={value} onValueChange={onChange} >
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder={label} />
                </SelectTrigger>
                <SelectContent
                  className="max-h-60 overflow-y-auto"
                  onScroll={handleScroll}
                >
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                  {
                    isLoading && (
                        <Spinner />
                    )
                  }
                </SelectContent>
              </Select>
            </FormControl>
          </FormRow>
        );
      }}
    />
    )
}

export default ScrollableSelect