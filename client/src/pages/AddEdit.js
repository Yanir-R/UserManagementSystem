import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./AddEdit.css";
import { toast } from "react-toastify";

const initialState = {
  id: "",
  name: "",
  phone: "",
  ipAddress: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);

  const { name, phone, ipAddress } = state;

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
    if (!name || !phone || !ipAddress) {
      toast.error(
        "Please provide value into name & id input field they are mandatory"
      );
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
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name..."
          onChange={handleInputChange}
          value={name}
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
