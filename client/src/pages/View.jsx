import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./View.css";
import ViewIpdetails from "../components/ViewIpDetails";

const View = () => {
  const [user, setUser] = useState(null);
  const [ipDetails, setIpDetails] = useState([]);

  const { id } = useParams();
  const userIP = user?.IP;

  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id]);

  useEffect(() => {
    if (userIP) {
      getIpDetailsOfUser(userIP);
    }
  }, [userIP]);

  const getSingleUser = async (id) => {
    const response = await axios.get(`http://127.0.0.1:3001/api/user/${id}`);
    if (response.status === 200) {
      setUser({ ...response.data });
    }
  };
  const getIpDetailsOfUser = async () => {
    const response = await axios.get(
      `http://127.0.0.1:3001/api/userip/${userIP}`
    );
    if (response.status === 200) {
      console.log("ip data:", response.data);
      setIpDetails(response.data);
    }
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Contact Detail</p>
        </div>
        <div className="container">
          <strong>ID: </strong>
          <span>{user?.ID}</span>
          <br />
          <br />
          <strong>Name: </strong>
          <span>{user?.Name}</span>
          <br />
          <br />
          <strong>Phone: </strong>
          <span>{user?.Phone}</span>
          <br />
          <br />
          <strong>IP Address: </strong>
          <span>{user?.IP}</span>
          <ViewIpdetails
            country={ipDetails.country}
            city={ipDetails.city}
            timezone={ipDetails.timezone}
          />
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
