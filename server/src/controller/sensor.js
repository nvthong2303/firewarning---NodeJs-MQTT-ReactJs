const sensorService = require('../service/sensor')
const { publish } = require('../mqtt/client')

const MQTT_URL = process.env.MQTT_URL

const getAllDataDHT11 = async (req, res) => {
    console.log('client get data')
    try {
        const sensors = await sensorService.findAllSensors()
        res.status(200).json({ success: true, message: 'get all sensors ', sensors })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'internal server error' })
    }
}

module.exports = { getAllDataDHT11 }



