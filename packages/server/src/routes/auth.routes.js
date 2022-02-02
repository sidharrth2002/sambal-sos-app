const express = require("express");
const router = express.Router();
const {
  login,
  googleLogin,
  validateRules,
  facebookLogin,
} = require("../controllers/auth.controller");
const { validate } = require("../../utils/utils");

router.post("/google", googleLogin);

router.post("/facebook", facebookLogin);

module.exports = router;
