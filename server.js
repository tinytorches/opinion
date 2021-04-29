//Jeremy adding some requirements preliminarily
//installed express -J
//installed mongoose -J

const express = require("express");
const app = express();
// const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
// const mainRoutes = require(".routes/main"); // commented to run server

// app.use("/", mainRoutes);

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

connectDB(); // invoking the function that connects to the database

//Static Folder
app.use(express.static("public"));

// Setup for EJS
app.set('view engine', 'ejs')

// Error: Cannot find module '.routes/main' when trying to run server 🤔
// app.use('/', mainRoutes)

// Middleware function in Express parses information from html forms 
app.use(express.json())

app.get('/views', async (req, res) => {
    console.log("Database_URL")
})

app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});
