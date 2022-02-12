import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import DataTable from "../components/DataTable";


const Home = () => {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    getUsers(setData);
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://127.0.0.1:3001/api/users");
    if (response.status === 200) {
      setData(response.data);
      //   console.log("data=>", response)
    }
  };

  const onDeleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete that user?")) {
      const response = await axios.delete(`http://127.0.0.1:3001/api/user/${id}`);
      if (response.status === 200) {
        toast.success(response.data);
        getUsers();
      }
    }
  };

 const searchUsers = (rows) =>{
    return rows.filter((rows) =>{
        let splitted = rows.Name.toLowerCase().split(" ");
        let searchable = splitted.length > 1 ? splitted[1] : '';
        return searchable.indexOf(q.toString().toLowerCase())> -1
    })
  }

  return (
    <>
      <div style={{  display: "inline-block"}}>
        <input type="text" name="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name"  />
      </div>
      <DataTable data={searchUsers(data)} onDeleteUser={onDeleteUser} />
    </>
  );
};

export default Home;
