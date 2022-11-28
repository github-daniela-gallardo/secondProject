const router = require('express').Router();
const Product = require('../models/product.model');


router.get('/', (req,res,next) =>{
   
        res.render('products/products.hbs');
  
})

router.get('/mealPlan', (req, res, next) => {
    Product.find({ category: 'meal_plan' })
    .then((foundProduct) =>{

        const mappedFoundProduct = foundProduct.map(e => {
            return {
                ...e._doc,
                menuType: e.menuType === 'plant_based' ? 'Plant Based' : 'Animal Protein',
            }
        })

        res.render('products/mealPlan.hbs', {foundProduct: mappedFoundProduct});
    })
    .catch(err => console.log(err))
    

});

router.get('/snacks', (req,res,next) =>{
    Product.find({category: 'snack'})
    .then((foundProduct) =>{

        res.render('products/snacks.hbs', {foundProduct});
    })
    .catch(err => console.log(err))
})



// router.get('/:id', (req,res,next) =>{
//     Product.findById(req.params.id)
//     .then((foundProduct) =>{
//         res.render('products.hbs', {foundProduct})
//     })
//     .catch(err => console.log(err))
// })




module.exports = router;