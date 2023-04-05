const asyncHandler = require('express-async-handler')
const Sensor = require('../dbmodels/sensorModel')
const userdata = asyncHandler(async(req,res)=>{
    const {name,type,data} = req.body;
    const userExists = await Sensor.findOne({type});
    if(userExists){
       res.status(400).json({result:"user exists"})
       throw new Error ("user exists"); 
    }
    const user = await Sensor.create(
        {
          name,
          type,
        }
    );
    if(user)
    {
        res.status(201).json({
            _id:user._id,
            name:user.name,
            data: user.name+"data"+user._id
        })
    }
    else{
        res.status(400);
    }
}); 
module.exports=userdata