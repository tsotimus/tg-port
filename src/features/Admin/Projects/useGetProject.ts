import useSWR from 'swr';
import { type GenericApiResponse } from "@/types/api";
import { type ProjectDisplay } from "@/types/project";
import { fetcher } from "@/utils/client/genericFetchers";

interface UseGetProject {
  id: string | undefined;
}

const useGetProject = ({ id }: UseGetProject) => {
  const { data, error } = useSWR<GenericApiResponse<ProjectDisplay>>(
    id ? `/api/admin/v1/projects/${id}` : null,
    fetcher
  );

  return {
    project: data?.data ?? undefined,
    isPending: !error && !data,
    isError: !!error,
    isSuccess: !!data,
    error,
  };
};

export default useGetProject;