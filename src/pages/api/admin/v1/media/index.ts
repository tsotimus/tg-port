import { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "@/lib/cloudinary";
import { createApiResponse } from "@/utils/server/createApiResponse";
import { GenericErrorResponse } from "@/types/api";

type ResponseData = {
  data: Array<any>;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    console.log("GET REQ");

    //Switch to cloudinary Admin API

    try {
      const { resources } = await cloudinary.search
        .expression("folder:assets")
        .sort_by("public_id", "desc")
        .max_results(30)
        .execute();

      console.log(resources);

      return res
        .status(200)
        .json(createApiResponse<ResponseData>({ data: resources }));
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
