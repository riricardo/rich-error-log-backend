const bcrypt = require("bcrypt");
const User = require("../models/UserModel");

const login = async (req, res, next) => {
  const user = await User.findOne({ userName: req.body.userName });

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(req.body.password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const { password, ..._user } = user.toObject({ getters: true });
  res.json(_user);
};

exports.login = login;
