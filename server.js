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
const mainRoutes = require("./routes/main")

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// invoking the function that connects to the database
connectDB(); 

// Setup for EJS
app.set('view engine', 'ejs')

//Static Folder
app.use(express.static("public"));

// Body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// Error: Cannot find module '.routes/main' when trying to run server 🤔
// app.use('/', mainRoutes)

// Middleware function in Express parses information from html forms 


//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);

// Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});


// app.set('view engine', 'ejs') //setting our app to read our EJS file
// app.use(express.static('public')) // points to our static pages that will be viewed client-side
// app.use(express.urlencoded({ extended: true })) // parses encrypted data
// app.use(express.json()) // converted urlencoded data to JSON format

// // Sessions
// // syntax from connect-mongo, stores our session
// app.use(
//     session({
//       secret: 'keyboard cat',
//       resave: false,
//       saveUninitialized: false,
//       store: new MongoStore({ mongooseConnection: mongoose.connection }),
//     })
//   )
  
// // Passport middleware
// app.use(passport.initialize()) // initial authentification
// app.use(passport.session()) // holds user session ID

  
// app.use('/', homeRoutes) // invoking the imported module from routes folder
// app.use('/auth', authRoutes) // invoking the imported module from auth folder
// app.use('/todos', todoRoutes) // invoking the imported module from todos folder

// // listens for requested port
// app.listen(process.env.PORT, ()=>{
//     console.log('Server is running, you better catch it!')
// }) 