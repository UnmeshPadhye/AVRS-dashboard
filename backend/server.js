// const express = require("express");
// const app = express();
// app.get('/',(req,res)=>{
//     res.send("everything looks good");
// });
// app.listen(console.log("server started"+ app.address().port));
var express = require('express');
const Multibotget = require('./config/models/routes/multibotget');
var notes = require('./notes')
var connectDB = require('./config/db')
const sensorRoutes = require('./config/models/routes/sensorsRoutes')
const userdata = require('./config/models/routes/userRoutes')
const useraccess = require('./config/models/routes/loginuser')
const multiplerobots = require('./config/models/routes/multiplebots')
var http = require('http');

var app = express();
var server = http.createServer(app);

connectDB();

app.use(express.json());
app.get('/', function (req, res) {
  res.send("Hello World!");
});

app.get('/api/notes', (req, res) => {
  res.json(notes);
})
app.use('/api/botinfo', Multibotget);
app.use('/api/sensors', sensorRoutes);
app.use('/api/users', userdata);
app.use('/api/access', useraccess)
app.use('/api/multiplebots', multiplerobots);
server.listen(3000);
console.log('Express server started on port %s', server.address().port);