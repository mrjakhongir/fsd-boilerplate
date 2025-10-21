import { routes } from "@/shared/config/routes";
import { Card, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import type { User } from "../mdel/types";

type props = {
  user: User;
};

const UserCard: React.FC<props> = ({ user }) => {
  return (
    <Card.Root h="full">
      <Link to={routes.user(user.id)}>
        <Card.Header>{user.username}</Card.Header>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <VStack align="start" fontSize="sm">
            <Text>{user.email}</Text>
            <Text>{user.phone}</Text>
          </VStack>
        </Card.Footer>
      </Link>
    </Card.Root>
  );
};

export default UserCard;
