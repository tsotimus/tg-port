import { formidablePromise } from "@/utils/server/files/fileHandler";
import { createCloudinaryStream } from "@/utils/server/files/fileStream";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { files } = await formidablePromise(req, {
        fileWriteStreamHandler: (file) => {
          console.log(file);
          return createCloudinaryStream("somethingRandom");
        },
        keepExtensions: true,
        allowEmptyFiles: false,
      });

      if (files) {
        console.log("Success", files);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Something went wrong" });
    }
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
