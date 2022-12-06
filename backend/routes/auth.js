const express = require('express')
const router = express.Router()
const passport = require('passport')
const connectEnsureLogin = require('connect-ensure-login');

const User = require('../models/users')
const validPassword = require('../lib/passportUtil').genPassword

checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) { 
    //console.log(req.username)
    return next() }
  res.redirect("/login")
}

// profile route
router.get('/profile', checkAuthenticated, (req, res) => {
    res.status(200).json({msg: "profile"})

    console.log(req.user.username)
})


// login route
router.post('/login', passport.authenticate('local', {

    successRedirect: '/profile',
    failureRedirect: '/login',
   
}))

// logout route
router.post('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

// sign up route
router.post('/signup', async (req, res, next) =>{
    const saltHash = validPassword(req.body.password)

   const salt = saltHash.salt
   const hash = saltHash.hash

    
    const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        hash: hash,
        salt: salt
        
    })

    newUser.save()
    
        .then((user) => {
            console.log("Newuser: ", user)
        })
    
    res.redirect('/login')
})





module.exports = router