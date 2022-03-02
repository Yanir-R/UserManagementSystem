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
  getSingleUser: async (id: UserState) => {
    try {
      await axios.get(`${serverApi}/user/${id}`);
    } catch (err) {
      console.error("Error while getting SingleUser: " + err.message);
    }
  },
};
