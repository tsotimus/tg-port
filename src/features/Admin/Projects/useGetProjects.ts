import { GenericApiResponse } from "@/types/api";
import { Project } from "@/types/project";
import { fetcher } from "@/utils/client/genericFetchers";
import useSWR from "swr";

const useGetProjects = () => {
  const { data, isLoading, error } = useSWR<GenericApiResponse<Project[]>>(
    "/api/admin/v1/projects",
    (key: string) => fetcher(key)
  );

  return {
    allProjects: data?.data || [],
    isLoading,
    error,
  };
};

export default useGetProjects;
