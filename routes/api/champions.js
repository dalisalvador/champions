const express = require("express");
const router = express.Router();
const champions = require("../../assets/champions.js");
const axios = require("axios");

// @route   GET api/champions/getChampions
// @desc    Get batched of 10 Champions, depending on de las Id fetched.
//          If id is null. Get first one of the list.
// @access  Public
router.get("/getChampions/:lastId&:qty", (req, res) => {
  const { lastId, qty } = req.params;
  const championsLast = champions.getChampionsFromId(lastId, parseFloat(qty));
  if (championsLast)
    return res.status(200).json({ success: true, champions: championsLast });
  else return res.status(404).json({ success: false });
});

module.exports = router;
