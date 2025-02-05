import dbConnect from "@/lib/dbConnect";
import Tag from "@/models/Tag";
import { TagDisplay, TagModel } from "@/types/tag";
import { createApiResponse, createPaginatedApiResponse } from "@/utils/server/createApiResponse";
import { HydratedDocument } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const querySchema = z.object({
  page: z.string().optional().default("1").transform((val) => parseInt(val, 10)),
  limit: z.string().optional().default("10").transform((val) => Math.min(parseInt(val, 10), 50))
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {

      // Validate query parameters
      const result = querySchema.safeParse(req.query);
      if (!result.success) {
        return res.status(400).json(createApiResponse(null, ["Invalid query parameters"]));
      }

      await dbConnect();
      const { page, limit } = result.data;

      // Calculate skip value
      const skip = (page - 1) * limit;

      // Fetch paginated results
      const tags = await Tag.find<HydratedDocument<TagDisplay>>().skip(skip).limit(limit);

      // Get total count of documents
      const totalCount = await Tag.countDocuments();

      // Calculate total pages
      const totalPages = Math.ceil(totalCount / limit);


      const formattedTags = tags.map((tag) => tag.toJSON())

      const meta = {
        totalCount,
        totalPages,
        currentPage: page,
        pageSize: limit
      }

      return res.status(200).json(createPaginatedApiResponse<TagDisplay>(formattedTags,meta , []));
    } catch (err) {
      return res
        .status(500)
        .json(createApiResponse(null, ["Internal Server Error"]));
    }
  }
  return res.status(400).json(createApiResponse(null, ["Bad Request"]));
}