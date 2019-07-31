const express = require("express");
const router = express.Router();
const axios = require("axios");
const champions = require("../../public/data.js");

// @route   GET api/champions/getChampions
// @desc    Get batched of 10 Champions, depending on de las Id fetched.
//          If id is null. Get first one of the list.
// @access  Public
router.get("/getChampions", (req, res) => {
  const { id } = req.body;
});

module.exports = router;
