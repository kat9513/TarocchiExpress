//dependencies
var express = require("express");
var path = require("path");

//set up express app
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
require("./app/routing/api-routes")(app);
require("./app/routing/html-routes")(app);

//listener
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});