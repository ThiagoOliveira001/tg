const config = {
    port: 3001,
    mqtt: process.env.MQTT_URL || 'mqtt://localhost:1883',
    redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: process.env.REDIS_PORT || 6379
    }
}

module.exports = config;