import Typography from "@/components/Typography";
import {FullProjectCards } from "@/features/Public/Projects/FullProjectCards";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import { type ProjectDisplayWithTags } from "@/types/project";
import { type HydratedDocument } from "mongoose";
import { type Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Projects",
};

async function fetchAllProjects() {
  await dbConnect();
  const projects = await Project.find<HydratedDocument<ProjectDisplayWithTags>>().sort({projectDate: -1}).populate("techStack");
  return projects.map((project) => project.toJSON());
}

export default async function AllProjectsPage() {
  const allProjects = await fetchAllProjects();

  return (
    <div className="flex flex-col space-y-8">
      <Typography variant="h1">All Projects</Typography>
      <FullProjectCards projects={allProjects} />
    </div>
  );
}
