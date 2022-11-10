const express = require('express')
const router = express.Router()
const passport = require('passport')
const connectEnsureLogin = require('connect-ensure-login');
const bcrypt = require('bcrypt')
const saltRounds = 10
const User = require('../models/users')


// login route
router.post('/login', passport.authenticate('local', {
    successRedirect: '/profile',
    successFailure: '/login'
}))

// logout route
router.post('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

// sign up route
router.post('/signup', async(req, res) =>{
    const {email, username, password } = req.body
    console.log(req.body)

    const hashedPassword =  await bcrypt.hash(password, saltRounds)
    const user = await User.findOne({email})
    if(user){
        res.json({success: false, message: "Email already in use"})
    }
    else{
        const newUser = new User({
            email,
            username,
            hashedPassword
        })
        newUser.save()
        res.json({success: true, message: "Account created successfully"})
        res.redirect('/login')
        
    }
        
    
})

// profile route
router.post('/profile', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    res.status(200).json({msg: "profile"})
    console.log(req.user)
})

module.exports = router