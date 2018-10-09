const { Sequelize } = require("../../../config/sequelize"),
    Usuario = require("./usuarioModel");

module.exports = {
    selecionar,
    buscar,
    buscarSenha,
    cadastrar,
    alterar,
    buscarUsuarioEmailCpfCnpj,
    alterarSenha,
    esqueceuSenha
}

async function selecionar(query) {
    return Usuario.findAndCountAll({
        attributes: { exclude: ['senha'] },
        offset: (query.pagina - 1) * query.quantidade,
        limit: query.quantidade
    });
}

async function buscar(id) {
    let retorno = await Usuario.findOne({
        attributes: { exclude: ['senha'] },
        where: { id: id }
    });

    return retorno ? retorno.dataValues : null;
}

async function buscarSenha(id) {
    let retorno = await Usuario.findOne({
        attributes: ['senha'],
        where: { id: id }
    });

    return retorno ? retorno.dataValues.senha : null;
}

async function cadastrar(usuario) {
    await Usuario.create({
        cpfCnpj: usuario.cpfCnpj,
        tipoPessoa: usuario.tipoPessoa,
        email: usuario.email,
        nomeRazaoSocial: usuario.nomeRazaoSocial,
        sobrenomeFantasia: usuario.sobrenomeFantasia,
        senha: usuario.senha,
        senhaTemporaria: false,
        dataNascimentoConstituicao: usuario.dataNascimentoConstituicao,
        rgInscricaoEstadual: usuario.rgInscricaoEstadual
    });
}

async function alterar(id, usuario) {
    await Usuario.update({
        cpfCnpj: usuario.cpfCnpj,
        tipoPessoa: usuario.tipoPessoa,
        email: usuario.email,
        nomeRazaoSocial: usuario.nomeRazaoSocial,
        sobrenomeFantasia: usuario.sobrenomeFantasia,
        dataNascimentoConstituicao: usuario.dataNascimentoConstituicao,
        rgInscricaoEstadual: usuario.rgInscricaoEstadual
    }, { where: { id: id } });
}

async function buscarUsuarioEmailCpfCnpj(usuario) {
    let retorno = await Usuario.findOne({
        attributes: { exclude: ['senha'] },
        where: { 
            [Sequelize.Op.or]: [
                { email: usuario.email }, 
                { cpfCnpj: usuario.cpfCnpj }
            ]
        } 
    });

    return retorno ? retorno.dataValues: null;
}

async function alterarSenha(id, senha) {
    await Usuario.update({
        senha: senha,
        senhaTemporaria: false
    }, { where: { id: id } });
}

async function esqueceuSenha(id, senha) {
    await Usuario.update({
        senha: senha,
        senhaTemporaria: true
    }, { where: { id: id } });
}