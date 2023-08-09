//jshint esversion:6


const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


// Calculator


app.get("/" , function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    var nums1 = Number(req.body.num1);
    var nums2 = Number(req.body.num2);

    var result = nums1 + nums2 ;
 
    res.send("The Result of Calculation " + result);
});


// BMI Calculator

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){
    var weight = parseFloat(req.body.n1);
    var height = parseFloat(req.body.n2);

    var result2 = weight / (height*height);

    res.send("Your BMI is " + result2);
});



app.listen(3000,function(){
    console.log("server started 3000");
});
