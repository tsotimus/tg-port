import { type Errors, type GenericPaginatedApiResponse } from "@/types/api";
import { type ProjectDisplay } from "@/types/project";
import { fetcher } from "@/utils/client/genericFetchers";
import useSWR from "swr";

type UseGetProjectsProps = {
  page?: number;
  limit?: number;
  fallbackData?: GenericPaginatedApiResponse<ProjectDisplay>;
}

const useGetProjects = ({ page = 1, limit = 5, fallbackData }: UseGetProjectsProps = {}) => {
  const { data, isLoading, error } = useSWR<
    GenericPaginatedApiResponse<ProjectDisplay>,
    Errors
  >(`/api/admin/v1/projects?limit=${limit}&page=${page}`, fetcher, {
    fallbackData,
    revalidateOnFocus: true,
    revalidateOnMount: true,
    revalidateIfStale: true
  });

  return {
    projects: data?.data ?? [],
    meta: data?.meta,
    isLoading,
    isError: error,
  };
};

export default useGetProjects;
