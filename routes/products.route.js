const router = require('express').Router();
const Product = require('../models/product.model');


// router.get('/', (req, res, next) => {
//     res.render('products/products.hbs');

// });

// router.get('/:id', (req,res,next) =>{
//     Product.findById(req.params.id)
//     .then((foundProduct) =>{
//         res.render('products.hbs', {foundProduct})
//     })
//     .catch(err => console.log(err))
// })

router.get('/', (req,res,next) =>{
    Product.find()
    .then((foundProduct) =>{
        res.render('products/products.hbs', {foundProduct});
    })
    .catch(err => console.log(err))
})

// router.get('/snack', (req,res,next) =>{
//     Product.find()
//     .then((foundProduct) =>{
//         res.render('products/products.hbs', {foundProduct});
//     })
//     .catch(err => console.log(err))
// })


module.exports = router;