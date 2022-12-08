const User = require('../models/users')
const validPassword = require('../lib/passportUtil').validPassword

const verifyCallback = async (username, password, done) =>{

    const user = await User.findOne({username: username}, 'username salt hash')

    if(!user) { return done(null, false, { message: "User not found!!" })}
    const isValid = validPassword(password, user.hash, user.salt)

    if(isValid){
        return done(null, user)
    }else{
        return done(null, false)
    }

}

module.exports = {verifyCallback}

