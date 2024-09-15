import { GenericApiResponse } from "@/types/api";
import { ProjectContentDisplay } from "@/types/project";
import { fetcher } from "@/utils/client/genericFetchers";
import useSWR from "swr";

const useGetPosts = () => {
  const { data, isLoading, error } = useSWR<
    GenericApiResponse<ProjectContentDisplay[]>
  >("/api/admin/v1/blog", (key: string) => fetcher(key));

  return {
    allProjects: data?.data || [],
    isLoading,
    error,
  };
};

export default useGetPosts;
