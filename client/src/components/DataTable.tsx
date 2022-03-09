import { Link } from "react-router-dom";
import "./DataTable.css";
import { observer } from "mobx-react-lite";
import { UsersContext } from "../store/UsersStore";
import { useContext } from "react";

export const DataTable: React.FC = observer(() => {
  const usersStore = useContext(UsersContext);
  return (
    <div style={{ marginTop: " 100px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>ID</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Phone</th>
            <th style={{ textAlign: "center" }}>IP Address</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        {usersStore.searchUsers(usersStore.users).length === 0 ? (
          <tbody>
            <tr>
              <td>No Data Found</td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {usersStore.searchUsers(usersStore.users).map((user, row) => (
              <tr key={row}>
                <>
                  <td>{row + 1}</td>
                  <td>{user.ID}</td>
                  <td>{user.Name}</td>
                  <td>{user.Phone}</td>
                  <td>{user.IP}</td>
                  <td>
                    <Link to={`/update/${user._id}`}>
                      <button className="btn btn-edit">Edit</button>
                    </Link>
                    <Link to={`/view/${user._id}`}>
                      <button className="btn btn-view">View</button>
                    </Link>
                    <button
                      className="btn btn-delete"
                      onClick={() => usersStore.deleteUser(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
});
