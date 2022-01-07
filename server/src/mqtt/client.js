const mqtt = require('mqtt')
const { json } = require('body-parser')
const sensorService = require('../service/sensor')

const options = {
    host: 'broker.hivemq.com',
    port: 1883,
    protocol: 'mqtt',
}

const client = mqtt.connect(options);

client.on('connect', () => {
    console.log('connected to mqtt broker');
    client.subscribe('/topic/qos2303');
})

client.on('error', (err) => {
    console.log(err)
})

client.on('message', (topic, msg) => {
    const data = JSON.parse(msg.toString())
    sensorService.updateSensor(data)
})

const publish = (topic, data) => {
    client.publish(topic, JSON.stringify(data))
}

module.exports = { client, publish }

