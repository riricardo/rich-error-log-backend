const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  apiKey: { type: String, required: true, unique: true },
  createdAt: { type: Date, required: true },
});

module.exports = mongoose.model("Tenant", schema);
