import AdminLayout from "@/components/layouts/AdminLayout";
import Stack from "@/components/layouts/Stack";
import Typography from "@/components/typography/Typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MyProjectsPage = () => {
  return (
    <AdminLayout>
      <Stack justify="center" align="center" className="pt-6" gap={8}>
        <Typography variant="h1">My Projects</Typography>
        <Link href="/admin/projects/create">
          <Button type="button">Create new</Button>
        </Link>
      </Stack>
    </AdminLayout>
  );
};

export default MyProjectsPage;
