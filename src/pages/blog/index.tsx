import MainLayout from "@/components/layouts/MainLayout";
import Stack from "@/components/layouts/Stack";
import Typography from "@/components/Typography";
import FilteredPosts from "@/features/Public/Blog/FiltertedPosts";
import dbConnect from "@/lib/dbConnect";
import BlogPost from "@/models/BlogPost";
import { PublishedBlogPost } from "@/types/blogpost";
import { HydratedDocument } from "mongoose";

interface AllBlogPostsPageProps {
  allBlogPosts: PublishedBlogPost[];
}

const AllBlogPostsPage = ({ allBlogPosts = [] }: AllBlogPostsPageProps) => {
  return (
    <MainLayout>
      <Stack gap={4}>
        <Typography variant="h1">All Blog Posts</Typography>
        <FilteredPosts posts={allBlogPosts} />
      </Stack>
    </MainLayout>
  );
};

export default AllBlogPostsPage;

export async function getStaticProps() {
  await dbConnect();
  const posts = await BlogPost.find<HydratedDocument<PublishedBlogPost>>();
  const allBlogPosts = posts.map((project) => project.toJSON());

  return {
    props: {
      allBlogPosts: allBlogPosts,
    },
  };
}
