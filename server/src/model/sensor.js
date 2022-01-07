const mongoose = require('mongoose')

const sensor = new mongoose.Schema({
    deviceId: {
        type: String,
        require: true
    },
    deviceType: {
        type: String,
        require: true
    },
    data: {
        type: Object
    }
})

module.exports = mongoose.model('Sensor', sensor)