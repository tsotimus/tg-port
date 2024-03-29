import Project from "@/models/Project";
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      //TODO: Zod validation
      const { id } = req.query;

      await dbConnect();
      const newProject = await Project.find({
        _id: id,
      });
      return res.status(201).json(newProject);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  }
}
