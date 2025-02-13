import { type Errors, type GenericApiResponse } from "@/types/api";
import { fetcher } from "@/utils/client/genericFetchers";
import useSWR from "swr";
import { GetDownloadsMedia } from "../types";
// import { type GetMediaResponse } from "../types";

const useMyDownloadsMedia = () => {
  const { data, error, isLoading } = useSWR<
    GenericApiResponse<GetDownloadsMedia>, Errors
  >("/api/admin/v1/downloads?limit=50", fetcher , {revalidateOnMount: true});


  return {
    data: data?.data.files ?? [],
    error,
    isLoading,
  };
};

export default useMyDownloadsMedia;
