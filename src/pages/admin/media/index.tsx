import AdminLayout from "@/components/layouts/AdminLayout";
import Stack from "@/components/layouts/Stack";
import Typography from "@/components/Typography";
import { Button } from "@/components/ui/button";
import AllMedia from "@/features/Admin/Media/AllMedia";
import Head from "next/head";
import Link from "next/link";

const MediaPage = () => {
  return (
    <AdminLayout>
      <Head>
        <title>Media</title>
      </Head>
      <Stack justify="center" className="p-5">
        <Stack direction="row" justify="between">
          <Typography variant="h1">Media</Typography>
          <Link href={"/admin/media/upload"}>
            <Button type="button">New Upload</Button>
          </Link>
        </Stack>
        <AllMedia />
      </Stack>
    </AdminLayout>
  );
};

export default MediaPage;
