// To test if the node is working:
// console.log('Hello, World! Node is working...');

// In order to use the package.json dependencies such as express & body-parser we need to import it into our project using require key word 
const express = require('express')
const bodyParser= require('body-parser') 

// Create an express application by calling the express() function
const app = express() 

// Middleware settings must be placed before CRUD handlers
app.use(bodyParser.urlencoded({extended: true}))

// Specify what to do when user hits the '/' route/endpoint e.g
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/indexUfarm.html')
})

// app.post('/', (req, res) => { 
//     console.log(req.body) 
//     // console.log('Hellooooooooooooooooo!')
//   })
// Specify what to do when user hits the '/about' (home page) route/endpoint
// app.get('/about', (req,res)=>{
//     res.send("This is the about us page")
// })

// Create a server that listens on port 3000 for requests
app.listen(3000, ()=> console.log('listening on port 3000'))