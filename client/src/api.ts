import axios from "axios";
// import { toast } from "react-toastify";
import { UsersState, UserState } from "./store/UsersStore";
const serverApi = "http://127.0.0.1:3001/api";

export const api = {
  getUsers: async () => {
    try {
      const response = await axios.get<UsersState[]>(`${serverApi}/users`);
      return response.data;
    } catch (err) {
      console.error("Error getting users", err.message);
    }
  },
  onDeleteUser: async (id: UserState) => {
    try {
      if (window.confirm("Are you sure you want to delete that user?")) {
        await axios.delete<UserState>(`${serverApi}/user/${id}`);
      }
    } catch (err) {
      console.error("Error while deleting user: " + err.message);
    }
  },
  getSingleUser: async (id: string) => {
    try {
      const response = await axios.get<UserState>(`${serverApi}/user/${id}`);
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.error("Error while getting SingleUser: " + err.message);
    }
  },
  addUser: async (newUser: UserState) => {
    try {
      const response = await axios.post<UserState>(
        "http://127.0.0.1:3001/api/users",
        newUser
      );
      return response.data;
    } catch (err) {
      console.log("Error while posting new user:", err);
    }
  },
  updateUser: async (updateUser: UserState, id: string) => {
    try {
      const response = await axios.put<UserState>(
        `http://127.0.0.1:3001/api/user/${id}`,
        updateUser
      );
      return response.data;
    } catch (err) {
      console.error("Error while updating a user:", err);
    }
  },
};
