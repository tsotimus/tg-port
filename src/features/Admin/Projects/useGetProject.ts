import { GenericApiResponse } from "@/types/api";
import { Project } from "@/types/project";
import { fetcher } from "@/utils/client/genericFetchers";
import useSWR from "swr";

interface UseGetProject {
  id: string | undefined;
}

const useGetProject = ({ id }: UseGetProject) => {
  const { data, isLoading, error } = useSWR<GenericApiResponse<Project>>(
    id ? `/api/admin/v1/projects/${id}` : null,
    (key: string) => fetcher(key)
  );

  if (error) {
    return { project: null, isLoading: false, error };
  }

  return {
    project: data?.data || null,
    isLoading,
    error,
  };
};

export default useGetProject;
