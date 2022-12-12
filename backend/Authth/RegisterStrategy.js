const Strategy = require("passport-local").Strategy;
const User = require("../models/users");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const SignupStrategy = new Strategy(
  { passReqToCallback: true },
  function (req,username, password, done) {
    User.findOne({ username })
      .lean()
      .exec((err, user) => {
        if (err) {
          return done(err, null);
        }

        if (!user) {
          const encryptedPassword = bcrypt.hashSync(password, salt);
          const { username, email } = req.body;

          let newUser = new User({
            username,
            email,
            password: encryptedPassword,
           
          });

          newUser.save((error, inserted) => {
            if (error) {
              return done(error, null);
            }

            return done(null, inserted);
          });
        }
        if (user) {
          return done("User already exist. Please login!", null);
        }
      });
  }
);

module.exports = SignupStrategy;