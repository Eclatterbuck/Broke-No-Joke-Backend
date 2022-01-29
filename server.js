/////DEPENDENCIES

// const http = require("http");
// get .env variables
require('dotenv').config()

const { PORT = 3000, DATABASE_URL } = process.env
// const PORT = process.env || 3000
// import express from 'express
const express = require('express')
// create application object 
const app = express();
// const app = require("./app");
// import mongoose
const mongoose = require('mongoose')



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

//   const dbConnect = async () => {
//     try {
//       await mongoose.connect(process.env.MONGO_URL, {   
//         useUnifiedTopology: true,
//         useNewUrlParser: true,
//       });
//       console.log(`DB connected Successfully`);
//     } catch (error) {
//       console.log(`Error ${error.message}`);
//     }
//   };
  
//   module.exports = dbConnect;



// const server = http.createServer(app); //passing in Express to make it advance

// server.listen(PORT, console.log(`Server is running on port ${PORT}`))
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
