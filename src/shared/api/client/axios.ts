import axios from "axios";
import { applyAuthInterceptor } from "../interceptors/auth-interceptors";
import { applyErrorInterceptor } from "../interceptors/error-interceptors";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

applyAuthInterceptor(apiClient);
applyErrorInterceptor(apiClient);
