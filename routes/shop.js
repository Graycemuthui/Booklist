const path = require("path");
const express = require("express");
const rootDir = require("../utils/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("In the middleware");

  // join is a method of the path module that concatenates the paths
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
