const express = require('express');
const router = express.Router();

//Get Methods
router.get('/', (req,res) =>{
    res.render('aoDash')
});

//Post Methods
router.post('/', (req,res) =>{
    console.log(req.body)
    res.render('aoDash')
});

module.exports = router;