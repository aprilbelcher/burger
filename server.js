var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var expressHandlebars = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 3000;


app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");


app.use("/", routes);

app.listen(PORT, function() {
  console.log("Listening on PORT " + PORT);
});
