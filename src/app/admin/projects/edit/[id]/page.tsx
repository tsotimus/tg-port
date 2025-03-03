import Stack from "@/components/layouts/Stack";
import EditProject from "@/features/Admin/Projects/EditProject";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import { type ProjectDisplay } from "@/types/project";
import { type HydratedDocument } from "mongoose";

async function getProject(id: string | null | undefined) {
  if (!id) {
    return null;
  }
  await dbConnect();
  const foundProject = await Project.findOne<HydratedDocument<ProjectDisplay>>({
    _id: id,
  });

  if (!foundProject) {
    return null;
  }

  const project = foundProject.toJSON();

  return project;
}

export default async function EditPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const project = await getProject(params.id);

  if (!project) {
    return <>Project not found</>;
  }

  return (
    <Stack className="p-12">
      <EditProject project={project} />
    </Stack>
  );
}
