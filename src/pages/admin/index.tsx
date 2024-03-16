import AdminLayout from "@/components/layouts/AdminLayout";
import Welcome from "@/features/Admin/Home/Welcome";

const HomeAdminPage = () => {
  return (
    <AdminLayout>
      <Welcome />
    </AdminLayout>
  );
};

export default HomeAdminPage;
