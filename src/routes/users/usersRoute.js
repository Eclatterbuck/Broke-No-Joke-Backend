const express = require('express');
const { registerUser, fetchUsersCtrl, loginUserCtrl, } = require("./controllers/users/usersCtrl")
const userRoute = express.Router();

//calling controller function
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUserCtrl);
userRoute.get("/users", fetchUsersCtrl);



module.exports = userRoute;