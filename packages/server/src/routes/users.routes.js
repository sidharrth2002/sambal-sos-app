const express = require("express");
const router = express.Router();

const { ValidateJWT } = require("../../utils/utils");
const {
  getAllUsers,
  createTestUser,
} = require("../controllers/user.controller");

router.post("/createtest", createTestUser);

router.get("/users", ValidateJWT(), getAllUsers);

module.exports = router;
