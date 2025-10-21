import { BaseApi } from "@/shared/api/base-api";
import type { User } from "../mdel/types";

class UsersApi extends BaseApi<User> {
  constructor() {
    super("/users");
  }

  listPaginated(page = 1, limit = 10, search = "") {
    const params = {
      _page: page,
      _limit: limit,
      q: search || undefined,
    };
    return this.list(params);
  }
}

export const usersApi = new UsersApi();
