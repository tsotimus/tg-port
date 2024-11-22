/* eslint-disable @typescript-eslint/no-unsafe-assignment -- Not properly loading in cloudinary types */
import { type NextApiRequest, type NextApiResponse } from "next";
import cloudinary from "@/lib/cloudinary";
import { createApiResponse } from "@/utils/server/createApiResponse";
import { type GenericErrorResponse } from "@/types/api";
import { type GetMediaResponse } from "@/features/Admin/Media/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { resources } = await cloudinary.search
        .expression("folder:assets")
        .sort_by("public_id", "desc")
        .max_results(30)
        .execute();

      return res.status(200).json(
        createApiResponse<GetMediaResponse>({
          data: resources,
          meta: { page: 0 },
        })
      );
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
