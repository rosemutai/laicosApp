const express = require("express");
const login = express.Router();

//Passport file for login/register
const passport = require("../Authth");

//Login passport authentication
login.post("/login", function (req, res) {
  passport.authenticate("local-login", function (error, user, info) {
    if (error) {
      return res.status(500).json({
        message: error || "Something happend",
        error: error.message || "Server error",
      });
    }

    req.logIn(user, function (error, data) {
      if (error) {
        return res.status(500).json({
          message: error || "Something happend",
          error: error.message || "Server error",
        });
      }
      user.isAuthenticated = true;
      // return res.redirect('/profile')
      //  return res.redirect(`/profile/${req.session.passport.user.username}`)
    });

    
    // return res.redirect(`/profile/${username}`)
    return res.json(user);
  })(req, res);
});

module.exports = login;