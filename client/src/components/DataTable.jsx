import React from "react";
import { Link } from "react-router-dom";
import "./DataTable.css";
const DataTable = ({ data, onDeleteUser }) => {
  return (
    <div style={{ marginTop: " 100px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>ID</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Phone</th>
            <th style={{ textAlign: "center" }}>IP Address</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        {data.length === 0 ? (
          <tbody>
            <tr>
              <td>No Data Found</td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {data.map((item, row) => (
              <tr key={row}>
                <>
                  <td>{item.ID}</td>
                  <td>{item.Name}</td>
                  <td>{item.IP}</td>
                  <td>{item.Phone}</td>
                  <td>
                    <Link to={`/update/${item._id}`}>
                      <button className="btn btn-edit">Edit</button>
                    </Link>
                    <Link to={`/view/${item._id}`}>
                      <button className="btn btn-view">View</button>
                    </Link>
                    <button
                      className="btn btn-delete"
                      onClick={() => onDeleteUser(item._id)}
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
};

export default DataTable;
