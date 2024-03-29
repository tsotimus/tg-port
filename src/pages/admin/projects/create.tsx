import AdminLayout from "@/components/layouts/AdminLayout";
import Stack from "@/components/layouts/Stack";
import CreateProject from "@/features/Admin/Projects/CreateProject";
import Head from "next/head";

const CreateProjectPage = () => {
  return (
    <AdminLayout>
      <Head>
        <title>Create Project</title>
      </Head>
      <Stack className="p-12">
        <CreateProject />
      </Stack>
    </AdminLayout>
  );
};

export default CreateProjectPage;
