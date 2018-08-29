const config = {
    port: 3001,
    token_pass: 'ts&tm_tg@2018!#',
    mqtt: process.env.MQTT_URL || 'mqtt://localhost:1883',
    redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: process.env.REDIS_PORT || 6379
    },
    postgres: {
        host: process.env.PG_HOST || 'localhost',
        port: process.env.PG_PORT || '5432',
        database: process.env.PG_DATABASE || 'tg',
        user: process.env.PG_USER || 'postres',
        password: process.env.PG_PASSWORD || 'teste',
    },
    configEmail: {
        service: "gmail",
        auth: {
            user: "moreira.g.thiago@gmail.com",
            pass: "t@moreira2018"
        }
    }
}

module.exports = config;