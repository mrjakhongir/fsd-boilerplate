import SearchUserInput from "@/features/search-user/ui/search-user-input";
import { Container, Flex, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <header style={{ backgroundColor: "#eee" }}>
      <Container>
        <Flex py={3} justifyContent="space-between" alignItems="center">
          <Text as="h2" fontWeight={600}>
            LOGO
          </Text>
          <SearchUserInput />
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
