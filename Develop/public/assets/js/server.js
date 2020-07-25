const express = require("express");
const path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended:true
  }))
   app.use(express.json())
  
//    require("./apiroutes")(app);
   require("./htmlroutes")(app);
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   

   
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
    