const _mqtt = require('mqtt');

module.exports = (config) => {

    const mqtt = _mqtt.connect(config.mqtt);

    mqtt.on('connect', () => {
        mqtt.subscribe('energia');
    });

    mqtt.on('error', (err) => {
        console.log(`mqtt connection error: ${err}`);
    });

    mqtt.on('message', function (topic, message) {
        // console.log(`message: ${message}`);
        // const obj = JSON.parse(message.toString());
    });
}