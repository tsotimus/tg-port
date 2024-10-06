import Stack from "@/components/layouts/Stack";
import { Link } from "@/components/Link";
import Typography from "@/components/Typography";
import { Button } from "@/components/ui/button";
import MyBlogPosts from "@/features/Admin/BlogPosts/MyBlogPosts";

const AllBlogsPage = () => {
  return (
    <Stack justify="center" align="center" className="pt-6" gap={8}>
      <Typography variant="h1">My Blog Posts</Typography>
      <Link href="/admin/blog/create">
        <Button type="button">Create new</Button>
      </Link>
      <MyBlogPosts />
    </Stack>
  );
};

export default AllBlogsPage;
