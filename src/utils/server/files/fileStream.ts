import cloudinary from "@/lib/cloudinary";
import { PassThrough } from "stream";

export const createCloudinaryStream = (publicId: string | undefined) => {
  if (!publicId) {
    throw new Error("publicId is required");
  }
  const cloudinaryStream = cloudinary.uploader.upload_stream(
    { public_id: publicId },
    (error, result) => {
      if (error) {
        console.error("Upload to Cloudinary failed:", error);
      } else {
        console.log("Upload to Cloudinary successful:", result);
      }
    }
  );

  const passThrough = new PassThrough();
  passThrough.pipe(cloudinaryStream);
  return passThrough;
};
