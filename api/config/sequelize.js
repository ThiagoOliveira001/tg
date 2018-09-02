const { postgres } = require("./settings");
Sequelize = require("sequelize");

const db = new Sequelize(postgres.database, postgres.user, postgres.password, {
    host: postgres.host,
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

async function connect() {
    await db.authenticate();
    console.log('PostgreSQL connection is established');
}

module.exports = {
    Sequelize,
    db,
    connect
};