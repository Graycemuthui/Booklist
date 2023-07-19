const path = require("path");
const express = require("express");
// router is like a mini express app
const router = express.Router();
const productsController = require("../controllers/products");

// same paths can be used if methods are different
router.get("/add-product", productsController.getAddProduct);

router.post("/add-product", productsController.postAddProduct);

module.exports = router;
