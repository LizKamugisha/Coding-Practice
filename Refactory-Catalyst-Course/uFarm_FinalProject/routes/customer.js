const express = require('express');
const router = express.Router();

// Get & Post Methods for Shop / Product List Page
router.get('/', (req,res) =>{
    res.render('uFarmShop')
});

router.post('/order', (req, res) => {
    console.log(req.body)
    res.render('orderForm')
});

// Get & Post Methods for Order Confirmation Page
router.get('/orderForm',(req,res)=>{
    res.render('orderForm')
});
router.post('/confirmOrder', (req, res) => {
    console.log(req.body)
    res.render('uFarmShop')
});

module.exports = router;