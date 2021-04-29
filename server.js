//Jeremy adding some requirements preliminarily
//installed express -J
//installed mongoose -J
const express = require('express')
const app = express()
const PORT = process.env.PORT || 2121
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('.routes/main')
const authRoutes = require('./routes/auth')

require('dotenv').config({path: './config/.env'})
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public')) 
app.use(express.urlencoded({ extended: true })) 
app.use(express.json())

app.use(
    session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
)

app.use('/', mainRoutes)




app.listen(
    PORT,
    console.log(`Server running on port ${PORT}`)
)
