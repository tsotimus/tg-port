import cloudinary from "@/lib/cloudinary";
import { type File, type VolatileFile } from "formidable";
import { PassThrough } from "stream";
import { CLOUD_FOLDER_LOCATION } from "./constants";

export type VolatileFileType = InstanceType<typeof VolatileFile>;

export interface MyVolatileFile extends VolatileFileType, File {}


export const createCloudinaryStreamForImage = (
  publicId: string | undefined,
) => {
  if (!publicId) {
    throw new Error("public_id is required");
  }

  const cloudinaryStream = cloudinary.uploader.upload_stream(
    { public_id: publicId, folder: CLOUD_FOLDER_LOCATION, invalidate: true },
    (error) => {
      if (error) {
        console.error("Upload to Cloudinary failed:", error);
      }
    }
  );

  const passThrough = new PassThrough();
  passThrough.pipe(cloudinaryStream);
  return passThrough;
};

export const createCloudinaryStreamForVideo = (
  publicId: string | undefined,
) => {
  if (!publicId) {
    throw new Error("public_id is required");
  }

  const cloudinaryStream = cloudinary.uploader.upload_chunked_stream(
    { public_id: publicId, folder: CLOUD_FOLDER_LOCATION, invalidate: true },
    (error) => {
      if (error) {
        console.error("Upload to Cloudinary failed:", error);
      }
    }
  );

  const passThrough = new PassThrough();
  passThrough.pipe(cloudinaryStream);
  return passThrough;
};
