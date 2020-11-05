// To test if the node is working:
// console.log('Hello, World! Node is working...');

// Require dependencies into project
const path = require('path')
const express = require('express')
const bodyParser= require('body-parser') 

// instantiating variables & assigning them with imported routes
const home = require('./routes/uFarmHome');
const login = require('./routes/uFarmLogin');
const ao = require('./routes/agriOfficer');
const fo = require('./routes/farmerOne');
const uf = require('./routes/urbanFarmer');
const uFarmShop = require('./routes/customer');

// Create an express application
const app = express() 

// Link path & connect to views directory
app.set('view engine','pug')
app.set('views', path.join(__dirname, 'views'))

// Connect to public folder
app.use(express.static(path.join(__dirname,'public')))

// Body Parser Middleware settings
app.use(bodyParser.urlencoded({extended: true}))

// Routing
app.use('/home', home);
app.use('/login', login);
app.use('/aoDash', ao);
app.use('/foDash', fo);
app.use('/ufDash', uf);
app.use('/shop', uFarmShop);

// Create a server that listens on port 3000 for requests
app.listen(3000, ()=> console.log('listening on port 3000'))