import { apiClient } from "./api-client";

export class BaseApi<TData, TCreate, TUpdate> {
  protected basePath: string;
  constructor(basePath: string) {
    this.basePath = basePath;
  }

  list(params?: unknown) {
    return apiClient.get<TData[]>(this.basePath, { params });
  }

  detail(id: string) {
    return apiClient.get<TData>(`${this.basePath}/${id}`);
  }

  create(data: TCreate) {
    return apiClient.post<TData>(this.basePath, data);
  }

  update(id: string, data: TUpdate) {
    return apiClient.put<TData>(`${this.basePath}/${id}`, data);
  }

  delete(id: string) {
    return apiClient.delete(`${this.basePath}/${id}`);
  }
}
