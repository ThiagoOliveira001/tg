const Scope = require("../../helpers/scope");

module.exports = {
    login,
    alterarSenha,
    esqueceuSenha
}

function login(usuario) {
    const scope = new Scope(usuario);

    scope
        .field('email').isNotNull()
        .field('senha').isNotNull()
        .end();
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