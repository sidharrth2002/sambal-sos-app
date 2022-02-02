const express = require("express");
const router = express.Router();
const { validate, ValidateJWT } = require("../../utils/utils");
const {
  createFlag,
  getAllFlags,
  deleteFlag,
  getAllFlagsInRadius,
  getApprovedFlags,
} = require("../controllers/flag.controller");

router.get("/getall", ValidateJWT(), getAllFlags);

router.get("/getapproved", ValidateJWT(), getApprovedFlags);

router.get("/getallinradius", ValidateJWT(), getAllFlagsInRadius);

router.post("/createflag", ValidateJWT(), createFlag);

module.exports = router;
