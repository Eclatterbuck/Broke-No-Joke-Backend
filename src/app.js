const express = require("express");
const dbConnect = require("./src/dbConnect");
// const { registerUser } = require("./controllers/users/usersCtrl");
const { errorHandler } = require("./middlewares/errorMiddleware");
const userRoute = require("./routes/users/usersRoute");
const app = express();


//Middleware

const logger = (req, res, next) =>{
    console.log('I am a logger');
    next();
};

//dbConnect
dbConnect();

//middlewares
app.use(express.json());


//routes
app.use('/', userRoute);

//Error Handler
app.use(errorHandler);


//route to get from server to register user name and password  
// app.post("/register", registerUser);

// app.post('/login', (req, res) => {
//     res.json({ user: "admin" });
//    });

//    app.delete('/:id', (req, res) => {
//     res.json({ user: "admin" });
//    });

//    app.put('/:id', (req, res) => {
//     res.json({ user: "admin" });
//    });

module.exports = app;


//MONGO DB NEW DATABASE PASSWORD
//QXcKCGYU6ZC0D5O2