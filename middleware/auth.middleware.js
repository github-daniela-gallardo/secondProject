const isItLoggedIn = (req, res, next) => {
    //console.log('hi')
// block the person to go to profile if they are not log in
    if (!req.session.user) {
        res.redirect('/auth/logIn')
        return
    }
    next();
}

const isNotLoggedIn = (req, res, next) => {
    console.log('hi')
// block the person to go to profile or log out if they are not log in
    if (req.session.user) {
        res.redirect('/profile')
        return
    }
    next();
}




module.exports = {isItLoggedIn, isNotLoggedIn};