const Sequelize = require("sequelize");
const db = new Sequelize('tg', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    quoteIdentifiers: false,
    logging: false,
    define: {
        freezeTableName: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = {
    Sequelize,
    db
};