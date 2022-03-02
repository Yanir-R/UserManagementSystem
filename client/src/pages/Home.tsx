import { useContext, useState } from "react";
import { DataTable } from "../components/DataTable";
import { observer } from "mobx-react-lite";
import { UsersContext } from "../store/UsersStore";

export const Home: React.FC = observer(() => {
  const [q, setQ] = useState("");

  const usersStore = useContext(UsersContext);

  const searchUsers = (rows) => {
    return rows.filter((rows) => {
      let splitted = rows.Name.toLowerCase().split(" ");
      let searchable = splitted.length > 1 ? splitted[1] : "";
      return searchable.indexOf(q.toString().toLowerCase()) > -1;
    });
  };

  return (
    <>
      <div style={{ display: "grid", justifyContent: "center" }}>
        <input
          type="text"
          name="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by Surname"
          title="INFO - Search work ONLY for Surname"
        />
      </div>
      <DataTable
        usersStore={searchUsers(usersStore.users)}
        onDeleteUser={usersStore.deleteUser}
      />
    </>
  );
});
