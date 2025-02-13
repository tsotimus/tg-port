import ButtonLink from "@/components/ButtonLink";
import DropzoneInput from "@/components/form/DropzoneInput";
import { Button } from "@/components/ui/button";
import { MEDIA_HEADERS } from "@/utils/client/headers";
import axios from "axios";
import { Accept } from "react-dropzone";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

const acceptedFiles: Accept = {
  "image/*": [".png", ".gif", ".jpeg", ".jpg"],
  "video/*": [".mp4", ".webm", ".ogg"],
};

type FormData = {
  media: FileList;
};

interface UploadMediaFormProps {
  isDownloads?:boolean
}

const UploadMediaForm = ({isDownloads = false}:UploadMediaFormProps) => {
  const methods = useForm<FormData>({
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { isValid },
    reset,
  } = methods;

  const onSubmit = (data: FormData) => {

    const endpoint = isDownloads ? "/api/admin/v1/downloads/upload" : "/api/admin/v1/media/upload"

    const formData = new FormData();
    for (let i = 0; i < data.media.length; i++) {
      formData.append(`media${i}`, data.media[i]);
    }

    axios
      .post(endpoint, formData, {
        headers: {
          ...MEDIA_HEADERS,
        },
      })
      .then(() => {
        toast.success("Media uploaded successfully");
        reset();
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="items-center space-y-8 flex flex-col mt-8" >
          <DropzoneInput
            name="media"
            rules={{ required: "Media is required" }}
            allowedFiles={isDownloads ? undefined : acceptedFiles}
          />
          <div className="flex space-x-4">
            <ButtonLink variant="outline" href={isDownloads ? "/admin/media/downloads": "/admin/media/general"}>
              Back
            </ButtonLink>
            <Button type="submit" disabled={!isValid}>
              Submit
            </Button>
          </div>
          
        </div>
      </form>
    </FormProvider>
  );
};

export default UploadMediaForm;
