const { Sequelize } = require("../../../config/sequelize"),
    Usuario = require("./usuarioModel");

module.exports = {
    selecionar,
    buscar,
    cadastrar,
    alterar,
    buscarUsuarioEmailCpfCnpj
}

async function selecionar(query) {
    return Usuario.findAndCountAll({
        offset: (query.pagina - 1) * query.quantidade,
        limit: query.quantidade
    });
}

async function buscar(id) {
    return Usuario.findById(id);
}

async function cadastrar(usuario) {
    await Usuario.create({
        cpfCnpj: usuario.cpfCnpj,
        tipoPessoa: usuario.tipoPessoa,
        email: usuario.email,
        nomeRazaoSocial: usuario.nomeRazaoSocial,
        sobrenomeFantasia: usuario.sobrenomeFantasia,
        senha: usuario.senha,
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
    return Usuario.findOne({ 
        where: { 
            [Sequelize.Op.or]: [
                { email: usuario.email }, 
                { cpfCnpj: usuario.cpfCnpj }
            ]
        } 
    });
}