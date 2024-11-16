import Hero from "@/features/Public/Home/Hero";
import Showcase from "@/features/Public/Projects/Showcase";
import AboutMe from "@/features/Public/Home/AboutMe";
import RecentPosts from "@/features/Public/Blog/RecentPosts";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import BlogPost from "@/models/BlogPost";
import { type ProjectDisplay } from "@/types/project";
import { type PublishedBlogPostDisplay } from "@/types/blogpost";
import { type HydratedDocument } from "mongoose";

export const revalidate = 21600;

async function fetchFeaturedProjects() {
  await dbConnect();
  const projects = await Project.find<HydratedDocument<ProjectDisplay>>({
    featured: true,
  }).limit(2);
  return projects.map((project) => project.toJSON());
}

async function fetchRecentPosts() {
  await dbConnect();
  const posts = await BlogPost.find<HydratedDocument<PublishedBlogPostDisplay>>({
    published: true,
  })
    .limit(2)
    .populate("tags");
  return posts.map((post) => post.toJSON());
}

export default async function Home() {
  const featuredProjects = await fetchFeaturedProjects();
  const recentPosts = await fetchRecentPosts();

  return (
    <>
      <Hero />
      <Showcase featuredProjects={featuredProjects} />
      <AboutMe />
      <RecentPosts posts={recentPosts} />
    </>
  );
}
