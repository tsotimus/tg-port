
import Stack from "@/components/layouts/Stack";
import dbConnect from "@/lib/dbConnect";
import BlogPost from "@/models/BlogPost";
import { ProjectDisplay } from "@/types/project";
import { serverParamSchema } from "@/utils/server/validation";
import { HydratedDocument } from "mongoose";

async function getBlogPost(id: string | null | undefined) {
  if (!id) {
    return null;
  }
  try {
    const parsedId = serverParamSchema.parse(id);
    
    await dbConnect();

    const foundPost = await BlogPost.findOne<HydratedDocument<ProjectDisplay>>({
      _id: parsedId,
    });

    if (!foundPost) {
      return null;
    }
    
    const blogPost = foundPost.toJSON();
    return blogPost;
  } catch (err) {
    return null;
  }
}


export default async function EditBlogPost({ params }: { params: { id: string } }) {

  const post = await getBlogPost(params.id);

  if (!post) {
    return <>Blog Post not found</>;
  }


  return (
    <Stack justify="center" align="center" className="pt-6" gap={8}>
      <>Hello this is editing</>
    </Stack>
  );
};

