import React, { useState, useEffect } from "react";

import { DataTable } from "../components/DataTable";
import { useUsers } from "../store/UsersStore";
import { observer } from "mobx-react-lite";
const Home = observer(() => {
  const [q, setQ] = useState("");
  const userStore = useUsers();

  useEffect(() => {
    userStore.fetchUsers();
  }, [userStore]);

  // const onDeleteUser = async (id) => {
  //   if (window.confirm("Are you sure you want to delete that user?")) {
  //     const response = await axios.delete(
  //       `http://127.0.0.1:3001/api/user/${id}`
  //     );
  //     if (response.status === 200) {
  //       toast.success(response.data);
  //       getUsers();
  //     }
  //   }
  // };

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
      <DataTable userStore={searchUsers(userStore.users)} />
    </>
  );
});

export { Home };
