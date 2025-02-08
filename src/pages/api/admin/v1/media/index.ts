/* eslint-disable @typescript-eslint/no-unsafe-assignment -- Not properly loading in cloudinary types */
import { type NextApiRequest, type NextApiResponse } from "next";
import cloudinary from "@/lib/cloudinary";
import { createApiResponse, formatZodErrors } from "@/utils/server/createApiResponse";
import { type GenericErrorResponse } from "@/types/api";
import { type GetMediaResponse } from "@/features/Admin/Media/types";
import { FOLDER_LOCATION } from "@/utils/server/files/constants";
import { z } from "zod";

const DeleteSchema = z.object({
  publicId: z.string()
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { resources } = await cloudinary.search
        .expression(`folder:${FOLDER_LOCATION}`)
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
  if (req.method === "DELETE"){

    const parsedId = DeleteSchema.safeParse(req.query);

    if(!parsedId.success){
        return res.status(400).json(createApiResponse(null, formatZodErrors(parsedId.error.errors)));
    }
    try{
      await cloudinary.uploader.destroy(parsedId.data.publicId, { invalidate: true });
      return res.status(204);
    }catch(e){
      console.log(e)
      return res.status(500).json(createApiResponse(null, ["Media Delete failed"]));
    }
    
  }
}
