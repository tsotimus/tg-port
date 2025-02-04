import { type NextApiRequest, type NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import { createApiResponse, formatZodErrors } from "@/utils/server/createApiResponse";
import BlogPost from "@/models/BlogPost";
import { CreateBlogPostSchema } from "@/types/blogpost";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const validatedData = CreateBlogPostSchema.safeParse(req.body);

      if(!validatedData.success){
        return res.status(400).json(createApiResponse(null, formatZodErrors(validatedData.error.errors)));
      }

      await dbConnect();

      if(validatedData.data.status === "PUBLISHED"){
        // We should add the publishedAt date if the status is PUBLISHED
        const structuredData = {
          ...validatedData.data,
          publishedAt: new Date()
        }
        const newPost= await BlogPost.create(structuredData);
        const savedPost = await newPost.save();
        const formattedPost = savedPost.toJSON();
        return res.status(201).json(createApiResponse(formattedPost, []));
      } else {
        const newPost= await BlogPost.create(validatedData.data);
        const savedPost = await newPost.save();
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
  if (req.method === "GET") {
    try {
      await dbConnect();
      const posts = await BlogPost.find();
      return res.status(200).json(createApiResponse(posts, []));
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json(createApiResponse(null, ["Internal Server Error"]));
    }
  }

  return res.status(400).json(createApiResponse(null, ["Bad Request"]));
}
