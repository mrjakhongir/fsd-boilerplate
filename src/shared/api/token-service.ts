const PERSIST_KEY = "access_token";
const SHOULD_PERSIST = import.meta.env.VITE_PERSIST_ACCESS_TOKEN === "true";

let accessToken: string | null = null;

export const tokenService = {
  getToken(): string | null {
    if (accessToken) return accessToken;
    if (SHOULD_PERSIST) {
      try {
        const stored = localStorage.getItem(PERSIST_KEY);
        if (stored) {
          accessToken = stored;
          return accessToken;
        }
      } catch {
        // ignore
      }
    }
    return null;
  },

  setToken(token: string | null) {
    accessToken = token;
    if (SHOULD_PERSIST) {
      try {
        if (token) localStorage.setItem(PERSIST_KEY, token);
        else localStorage.removeItem(PERSIST_KEY);
      } catch {
        // ignore
      }
    }
  },

  clear() {
    accessToken = null;
    if (SHOULD_PERSIST) {
      try {
        localStorage.removeItem(PERSIST_KEY);
      } catch {
        // ignore
      }
    }
  },
};
