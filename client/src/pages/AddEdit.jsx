import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
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
        <abbr title="Fill Your First & Last Name" aria-label="required">
          *
        </abbr>
        <label htmlFor="Name">Full Name </label>
        <input
          type="text"
          id="Name"
          name="Name"
          placeholder="Enter Your Full Name..."
          onChange={handleInputChange}
          value={Name}
          pattern="^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$"
          title="First Name minimum 3 letters required, Last name minimum 2 letters required"
        />
        <label htmlFor="ID">ID</label>
        <input
          type="string"
          id="ID"
          name="ID"
          placeholder="Enter ID Number..."
          onChange={handleInputChange}
          minLength="9"
          maxLength="9"
          value={ID}
          pattern="[0-9]+"
          title="fill your ID number with 9 numbers, no letters allowed"
        />
        <abbr title="example 1.1.1.1 of IP " aria-label="required">
          *
        </abbr>
        <label htmlFor="IP">IP Address</label>
        <input
          type="string"
          id="IP"
          name="IP"
          placeholder="Enter IP Address..."
          onChange={handleInputChange}
          value={IP}
          pattern="^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$"
          maxLength="16"
          title="example 1.1.1.1 of IP"
        />
        <label htmlFor="Phone">Phone</label>
        <input
          type="string"
          id="Phone"
          name="Phone"
          placeholder="Enter Phone Number..."
          value={Phone}
          onChange={handleInputChange}
          minLength="10"
          maxLength="14"
          pattern="[0-9]+"
        />

        <input type="submit" value={id ? "Update" : "Add"} />
        <Link to={"/"}>
          <button className="btn btn-delete">Cancel</button>
        </Link>
      </form>
    </div>
  );
};

export default AddEdit;
