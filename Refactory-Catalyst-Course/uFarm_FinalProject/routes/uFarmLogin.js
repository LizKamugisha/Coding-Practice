const express = require('express');
const router = express.Router();

//Get Methods
router.get('/', (req,res) =>{
    res.render('login')
});

//Post Methods
router.post('/aoDash', (req,res) =>{
    console.log(req.body)
    res.redirect('aoDash')
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