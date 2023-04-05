const express = require('express')
const userdata = require('../controller/userController')

const router = express.Router()
router.route('/').post(userdata)
module.exports=router