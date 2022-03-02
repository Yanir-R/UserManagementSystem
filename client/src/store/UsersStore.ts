import { makeAutoObservable, action } from "mobx";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../api";

export interface UserType {
  id: string;
}

export interface UsersState {
  users: UserState[];
}

export interface UserState {
  ID: string;
  Name: string;
  Phone: string;
  IP: string;
}

export class UsersStore {
  users: UsersState[] = [];
  user: UserType;
  state = "";

  constructor() {
    makeAutoObservable(this);
    this.getAllUsers();
  }

  getAllUsers = () => {
    this.state = "pending";
    return api.getUsers().then(
      action("fetchSuccess", (usersList) => {
        this.users = usersList;
      }),
      action("fetchError", (error) => {
        this.state = "error";
      })
    );
  };

  deleteUser = async (user: UserState) => {
    await api.onDeleteUser(user);
    toast.success("User Delete Successfully");
    await this.getAllUsers();
  };

  addNewUser = async (user: UserState) => {
    await api.addUser(user);
    toast.success("User added Successfully");
    await this.getAllUsers();
  };

  updateSpecificUser = async (user: UserState, id: string) => {
    await api.updateUser(user, id);
    toast.success("User Updated Successfully");
    await this.getAllUsers();
  };
}

// getSingle = async (id: string) => {
//   console.log('singile id ->',id)
//   await api.getSingleUser(id)

// };

export const UsersContext = createContext(new UsersStore());
