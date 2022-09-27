const express = require('express');

const app = express()

app.get("/ged", (req, res)=>{
    res.sendFile(__dirname + "/1.html")
});

app.get("/igcse", (req, res)=>{
    res.sendFile(__dirname + "/2.html")
});

app.get("/sat", (req, res)=>{
    res.sendFile(__dirname + "/3.html")
});

app.get("/ielts", (req, res)=>{
    res.sendFile(__dirname + "/4.html")
});

app.listen(3000,()=>{

    console.log('Server starting up at: port: 3000:');
}) 