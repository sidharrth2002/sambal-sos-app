const JWT = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const logger = require("../winston-config");

// TODO: add roles to API
module.exports.ValidateJWT = (role) => (req, res, next) => {
  const { headers } = req || {};
  const { authorization } = headers || "";

  const token = headers["x-access-token"] || authorization.split(" ")[1];

  if (!token) {
    res.status(400).send({ status: false, message: "Token required" });
  } else {
    JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        logger.error(`JWT: ${err.message}`);
        return res
          .status(401)
          .json({ status: false, error: "Token is not valid" });
      }

      if (role) {
        const { role: decodedRole } = decoded || "USER";

        const roleArray = ["SUPERADMIN", "ADMIN", "USER"];
        const roleIndex = roleArray.indexOf(role);
        const decodedRoleIndex = roleArray.indexOf(decodedRole);

        if (decodedRoleIndex > roleIndex) {
          return res.status(403).json({
            status: false,
            error: "User does not have valid role to access this resource",
          });
        }
      }
      req.decoded = decoded;
      next();
    });
  }
};

module.exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  logger.warn(`Validation Error on: '${req.url}'`);
  return res.status(422).json({
    status: false,
    message: "Validation errors",
    error: extractedErrors,
  });
};
