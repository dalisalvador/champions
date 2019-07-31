const champions = require("../public/data.js");

module.exports = {
  //Get a "qty" champions from Id
  getChampionsFromId: function(lastId, qty) {
    let champIndex =
      champions
        .map(x => {
          return x.id;
        })
        .indexOf(lastId) + 1;

    if (lastId == -1) champIndex = 0;

    //Check if Qty causes overflow before slice
    if (champIndex + qty <= champions.length)
      return champions.slice(champIndex, champIndex + qty);
    else return champions.slice(champIndex, champions.length);
  },

  //Get Champion Detail
  getChampionDetails: function(id) {
    return champions[
      champions
        .map(x => {
          return x.id;
        })
        .indexOf(id)
    ];
  }
};
