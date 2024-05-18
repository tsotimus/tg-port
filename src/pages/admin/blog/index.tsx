import AdminLayout from "@/components/layouts/AdminLayout";
import Stack from "@/components/layouts/Stack";
import Head from "next/head";

const AllBlogsPage = () => {
  return (
    <AdminLayout>
      <Head>
        <title>My Blog</title>
      </Head>
      <Stack className="p-12">
        <div>Table here</div>
      </Stack>
    </AdminLayout>
  );
};

export default AllBlogsPage;
