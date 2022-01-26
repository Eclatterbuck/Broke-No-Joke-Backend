
const expressAsyncHandler = require("express-async-handler");
const Income = require("../../model/Income");

//create 

const createIncCtrl = expressAsyncHandler(async (req, res) =>{
   const {title, amount, description, user} = req.body;
   try {
        const income = await Income.create({
            title,
            amount,
            description,
            user,
        });
        res,json(income);
   } catch (error) {
        res.json(error);
   }

});

//fetch all income
//Pagination is used to limit income on a page Page was used and passed as a query string to get additional objects on a page


const fetchAllIncCtrl = expressAsyncHandler(async (req, res) => {
  console.log(req?.user);
  const { page } = req.query; //destructure to get a number
  try {
    const income = await Income.paginate(
      {},
      { limit: 10, page: Number(page), populate: "user" }
    );
    res.json(income);
  } catch (error) {
    res.json(error);
  }
});



  //fetching a single income
//fetch single income
const fetchIncDetailsCtrl = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params;
  
    try {
      const income = await Income.findById(id);
      res.json(income);
    } catch (error) {
      res.json(error);
    }
  });

  //updating a single income

  //new was used to return the updated version of the income

const updateIncCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;
  const {title, amount, description, user} = req.body;
  try {
     const income = await income.findByIdAndUpdate(
       id, 
       {
        title,
        description,
        amount,
     },
     { new: true }
     );
     res.json(income);
  } catch (error) {
    res.json(error);
  }
});


//delete
const deleteIncCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;

  try {
    const income = await Income.findByIdAndDelete(id);
    res.json(income);
  } catch (error) {
    res.json(error);
  }
});



module.exports = { createIncCtrl, fetchAllIncCtrl, fetchIncDetailsCtrl, updateIncCtrl, deleteIncCtrl, };