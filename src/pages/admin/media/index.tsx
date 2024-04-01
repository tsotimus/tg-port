import AdminLayout from "@/components/layouts/AdminLayout";
import Stack from "@/components/layouts/Stack";
import Typography from "@/components/typography/Typography";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import Link from "next/link";

const MediaPage = () => {
  return (
    <AdminLayout>
      <Head>
        <title>Media</title>
      </Head>
      <Stack justify="center">
        <Typography variant="h1">Media</Typography>
        <Link href={"/admin/media/upload"}>
          <Button type="button">Upload</Button>
        </Link>
      </Stack>
    </AdminLayout>
  );
};

export default MediaPage;
