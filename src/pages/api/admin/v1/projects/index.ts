import Project from "@/models/Project";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      //TODO: Zod validation
      const { title, slug, mdxContent, type } = req.body;

      const newProject = await Project.create({
        title,
        slug,
        mdxContent,
        type,
      });
      await newProject.save();
      return res.status(201).json({ title, slug, mdxContent, type });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  }
}
