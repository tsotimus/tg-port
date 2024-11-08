import { type NextApiRequest, type NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import { createApiResponse } from "@/utils/server/createApiResponse";
import { TagSchema } from "@/types/tag";
import Tag from "@/models/Tag";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const body = req.body;
      try {
        //TODO: Zod validation
        const validatedData = TagSchema.parse(body);
      } catch (err) {
        return res.status(400).json(createApiResponse(null, ["Bad Request"]));
      }

      await dbConnect();
      const newTag = await Tag.create(body);
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
