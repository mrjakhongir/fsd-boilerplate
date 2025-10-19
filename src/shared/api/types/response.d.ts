export type ApiMeta = {
  page?: number;
  pageSize?: number;
  total?: number;
  [key: string]: unknown;
};

export type ApiResponse<T = unknown> = {
  data: T;
  meta?: ApiMeta;
};
