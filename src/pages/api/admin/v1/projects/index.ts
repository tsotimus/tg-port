import Project from "@/models/Project";
import { type NextApiRequest, type NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import { createApiResponse } from "@/utils/server/createApiResponse";
import { ProjectSchema } from "@/types/project";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const body = req.body;
      try {
        //TODO: Zod validation
        const validatedData = ProjectSchema.parse(body);
      } catch (err) {
        return res.status(400).json(createApiResponse(null, ["Bad Request"]));
      }

      await dbConnect();
      const newProject = await Project.create(body);

      const savedProject = await newProject.save();

      return res.status(201).json(createApiResponse(savedProject, []));
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json(createApiResponse(null, ["Internal Server Error"]));
    }
  }
  if (req.method === "GET") {
    try {
      await dbConnect();
      const projects = await Project.find();
      const allProjects = projects.map((project) => project.toJSON());
      return res.status(200).json(createApiResponse(allProjects, []));
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json(createApiResponse(null, ["Internal Server Error"]));
    }
  }
  return res.status(400).json(createApiResponse(null, ["Bad Request"]));
}
