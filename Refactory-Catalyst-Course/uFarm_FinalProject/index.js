// To test if the node is working:
// console.log('Hello, World! Node is working...');

// Require dependencies into project
const path = require('path')
const express = require('express')
const bodyParser= require('body-parser')
const mongoose = require('mongoose')
require('dotenv/config')
// require('dotenv').config();

// instantiating variables & assigning them with imported routes
const home = require('./routes/uFarmHome');
const login = require('./routes/uFarmLogin');
const ao = require('./routes/agriOfficer');
const fo = require('./routes/farmerOne');
const uf = require('./routes/urbanFarmer');
const uFarmShop = require('./routes/customer');

// Create an express application
const app = express() 

// Connect to MongoDB datatbase using Mongoose
mongoose.connect(process.env.testDB, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true,
    });

/*  Test if the mongoose connection is open or not */
    mongoose.connection
    .on("open", () => {
      console.log("Mongoose connection open");
    })
    .on("error", err => {
    console.log(`Connection error: ${err.message}`);
    });

// Link path & connect to views directory
app.set('view engine','pug')
app.set('views', path.join(__dirname, 'views'))

//Simple request time logger for a specific route
// app.use((req, res, next) => {
//   console.log('A new request received at ' + Date.now());
//   next();
// });

// Body Parser Middleware settings
app.use(bodyParser.urlencoded({extended: true}))

// Connect to public folder
app.use(express.static(path.join(__dirname,'public')))

// Routing
app.use('/home', home);
app.use('/', login);
app.use('/aoDash', ao);
app.use('/foRegForm', ao);
// app.use('/logout', ao);
app.use('/foDash', fo);
app.use('/ufDash', uf);
app.use('/shop', uFarmShop);

// Incase of Error
app.get('*',(req,res)=>{
  res.send('error page')
})

// Create a server that listens on port 3000 for requests
app.listen(3000, ()=> console.log('listening on port 3000'))