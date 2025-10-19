export type ApiErrorShape = {
  message: string;
  status?: number;
  code?: string | number;
  details?: unknown;
  original?: unknown;
};
