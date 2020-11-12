const express = require('express');
// const mongoose = require('mongoose')
const router = express.Router();
// Importing model schema 
const Registration = require('../models/registration')

//Get Methods
router.get('/', (req,res) =>{
    res.render('login')
});

//Post Methods
router.post('/aoDash', (req,res) =>{
    // console.log(req.body)

// To Save Login Info to database, create object, pass it the data & save it using asyncronous method
    const registration = new Registration(req.body);
    registration.save()
    .then(() => { res.redirect('aoDash'); })
    .catch((err) => {
      console.log(err);
      res.send('Sorry! Something went wrong.');
    });
    // res.redirect('aoDash')
    // res.render('aoDash')
});

// router.post('/foLogin', (req,res) =>{
//     console.log(req.body)
//     res.render('foDash')
// });
// router.post('/ufLogin', (req,res) =>{
//     console.log(req.body)
//     res.render('ufDash')
// });

module.exports = router;