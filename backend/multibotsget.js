const asyncHandler = require('express-async-handler')
const Droid = require('./config/models/dbmodels/multirobot')
const Multibotget = asyncHandler(async(req,res) => {
    console.log("enteringher")
    console.log(req.params)
    const { name } = req.params;
    console.log(name)
    const user = await Droid.findOne({ name });
  
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    res.status(200).json(user);
  });
module.exports = Multibotget