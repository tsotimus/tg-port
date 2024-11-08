import { type GenericApiResponse } from "@/types/api";
import { fetcher } from "@/utils/client/genericFetchers";
import useSWR from "swr";
import { type GetMediaResponse } from "./types";

const useMyMedia = () => {
  const { data, error, isLoading } = useSWR<
    GenericApiResponse<GetMediaResponse>
  >("/api/admin/v1/media", fetcher);

  return {
    data: data?.data.data || [],
    error,
    isLoading,
  };
};

export default useMyMedia;
