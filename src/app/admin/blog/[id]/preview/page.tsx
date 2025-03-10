import CustomMDX from "@/components/mdx/RenderMDX";
import dbConnect from "@/lib/dbConnect";
import { type HydratedDocument } from "mongoose";
import BlogPost from "@/models/BlogPost";
import { type PublishedBlogPostDisplay } from "@/types/blogpost";
import { serverParamSchema } from "@/utils/server/validation";
import BlogArticle from "@/features/Public/Blog/BlogArticle";
import { readingTime } from "reading-time-estimator";

type PreviewBlogPageProps = {
  params: Promise<{
    id: string;
  }>;
};


async function getBlogPost(id: string) {

  try {
    await dbConnect();

    const parsedId = serverParamSchema.parse(id);

    const foundPost = await BlogPost.findOne<HydratedDocument<PublishedBlogPostDisplay>>({
      _id: parsedId,
    }).populate("tags");
    
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

export default async function PreviewBlogPage(props: PreviewBlogPageProps) {
  const params = await props.params;
  const { id } = params;
  const currentPost = await getBlogPost(id);
  if (!currentPost) {
    return <>Project not found</>;
  }

  const estimatedReadingTime = readingTime(currentPost.mdxContent)

  return (
    <BlogArticle post={currentPost} estimatedReadingTime={estimatedReadingTime.text} mdxContent={<CustomMDX source={currentPost.mdxContent} /> } />
  );
}
