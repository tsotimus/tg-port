import { GenericPaginatedApiResponse, type Errors, type GenericApiResponse } from "@/types/api";
import { type TagDisplay } from "@/types/tag";
import { fetcher } from "@/utils/client/genericFetchers";
import useSWR from "swr";

type UseGetTechTagsProps = {
    page: number;
    limit: number;
    fallbackData?: GenericPaginatedApiResponse<TagDisplay>
}
const useGetTechTags = ({page, limit, fallbackData}:UseGetTechTagsProps) => {
    const { data, isLoading, error } = useSWR<
    GenericPaginatedApiResponse<TagDisplay>, Errors
  >(`/api/public/tags/v1?limit=${limit}&page=${page}`, (key: string) => fetcher(key), {
    fallbackData,
    revalidateOnFocus: false,
    revalidateOnMount: false,
    revalidateIfStale: false 
  });


  const tagOptions = data?.data.map(item => ({value: item.id, label: item.name})) ?? []
  return {
    tags: data?.data ?? [],
    tagOptions,
    isLoading,
    error,
  };
}

export default useGetTechTags;