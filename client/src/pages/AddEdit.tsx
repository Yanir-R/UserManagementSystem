import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import "./AddEdit.css";
import { toast } from "react-toastify";
import { UsersContext, UserState } from "../store/UsersStore";
import { observer } from "mobx-react-lite";
import { useContext } from "react";

const initialState: UserState = {
  ID: "",
  Name: "",
  IP: "",
  Phone: "",
};

export const AddEdit: React.FC = observer(() => {
  const [state, setState] = useState<UserState>(initialState);
  const usersStore = useContext(UsersContext);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleUser(id)
    } else {
      setState(initialState);
    }
  }, [id, usersStore]);

  const getSingleUser = async (id) => {
    const response = await axios.get(`http://127.0.0.1:3001/api/user/${id}`);
    if (response.status === 200) {
      setState({ ...response.data });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.ID || !state.Name || !state.IP || !state.Phone) {
      toast.error("Please provide values all fields are mandatory");
    } else {
      if (!id) {
        usersStore.addNewUser(state);
      } else {
        usersStore.updateSpecificUser(state, id);
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
          width: "400px",
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
          value={state.Name}
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
          value={state.ID}
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
          value={state.IP}
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
          value={state.Phone}
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
});
