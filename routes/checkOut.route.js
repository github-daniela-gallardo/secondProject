const router = require('express').Router()
const Cart = require('../models/cart.model');
const Product = require('../models/product.model');
const CheckOut = require('../models/checkOut.model');

const {isItLoggedIn, isNotLoggedIn} = require('../middleware/auth.middleware')

router.get('/', isItLoggedIn,   (req, res, next)=> {
    if(!req.session.cart){
        res.redirect('/shopping-cart')
    }
    let cart = new Cart(req.session.cart)
    res.render('checkOut.hbs', {total: cart.totalPrice})
})


router.post('/', (req,res,next) => {
    if(!req.session.cart){
        res.redirect('/shopping-cart')
    }
    let cart = new Cart(req.session.cart);
console.log(req.body)
    if (!req.body.fullName || !req.body.email || !req.body.phoneNumber || !req.body.address || !req.body.state || !req.body.city || !req.body.zipCode) {
        res.render('checkOut.hbs', { errorMessage: "All fields are require" })
        return;
    } else {
    CheckOut.create({
        fullName: req.body.fullName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        label: req.body.label,
        address: req.body.address,
        address2: req.body.address2,
        city:req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode,
        textArea: req.body.textArea,
        cardName: req.body.cardName,
        cardNumber: req.body.cardNumber,
        expiration:req.body.expiration,
        cvc: req.body.cvc
    })
        .then(newOrder => {
            console.log('here is the new order', newOrder);
            req.session.cart = null;
            res.locals.cart = null;

            res.render('thanks.hbs');
        })
        .catch((err) => {
            console.log(err)
        })
    }

})


module.exports = router;