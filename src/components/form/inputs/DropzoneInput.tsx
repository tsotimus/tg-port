"use client";

import { Controller, type Noop, type RegisterOptions, useFormContext } from "react-hook-form";
import {
  type Accept,
  useDropzone,
  // type FileRejection,
  type FileWithPath,
} from "react-dropzone";
import { useMemo } from "react";
import Typography from "@/components/Typography";
import { FileIcon } from "@radix-ui/react-icons";

const baseClassNames =
  "flex flex-col items-center w-3/4 m-4 p-20 outline-none transition-border duration-200 ease-in-out cursor-pointer border-2 rounded border-gray-200";

interface DropzoneProps {
  name: string;
  rules: RegisterOptions;
  allowedFiles?: Accept | undefined;
  maxFiles?: number;
  maxSize?: number;
}

// interface FileRejectionWithPath extends FileRejection {
//   path: string;
// }

type FieldType = {
  onChange: (...event: unknown[]) => void
  value: FileWithPath[] | undefined 
  onBlur: Noop
}

const DropzoneInput = ({
  name,
  rules,
  maxFiles,
  maxSize,
  allowedFiles,
}: DropzoneProps) => {
  const { control, setValue } = useFormContext();

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    isFocused,
    // acceptedFiles,
    fileRejections,
  } = useDropzone({
    accept: allowedFiles,
    maxFiles,
    maxSize,
    onDrop: (acceptedFiles) => {
      setValue(name, acceptedFiles as unknown as FileList, {
        shouldValidate: true,
      });
    },
  });

  const acceptedFileItems = (files: FileWithPath[] | undefined) => {
    if (!files) return null;
    return files.map((file) => (
      <li key={file.path} className="flex gap-4">
        <FileIcon />
        {file.path} - {file.size} bytes
      </li>
    ));
  };

  //TODO: Fix this to use value, instead of fileRejections
  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    const typedFile = file as FileWithPath;
    return (
      <li key={typedFile.path}>
        {typedFile.path} - {file.size} bytes
        <ul>
          {errors.map((e) => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </li>
    );
  });

  const additionalClass = useMemo(() => {
    if (isFocused) {
      return "border-blue-500";
    }
    if (isDragAccept) {
      return "border-green-500";
    }
    if (isDragReject) {
      return "border-red-500";
    }
    return "";
  }, [isFocused, isDragAccept, isDragReject]);

  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field: { onChange, onBlur, value } }:{field: FieldType}) => {
        return (
          <div className="w-full max-w-2xl flex-1 flex flex-col items-center border-2 rounded border-gray-200 bg-gray-100 text-gray-400">
            <div
              {...getRootProps({
                className: `${baseClassNames} ${additionalClass}`,
              })}
            >
              <input {...getInputProps({ onChange, onBlur })} />
              {isDragAccept && (
                <Typography>All files will be accepted</Typography>
              )}
              {isDragReject && (
                <Typography>Some files will be rejected</Typography>
              )}
              {!isDragActive && (
                <Typography>Drop some files here ...</Typography>
              )}
            </div>
            <aside className="p-4 flex flex-col w-full">
              <h4>Accepted files</h4>
              <ul>{acceptedFileItems(value)}</ul>
              <h4>Rejected files</h4>
              <ul>{fileRejectionItems}</ul>
            </aside>
          </div>
        );
      }}
    />
  );
};

export default DropzoneInput;
