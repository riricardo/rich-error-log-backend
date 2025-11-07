const getErrors = async (req, res, next) => {
  res.json("ok");
};

const createError = async (req, res, next) => {
  res.json("ok");
};

exports.getErrors = getErrors;
exports.createError = createError;
