import RenderMDX from "@/components/mdx/RenderMDX";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import { type HydratedDocument } from "mongoose";
import { type ProjectDisplayWithTags, type ProjectDisplay } from "@/types/project";
import ProjectArticle from "@/features/Public/Projects/individual/ProjectArticle";
import { type Metadata } from "next";

export const revalidate = 60;

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

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

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const slug = (await params).slug
 
  // fetch data
  const project = await getProject(slug)

  if(!project){
    throw new Error("Couldn't find project for metadata")
  }

 
  return {
    title: project.title,
  }
}

export async function generateStaticParams() {
  await dbConnect();
  const allProjects = await Project.find<HydratedDocument<ProjectDisplay>>().lean();

  return allProjects.map((project) => ({
    slug: project.slug,
    title: project.title,
  }));
}



export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const currentProject = await getProject(slug);
  if (!currentProject) {
    return <>Project not found</>;
  }


  return (
    <ProjectArticle
      project={currentProject}
      mdxContent={<RenderMDX source={currentProject.mdxContent} />}
    />
  );
}
