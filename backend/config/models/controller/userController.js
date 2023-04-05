const asyncHandler = require('express-async-handler')
const User = require('../dbmodels/usermodel')
const userdata = asyncHandler(async(req,res)=>{
    const {name,Email,password,PhoneNumber,isAdmin} = req.body;
    const userExists = await User.findOne({name});
    if(userExists){
       res.status(400).json({result:"user exists"})
       throw new Error ("user exists"); 
    }
    const user = await User.create(
        {
          name,
          Email,
          PhoneNumber,
          password,
          isAdmin,
        }
    );
    if(user)
    {
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.Email,
            PhoneNumber:user.PhoneNumber,
            isAdmin:user.isAdmin,
        })
    }
    else{
        res.status(400);
    }
}); 
module.exports=userdata