import { type GenericApiResponse } from "@/types/api";
import { type ZodIssue } from "zod";

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

export const formatZodErrors = (errors: ZodIssue[]) => {
  const errorMessages = errors.map(err => `${err.path.join('.')} - ${err.message}`);
  return errorMessages;
}