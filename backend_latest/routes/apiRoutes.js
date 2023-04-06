const express = require('express');
const router = express.Router();
const apiRouter = require('../controllers');

router.use('/', router);

module.exports = apiRouter;
