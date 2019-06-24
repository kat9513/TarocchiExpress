var aboutPage = require("../public/about.html")
var path = require("path");

module.exports = function (app) {
    app.get("/about", function (req, res){
        res.sendFile(path.join(__dirname, aboutPage));
    });
}