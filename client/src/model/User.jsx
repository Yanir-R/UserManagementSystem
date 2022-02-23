import { types } from "mobx-state-tree";

export const UserModel = types.model("UserModel", {
  _id: types.identifier,
  ID: types.optional(types.string, ""),
  Name: types.optional(types.string, ""),
  IP: types.optional(types.string, ""),
  Phone: types.optional(types.string, ""),
});
