import { fetcher } from "@/utils/client/genericFetchers";
import useSWR from "swr";

const useGetProjects = () => {
  const { data, isLoading, error } = useSWR("/api/admin/v1/projects", (key) =>
    fetcher(key)
  );

  return {
    allProjects: data,
    isLoading,
    error,
  };
};

export default useGetProjects;
