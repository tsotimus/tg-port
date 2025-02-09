import RenderMDX from "@/components/mdx/RenderMDX";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import { type HydratedDocument } from "mongoose";
import { ProjectDisplayWithTags, type ProjectDisplay } from "@/types/project";
import ProjectArticle from "@/features/Public/Projects/individual/ProjectArticle";
import { ShikiMDX } from "@/components/mdx/ShikiMDX";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  await dbConnect();
  const allProjects = await Project.find<HydratedDocument<ProjectDisplay>>().lean();

  return allProjects.map((project) => ({
    slug: project.slug,
    title: project.title,
  }));
}

async function getProject(slug: string) {

  await dbConnect();
  const foundProject = await Project.findOne<HydratedDocument<ProjectDisplayWithTags>>({
    slug: slug,
  }).populate('techStack');


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
    <>
      <ProjectArticle
        project={currentProject}
        mdxContent={<RenderMDX source={currentProject.mdxContent} />}
      />
      {/* <ProjectArticle
        project={currentProject}
        mdxContent={<ShikiMDX source={currentProject.mdxContent} />}
      /> */}
    </>
  );
}
