const express = require('express')
const Multibotget = require('../controller/multibotget')

const router = express.Router()
router.route('/').get(Multibotget)
module.exports=router