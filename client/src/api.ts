import axios from "axios";
import { UserState } from "./store/UsersStore";

const serverApi = "http://127.0.0.1:3001/api";

export const api = {
  getUsers: async () => {
    try {
      const response = await axios.get<UserState[]>(`${serverApi}/users`);
      return response.data;
    } catch (err) {
      console.error("Error getting users", err.message);
    }
  },
  onDeleteUser: async (id: string) => {
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
      return response.data;
    } catch (err) {
      console.error("Error while getting SingleUser: " + err.message);
    }
  },
  addUser: async (newUser: UserState) => {
    try {
      const response = await axios.post<UserState>(
        `${serverApi}/users`,
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
        `${serverApi}/user/${id}`,
        updateUser
      );
      return response.data;
    } catch (err) {
      console.error("Error while updating a user:", err);
    }
  },
  getIpDetailsOfUser: async (userIP: string) => {
    try {
      const response = await axios.get(`${serverApi}/userip/${userIP}`);
      return response.data;
    } catch (err) {
      console.error("Error while getting IP details:", err);
    }
  },
};
