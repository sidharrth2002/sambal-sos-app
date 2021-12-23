const express = require("express");
const util = require("util");
const router = express.Router();
const { ValidateJWT } = require("../../utils/utils");
/* const { minioUpload } = require("../controllers/upload.controller"); */

const Multer = require("multer");
let processFile = Multer({
  storage: Multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
}).single("file");

router.post(
  "/minioupload",
  ValidateJWT(),
  util.promisify(processFile),
  minioUpload
);

module.exports = router;
