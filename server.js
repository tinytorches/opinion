//Jeremy adding some requirements preliminarily
//installed express -J
//installed mongoose -J
const express = require('express')
const app = express()
const MongoCLient = require('mongodb').MongoClient 
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')

let db,
    dbConnectionStr = process.env.DB_STRING, 
    dbName = 'noCommentTwitter'

MongoClient.connect(dbConnectionStr, {useUnifiedTopology: true})
    .then(client => {
        console.log(`Hey, connected to ${dbName} database`)
        db = client.db(dbName)
    })
    .catch(err => {
        console.log(err)
    })

// Setup for EJS
app.set('view engine', 'ejs')

connectDB(); // invoking the function that connects to the database

// Error: Cannot find module '.routes/main' when trying to run server 🤔
app.use('/', mainRoutes)

// Middleware function in Express parses information from html forms 
app.use(express.json())

app.get('/views', async (req, res) => {
    console.log("Database_URL")
})

app.listen(
    PORT,
    console.log(`Server running on port ${PORT}`)
)

