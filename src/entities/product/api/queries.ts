import { queryOptions } from "@tanstack/react-query";
import { productApi } from "./client";
import { productKeys } from "./query-keys";

export const getProductListQueryOptions = () =>
  queryOptions({
    queryKey: productKeys.list(),
    queryFn: () => productApi.list().then((res) => res.data),
  });

export const getProductDetailQueryOptions = (id: string) =>
  queryOptions({
    queryKey: productKeys.detail(id),
    queryFn: () => productApi.detail(id).then((res) => res.data),
    enabled: !!id,
  });
