import { type Errors, type GenericPaginatedApiResponse } from "@/types/api";
import { type ProjectDisplay } from "@/types/project";
import { fetcher } from "@/utils/client/genericFetchers";
import useSWRInfinite from "swr/infinite";

const useGetProjects = () => {

  const getKey = (pageIndex:number, previousPageData: GenericPaginatedApiResponse<ProjectDisplay>) => {
    if (previousPageData && !previousPageData.data.length) return null 
    if (pageIndex === 0) return "/api/admin/v1/projects?limit=5"
    return `/api/admin/v1/projects?limit=5&page=${previousPageData.meta.currentPage + 1}`                   
  }

  const { data, size, setSize, isLoading, error } = useSWRInfinite<GenericPaginatedApiResponse<ProjectDisplay>, Errors>(getKey, fetcher)

  
  
  console.log(size,data, data?.[size - 1])

  return {
    allProjects: data ? data.map(page => page.data) : [],
    currentPageData: data ? data[size - 1].data : [],
    meta: data ? data[size - 1].meta : undefined,
    isLoading,
    isError: error,
    setSize,
  };
};

export default useGetProjects;
