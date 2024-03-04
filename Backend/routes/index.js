const express = require("express");
const router = express.Router();

//get other route file
const productRoute = require("./products.js");
const categoryRoute = require("./categories.js");

// all route
router.use("/categories", categoryRoute);
router.use("/products", productRoute);

module.exports = router;
