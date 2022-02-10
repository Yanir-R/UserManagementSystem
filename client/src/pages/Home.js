import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:3001/users");
    if (response.status === 200) {
      setData(response.data);
    }
  };
  console.log("data=>", data);

const onDeleteUser =async (id)=>{
    if(window.confirm('Are you sure you want to delete that user?')){
        const response = await axios.delete(`http://localhost:3001/user/${id}`)
        if(response.status === 200){
            toast.success(response.data)
            getUsers();
        }
    }
}

  return (
    <div style={{ marginTop: " 150px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>id</th>
            <th style={{ textAlign: "center" }}>name</th>
            <th style={{ textAlign: "center" }}>phone</th>
            <th style={{ textAlign: "center" }}>ip address</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.ipAddress}</td>
                  <Link to={`/update/${item.id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <Link to={`/view/${item.id}`}>
                    <button className="btn btn-view">View</button>
                  </Link>
                  <button className="btn btn-delete" onClick={()=> onDeleteUser(item.id)}>Delete</button>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
