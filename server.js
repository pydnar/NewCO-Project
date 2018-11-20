var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// Step 2 import businesslogic
var routes = require("./controllers/businesslogic.js");
// var otherroutes = require("./controllers/other.js");
// Step 3 tell server about the methods in businesslogic 
app.use(routes);
// app.use(otherroutes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});



