const express = require("express");
const {
  adminGetAllFlags,
  deleteFlag,
  updateFlagApprovalStatus,
} = require("../controllers/admin.controller");
const router = express.Router();
const { ValidateJWT } = require("../../utils/utils");

router.post(
  "/updateflagapproval",
  ValidateJWT("ADMIN"),
  updateFlagApprovalStatus
);

router.get("/getflags", ValidateJWT("ADMIN"), adminGetAllFlags);

router.delete("/deleteflag", ValidateJWT("ADMIN"), deleteFlag);

module.exports = router;
