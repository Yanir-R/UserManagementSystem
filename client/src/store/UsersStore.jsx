import { types } from "mobx-state-tree";
import { api } from "../api";
import { UserModel } from "../model/User";

export const UsersStore = types
  .model("UsersModel", {
    users: types.array(UserModel),
  })
  .actions((store) => ({
    setUsers(newUsers) {
      store.users = newUsers;
    },
    async fetchUsers() {
      const data = await api.getUsers();
      const newUsers = data.map((user) => ({
        _id: user._id,
        ID: user.ID,
        IP: user.IP,
        Name: user.Name,
        Phone: user.Phone,
      }));

      store.setUsers(newUsers);
    },
  }));

let _usersModel;
export const useUsers = () => {
  if (!_usersModel) {
    _usersModel = UsersStore.create({
      users: [],
    });
  }
  return _usersModel;
};
