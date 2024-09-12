import MainLayout from "@/components/layouts/MainLayout";
import Stack from "@/components/layouts/Stack";
import Hero from "@/features/Public/Home/Hero";
import Intro from "@/features/Public/Home/Intro";
import Showcase from "@/features/Public/Projects/Showcase";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import Head from "next/head";
import { ProjectContent, ProjectModel } from "@/types/project";
import { Document, HydratedDocument } from "mongoose";

interface HomeProps {
  allProjects: ProjectContent[];
}

export default function Home({ allProjects }: HomeProps) {
  return (
    <MainLayout>
      <Head>
        <title>Home</title>
      </Head>
      <Hero />
      <Showcase projects={allProjects} />
    </MainLayout>
  );
}

export async function getStaticProps() {
  await dbConnect();
  const projects = await Project.find<HydratedDocument<ProjectContent>>({
    featured: true,
  });
  const allProjects = projects.map((project) => project.toJSON());

  console.log(allProjects);

  return {
    props: {
      allProjects: allProjects,
    },
  };
}
