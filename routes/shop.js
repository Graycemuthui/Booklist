const express = require("express");

const router = express.Router();

// use is a middleware function
router.get("/", (req, res, next) => {
  console.log("In the middleware");
  // send allows us to send a response
  res.send("<h1>Hello from Express!</h1>");
});

module.exports = router;
