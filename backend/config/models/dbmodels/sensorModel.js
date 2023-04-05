const mongoose = require('mongoose')
const sensorSchema = mongoose.Schema(
    {
        name:{
            type : String,
            required:true,
        },
        type:{
            type:String,
            required:true,
        },
        data:{
            type:String,
            required: false,
        }
    }
);
 const Sensor = mongoose.model('Sensor',sensorSchema);
 module.exports = Sensor;