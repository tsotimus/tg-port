import { type NextApiRequest, type NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import { createApiResponse, formatZodErrors } from "@/utils/server/createApiResponse";
import { type TagDisplay, TagSchema } from "@/types/tag";
import Tag from "@/models/Tag";
import { type HydratedDocument } from "mongoose";

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
  if(req.method === "GET"){
    const techOnly = req.query.techOnly === 'true'; // Check if techOnly query param is true
    await dbConnect();
    try {
      const tags = techOnly ? await Tag.find<HydratedDocument<TagDisplay>>({ isTech: true }) : await Tag.find<HydratedDocument<TagDisplay>>(); // Fetch tags based on techOnly
      return res.status(200).json(createApiResponse<TagDisplay[]>(tags, [])); // Return the fetched tags
    }catch(e){
      console.log(e)
      return res.status(500).json(createApiResponse(null, ["Failed to fetch tags"])); // Return the fetched tags
    }
  }
  return res.status(400).json(createApiResponse(null, ["Bad Request"]));
}
