import { GenericApiResponse } from "@/types/api";
import { ProjectDisplay } from "@/types/project";
import { fetcher } from "@/utils/client/genericFetchers";
import { useQuery } from "@tanstack/react-query";

interface UseGetProject {
  id: string | undefined;
}

const useGetProject = ({ id }: UseGetProject) => {
  const { data, isPending, isError, isSuccess, error } = useQuery<
    GenericApiResponse<ProjectDisplay>
  >({
    queryKey: ["project", id],
    queryFn: () => fetcher(`/api/admin/v1/projects/${id}`),
    enabled: !!id,
  });

  return {
    project: data?.data || undefined,
    isPending,
    isError,
    isSuccess,
    error,
  };
};

export default useGetProject;
