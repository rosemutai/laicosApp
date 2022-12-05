const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/users')

const validPassword = require('../lib/passportUtil').validPassword

const verifyCallback = async (username, password, done) =>{

    const user = await User.findOne({username: username})

    if(!user) { return done(null, false)}
    const isValid = validPassword(password, user.hash, user.salt)

    if(isValid){
        return done(null, user)
    }else{
        return done(null, false)
    }

}

const strategy = new LocalStrategy(verifyCallback)
passport.use(strategy)


passport.serializeUser((user, done) =>{
    done(null, user.id)
});

passport.deserializeUser((userId, done) =>{
    User.findById(userId)
        .then(user =>{
            done(null, user)
        })
        .catch(err => done(err))
});