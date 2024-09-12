import Project from "@/models/Project";
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import { createApiResponse } from "@/utils/server/createApiResponse";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if (req.method === "GET") {
      try {
        await dbConnect();
        const projects = await Project.find();
        return res.status(200).json(createApiResponse(projects, []));
      } catch (err) {
        return res
          .status(500)
          .json(createApiResponse(null, ["Internal Server Error"]));
      }
    }
    return res.status(400).json(createApiResponse(null, ["Bad Request"]));
}