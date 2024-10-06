import { Suspense } from "react";
import CustomMDX from "@/components/mdx/CustomMDX";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import { HydratedDocument } from "mongoose";
import { ProjectContentDisplay, ProjectShowcaseDisplay } from "@/types/project";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  await dbConnect();
  const allProjects = await Project.find<
    HydratedDocument<ProjectShowcaseDisplay>
  >({
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
  const project = await Project.findOne<ProjectShowcaseDisplay>({
    slug: slug,
  });

  if (!project) {
    return <div>Project not found</div>;
  }

  const mdxSource = project.mdxContent;

  return (
    <Suspense fallback={<>Loading...</>}>
      <h1>{project.title}</h1>
      <CustomMDX source={mdxSource} />
    </Suspense>
  );
}
