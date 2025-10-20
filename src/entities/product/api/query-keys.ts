export const productKeys = {
  all: ["products"],
  lists: () => [...productKeys.all, "list"],
  list: () => [...productKeys.lists()],
  details: () => [...productKeys.all, "detail"],
  detail: (id: string) => [...productKeys.details(), id],
};
