const express = require('express');
const router = express.Router();

const displayMessage = (req, res) => {
    res.send('Authentication Controller');
};

router.get('/login', displayMessage);

module.exports = router;