import cloudinary from "@/lib/cloudinary";
import { type File, type VolatileFile } from "formidable";
import { PassThrough } from "stream";
// import { FEATURE_FLAGS } from "../features";
import { s3 } from "@/lib/s3";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { CLOUD_FOLDER_LOCATION } from "./constants";

export type VolatileFileType = InstanceType<typeof VolatileFile>;

export interface MyVolatileFile extends VolatileFileType, File {}

// const CLOUD_FOLDER_LOCATION = FEATURE_FLAGS.IS_PROD ? "assets/media" : "assets/dev-media" ;
const BUCKET_NAME = "my-portfolio-downloads-eu-2"

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

  s3.send(
    new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: `${CLOUD_FOLDER_LOCATION}/${fileKey}`,
      Body: passThrough,
      // ContentType: contentType,
      ACL: "private", // Ensure objects are private unless you change this
    })
  ).catch((error) => {
    console.error("Upload to S3 failed:", error);
  });

  return passThrough;
};