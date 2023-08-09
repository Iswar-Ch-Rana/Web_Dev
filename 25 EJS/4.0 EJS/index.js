import express from "express";

const app = express();
const port = 3000 ;

app.get("/" , (req,res) =>{
    const today = new Date();
    const day = today.getDay();

    let type = "a weekday" ;
    let adv = "its time to work hard";

    if(day === 6 || day === 0){
        type = "a weekend";
        adv = "It's time to take rest";
    }

    res.render("index.ejs" , {
        dayType: type,
        advice: adv,
    });
});


app.listen(port,()=>{
    console.log('serever is on port : '+ port );
})

