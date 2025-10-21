import { UsersListWidget } from "@/widgets/users-list/ui/users-list-widget";
import { Container, Flex } from "@chakra-ui/react";

const UsersPage = () => {
  return (
    <Flex>
      <Container py={5}>
        <UsersListWidget />
      </Container>
    </Flex>
  );
};

export default UsersPage;
