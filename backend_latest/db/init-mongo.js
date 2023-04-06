const mongoose = require('mongoose');
const config = require('../config/db.mongo.json');

mongoose.connect(config.dev.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB \n\n', err));

module.exports = mongoose;
