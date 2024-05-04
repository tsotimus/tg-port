export type GenericApiResponse<T> = {
  data: T;
  errors: string[];
};

export type GenericErrorResponse = {
  message: string;
};
