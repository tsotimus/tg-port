"use client";

import { FormLabel, FormControl } from "@/components/ui/form";
import { Controller, useFormContext } from "react-hook-form";
import { FormRow } from "../FormLayout";
import { ScrollableSelectProps } from "./types";
import { useCallback, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useIntersectionObserver } from "@uidotdev/usehooks";


const ScrollableMultiSelect = ({
  name,
  rules,
  label,
  options,
  onScroll,
  isLoading,
}: ScrollableSelectProps) => {
  const { control } = useFormContext();
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  const handleScroll = useCallback(() => {
    if (entry?.isIntersecting && onScroll && !isLoading) {
      onScroll();
    }
  }, [entry, onScroll, isLoading]);

  useEffect(() => {
    handleScroll();
  }, [handleScroll]);

  const isOptionSelected = (value: string, selectedItems: string[] | undefined): boolean => {
    if (!selectedItems) {
      return false;
    }
    return selectedItems.includes(value);
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value: selectedItems } }) => {
        return (
          <FormRow>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="w-full">
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-between"
                  >
                    <div>{label}</div>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[280px] overflow-y-auto left-0"
                >
                  {options.map((option) => (
                    <DropdownMenuCheckboxItem
                      className="w-full"
                      key={option.value}
                      checked={isOptionSelected(option.value, selectedItems)}
                      onCheckedChange={(e) => {
                        if(Array.isArray(selectedItems)) {
                          if (selectedItems.includes(option.value)) {
                            onChange(selectedItems.filter((item) => item !== option.value));
                          } else {
                            onChange([...selectedItems, option.value]);
                          }
                        } else {
                          onChange([option.value]);
                        }
                      }}
                    >
                      {option.label}
                    </DropdownMenuCheckboxItem>
                  ))}
                  {isLoading && (
                    <DropdownMenuCheckboxItem key="loading">
                      Loading...
                    </DropdownMenuCheckboxItem>
                  )}
                  <div ref={ref} className="h-1"></div>
                </DropdownMenuContent>
              </DropdownMenu>
            </FormControl>
          </FormRow>
        );
      }}
    />
  );
};

export default ScrollableMultiSelect;