const express = require('express');
const app = express();
const mongoDB = require('./db/index');
// const RCL_node = require('./config/init-ros')
const controllers = require('./routes/apiRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', ...controllers);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
