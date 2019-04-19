var express= require("express");
const PORT = process.env.PORT || 3000;
var app = express();
const serveStatic = require("serve-static");
const path = require('path');

// app.use(express.static(path.join(__dirname,'Public')));
app.use(express.static('Public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
// var exphbs = require("express-handlebars");
//
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./routes/router");

// app.use(express.static(path.join(__dirname+'/index.html')));
// console.log(__dirname+'/index.html');
app.use(routes);
// app.use(serveStatic('public', {'index': ['default.html', 'default.htm']}));

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});