import { type GenericErrorResponse } from "@/types/api";
import { createApiResponse } from "@/utils/server/createApiResponse";
import { formidablePromise } from "@/utils/server/files/fileHandler";
import { type MyVolatileFile, createS3Stream } from "@/utils/server/files/fileStream";
import { type NextApiRequest, type NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const uploadPromises: Promise<void>[] = [];

      const { files } = await formidablePromise(req, {
        fileWriteStreamHandler: (file) => {
          const currentFile = file as MyVolatileFile; // Formidable VolatileFile type is not correct
          const fileName = currentFile.originalFilename!;
          const { stream, uploadPromise } = createS3Stream(fileName);

          uploadPromises.push(uploadPromise); 

          return stream
        },
        keepExtensions: true,
        allowEmptyFiles: false,
      });

      if (files) {
        await Promise.all(uploadPromises);
        
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
