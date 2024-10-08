import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import { createApiResponse } from "@/utils/server/createApiResponse";
import { ProjectSchema } from "@/types/project";
import BlogPost from "@/models/BlogPost";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const body = req.body;
      //   try {
      //     //TODO: Validate the incoming data with zod
      //     const validatedData = ProjectSchema.parse(body);
      //   } catch (err) {
      //     return res.status(400).json(createApiResponse(null, ["Bad Request"]));
      //   }

      await dbConnect();
      const newPost = await BlogPost.create(body);

      await newPost.save();
      return res.status(201).json(createApiResponse("Success", []));
    } catch (err) {
      return res
        .status(500)
        .json(createApiResponse(null, ["Internal Server Error"]));
    }
  }
  if (req.method === "GET") {
    try {
      await dbConnect();
      const posts = await BlogPost.find();
      return res.status(200).json(createApiResponse(posts, []));
    } catch (err) {
      return res
        .status(500)
        .json(createApiResponse(null, ["Internal Server Error"]));
    }
  }
  return res.status(400).json(createApiResponse(null, ["Bad Request"]));
}
