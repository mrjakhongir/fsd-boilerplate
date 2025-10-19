import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

type props = {
  children: React.ReactNode;
};

export const Providers: React.FC<props> = ({ children }) => {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
};
