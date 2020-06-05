const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname +"/date.js");
 
console.log(date);
const app = express();
const items = ["Buy Food","Cook Food","Eat Food"];
const workItems =[];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){

 const day = date.getDate();
      res.render("list", {listTitle: day, newListItems: items })
   
});

app.post("/",function(req,res){
const inputItem = req.body.newItem;
console.log(req.body)
if(req.body.list === "work"){
    workItems.push(inputItem);
    res.redirect("/work");
}else{
    items.push(inputItem);
    res.redirect("/");
}
 




});


app.get("/work",function(req,res){
    res.render("list", {listTitle: "work", newListItems: workItems });

});

app.post("/work",function(req,res){
    const inputItem = req.body.newItem;
    workItems.push(inputItem);

    res.redirect("/work");
 
    
    });
app.listen(3000, function(){

    console.log("server started on port 3000");
});