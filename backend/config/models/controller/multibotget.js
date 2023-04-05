const asyncHandler = require('express-async-handler')
const userData = require('../dbmodels/multirobot')
const Multibotget = asyncHandler(async(req,res) => {
    console.log("enteringher")
    console.log(req.body)
    const { name } = req.body;
    console.log(name)
    const user = await userData.findOne({ name });
  
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    res.status(200).json(user);
  });
module.exports = Multibotget