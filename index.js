//  To Do:
//  styling of login page
//  css not appearing as a response in file
//  on incorrect password, give message <h2> along with file
//  morgan logger
// hiding password while typing
// hiding past users name

import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path"; 
import { fileURLToPath } from "url";

const app= express();
const port=3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

// app.use(morgan,"tiny");

app.listen(port,()=>{
    console.log("Listening on:"+ port);
});

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/Public/LogIn.html");
});



app.use(bodyParser.urlencoded({ extended: true }));

function mondrianText(req,res,next){
    console.log(req.body);
    const pass=req.body["password"];
    if (pass=="yudisthir"||"yudistir"||"yudhisthir"||"yudhistir"){
        res.sendFile(__dirname+"/public/mondrian.html");
    }
    else
    {
        res.sendFile(__dirname+"/public/LogIn.html");
        // res.send("<h2>Incorrect Password</h2>")

    }
}
app.use(mondrianText)