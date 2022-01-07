const mqtt = require('mqtt')

const options = {
    host: 'broker.hivemq.com',
    port: 1883,
    protocol: 'mqtt',
}

const client = mqtt.connect(options);

client.on('connect', () => {
    console.log('connected to mqtt broker');
})

client.subscribe('/topic/qos2303/warning');

client.on('error', (err) => {
    console.log(err)
})

client.on('message', (topic, message) => {
    console.log('Received message:', topic, message.toString());
})

setInterval(() => {
    const data = {
        deviceId: "3e31d3bd-e0a6-4497-8b48-cef5c6f3547b",
        deviceType: "ESP FIRE ALARM",
        data: {
            temperature: Math.random() * (40 - 10) + 10,
            humidity: Math.random() * 100,
            location: {
                latitude: "21.027763",
                longitude: "105.834160"
            },
            time: Date.now(),
            ch4: Math.random() * (40 - 10) + 10,
            co: Math.random() * (40 - 10) + 10,
            lpg: Math.random() * (40 - 10) + 10
        }
    }
    client.publish('/topic/qos2303', JSON.stringify(data))
}, 5000)
