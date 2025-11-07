const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

  const token = jwt.sign({ user: _user }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.json({ token });
};

exports.login = login;
