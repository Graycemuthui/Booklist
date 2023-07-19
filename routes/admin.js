const path = require("path");
const express = require("express");

const productsController = require("../controllers/products");
// router is like a mini express app
const router = express.Router();

// same paths can be used if methods are different
// admin/add-product => GET
router.get("/add-product", productsController.getAddProduct);

router.post("/add-product", productsController.postAddProduct);

module.exports = router;
