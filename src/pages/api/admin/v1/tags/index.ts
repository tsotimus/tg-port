import { type NextApiRequest, type NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import { createApiResponse, formatZodErrors } from "@/utils/server/createApiResponse";
import { TagSchema } from "@/types/tag";
import Tag from "@/models/Tag";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
        const validatedData = TagSchema.safeParse(req.body);

        if (!validatedData.success) {
          return res
            .status(400)
            .json(createApiResponse(null, formatZodErrors(validatedData.error.errors)));
        }

        await dbConnect();
        const newTag = await Tag.create(validatedData.data);
        const savedTag = await newTag.save();
  
        return res.status(201).json(createApiResponse(savedTag, []));
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json(createApiResponse(null, ["Internal Server Error"]));
    }
  }
  return res.status(400).json(createApiResponse(null, ["Bad Request"]));
}
