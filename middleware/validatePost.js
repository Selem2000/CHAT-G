const { validationResult, check } = require("express-validator");

exports.postValidate = () => [
  check("contents", "contents is required").isEmpty(),
];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
