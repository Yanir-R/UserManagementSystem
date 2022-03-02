import { makeAutoObservable, action } from "mobx";
import { createContext } from "react";
import { api } from "../api";

export interface UsersState {
  users: UserState[];
}

export interface UserState {
  id?: string;
  ID: string;
  Name: string;
  Phone: string;
  IP: string;
}

export class UsersStore {
  users: UsersState[] = [];
  state = "";

  constructor() {
    makeAutoObservable(this);
    this.getAllUsers();
  }

  getAllUsers() {
    this.state = "pending";
    return api.getUsers().then(
      action("fetchSuccess", (usersList) => {
        this.users = usersList;
      }),
      action("fetchError", (error) => {
        this.state = "error";
      })
    );
  }

  deleteUser = async (user: UserState) => {
    await api.onDeleteUser(user);
    await this.getAllUsers();
  };

  getSingle = async (id: UserState) => {
    await api.getSingleUser(id);
    action("singleUser", (singleUser: UserState) => {
      //get single id info:
    });
  };
}

export const UsersContext = createContext(new UsersStore());
