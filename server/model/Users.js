const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    ID: {
      type: String,
      required: true,
    },
    IP: {
      type: String,
      required: true,
    },
    Phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("USERS", usersSchema);
