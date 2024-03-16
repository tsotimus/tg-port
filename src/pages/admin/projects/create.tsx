import AdminLayout from "@/components/layouts/AdminLayout";
import Stack from "@/components/layouts/Stack";
import CreateProject from "@/features/Admin/Projects/CreateProject";

const CreateProjectPage = () => {
  return (
    <AdminLayout>
      <Stack className="p-10">
        <CreateProject />
      </Stack>
    </AdminLayout>
  );
};

export default CreateProjectPage;
