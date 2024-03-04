const express = require("express");
const router = express.Router();

//get all categories
router.get("/", async (req, res) => {
  res.send("kategoriler getirildi");
});

module.exports = router;
