const express = require('express'),
    config = require('./config/settings'),
    app = express();

// middlewares
app.use(require('./src/api/middlewares/response'));

// routes
require('./src/api/routes/ping')(app);
require('./src/api/routes/set')(app);

require('./mcu')(config);

app.listen(config.port, () => {
    console.log(`server on:${config.port}`);
});