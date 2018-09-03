//Pacotes do npm para facilitar configuração dos servicos
const _mqtt = require('mqtt'),
    _redis = require('redis');
//Exportando função que configura mqtt e redis
module.exports = (config) => {
    //Passando objetos com configuração para iniciar os servicos
    const mqtt = _mqtt.connect(config.mqtt);
    const redis = _redis.createClient(config.redis.port, config.redis.host);
    //Escutando conexao com mqtt para se inscrever no topico energia
    mqtt.on('connect', () => {
        mqtt.subscribe('energia');
    });
    //Tratando erro de conexao 
    mqtt.on('error', (err) => {
        console.log(`mqtt connection error: ${err}`);
    });

    redis.on('error', (err) => {
        console.log(`redis connection error: ${err}`);
    });
    //Escutando evento message
    mqtt.on('message', function (topic, message) {
        // console.log(`message: ${message}`);
        const obj = JSON.parse(message.toString());
        //Armazenando dados em memoria com redis
        redis.hmset('consumo', obj, (err, reply) => {
            if(err)
                console.log(`err: ${err}`);

            console.log(`data: ${new Date()}`);
        });

        // redis.hgetall('consumo', (err, data) => { console.log('get redis:', data)} );
    });
}