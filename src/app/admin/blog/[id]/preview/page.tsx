import { Suspense } from "react";
import CustomMDX from "@/components/mdx/CustomMDX";
import dbConnect from "@/lib/dbConnect";
import { type HydratedDocument } from "mongoose";
import BlogPost from "@/models/BlogPost";
import { type PublishedBlogPostDisplay } from "@/types/blogpost";
import { serverParamSchema } from "@/utils/server/validation";
import BlogArticle from "@/features/Public/Blog/BlogArticle";

type PreviewBlogPageProps = {
  params: {
    id: string;
  };
};


async function getBlogPost(id: string) {

  try {
    await dbConnect();

    const parsedId = serverParamSchema.parse(id);

    const foundPost = await BlogPost.findOne<HydratedDocument<PublishedBlogPostDisplay>>({
      _id: parsedId,
    });
    console.log(foundPost)
    if (!foundPost) {
      return null;
    }
    const post = foundPost.toJSON();
    return post;
  } catch (err) {
    console.error(err);
    return null;
  }  
}

export default async function PreviewBlogPage({ params }: PreviewBlogPageProps) {
  const { id } = params;
  const currentPost = await getBlogPost(id);
  if (!currentPost) {
    return <>Project not found</>;
  }

  return (
    <Suspense fallback={<>Loading...</>}>
      <BlogArticle post={currentPost} mdxContent={<CustomMDX source={currentPost.mdxContent} />} />
    </Suspense>
  );
}
