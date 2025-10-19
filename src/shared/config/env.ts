const getEnv = (key: string, fallback?: string): string => {
  const value = import.meta.env[key];
  if (!value && fallback === undefined) {
    throw new Error(`Missing env variable: ${key}`);
  }
  return value ?? fallback!;
};

export const ENV = {
  MODE: getEnv("VITE_APP_MODE", "development"),
  API_URL: getEnv("VITE_API_URL"),
  WS_URL: getEnv("VITE_WS_URL", ""),
  ENABLE_ANALYTICS: getEnv("VITE_ENABLE_ANALYTICS", "false") === "true",
} as const;
