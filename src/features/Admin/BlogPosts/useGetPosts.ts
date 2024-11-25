import { type Errors, type GenericApiResponse } from "@/types/api";
import { type ProjectDisplay } from "@/types/project";
import { fetcher } from "@/utils/client/genericFetchers";
import useSWR from "swr";

const useGetPosts = () => {
  const { data, isLoading, error } = useSWR<
    GenericApiResponse<ProjectDisplay[]>, Errors
  >("/api/admin/v1/blog", (key: string) => fetcher(key));

  return {
    allProjects: data?.data ?? [],
    isLoading,
    error,
  };
};

export default useGetPosts;
