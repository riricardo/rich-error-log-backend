const Error = require("../models/ErrorModel");
const Tenant = require("../models/TenantModel");

const getErrors = async (req, res, next) => {
  const tenantId = req.query.tenant_id;
  const page = parseInt(req.query.page) || 1; // current page
  const limit = parseInt(req.query.limit) || 10; // items per page
  const skip = (page - 1) * limit;

  const query = tenantId ? { tenantId: tenantId } : {};
  let results = await Error.find(query)
    .sort({ _id: -1 })
    .skip(skip)
    .limit(limit);

  const total = await Error.countDocuments(query); // total documents
  const totalPages = Math.ceil(total / limit);

  res.json({
    page,
    limit,
    total,
    totalPages,
    data: results.map((result) => result.toObject({ getters: true })),
  });
};

const createError = async (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  const tenant = await Tenant.findOne({ apiKey: apiKey });
  if (!tenant) {
    return res.status(400).json({ message: "Tenant not found" });
  }

  const error = await Error.create({
    tenantId: tenant._id,
    title: req.body.title,
    message: req.body.message,
    createdAt: new Date().toISOString(),
  });

  res.status(201).json({ error: error.toObject({ getters: true }) });
};

exports.getErrors = getErrors;
exports.createError = createError;
