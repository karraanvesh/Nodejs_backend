const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true })); // to access the data of body parser
app.use(bodyParser.json()); // to access the body parser
app.use(logger); // if logger to be used by all the requests , we can mention it using app.get()

// mimic the db using an array

let blogsList = [];

function logger(req , res , next){
    console.log(req.url);
    console.log(req.body);
    let condition = false;
    if(condition == true){
        return res.status(500).json({
            message : "Something went wrong" ,
        });
    }
    console.log(next);
    next();
}

function isAuthenticated(req , res , next){
    console.log("Yes , user is authenticated");
    next();
}

app.get('/blogs' , isAuthenticated , (req , res) => {
    console.log("hitting");
    return res.status(404).json({
        data : blogsList ,
        success : true
    });
});

app.post('/blogs' , (req , res) => {
    blogsList.push({ 
        title : req.body.title , 
        content : req.body.content , 
        id : Math.floor(Math.random() * 1000) ,
    });

    return res.status(201).json({
        success : true ,
    });
});

app.get("/blogs/:id" , (req , res) => {
    const result = blogsList.filter((blog) => blog.id == req.params.id);
    return res.status(200).json({
        data : result ,
        success : true ,
    });
});

app.delete("/blogs/:id" , (req , res) => {
    const result = blogsList.filter((blog) => blog.id != req.params.id);
    return res.status(200).json({
        data : result ,
        success : true ,
    });
});


app.listen(PORT , () => {
    console.log("Server started on PORT" , PORT);
});

