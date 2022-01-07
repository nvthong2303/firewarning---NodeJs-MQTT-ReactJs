const express = require('express')
const router = express.Router()
const sensorController = require('../controller/sensor')

router.get('/', sensorController.getAllDataDHT11)

module.exports = router