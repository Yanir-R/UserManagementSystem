import axios from "axios";

const serverApi = "http://127.0.0.1:3001/api"

export const api = {
  getUsers: async () => {
    try {
      const response = await axios.get(`${serverApi}/users`);
      if (response.status === 200) {
        return response.data;
      }
    } catch {
      console.error("Error getting users");
    }
  },
};
