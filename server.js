const express = require("express");
const path = require("path");

var app = express();
var PORT = process.env.PORT || 3001

app.use(express.urlencoded({
    extended:true
  }))
   app.use(express.json())
  
   require("./develop/public/assets/js/htmlroutes")(app);
   require("./develop/public/assets/js/apiroutes")(app);
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   

   
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
    