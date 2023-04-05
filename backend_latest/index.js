const express = require('express');
const app = express();
const PORT = 8080;

// const apiRouter = require('./routes/api');

app.use(express.json());
// app.use('/api', apiRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
