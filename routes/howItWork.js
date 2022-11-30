const router =require('express').Router()

router.get('/', (req,res,next) =>{
    res.render('howItWork.hbs')
})

module.exports = router