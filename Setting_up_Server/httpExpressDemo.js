const express = require('express');

const app = express();

const PORT  = 3000;

app.get('/' , function (req , res){
    console.log(req.method);
    res.end("hai");
});

app.post('/home' , function (req , res){
    console.log(req.method);
    res.end("welcome to the expressjs ");
});

app.patch('/home' , function(req , res){
    console.log(req.method);
    res.end("List of FAQ's");
});

app.listen(PORT , function process(){
    console.log("server started on PORT" , PORT);
});