const boom = require("boom");
const Users = require("../model/Users");

exports.getAllUsers = async (req, reply) => {
  try {
    alerts = await Users.find();
    return alerts;
  } catch (err) {
    throw boom.boomify(err);
  }
};
exports.updateUser = async (req, reply) => {
  try {
    const id = req.params.id;
    let result = await Users.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return result;
  } catch (err) {
    throw boom.boomify(err);
  }
};
exports.getUserById = async (req, reply) => {
  try {
    const id = req.params.id;
    let result = await Users.findById(id);
    return result;
  } catch (err) {
    throw boom.boomify(err);
  }
};
exports.addNewUser = async (req, reply) => {
  try {
    let user = new Users(req.body);
    let new_user = await user.save();
    return new_user;
  } catch (err) {
    throw boom.boomify(err);
  }
};
exports.deleteUser = async (req, reply) => {
  try {
    const id = req.params.id;
    let result = await Users.findByIdAndDelete(id);
    return { Message: `${id} deleted` };
  } catch (err) {
    throw boom.boomify(err);
  }
};
