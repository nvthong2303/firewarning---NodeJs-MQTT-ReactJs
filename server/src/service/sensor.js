const Sensor = require('../model/sensor');

const findAllSensors = async () => {
    try {
        const result = await Sensor.find({}, { data: { $slice: -10 } })
        return result
    } catch (error) {
        throw error
    }
}

const updateSensor = async (data) => {
    try {
        let newData = new Sensor({
            deviceId: data.deviceId,
            deviceType: data.deviceType,
            data: data.data
        })
        await newData.save()
        console.log('new data save success', newData.data)
    } catch (error) {
        console.log(error)
        return false
    }
}

module.exports = { findAllSensors, updateSensor }