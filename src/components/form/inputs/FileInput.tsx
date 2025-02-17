import { Input } from "@/components/ui/input";
import { useRef, type ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";
import { type FileInputProps } from "./types";
import { Label } from "@/components/ui/label";

export const FileInput = ({ name, required, label }: FileInputProps) => {
    const { register, setValue } = useFormContext();
    const fileElement = useRef<HTMLInputElement>(null);
  
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
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
  