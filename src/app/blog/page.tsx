// File: app/blog/page.tsx

import Stack from "@/components/layouts/Stack";
import Typography from "@/components/Typography";
import FilteredPosts from "@/features/Public/Blog/FiltertedPosts";
import dbConnect from "@/lib/dbConnect";
import BlogPost from "@/models/BlogPost";
import { PublishedBlogPost } from "@/types/blogpost";
import { HydratedDocument } from "mongoose";
import { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
};

async function fetchAllBlogPosts() {
  await dbConnect();
  const posts = await BlogPost.find<HydratedDocument<PublishedBlogPost>>();
  return posts.map((post) => post.toJSON());
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
