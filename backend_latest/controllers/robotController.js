const express = require('express');
const router = express.Router();
const http = require('http');
const axios = require('axios');

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

const getZedStream = async (req, res) => {

    /* console.log(` GET -> /robot/live`);

    const options = {
        hostname: '192.168.198.117',
        port: 8000,
        path: '/video_feed',
        method: 'GET',
    };
    // Create a new HTTP request to the ZED camera stream
    const request = http.request(options, (stream) => {
        console.log('Streaming');
        // Set the response headers to indicate that the response is a video stream
        res.setHeader('Content-Type', 'video/mp4');
        // res.setHeader('Transfer-Encoding', 'chunked');
        res.setHeader('Cache-Control', 'no-cache');

        // Pipe the ZED stream into the response to forward it to the frontend server
        stream.pipe(res);
    });
    request.on('error', (err) => {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    });

    request.end(); */
    console.log(` GET -> /robot/live`);

    const streamUrl = 'http://192.168.198.117:8000';

    try {
        const stream = await axios.get(`${streamUrl}/video_feed`);
        const data = stream.data.slice(0, 5 * 1000 * 1000); // send the first 5 seconds of data

        res.writeHead(200, {
            'Content-Type': 'video/mp4',
            'Content-Length': data.length
        });

        console.log(`Stream data format: ${stream.headers['content-type']}`);
        console.log(stream.headers);

        res.write(data, 'binary');
        // res.status(200);
        res.end();
        console.log("Data: ", data.toString(), stream, res);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

router.get('/', getAllBots);
router.post('/', addBot)
router.get('/live', getZedStream)

module.exports = router;