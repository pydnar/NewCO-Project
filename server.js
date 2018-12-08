var express = require("express");
var bodyParser = require("body-parser");
var helmet = require("helmet");

var PORT = process.env.PORT || 3000;
var app = express();
// app.use('/state', express.static(__dirname + '/node_modules/simmigonstatespackage/main.js'));


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(helmet());
app.use(helmet.noCache());
const sixdaysin = 5184000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// Step 2 import businesslogic
var routes = require("./controllers/businesslogic.js");
// var otherroutes = require("./controllers/other.js");
// Step 3 tell server about the methods in businesslogic 
app.use(routes);
app.use(helmet.hsts({
  maxTime: sixdaysin
}));
app.disable('x-powered-by');
app.use(helmet.frameguard({
  action: 'deny'

}));

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    styleSrc: ["*"],
    scriptSrc: ["'self'", 'code.jquery.com/', 'stackpath.bootstrapcdn.com', 'cdnjs.cloudflare.com'],
    imgSrc: ["*"],
    fontSrc: ["*"],
  }
}))
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); //this line will add a header which will enable CORS
  next();
});
app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});



