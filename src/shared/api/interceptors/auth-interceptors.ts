import type { AxiosInstance } from "axios";

export const applyAuthInterceptor = (client: AxiosInstance): void => {
  client.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
};
