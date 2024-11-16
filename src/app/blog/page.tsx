import Stack from "@/components/layouts/Stack";
import Typography from "@/components/Typography";
import FilteredPosts from "@/features/Public/Blog/FiltertedPosts";
import dbConnect from "@/lib/dbConnect";
import BlogPost from "@/models/BlogPost";
import { type PublishedBlogPostDisplay } from "@/types/blogpost";
import { type HydratedDocument } from "mongoose";
import { type Metadata } from "next";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Blog",
};

//TODO: Implement Schema population for tags in a Blogpost

async function fetchAllBlogPosts() {
  await dbConnect();
  const posts = await BlogPost.find<HydratedDocument<PublishedBlogPostDisplay>>({status: "PUBLISHED"}).populate("tags")
  const allPosts = posts.map((post) => post.toJSON());
  return allPosts
}

export default async function AllBlogPostsPage() {
  const allBlogPosts = await fetchAllBlogPosts();

  return (
    <Stack gap={4}>
      <Typography variant="h1">All Blog Posts</Typography>
      <FilteredPosts posts={allBlogPosts} />
    </Stack>
  );
}
