const express = require('express');
const router = express.Router();

const displayMessage = (req, res) => {
    console.log('GET /auth');
    res.send('Authentication Controller');
};

router.get('/', displayMessage);

module.exports = router;