const Scope = require("../../helpers/scope");

module.exports = {
    isValid,
    alterarSenha,
    esqueceuSenha
}

function isValid(login) {
    const scope = new Scope(login);

    scope
        .field().isNotNull()
        .field().isNotNull()
        .end()
}

function alterarSenha(usuario) {
    const scope = new Scope(usuario);

    scope
        .field('senha').isNotNull()
        .field('confirmarSenha').isNotNull()
        .end()

    if(usuario.senha != usuario.confirmarSenha)
        throw { statusCode: 400, message: "Senhas incompatíveis" };
}

function esqueceuSenha(usuario) {
    const scope = new Scope(usuario);

    scope
        .field('email').isNotNull()
        .end()
}