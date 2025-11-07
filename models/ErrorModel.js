const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  tenantId: { type: mongoose.Types.ObjectId, required: true, ref: "Tenant" },
  title: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, required: true },
});

module.exports = mongoose.model("Error", schema);
