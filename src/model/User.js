const mongoose = require("mongoose"); //used to model our data
const bcrypt = require("bcryptjs");

//schema gives blueprints

const userSchema = mongoose.Schema({
    firstname:{
        required: [true, "First name is needed" ],
        type: String,
    },
    lastname: {
        required: [true, "Last name is needed"],
        type: String,
    },
    email: {
        required: [true, "Email name is needed"],
        type: String,
      },
      password: {
        required: [true, "Pasword name is needed"],
        type: String,
      },
    //   isAdmin: {
    //     type: Boolean,
    //     default: false,
    //   },
    },{
        timestamp: true,
});

// Method to set salt and hash the password for a user 
//Salt is used to hash user passwords.

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//Password Verification compare was used to compare what user entered.

userSchema.methods.isPasswordMatch = async function (enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password);
}



//compiling schema into model and passing in User schema
const User = mongoose.model("User", userSchema);
module.exports = User;