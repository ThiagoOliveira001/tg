const _mqtt = require('mqtt');
const consumo = require('./src/core/consumo/consumoRepository');
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

module.exports = (config,io) => {

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
        myEmitter.emit('new', obj);
        consumo.cadastrar(obj);    
    });
    io.use((client, next) => {
        next();
    }).on('connection', (client) => {
        console.log(`User connected ${client.id}`);
        // if (client.handshake.query.id == obj.idUsuario) {
        //     client.emit('consumo-atual', obj);
        // }
        myEmitter.on('new', function(cm) {
            console.log('emit event');
            client.emit('consumo-novo', cm);
        });
        client.on('disconnect', () => {
            console.log(`disconnect ${client.id}`);
        });
    });
}