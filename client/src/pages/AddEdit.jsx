import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./AddEdit.css";
import { toast } from "react-toastify";

const initialState = {
  id: "",
  firstName: "",
  lastName: "",
  phone: "",
  ipAddress: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);

  const { firstName, lastName, phone, ipAddress } = state;

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id]);

  const getSingleUser = async (id) => {
    const response = await axios.get(`http://localhost:3001/user/${id}`);
    if (response.status === 200) {
      setState({ ...response.data[0] });
    }
  };

  const addUser = async (data) => {
    const response = await axios.post("http://localhost:3001/user", data);
    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const updateUser = async (data, id) => {
    const response = await axios.put(`http://localhost:3001/user/${id}`, data);
    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !phone || !ipAddress) {
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
        <label htmlFor="name">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter First Name..."
          onChange={handleInputChange}
          value={firstName}
        />
        <label htmlFor="name">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter Last Name..."
          onChange={handleInputChange}
          value={lastName}
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="number"
          id="phone"
          name="phone"
          placeholder="Enter phone..."
          onChange={handleInputChange}
          value={phone}
        />
        <label htmlFor="ipAddress">ip Address</label>
        <input
          type="number"
          id="ipAddress"
          name="ipAddress"
          placeholder="Enter Ip Address..."
          value={ipAddress}
          onChange={handleInputChange}
        />

        <input type="submit" value={id ? "Update" : "Add"} />
      </form>
    </div>
  );
};

export default AddEdit;
