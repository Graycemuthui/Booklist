const express = require("express");

// router is like a mini express app
const router = express.Router();

// same paths can be used if methods are different
router.get("/add-product", (req, res, next) => {
  console.log("In another middleware!");
  res.send(
    "<form action='/admin/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  );
});

router.post("/add-product", (req, res, next) => {
  // need to parse the body
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
