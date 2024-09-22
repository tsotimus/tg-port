import AdminLayout from "@/components/layouts/AdminLayout";
import Stack from "@/components/layouts/Stack";
import Head from "next/head";

const EditBlogPost = () => {
  return (
    <AdminLayout>
      <Head>
        <title>My Blog</title>
      </Head>
      <Stack justify="center" align="center" className="pt-6" gap={8}>
        <></>
      </Stack>
    </AdminLayout>
  );
};

export default EditBlogPost;
