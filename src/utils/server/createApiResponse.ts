import { type GenericApiResponse } from "@/types/api";

export function createApiResponse<T>(
  data: T,
  errors: string[] = []
): GenericApiResponse<T> {
  return { data, errors };
}


export function createPaginatedApiResponse<T>(
  data: T[],
  meta: {
    totalCount: number;
    totalPages: number;
    currentPage: number;
    pageSize: number;
  },
  errors: string[] = []
) {
  return { data, meta, errors };
}