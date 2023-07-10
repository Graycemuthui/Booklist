const path = require("path");
const express = require("express");
const rootDir = require("../utils/path");

// router is like a mini express app
const router = express.Router();

const products = [];

// same paths can be used if methods are different
router.get("/add-product", (req, res, next) => {
  console.log("In another middleware!");
  // join is a method of the path module that concatenates the paths
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  // need to parse the body
  console.log(req.body);
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
