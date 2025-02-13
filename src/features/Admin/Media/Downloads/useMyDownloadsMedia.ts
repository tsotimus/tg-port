import { type Errors, type GenericApiResponse } from "@/types/api";
import { fetcher } from "@/utils/client/genericFetchers";
import useSWR from "swr";
// import { type GetMediaResponse } from "../types";

const useMyDownloadsMedia = () => {
  const { data, error, isLoading } = useSWR<
    GenericApiResponse<any>, Errors
  >("/api/admin/v1/downloads?limit=20", fetcher , {revalidateOnMount: true});

  console.log(data)

  return {
    data: data?.data?.data ?? [],
    error,
    isLoading,
  };
};

export default useMyDownloadsMedia;
