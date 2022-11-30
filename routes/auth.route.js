const router = require('express').Router();
const User = require('../models/user.model');

const bcryptjs = require('bcryptjs');
const salt = 10;

const {isItLoggedIn, isNotLoggedIn} = require('../middleware/auth.middleware')

router.get('/signUp', isNotLoggedIn, (req, res, next) => {
    res.render('signUp.hbs')
})

router.post('/signUp',isNotLoggedIn, (req, res, next) => {

    if (!req.body.fullName || !req.body.email || !req.body.password) {
        res.render('signUp.hbs', { errorMessage: "All fields are require" })
        return;
    }
    User.findOne({ email: req.body.email })
        .then(foundUser => {
            console.log('here is the found user', foundUser)
            if (foundUser) {
                // console.log('we are inside the if statement')
                res.render('signUp.hbs', { errorMessage: 'User name or email already exists' })
                return;
            } else {
                User.create({
                    fullName: req.body.fullName,
                    email: req.body.email,
                    password: bcryptjs.hashSync(req.body.password, salt)
                })
                    .then(createdUser => {
                        console.log('here is the new user', createdUser);
                        res.redirect('/auth/logIn');
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        })

        .catch(err => {
            res.send(err)
        })

})

router.get('/logIn', isNotLoggedIn, (req, res, next) => {
    res.render('logIn.hbs')
})

router.post('/logIn', isNotLoggedIn, (req, res, next) => {

    if (!req.body.email || !req.body.password || !req.body.fullName) {
        res.render('logIn.hbs', {errorMessage: "All fields are require"})
        return;
    }

    User.findOne({ email: req.body.email })
        .then(foundUser => {
            if (!foundUser) {
                // res.send('user or password doesnt exists')
                res.render('logIn.hbs', {errorMessage: 'Sorry user doesnt exists'})
                return;
            }

            const isValidPassword = bcryptjs.compareSync(req.body.password, foundUser.password)

            if(!isValidPassword){
                // res.send("sorry, wrong password")

                res.render('logIn.hbs', {errorMessage: 'Sorry wrong password'})
                return
            }

            req.session.user = foundUser;

            res.redirect('/');
        })

        .catch(err => {
            console.log(err);
            res.send(err)
        })

})

router.get('/profile', isItLoggedIn, (req, res, next ) => {
    res.render('profile.hbs', req.session.user)
})


router.get('/logout', isItLoggedIn, (req, res, next) => {
    req.session.destroy()
    res.render('logIn.hbs', { errorMessage: "You have logged out" })
})

module.exports = router;