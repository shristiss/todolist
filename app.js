const express=require("express");

const app = express();
let items =["DSA","Web Dev","Python"];
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/" , function(req,res){
  let today= new Date();
   
    let options ={
        weekday: "long",
        day: "numeric",
        month: "long"
    };      
   
   let day = today.toLocaleDateString("en-US", options);
   
       
       res.render("list" , {kindOfDay: day , newListItems: items});
});
app.post("/",function(req,res){
    let item = req.body.newItem;

     items.push(item);
    
    res.redirect("/");
});

app.get("/about",function(req,res)
{
  res.render("about");
});
app.listen(3000,function(){
    console.log("server started on port 3000");
});