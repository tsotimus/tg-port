import MainLayout from "@/components/layouts/MainLayout";
import Hero from "@/features/Public/Home/Hero";
import Showcase from "@/features/Public/Projects/Showcase";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import Head from "next/head";
import { ProjectContentDisplay } from "@/types/project";
import { HydratedDocument } from "mongoose";
import BlogPost from "@/models/BlogPost";
import { PublishedBlogPost } from "@/types/blogpost";
import RecentPosts from "@/features/Public/Blog/RecentPosts";
import AboutMe from "@/features/Public/Home/AboutMe";

interface HomeProps {
  featuredProjects: ProjectContentDisplay[];
  recentPosts: PublishedBlogPost[];
}

export default function Home({ featuredProjects, recentPosts }: HomeProps) {
  return (
    <MainLayout>
      <Head>
        <title>Home</title>
      </Head>
      <Hero />
      <Showcase featuredProjects={featuredProjects} />
      <AboutMe />
      <RecentPosts posts={recentPosts} />
    </MainLayout>
  );
}

export async function getStaticProps() {
  await dbConnect();
  const projects = await Project.find<HydratedDocument<ProjectContentDisplay>>({
    featured: true,
  }).limit(2);
  const featuredProjects = projects.map((project) => project.toJSON());

  const posts = await BlogPost.find<HydratedDocument<PublishedBlogPost>>({
    published: true,
  })
    .limit(2)
    .populate("tags");

  const recentPosts = posts.map((post) => post.toJSON());

  return {
    props: {
      featuredProjects: featuredProjects,
      recentPosts: recentPosts,
    },
  };
}
