const expressAsyncHandler = require("express-async-handler");
const User = require("../../model/User");


//Register User

 const registerUser = expressAsyncHandler(async (req, res) => {
    const {email, firstname, lastname, password } = req?.body;
  //check if user exists
    const userExists = await User.findOne({ email });
    if(userExists) throw new Error('User already exists. DO better');     

    try {
    const user = await User.create({ email, firstname, lastname, password });
    res.status(200).json(user);
   } catch (error) {
       res.json(error);
   }
});

//fetching all users

const fetchUsersCtrl = expressAsyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.json(error);
  }
});

//login user
const loginUserCtrl = expressAsyncHandler(async (req, res) => {
  const { email, password } = req?.body;
//Finding the user in database
const userFound = await User.findOne({ email});
//A promise always needs await
if( userFound && (await userFound?.isPasswordMatch(password))){
  res.json({
    _id: userFound?._id,
    firstname: userFound?.firstname,
    lastname: userFound?.lastname,
    email: userFound?.email,
    isAdmin: userFound?.isAdmin,
    token: generateToken(userFound?._id)
  });
}
res.status(401);
throw new Error('Invalid Login credentials')
});


module.exports = { registerUser, fetchUsersCtrl, loginUserCtrl };