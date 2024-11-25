import Project from "@/models/Project";
import { type NextApiRequest, type NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import { createApiResponse, formatZodErrors } from "@/utils/server/createApiResponse";
import { serverParamSchema } from "@/utils/server/validation";
import { ProjectSchema } from "@/types/project";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { id } = req.query;

      const validatedParam = serverParamSchema.safeParse(id);

      if(!validatedParam.success){
        return res.status(400).json(createApiResponse(null, formatZodErrors(validatedParam.error.errors)));
      }

      await dbConnect();
      const currentProject = await Project.findOne({
        _id: validatedParam.data,
      });
      if (!currentProject) {
        return res
          .status(404)
          .json(createApiResponse(null, ["Project not found"]));
      }
      const foundProject = currentProject.toJSON();
      return res.status(201).json(createApiResponse(foundProject, []));
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
      console.error(err);
      return res
        .status(500)
        .json(createApiResponse(null, ["Internal Server Error"]));
    }
  }
  if (req.method === "PATCH") {
    try {
      const { id } = req.query;

      const validatedParam = serverParamSchema.safeParse(id);

      if(!validatedParam.success){
        return res.status(400).json(createApiResponse(null, formatZodErrors(validatedParam.error.errors)));
      }

      const validatedData = ProjectSchema.safeParse(req.body);

      if(!validatedData.success){
        return res.status(400).json(createApiResponse(null, formatZodErrors(validatedData.error.errors)));
      }
      

      await dbConnect();
      const updatedProject = await Project.findOneAndUpdate(
        {
          _id: validatedParam.data,
        },
        validatedData.data,
      );
      
      if (!updatedProject) {
        return res
          .status(404)
          .json(createApiResponse(null, ["Project not found"]));
      }

      const recentlyUpdated = updatedProject.toJSON();

      return res.status(201).json(createApiResponse(recentlyUpdated, []));
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json(createApiResponse(null, ["Internal Server Error"]));
    }
  }
}
