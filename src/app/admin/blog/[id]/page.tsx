
import EditBlogPost from "@/features/Admin/BlogPosts/EditBlogPost";
import dbConnect from "@/lib/dbConnect";
import BlogPost from "@/models/BlogPost";
import { type BlogPostDisplay } from "@/types/blogpost";
import { serverParamSchema } from "@/utils/server/validation";
import { type HydratedDocument } from "mongoose";

async function getBlogPost(id: string | null | undefined) {
  if (!id) {
    return null;
  }
  try {
    const parsedId = serverParamSchema.parse(id);
    
    await dbConnect();

    const foundPost = await BlogPost.findOne<HydratedDocument<BlogPostDisplay>>({
      _id: parsedId,
    }).populate("tags");

    if (!foundPost) {
      return null;
    }
    
    const blogPost = foundPost.toJSON() as BlogPostDisplay;
    return blogPost;
  } catch (err) {
    console.error(err);
    return null;
  }
}


export default async function EditBlogPostPage({ params }: { params: { id: string } }) {

  const post = await getBlogPost(params.id);

  if (!post) {
    return <>Blog Post not found</>;
  }


  return (
    <div className="w-full mt-10">
      <EditBlogPost id={params.id} post={post} />
    </div>
  );
};

