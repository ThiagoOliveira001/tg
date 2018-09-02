const config = {
    port: 3001,
    Mongo: {
        host: process.env.MONGO_HOST || "localhost",
        user: process.env.MONGO_USER || "mongodev",
        password: process.env.MONGO_PASSWORD || "!Mongo@Dev1",
        database: process.env.MONGO_DATABASE || "tg",
        port: process.env.MONGO_PORT || "27017",
        auth: process.env.MONGO_AUTH || "admin",
        getUri: () => {
            return `mongodb://${config.Mongo.host}:${config.Mongo.port}/${config.Mongo.database}`;
        }
    }
}

module.exports = config;