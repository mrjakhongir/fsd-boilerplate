// The routes file provides a centralized, type-safe way to define URL paths used throughout your app.

// This helps:

// Benefit	Example
// ✅ Avoid hardcoded strings	No more "/users/123" scattered everywhere
// ✅ Easier refactoring	Change /users/:id → /profiles/:id in ONE place
// ✅ Better DX with IntelliSense	Auto-completion when using ROUTES.USER("123")
// ✅ Shareable across React Router, TanStack Router, or even API redirects

export const ROUTES = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
  },
  USER: {
    LIST: "/users",
    PROFILE: "/users/profile",
    SETTINGS: "/users/settings",
  },
  PRODUCTS: {
    LIST: "/products",
    CREATE: "/products/create",
    DETAILS: (id: string | number) => `/products/${id}`,
    EDIT: (id: string | number) => `/products/${id}/edit`,
  },
};
