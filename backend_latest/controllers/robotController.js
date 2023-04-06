const express = require('express');
const router = express.Router();

const displayMessage = (req, res) => {
    // const { id } = req.body
    res.send('Robot Controller');
};

router.get('/', displayMessage);

module.exports = router;