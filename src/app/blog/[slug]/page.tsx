import { Suspense } from "react";
import CustomMDX from "@/components/mdx/CustomMDX";
import dbConnect from "@/lib/dbConnect";
import { type HydratedDocument } from "mongoose";
import BlogPost from "@/models/BlogPost";
import { type PublishedBlogPostDisplay } from "@/types/blogpost";
import { serverParamSchema } from "@/utils/server/validation";
import BlogArticle from "@/features/Public/Blog/BlogArticle";
import { readingTime } from 'reading-time-estimator'

type BlogPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  await dbConnect();
  const allPosts = await BlogPost.find<HydratedDocument<PublishedBlogPostDisplay>>({
    status: "PUBLISHED",
  });

  return allPosts.map((post) => ({
    slug: post.slug,
    title: post.title,
  }));
}

async function getBlogPost(slug: string) {

  try {
    await dbConnect();

    const parsedSlug = serverParamSchema.parse(slug);

    const foundPost = await BlogPost.findOne<HydratedDocument<PublishedBlogPostDisplay>>({
      slug: parsedSlug,
    });
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

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = params;
  const currentPost = await getBlogPost(slug);
  if (!currentPost) {
    return <>Project not found</>;
  }

  const estimatedReadingTime = readingTime(currentPost.mdxContent)
  console.log(estimatedReadingTime)

  return (
    <Suspense fallback={<>Loading...</>}>
      <BlogArticle post={currentPost} mdxContent={<CustomMDX source={currentPost.mdxContent} />} estimatedReadingTime={estimatedReadingTime.text} />
    </Suspense>
  );
}
