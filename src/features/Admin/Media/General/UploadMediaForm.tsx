"use client";

import ButtonLink from "@/components/ButtonLink";
import DropzoneInput from "@/components/form/DropzoneInput";
import { Button } from "@/components/ui/button";
import { MEDIA_HEADERS } from "@/utils/client/headers";
import axios from "axios";
import { type Accept } from "react-dropzone";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

const acceptedFiles: Accept = {
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
    reset,
  } = methods;

  const onSubmit = async(data: FormData) => {


    const formData = new FormData();
    for (let i = 0; i < data.media.length; i++) {
      formData.append(`media${i}`, data.media[i]);
    }


      axios
      .post("/api/admin/v1/media/upload", formData, {
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
    }
    

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="items-center space-y-8 flex flex-col mt-8" >
          <DropzoneInput
            name="media"
            rules={{ required: "Media is required" }}
            allowedFiles={acceptedFiles}
          />
          <div className="flex space-x-4">
            <ButtonLink variant="outline" href="/admin/media/general">
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
