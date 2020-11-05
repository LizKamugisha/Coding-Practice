const express = require('express');
const router = express.Router();

//Get Methods
router.get('/', (req,res) =>{
    res.render('homepage')
});

//Post Methods
// router.post('/aoDash', (req,res) =>{
//     console.log(req.body)
//     res.redirect('aoDash')
// });

module.exports = router;