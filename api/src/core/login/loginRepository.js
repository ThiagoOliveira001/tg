const { Sequelize } = require("../../../config/sequelize"),
    Usuario = require("../usuario/usuarioModel");

module.exports = {
    login
}

async function login(usuario) {
    let retorno = await Usuario.findOne({
        attributes: ['id', 'nomeRazaoSocial', 'sobrenomeFantasia', 'senhaTemporaria'],
        where: {
            email: usuario.email,
            senha: usuario.senha
        }
    });

    return retorno ? retorno.dataValues : null;
}