import Stack from "@/components/layouts/Stack";
import Typography from "@/components/Typography";
import MainDescription from "@/features/About/MainDescription";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
};

export default async function AllBlogPostsPage() {
  return (
    <Stack gap={4}>
      <Typography variant="h1">About Me</Typography>
      <MainDescription />
    </Stack>
  );
}
