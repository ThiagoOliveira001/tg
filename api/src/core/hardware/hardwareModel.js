const { Sequelize, db } = require("../../../config/sequelize");

const Hardware = db.define('hardware', {
    idUsuario: Sequelize.INTEGER,
    modelo: Sequelize.CHAR,
    mac: Sequelize.STRING
}, { timestamps: false });

module.exports = Hardware;