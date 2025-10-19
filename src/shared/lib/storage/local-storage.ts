export const storage = {
  get: <T = unknown>(key: string): T | null => {
    try {
      const value = localStorage.getItem(key);
      return value ? (JSON.parse(value) as T) : null;
    } catch {
      return null;
    }
  },
  set: (key: string, value: unknown): void => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove: (key: string): void => {
    localStorage.removeItem(key);
  },
};
