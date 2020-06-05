const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items = ["Buy Food","Cook Food","Eat Food"];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){

      var today = new Date();
       var options = { 
           weekday: 'long',
            year: 'numeric', 
            month: 'long',
             day: 'numeric' };
       var day = today.toLocaleDateString("en-US", options);
       
    //    console.log(today.toLocaleDateString("en-US")); // 9/17/2016
    //    console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
    //    console.log(today.toLocaleDateString("hi-IN", options)); // शनिवार, 17 सितंबर 2016


      res.render("list", {kindOfDay: day, newListItems: items })
      console.log(items)
});

app.post("/",function(req,res){
var inputItem = req.body.newItem;
 items.push(inputItem);
//  res.render("list", {newListItem: item})
res.redirect("/");


});


app.listen(3000, function(){

    console.log("server started on port 3000");
});