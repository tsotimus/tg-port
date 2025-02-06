import cloudinary from "@/lib/cloudinary";
import { type File, type VolatileFile } from "formidable";
import { PassThrough } from "stream";
import { FEATURE_FLAGS } from "../features";

export type VolatileFileType = InstanceType<typeof VolatileFile>;

export interface MyVolatileFile extends VolatileFileType, File {}

const FOLDER_LOCATION = FEATURE_FLAGS.IS_PROD ? "assets/media" : "assets/dev-media" ;


export const createCloudinaryStreamForImage = (
  publicId: string | undefined,
) => {
  if (!publicId) {
    throw new Error("public_id is required");
  }

  const cloudinaryStream = cloudinary.uploader.upload_stream(
    { public_id: publicId, folder: FOLDER_LOCATION, invalidate: true },
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
    { public_id: publicId, folder: FOLDER_LOCATION, invalidate: true },
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
