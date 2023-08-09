import Express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = Express();
const port = 3000;
var pass = "";
const auth = "12345";

app.use(bodyParser.urlencoded({extended :true}));

function checkPass(req,res,next){
    pass = req.body["password"];
    next();
}

app.use(checkPass);

app.post("/check" , (req,res)=>{
    if (pass === auth) {
        res.sendFile(__dirname+"/public/secret.html");
    }else{
        // res.sendFile(__dirname + "/public/index.html");
        res.redirect("/");
    }
})


app.get("/" , (req,res) =>{
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port , ()=>{
    console.log("Your server in port : 3000");
});

