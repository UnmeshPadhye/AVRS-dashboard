const express = require('express');
const router = express.Router();

const authController = require('./authController');

router.use('/auth', authController);

module.exports = [
    router
];
