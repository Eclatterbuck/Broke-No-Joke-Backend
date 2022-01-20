const express = require("express");
const dbConnect = require("./src/dbConnect");

const app = express();

//dbConnect
dbConnect();


module.exports = app;


//MONGO DB NEW DATABASE PASSWORD
//QXcKCGYU6ZC0D5O2