import DropzoneInput from "@/components/form/DropzoneInput";
import Stack from "@/components/layouts/Stack";
import { FormProvider, useForm } from "react-hook-form";

const UploadMediaForm = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Stack component="form">
        <DropzoneInput name="media" rules={{ required: "Media is required" }} />
      </Stack>
    </FormProvider>
  );
};

export default UploadMediaForm;
