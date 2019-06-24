//dependencies
var express = require("express");
var path = require("path");
var cardsData = require("./app/data/cardsData");
//set up express app
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '/app/public')));

/*app.get("/css", function (req, res){
    res.sendFile(__dirname + "/app/public/assets/style.css")
});*/

console.log(path.resolve(__dirname, './'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/index.html"));
  });

app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/about.html"));
  });

app.get("/api/cards", function(req, res) {
    return res.json(cardsData);
  });

//require("./app/routing/api-routes")(app);
//require("./app/routing/html-routes")(app);
//require("./app/routing/about-routes")(app);
//listener
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});