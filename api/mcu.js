const _mqtt = require('mqtt'),
    _redis = require('redis');

module.exports = (config) => {
    const mqtt = _mqtt.connect(config.mqtt);
    const redis = _redis.createClient(config.redis.port, config.redis.host);

    mqtt.on('connect', () => {
        mqtt.subscribe('energia');
    });

    mqtt.on('error', (err) => {
        console.log(`mqtt connection error: ${err}`);
    });

    // redis.on('error', (err) => {
    //     console.log(`redis connection error: ${err}`);
    // });

    mqtt.on('message', function (topic, message) {
        // console.log(`message: ${message}`);
        const obj = JSON.parse(message.toString());

        // redis.hmset('consumo', obj, (err, reply) => {
        //     if(err)
        //         console.log(`err: ${err}`);

        //     console.log(`data: ${new Date()}`);
        // });

        // redis.hgetall('consumo', (err, data) => { console.log('get redis:', data)} );
    });
}