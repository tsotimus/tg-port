import { GenericPaginatedApiResponse } from "@/types/api"
import { TagDisplay } from "@/types/tag"
import { fetcher } from "@/utils/client/genericFetchers"
import useSWRInfinite from "swr/infinite"


export const useGetTagsInfinite = () => {
    const getKey = (pageIndex: number, previousPageData: GenericPaginatedApiResponse<TagDisplay>) => {
        if (previousPageData && !previousPageData.data) return null // reached the end
        if (pageIndex === 0) return "/api/public/tags/v1?limit=30" // first page
        return `/api/public/tags/v1?page=${previousPageData.meta.currentPage + 1}&limit=30` // add cursor for next pages
    }

    const { data, error, isLoading, isValidating, mutate, size, setSize } = useSWRInfinite<GenericPaginatedApiResponse<TagDisplay>>(getKey, fetcher)

    return {
        tags: data ? data.flatMap(page => page.data) : [],
        meta: data ? data[0].meta : undefined,
        isLoading,
        isError: error,
        isValidating,
        mutate,
        size,
        setSize
    }
}