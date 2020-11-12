const express = require('express');
const { model } = require('../models/registration');
const router = express.Router();
// Importing model schema 
// const Registration = require('../models/registration')

//Get & Post Routes for AO Dashboard Welcome Page
router.get('/', (req,res) =>{
    res.render('aoDash')
});
router.post('/', (req,res) =>{
    // console.log(req.body)
    res.render('aoDash')
});

//Get & Post Routes for Register F.O Page
router.get('/foRegForm', (req,res) =>{
    res.render('foRegForm')
});
router.post('/foRegForm', (req,res) =>{
    // console.log(req.body)
    res.render('foRegForm')
});

//Link to logout
// router.get('/logout', (req,res) =>{
//     res.render('login')
// });

//Post Methods


// router.post('/aoDash', (req,res) =>{
    // console.log(req.body)

// To Save Login Info to database, create object, pass it the data & save it using asyncronous method
    // const registration = new Registration(req.body);
    // registration.save()
    // .then(() => { res.send('Thank you for your registration!'); })
    // .catch((err) => {
    //   console.log(err);
    //   res.send('Sorry! Something went wrong.');
    // });
    // res.redirect('aoDash')
    // res.render('aoDash')
// });

// Get & Post Methods For Registration Form


module.exports = router;