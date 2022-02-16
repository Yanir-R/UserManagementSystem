const usersController = require("../controller/usersController");

const routes = [
  {
    method: "GET",
    url: "/api/users",
    handler: usersController.getAllUsers,
  },
  {
    method: "GET",
    url: "/api/user/:id",
    handler: usersController.getUserById,
  },
  {
    method: "POST",
    url: "/api/users",
    handler: usersController.addNewUser,
  },
  {
    method: "PUT",
    url: "/api/user/:id",
    handler: usersController.updateUser,
  },
  {
    method: "DELETE",
    url: "/api/user/:id",
    handler: usersController.deleteUser,
  },
  {
    method: "GET",
    url: "/api/userip/:ip",
    handler: usersController.webIpData,
  },
];
module.exports = routes;
