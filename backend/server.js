const express = require('express')
const mongoose  = require('mongoose')
const cors = require('cors')
const logger = require('morgan')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
require ('./config/passport')
require('dotenv').config()

//passport
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const {verifyCallback} = require('./config/passport')

const User = require('./models/users')



const port = process.env.PORT
const MONGOURL = process.env.MONGOURI
const app = express()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// mongodb store
const store = new MongoDBStore({
    uri: MONGOURL,
    collection: 'sessions'
})

// Catch errors
store.on('error', function(error) {
  console.log(error);
});

// use sessions
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: store
}))

// passport js
app.use(passport.initialize())
app.use(passport.session())
// const strategy = new LocalStrategy(verifyCallback)
// passport.use(strategy)
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// passport.serializeUser((user, done) =>{
//     done(null, user.id)
// });

// passport.deserializeUser((userId, done) =>{
//     User.findById(userId)
//         .then(user =>{
//             done(null, user)
//         })
//         .catch(err => done(err))
// });


// import routes
const authRouter = require('./routes/auth')
// use routes
app.use('/api/users', authRouter)


// connect to mongo db
mongoose.connect(MONGOURL)
    .then(() => {
        app.listen(port, console.log(`server running ${port}` ))
    })
    .catch((error) => {console.log(error)})

