import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import "./View.css";
import { ViewIpDetails } from "../components/ViewIpDetails";
import { UserIpInfo, UsersContext } from "../store/UsersStore";
import { observer } from "mobx-react-lite";

export const View: React.FC = observer(() => {
  const usersStore = useContext(UsersContext);
  const [ipDetails, setIpDetails] = useState<UserIpInfo>();
  const user = usersStore.user;
  const { id } = useParams();
  const userIP = user?.IP;

  useEffect(() => {
    if (id) {
      usersStore.getSingle(id);
    }
  }, [id]);

  useEffect(() => {
    if (userIP) {
      usersStore.getSingleIpInformation(userIP).then(setIpDetails);
    }
  }, [userIP]);

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
          <ViewIpDetails
            country={ipDetails?.country}
            city={ipDetails?.city}
            timezone={ipDetails?.timezone}
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
});
