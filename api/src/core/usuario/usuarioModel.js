const { Sequelize, db } = require("../../../config/sequelize");

const Usuario = db.define('usuario', {
    cpfCnpj: Sequelize.STRING,
    tipoPessoa: Sequelize.CHAR,
    email: Sequelize.STRING,
    nomeRazaoSocial: Sequelize.STRING,
    sobrenomeFantasia: Sequelize.STRING,
    senha: Sequelize.STRING,
    dataNascimentoConstituicao: Sequelize.STRING,
    rgInscricaoEstadual: Sequelize.STRING
}, { timestamps: false });

module.exports = Usuario;