// variables for express, and PORT numbers
const express = require("express");
const path = require("path")
const app = express();
//process.env.PORT for Heroku deployment, or, local host 3001
const PORT = process.env.PORT || 3001
//express encoding 
app.use(express.urlencoded({
  extended: true
}))
//express paths and middleware function
app.use(express.json())
// express path to public folder
app.use(express.static(path.join(__dirname, 'public')));
// requiring the html routes file
require("./routes/htmlroutes")(app);
//requiring the api routes file
require("./routes/apiroutes")(app);


//express function, listening for PORT
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});