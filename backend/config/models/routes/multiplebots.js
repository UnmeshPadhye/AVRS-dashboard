const express = require('express');
const robotdataController = require('../controller/multirobot');

const router = express.Router();

router.route('/').post(robotdataController);

module.exports = router;
