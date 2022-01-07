require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const sensorRoute = require('./src/router/sensor')

const app = express()
const PORT = 5000

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected database");
}).catch((err) => {
    console.log(err);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: '*' }))


app.use('/sensor', sensorRoute)

app.listen(PORT, () => console.log(`server listening on ${PORT}`))