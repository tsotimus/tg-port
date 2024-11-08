export type GenericApiResponse<T> = {
  data: T;
  errors: string[];
};

export type GenericErrorResponse = {
  message: string;
};


export type GenericPaginatedApiResponse<T> = {
  data: T[];
  meta: {
    totalCount: number;
    totalPages: number;
    currentPage: number;
    pageSize: number;
  };
  errors: string[];
};