import DropzoneInput from "@/components/form/DropzoneInput";
import Stack from "@/components/layouts/Stack";
import { Button } from "@/components/ui/button";
import { FormProvider, useForm } from "react-hook-form";

const acceptedFiles = {
  "image/*": [".png", ".gif", ".jpeg", ".jpg"],
  "video/*": [".mp4", ".webm", ".ogg"],
};

type FormData = {
  media: FileList;
};

const UploadMediaForm = () => {
  const methods = useForm<FormData>({
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit = (data: FormData) => {
    console.log("Here");
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack className="items-center" gap={12}>
          <DropzoneInput
            name="media"
            rules={{ required: "Media is required" }}
            allowedFiles={acceptedFiles}
          />
          <Button type="submit" disabled={!isValid}>
            Submit
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default UploadMediaForm;
