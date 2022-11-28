const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.render('ourOrchard.hbs')
})

module.exports = router