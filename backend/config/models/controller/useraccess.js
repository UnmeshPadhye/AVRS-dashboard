const asyncHandler = require('express-async-handler')
const User = require('../dbmodels/usermodel')
const userdata = asyncHandler(async(req,res)=>{
    const {Email,password} = req.body;
    const userExists = await User.findOne({Email});
    if(userExists &&(await User.matchPassword(password))){
       res.json({
           result:"login successful",
       });
    }
    else
    {
        res.status(400).json({result:"Invalid user or password"})
    }
}); 
module.exports=userdata