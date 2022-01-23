const express = require('express');
const { registerUser } = require("./controllers/users/usersCtrl")
const userRoute = express.Router();

//calling controller function
userRouter.post("/register", registerUser);



module.exports = userRoute;