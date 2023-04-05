const asyncHandler = require('express-async-handler');
const Multibot = require('../dbmodels/multirobot');

const userdata = asyncHandler(async (req, res) => {
    const {name,type,data} = req.body;
    const userExists = await Multibot.findOne({name});
    if(userExists){
        res.status(400).json({result:"user exists"})
        throw new Error ("user exists"); 
     }

  const user = await Multibot.create(
      {
        id: 3,
        name: "T-800",
        model: "Series 800",
        manufacturer: "Cyberdyne Systems",
        serialNumber: "B001",
        height: "1.88 m",
        mass: "200 kg",
        status: "Active",
        description:
            "The T-800 is a fictional cyborg assassin, played by Arnold Schwarzenegger, who first appeared in the 1984 film The Terminator. He has since appeared in multiple sequels and spin-offs, as well as in other media.",
        sensors: [
            {
                id: 1,
                type: "Infrared",
                status: "Active",
                location: "Head",
                description: "Detects heat signatures and body temperature",
            },
            {
                id: 2,
                type: "Motion",
                status: "Inactive",
                location: "Chest",
                description: "Detects movement and speed",
            },
        ],
        logs: [
            {
                id: 1,
                date: "2022-10-01",
                time: "10:30:00",
                message: "T-800 completed mission successfully",
            },
            {
                id: 2,
                date: "2022-10-03",
                time: "13:45:00",
                message: "T-800 encountered resistance and engaged in combat",
            },
        ],
        notifications: [
            {
                id: 1,
                type: "Warning",
                message: "Low battery",
                timestamp: "2022-10-05 18:20:00",
            },
            {
                id: 2,
                type: "Error",
                message: "Malfunction in left arm",
                timestamp: "2022-10-06 09:15:00",
            },
        ],
});

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

module.exports = userdata;
