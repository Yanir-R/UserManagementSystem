import { makeAutoObservable, action } from "mobx";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../api";
export interface UserState {
  _id?: string;
  ID: string;
  Name: string;
  Phone: string;
  IP: string;
}
export interface UserIpInfo {
  country: string;
  city: string;
  timezone: string;
}
export class UsersStore {
  users: UserState[] = [];
  user: UserState;
  userIpDetails: UserIpInfo;
  statusState: string = "";
  // query: string = "";
  state = {
    ID: "",
    Name: "",
    IP: "",
    Phone: "",
  };

  constructor() {
    makeAutoObservable(this);
    this.getAllUsers();
  }

  // setQuery(query: string) {
  //   this.query = query;
  // }
  // setState(state: UserState) {
  //   this.state = state;
  // }

  getAllUsers = async () => {
    this.statusState = "pending";
    return await api.getUsers().then(
      action("fetchSuccess", (usersList) => {
        this.users = usersList;
      }),
      action("fetchError", (error) => {
        this.statusState = error;
      })
    );
  };

  deleteUser = async (user: string) => {
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
  getSingle = async (id: string) => {
    return await api.getSingleUser(id).then(
      action("fetchSingleUser", (singleUser: UserState) => {
        this.user = singleUser;
        return singleUser;
      })
    );
  };
  getSingleIpInformation = async (userIP: string) => {
    return await api.getIpDetailsOfUser(userIP).then(
      action("fetchSingleIpDetails", (userIpDetails) => {
        this.userIpDetails = userIpDetails;
        return userIpDetails;
      })
    );
  };
  // searchUsers = (rows) => {
  //   return rows.filter((rows) => {
  //     let splitted = rows.Name.toLowerCase().split(" ");
  //     let searchable = splitted.length > 1 ? splitted[1] : "";
  //     return searchable.indexOf(this.query.toString().toLowerCase()) > -1;
  //   });
  // };
}

export const UsersContext = createContext(new UsersStore());
