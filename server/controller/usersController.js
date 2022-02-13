const boom = require("boom");
const Users = require("../model/Users");
const fetch = require("node-fetch");
exports.getAllUsers = async (req, reply) => {
  try {
    results = await Users.find();
    return results;
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
    await Users.findByIdAndDelete(id);
    return { Message: `${id} deleted` };
  } catch (err) {
    throw boom.boomify(err);
  }
};
