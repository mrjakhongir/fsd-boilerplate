// src/entities/product/api/product.mutations.ts
import { queryClient } from "@/shared/api";
import { productApi } from "./client";
import { productKeys } from "./query-keys";
import type { Product } from "./types";

export const createProductMutationOptions = {
  mutationFn: (data: Product) => productApi.create(data),
  onSuccess: () => invalidateProducts(),
};

export const updateProductMutationOptions = {
  mutationFn: ({ id, data }: { id: string; data: Product }) =>
    productApi.update(id, data),
  onSuccess: () => invalidateProducts(),
};

export const deleteProductMutationOptions = {
  mutationFn: (id: string) => productApi.delete(id),
  onSuccess: () => invalidateProducts(),
};

function invalidateProducts() {
  queryClient.invalidateQueries({ queryKey: productKeys.all });
}
