import { UsersListWidget } from "@/widgets/users-list/ui/users-list-widget";
import { Container, Flex } from "@chakra-ui/react";

const UsersPage = () => {
  return (
    <Flex>
      <Container
        py="5"
        fontFamily="heading"
        color="primary.500"
        bg="bg.success"
      >
        <UsersListWidget />
      </Container>
    </Flex>
  );
};

export default UsersPage;
