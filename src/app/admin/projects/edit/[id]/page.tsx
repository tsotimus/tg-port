"use client";

import Stack from "@/components/layouts/Stack";
import { FullPageLoader } from "@/components/loaders/Loading";
import EditProject from "@/features/Admin/Projects/EditProject";
import useGetProject from "@/features/Admin/Projects/useGetProject";
import { routerQueryParse } from "@/utils/client/routerQuery";
import { useSearchParams } from "next/navigation";

const EditPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams?.get("id");

  const idValue = routerQueryParse(id);
  const { isSuccess, isPending, project, isError, error } = useGetProject({
    id: idValue,
  });

  return (
    <Stack className="p-12">
      {isSuccess && project && <EditProject project={project} />}
      {isPending && <FullPageLoader />}
      {isError && error && <div>Error loading project: {error.message}</div>}
    </Stack>
  );
};

export default EditPage;
