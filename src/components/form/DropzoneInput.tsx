import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import DropzoneField from "./Dropzone";

interface DropzoneProps {
  name: string;
  rules: RegisterOptions;
  acceptedFiles?: string[];
}
const DropzoneInput = ({ name, rules }: DropzoneProps) => {
  const { control } = useFormContext();

  const handleDrop = (acceptedFiles: File[]) => {};

  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => {
        return <DropzoneField acceptedFiles={[]} />;
      }}
    />
  );
};

export default DropzoneInput;
