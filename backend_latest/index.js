const express = require('express');
const app = express();
const PORT = 8080;
const router = require('./routes/apiRoutes');

app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
