const Scope = require("../../helpers/scope");

module.exports = {
    cadastrar,
    alterar,
    alterarSenha,
    esqueceuSenha
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

function alterarSenha(usuario) {
    const scope = new Scope(usuario);

    scope
        .field('senha').isNotNull()
        .field('confirmarSenha').isNotNull()
        .end();

    if(usuario.senha != usuario.confirmarSenha)
        throw { statusCode: 400, messages: "Senhas incompatíveis" };
}

function esqueceuSenha(usuario) {
    const scope = new Scope(usuario);

    scope
        .field('email').isNotNull()
        .end()
}