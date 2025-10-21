import { useQuery } from "@tanstack/react-query";
import { usersApi } from "./client";
import { userKeys } from "./query-keys";

export const useUsersQuery = (page: number, search: string) => {
  return useQuery({
    queryKey: userKeys.list({ page, search }),
    queryFn: () =>
      usersApi.listPaginated(page, 10, search).then((res) => res.data),
  });
};
