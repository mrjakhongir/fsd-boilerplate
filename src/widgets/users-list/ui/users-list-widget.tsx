import { useUsersQuery } from "@/entities/user/api/queries";
import UserCard from "@/entities/user/ui/user-card";
import { useSearchUserStore } from "@/shared/store/search-user-store";
import { Center, For, Grid, GridItem, Loader, Text } from "@chakra-ui/react";

export const UsersListWidget = () => {
  const { searchUser } = useSearchUserStore();

  const {
    data: users = [],
    isLoading,
    isError,
    error,
  } = useUsersQuery(1, searchUser);

  if (isLoading)
    return (
      <Center py={10}>
        <Loader />
      </Center>
    );

  if (isError) return <div>{error.message}</div>;

  if (users.length === 0) {
    return (
      <Center py={10}>
        <Text>No users found</Text>
      </Center>
    );
  }

  return (
    <div className="grid gap-4">
      <Grid
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        gap={5}
        alignItems="stretch"
      >
        <For each={users}>
          {(user) => (
            <GridItem key={user.id}>
              <UserCard user={user} />
            </GridItem>
          )}
        </For>
      </Grid>
    </div>
  );
};
