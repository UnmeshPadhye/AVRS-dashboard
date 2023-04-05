const mongoose = require('mongoose');
const logsSchema = new mongoose.Schema({
    // your schema fields here
    id:Number,
    mesage:String
  }, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  });
const notificationSchema = new mongoose.Schema({
    // your schema fields here
    id:Number,
    mesage:String
  }, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  });

const imageSchema = new mongoose.Schema({
  url: String,
  altText: String
});

const sensorSchema = new mongoose.Schema({
  name: String,
  type: String,
  value: Number,
  images: [imageSchema]
});

const droidSchema = new mongoose.Schema({
  id: Number,
  name: String,
  model: String,
  manufacturer: String,
  serialNumber: String,
  height: String,
  mass: String,
  status: String,
  description: String,
  sensors: [sensorSchema],
  logs:[logsSchema],
  notifications:[notificationSchema]
});

const Droid = mongoose.model('Droid', droidSchema);

module.exports = Droid;

