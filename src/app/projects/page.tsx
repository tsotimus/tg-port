import Typography from "@/components/Typography";
import FullProjectCards from "@/features/Public/Projects/FullProjectCards";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import { ProjectContentDisplay } from "@/types/project";
import { HydratedDocument } from "mongoose";

export const revalidate = 60;

async function fetchAllProjects() {
  await dbConnect();
  const projects = await Project.find<
    HydratedDocument<ProjectContentDisplay>
  >();
  return projects.map((project) => project.toJSON());
}

export default async function AllProjectsPage() {
  const allProjects = await fetchAllProjects();

  return (
    <>
      <Typography variant="h1">All Projects</Typography>
      <FullProjectCards projects={allProjects} />
    </>
  );
}
