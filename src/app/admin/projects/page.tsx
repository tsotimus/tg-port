import Stack from "@/components/layouts/Stack";
import Typography from "@/components/Typography";
import { Button } from "@/components/ui/button";
import MyProjects from "@/features/Admin/Projects/MyProjects";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Projects"
};

const MyProjectsPage = () => {
  return (
    <Stack justify="center" align="center" className="pt-6" gap={8}>
      <Typography variant="h1">My Projects</Typography>
      <Link href="/admin/projects/create">
        <Button type="button">Create new</Button>
      </Link>
      <MyProjects />
    </Stack>
  );
};

export default MyProjectsPage;
