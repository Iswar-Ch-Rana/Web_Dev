const express = require("express");
const https = require('node:https');
const bodyParser = require('body-parser');

const app = express() ;
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    const apiKey = "2a2844c667f3627e71500a6f0171e7be" ;
    const acity = req.body.City;
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?appid="+ apiKey+"&units="+unit+"&q="+acity;

    https.get(url,function(response){
        console.log("status code",response.statusCode);

        response.on("data",function(data){
            const weatherData = JSON.parse(data);

            const temp = weatherData.main.temp ;
            const desc = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const cityName = weatherData.name ;
            const imageUrl = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
            

            res.write("<h1> The weather currently : " + desc + "</h1>");
            res.write("<h1> Temp in"+ cityName +" is : " + temp + " C</h1>");
            res.write("<img src="+imageUrl+" >");

            res.send()
        });
    }); 
})

app.listen(3000,function(){
    console.log("The server is on 3000.");
})