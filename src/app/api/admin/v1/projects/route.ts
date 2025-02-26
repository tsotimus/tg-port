import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import { type ProjectModel, ProjectSchema } from "@/types/project";
import { createApiResponse, createPaginatedApiResponse, formatZodErrors } from "@/utils/server/createApiResponse";
import { paginationParamSchema } from "@/utils/server/validation";
import { type HydratedDocument } from "mongoose";
import {type NextRequest } from "next/server"



export const GET = async(req: NextRequest) => {

    const searchParams = req.nextUrl.searchParams

    const validatedBody = paginationParamSchema.safeParse({
        limit: searchParams.get("limit"),
        page: searchParams.get("page")
    })

    if(!validatedBody.success){
        return Response.json(createApiResponse(null, formatZodErrors(validatedBody.error.errors)),{status: 400})
    }

    const {page,limit} = validatedBody.data

    const currentPage = page ?? 1;

    const skip = (currentPage - 1) * limit;

    try {
        await dbConnect();
        const projectCount = await Project.find().estimatedDocumentCount().exec()
        const projects = await Project.find<HydratedDocument<ProjectModel>>().sort({updatedAt: -1}).skip(skip).limit(validatedBody.data.limit);
        const allProjects = projects.map((project) => project.toJSON());

        const meta = {
            totalCount: projectCount,
            totalPages: Math.ceil(projectCount / validatedBody.data.limit),
            currentPage: validatedBody.data.page ?? 1,
            pageSize: validatedBody.data.limit
        }

        return Response.json(createPaginatedApiResponse(allProjects, meta), {status: 200});
      } catch (err) {
        console.error(err);
        return Response.json(createApiResponse(null, ["Internal Server Error"]), {status: 500});
      }
}

export const POST = async(req: NextRequest) => {
    try {

        const validatedData = ProjectSchema.safeParse(await req.json());
  
        if (!validatedData.success) {
            return Response.json(createApiResponse(null, formatZodErrors(validatedData.error.errors)),{status: 400})
        }
        
        await dbConnect();
        const newProject = await Project.create(validatedData.data);
  
        const savedProject = await newProject.save();
        
        return Response.json(createApiResponse(savedProject, []), {status: 201})
      } catch (err) {
        console.error(err);
        return Response.json(createApiResponse(null, ["Internal Server Error"]), {status: 500});
      }
}