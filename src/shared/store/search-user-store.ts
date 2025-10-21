import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SearchState {
  searchUser: string;
  setSearchUser: (value: string) => void;
}

export const useSearchUserStore = create<SearchState>()(
  persist(
    (set) => ({
      searchUser: "",
      setSearchUser: (value) => set({ searchUser: value }),
    }),
    {
      name: "search-user-storage",
    }
  )
);
