var express = require('express');
var router = express.Router();
const User = require('../models/user.model');
const CheckOut = require('../models/checkOut.model');
const bcryptjs = require('bcryptjs')

router.get('/personal-info', (req, res, next) => {

    res.render('profile/personalInfo.hbs', { user: req.session.user });
})

router.post('/personal-info', (req, res, next) => {
    User.findByIdAndUpdate(req.session.user._id, {
        fullName: req.body.fullName,
        email: req.body.email,
        // the ? work as an if statement everything before that is the condition then the first statement is what is going to execute if is truthy after : is the falsy statement
        password: req.body.password ? bcryptjs.hashSync(req.body.password) : req.session.user.password
    }, { new: true })
        .then(updatedUser => {
            req.session.user = updatedUser;
            res.redirect('/auth/profile')
        })
        .catch(err => console.log(err))
})

router.get('/myAddress', (req, res, next) => {
    CheckOut.find()
        .then(foundCheckOutArr => {
            res.render('profile/myAddress.hbs', { user: req.session.user, foundCheckOutArr });
        })
        .catch(err => console.log(err))
})

// delete one address 
router.post('/myAddress-delete', (req, res, next) => {
    CheckOut.findByIdAndDelete(req.params.CheckOut)
    .then( () => {
        //foundAddress.delete()
        res.redirect('/profile/myAddress')
    })
    .catch(err => console.log(err))
})


// delete the account 

router.get('/deleteAccount' , (req, res, next) => {
    res.render('profile/deleteAccount.hbs')
})

router.post('/deleteAccount', (req, res, next) =>{
    User.findById(req.session.user._id)
    .then(foundUser => {
        foundUser.delete()
        req.session.destroy()
        res.redirect('/auth/signUp')
    })
    .catch(err => console.log(err))
})



router.get('/recentOrder', (req, res,next) =>{
    
    res.render('profile/recentOrder.hbs')
    // CheckOut.find()
    // .then(foundOrderArr =>{
    //     res.render('profile/recentOrder.hbs', { user: req.session.user, foundOrderArr})
    // })
    // .catch(err => console.log(err))
})




module.exports = router;