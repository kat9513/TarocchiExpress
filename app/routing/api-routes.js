var cardsData = require("../data/cardsData.js");
var path = require("path");

module.exports = function (app) {
    app.get("/api/cards", function (req, res){
        res.json(cardsData);
    });
}