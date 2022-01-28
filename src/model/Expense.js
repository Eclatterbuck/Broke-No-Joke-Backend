const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

//schema


const expenseSchema = mongoose.Schema(
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
      default: "expense",
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
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    }
   
);

//Pagination

expenseSchema.plugin(mongoosePaginate);

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;