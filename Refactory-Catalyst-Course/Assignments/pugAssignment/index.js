// Test if the node is working:
// console.log('Hello, World! Node is working...');

// Require dependencies into project
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser') 
const mongoose = require('mongoose')
require('dotenv/config')

// Create an express application
const app = express() 

// Connect to MongoDB datatbase using Mongoose
mongoose.connect(process.env.testDB, {
    useUnifiedTopology:true,
    useNewURLParser:true }
    );

/*  Test if the mongoose connection is open or not
    mongoose.connection
    .on("open", () => {
      console.log("Mongoose connection open");
    })
  .on("error", err => {
    console.log(`Connection error: ${err.message}`);
  }); 
*/

// Link path & connect to views directory
app.set('view engine','pug')
app.set('views', path.join(__dirname, 'views'))

// Connect to public folder
app.use(express.static(path.join(__dirname, 'public')))

// Body Parser Middleware settings
app.use(bodyParser.urlencoded({extended: true}))

// Define route endpoints / CRUD handlers
app.get('/welcome',(req,res)=>{
    res.render('welcome')
    });
app.get('/form',(req,res)=>{
    res.render('form')
});
app.get('/thankYou',(req,res)=>{
    res.render('thankYou')
});

// Link pug pages ??
app.post('/linkToForm', (req, res) => {
  console.log(req.body)
  res.render('form')
});
app.post('/form', (req, res) => {
  console.log(req.body)
  res.render('thankYou')
});

// Create a server that listens on port 3000 for requests
app.listen(3000, ()=> console.log('listening on port 3000'));
  