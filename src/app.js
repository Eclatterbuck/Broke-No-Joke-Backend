const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./src/dbConnect");

// const { registerUser } = require("./controllers/users/usersCtrl");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const userRoute = require("./routes/users/usersRoute");
const incomeRoute = require("./routes/income/incomeRoutes");
const expenseRoute = require("./routes/income/expenseRoutes");

const app = express();


//Middleware

const logger = (req, res, next) =>{
    console.log('I am a logger');
    next();
};

//environment
dotenv.config();

//dbConnect
dbConnect();

//middlewares
app.use(express.json());


// user routes

app.use("/api/users", userRoute);

//income routes

app.use("/api/income", incomeRoute);

//expenses Route

app.use("/api/expenses", expenseRoute);


//Error Handler
app.use(notFound);
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