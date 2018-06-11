const express = require('express'),
    config = require('./config/settings'),
    app = express();

require('./mcu')(config);

app.listen(config.port, () => {
    console.log(`server on:${config.port}`);
});