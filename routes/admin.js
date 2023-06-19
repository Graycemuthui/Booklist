const express = require("express");

// router is like a mini express app
const router = express.Router();

// router.get
router.get("/add-product", (req, res, next) => {
  console.log("In another middleware!");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  );
});

router.post("/product", (req, res, next) => {
  // need to parse the body
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
