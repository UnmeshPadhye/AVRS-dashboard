const express = require('express');
const router = express.Router();

const authController = require('./authController');
const userController = require('./userController')
const robotController = require('./robotController')

router.use('/auth', authController);
router.use('/user', userController);
router.use('/robots', robotController);

module.exports = [
    router
];
