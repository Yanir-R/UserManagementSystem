import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./AddEdit.css";
import { toast } from "react-toastify";

const initialState = {
  ID: "",
  Name: "",
  IP: "",
  Phone: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);

  const { ID, Name, IP, Phone } = state;
  console.log(state)

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
     if (id) {
    getSingleUser(id);
  }
  }, [id]);

  const getSingleUser = async (id) => {
    const response = await axios.get(`http://127.0.0.1:3001/api/user/${id}`);
    if (response.status === 200) {
      setState({ ...response.data });
    }
  };
 

  const addUser = async (data) => {
    const response = await axios.post("http://127.0.0.1:3001/api/users", data);
    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const updateUser = async (data, id) => {
    console.log(id)
    const response = await axios.put(

      `http://127.0.0.1:3001/api/user/${id}`,
      data
    );
    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ID || !Name || !IP || !Phone) {
      toast.error("Please provide values all fields are mandatory");
    } else {
      if (!id) {
        addUser(state);
      } else {
        updateUser(state, id);
      }
      setTimeout(() => navigate("/"), 500);
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    console.log(name, value)
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          display: "table",
          margin: "auto",
          padding: "15px",
          maxwidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="string"
          id="Name"
          name="Name"
          placeholder="Enter First Name..."
          onChange={handleInputChange}
          value={Name}
        />
        <label htmlFor="name">ID</label>
        <input
          type="string"
          id="ID"
          name="ID"
          placeholder="Enter Last Name..."
          onChange={handleInputChange}
          value={ID}
        />
        <label htmlFor="phone">IP Address</label>
        <input
          type="string"
          id="IP"
          name="IP"
          placeholder="Enter IP Address..."
          onChange={handleInputChange}
          value={IP}
        />
        <label htmlFor="ipAddress">Phone</label>
        <input
          type="string"
          id="Phone"
          name="Phone"
          placeholder="Enter Ip Address..."
          value={Phone}
          onChange={handleInputChange}
        />

        <input type="submit" value={id ? "Update" : "Add"} />
      </form>
    </div>
  );
};

export default AddEdit;
