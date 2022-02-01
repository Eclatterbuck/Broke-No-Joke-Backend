/////DEPENDENCIES

// get .env variables
require('dotenv').config();
// pull PORT from .env, give default value of 3001
const { PORT = 3000, DATABASE_URL } = process.env;

const express = require('express');
const dotenv = require('dotenv');
// const colors = require('colors')
const morgan = require('morgan');
// const connectDB = require('./config/db')
const path = require('path')
// import mongoose
const mongoose = require('mongoose')

// dotenv.config({path: './config/config.env'})

// connectDB();

const transactions = require('./routes/transactions')

const app = express()
app.use(express.json())

if(process.env.NODE_ENV === 'development'){
     app.use(morgan('dev'))
}

app.use('/api/v1/transactions', transactions)

if(process.env.NODE_ENV === 'production'){
     app.use(express.static('../client/build'))
     app.get('*', (req, res) => res.sendfile(path.resolve('client'
     ,'build', 'index.html')))
}

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
// Establish Connection
mongoose.connect(DATABASE_URL)
// Connection Events
mongoose.connection
  .on("open", () => console.log("You are connected to MongoDB"))
  .on("close", () => console.log("You are disconnected from MongoDB"))
  .on("error", (error) => console.log(error))



// server.listen(PORT, console.log(`Server is running on port ${PORT}`))
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
