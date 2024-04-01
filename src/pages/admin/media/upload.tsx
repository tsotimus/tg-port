import AdminLayout from "@/components/layouts/AdminLayout";
import Stack from "@/components/layouts/Stack";
import Typography from "@/components/typography/Typography";
import UploadMediaForm from "@/features/Admin/Media/UploadMediaForm";
import Head from "next/head";

const UploadMediaPage = () => {
  return (
    <AdminLayout>
      <Head>
        <title>Upload Media</title>
      </Head>
      <Stack gap={12}>
        <Typography variant="h1" className="text-center">
          Upload Media
        </Typography>
        <UploadMediaForm />
      </Stack>
    </AdminLayout>
  );
};

export default UploadMediaPage;
