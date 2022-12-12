const express = require('express')
const app = express()

const logger = require('morgan')
const mongoose  = require('mongoose')
const cors = require('cors')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)

const passport = require('./Authth')
require('dotenv').config()

// mongodb store
const MONGOURL = process.env.MONGOURI
const store = new MongoDBStore({
    uri: MONGOURL,
    collection: 'sessions'
})

// Catch errors
store.on('error', function(error) {
  console.log(error);
});


// passport js
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: store
}))
app.use(passport.initialize())
app.use(passport.session())



app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors())

// use routes
const Authentication = require('./routes')
app.use('/api/users', Authentication)


// connect to mongo db
const port = process.env.PORT
mongoose.connect(MONGOURL)
    .then(() => {
        app.listen(port, console.log(`server running ${port}` ))
    })
    .catch((error) => {console.log(error)})
