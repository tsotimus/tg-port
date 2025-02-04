import { type NextApiRequest, type NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import { createApiResponse, formatZodErrors } from "@/utils/server/createApiResponse";
import BlogPost from "@/models/BlogPost";
import { type BlogPostModel, CreateBlogPostSchema } from "@/types/blogpost";
import { serverParamSchema } from "@/utils/server/validation";
import { type HydratedDocument } from "mongoose";


interface UniqueBlogRequest extends NextApiRequest {
    query: {
        id?: string
    }
}

export default async function handler(
  req: UniqueBlogRequest,
  res: NextApiResponse
) {

    
    const queryId = req.query.id

    const parsedId = serverParamSchema.safeParse(queryId);

    if(!parsedId.success){
        return res.status(400).json(createApiResponse(null, formatZodErrors(parsedId.error.errors)));
    }

    if (req.method === "PATCH") {
        try {
            const validatedData = CreateBlogPostSchema.safeParse(req.body);
                
            if(!validatedData.success){
                return res.status(400).json(createApiResponse(null, formatZodErrors(validatedData.error.errors)));
            }

            await dbConnect();

            const foundPost = await BlogPost.findOne<HydratedDocument<BlogPostModel>>({_id: parsedId.data})

            if(!foundPost){
                return res.status(404).json(createApiResponse(null, ["Not found"])); 
            }


            if(validatedData.data.status === "PUBLISHED"){
                // We should add the publishedAt date if the status is PUBLISHED
                const structuredData = {
                    ...validatedData.data,
                    publishedAt: new Date()
                }

                // Update the foundPost to the validatedData
                Object.assign(foundPost, structuredData);
                const savedPost = await foundPost.save();
                const formattedPost = savedPost.toJSON();
                return res.status(201).json(createApiResponse(formattedPost, []));
            } else {
                // Update the foundPost to the validatedData
                Object.assign(foundPost, validatedData.data);
                const savedPost = await foundPost.save();
                const formattedPost = savedPost.toJSON();
                return res.status(201).json(createApiResponse(formattedPost, []));
            }
        } catch (err) {
        console.log(err);
        return res
            .status(500)
            .json(createApiResponse(null, ["Internal Server Error"]));
        }
    }

    return res.status(400).json(createApiResponse(null, ["Bad Request"]));
}
