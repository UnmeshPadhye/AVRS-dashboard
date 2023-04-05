const express = require('express')
const sensorData = require('../controller/ssensorController')

const router = express.Router()
router.route('/').post(sensorData)
module.exports=router