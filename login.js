const express= require('express');

const app= express();
const way = require('path');

const PORTAL = 4000;

app.listen(PORTAL, ()=>{
    console.log("Captain, Its working 4000");
})

app.get("/", (request, response)=>{
    response.sendFile(way.join(__dirname, "home.html"))
});

app.get("/login", (request, response)=>{
    response.sendFile(way.join(__dirname, "log.html"))
});
