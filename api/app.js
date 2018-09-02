const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    config = require('./config/settings'),
    mongo = require("./config/mongo"),
    app = express();

(async () => {
    try {
        // Mongo
        await mongo.connect();
        const postgres = require("./config/sequelize");
        await postgres.connect();

        // middlewares
        app.use(cors());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(require('./src/api/middlewares/response'));

        // routes
        require('./src/api/routes/ping')(app);
        require('./src/api/routes/set')(app);

        // require('./mcu')(config);

        app.listen(config.port, () => {
            console.log(`server on: ${config.port}`);
        });
    }
    catch (ex) {
        console.error(ex);
    }
})();