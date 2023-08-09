const express = require('express');
// import { express } from "express";
const app = express();

app.get("/" ,function(req,res){
    // res.send(req);
    console.log(req);
    // res.send("Hello World");
});

app.listen(4000,function(){
    console.log("server running on port 4000");
});
