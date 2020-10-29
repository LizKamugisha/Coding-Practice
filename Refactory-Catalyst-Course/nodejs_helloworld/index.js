// To test if the node is working:
// console.log('Hello, World! Node is working...');

// Installing Pug (part 1)
const path = require ('path')
// In order to use the package.json dependencies such as express & body-parser we need to import it into our project using require key word 
const express = require('express')
const bodyParser= require('body-parser') 
// Require Mongoose
const mongoose = require('mongoose');
require('dotenv/config');
// Create an express application by calling the express() function
const app = express() 

//Connecting to Mongoose
mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology:true,
  useNewURLParser:true }
  );
// We want to test if the mongoose connection is open or not
  mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection open");
  })
.on("error", err => {
  console.log(`Connection error: ${err.message}`);
});

//installing Pug (part 2- linking path to connect to Views folder)
app.set('view engine','pug')
app.set('views', path.join(__dirname, 'views'))
// Connects to public folder
app.use(express.static(path.join(__dirname, 'public')))

// Middleware settings must be placed before CRUD handlers
app.use(bodyParser.urlencoded({extended: true}))

//To access files in Public folder where

// Specify what to do when user hits the '/' route/endpoint e.g /homepage or /qoutes
// Good practice to have the Get & Post Routes matching

// pug (part3)
// With Pug we use method .render not .sendFile
app.get('/form1',(req,res)=>{
  res.render('form1')
});

// Route for posting in form and printing data from the form
app.post('/form1', (req,res)=>{
  console.log(req.body)
  res.render('thankYou')
});

// Get Method
app.get('/homepage', (req,res)=>{
    res.sendFile(__dirname + '/helloWorld.html')
})

//Post Method
// Posting route must match what you have as the form action in the html
app.post('/homepage', (req, res) => { 
    console.log(req.body) 
    // console.log('Hellooooooooooooooooo!')
  })
// Specify what to do when user hits the '/about' (home page) route/endpoint
// app.get('/about', (req,res)=>{
//     res.send("This is the about us page")
// })

//Delete
app.delete('/users', (req, res) =>{
  res.send('Got a DELETE request at /user')
})

//Put
app.put('/user',(req, res) =>{
  res.send('Got a PUT request at /user')
})

// handle errors
// app.get('*',(req,res)=>{
//   res.render('error')
// }) 

// Note that the paths dont have to be linked to html pages, they are just paths
// Path params to identify specific routes
app.get('/about/:name', (req,res)=>{
  res.send('Hello'+req.params.name)
})

// Query Params can use multiple parameters, and are more dymanic for more defined searches 
// We use + to concatenate / link together strings. Be careful where you place them, esp when adding numbers
app.get('/about', (req,res) =>{
  res.send('This is class '+ req.query.class + ' cohort ' + req.query.cohort)
})

// Create a server that listens on port 3000 for requests
app.listen(3000, ()=> console.log('listening on port 3000'))