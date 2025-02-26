import { type Errors, type GenericApiResponse } from "@/types/api";
import { type TagDisplay } from "@/types/tag";
import { fetcher } from "@/utils/client/genericFetchers";
import useSWR from "swr";

//Not in use
const useGetTechTags = () => {
    const { data, isLoading, error } = useSWR<
    GenericApiResponse<TagDisplay[]>, Errors
  >("/api/admin/v1/tags?techOnly=true", (key: string) => fetcher(key));

  const tagOptions = data?.data.map(item => ({value: item.id, label: item.name})) ?? []
  return {
    tags: data?.data ?? [],
    tagOptions,
    isLoading,
    error,
  };
}

export default useGetTechTags;