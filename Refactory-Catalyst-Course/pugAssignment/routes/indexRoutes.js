const express = require('express');
const router = express.Router();

// Get & Post Methods for Welcome Page
router.get('/welcome',(req,res)=>{
    res.render('welcome',{title:'Hello World!'})
});
router.post('/linkToForm', (req, res) => {
  console.log(req.body)
  res.render('form', {title:'Subscribe'})
});

// Get & Post Methods for Form Page
router.get('/form',(req,res)=>{
    res.render('form', {title:'Subscribe'})
});
router.post('/form', (req, res) => {
    console.log(req.body)
    res.render('thankYou', {title:'Thank You'})
});

// Get & Post Methods for Thank You Page
router.get('/thankYou',(req,res)=>{
    res.render('thankYou', {title:'Thank You'})
});

module.exports = router;

