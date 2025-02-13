/* eslint-disable @typescript-eslint/no-unsafe-assignment -- Not properly loading in cloudinary types */
import { type NextApiRequest, type NextApiResponse } from "next";
import { createApiResponse, formatZodErrors } from "@/utils/server/createApiResponse";
import { type GenericErrorResponse } from "@/types/api";
import { DOWNLOAD_BUCKET } from "@/utils/server/files/constants";
import { z } from "zod";
import { DeleteObjectCommand, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { s3 } from "@/lib/s3";

const DeleteSchema = z.object({
  publicId: z.string()
})

const PaginationSchema = z.object({
    limit: z.string().transform((val) => parseInt(val, 10)),
    nextToken: z.string().optional()
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {

    const params = PaginationSchema.safeParse(req.query)

    if(!params.success){
        return res.status(400).json(createApiResponse(null, formatZodErrors(params.error.errors)));
    }

    try {
        const command = new ListObjectsV2Command({
            Bucket: DOWNLOAD_BUCKET,
            Prefix: "", 
            MaxKeys: params.data.limit, 
            ContinuationToken: params.data.nextToken,
        });
    
        const response = await s3.send(command);
    
        return res.status(200).json({
            files: response.Contents?.map((obj) => ({
                key: obj.Key,
                size: obj.Size,
                lastModified: obj.LastModified,
            })) ?? [],
            nextToken: response.NextContinuationToken ?? null, // Token for the next page
        })
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json(
          createApiResponse<GenericErrorResponse>({ message: "Error" }, [
            "Something went wrong",
          ])
        );
    }
  }
  if (req.method === "DELETE") {
    const parsedId = DeleteSchema.safeParse(req.query);
  
    if (!parsedId.success) {
      return res
        .status(400)
        .json(createApiResponse(null, formatZodErrors(parsedId.error.errors)));
    }
  
    try {
      const deleteCommand = new DeleteObjectCommand({
        Bucket: DOWNLOAD_BUCKET,
        Key: parsedId.data.publicId, // Ensure this is the correct key in S3
      });
  
      await s3.send(deleteCommand);
  
      return res.status(204).end(); // Use `.end()` to properly send an empty response
    } catch (e) {
      console.error("Error deleting media from S3:", e);
      return res
        .status(500)
        .json(createApiResponse(null, ["Media delete failed"]));
    }
  }
}
