const express = require("express");
const router = express.Router();

//get all products
router.get("/", async (req, res) => {
  res.send("ürünler getirildi");
});

module.exports = router;
