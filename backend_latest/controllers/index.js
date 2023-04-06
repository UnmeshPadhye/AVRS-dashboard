const express = require('express');
const router = express.Router();

const authController = require('./authController');
const userController = require('./userController')

router.use('/auth', authController);
router.use('/user', userController)

module.exports = [
    router
];
