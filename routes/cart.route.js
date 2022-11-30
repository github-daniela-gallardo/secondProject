const router = require('express').Router()
const Cart = require('../models/cart.model');
const Product = require('../models/product.model');



//cart routes here
// router.get('/', (req, res, next) => {
//     res.render('cart.hbs')
// })


router.get('/add-to-cart/:id', (req, res, next) =>{
    const productId = req.params.id;
    const cart = new Cart(req.session.cart ? req.session.cart: {})
    console.log(req.session.cart)
    Product.findById(productId, (err, product)=>{
        if (err){
            return res.redirect('/');
        }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/product');
    })

});

router.get('/shopping-cart', (req, res, next) =>{
    if(!req.session.cart) {
        return res.render('cart.hbs', {products: null});
    }
    let cart = new Cart(req.session.cart);
    res.render('cart.hbs', {products: cart.generateArray(), totalPrice: cart.totalPrice})
})



module.exports = router;