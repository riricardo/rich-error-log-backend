const Tenant = require("../models/TenantModel");
const crypto = require("crypto");

const getKeys = async (req, res, next) => {
  const tenants = await Tenant.find({});

  res.json(tenants.map((tenant) => tenant.toObject({ getters: true })));
};

const createKey = async (req, res, next) => {
  const existingTenant = await Tenant.findOne({ name: req.body.name });
  if (existingTenant) {
    return res.status(400).json({ message: "Tenant name already exists" });
  }

  const tenant = new Tenant({
    name: req.body.name,
    apiKey: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  });

  await tenant.save();

  res.json(tenant.toObject({ getters: true }));
};

exports.getKeys = getKeys;
exports.createKey = createKey;
