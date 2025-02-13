import cloudinary from "@/lib/cloudinary";
import { type File, type VolatileFile } from "formidable";
import { PassThrough } from "stream";
import { s3 } from "@/lib/s3";
import { CLOUD_FOLDER_LOCATION, DOWNLOAD_BUCKET } from "./constants";
import { Upload } from "@aws-sdk/lib-storage";

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


export const createS3Stream = (fileKey: string) => {
  if (!fileKey) {
    throw new Error("fileKey is required");
  }

  const passThrough = new PassThrough();

  const upload = new Upload({
    client: s3,
    params: {
      Bucket: DOWNLOAD_BUCKET,
      Key: fileKey,
      Body: passThrough,
      ACL: "private",
    },
  });

  upload.done().catch((err) => {
    console.log("Error uploading to S3", err)
  })

  return passThrough;
};