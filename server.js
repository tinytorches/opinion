//Jeremy adding some requirements preliminarily
//installed express -J
//installed mongoose -J
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('.routes/main')


app.use('/', mainRoutes)




app.listen(
    PORT,
    console.log(`Server running on port ${PORT}`)
)
