import dbConnect from "@/lib/dbConnect";
import Tag from "@/models/Tag";
import { type TagDisplay, TagSchema } from "@/types/tag";
import { createApiResponse, formatZodErrors } from "@/utils/server/createApiResponse";
import { type  HydratedDocument } from "mongoose";
import { type NextRequest } from "next/server";
import { z } from "zod";


const GetTagSchema = z.object({
  techOnly: z.boolean()
})

export const GET = async(req: NextRequest) => {


    const validatedBody = GetTagSchema.safeParse(await req.json());

    if (!validatedBody.success) {
      return Response.json(createApiResponse(null, formatZodErrors(validatedBody.error.errors)), {status: 400});
    }

    const techOnly = validatedBody.data.techOnly; 
    await dbConnect();
    try {
      const tags = techOnly ? await Tag.find<HydratedDocument<TagDisplay>>({ isTech: true }) : await Tag.find<HydratedDocument<TagDisplay>>(); // Fetch tags based on techOnly
      return Response.json(createApiResponse<TagDisplay[]>(tags, []), {status: 200})
    }catch(e){
      console.log(e)
      return Response.json(createApiResponse(null, ["Failed to fetch tags"]), {status: 500});
    }
}


export const POST = async(req: NextRequest) => {
    try {
        const validatedData = TagSchema.safeParse(await req.json());

        if (!validatedData.success) {
          return Response.json(createApiResponse(null, formatZodErrors(validatedData.error.errors)), {status: 400});
        }

        await dbConnect();
        const newTag = await Tag.create(validatedData.data);
        const savedTag = await newTag.save();
        
        return Response.json(createApiResponse(savedTag, []), {status: 200})
    } catch (err) {
      console.error(err);
      return Response.json(createApiResponse(null, ["Failed to create tag"]), {status: 500});
    }
}