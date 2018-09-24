const Scope = require("../../helpers/scope");

module.exports = {
    cadastrar,
    alterar
}

function cadastrar(usuario) {
    const scope = new Scope(usuario);

    scope
        .field('cpfCnpj').isCpfCnpj()
        .field('tipoPessoa').isNotNull()
        .field('email').isNotNull()
        .field('nomeRazaoSocial').isNotNull()
        .field('sobrenomeFantasia').isNotNull()
        .field('senha').isNotNull()
        .field('dataNascimentoConstituicao').isNotNull()
        .field('rgInscricaoEstadual').isNotNull()
        .end()

    if (usuario.senha != usuario.confirmarSenha)
        throw { statusCode: 400, message: "Senhas não conferem" };

    if (usuario.email != usuario.confirmarEmail)
        throw { statusCode: 400, message: "Emails não conferem" };
}

function alterar(usuario) {
    const scope = new Scope(usuario);

    scope
        .field('cpfCnpj').isCpfCnpj()
        .field('tipoPessoa').isNotNull()
        .field('email').isNotNull()
        .field('nomeRazaoSocial').isNotNull()
        .field('sobrenomeFantasia').isNotNull()
        .field('dataNascimentoConstituicao').isNotNull()
        .field('rgInscricaoEstadual').isNotNull()
        .end()
}