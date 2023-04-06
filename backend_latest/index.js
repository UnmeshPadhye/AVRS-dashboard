const express = require('express');
const app = express();
const router = require('./routes/apiRoutes');
const mongodb = require('./db/index')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
