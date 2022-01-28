

//Taking id of the user and signing token with a user id

//30 DAYS IS LIMIT THAT PASSWORD IS AVAILABLE

const jwt = require("jsonwebtoken");

const generateToken = id => {
  return jwt.sign({ id }, process.env.JWT_KEY, { expiresIn: "30d" });
};

module.exports = generateToken;