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
      //TODO: Zod validation
      const { id } = req.query;

      await dbConnect();
      const newProject = await Project.findOne({
        _id: id,
      });
      return res.status(201).json(createApiResponse(newProject, []));
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  }
  if (req.method === "DELETE") {
    try {
      const { id } = req.query;

      await dbConnect();
      await Project.findOneAndDelete({
        _id: id,
      });
      return res.status(201).json(createApiResponse("Success", []));
    } catch (err) {
      return res
        .status(500)
        .json(createApiResponse(null, ["Internal Server Error"]));
    }
  }
}
