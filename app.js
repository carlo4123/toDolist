const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");


app.get("/", function(req, res){

       var today = new Date();
       var currentDay = today.getDay();
       var day = "";
       if( currentDay=== 6 || currentDay ===0){
            // res.send("<h1>Yay it's the weekend</h1>");
            // res.write("<h1>Yay it's the weekend</h1>");
            // res.send;
          day = "weeekends";
    

       }else{
        // res.write("<p>Yay it's the weekend</p>");
        // res.write("<h1>Yay it's the weekend</h1>");
        // res.send;
        // res.sendFile(__dirname + "/index.html");
        day = "weekdays"
        
       }
       res.render("list", {kindOfDay: day});
    //    res.render("list",{kindOfDay: day} );
});




app.listen(3000, function(){

    console.log("server started on port 3000");
});