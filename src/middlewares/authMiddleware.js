const expressAsyncHandler = require("express-async-handler");

const jwt = require("jsonwebtoken");
const User = require("../model/User"); //know which user logged in for author

const authMiddleware = expressAsyncHandler(async (req, res, next) => {
    let token;
        
    if(req?.headers?. authorization?.startsWith('Bearer')){
        token = req?.headers?.authorization?.split(" ")[1];
        
        try {
            if(token) {
                const decodedUser = jwt.verify(token, process.env.JWT_KEY);
      //finding the user who makes post request.        
          const user = await User.findById(decodedUser?.id);
          console.log(user);
    //attaching user to the request object 
            req.user = user;
                next();
            }
        } catch (error) {
            throw new Error("Not Authorized token expired")
            
        }
    } else {
        throw new Error("No token attached to header");
    }

});

module.exports = authMiddleware;