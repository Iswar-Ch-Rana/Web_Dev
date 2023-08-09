//jshint esversion:6

const express = require('express');
const app = express();

app.get("/",function(req,res){
    res.send("<h1>Hello World</h1>");
    // console.log(request);
});


app.get("/contact",function(req,res){
    res.send("<h1>contact me at: bitu@gmail.com</h1>");
});


app.get("/about",function(req,res){
    res.send("<h3>Hello i am bitu a software developer</h3>");
});

app.listen(3000 , function(){
    console.log("Server started at port 3000");
}); 