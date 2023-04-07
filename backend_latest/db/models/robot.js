const mongoose = require('mongoose');
const { Schema } = mongoose;

// Sensor Schema
const sensorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
    },
    status: {
        type: String,
    },
    value: {
        type: String,
    },
    timestamp: {
        type: Date
    },
});

// Logs Schema
const logSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    message: {
        type: String,
        required: true
    },
    severity: {
        type: String,
        enum: ['Info', 'Warning', 'Error']
    },
    robot_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Robot'
    }
});

// Notifications Schema
const notificationSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    severity: {
        type: String,
        enum: ['Info', 'Warning', 'Error']
    },
    timestamp: {
        type: Date,
    },
});

// Robot Model schema
const robotSchema = new Schema({
    name: { type: String, required: true },
    owner: { type: mongoose.Types.ObjectId, ref: 'User' },
    model: { type: String, required: true },
    manufacturer: { type: String, required: true },
    serialNumber: { type: String, required: true },
    height: { type: String, required: true },
    mass: { type: String, required: true },
    status: { type: String, enum: ['Active', 'Inactive'], required: true },
    description: { type: String, required: true },
    sensors: [sensorSchema],
    logs: [logSchema],
    notifications: [notificationSchema]
});

module.exports = mongoose.model('Robot', robotSchema);
