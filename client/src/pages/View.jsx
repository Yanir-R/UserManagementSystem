import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./View.css";

const View = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id]);

  const getSingleUser = async (id) => {
    const response = await axios.get(`http://127.0.0.1:3001/api/user/${id}`);
    if (response.status === 200) {
      setUser({ ...response.data });
    }
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Contact Detail</p>
        </div>
        <div className="container">
          <strong>ID:</strong>
          <span>{user && user.ID}</span>
          <br />
          <br />
          <strong>Name:</strong>
          <span>{user && user.Name}</span>
          <br />
          <br />
          <strong>Phone:</strong>
          <span>{user && user.Phone}</span>
          <br />
          <br />
          <strong>IP Address:</strong>
          <span>{user && user.IP}</span>
          <br />
          <br />
          <Link to={"/"}>
            <button className="btn btn-edit">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
