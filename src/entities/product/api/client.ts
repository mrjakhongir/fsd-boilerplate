import { apiClient } from "@/shared/api";
import { BaseApi } from "@/shared/api/base-api";
import type { Product } from "./types";

export class ProductApi extends BaseApi<
  Product,
  Partial<Product>,
  Partial<Product>
> {
  constructor() {
    super("/products");
  }

  publish(id: string) {
    return apiClient.post(`/products/${id}/publish`);
  }
}

export const productApi = new ProductApi();
