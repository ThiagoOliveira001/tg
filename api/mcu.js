const _mqtt = require('mqtt');
const consumo = require('./src/core/consumo/consumoRepository');

module.exports = (config) => {

    const mqtt = _mqtt.connect(config.mqtt);

    mqtt.on('connect', () => {
        mqtt.subscribe('energia');
    });

    mqtt.on('error', (err) => {
        console.log(`mqtt connection error: ${err}`);
    });

    mqtt.on('message', function (topic, message) {
        console.log(`message: ${message}`);
        let obj = JSON.parse(message.toString());
        obj.data = new Date();
        obj.hora = obj.hora.split(":");
        obj.data.setUTCHours(obj.hora[0],obj.hora[1],obj.hora[2]);
        consumo.cadastrar(obj);    
    });
}