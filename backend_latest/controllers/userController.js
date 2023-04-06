const express = require('express');
const router = express.Router();

const displayMessage = (req, res) => {
    res.send('User Controller');
};

router.get('/', displayMessage);

module.exports = router;