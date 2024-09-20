import MainLayout from "@/components/layouts/MainLayout";
import Hero from "@/features/Public/Home/Hero";
import Showcase from "@/features/Public/Projects/Showcase";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import Head from "next/head";
import { ProjectContentDisplay } from "@/types/project";
import { HydratedDocument } from "mongoose";

interface HomeProps {
  allProjects: ProjectContentDisplay[];
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
  const projects = await Project.find<HydratedDocument<ProjectContentDisplay>>({
    featured: true,
  });
  const allProjects = projects.map((project) => project.toJSON());

  return {
    props: {
      allProjects: allProjects,
    },
  };
}
