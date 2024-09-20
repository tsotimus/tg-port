import MainLayout from "@/components/layouts/MainLayout";
import Typography from "@/components/Typography";
import FullProjectCards from "@/features/Public/Projects/FullProjectCards";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import { ProjectContentDisplay } from "@/types/project";
import { HydratedDocument } from "mongoose";

interface AllProjectsPageProps {
  allProjects: ProjectContentDisplay[];
}

const AllProjectsPage = ({ allProjects }: AllProjectsPageProps) => {
  return (
    <MainLayout>
      <Typography variant="h1">All Projects</Typography>
      <FullProjectCards projects={allProjects} />
    </MainLayout>
  );
};

export default AllProjectsPage;

export async function getStaticProps() {
  await dbConnect();
  const projects = await Project.find<
    HydratedDocument<ProjectContentDisplay>
  >();
  const allProjects = projects.map((project) => project.toJSON());

  return {
    props: {
      allProjects: allProjects,
    },
  };
}
