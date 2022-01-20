const mongoose = require("mongoose"); //used to model our data

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


//compiling schema into model and passing in User schema
const User = mongoose.model("User", userSchema);
module.exports = User;