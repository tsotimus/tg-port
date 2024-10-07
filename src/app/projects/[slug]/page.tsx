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

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  await dbConnect();
  const project = await Project.findOne<ProjectDisplay>({
    slug: slug,
  });

  if (!project) {
    return <div>Project not found</div>;
  }

  const mdxSource = project.mdxContent;

  return (
    <Suspense fallback={<>Loading...</>}>
      <ProjectArticle
        project={project}
        mdxContent={<CustomMDX source={mdxSource} />}
      />
    </Suspense>
  );
}
