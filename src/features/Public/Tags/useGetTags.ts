import useSWR from "swr"

export const useGetTags = () => {
    const { data, error } = useSWR("/api/admin/v1/tags")
    return {
        tags: data,
        isLoading: !error && !data,
        isError: error,
    }
}