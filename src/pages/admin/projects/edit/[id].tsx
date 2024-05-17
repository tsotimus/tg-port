import AdminLayout from "@/components/layouts/AdminLayout";
import Stack from "@/components/layouts/Stack";
import { FullPageLoader } from "@/components/loaders/Loading";
import EditProject from "@/features/Admin/Projects/EditProject";
import useGetProject from "@/features/Admin/Projects/useGetProject";
import { Project } from "@/types/project";
import { routerQueryParse } from "@/utils/client/routerQuery";
import Head from "next/head";
import { useRouter } from "next/router";

const EditPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const idValue = routerQueryParse(id);
  const { isLoading, project, error } = useGetProject({ id: idValue });

  return (
    <AdminLayout>
      <Head>
        <title>Create Project</title>
      </Head>
      <Stack className="p-12">
        {isLoading ? (
          <FullPageLoader />
        ) : error ? (
          <div>Error loading project: {error.message}</div>
        ) : (
          <EditProject project={project as Project} />
        )}
      </Stack>
    </AdminLayout>
  );
};

export default EditPage;
