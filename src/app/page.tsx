import Hero from "@/features/Public/Home/Hero";
import Showcase from "@/features/Public/Projects/Showcase";
import AboutMe from "@/features/Public/Home/AboutMe";
import RecentPosts from "@/features/Public/Blog/RecentPosts";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import BlogPost from "@/models/BlogPost";
import { type ProjectDisplayWithTags } from "@/types/project";
import { type PublishedBlogPostDisplay } from "@/types/blogpost";
import { type HydratedDocument } from "mongoose";

export const revalidate = 60

async function fetchFeaturedProjects() {
  await dbConnect();
  const projects = await Project.find<HydratedDocument<ProjectDisplayWithTags>>({
    featured: true,
  }).limit(2).sort({projectDate: -1}).populate("techStack");

  const serialisedProjects = projects.map((project) => project.toJSON())
  return serialisedProjects
}

async function fetchRecentPosts() {
  await dbConnect();
  const posts = await BlogPost.find<HydratedDocument<PublishedBlogPostDisplay>>({
    status: "PUBLISHED",
  }).limit(2).sort({publishedAt: -1});


  const serialisedPosts = posts.map((post) => post.toJSON())
  return serialisedPosts;

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
