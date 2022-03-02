import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/add") {
      setActiveTab("addUser");
    } else if (location.pathname === "/about") {
      setActiveTab("About");
    }
  }, [location]);

  return (
    <div className="header">
      <p className="logo">Management System</p>
      <div className="header-right">
        <Link to={"/"}>
          <p
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </p>
        </Link>
        <Link to={"/add"}>
          <p
            className={`${activeTab === "addUser" ? "active" : ""}`}
            onClick={() => setActiveTab("addUser")}
          >
            Add User
          </p>
        </Link>
        <Link to={"/about"}>
          <p
            className={`${activeTab === "About" ? "active" : ""}`}
            onClick={() => setActiveTab("About")}
          >
            About
          </p>
        </Link>
      </div>
    </div>
  );
};
