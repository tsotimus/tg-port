"use client";

import ButtonLink from "@/components/ButtonLink";
import DropzoneInput from "@/components/form/DropzoneInput";
import { Button } from "@/components/ui/button";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { upload } from '@vercel/blob/client';
import { BLOB_LOCATION } from "@/utils/server/files/constants";

type FormData = {
  media: FileList;
};


const UploadLargeMediaForm = () => {
  const methods = useForm<FormData>({
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { isValid },
    reset,
  } = methods;

  const onSubmit = async(data: FormData) => {


    const file = data.media[0];


    try{
        const newBlob = await upload(`${BLOB_LOCATION}/${file.name}`, file, {
            access: 'public',
            handleUploadUrl: '/api/admin/v1/large-media/upload',
        });
        console.log(newBlob.contentType, newBlob)
        toast.success("Successfully uploaded")
    }catch(e){
        toast.error("Upload failed")
        console.error(e);
    }

    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="items-center space-y-8 flex flex-col mt-8" >
          <DropzoneInput
            name="media"
            rules={{ required: "Media is required" }}
          />
          <div className="flex space-x-4">
            <ButtonLink variant="outline" href="/admin/media/downloads">
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

export default UploadLargeMediaForm;
