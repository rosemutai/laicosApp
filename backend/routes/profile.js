const express = require("express");
// const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
const profile = express.Router();

const User = require('../models/users')

// const checkIsAutenticated = () =>{
//     if req.is
// }

profile.get('/profile', async (req, res) => {
    
console.log(req.session.profile)
}
)
    // await User.findOne(
        

    //     {username: req.session.passport.user.username},
            
    //     function(err, user){
    //         if(err){
    //             console.log(err)
    //         }

    //         const { email} = user
    //         console.log(user)
    //         res.status(200).send({
    //              email
    //         })
    //     }
    // )
        



module.exports = profile