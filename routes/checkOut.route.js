const router = require('express').Router()
const Cart = require('../models/cart.model');
const Product = require('../models/product.model');

router.get('/', (req, res, next)=> {
    res.render('checkOut.hbs')
})

module.exports = router;