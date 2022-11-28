const router = require('express').Router();


router.get('/', (req, res, next) => {
    res.render('products/products.hbs');

  });
  

  module.exports = router;