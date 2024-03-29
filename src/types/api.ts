export type GenericApiResponse<T> = {
  data: T;
  errors: string[];
};
