import { create } from "zustand";

type FavoriteState = {
  favorites: number[];
  toggleFavorite: (id: number) => void;
};

export const useFavoriteStore = create<FavoriteState>((set) => ({
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
  toggleFavorite: (id) =>
    set((state) => {
      const updated = state.favorites.includes(id)
        ? state.favorites.filter((fid) => fid !== id)
        : [...state.favorites, id];
      localStorage.setItem("favorites", JSON.stringify(updated));
      return { favorites: updated };
    }),
}));
