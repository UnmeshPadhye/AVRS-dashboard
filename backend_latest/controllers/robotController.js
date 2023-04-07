const express = require('express');
const router = express.Router();

// Shemas link to MongoDB Cluster and Documents
const Robot = require('../db/models/robot')

const getAllBots = async (req, res) => {
    // const { userID } = req.body
    console.log(` GET /robot`);

    try {
        const robots = await Robot.find();
        res.status(200).json({ robots });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

const addBot = async (req, res) => {
    // const { userID } = req.body
    console.log(` POST /robot`);

    try {
        const { name, owner, model, manufacturer, serialNumber, height, mass, status, description, sensors, logs, notifications } = req.body;

        const robot = new Robot({ name, owner, model, manufacturer, serialNumber, height, mass, status, description, sensors, logs, notifications });
        const savedRobot = await robot.save();
        res.status(201).json(savedRobot);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

router.get('/', getAllBots);
router.post('/', addBot)

module.exports = router;