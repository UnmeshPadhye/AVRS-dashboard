const express = require('express')
const logindata = require('../controller/useraccess')

const router = express.Router()
router.route('/').post(logindata)
module.exports=router