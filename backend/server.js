const express = require('express')
const mongoose  = require('mongoose')
const cors = require('cors')
const logger = require('morgan')
const passport = require('passport')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const LocalStrategy = require('passport-local').Strategy;
require ('./config/passport')
require('dotenv').config()

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


app.use(passport.initialize())
app.use(passport.session())
// passport.use(new LocalStrategy(User.authenticate()))


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

