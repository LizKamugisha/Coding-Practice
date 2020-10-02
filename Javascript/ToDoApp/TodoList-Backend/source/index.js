//set up the server, connect to the database & set the port 
const express = require("express");
const cors = require("cors");

require('./database/database');

const todoView = require("./views/todoView");
//conect to userView
const userView = require ("./views/userViews");

const port = process.env.PORT || 3000;

const app = express();

//app.use is middleware

app.use(cors());
//set content type to make all data sent & received in json string format eg. {"name"}
app.use(express.json());
//specify end points
app.use(todoView);
//connect user login feature to application
app.use(userView);


//create a url endpoint with request & response parameters
app.get("/", (req, res) => 
{
    res.status(200).send ({message: "Welcome to my REST API"});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});