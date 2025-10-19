import type { AxiosError, AxiosInstance } from "axios";
import type { ApiError } from "../types/error";

export const applyErrorInterceptor = (client: AxiosInstance): void => {
  client.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ApiError>) => {
      return Promise.reject(error);
    }
  );
};
