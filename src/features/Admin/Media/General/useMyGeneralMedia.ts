import { type Errors, type GenericApiResponse } from "@/types/api";
import { fetcher } from "@/utils/client/genericFetchers";
import useSWR from "swr";
import { type GetGeneralMediaResponse } from "../types";

const useMyGeneralMedia = () => {
  const { data, error, isLoading } = useSWR<
    GenericApiResponse<GetGeneralMediaResponse>, Errors
  >("/api/admin/v1/media", fetcher , {revalidateOnMount: true});

  return {
    data: data?.data.data ?? [],
    error,
    isLoading,
  };
};

export default useMyGeneralMedia;
