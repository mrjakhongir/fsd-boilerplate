import { queryClient } from "@/shared/api";
import customTheme from "@/shared/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { AppRouter } from "../routers/app-router";

export const Providers = () => {
  return (
    <ChakraProvider value={customTheme}>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </ChakraProvider>
  );
};
