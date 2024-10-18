import { Suspense } from "react";
import CustomMDX from "@/components/mdx/CustomMDX";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import { HydratedDocument } from "mongoose";
import { ProjectDisplay } from "@/types/project";
import ProjectArticle from "@/features/Public/Projects/individual/ProjectArticle";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  await dbConnect();
  const allProjects = await Project.find<HydratedDocument<ProjectDisplay>>({
    type: "SHOWCASE",
  });

  return allProjects.map((project) => ({
    slug: project.slug,
    title: project.title,
  }));
}

async function getProject(slug: string) {
  await dbConnect();
  const foundProject = await Project.findOne<HydratedDocument<ProjectDisplay>>({
    slug: slug,
  });
  if (!foundProject) {
    return null;
  }
  const project = foundProject.toJSON();
  return project;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const currentProject = await getProject(slug);
  if (!currentProject) {
    return <>Project not found</>;
  }

  return (
    <Suspense fallback={<>Loading...</>}>
      <ProjectArticle
        project={currentProject}
        mdxContent={<CustomMDX source={currentProject.mdxContent} />}
      />
    </Suspense>
  );
}
