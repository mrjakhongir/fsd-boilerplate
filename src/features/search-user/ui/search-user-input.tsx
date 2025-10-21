import { useSearchUserStore } from "@/shared/store/search-user-store";
import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const SearchUserInput = () => {
  const { searchUser, setSearchUser } = useSearchUserStore();
  const [value, setValue] = useState(searchUser);

  const [debouncedSearch] = useDebounce(value, 400);

  useEffect(() => {
    setSearchUser(debouncedSearch);
  }, [debouncedSearch, setSearchUser]);

  return (
    <div>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search..."
        bg="#fff"
        rounded="md"
      />
    </div>
  );
};

export default SearchUserInput;
