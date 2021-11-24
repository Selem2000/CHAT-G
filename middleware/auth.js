const User = require("../models/User");

exports.roleAuth = (role) => {
  return async (req, res, next) => {
    const user = await User.find({ _id: req.body.id });
    if (user.role === role) {
      res.status(401).send({ errors: [{ msg: "not allowd" }] });
    }
    next();
  };
};
