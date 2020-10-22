//To test if the node is working
// console.log('Hello, World! Node is working...');

//In order to use the express dependencies we need to import it into our project using require key word 
const express = require('express')
//create an express application by calling the express() function
const app = express();

// Specify what to do when user hits the '/' (home page) route/endpoint
// eg. res.send('Homepage ! Hello World.')

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/helloWorld.html')
});

// Specify what to do when user hits the '/about' (home page) route/endpoint
// app.get('/about', (req,res)=>{
//     res.send("This is the about us page")
// })

//Specify what to do when

// Create a server that listens on port 3000 for requests
app.listen(3000, ()=> console.log('listening on port 3000'))