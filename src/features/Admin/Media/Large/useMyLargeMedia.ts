import { type Errors, type GenericApiResponse } from "@/types/api";
import { fetcher } from "@/utils/client/genericFetchers";
import useSWR from "swr";
import { type ListBlobResultBlob } from "@vercel/blob";

const useMyLargeMedia = () => {
  const { data, error, isLoading } = useSWR<
    GenericApiResponse<ListBlobResultBlob[]>, Errors
  >("/api/admin/v1/large-media?limit=50", fetcher , {revalidateOnMount: true});

  return {
    data: data?.data ?? [],
    error,
    isLoading,
  };
};

export default useMyLargeMedia;
