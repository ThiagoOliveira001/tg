const Settings = require("./settings"),
    mongoose = require("mongoose");

async function connect() {

    const options = {
        useNewUrlParser: true,
        user: Settings.Mongo.user,
        pass: Settings.Mongo.password,
        reconnectInterval: 500,
        reconnectTries: Number.MAX_VALUE,
        poolSize: 10,
        auth: { authdb: Settings.Mongo.auth }
    }

    setEvents(mongoose.connection);
    await mongoose.connect(Settings.Mongo.getUri(), options);
    await getParametersAndUpdateSettings();
}

function setEvents(conn) {
    conn.on('error', (err) => {
        console.error('MongoDB connection error:', err);
    });

    conn.on('open', () => {
        console.info('MongoDB connection is established');
    });

    conn.on('reconnected', () => {
        console.info('MongoDB reconnected!');
    });

    conn.on('disconnected', () => {
        console.error('MongoDB disconnected!');
        connect();
    });
}

async function getParametersAndUpdateSettings() {
    const paramsSchema = new mongoose.Schema();
    let model = mongoose.model("parameters", paramsSchema, "parameters");
    let parameters = await model.findOne();
    Object.assign(Settings, parameters._doc);
}

module.exports = {
    connect
}
