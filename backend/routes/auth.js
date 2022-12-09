const express = require('express')
const router = express.Router()
const passport = require('passport')
const connectEnsureLogin = require('connect-ensure-login');

const User = require('../models/users')
const validPassword = require('../lib/passportUtil').genPassword

// const isLoggedIn = (req, res, done) => {
//   if (req.user) { 
//     return done() 
//   }
//   return res.redirect("/login")
// }

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.session.reqUrl = req.originalUrl;
  res.redirect('/login');
}


// profile route
router.get('/dashboard', checkAuthenticated, (req, res, next) => {
  console.log("req.user: ", req.user.username);
  res.send("profile");
});

// login route
router.post('/login',
  passport.authenticate('local', {
    // successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
  }),
  function (req, res) {
    let redirectTo = '/dashboard';
    if (req.session.reqUrl) {
      redirectTo = req.session.reqUrl; // If our redirect value exists in the session, use that.
      req.session.reqUrl = null; // Once we've used it, dump the value to null before the redirect.
    }
    res.redirect(redirectTo);
  }
);

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