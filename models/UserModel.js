const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roles: [{ type: String, required: true }],
});

module.exports = mongoose.model("User", schema);
