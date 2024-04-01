import { useMemo } from "react";
import { useDropzone } from "react-dropzone";

interface DropzoneFieldProps {
  acceptedFiles: string[];
  maxFiles?: number;
  maxSize?: number;
}

const baseClassNames =
  "flex-1 flex flex-col items-center p-5 border-2 rounded border-gray-200 bg-gray-100 text-gray-400 outline-none transition-border duration-200 ease-in-out";

const DropzoneField = ({
  acceptedFiles,
  maxFiles,
  maxSize,
}: DropzoneFieldProps) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    isFocused,
  } = useDropzone({ accept: { "image/*": [] }, maxFiles, maxSize });

  const additional = useMemo(() => {
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
    <div className="container">
      <div {...getRootProps({ className: `${baseClassNames} ${additional}` })}>
        <input {...getInputProps()} />
        {isDragAccept && <p>All files will be accepted</p>}
        {isDragReject && <p>Some files will be rejected</p>}
        {!isDragActive && <p>Drop some files here ...</p>}
      </div>
    </div>
  );
};

export default DropzoneField;
