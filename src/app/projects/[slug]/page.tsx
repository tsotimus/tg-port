import { Suspense } from "react";
import CustomMDX from "@/components/mdx/CustomMDX";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import { HydratedDocument } from "mongoose";
import { ProjectShowcaseDisplay } from "@/types/project";
import ProjectDisplay from "@/features/Public/Projects/individual/ProjectDisplay";
// import matter from "gray-matter";
// import { serialize } from "next-mdx-remote/serialize";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

//TODO: Ensure security here in terms of DB access

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
      <ProjectDisplay
        project={project}
        mdxContent={<CustomMDX source={mdxSource} />}
      />

      {/* <div className="mx-auto max-w-3xl">
        <Header {...project} />
        <BlurImage
          src={`/images/projects/${slug}/cover.png`}
          width={1280}
          height={832}
          alt={name}
          className="my-12 rounded-lg"
          lazy={false}
        />
        <Mdx content={body} />
      </div> */}
    </Suspense>
  );
}
