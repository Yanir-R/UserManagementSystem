import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { UsersContext } from "../store/UsersStore";

export const Search: React.FC = observer(() => {
  const usersStore = useContext(UsersContext);

  return (
    
    <div style={{ display: "grid", justifyContent: "center" }}>
      <input
        type="text"
        name="search"
        value={usersStore.query}
        onChange={(e) => usersStore.setQuery(e.target.value)}
        placeholder="Search by Surname"
        title="INFO - Search work ONLY for Surname"
      />
    </div>
  );
});
