import { GenericApiResponse } from "@/types/api";

export function createApiResponse<T>(
  data: T,
  errors: string[] = []
): GenericApiResponse<T> {
  return { data, errors };
}
