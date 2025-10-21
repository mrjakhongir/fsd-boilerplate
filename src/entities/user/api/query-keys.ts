export const userKeys = {
  all: ["users"] as const,
  lists: () => [...userKeys.all, "list"] as const,
  list: (params: { page: number; search: string }) =>
    [...userKeys.lists(), params] as const,
  detail: (id: number) => [...userKeys.all, id] as const,
};
