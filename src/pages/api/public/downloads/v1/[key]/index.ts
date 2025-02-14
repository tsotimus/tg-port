// import { getDistinctId, serverTrack } from "@/features/Analytics/ServerTracking";
import { s3 } from "@/lib/s3";
import { createApiResponse, formatZodErrors } from "@/utils/server/createApiResponse";
import { DOWNLOAD_BUCKET } from "@/utils/server/files/constants";
import { fileNameSchema } from "@/utils/server/validation";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if (req.method === "GET") {
      try {
        const { key } = req.query;
  
        const validatedParam = fileNameSchema.safeParse(key);


        // const posthogId = getDistinctId(req)

        // console.log(posthogId)

        // serverTrack({distinct_id: posthogId, event: "Downloading"})

        
  
        if(!validatedParam.success){
          return res.status(400).json(createApiResponse(null, formatZodErrors(validatedParam.error.errors)));
        }
        
        // use the key to get the S3 object associated with the key. If we find one lets return it as a auto download, if not lets return a 404

        try {
          const command = new GetObjectCommand({
            Bucket: DOWNLOAD_BUCKET,
            Key: validatedParam.data
          });
          
          const s3Object = await s3.send(command);

          if (!s3Object.Body) {
            return res.status(404).json(createApiResponse(null, ['File not found']));
          }

          // Set appropriate headers for file download
          res.setHeader('Content-Disposition', `attachment; filename="${validatedParam.data}"`);
          res.setHeader('Content-Type', s3Object.ContentType || 'application/octet-stream');
          
          // Convert the readable stream to buffer and send
          const responseBuffer = await s3Object.Body.transformToByteArray();
          return res.send(Buffer.from(responseBuffer));
        } catch (error: any) {
          if (error.$metadata?.httpStatusCode === 404) {
            return res.status(404).json(createApiResponse(null, ['File not found']));
          }
          throw error; // This will be caught by the outer try-catch
        }

      } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Internal Server Error" });
      }
    }
  }