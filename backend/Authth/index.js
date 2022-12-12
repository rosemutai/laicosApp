const passport = require("passport");
const User = require("../models/users")

//Serialize user with passport using hes/her email
passport.serializeUser(function (username, done) {
  done(null, username);
});

//Deserialize user with passport using hes/her email
passport.deserializeUser(function (username, done) {
  done(null, username);
});

//Requiring Login - Register strategy files
const LoginStrategy = require("./LoginStrategy");
const RegisterStrategy = require("./RegisterStrategy");
//Using the above
passport.use("local-login", LoginStrategy);
passport.use("local-register", RegisterStrategy);

module.exports = passport;