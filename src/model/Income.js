const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

//schema
const incomeSchema = mongoose.Schema(
  {
    title: {
      required: [true, "Title  is required"],
      type: String,
    },
    description: {
      required: [true, "Description is required"],
      type: String,
    },
    type: {
      type: String,
      default: "income",
    },
    amount: {
      required: [true, "Amount is required"],
      type: Number,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },

    //Associating User to a different income
    user: {
      type: mongoose.Schema.Types.ObjectId, //MUST BE MONGODB ID
      ref: "User",
      required: [true, "User ID is required"],
    },
  },
  {
    timestamp: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    }
    }
   
);

//Pagination

incomeSchema.plugin(mongoosePaginate);


const Income = mongoose.model("Income", incomeSchema);

module.exports = Income;