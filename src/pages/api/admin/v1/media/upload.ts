import { GenericErrorResponse } from "@/types/api";
import { createApiResponse } from "@/utils/server/createApiResponse";
import {
  formidablePromise,
  removeFileExtension,
} from "@/utils/server/files/fileHandler";
import {
  MyVolatileFile,
  createCloudinaryStreamForImage,
  createCloudinaryStreamForVideo,
} from "@/utils/server/files/fileStream";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { files } = await formidablePromise(req, {
        fileWriteStreamHandler: (file) => {
          const currentFile = file as MyVolatileFile; // Formidable VolatileFile type is not correct
          const fileName = currentFile.originalFilename as string;
          const parseFileName = removeFileExtension(fileName);
          if (currentFile.mimetype?.includes("video")) {
            return createCloudinaryStreamForVideo(parseFileName);
          } else {
            return createCloudinaryStreamForImage(parseFileName);
          }
        },
        keepExtensions: true,
        allowEmptyFiles: false,
      });

      if (files) {
        return res
          .status(200)
          .json(createApiResponse<ResponseData>({ message: "Success" }));
      }
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
}

export const config = {
  api: {
    bodyParser: false,
  },
};
