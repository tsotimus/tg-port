import AdminLayout from "@/components/layouts/AdminLayout";
import Stack from "@/components/layouts/Stack";
import Typography from "@/components/typography/Typography";
import { Button } from "@/components/ui/button";
import MyProjects from "@/features/Admin/Projects/MyProjects";
import Head from "next/head";
import Link from "next/link";

const MyProjectsPage = () => {
  return (
    <AdminLayout>
      <Head>
        <title>My Projects</title>
      </Head>
      <Stack justify="center" align="center" className="pt-6" gap={8}>
        <Typography variant="h1">My Projects</Typography>
        <Link href="/admin/projects/create">
          <Button type="button">Create new</Button>
        </Link>
        <MyProjects />
      </Stack>
    </AdminLayout>
  );
};

export default MyProjectsPage;
