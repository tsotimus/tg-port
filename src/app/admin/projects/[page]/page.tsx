import Stack from "@/components/layouts/Stack";
import Typography from "@/components/Typography";
import { Button } from "@/components/ui/button";
import MyProjects from "@/features/Admin/Projects/MyProjects";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import { type ProjectDisplay } from "@/types/project";
import { createPaginatedApiResponse } from "@/utils/server/createApiResponse";
import { type HydratedDocument } from "mongoose";
import { type Metadata } from "next";
import Link from "next/link";
import { z } from "zod";

export const metadata: Metadata = {
  title: "My Projects"
};

const getInitialProjects = async (page: number) => {
    const limit = 5;
    const skip = page * limit; // Adjusted for 0-based page index
    await dbConnect();
    const count = await Project.find().estimatedDocumentCount().exec()
    const projects = await Project.find<HydratedDocument<ProjectDisplay>>({}).sort({createdAt: -1}).skip(skip).limit(limit);

    const currentProjects = projects.map((project) => project.toJSON());

    const meta = {
        totalCount: count,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
        pageSize: limit
    }

    return createPaginatedApiResponse<ProjectDisplay>(currentProjects, meta);
};

const MyProjectsPage = async (props: {params: Promise<{page: string}>}) => {

    const params = await props.params;
    const pageSchema = z.coerce.number().int().nonnegative();
    const result = pageSchema.safeParse(params.page);

    if (!result.success) {
        return (
            <Stack>
                <Typography variant="h1">Invalid page number</Typography>
            </Stack>
        );
    }

    const page = result.data - 1;

    const projects = await getInitialProjects(page);

  return (
    <Stack justify="center" align="center" className="pt-6" gap={8}>
      <Typography variant="h1">My Projects</Typography>
      <Link href="/admin/projects/create">
        <Button type="button">Create new</Button>
      </Link>
      <MyProjects initialProjectsData={projects} page={result.data} />
    </Stack>
  );
};

export default MyProjectsPage;
